const axios = require('axios');
const formattedReturn = require('./formattedReturn');
require('dotenv').config();

const API_URL = process.env.CONVERTKIT_API_URL;
const apiSecretKey = process.env.CONVERTKIT_API_SECRET_KEY;
const deleteSubscriberURL = `${API_URL}unsubscribe`

const headers = {
  "Content-Type": "application/json"
}

const find = async (event) => {
  console.log(event);
  const eventBody = JSON.parse(event.body);
  console.log(eventBody);
  const body = {
    api_secret: apiSecretKey,
    email: eventBody.email
  }
  try {
    const response = await axios.put(deleteSubscriberURL, body, { headers })
    return formattedReturn(200, response.data);
  } catch (error) {
    throw error;
  }
}

module.exports = find;