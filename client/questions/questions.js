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
	$('.clock').FlipClock(300, {countdown: true, clockFace: 'MinuteCounter'});

	Meteor.call('removeAllQuestions');

	Session.set('questions', [
		"Should a country spend money to help another country?",
		"Is it a risk to the supporting country?",
		"Should the government be given a lot of power, or a little power?",
		"Can too little power lead to a safe or unsafe country?",
		"What is a safe way to help starving families in poor countries?",
		"Would helping others make it difficult for them to help themselves in the future?",	
		"What does discrimination look like in your country?",
		"How do you travel from place to place?",
		"How are family and friends special in your community?",
		"Who do you share meals with?",
		"What type of activities are popular in your community?",
		"What do people wear in your culture?"
		]);
	Session.set('current_question', 0);
	Session.set('current_question_text', Session.get('questions')[Session.get('current_question')]);
}


Template.questions.events({
	'click #agreed' : function(event){
		$('.clock').FlipClock(300, {countdown: true, clockFace: 'MinuteCounter'});

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
		$('.clock').FlipClock(300, {countdown: true, clockFace: 'MinuteCounter'});

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
	}


});

