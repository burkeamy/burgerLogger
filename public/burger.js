
$(document).ready(function (){

    $(".submit").on("click", function(event){
        console.log(event);
        console.log("burger added")
    })
}

$.post("/api/burgers", addBurger,
    function(data) {
        if (data) {
        console.log("added");
        } else {
            alert("sorry, try again")
        }
    })
})