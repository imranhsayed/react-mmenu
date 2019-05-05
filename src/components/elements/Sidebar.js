import React from 'react';

class Sidebar extends React.Component {

	render() {

		const { data } = this.props;

		console.warn( 'children', data );

		return (
			<div className="rmm-sidebar-container">

			</div>
		);
	}
}

export default Sidebar;
