import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get, post, postFromData } from '../api/axios'
import swal from 'sweetalert';

// get data Currency
export const getCurrency = createAsyncThunk('currency/getCurrency', async (pageId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`currency?page=${pageId}`)
    return res
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
export const searchCurrency = createAsyncThunk('currency/searchCurrency', async (pageId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`currency/search?search=${pageId}`)
    return res
  } catch (err) {
    return rejectWithValue(err)
  }
})
// get data Active Currency
export const getActiveDrivers = createAsyncThunk('currency/getActiveDrivers', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get('admins/Currency/active')
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})


// get data Currency Details
export const getCurrencyDetails = createAsyncThunk('currency/getCurrencyDetails', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`currency/show/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// send data  Currency Details
export const SendCurrency = createAsyncThunk("currency/SendCurrency", async (dataClint, thunkApi) => {
  const {
    rejectWithValue
  } = thunkApi
  try {
    const response = await postFromData("currency/store", dataClint);
    return response
  } catch (err) {

    return rejectWithValue(err)
  }
})

// changeStatusCurrency
export const changeStatusCurrency = createAsyncThunk('currency/changeStatusCurrency', async (id, thunkAPI) => {
  const {
    rejectWithValue
  } = thunkAPI

  try {
    const res = await get(`currency/status/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})

// deleteCurrency
export const deleteCurrency = createAsyncThunk('currency/deleteCurrency', async (id, thunkAPI) => {
  const {
    rejectWithValue
  } = thunkAPI

  try {
    const res = await get(`currency/destroy/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})


// handleListView
export const handleListView = createAsyncThunk('currency/handleListView', (status) => {

  return status

})



export const CurrencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencies: [],
    activeDrivers: [],
    CurrencyDetails: {},
    error: null,
    listView: true,
    meta: 0
  },
  extraReducers: {

    //get  Currency
    [getCurrency.pending]: (state, action) => {
      state.error = null;
    },
    [getCurrency.fulfilled]: (state, action) => {
      state.currencies = action.payload.data;
      state.meta = action.payload.meta;
    },
    [getCurrency.rejected]: (state, action) => {
      state.error = action;
      // console.log('action', action);
    },
    //get  Currency
    [searchCurrency.pending]: (state, action) => {
      state.error = null;
    },
    [searchCurrency.fulfilled]: (state, action) => {
      state.currencies = action.payload.data;
      state.meta = action.payload.meta;
    },
    [searchCurrency.rejected]: (state, action) => {
      state.error = action;
      state.currencies = [];
    },
    [handleListView.fulfilled]: (state, action) => {
      state.listView = action.payload
    },



    //get Currency Details
    [getCurrencyDetails.pending]: (state, action) => {
      state.error = null;
    },
    [getCurrencyDetails.fulfilled]: (state, action) => {
      state.CurrencyDetails = action.payload;
    },
    [getCurrencyDetails.rejected]: (state, action) => {
      state.error = action;
      // console.log(action);
    },
    //getActiveCurrency
    [getActiveDrivers.pending]: (state, action) => {
      state.error = null;
    },
    [getActiveDrivers.fulfilled]: (state, action) => {
      state.activeDrivers = action.payload;
    },
    [getActiveDrivers.rejected]: (state, action) => {
      state.error = action;
      // console.log('action', action);
    },

    // SendCurrency
    [SendCurrency.pending]: (state, action) => {
      state.error = null;
    },
    [SendCurrency.fulfilled]: (state, action) => {
      state.currencies.push(action.payload.data);
      state.total = state.total + 1;
    },
    [SendCurrency.rejected]: (state, action) => {
      const errors = action.payload.response.data.errors
      state.error = errors;
      // console.log('errors', errors);

      // const errorArray = []

      // for (const error in errors) {
      //   console.log(`${error}: ${errors[error]}`);
      //   errorArray.push(errors[error])
      // }


      // swal(errorArray.join().replaceAll('.,', '  ///   '), {
      //   icon: "error",
      //   button: '??????????'
      // });
    },

    [deleteCurrency.fulfilled]: (state, action) => {
      // state.isLoading = false;
      const filter = state.clientDrivers.filter(drivers => drivers.id != action.meta.arg.id);
      state.clientDrivers = filter
      state.total = state.total - 1;
      // console.log('filter', filter);
      // console.log('action form fulfilled', action.meta.arg);
    },
    [changeStatusCurrency.fulfilled]: (state, action) => {
      // state.isLoading = false;
      // const filter = state.clients2.filter(client => client.id != action.meta.arg.id);
      // state.clients2 = filter
      // // console.log('filter', filter);
      // // console.log('action form fulfilled', action.meta.arg);
    },


  },

})






// Action creators are generated for each case reducer function


export default CurrencySlice.reducer