$(document).ready(function(){
    $("p").on({
        mouseenter : function(){
            $(this).css({
                "background-color" : "red",
                "color" : "white"
            })
        },

        mouseleave : function(){
            $(this).css({
                "background-color" : "blue",
                "color" : "white"
            })
        }
    })
})