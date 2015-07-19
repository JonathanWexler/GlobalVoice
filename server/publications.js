Meteor.publish("messages", function() {
	return Messages.find({});
});

Meteor.publish("questions", function() {
	return Questions.find({});
});