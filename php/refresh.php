<?php
include 'connect.php';
$db = connect();
$sql = "SELECT * FROM podcast";
//getAll inputs a db connection and a query
//returns an iterative array with all the table rows
//for each item = getAll[n], an item is an key-value array where
function getAll($connection, $_sql){
  if($stmt = $connection->prepare($_sql)){
    $stmt->execute();
    $result = $stmt->get_result();
    $output = array();
    while($row = $result->fetch_assoc()){
      $output[] = $row;
    }
    echo 'output'.$output;
    return $output;
  }else {
    echo 'failed because: ' .  $db->error . '   ';
  }
  return NULL;
};
if ($allRows = getAll($db, $sql)) {
  //delete all cached podcasts
  if ($stmt = $db->prepare('TRUNCATE TABLE podcasts')
  ) {
    $stmt->execute();
    echo 'sucessful deletion';
    foreach ($allRows as $row) {
      $xmlStringAtLocation = implode(file($row['location']));
      $xmlAtLocation;
      if ($xmlAtLocation = simplexml_load_string($xmlStringAtLocation)) {
      }
      else {
        echo 'xml failed to load';
      }
      echo 'item: '.$xmlAtLocation->channel->item->title;
      foreach($xmlAtLocation->channel->item as $Item){
        echo 'hi';
        if ($stmt = $db->prepare('INSERT INTO podcasts (name, description, location, podcast_id) VALUES (?,?,?,?);')
        ) {
          $stmt->bind_param('ssss', $Item->title, $Item->description, $Item->link, $row['id']);
          $stmt->execute();
          echo '  sucessfully inserted: ' . $Item->title;
        } else {
          echo '  failed because: ' .  $db->error . '   ';
        };
      }
    }
  } else {
    echo 'failed because: ' .  $db->error . '   ';
  };
  $db->close();

} else {
  // echo 'failed because: ' .  $db->error . '   ';
};
?>
