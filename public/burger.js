
$(document).ready(function (){

   //this is the button for adding a burger
    $(".addBurger").click(function(event, err){
            if (err) {
                console.log(err);
            } else {
            console.log("click");
            let addBurger = {
                addBurger: $("#ca").val().trim(),
            }
            console.log(addBurger)
            $.post("/api/burgers", addBurger,
            function(data) {
                if (data) {
                    console.log("added");
                } else {
            alert("sorry, try again");
            }
            })
        }
        });

    $(".devoured").click(function(event, err) {
        const id = $(this).data("id");
        const hungry = $(this).data("devoured");
          
        console.log(hungry)

        const hungerState = {
                full: hungry
              };
          
              // Send the PUT request.
              $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: hungerState
              }).then(() => {
                console.log("changed  to " + hungerState);
                // Reload the page to get the updated list
                location.reload();
              });
              console.log("burger eaten")
            });

  
  $(".delete-burger").on("click", function(event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(() => {
      console.log("one burger eaten", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
})
