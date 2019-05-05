import React from 'react';
import DesktopMenu from "./DesktopMenu";

class DesktopMenuSection extends React.Component {

	state = {
		name : 'Praveen',
		list : ['Services', 'Home', 'Services', 'Home']
	};

	render() {
		return(
			<DesktopMenu>
				{
					this.state.list.map(l => (
						<a href="#" success="true">{l}</a>
					))
				}
			</DesktopMenu>
		);
	}
}

export default DesktopMenuSection;
