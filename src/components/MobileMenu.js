import React from 'react';
import BurgerIcon from './elements/BurgerIcon';
import Sidebar from './elements/Sidebar';

class MobileMenu extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			showMobileMenu: false
		};
	}

	/**
	 * Open mobile menu on the click of Menu Icon.
	 *
	 */
	handleMenuClick = () => {
		this.setState( { showMobileMenu: ! this.state.showMobileMenu } );
	};

	render() {
		const { children } = this.props;
		const { showMobileMenu } = this.state;

		return(
			<React.Fragment>
				{ children.length && (
					<React.Fragment>
						<BurgerIcon handleClick={ this.handleMenuClick } />
						<Sidebar menuData={ children } show={ showMobileMenu }/>
					</React.Fragment>
				) }
			</React.Fragment>
		);
	}
}

export default MobileMenu;
