$(function () {
	"use strict";

	var content = $('#content');
	var input = $('#input');
	var status = $('#status');

	window.WebSocket = window.WebSocket || window.MozWebSocket;

	if (!window.WebSocket) {
		content.html($('<p>', { text: 'Sorry, but your browser doesn\'t '
			+ 'support WebSockets.'} ));
		input.hide();
		$('span').hide();
		return;
	}

	var connection = new WebSocket('ws://127.0.0.1:1447');

	connection.onopen = function () {
		// first we want users to enter their names
		status.text('Connected').style.color="green";
	};

	connection.onerror = function (error) {
		// just in there were some problems with conenction...
		         content.html($('<p>', { text: 'Sorry, but there\'s some problem with your '
		                                             + 'connection or the server is down.' } ));
		                                                 };


});
