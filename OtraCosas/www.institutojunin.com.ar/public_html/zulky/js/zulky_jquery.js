/**
 * Este script forma parte de
 * ZULKY Framework para Desarrollo Empresarial
 * Copyright (c) Ignacio Casinelli Esviza
 */
var A_TCALSIDX = false;
var tiempoEfectos = 0.25;
var waitBoxAndando = false;
String.prototype.trim=function(){return this.replace('/^\s+|\s+$/g',"");}
String.prototype.pad=function(l,s,t){return s||(s=" "),(l-=this.length)>0?(s=new Array(Math.ceil(l/s.length)+1).join(s)).substr(0,t=!t?l:t==1?0:Math.ceil(l/2))+this+s.substr(0,l-t):this;}
String.prototype.toCamel = function(){return this.substr(0,1).toLowerCase()+this.substr(1)};
function zSubmit(f){if($('#usoBotones').val()=="0"){return false;}return true;}
function zAtras(){history.back(1);}
function zGet(m,a,o){cargando();o=(o==null?"":o);document.location="?m="+m+"&a="+a+"&"+o;}
function zSetAccion(m,a){$('#m').val(m);$('#a').val(a);}
function zLimpiarAccion(){$('#m').val("");$('#a').val("");}
function zPost(m,a,t,s){
    if(t!=null){
        if(!confirm(t)) return
    }
    cargando()
    zSetAccion(m,a)
    $('#usoBotones').val("1")
    $('#form').submit()
}
function zPostBack(e){
    $('#postBack').val((e==null?"1":$(e).id));
    cargando();
    $('#usoBotones').val("1");
    document.form.submit();
}
function zPostUrl(u){$('#form').attr("action",u);document.form.submit();}
function borrar(u){zConfirm("Confirma que desea eliminar el elemento?",u);}
function zConfirm(m,u){if(!confirm(m)){return false;}document.location=u;}
function isdefined(v){return(typeof(window[v])=="undefined")?false:true;}
function alternar(e){var o=document.getElementById(e);o.style.display=o.style.display=="none"?"":"none";return o.style.display;}
function zOcultar(e){$(e).hide();}
function zMostrar(e){$(e).show();}
function mover(d,h){d=$(d);h=$(h);if(d.length==0){alert("No hay elementos que mover.");return false;}if(d.selectedIndex==-1){alert("Debe marcar un elemento para mover.");return false;}for(var i=0;i<d.length;i++){if(d.options[i].selected){var x=document.createElement("option");x.value=d.options[i].value;x.text=d.options[i].text;h.add(x);}}for(i=d.length-1;i>=0;i--){if(d.options[i].selected){d.remove(i);}}}
function alternarIcono(i,o,m,n){i=$(i);o=$(o);i.src=o.style.display=="none"?m:n;}
function stringValoresSelect(d){d=$(d);var s="";for(var i=0;i<d.length;i++){s=(s==""?"":s+",")+d.options[i].value;}return s;}
function implode(t,d){d=$(d);var s="";for(var i=0;i<d.length;i++){if(s!="")s=s+t;s=s+d.options[i].value;}return s;}
function vacio(e){e=$(e);if(e.value==""){e.focus();}}
function zFiltrar(m,a){document.form.usarFiltro.value="1";document.form.usoBotones.value="1";zPost(m,a);}
function zDespachar(m,a){zPost(m,a);}
var zGetUrl = function(u){cargando();document.location.href=u;}
zGetConAjax = function(e,m,a,x,r,v,b){
    cargando()
    zSetAccion(m,a)
    if(x==null){x=$('#form').serialize();}else{x=x+"&m="+m+"&a="+a;}
    var url = x+"&conAjax=true&"+1*new Date();
    $.get('?'+url,null,
        function(data){
            $(e).html(data);
            if(v!=null)$(v).show();
            chauCargando();
            if(b!=null)b();
        },'html');
}
//	new Ajax.Updater(e,'?',{
//		parameters:x+'&m='+m+'&a='+a+'&conAjax=true',
//		evalScripts:true,
//		method:'get',
//		encoding:'UTF-8',
//		contentType:'application/x-www-form-urlencoded; charset=UTF-8',
//		onComplete:function(){new Effect.Highlight($(e),{duration:tiempoEfectos,queue:'end'});if(r!=null)new Element.scrollTo($(r));if(waitBoxAndando)chauModalBox();chauCargando();if(v!=null)$(v).show();if(b!=null)b();}});
function zPostConAjax(e,m,a,x,r,v,b){
    cargando()
    zSetAccion(m,a)
    if(x==null){x=$('#form').serialize();}else{x=x+"&m="+m+"&a="+a;}
    jQuery.post('?',x+"&conAjax=true",function(data){
        $(e).html(data)
        if(v!=null)$(v).show()
        chauCargando()
        if(b!=null)b()
    });
}
function zRequerir(e){if($(e).value.blank()){$(e).focus();alert("Debe proporcionar un valor para "+zGetLabelFor(e));return false;}return true;}
function zGetLabelFor(e){var l=document.getElementById(e).parentNode.getElementsByTagName('LABEL');for(var i=0;i<l.length;i++){if(l[i].htmlFor==e){return l[i].innerHTML;}}return "";}
function getKeynum(e){var k;if(window.event){k=e.keyCode;}else if(e.which){k=e.which;}return k;}
function getKeyChar(e){return String.fromCharCode(getKeynum(e));}
function zfxDesplegar(e,r,b){
    e=$("#" + e);
    if(!e.is(":visible")){
        e.show(tiempoEfectos);
    }
    if(r!=null) {
        $('html,body').animate({scrollTop: e.offset().top}, {duration: 'slow', easing: 'swing'});
    };
}
function zfxContraer(e){$("#"+e).hide();}
function zfxAlternar(e,s){$(e).toggle();}
var zPintarFilas=function(o){var f=o.rows;var i=1;for(j=1;j<f.length;j++){if(i==1){f[j].addClassName("impar");i=0;}else{f[j].addClassName("par");i=1;}}}
var zAlternarFila=function(e){if($(e).hasClassName("seleccionFila")){$(e).removeClassName('seleccionFila');}else{$(e).addClassName("seleccionFila");}}
var combo_change=function(e){var id=$(e).id.substr(0,$(e).id.length-2)+"nombre";if($(e).value==-1){$(id).show();$(id).focus();}else{$(id).hide();}}
var comboFecha_change=function(id){
    $("#"+id).val($("#"+id+'Dia').val().pad(2,"0",2)+"/"+$("#"+id+'Mes').val().pad(2,"0",2)+"/"+$("#"+id+"Anio").val());
}
var clipCopy=function(d){clipboardData.setData('text',d);}
var zHtmlWrite=function(x,y){$(x).innerHTML=y;};
var format = function(x,d){var s=""+Math.round(eval(x)*Math.pow(10,d));while(s.length<=d){s="0"+s;}var p=s.length-d;return s.substring(0,p)+"."+s.substring(p,s.length);}
var editorHtmlFull = function(){
	tinyMCE.init({
		mode : "textareas",
		editor_selector: "mce_editable",
		theme : "advanced",
		plugins : "style,layer,table,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,pagebreak,imagemanager,filemanager",
		theme_advanced_buttons1_add : "fontselect,fontsizeselect",
		theme_advanced_buttons2_add : "separator,insertdate,inserttime,preview,separator,forecolor,backcolor",
		theme_advanced_buttons2_add_before: "cut,copy,paste,pastetext,pasteword,separator,search,replace,separator",
		theme_advanced_buttons3_add_before : "tablecontrols,separator",
		theme_advanced_buttons3_add : "emotions,iespell,media,advhr,separator,print,separator,ltr,rtl,separator,fullscreen",
		theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,|,spellchecker,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,blockquote,pagebreak,|,insertfile,insertimage",
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "bottom",
		content_css : "/example_data/example_full.css",
	    plugin_insertdate_dateFormat : "%Y-%m-%d",
	    plugin_insertdate_timeFormat : "%H:%M:%S",
		external_link_list_url : "example_data/example_link_list.js",
		external_image_list_url : "example_data/example_image_list.js",
		flash_external_list_url : "example_data/example_flash_list.js",
		template_external_list_url : "example_data/example_template_list.js",
		theme_advanced_resize_horizontal : true,
		theme_advanced_resizing : true,
		apply_source_formatting : true,
		spellchecker_languages : "+Spanish=es,English=en"
	});
}
var quitarSeleccionado=function(e){if(e.length==0){alert("No hay elementos que quitar.");return false;}if(e.selectedIndex==-1){alert("Debe marcar un elemento para quitar.");return false;}for(var i=e.length-1;i>=0;i--){if(e.options[i].selected){e.remove(i);}}}
var tieneElementoText=function(o,t){var x=false;for(var j=0;j<o.length;j++){if(o.options[j].text==t){x=true;break;}}return x;}
var zDiasEntre=function(d,h){return Math.floor(Math.abs(h.getTime()-d.getTime())/(1000*60*60*24))+1;}
var tomarFechaDeCombo=function(e){return new Date($(e+"Anio").value,$(e+"Mes").value,$(e+"Dia").value);}
var actualizaMasMenos=function(e,i,d,m,n){
    var o=$('#' + e);

    if(o.disabled)return;
    var a=parseFloat(o.val());


    d=isNaN(d)?0:d;
    a=isNaN(a)?0:a;
    if(i>0){
        if(m!=null){
            a=a+i>m?a:a+i;
        }else{
            a+=i;
        }
    }
    if(i<0){
        if(n!=null){
            a=a+i<n?a:a+i;
        }else{
            a+=i;
        }
    }
    if(d!=0 && d != null ){a = format(a,d);}
    o.val(a);
}
var waitBox=function(){
    msgBoxReset();
    $('#txtMsgBox').html('Procesando...<div id="divMsgBoxSpinner"></div>');
    $('#divMsgBoxSpinner').show();
    waitBoxAndando=true;
    $('#msgBoxTitulo').text('Procesando...');
    $('#divMsgBox').modal({keyboard:false})
}
var msgBoxReset=function(){
    $('#txtMsgBox').html('');
    $('#divMsgBoxAceptar').hide();
    $('#divMsgBoxSiNo').hide();
    chauCargando();
}
var msgBox=function(t,b){
    msgBoxReset();
    $('#txtMsgBox').html(t);
    $('#divMsgBoxAceptar').show();
    $('#msgBoxTitulo').text('Atenci&oacute;n');
    $('#divMsgBox').modal();
}
var msgBoxSiNo=function(t,b){
    msgBoxReset();
    $('#txtMsgBox').html(t);
    $('#divMsgBoxSiNo').show();
    $('#msgBoxTitulo').text('Atenci&oacute;n');
    $('#divMsgBox').modal();
    btnMsgBoxSi_click=b;
}
var stripHTML=function(s){return s.replace(/<&#91;^>&#93;*>/g,"");}
var zEnter=function(e,f){if(((document.all)?e.keyCode:e.which)==13)f();}
var cargando=function(){if (!waitBoxAndando && $('#divCargando')) $('#divCargando').show();}
var dtos=function(d){return (d.getFullYear()*10000)+(d.getMonth()*100)+d.getDay();}
var chauModalbox=function(){
    $('#divMsgBox').modal('hide');
    waitBoxAndando=false;
}
var chauCargando=function(){if ($('#divCargando')) $('#divCargando').hide();}
var zOption=function(t,v){var x=document.createElement("option");x.value=v;x.text=t;return x;}
var zSortSimple=function(x,y){return (x>y?1:(x==y?0:-1))}
var base64_encode=function(d){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,enc="",tmp_arr=[];if(!d){return d;}d=utf8_encode(d+'');do{o1=d.charCodeAt(i++);o2=d.charCodeAt(i++);o3=d.charCodeAt(i++);bits=o1<<16|o2<<8|o3;h1=bits>>18 & 0x3f;h2=bits>>12 & 0x3f;h3=bits>>6 & 0x3f;h4=bits & 0x3f;tmp_arr[ac++]=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4);}while(i<d.length);enc=tmp_arr.join('');switch(d.length % 3){case 1:enc=enc.slice(0,-2)+'==';break;case 2:enc=enc.slice(0,-1)+'=';break;}return enc;}
var zJson=function(m,a,f){cargando();zSetAccion(m,a);jx.load("?"+$("#form").serialize()+"&conAjax=true",f,"json");}
var yetii=function(i,tc){var t;if(tc!=null){t=new Yetii({id:i,tabclass:tc});}else{t=new Yetii({id:i});}}
grayOut = function(vis, options1) {
  var options = options1 || {};
  var zindex = options.zindex || 4000;
  var opacity = options.opacity || 70;
  var opaque = (opacity / 100);
  var bgcolor = options.bgcolor || '#000000';
  var dark=document.getElementById('darkenScreenObject');
  if (!dark) {
    var tbody = document.getElementsByTagName("body")[0];
    var tnode = document.createElement('div');           // Create the layer.
        tnode.style.position='absolute';                 // Position absolutely
        tnode.style.top='0px';                           // In the top
        tnode.style.left='0px';                          // Left corner of the page
        tnode.style.overflow='hidden';                   // Try to avoid making scroll bars
        tnode.style.display='none';                      // Start out Hidden
        tnode.style.cursor='pointer';
        tnode.id='darkenScreenObject';                   // Name it so we can find it later
    tbody.appendChild(tnode);                            // Add it to the web page
    dark=document.getElementById('darkenScreenObject');  // Get the object.
  }
  if (vis) {
    // Calculate the page width and height
    if( document.body && ( document.body.scrollWidth || document.body.scrollHeight ) ) {
        var pageWidth = document.body.scrollWidth+'px';
        var pageHeight = document.body.scrollHeight+'px';
    } else if( document.body.offsetWidth ) {
      var pageWidth = document.body.offsetWidth+'px';
      var pageHeight = document.body.offsetHeight+'px';
    } else {
       var pageWidth='100%';
       var pageHeight='100%';
    }
    //set the shader to cover the entire page and make it visible.
    dark.style.opacity=opaque;
    dark.style.MozOpacity=opaque;
    dark.style.filter='alpha(opacity='+opacity+')';
    dark.style.zIndex=zindex;
    dark.style.backgroundColor=bgcolor;
    dark.style.width= pageWidth;
    dark.style.height= pageHeight;
    dark.style.display='block';
  } else {
     dark.style.display='none';
  }
}