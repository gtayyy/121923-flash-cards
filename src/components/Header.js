import React from "react";
import headerImage from "./../assets/header.jpg";

function Header() {
	return (
		<React.Fragment>
			<div class="header">
				<h1>Create Your Own Flashcards!</h1>
				<div class="container">
					<div class="image">
						<img src={headerImage} height="400px" width="600px" alt="writing study notes" />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Header;