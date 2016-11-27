var  audioElement = document.createElement('audio');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container-col border-thin-black fill-space">
        <div className="padding-a container-row center-horizontal">
          <button id="ToggleStart" type="button">play</button>
          <button id="ToggleStop" type="button">pause</button>
        </div>
      </div>

    );
  }
});
function Start() {

	audioElement.setAttribute('src', 'http://www.mfiles.co.uk/mp3-downloads/Toccata-and-Fugue-Dm.mp3');

    $('#ToggleStart').click(function () {
        audioElement.play();
    });

    $('#ToggleStop').click(function () {
        audioElement.pause();
    });
}

$(Start);
