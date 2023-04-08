$(document).ready(function() {
  var repo = "username/repository-name";
  var path = "files";
  var url = "https://api.github.com/repos/" + repo + "/contents/" + path;

  $.ajax({
    url: url,
    dataType: "json",
    success: function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].type == "file") {
          var filename = data[i].name;
          var fileurl = data[i].html_url;
          var li = "<li><a href='" + fileurl + "'>" + filename + "</a></li>";
          $("#file-listing").append(li);
        }
      }
    }
  });
});
