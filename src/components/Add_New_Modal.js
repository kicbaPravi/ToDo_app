import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { closeModal, addNewTask } from "../store/actions";
import Datepicker from "react-datepicker";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ categories }) => {
  const dispatch = useDispatch();

  const [name, updateName] = useState("");
  const [priority, updatePriority] = useState("");
  const [category, updateCategory] = useState(0);
  const [date, updateDate] = useState(new Date());

  const checkSelected = (object) => {
    if (object === 0) {
      console.log(object);
    } else {
      dispatch(addNewTask(task));
    }
  };

  const task = {
    name,
    priority,
    category,
    date,
  };

  return (
    <div className="bg-modal">
      <div className="modal-content">
        <div className="close" onClick={() => dispatch(closeModal())}></div>
        <h1>Add new task</h1>
        <form className="example">
          {/* INPUT */}

          <input
            type="text"
            placeholder="Name Of Task"
            name="name"
            onChange={(e) => updateName(e.target.value)}
          />

          {/* PRIORITY */}
          <h5>Priority</h5>
          <span
            className="fa fa-star fa-3x"
            onClick={() => updatePriority("1")}
          ></span>
          <span
            className="fa fa-star fa-3x"
            onClick={() => updatePriority("2")}
          ></span>
          <span
            className="fa fa-star fa-3x"
            onClick={() => updatePriority("3")}
          ></span>
          <span
            className="fa fa-star fa-3x"
            onClick={() => updatePriority("4")}
          ></span>
          <span
            className="fa fa-star fa-3x"
            onClick={() => updatePriority("5")}
          ></span>

          {/* CATEGORY */}

          <h5>Category</h5>
          <select
            className="mySelect"
            value={category}
            onChange={(e) => updateCategory(e.target.value)}
          >
            <option value="0">Please select your category</option>
            {categories &&
              categories.map((cat) => (
                <option value={cat.name} key={cat.id}>
                  {cat.name}
                </option>
              ))}
          </select>

          {/* DATE */}

          <h5>Date</h5>
          <Datepicker
            selected={date}
            calendarClassName="rasta-stripes"
            onChange={(e) => updateDate(e)}
          />

          <button
            type="button"
            onClick={() =>
              checkSelected(document.querySelector(".mySelect").value)
            }
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.firestore.ordered.Categories,
  };
};

export default compose(
  connect(mapStateToProps, { closeModal, addNewTask }),
  firestoreConnect(() => [{ collection: "Categories" }])
)(Modal);
