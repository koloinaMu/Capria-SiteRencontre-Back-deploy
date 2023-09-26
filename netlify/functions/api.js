// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

//import express, { Router } from 'express';
const express, { Router }=require('express')
//import serverless from 'serverless-http';
const serverless = require('serverless-http')

const api = express();

const router = Router();
router.get('/hello', (req, res) => res.send('Hello World!'));

api.use('/api/', router);

const handler = serverless(api);
module.exports=handler
