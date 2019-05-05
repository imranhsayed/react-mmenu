import React from 'react';

class Sidebar extends React.Component {

	render() {

		const { menuData } = this.props;

		return (
			<div className="rmm-sidebar-container">
				{ menuData.length && (
					<ul className="rmm-mobile-menu-lists">
						{ menuData.map( item => (
							<li key={item.props.children} className="rmm-mobile-menu-list">
								<a href={item.props.href} className="rmm-mobil-menu-link">
									{ item.props.children }
								</a>
							</li>
						) ) }
					</ul>
				) }
			</div>
		);
	}
}

export default Sidebar;
