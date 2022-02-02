var onSubmitClick = function() {
  var input = $('#hash-input').val();
  fetch(input);
};

var fetch = function(query) {
  $.ajax({
    method: "GET",
    url: "https://api.github.com/repos/facebook/react/commits/e09097a75da040f428ca335e9d181186a61247d1",
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
  }
}
$('#hash-submit').on("click", onSubmitClick);


