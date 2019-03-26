
$(document).ready(function (){

const addBurger = {
    $("#ca").submint(function (data){
        console.log(data);
        console.log("burger added")
    })
}

$.post("/api/burgers", addBurger,
    function(data) {

    })
})