import React,{useEffect, useState} from 'react'
import ImageUpload from '../components/ImageUpload'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import axios from 'axios';
import './Detect.css'
const Detect = () => {
  const [imgdata,setimgdata]=useState(null)
  const [bird,setbird]=useState(null)

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
        .post(`https://5894-35-230-58-125.ngrok.io/predict`,postObj,axiosConfig) 
        return resdata.data
    }catch(err){
        console.log(err.response)
        
    }
  };



  const predictName=async()=>{
    const formdata=new FormData()
    formdata.append("file",imgdata)
    formdata.append("upload_preset","j4zzlyki")
    try{
      const data=await uploadcloudinaryapi(formdata)
      console.log(data)
      const birdname=await predictimage(data.secure_url)
      console.log(birdname)
      setbird(birdname.prediction.obj)
    }catch(err){
      console.log(err)
    }
   

  }

 


  

  return (
    <div className='detect-image-main' >
      <h1>Upload image here for Prediction</h1>
      
      <ImageUpload setimgdata={setimgdata} sendRequest={predictName} />
      
        {bird &&  <h4>{bird}</h4> }
    </div>
  )
}

export default Detect