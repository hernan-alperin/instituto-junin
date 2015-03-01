<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Instituto Junín ¡Es aprobar!</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="expires" content="-1" />
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<?php
$dbconn = pg_connect("host=localhost port=5432 dbname=ij user=www password=ae4Lfm8q") or die("not connected");
$res = pg_insert($dbconn, 'avellaneda.preinscriptos', $_POST);
  if ($res) {
      echo "Preinscripción registrada\n";
  } else {
      echo "Tuvimos un problema\n";

  }
?>
</body>
</html>
