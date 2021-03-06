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
export const searchOrders = createAsyncThunk('orders/searchOrders', async (search, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`orders/search?search=${search}`) 
    return res
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err)
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
    return response.data
  } catch (err) {

    return rejectWithValue(err)
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
    meta: {}
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
    //get clint drivers
    [searchOrders.pending]: (state, action) => {
      state.error = null;
    },
    [searchOrders.fulfilled]: (state, action) => {
      state.orders = action.payload.data;
      state.meta= action.payload.meta;
    },
    [searchOrders.rejected]: (state, action) => {
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
      const errors = action.payload.response.data.errors
      state.error = errors;
      // const errorArray = []

      // for (const error in errors) {
      //   errorArray.push(errors[error])
      // }


      // swal(errorArray.join().replaceAll('.,', '  ///   '), {
      //   icon: "error",
      //   button: '??????????'
      // });
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