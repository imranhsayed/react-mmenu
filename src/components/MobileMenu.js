import React from 'react';
import BurgerIcon from './elements/BurgerIcon';
import Sidebar from './elements/Sidebar';

class MobileMenu extends React.Component {
	render() {
		const { children } = this.props;
		return(
			<React.Fragment>
				{ children.length && (
					<React.Fragment>
						<BurgerIcon/>
						<Sidebar menuData={children}/>
					</React.Fragment>
				) }
			</React.Fragment>
		);
	}
}

export default MobileMenu;
