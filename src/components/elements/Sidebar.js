import React from 'react';

const containerStyles = ( show, slide ) => {
	if( show && ! slide ) {
		return {
			display: show ? 'block' : 'none',
		};
		// If slide
	} else if ( show && slide ) {
		return {
			left: ( show ) ? 0 : '-100vw'
		}
	}
};

class Sidebar extends React.Component {

	render() {

		const {
			menuData,
			show,
			slide,
		    } = this.props;

		const containerClassNames = `${ slide ? 'rmm-animation-slide' : '' }`;

		return (
			<div
				className={`rmm-sidebar-container ${ containerClassNames }`}
				style={ containerStyles( show, slide ) }
			>
				<ul className="rmm-mobile-menu-lists">
					{ menuData.map( item => (
						<li key={item.props.children} className="rmm-mobile-menu-list">
							<a href={item.props.href} className="rmm-mobil-menu-link">
								{ item.props.children }
							</a>
						</li>
					) ) }
				</ul>
			</div>
		);
	}
}

export default Sidebar;
