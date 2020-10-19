// action types constants
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO_COMPLETION = "TOGGLE_TODO_COMPLETION";
export const TOGGLE_TODO_DELETION = "TOGGLE_TODO_DELETION";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

// initial state
const initialState =
  JSON.parse(localStorage.getItem("todos") || "").todos || [];

// actions
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const toggleTodoCompletion = (index: number) => ({
  type: TOGGLE_TODO_COMPLETION,
  payload: {
    index,
  },
});

export const toggleTodoDeletion = (index: number) => ({
  type: TOGGLE_TODO_DELETION,
  payload: {
    index,
  },
});

export const deleteTodo = (index: number) => ({
  type: DELETE_TODO,
  payload: {
    index,
  },
});

export const editTodo = (index: number, text: string) => ({
  type: EDIT_TODO,
  payload: {
    index,
    text,
  },
});

// reducer
export default function reducer(state = initialState, action: any) {
  let newTodos = [...state];
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        text: action.payload.text,
        isCompleted: false,
        lastModified: Date.now(),
        isDeleted: false,
      };
      newTodos = [newTodo, ...newTodos];
      return newTodos;
    case DELETE_TODO:
      newTodos.splice(action.payload.index, 1);
      return newTodos;
    case EDIT_TODO:
      newTodos[action.payload.index].text = action.payload.text;
      newTodos[action.payload.index].lastModified = Date.now();
      return newTodos;
    case TOGGLE_TODO_COMPLETION:
      newTodos[action.payload.index].isCompleted = !newTodos[
        action.payload.index
      ].isCompleted;
      newTodos[action.payload.index].lastModified = Date.now();
      return newTodos;
    case TOGGLE_TODO_DELETION:
      newTodos[action.payload.index].isDeleted = !newTodos[action.payload.index]
        .isDeleted;
      newTodos[action.payload.index].lastModified = Date.now();
      return newTodos;
    default: {
      return state;
    }
  }
}

// async
