import React from 'react';
import BurgerIcon from './elements/BurgerIcon';
import Sidebar from './elements/Sidebar';

class MobileMenu extends React.Component {
	render() {
		return(
			<React.Fragment>
				<BurgerIcon/>
				<Sidebar/>
			</React.Fragment>
		);
	}
}

export default MobileMenu;
