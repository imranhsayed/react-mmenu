import React from 'react';
import { menuData } from "../../menuData";

class Sidebar extends React.Component {
	render() {
		return (
			<div className="rmm-sidebar-container">
				{ menuData.length && (
					<ul className="rmm-mobile-menu-lists">
						{ menuData.map( item => (
							<li key={item.label} className="rmm-mobile-menu-list">
								<a href={item.url} className="rmm-mobil-menu-link">
									{ item.label }
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
