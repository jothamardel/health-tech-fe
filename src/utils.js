export function handleUpdateProperty(e, i,state,stateSetter) {
  const { name, value } = e.target;
  const list = [...state];
  list[i][name] = value;
  stateSetter(list);
}
export function handleRemove(i,state,stateSetter) {
  const list = [...state];
  list.splice(i, 1);
  stateSetter(list);
}
export function handleAdd(state,stateSetter,property) {
  stateSetter([...state, { property: "" }]);
}
