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
		nextOne: "What do you do for fun?",
		time: new Date()
	});
	// 	Questions.insert({
	// 	main: "Should a country spend money to help another Kountry?",
	// 	consider: "Is it a risk to the supporting country?",
	// 	time: new Date()
	// });
	// 		Questions.insert({
	// 	main: "Should a country spend money to help another Country?",
	// 	consider: "Is it a risk to the supporting country?",
	// 	time: new Date()
	// });
}

Template.questions.events({
	'click #agreed' : function(event){
		$("#first-question").hide(1000);
		$("#second-question").removeClass('hidden');

	},
	'click #disagree' : function(event){
		Session.set('question_id', Session.get('question_id'))
	},


});

