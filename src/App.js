import React from 'react';
import './mobile.css';
import DesktopMenu from './components/DesktopMenu';

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
			</div>
		);
	}
}

export default App;
