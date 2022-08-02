import React,{useEffect, useState,useContext} from 'react'
import ImageUpload from '../components/ImageUpload'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { AuthContext } from '../authcontext/AuthContext';
import axios from 'axios';
import './Detect.css'
import cogoToast from 'cogo-toast';

const Detect = () => {
  const [imgdata,setimgdata]=useState(null)
  const [bird,setbird]=useState(null)
  const auth=useContext(AuthContext)



   const uploadcloudinaryapi =async(postdata) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
       
      },
    };
    try{
      //console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .post(`https://api.cloudinary.com/v1_1/dcthzdphw/upload`, postdata) 
        return resdata.data
    }catch(err){
        console.log(err.response)
        
    }
  };

  const destroyimage =async(postdata) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
       
      },
    };
    try{
      //console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .post(`https://api.cloudinary.com/v1_1/dcthzdphw/destroy`, postdata) 
        return resdata.data
    }catch(err){
        console.log(err.response)
        
    }
  };

  const predictimage =async(url) => {
    console.log(url)
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
       
      },
    };
    const postObj={
      imgurl:url
    }
    try{
      //console.log(process.env.REACT_APP_BACKEND_URL)
        const resdata=await axios
        .post(`https://4cbd-34-143-231-69.ngrok.io/predict`,postObj,axiosConfig) 
        return resdata.data
    }catch(err){
        console.log(err.response)
        
    }
  };



  const predictName=async()=>{
    const formdata=new FormData()
    formdata.append("file",imgdata)
    formdata.append("upload_preset","j4zzlyki")
    auth.toogleloading();
    try{
      const data=await uploadcloudinaryapi(formdata)
      console.log(data)
      const birdname=await predictimage(data.secure_url)
      console.log(birdname)
      // if(birdname ===undefined )
      //   throw "err";
      setbird(birdname.prediction.obj)

    //  const deleteFormdata=new FormData()
    //  deleteFormdata.append("public_id",data.public_id)
    //  deleteFormdata.append("signature",data.signature)
    //  const response=await destroyimage(deleteFormdata)

      cogoToast.success('Predicted Successfully',{ position:'top-right',heading:'success',hideAfter:3 });
      auth.toogleloading();
    }catch(err){
      auth.toogleloading();
      cogoToast.error('Something went wrong try again',{ position:'top-right',heading:'Failed',hideAfter:3 });
    }
   

  }

 


  

  return (
    <div className='detect-image-main' >
      <h1>Upload image here for Prediction</h1>
      
      <ImageUpload imgdata={imgdata} setimgdata={setimgdata} loading={auth.loading}  sendRequest={predictName} />
      
        {bird &&  <h4>{bird}</h4> }
    </div>
  )
}

export default Detect