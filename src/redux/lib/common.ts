/* eslint-disable */
export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    const hasTypeProperty = Object.prototype.hasOwnProperty.call(handlers, action.type);
    if (hasTypeProperty) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};
