import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get, post, postFromData } from '../api/axios'
import swal from 'sweetalert';
// get data clints Shipping
export const getShipping = createAsyncThunk('shipping/getShipping', async (pageId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`users?page=${pageId}`)
    console.log('res.data', res.data.length);
    return res
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// get data clints Shipping
export const SearchShipping = createAsyncThunk('shipping/SearchShipping', async (search, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`users/search?search=${search}`)
    console.log('res.data', res.data.length);
    return res
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// get data clint Shipping Details
export const getShippingDetails = createAsyncThunk('shipping/getShippingDetails', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`users/show/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// send Shipping clint 


export const SendShipping = createAsyncThunk("shipping/SendShipping", async (dataClint, thunkApi) => {
  const { rejectWithValue } = thunkApi
  try {
    const response = await postFromData("users/store", dataClint);
    return response
  } catch (err) {
    // console.log('rejectWithValue(err.message)', dataClint);

    return rejectWithValue(err)
  }
})


// changeStatusShipping
export const changeStatusShipping = createAsyncThunk('shipping/changeStatusShipping', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`users/status/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})

// deleteShipping
export const deleteShipping = createAsyncThunk('shipping/deleteShipping', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`users/destroy/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})


// handleListView
export const handleListView = createAsyncThunk('shipping/handleListView', (status) => {

  return status

})




export const ShippingSlice = createSlice({
  name: 'shipping',
  initialState: {
    shipping: [],
    ShippingDetailsDetails: {},
    listView: true,
    error: null,
    meta: {}
  },
  extraReducers: {

    //get clint 
    [getShipping.pending]: (state, action) => {
      // state.error = null;
    },
    [getShipping.fulfilled]: (state, action) => {
      state.shipping = action.payload.data;
      state.meta = action.payload.meta;
    },
    [getShipping.rejected]: (state, action) => {
      state.error = action;
    },
    //get clint 
    [SearchShipping.pending]: (state, action) => {
      // state.error = null;
    },
    [SearchShipping.fulfilled]: (state, action) => {
      state.shipping = action.payload.data;
      state.meta = action.payload.meta;
    },
    [SearchShipping.rejected]: (state, action) => {
      state.error = action;
      state.shipping = [];
    },


    [handleListView.fulfilled]: (state, action) => {
      state.listView = action.payload
    },

    //get clint Details
    [getShippingDetails.pending]: (state, action) => {
      // state.error = null;
    },
    [getShippingDetails.fulfilled]: (state, action) => {
      state.ShippingDetailsDetails = action.payload;
    },
    [getShippingDetails.rejected]: (state, action) => {
      state.error = action;
      // console.log(action);
    },
    //send data clint  
    [SendShipping.pending]: (state, action) => {
      // state.error = null;
    },
    [SendShipping.fulfilled]: (state, action) => {
      state.shipping.push(action.payload.data);
      state.meta.total = state.meta.total + 1;
      console.log('action fulfilled', action.payload);
    },
    [SendShipping.rejected]: (state, action) => {
      const errors = action.payload.response.data.errors
      state.error = errors;

      // const errorArray = []

      // for (const error in errors) {
      //   console.log(`${error}: ${errors[error]}`);
      //   errorArray.push(errors[error])
      // }


      // swal(errorArray.join().replaceAll('.,', '  ///   '), {
      //     icon: "error",
      //     button: 'موافق'
      //   });

    },


    [changeStatusShipping.fulfilled]: (state, action) => {
      // state.isLoading = false;
      const filter = state.shipping.filter(shipping => shipping.id != action.meta.arg.id);
      state.shipping = filter
      // console.log('filter', filter);
      // console.log('action form fulfilled', action.meta.arg);
    },
    [deleteShipping.fulfilled]: (state, action) => {
      // state.isLoading = false;
      const filter = state.shipping.filter(shipping => shipping.id != action.meta.arg.id);
      state.shipping = filter
      state.total = state.total - 1;
      // console.log('filter', filter);
      // console.log('action form fulfilled', action.meta.arg);
    },


  },

})






// Action creators are generated for each case reducer function


export default ShippingSlice.reducer