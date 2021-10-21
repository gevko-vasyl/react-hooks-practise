export const myMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  const prevState = store.getState();
  console.log("prevState ", prevState);
  console.info("action ", action);
  const result = next(action);
  const newState = store.getState();
  console.log("newState ", newState);
  console.groupEnd();
  return result;
};
