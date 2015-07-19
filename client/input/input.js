$('#yourForm').submit(function(event){

  event.preventDefault();

});

Template.input.events = {
  'submit .new-message': function(event){
    event.preventDefault();



    if (Meteor.user()){
      var name = Meteor.user().username;


} else {
  var name = 'GlobalVoice';
}

    // var message = document.getElementById('message');
    var message = event.target.text.value;

    if (message.value !== '') {
      Messages.insert({
        name: name,
        message: message,
        time: new Date()
      })

      // document.getElementById('message').value = '';
      event.target.text.value = '';
    };
  }
}

$("input").keypress(function(event) {
  if (event.which == 13) {
    event.preventDefault();
    $("form").submit();
  }
});