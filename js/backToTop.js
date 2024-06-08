$(function(){
//動畫方式回到上層
$("#gotop").click(function(){
    jQuery("html,body").animate({
    scrollTop:0
  },2000);
});

});
