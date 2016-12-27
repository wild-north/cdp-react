import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    tasks: Immutable.Map({}),
    progress: 30,
    isSidebarOpen: true
});

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case 'SET_PROGRESS':
            return setProgress(state, payload);
        case 'OPEN_SIDEBAR':
            return openSidebar(state);
        case 'CLOSE_SIDEBAR':
            return closeSidebar(state);
        default:
            return state;
    }
};


function setProgress(state, value) {
    return state.set('progress', value);
}
function openSidebar(state) {
    return state.set('isSidebarOpen', true);
}
function closeSidebar(state) {
    return state.set('isSidebarOpen', false);
}