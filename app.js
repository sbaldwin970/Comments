var main = function() {
	"use strict";

var displayComment = function() {
	var $new_comment;
	// makes it so that code will only execute if there is text to be sent.
	if ($(".comment-input input").val() !== "") {
			$new_comment = $("<p>").text($(".comment-input input").val());
			$new_comment.hide();
			$(".comments").append($new_comment);
			// this clears the input box after the comment is sent.
			//$new_comment.fadeIn(100);
			$new_comment.slideDown(100);
			$(".comment-input input").val("");
		}
	};
	$(".comment-input button").on("click", function(event) {
		displayComment();
	});
	$(".comment-input button").on("dblclick", function(event) {
		displayComment();
	});
	$(".comment-input input").on("keypress", function(event) {
		if(event.keyCode === 13) {
			displayComment();
		}
	});
};
$(document).ready(main);