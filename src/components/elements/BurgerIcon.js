import React from 'react';

export default ( props ) => {

	const { handleClick } = props;

	return (
		<div onClick={ handleClick }>
			<span className="rmm-burger-icon"/>
		</div>
	);
}
