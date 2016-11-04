define(function(require, exports, module) {
    
    exports.run = function() {
        $('.tab-body ul').each(function(){
            if ($(this).find('li.active').length == 0) {
                $(this).find('li.all').addClass('active');
            }
        });
        $('.js-tabs-toggle').on('click', function(){
            var $parent = $(this).parents('.tabs-group');
            if( $(this).hasClass('tabs-hide') ) {
                var height = $parent.find('.content').height();
                $(this).removeClass('tabs-hide');
                $(this).text('收齐');
                $parent.animate({
                    height: height

                },100);
            }
            else {
                $(this).addClass('tabs-hide');
                $(this).text('展开');
                $parent.animate({
                    height: '50px'
                }, 100);
            }
            
        });
    };

    
});