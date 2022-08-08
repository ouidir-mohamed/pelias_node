import express from 'express';
import axios from 'axios';
import {tree} from './kdtree.js'


export const  reversGeoCoding = express.Router();


reversGeoCoding.get('/', async (req, res) => {
    let lat=req.query.lat;
    let lon= req.query.lon;
 
   let response=await axios.get(`http://141.95.162.190:4000/v1/reverse?point.lat=${lat}&point.lon=${lon}&layers=street&size=1`)
   if(response.data.features[0]){
     let name=response.data.features[0].properties.name
     
     const points = tree.nearest(
         {
           lat: lat,
           long: lon,
           
         },
         1
       );
 
       let city= points[0][0].name
   
     return res.status(200).send(
        {found:true,
            name:name+", "+city,
            data:response.data.features[0]});
   }
     res.status(200).send({found:false,name:""});
   });