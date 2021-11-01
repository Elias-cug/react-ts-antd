const initState = {
  name: 'liyish',
  age: 18,
  email: 'liyish@163.com'
};
const userReducer = (state = initState, action: any): any => {
  const type = action.type;
  switch (type) {
    case 'UPDATE': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
