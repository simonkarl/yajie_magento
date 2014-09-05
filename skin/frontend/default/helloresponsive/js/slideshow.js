var $j=jQuery.noConflict();
$j(window).load(function() {
    $j("#slideshow").craftyslide();


    jQuery("#slideshow").craftyslide({
  'width': 1000,//幻灯片宽度
  'height': 400,//幻灯片高度
  'pagination': false,//是否显示导航按钮
  'fadetime': 500,//渐隐时间
  'delay': 5000//切换间隔
});

});
