export const setProgress = (state, value) => Object.assign({}, state, {progress: value});

export const openSidebar = (state) => Object.assign({}, state, {isSidebarOpen: true});

export const closeSidebar = (state) => Object.assign({}, state, {isSidebarOpen: false});