/**
 * fetch + JSON parsing with one consistent error shape.
 * Throws an Error that carries the HTTP `status` when the response is not ok.
 */
export const request = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    const error = new Error(`Request failed with status ${response.status}`);
    error.status = response.status;
    throw error;
  }

  // 204 No Content has no body to parse.
  return response.status === 204 ? null : response.json();
};
