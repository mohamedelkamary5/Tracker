import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get, post, postFromData } from '../../api/axios'
import swal from 'sweetalert';
// get data clints drivers
export const getOrders = createAsyncThunk('orders/getOrders', async (pageId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`orders?page=${pageId}`) 
    return res
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})


// get data clint driver Details
export const getOrdreDetails = createAsyncThunk('orders/getOrdreDetails', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`orders/show/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// send data  driver Details
export const SendOrder = createAsyncThunk("orders/SendOrder", async (dataClint, thunkApi) => {
  const {
    rejectWithValue
  } = thunkApi
  try {
    const response = await postFromData("orders/store", dataClint);
    // const data = res
    // console.log('data added to store', response.data);
    return response.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    // console.log('rejectWithValue(err.message)', dataClint);

    return rejectWithValue(err.message)
  }
})

// changeStatusOrder
export const changeStatusOrder = createAsyncThunk('orders/changeStatusOrder', async (id, thunkAPI) => {
  const {
    rejectWithValue
  } = thunkAPI

  try {
    const res = await get(`orders/status/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})

// deleteDriver
export const deleteDriver = createAsyncThunk('orders/deleteDriver', async (id, thunkAPI) => {
  const {
    rejectWithValue
  } = thunkAPI

  try {
    const res = await post(`orders/destroy/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})


// handleListView
export const handleListView = createAsyncThunk('orders/handleListView', (status) => {

  return status

})


export const OrdersRestauantsSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],    
    orderDetails: {},
    error: null,
    listView: true,
    meta: 0
  },
  extraReducers: {

    //get clint drivers
    [getOrders.pending]: (state, action) => {
      state.error = null;
    },
    [getOrders.fulfilled]: (state, action) => {
      state.orders = action.payload.data;
      state.meta= action.payload.meta;
    },
    [getOrders.rejected]: (state, action) => {
      state.error = action;
      // console.log('action', action);
    },
    [handleListView.fulfilled]: (state, action) => {
      state.listView = action.payload
    },



    //get Driver Details
    [getOrdreDetails.pending]: (state, action) => {
      state.error = null;
    },
    [getOrdreDetails.fulfilled]: (state, action) => {
      state.orderDetails = action.payload;
    },
    [getOrdreDetails.rejected]: (state, action) => {
      state.error = action;
      // console.log(action);
    },
  
    // SendOrder  
    [SendOrder.pending]: (state, action) => {
      state.error = null;
    },
    [SendOrder.fulfilled]: (state, action) => {
      state.orders.push(action.payload);
      state.total = state.total + 1;
    },
    [SendOrder.rejected]: (state, action) => {
      state.error = action.payload;
      // console.log(action);
    },
    [deleteDriver.fulfilled]: (state, action) => {
      // state.isLoading = false;
      const filter = state.orders.filter(orders => orders.id != action.meta.arg.id);
      state.orders = filter
      state.total = state.total - 1;
      // console.log('filter', filter);
      // console.log('action form fulfilled', action.meta.arg);
    },
    [changeStatusOrder.fulfilled]: (state, action) => {      
      // state.isLoading = false;
      // const filter = state.clients2.filter(client => client.id != action.meta.arg.id);
      // state.clients2 = filter
      // // console.log('filter', filter);
      // // console.log('action form fulfilled', action.meta.arg);
    },


  },

})






// Action creators are generated for each case reducer function


export default OrdersRestauantsSlice.reducer