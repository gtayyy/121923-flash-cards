// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import "./../CSS/Card.css";


// function Card(props) {
//   const [showAnswer, setShowAnswer] = useState(false);

//   const handleCardClick = () => {
//     setShowAnswer(!showAnswer);
//   };

//   return (
//     <div className={`card ${showAnswer ? "selected" : ""}`} onClick={handleCardClick}>
//       <div className="card-inner">
//         <div className="card-front">
//           <h3>{props.prompt}</h3>
//         </div>
//         <div className="card-back">
//           <h3>{props.answer}</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// Card.propTypes = {
//   answer: PropTypes.string,
//   prompt: PropTypes.string,
// };

// export default Card;

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./../CSS/Card.css";

function Card(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="card-container"> {/*onClick={() => props.whenCardSelected(props.id)}>*/}
			<div className="card"> 	{`${showAnswer ? "flipped" : ""}`} {/*onClick={handleCardClick}>*/}
        <div className="front">
          <h3>{props.prompt}</h3>
          </div>
          <div className="front back">
            <h3>{props.answer}</h3>
          </div>
        </div>
      </div> 
  );
}


Card.propTypes = {
  answer: PropTypes.string,
  prompt: PropTypes.string,
  id: PropTypes.string,
  whenCardSelected: PropTypes.func
};

export default Card;