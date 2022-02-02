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
  var userData = {
    username: data.author.login,
    image: data.author.avatar_url 
  };

  renderHTML(userData);
}

var renderHTML = function(user) {
  var source = $('#github-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(user);
  $('.faces').append(newHTML);

}
$('#hash-submit').on("click", onSubmitClick);


