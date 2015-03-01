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
$result = pg_query($dbconn, "select * from avellaneda.preinscriptos;");
$table = pg_fetch_all($result);
if (!$table) die("No hay preinscriptos aún");
echo "<table class='listado' border='1' name='preinscriptos'>\n";
echo "<tr>";
foreach ($table[0] as $name=>$column) echo "<th>$name</th>";
echo "</tr>\n";
$alt='';
foreach ($table as $row) {
  echo "<tr $alt>";
  foreach ($row as $column) echo "<td>$column</td>";
  echo "</tr>\n";
  if (!$alt) $alt='class="alt"'; else $alt='';
  }
echo "</table>";
?>
</body>
</html>

