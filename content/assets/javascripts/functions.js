/* debouncedresize */
(function(e){var t=e.event,n,r;n=t.special.debouncedresize={setup:function(){e(this).on("resize",n.handler);},teardown:function(){e(this).off("resize",n.handler);},handler:function(e,i){var s=this,o=arguments,u=function(){e.type="debouncedresize";t.dispatch.apply(s,o);};if(r){clearTimeout(r);}i?u():r=setTimeout(u,n.threshold);},threshold:150};})(jQuery);
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100);}; return c;}

var Nukomeet = {

on_resize(function(){
  Nukomeet.resize.init();
})();

$(document).ready(function(){
	Nukomeet.ready();

  $('#search').on('change keyup', function() {
    console.log($(this));
    $('.article-item').search($(this).val());
  })
});