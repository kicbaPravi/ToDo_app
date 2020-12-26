import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { closeModal, updateTask } from "../store/actions";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateModal = ({ selectedTask }) => {
  const dispatch = useDispatch();

  const [name, updateName] = useState(selectedTask.name);
  const [priority, updatePriority] = useState(selectedTask.priority);
  const [category, updateCategory] = useState(selectedTask.category);
  const [date, updateDate] = useState(new Date());

  const task = {
    name,
    priority,
    category,
    date,
  };

  // console.log(selectedTask);

  return (
    <div className="bg-modal">
      <div className="modal-content">
        <div className="close" onClick={() => dispatch(closeModal())}></div>
        <h1>Edit task</h1>
        <form className="example">
          {/* INPUT */}

          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => updateName(e.target.value)}
          />
          <button
            type="button"
            onClick={() => dispatch(updateTask(task, selectedTask.id))}
          >
            UPDATE
          </button>

          {/* PRIORITY */}
          <h1>Priority</h1>
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

          <h1>Category</h1>
          <select
            value={category}
            onChange={(e) => updateCategory(e.target.value)}
          >
            <option>select</option>
            <option value="Sport">Sport</option>
            <option value="Muzika">Muzika</option>
            <option value="Tehnika">Tehnika</option>
            <option value="Vesti">Vesti</option>
          </select>

          {/* DATE */}

          <h1>Date</h1>
          <Datepicker
            selected={date}
            calendarClassName="rasta-stripes"
            onChange={(e) => updateDate(e)}
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state.firestore.data.Tasks);

  return {
    selectedTask: state.main.selectedTask,
  };
};

export default connect(mapStateToProps, { closeModal, updateTask })(
  UpdateModal
);
