import React from "react";
import headerImage from "./../assets/header.jpg";

function Header(){
	return (
		<React.Fragment>
			<h1>Create Your Own Flashcards!</h1>
			<img src={headerImage} height="400px" width="600px" alt="writing study notes"/>
			</React.Fragment>
  );
}

export default Header;