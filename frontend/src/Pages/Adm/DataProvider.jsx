import jsonServerProvider from 'ra-data-json-server';

const apiUrl = "http://localhost:2000";
export const dataProvider = jsonServerProvider(apiUrl);

console.log("Data Provider Initialized with URL:", apiUrl);

