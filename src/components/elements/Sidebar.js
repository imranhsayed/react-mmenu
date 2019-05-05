import React from 'react';

	class Sidebar extends React.Component {

	render() {

		const { menuData, show } = this.props;

		return (
			<div className="rmm-sidebar-container " style={ { display: show ? 'block' : 'none' } }>
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
