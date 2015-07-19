Template.input.events = {
  'submit form': function(event){
    event.preventDefault();

    if (Meteor.user()){
      var name = Meteor.user().profile.name;
    } else {
      var name = 'Annoymous';
    }

    var message = document.getElementById('message');

    if (message.value !== '') {
      Messages.insert({
        name: name,
        message: message.value,
        time: Date.now()
      })

      document.getElementById('message').value = '';
      message.value = '';
    };
  }
}