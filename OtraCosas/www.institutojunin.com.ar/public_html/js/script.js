$().ready(function()
{
    $(".preguntas li a").click(function(event)
    {
        event.preventDefault();
        $(this).addClass('selected');
        $(".div-reply").slideToggle('fast');
    });
    $('a[rel="cargando"]').each(function(e){if(this.onclick==null && this.target==''){this.onclick=function(){cargando()};}});
}
)




