Template.next.events({
	'click #next' : function(event){

		Meteor.call('removeAllChat');

	},

})