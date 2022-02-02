var users = [];

var onSubmitClick = function() {
  var input = $('#hash-input').val();
  $('#hash-input').val('');
  fetch(input);
};

var fetch = function(query) {
  $.ajax({
    method: "GET",
    url: "https://api.github.com/repos/facebook/react/commits/" + query,
    dataType: "json",
    success: function(data) {
      addUser(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
}

var addUser = function(data) {
  users.push({
    username: data.author.login,
    image: data.author.avatar_url 
  });

  renderHTML();
}

var renderHTML = function() {
  $('.faces').empty();

  for (let i = 0; i < users.length; i++) {
    var source = $('#github-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(users[i]);
    $('.faces').append(newHTML);
  };
}

$('#hash-submit').on("click", onSubmitClick);


