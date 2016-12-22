import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    tasks: Immutable.Map({

    })
});

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};