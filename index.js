import express from 'express';
import cors from 'cors';
import {reversGeoCoding} from './reverse-geo-coding.js';


const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/reverse', reversGeoCoding);


  app.listen(5000, () => {
    console.log('runnig at port 5000...');
  });