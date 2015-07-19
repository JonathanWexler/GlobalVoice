Template.next.events({
	'click #next' : function(event){
		$('.clock').FlipClock(300, {countdown: true, clockFace: 'MinuteCounter'});
		Meteor.call('removeAllChat');

	},
	'click #time' : function(event){
		$('.clock').FlipClock(300, {countdown: true, clockFace: 'MinuteCounter'});

	},

})