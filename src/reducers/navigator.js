// Constants
const GO_TO = 'GO_TO';

export const goTo = customer => ({
    type: GO_TO,
    payload: customer,
});

export default (state = [], action) => {
    switch(action.type) {
        case GO_TO:
            return action.payload;
        default:
            return state;
    }
}
