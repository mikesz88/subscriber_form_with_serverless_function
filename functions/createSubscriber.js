const axios = require('axios');
const formattedReturn = require('./formattedReturn');
require('dotenv').config();

const API_URL = process.env.CONVERTKIT_API_URL;
const FORM_ID = process.env.FORM_ID;
const createSubscriberURL = `${API_URL}forms/${FORM_ID}/subscribe`
const apiKey = process.env.CONVERTKIT_API_KEY;

const headers = {
  "Content-Type": "application/json"
}

const createSubscriber = async (event) => {
  console.log(event.body);
  const eventBody = JSON.parse(event.body);
  const body = {
    api_key: apiKey,
    email: eventBody.email,
    first_name: eventBody.firstName,
    fields: {
      last_name: eventBody.lastName,
      phone: eventBody.phone
    }
  }
  try {
    const response = await axios.post(createSubscriberURL, body, { headers });
    return formattedReturn(200, response.data);
  } catch (error) {
    throw error;
  }
}

module.exports = createSubscriber;