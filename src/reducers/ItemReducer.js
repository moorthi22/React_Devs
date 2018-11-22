const ItemReducer = (state = [], action) => {
  switch (action.type) {
    case "Add_Item":
      return state.concat([action.data]);
  }
};

export default ItemReducer;
