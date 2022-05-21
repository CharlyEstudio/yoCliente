const initialState = [
    { id: 1, name: 'Obteniendo clientes...' },
];

// API Mock's Users
const API = 'https://jsonplaceholder.typicode.com/users';

// Constants
const START_SUBMIT = 'START_SUBMIT';
const GET_CUSTOMERS = 'GET_CUSTOMERS';
const ERROR_SUBMIT = 'ERROR_SUBMIT';

export const startSubmit = () => ({
    type: START_SUBMIT,
});

export const getCustomers = (customers) => ({
    type: GET_CUSTOMERS,
    payload: customers
});

export const errorSubmit = error => ({
    type: ERROR_SUBMIT,
    error
});

export default (state = initialState, action) => {
    switch(action.type) {
        case START_SUBMIT:
            return state;
        case GET_CUSTOMERS:
            return action.payload;
        case ERROR_SUBMIT:
            return action.error;
        default:
            return state;
    }
}

export const getCustomersApi = () => async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    dispatch(startSubmit());
    try {
        const response = await fetch(API, { method: 'GET' });
        const json = await response.json();
        dispatch(getCustomers(json));
    } catch(e) {
        dispatch(errorSubmit(e));
    }
};