import React, { useState } from "react";
import Modal from "./Add_New_Modal";
import UpdateModal from "./Update_Modal";
import LoginModal from "./LogIn_Modal";
import "../App.css";
import "font-awesome/css/font-awesome.min.css";
import { TaskList } from "./TaskList";
import { connect, useDispatch } from "react-redux";
import { addNewModal, loginModal } from "../store/actions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faPlus } from "@fortawesome/free-solid-svg-icons";

import "firebase/auth";
import "firebase/firestore";

const HomePage = ({ modalOpen, updateModalOpen, logInModal, tasks }) => {
  const dispatch = useDispatch();

  const [inputValue, updateInput] = useState("");

  return (
    <div className="App">
      <ToastContainer />
      {/* MODALS */}

      {modalOpen ? <Modal /> : null}
      {updateModalOpen ? <UpdateModal /> : null}
      {logInModal ? <LoginModal /> : null}

      {/* SETTINGS */}

      <div className="header-wrapper">
        <header>
          <h1>ToDo app</h1>

          <div className="button-wrapper">
            <div
              className="button silver-btn"
              onClick={() => dispatch(addNewModal())}
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>

            <div
              className="button silver-btn"
              onClick={() => dispatch(loginModal())}
            >
              <FontAwesomeIcon icon={faCog} />
            </div>
          </div>
        </header>
      </div>

      <div className="body-wrapper">
        <section>
          <form className="example">
            <input
              className="custom-search"
              type="text"
              placeholder="Type your keyword.."
              name="search"
              onChange={(e) => updateInput(e.target.value)}
            />
          </form>
        </section>

        {/* TASKS */}

        <section>
          <TaskList tasks={tasks} inputValue={inputValue}></TaskList>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    modalOpen: state.main.modalOpen,
    updateModalOpen: state.main.updateModalOpen,
    logInModal: state.main.loginModal,
    tasks: state.firestore.ordered.Tasks,
  };
};

export default compose(
  connect(mapStateToProps, { addNewModal, loginModal }),
  firestoreConnect(() => [{ collection: "Tasks" }])
)(HomePage);
