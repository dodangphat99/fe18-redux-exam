import { TODOLIST_ACTION } from '../constants';

const initialState = {
    taskList:[]
    }
    
    function toDoListReducer(state = initialState, action) {
      switch (action.type) {
        case 'GET_TASK': {
          return state;
        }
        case TODOLIST_ACTION.CREATE_TASK: {
          return {
            ...state,
            taskList: [
              action.payload,
              ...state.taskList,
            ],
          }
        }
        case TODOLIST_ACTION.DELETE_TASK: {
          const newTaskList = state.taskList;
          newTaskList.splice(action.payload,1);
          return {
            ...state,
            taskList:[
              ...newTaskList
            ]
          }
        }
        case TODOLIST_ACTION.EDIT_TASK: {
          const newTaskList = state.taskList;
          newTaskList.splice(action.payload.index,1,action.payload.values);
          return {
            ...state,
            taskList:[
              ...newTaskList
            ]
          }
        }
        default:
          return state;
      }
    }
    
    export default toDoListReducer;