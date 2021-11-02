const initState = {
  type: 'info',
  trace: '00125'
};
const logReducer = (state = initState, action: any): any => {
  const type = action.type;
  switch (type) {
    case 'UPDATE': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default logReducer;
