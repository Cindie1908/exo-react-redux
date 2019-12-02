
const addAction1 = {
  type: 'ADD1',
};

const addAction10 = {
  type: 'ADD10',
};

const resetAction = {
  type: 'RESET',
};

const removeAction1 = {
  type: 'REMOVE1',
};

const removeAction10 = {
  type: 'REMOVE10',
};

const lightReducer = (state = 0, action) => {
  switch (action.type) {
      case 'ADD1':
          return state + 1;
      case 'ADD10':
          return state + 10;
      case 'RESET':
          return 0;
      case 'REMOVE1':
          return state - 1;
      case 'REMOVE10':
          return state - 10;
      default:
          return state;
  }
}

export default lightReducer;