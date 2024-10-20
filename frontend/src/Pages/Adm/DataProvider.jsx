import jsonServerProvider from 'ra-data-json-server';

const apiUrl = "https://satisfacao-de-pacientes-react.vercel.app/";
export const dataProvider = jsonServerProvider(apiUrl);

