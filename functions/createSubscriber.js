import axios from 'axios';
import formattedReturn from './formattedReturn';
const dotenv = require('dotenv');

dotenv.config({path: '../config.env' });

const API_URL = process.env.CONVERTKIT_API_URL;
const FORM_ID = process.env.FORM_ID;
const CreateSubscriberAPI = `${API_URL}forms/${FORM_ID}/subscribe`
const apiKey = process.env.CONVERTKIT_API_KEY;

const headers = {
  "Content-Type": "application/json"
}


const createSubscriber = async (event) => {
  event.body = JSON.parse(event.body);
  const body = {
    "api_key": apiKey,
    "email": event.body.email,
    "firstName": event.body.firstName,
    "lastName": event.body.lastName,
    "phone": event.body.phone
  }
  try {
    const response = await axios.post(CreateSubscriberAPI, body, { headers })
    return formattedReturn(200, response);
  } catch (error) {
    throw error;
  }
}

export default createSubscriber;