// From http://mikeclaffey.com/google-calendar-into-html/
function GCalEvents(gcal_json_url) {

	// Get list of upcoming iCal events formatted in JSON
	$.getJSON(gcal_json_url, function(data) {
		console.log(data);
		// Parse and render each event
		$.each(data.feed.entry, function(i, item) {
			console.log(i);
			console.log(item);
			if (i === 0) {
				$("#gcal-events li").first().hide();
			}
			// event title
			var event_title = item.title.$t;

			// event contents
			var event_contents = $.trim(item.content.$t);
			// make each separate line a new list item
			//event_contents = event_contents.replace(/\n/g, "</li><li>");
			event_contents = event_contents.replace(/Event Status: confirmed/, '');
			event_contents = event_contents.replace(/Event Description: /, '');

			// Render the event
			jQuery("#gcal-events li").last().before(
				"<li>" + event_title + "<ul>" + "<li>" + event_contents + "</li>" + "</ul>" + "</li>"
			);
		});
	});
}
