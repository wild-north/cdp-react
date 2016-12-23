import Immutable from 'immutable';
import { setProgress, openSidebar, closeSidebar } from '../helpers/reducers/header';

const defaultState = Immutable.fromJS({
    tasks: Immutable.Map({}),
    progress: 30,
    selectedTaskId: null,
    isSidebarOpen: true,
    isProjectEditing: false
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