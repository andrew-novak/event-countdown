import {
  EVENT_ADD,
  EVENT_DELETE,
} from 'constants/actionTypes';

const initialState = [
  {
    id: 0,
    title: 'First event',
    date: '2020-12-03T22:10:33',
  },
  {
    id: 1,
    title: 'Second event',
    date: '2021-03-04T13:44:33',
  },
  {
    id: 2,
    title: 'Third event',
    date: '2022-09-23T15:13:39',
  },
  {
    id: 3,
    title: '4th event',
    date: '2022-09-23T15:13:39',
  },
  {
    id: 4,
    title: '5th event',
    date: '2022-09-23T15:13:39',
  },
];

export default (state = initialState, action) => {
  switch (action.type) {

    case EVENT_ADD: {
      console.log('Add Event');
      const { title, date } = action;
      const newState = state;
      newState.push({ id: 99, title, date });
      return newState;
    }

    case EVENT_DELETE: {
      const { id } = action;
      const newState = state.filter(obj => obj.id !== id);
      return newState;
    }

    default:
      return state;

  }
};
