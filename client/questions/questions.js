Meteor.subscribe("questions");


Template.questions.helpers({
	questions: function(){
		return Questions.find();
	},
	question_text: function () {
		// console.log('hello')
		// console.log(Session.get('questions')[Session.get('current_question').topic]['questions'])
		// console.log(Session.get('questions')[Session.get('current_question').topic]['questions'][Session.get('current_question').questions])
		return Session.get('current_question_text');
	}

});

Template.questions.rendered = function() {
	Meteor.call('removeAllQuestions');
	// Questions.insert({
	// 	main: "Should a country spend money to help another country?",
	// 	consider: "Is it a risk to the supporting country?",
	// 	nextOne: "What do you do for fun?",
	// 	time: new Date()
	// });
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

Session.set('questions', [
	"Should a country spend money to help another country?",
	"Is it a risk to the supporting country?",
	"Should the government be given a lot of power, or a little power?",
	"Can too little power lead to a safe or unsafe country?",
	"What is a safe way to help starving families in poor countries?",
	"Would helping others make it difficult for them to help themselves in the future?",	
	"What does discrimination look like in your country?",
	"How are family and friends special in your community?",
	"What type of activities are popular in your community?"
	]);
Session.set('current_question', 0);
Session.set('current_question_text', Session.get('questions')[Session.get('current_question')]);
}


Template.questions.events({
	'click #agreed' : function(event){
		var current_question = Session.get('current_question');
		var questions = Session.get('questions');
		var next_question = {};
		if (current_question <= Session.get('questions').length) {
			next_question = current_question + 1;
		} else {
			next_question = 1;
		}

		console.log(next_question)
		console.log(current_question)

		console.log(Session.get('questions')[next_question])
		Session.set('current_question', next_question);
		Session.set('current_question_text', Session.get('questions')[next_question]);

	},
	'click #disagree' : function(event){
		$("#fifth-question").hide(1000);
		$("#sixth-question").removeClass('hidden');
	},
	'click #disagree' : function(event){
		
	}


});

