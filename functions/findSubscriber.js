const axios = require('axios');
const formattedReturn = require('./formattedReturn');
require('dotenv').config();

const API_URL = process.env.CONVERTKIT_API_URL;
const apiSecretKey = process.env.CONVERTKIT_API_SECRET_KEY;
const getSubscriberURL = `${API_URL}subscribers?api_secret=${apiSecretKey}&email_address=`;

const headers = {
  "Content-Type": "application/json"
}

const findSubscriber = async (event) => {
  const email = event.rawQuery.split('=')[1]
  try {
    const response = await axios.get(`${getSubscriberURL}${email}`, { headers })
    return formattedReturn(200, response.data.subscribers);
  } catch (error) {
    throw error;
  }
}

module.exports = findSubscriber;