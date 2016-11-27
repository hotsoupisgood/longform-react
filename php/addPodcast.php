<?php
  include 'connect.php';

  $db = connect();
  $location = $_POST['location'];
  $xmlStringAtLocation = implode(file($location));
  echo 'loc2: '.$location;
  $xmlAtLocation;

  if ($xmlAtLocation = simplexml_load_string($xmlStringAtLocation)) {
    if ($stmt = $db->prepare('INSERT INTO podcast (name, location) VALUES (?,?);')
    ) {
      $stmt->bind_param('ss', $xmlAtLocation->channel->title, $location);
      $stmt->execute();
      echo 'sucessfully added: ' . $xmlAtLocation->channel->title . '  ';
    } else {
      echo 'failed to add: ' . $xmlAtLocation->channel->title . '  '
            . 'because(mysql error): ' . $db->error . '  ';
    };
  }
  else {
    echo 'xml failed to load';
  }
  // echo $xmlAtLocation->channel->title;
  $db->close();
  // movePage(301,"http://www.google.com/");
 ?>
