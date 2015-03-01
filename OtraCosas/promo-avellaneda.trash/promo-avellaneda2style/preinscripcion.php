<?php
$dbconn = pg_connect("host=localhost port=5432 dbname=ij user=www password=ae4Lfm8q") or die("not connected");
$res = pg_insert($dbconn, 'avellaneda.preinscriptos', $_POST);
  if ($res) {
      echo "Preinscripción registrada\n";
  } else {
      echo "Tuvimos un problema\n";

  }
?>
