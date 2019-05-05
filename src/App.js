import React from 'react';
import './mobile.css';
<<<<<<< HEAD
import DesktopMenu from './components/DesktopMenu';
=======
import MobileMenu from "./components/MobileMenu";
>>>>>>> 812d33d17766bae5776a4a567e6bca077baae479

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
							<a href="#" sucsess="true">{l}</a>
						))
					}
				</DesktopMenu>
				<div className="rmm-header">
					<MobileMenu/>
				</div>
			</div>
		);
	}
}

export default App;
