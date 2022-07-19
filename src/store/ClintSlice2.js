import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Logo2 from "../photo/slogan/slogan1.svg"
import Logo3 from "../photo/slogan/slogan2.svg"
import Logo4 from "../photo/slogan/slogan3.svg"
import { get ,post, postFromData } from '../api/axios'
import swal from 'sweetalert';




// get data clints resturant
export const getClients2 = createAsyncThunk('clients2/getClients2', async (pageId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

     try {
       const res = await get(`restaurants?page=${pageId}`)
     return res
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
  }
})
// get data clints resturant
export const SearchClients2 = createAsyncThunk('clients2/SearchClients2', async (search, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

     try {
       const res = await get(`restaurants/search?search=${search}`)
       console.log('res', res);
     return res
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err)
  }
})




// get data clint Details
export const getClientDetails = createAsyncThunk('clients2/getClientDetails', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

     try {
     const res = await get(`restaurants/show/${id}`)
     return res.data
  } catch (err) {
      return rejectWithValue(err)
  }
})
// send data clint 


export const SendClint = createAsyncThunk("clients2/SendClint" , async (dataClint , thunkApi ) =>{
  const {rejectWithValue} = thunkApi
  try {
    const response = await postFromData("restaurants/store", dataClint);
    return response
 }catch (err) {

  return rejectWithValue(err)
 }
})

// changeStatusClient
export const changeStatusClient = createAsyncThunk('clients2/changeStatusClient', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

     try {
     const res = await get(`restaurants/status/${id}`)
     return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
  }
})

// deleteClient
export const deleteClient = createAsyncThunk('clients2/deleteClient', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

     try {
     const res = await get(`restaurants/destroy/${id}`)
     return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
  }
})


// handleListView
export const handleListView = createAsyncThunk('clients2/handleListView', (status) => {

  return status
  
})









export const ClintSlice = createSlice({
  name: 'clients2',
  initialState: {
    clients2: [],
    clientDetails: {},
    error: null ,
    listView: true,
    meta: 0
    
    },
  extraReducers: {
      //get clint data
        [getClients2.pending]: (state, action) => {
          state.error = null;
        },
        [getClients2.fulfilled]: (state, action) => {
          state.clients2 = action.payload.data;
          state.meta= action.payload.meta;
        },
        [getClients2.rejected]: (state, action) => {
          state.error = action;
          // console.log('action', action);
        },

        [SearchClients2.pending]: (state, action) => {
          state.error = null;
        },
        [SearchClients2.fulfilled]: (state, action) => {
          state.clients2 = action.payload.data;
          state.meta= action.payload.meta;
        },
        [SearchClients2.rejected]: (state, action) => {
          state.error = action;
          state.clients2 = [];
        },



        [handleListView.fulfilled]: (state, action) => {
          state.listView = action.payload
        },
        

      //get clint Details
        [getClientDetails.pending]: (state, action) => {
          state.error = null;
        },
        [getClientDetails.fulfilled]: (state, action) => {
          state.clientDetails = action.payload;
        },
        [getClientDetails.rejected]: (state, action) => {
          state.error = action;
          // console.log(action);
        },
      
      //send data clint  
      [SendClint.pending]: (state, action) => {
        state.error = null;
      },
      [SendClint.fulfilled]: (state, action) => {
        state.clients2.push(action.payload.data);     
        state.total = state.total + 1;
      },
      [SendClint.rejected]: (state, action) => {
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
        //   button: 'موافق'
        // });
      },

     

      [deleteClient.fulfilled]: (state, action) => {
        // state.isLoading = false;
        const filter = state.clients2.filter(client => client.id != action.meta.arg.id);
        state.clients2 = filter
        state.total = state.total - 1;
        // console.log('filter', filter);
        // console.log('action form fulfilled', action.meta.arg);
      },
      [changeStatusClient.fulfilled]: (state, action) => {
        // state.isLoading = false;
        const filter = state.clients2.filter(client => client.id != action.meta.arg.id);
        state.clients2 = filter        
        // console.log('filter', filter);
        // console.log('action form fulfilled', action.meta.arg);
      },
      
    
  },
//   reducer :{
//     handleListView: (state ,action) => {
//       state.listView = !state.listView
//       // console.log('state.listView', state.listView);
         
//   }
// }

})


        
    


// Action creators are generated for each case reducer function
export const { addClint, removeClint, ReturnClint, editClint, addClintBlackList } = ClintSlice.actions

export default ClintSlice.reducer