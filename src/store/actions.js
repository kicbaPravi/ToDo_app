// OPEN MODAL ADD_NEW

export const addNewModal = () => {
  return {
    type: "ADD_NEW",
  };
};

// CLOSE MODALS

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};

// EDIT TASK MODAL

export const editTaskButton = (taskObject) => {
  return {
    type: "EDIT_BUTTON",
    payload: taskObject,
  };
};

// LOGIN MODAL

export const loginModal = () => {
  return {
    type: "LOGIN_MODAL",
  };
};

// LOGIN ACTION

export const loginAction = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// LOGOUT ACTION

export const logoutAction = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: "LOGOUT" }))
      .catch((err) => {
        console.log(err);
      });
  };
};

// SIGN UP ACTION

export const signUpAction = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// ADD NEW TASK

export const addNewTask = (taskObject) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();

    fireStore
      .collection("Tasks")
      .add(taskObject)
      .then((object) => {
        dispatch({ type: "CREATE_NEW_TASK", payload: taskObject });
      })
      .then(() => {
        dispatch({ type: "CLOSE_MODAL" });
      })
      .catch((err) => {
        dispatch({ type: "ADD_TASK_ERROR" });
      });
  };
};

// DELETE TASK

export const deleteTask = (taskObject) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();

    fireStore
      .collection("Tasks")
      .doc(taskObject.id)
      .delete()
      .then(() => {
        dispatch({
          type: "DELETE_TASK",
        });
      })
      .catch(() => {
        return {
          type: "DELETE_TASK_ERROR",
        };
      });
  };
};

// UPDATE TASK

export const updateTask = (taskObject, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();

    fireStore
      .collection("Tasks")
      .doc(id)
      .update(taskObject)
      .then(() => {
        dispatch({ type: "UPDATE_TASK" });
      })
      .then(() => {
        dispatch({ type: "CLOSE_MODAL" });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_TASK_ERROR" });
      });
  };
};

// ADD NEW CATEGORY

export const addNewCategory = (newCategory, mare) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const input = document.querySelector("input");

    const fireStore = getFirestore();
    fireStore
      .collection("Categories")
      .add(newCategory)
      .then(() => {
        dispatch({ type: "ADD_NEW_CATEGORY" });
      })
      .then(() => mare())
      .catch((err) => {
        dispatch({ type: "ADD_CATEGORY_ERROR" });
      });

    input.value = "";
  };
};

// REMOVE CATEGORY

export const removeCategory = (cat) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(cat);

    const fireStore = getFirestore();

    fireStore.collection("Categories").doc(cat.id).delete();
  };
};
