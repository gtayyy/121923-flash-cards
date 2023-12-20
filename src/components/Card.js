import React from "react";
import PropTypes from "prop-types";

function Card(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCardClicked(props.id)}>
				<h3>{props.prompt}</h3>
				<h3>{props.answer}</h3>
        <hr/>
        </div>
    </React.Fragment>
  );
}

Card.propTypes = {
  answer: PropTypes.string,
  prompt: PropTypes.string,
  id: PropTypes.string,
  whenCardClicked: PropTypes.func
}

export default Card;