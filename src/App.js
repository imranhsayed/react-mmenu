import React from 'react';
import './mobile.css';
import DesktopMenu from './components/DesktopMenu';
import MobileMenu from "./components/MobileMenu";

class App extends React.Component {
	state = {
		name : 'Praveen',
		list : ['Services', 'Home', 'Services', 'Home']
	}
	
	render() {
		return (
			<div>
				<DesktopMenu>
					{
						this.state.list.map(l => (
							<a href="#" success="true">{l}</a>
						))
					}
				</DesktopMenu>
				<MobileMenu/>
			</div>
		);
	}
}

export default App;
