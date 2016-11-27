module.exports = React.createClass({
  render: function() {
    return (
      <div id="addPodcastForm" className="padding-a container-col center-horizontal border-thin-black">
          <div className="padding-a container-row center-horizontal">
          <label>add podcast: </label>
            <input id="location"className="fill-space" placeholder="(ex: http://feeds.gimletmedia.com/hearstartup)" type="text" name="location" required></input>
          </div>
          <div className="padding-a container-row center-horizontal">
            <button id="addPodcastButton" type="submit" className="fill-space">submit</button>
          </div>
      </div>
    );
  }
});
$(document).ready(function(){
  $('#addPodcastButton').click(function(){
    var podcastLocation = $('#location').val();
    console.log('pre: '+podcastLocation+'\n');
    $.post("php/addPodcast.php",
    {
        location: podcastLocation
    },
    function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
    });
      // $.ajax({
      //         url: "php/addPodcast.php",
      //         params: {'location': $('#location').val()},
      //         success: function(result){
      //           console.log('result: ' + result);
      //         },
      //         error: function(XMLHttpRequest, textStatus, errorThrown) {
      //           console.log('error: ' + errorThrown);
      //         }
      //       });
  });
});
