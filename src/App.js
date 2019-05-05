import React from 'react';
import './mobile.css';
import MobileMenu from "./components/MobileMenu";

class App extends React.Component {
	render() {
		return (
			<div>
				<div className="rmm-header">
				<MobileMenu/>
				</div>
			</div>
		);
	}
}

export default App;
