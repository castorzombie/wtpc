import axios from 'axios';
import { SHOW_PARKS, SHOW_PARK, ADD_PARK, DELETE_PARK } from './types';

export const showParks = () => async dispatch => {
    const response = await axios.get('http://localhost:3001/parks');
    dispatch({
        type: SHOW_PARKS,
        payload: response.data
    });
};

export const showPark = id => async dispatch => {
    const response = await axios.get(`http://localhost:3001/parks/${id}`);
    dispatch({
        type: SHOW_PARK,
        payload: response.data
    });
};

export const deletePark = id => async dispatch => {
    await axios.delete(`http://localhost:3001/parks/${id}`);
    dispatch({
        type: DELETE_PARK,
        payload: id
    });
};

export const addPark = park => async dispatch => {
    const response = await axios.post('http://localhost:3001/parks', park);
    dispatch({
        type: ADD_PARK,
        payload: response.data
    });
};