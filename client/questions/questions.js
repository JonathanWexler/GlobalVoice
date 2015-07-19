Meteor.subscribe("questions");

Template.questions.helpers({
	questions: function(){
		return Questions.find();
	},

});

Template.questions.rendered = function() {
	Meteor.call('removeAllQuestions');
	Questions.insert({
		main: "Should a country spend money to help another country?",
		consider: "Is it a risk to the supporting country?",
		time: new Date()
	})
}

