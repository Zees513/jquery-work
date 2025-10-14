$(document).ready(function(){
    $("#add").click(function(){
        $("p").addClass("heighlight")
    })

    $("#remove").click(function(){
        $("p").removeClass("heighlight")
    })

    $("#toggle").click(function(){
        $("p").toggleClass("heighlight")
    })


    let items = ['zeeshan','hassnain','waleed','saad','gulzaman']
    let index = 0;
    $("#append").click(function(){
        if(index < items.length){
            $("#list").append("<li>" + items[index] + "</li>")
            index++
        }else{
            alert("all values added")
        }

    })



    $("#prepend").click(function(){
        if(index < items.length){
            $("#list").prepend("<li>" + items[index] + "</li>")
            index++
        }else{
            alert("all values added")
        }

    })

     
})