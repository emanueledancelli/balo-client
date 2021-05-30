import axios from "axios";

// original api URL
//axios.defaults.baseURL = "https://api.balotta.co/wp-json/wp/v2";

// mockdata api URL
axios.defaults.baseURL = "https://60b257c862ab150017ae1fdc.mockapi.io/api/v1/";

export const getAllEvents = () => axios.get("/balo-events");

export const getSingleEvent = id => axios.get(`/balo-events/${id}`);

export const getAllPlaces = () => axios.get("/balo-places");

export const getSinglePlace = id => axios.get(`/balo-places/${id}`);

export const getFavEvents = ids => axios.all(ids.map(e => getSingleEvent(e)));
