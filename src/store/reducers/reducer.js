import { toast } from "react-toastify";

const initialState = {
  modalOpen: false,
  updateModalOpen: false,
  loginModal: false,
  loggedIn: false,
  selectedTask: {},
  mare: "mare",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_NEW":
      return {
        ...state,
        modalOpen: true,
      };
    case "EDIT_BUTTON":
      return {
        ...state,
        updateModalOpen: true,
        selectedTask: payload,
      };
    case "LOGIN_MODAL":
      return {
        ...state,
        loginModal: true,
      };
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modalOpen: false,
        updateModalOpen: false,
        loginModal: false,
      };
    case "CREATE_NEW_TASK":
      toast.success("Added a task");
      return state;
    case "ADD_NEW_CATEGORY":
      toast.success("Added a new category");
      return state;
    case "UPDATE_TASK":
      toast.success("Task is updated");
      return state;
    case "ADD_TASK_ERROR":
      toast.error("An error occured");
      return state;
    case "DELETE_TASK":
      toast.error("Task successfully deleted");
      return state;
    case "DELETE_TASK_ERROR":
      toast.error("An error occured");
      return state;
    default:
      return state;
  }
};

export default reducer;
