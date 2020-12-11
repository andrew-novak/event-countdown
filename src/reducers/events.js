import { DELETE_EVENT } from 'constants/actionTypes';

const initialState = [
  {
    id: 0,
    title: 'First event',
    deadline: '2020-12-03T22:10:33',
  },
  {
    id: 1,
    title: 'Second event',
    deadline: '2021-03-04T13:44:33',
  },
  {
    id: 2,
    title: 'Third event',
    deadline: '2022-09-23T15:13:39',
  },
  {
    id: 3,
    title: '4th event',
    deadline: '2022-09-23T15:13:39',
  },
  {
    id: 4,
    title: '5th event',
    deadline: '2022-09-23T15:13:39',
  },
];

export default (state = initialState, action) => {
  switch (action.type) {

    case DELETE_EVENT:
      const { id } = action;
      const newState = state.filter(obj => obj.id !== id);
      return newState;

    default:
      return state;

  }
};
