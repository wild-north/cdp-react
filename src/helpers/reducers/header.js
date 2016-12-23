export const setProgress = (state, value) => state.set('progress', value);
export const openSidebar = (state) => state.set('isSidebarOpen', true);
export const closeSidebar = (state) => state.set('isSidebarOpen', false);