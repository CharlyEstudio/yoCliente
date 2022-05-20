// Constants
const TIME_ZONE = 'TIME_ZONE';

const d = new Date,
    dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');

export const timeZone = () => ({
    type: TIME_ZONE,
    payload: dformat,
});

export default (state = [], action) => {
    switch(action.type) {
        case TIME_ZONE:
            return action.payload;
        default:
            return state;
    }
}