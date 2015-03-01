<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
</head>
<body>
<?php
$dbconn = pg_connect("host=localhost port=5432 dbname=ij user=www password=ae4Lfm8q") or die("not connected");
$result = pg_query($dbconn, "select * from avellaneda.preinscriptos;");
$table = pg_fetch_all($result);
echo "<table name='preinscriptos'>";
foreach ($table as $row) {
  echo "<tr>";
  foreach ($row as $column) echo "<td>$column</td>";
  echo "</tr>\n";
  }
echo "</table>";
?>
</body>
</html>

