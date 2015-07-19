Meteor.publish("messages", function() {
	return Messages.find({});
});

Meteor.publish("questions", function() {
	return Questions.find({});
});

Meteor.startup(function() {

	return Meteor.methods({

		removeAllQuestions: function() {

			return Questions.remove({});

		},

		removeAllChat: function() {

			return Messages.remove({});

		}
	});

});