//In contrast, the taskReducer.js file is one of the individual reducers that will be combined in the root reducer.
const initialState = {
  tasks: [],
};

//we define a reducer function that takes two arguments: state and action.
//the state argument represents the current state of the application,while the action argument represents the action being dispatched to update the state.

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload), //the reducer returns a new state object with the current tasks filtered to remove the task with the specified id
      };
    default:
      return state;
  }
};
export default taskReducer;
