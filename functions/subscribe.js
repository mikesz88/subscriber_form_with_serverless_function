const formattedReturn = require('./formattedReturn');
const getSubscriber = require('./getSubscriber');
const createSubscriber = require('./createSubscriber');
const deleteSubscriber = require('./deleteSubscriber');

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    return await getSubscriber(event);
  } else if (event.httpMethod === 'POST') {
    return await createSubscriber(event);
  } else if (event.httpMethod === 'DELETE') {
    return await deleteSubscriber(event);
  } else {
    return formattedReturn(405, {});
  }
}