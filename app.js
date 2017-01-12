$(document).ready(function () { 
  function getResults(query) {
    $.getJSON("https://www.googleapis.com/youtube/v3/search",
      {
        "part": "snippet",
        "key": "AIzaSyCpDWCc28PPOUNGzzjW-9aPa_06yHEVaZg",
        "q": query 
      },
      function (data) {
        if (data.pageInfo.totalResults == 0) {
          alert("No videos found!");
        }
        console.log(data);
        displaySearchResults(data.items);
      }

    );
  }

  function displaySearchResults(videos) {
    var results = "";
    $.each(videos, function (index, video) {
      console.log(video.snippet.title);
      console.log(video.snippet.thumbnails.medium.url);
      results = results + "<li><p>" + video.snippet.title +
        "</p><a target='_blank' href='https://www.youtube.com/watch?v=" + video.id.videoId + "'><img src='" +  video.snippet.thumbnails.high.url + "'/></a></li>" ;
    });
    $(".search-results ul").html(results);
  }

  $(".search-form").submit(function (event) {
    event.preventDefault();
    getResults($(".query").val());
  });
});