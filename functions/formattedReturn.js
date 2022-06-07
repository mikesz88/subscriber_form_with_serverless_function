const formattedReturn = (statusCode, body) => {
  return {
  statusCode,
  body: JSON.stringify(body)
  }
}

export default formattedReturn;