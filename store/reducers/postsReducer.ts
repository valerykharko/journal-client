// const initialState: TodoState = {
//   todos: [],
//   page: 1,
//   error: null,
//   limit: 10,
//   loading: false,
// };
//
// const postsReducer = (state = initialState, action: TodoAction): TodoState => {
//   switch (action.type) {
//     case TodoActionsTypes.FETCH_TODOS:
//       return {
//         ...state,
//         loading: true,
//       };
//     case TodoActionsTypes.FETCH_TODOS_SUCCESS:
//       return { ...state, loading: false, todos: action.payload };
//     case TodoActionsTypes.FETCH_TODOS_ERROR:
//       return { ...state, loading: false, error: action.payload };
//     case TodoActionsTypes.SET_TODO_PAGE:
//       return { ...state, page: action.payload };
//     default:
//       return state;
//   }
// };
//
// export default postsReducer;
