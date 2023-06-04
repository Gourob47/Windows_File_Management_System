import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteFold, directory, editFold, fold, getFiles } from "./TestSlice";
const SingleFolder = (props) => {
  const [foldernm, setFoldernm] = useState("");

  const dispatch = useDispatch();

  const { id,foldername} = props.item;

  async function editFolder(e, foldername, id) {
    const userData = { foldername, id };
    const response = await axios.post(
      "http://localhost:3333/folderedit",
      userData,
      {
        withCredentials: true,
      }
    );
    if (response.status == 200) {
      dispatch(editFold(response.data));
      setFoldernm("");
    }
  }

  async function deleteFolder(e, id) {
    const userData = { id };
    const response = await axios.post(
      "http://localhost:3333/folderdelete",
      userData,
      {
        withCredentials: true,
      }
    );
    if (response.status == 200) {
      dispatch(deleteFold(response.data));
    }
  }

  async function handleCreate(e,key){
    e.preventDefault();
    const foldername='newfolder';
    const item={foldername,key}
    const response= await axios.post('http://localhost:3333/foldercreate',item,{
     withCredentials:true
    })
    if(response.status==200)
    {
     dispatch(fold(response.data));
     dispatch(directory(key));
    }
 
   }

    async function handleGo(e,key){
    e.preventDefault();


    const response1= await axios.get(`http://localhost:3333/getall/${key}`)
    if(response1.status==200)
    {
     dispatch(fold(response1.data));
     dispatch(directory(key));
    }
   
  }

  // async function handleGet(id) {


  //   const response1 = await axios.get(`http://localhost:3333/getall/${id}`);
  //   if (response1.status == 200) {
  //     dispatch(directory(response1.data.path));
  //     dispatch(fold(response1.data));
  //     getFile(id);
  //   }

  // }

  // async function getFile(id) {
  //   const response = await axios.get(`http://localhost:3333/getfile/${id}`, {
  //     withCredentials: true,
  //   });
  //   if (response.status == 200) {
  //     dispatch(getFiles(response.data));
  //   }
  // }

  // useEffect(()=>{
  //   handleGet(id);
  // },[])


  





  return (
    <>

       

      <input
        type="text"
        id="name"
        value={foldernm}
        onChange={(e) => setFoldernm(e.target.value)}
        placeholder="Change Folder Name"
      />
      <button onClick={(e) => editFolder(e, foldernm, id)}> Edit</button>
      <button onClick={(e) => deleteFolder(e, id)}> Delete</button>
    </>
  );
};

export default SingleFolder;
