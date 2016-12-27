import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    tasks: Immutable.Map({}),
    editProjectId: null
});

export default (state = defaultState, { type/*, payload*/ }) => {
    switch (type) {
        default:
            return state;
    }
};