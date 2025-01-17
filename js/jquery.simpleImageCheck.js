;(function($){$.fn.simpleImageCheck=function(o){var n=this;if(n.length<1){return n;}
o=(o)?o:{};o=auditOptions(o);n.each(function(){var i=$(this);if(i.is(':checkbox')||i.is(':radio')){setup(i,o);}});return n;};var setup=function(n,o){var c=n.is(':checked');var src=o.image;if(c){src=o.imageChecked;}
var id=n.attr('id');if(!id||id.length<1){id=n.attr('id','imageCheckInput_'+$.fn.simpleImageCheck.uid++).attr('id');}
var l=$('label[for="'+id+'"]');var im=n.before("<img src='"+src+"' id='ic_"+id+"' alt='"+l.text()+"' title='"+l.text()+"' class='imageCheck"+((c)?' checked':'')+"' role='checkbox' aria-checked='"+((c)?'true':'false')+"' aria-controls='"+id+"' />").parent().find('img#ic_'+id);n.click(function(e,triggered){if(triggered===true){return;}
handleClick(n,im,o,true);}).hide();l.click(function(e){im.click();return false;});var ti=n.attr('tabindex')||n.get(0).tabIndex||0;im.css({cursor:'pointer'}).click(function(e){e.preventDefault();handleClick(n,im,o,false);}).keypress(function(e){var k=(e.which)?e.which:((e.keyCode)?e.keyCode:0);if(k==13||k==32){$(this).click();}}).hover(function(){$(this).addClass('imageCheckHover');},function(){$(this).removeClass('imageCheckHover');}).get(0).tabIndex=ti;}
var handleClick=function(n,im,o,inputClick){if(im.hasClass('checked')===n.is(':checked')&&!inputClick){n.trigger('click',[true]).change();}
var c=n.is(':checked');im.toggleClass('checked').attr({'aria-checked':''+((c)?'true':'false'),'src':''+((c)?o.imageChecked:o.image)});if(n.is(':radio')&&!inputClick){$('input[name="'+n.attr('name')+'"]').not(n).each(function(){$('#ic_'+this.id).removeClass('checked').attr({'aria-checked':'false','src':''+o.image});});}
setTimeout(function(){o.afterCheck.apply(n,[c]);},25);}
var auditOptions=function(o){if(!$.isFunction(o.afterCheck)){o.afterCheck=function(){};}
if(typeof(o.image)!='string'){o.image='';}
if(typeof(o.imageChecked)!='string'){o.imageChecked='';}
return o;}
$.fn.simpleImageCheck.uid=0;})(jQuery);