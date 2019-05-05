import React from 'react';
import './mobile.css';
import DesktopMenuSection from "./components/DesktopMenuSection";
import MobileMenuSection from "./components/MobileMenuSection";

class App extends React.Component {


	render() {
		return (
			<div>
				<DesktopMenuSection/>
				<MobileMenuSection/>
			</div>
		);
	}
}

export default App;
