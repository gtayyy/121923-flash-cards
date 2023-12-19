import React from "react";
import headerImage from "./../assets/header.jpg";

function Header(){
	return (
		<React.Fragment>
			<h1>Create Your Own Flashcards!</h1>
			<img src={headerImage} height="" width="" alt="image of study notes" />
			</React.Fragment>
  );
}

export default Header;