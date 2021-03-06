import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get, post, postFromData } from '../../api/axios'
import swal from 'sweetalert';
// get data clints drivers
export const getDrivers = createAsyncThunk('driversRestaurant/getDrivers', async (pageId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`restaurants/drivers?page=${pageId}`)
    return res
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
export const searchDrivers = createAsyncThunk('driversRestaurant/searchDrivers', async (search, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`restaurants/drivers/search?search=${search}`)
    return res
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// get data Active drivers
export const getActiveDrivers = createAsyncThunk('driversRestaurant/getActiveDrivers', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get('restaurants/drivers/active')
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})


// get data clint driver Details
export const getDriverDetails = createAsyncThunk('driversRestaurant/getDriverDetails', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`restaurants/drivers/show/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// send data  driver Details
export const SendDirver = createAsyncThunk("driversRestaurant/SendDirver", async (dataClint, thunkApi) => {
  const {
    rejectWithValue
  } = thunkApi
  try {
    const response = await postFromData("restaurants/drivers/store", dataClint);
    return response
  } catch (err) {
    return rejectWithValue(err)
  }
})

// changeStatusDriver
export const changeStatusDriver = createAsyncThunk('driversRestaurant/changeStatusDriver', async (id, thunkAPI) => {
  const {
    rejectWithValue
  } = thunkAPI

  try {
    const res = await get(`restaurants/drivers/status/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})

// deleteDriver
export const deleteDriver = createAsyncThunk('driversRestaurant/deleteDriver', async (id, thunkAPI) => {
  const {
    rejectWithValue
  } = thunkAPI

  try {
    const res = await post(`restaurants/drivers/destroy/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})


// handleListView
export const handleListView = createAsyncThunk('driversRestaurant/handleListView', (status) => {

  return status

})


export const DriverSlice = createSlice({
  name: 'driversRestaurant',
  initialState: {
    driversRestaurant: [],
    activeDrivers: [],
    driverDetails: {},
    error: null,
    listView: true,
    meta: {}
  },
  extraReducers: {

    //get clint drivers
    [getDrivers.pending]: (state, action) => {
      state.error = null;
    },
    [getDrivers.fulfilled]: (state, action) => {
      state.driversRestaurant = action.payload.data;
      state.meta = action.payload.meta;
    },
    [getDrivers.rejected]: (state, action) => {
      state.error = action;
      // console.log('action', action);
    },
    //get clint drivers
    [searchDrivers.pending]: (state, action) => {
      state.error = null;
    },
    [searchDrivers.fulfilled]: (state, action) => {
      state.driversRestaurant = action.payload.data;
      state.meta = action.payload.meta;
    },
    [searchDrivers.rejected]: (state, action) => {
      state.error = action;
      // console.log('action', action);
    },
    [handleListView.fulfilled]: (state, action) => {
      state.listView = action.payload
    },



    //get Driver Details
    [getDriverDetails.pending]: (state, action) => {
      state.error = null;
    },
    [getDriverDetails.fulfilled]: (state, action) => {
      state.driverDetails = action.payload;
    },
    [getDriverDetails.rejected]: (state, action) => {
      state.error = action;
      // console.log(action);
    },
    //getActiveDrivers
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
    // // SendDirver  
    // [SendDirver.pending]: (state, action) => {
    //   state.error = null;
    // },
    // [SendDirver.fulfilled]: (state, action) => {
    //   state.drivers.push(action.payload.data);
    //   state.meta = state.meta.total + 1;
    // },
    // [SendDirver.rejected]: (state, action) => {
    //   const errors = action.payload.response.data.errors
    //   state.error = errors;
    //   console.log('errors', errors);

    //   const errorArray = []

    //   for (const error in errors) {
    //     console.log(`${error}: ${errors[error]}`);
    //     errorArray.push(errors[error])
    //   }


    //   swal(errorArray.join().replaceAll('.,', '  ///   '), {
    //     icon: "error",
    //     button: '??????????'
    //   });
    // },
    // [deleteDriver.fulfilled]: (state, action) => {
    //   // state.isLoading = false;
    //   const filter = state.drivers.filter(drivers => drivers.id != action.meta.arg.id);
    //   state.drivers = filter
    //   state.meta = state.meta.total - 1;
    //   // console.log('filter', filter);
    //   // console.log('action form fulfilled', action.meta.arg);
    // },
    // [changeStatusDriver.fulfilled]: (state, action) => {
    //   // state.isLoading = false;
    //   // const filter = state.clients2.filter(client => client.id != action.meta.arg.id);
    //   // state.clients2 = filter
    //   // // console.log('filter', filter);
    //   // // console.log('action form fulfilled', action.meta.arg);
    // },


  },

})






// Action creators are generated for each case reducer function


export default DriverSlice.reducer