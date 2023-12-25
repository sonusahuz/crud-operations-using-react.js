export const initialState = {
  username: "",
  email: "",
  city: "",
};

interface ActionType {
  type: "INPUT";
  payload: {
    name: string;
    value: string;
  };
}
interface StateType {
  username: string;
  email: string;
  city: string;
}

export const reducers = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
