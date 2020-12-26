import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteTask, editTaskButton } from "../store/actions";
import { compose } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faWindowRestore,
  faCalendarAlt,
  faClock,
  faPenAlt,
} from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-tilt";

const Task = ({ task, deleteTask, editTaskButton }) => {
  const { category, name, priority } = task;

  return (
    <Tilt className="Tilt" options={{ scale: 1.1, perspective: 0, maxTilt: 0 }}>
      <div className="singleTask">
        <div className="task">
          {/* NAME AND PRIORITY */}
          <div className="firstRow">
            <div className="name">
              <h2>{name}</h2>
              <p>Web Site UI Design</p>
            </div>
            <div className="priority">
              <h3>Priority: {priority}</h3>
            </div>
          </div>
          {/* DATE AND CATEGORY */}
          <div className="secondRow">
            <div className="date">
              <FontAwesomeIcon icon={faCalendarAlt} /> Do it:{" "}
            </div>
            <div className="category">
              <FontAwesomeIcon icon={faWindowRestore} /> <span>{category}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div>
          </div>
        </div>
        {/* EDIT AND DELETE */}
        <div className="editAndDelete">
          <button
            className="button edit-btn"
            onClick={() => editTaskButton(task)}
          >
            <FontAwesomeIcon icon={faPenAlt} />
          </button>
          <button
            className="button delete-btn"
            onClick={() => deleteTask(task)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </Tilt>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state.firestore.data.Tasks);
  // const id = ownProps.match.params.id;
  // console.log(ownProps);
  // console.log(state);

  return {};
};

export default compose(
  connect(mapStateToProps, { deleteTask, editTaskButton }),
  firestoreConnect(() => [{ collection: "Tasks" }])
)(Task);

// export default connect(mapStateToProps,mapdispactsafas)(Task);
