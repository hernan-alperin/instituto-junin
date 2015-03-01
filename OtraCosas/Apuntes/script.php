<?
/* Get your credentials at:
* Argentina: https://www.mercadopago.com/mla/herramientas/aplicaciones
* Brazil: https://www.mercadopago.com/mlb/ferramentas/aplicacoes
* Mexico: https://www.mercadopago.com/mlm/herramientas/aplicaciones
* Venezuela: https://www.mercadopago.com/mlv/herramientas/aplicaciones
* Colombia: https://www.mercadopago.com/mco/herramientas/aplicaciones
*/

$mp = new MP('381751892647232', '2eBh7yaKcx92m8yi0IGPOsBxw8nQPS3S');

$preference_data = array(
    "items" => array(
       array(
           "title" => "Multicolor kite",
           "quantity" => 1,
           "currency_id" => "ARS",
           "unit_price" => 10.00
       )
    )
);

$preference = $mp->create_preference ($preference_data);
?>
