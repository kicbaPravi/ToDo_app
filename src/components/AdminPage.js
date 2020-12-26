import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { addNewCategory, removeCategory } from "../store/actions";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import "../App.css";

const AdminPage = ({ loggedIn, categories }) => {
  const [input, updateInput] = useState("");

  const newCategory = {
    name: input,
  };

  const mare = (input) => {
    input = "";
  };

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="modal-content mt100">
        <h1>Admin page</h1>

        <label htmlFor="Add new category">
          <input
            className="mt60"
            type="text"
            onChange={(e) => updateInput(e.target.value)}
            placeholder="Add new category"
          />
          <button
            className="button"
            onClick={() => dispatch(addNewCategory(newCategory, mare))}
          >
            ADD
          </button>
        </label>

        {categories &&
          categories.map((cat) => (
            <div className="cat_button" key={cat.id}>
              <div
                className="del_icon"
                onClick={() => dispatch(removeCategory(cat))}
              >
                x
              </div>
              {cat.name}
            </div>
          ))}
      </div>
    </div>
  );

  // if (loggedIn) {
  //   return (
  //
  //   );
  // } else {
  //   setTimeout(() => {
  //     console.log("Brojim");
  //     return <Redirect to="/" />;
  //   }, 5000);
  //   return <p>Zabranjen pristup</p>;
  // }
};

const mapStateToProps = (state) => {
  // console.log(state.firestore.ordered.Categories);
  return {
    loggedIn: state.main.loggedIn,
    categories: state.firestore.ordered.Categories,
  };
};

// export default connect(mapStateToProps)(AdminPage);

export default compose(
  connect(mapStateToProps, { addNewCategory, removeCategory }),
  firestoreConnect(() => [{ collection: "Categories" }])
)(AdminPage);
