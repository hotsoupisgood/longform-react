// import React from 'react';
// import ReactDOM from 'react-dom';

var Navigation = require('./Navigation');
var AddPodcast = require('./AddPodcast');
var PodcastPlayer = require('./PodcastPlayer');

// require('./AddPodcast');
// require('./PodcastLink');
// require('./PodcastPage');
// require('./PodcastPlayer');

//
var Layout = React.createClass({
  render: function() {
    return (
      <div className="container-col">
      <Navigation />
      <AddPodcast />
      <PodcastPlayer />
      </div>
      // <AddPodcast/>

    );
  }
});

ReactDOM.render(
  <Layout />,
  document.getElementById('content')
);
