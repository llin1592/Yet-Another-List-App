import reactjs from "react";
import "../Styles/Group.css";

const Group = (props) => {
  return (
    <div className="group-add-container" onClick={props.onClick}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Group;
