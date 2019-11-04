async function callAPI(url, method, body) {
  const response = await fetch(url, {
    method,
    body
  });
  return await response.json();
}

export default callAPI;
