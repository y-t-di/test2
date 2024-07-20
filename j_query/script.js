jQuery(function(){
    
    $("img").hover(
        function(){
            $(this).animate({width:400px});
        },
        function(){
            $(this).animate({width;400px});
        }
    );
    
    $("p").click(function(){
        $(this).css("color","red");
    });
    
});