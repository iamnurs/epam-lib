const fetchAllStations = async () => {
  const headers = {
    Accept: "application/json"
  };

  const params = {
    method: "GET",
    headers
  };

  const response = await fetch("https://api.voltaapi.com/v1/stations", params);
  const result = await response.json();

  return result;
};

export { fetchAllStations, };
