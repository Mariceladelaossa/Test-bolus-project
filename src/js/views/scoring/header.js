'use strict';

var React = require('react');

/**
 * View for the app header/title.
 */
var Header = React.createClass({

	/**
	 * Renders this view.
	 */
	render: function() {
		return (
			<header>
				<h1>BOWLING </h1>
				<p>by <a></a></p>
			</header>
		);
	}

});

module.exports = Header;
