"use client";
import React from 'react'
import useSWR from "swr";
  
const url="https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENTS}/entries?access_token=${process.env.CONTENTFUL_TOKEN}&content_type=article";
const fetcher=(url:string)=> fetch(url).then((res)=>res.json());
  function Client () {
   const{data,error,isLoading}=useSWR(url,fetcher); 
   if(error) return <div>Error</div>
   if(isLoading) return <div>isLoading</div> 
   return (
    <div>
        <h1>Client Page</h1>
      {data.content}
        </div>
  );
}

export default Client