var PodcastLink = require('./PodcastLink');
module.exports = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="container-row">
            <ul>
              <li>
              <a href="page.html">Longform</a>
              </li>
              <li>
              <button id="refresh"> refresh </button>
              </li>
              <PodcastLink>Now Playing: </PodcastLink>
            </ul>
        </div>
      </nav>
    );
  }
});
function Start() {
    $('#refresh').click(function () {
      $.ajax({url: "php/refresh.php",
              success: function(result){
                console.log('result: ' + result);
              },
              error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log('error: ' + errorThrown);
              }
      });
    });
}

$(Start);
