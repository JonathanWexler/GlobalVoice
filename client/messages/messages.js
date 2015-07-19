Meteor.subscribe("messages");
Template.messages.helpers({
	messages: function(){
		return Messages.find({}, {sort: {time: -1}} );
	}
})