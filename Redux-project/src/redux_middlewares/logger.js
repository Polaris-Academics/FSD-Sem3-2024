const logger = (store) => (next) => (action) => {
    console.log(store.getState().myTodo.task);
    console.log(action.type);
    return next(action);
}

export default logger;