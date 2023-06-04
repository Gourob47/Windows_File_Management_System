import { createSlice } from "@reduxjs/toolkit";
const route= localStorage.getItem('path')!==null?JSON.parse(localStorage.getItem('path')):[];
const initialState = {



  folders: [],
  files: [],
  path: [],
  name:['root'],
  
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    product: (state, action) => {
      state.product = action.payload;
    },
    cfold:(state,action)=>{
          state.folders.push(action.payload);
    },
    fold: (state, action) => {
      const { payload } = action;
      state.folders=action.payload.folder;
     

    },
    directory: (state, action) => {
      const { payload } = action;
      state.path=action.payload;
     
    },
    setName:(state,action)=>{
       state.name=action.payload;
    },
    getFiles: (state, action) => {
      
      state.files=action.payload;
    },
    foldersFile:(state,action)=>{
     
      state.files.push(action.payload)
    },

    editFold: (state, action) => {
      const { payload } = action;

      const folder = state.folders.find((item) => item.id == payload.id);
      if (folder) {
        folder.foldername = payload.foldername;
      }
    },
    deleteFold: (state, action) => {
      const { payload } = action;

      state.folders = state.folders.filter((item) => item.id !== payload.id);
    },
    
  },
});

export const {
  setName,
  getFiles,
  cfold,
  fold,
  editFold,
  deleteFold,
  foldersFile,
  directory,

} = testSlice.actions;
export default testSlice.reducer;
