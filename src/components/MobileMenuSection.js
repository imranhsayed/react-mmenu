import React from 'react';
import MobileMenu from "./MobileMenu";
import { menuData } from "../menuData";

class MobileMenuSection extends React.Component {
	render() {
		return(
			<div className="rmm-header">
				<MobileMenu>
					{ menuData.length && menuData.map( item => (
						<a href={item.url} key={item.label}>{item.label}</a>
					) ) }
				</MobileMenu>
			</div>
		);
	}
}

export default MobileMenuSection
