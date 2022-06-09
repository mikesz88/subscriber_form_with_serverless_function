const formattedReturn = require('./formattedReturn');
const findSubscriber = require('./findSubscriber');
const createSubscriber = require('./createSubscriber');
const find = require('./find');

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    return await findSubscriber(event);
  } else if (event.httpMethod === 'POST') {
    return await createSubscriber(event);
  } else if (event.httpMethod === 'PUT') {
    return await find(event);
  } else {
    return formattedReturn(405, {});
  }
}