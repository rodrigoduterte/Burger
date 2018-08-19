// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    var dialog = UIkit.modal('#modal');
    console.log(dialog);
    $( document ).on("click", ".devour", function(event) {
      var id = parseInt($(this).attr("dataid"));
      var name = $(this).parent().text().replace('Devour','');

      $(this).parent().remove();
      var devourBurger = {
        id: id
      };
      $("#eaten").append("<li>"+name+"</li>");

      // Send the PUT request.
      $.ajax("/index", {
        type: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(devourBurger)
      }).done(function () {
        // only runs after stopping the server
        console.log('SUCCESS');
      }).fail(function (msg) {
        // only runs after stopping the server
        console.log('FAIL');
      }).always(function (msg) {
        // only runs after stopping the server
        console.log('ALWAYS');
      });
    });
  
    $("#submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#enter").val().trim()
      };

      if (newBurger.name.length !== 0 && newBurger.name.toLowerCase().includes('burger')) {
        $.post("/index", newBurger, function (response, status, jqXHR) {// success callback
          $("#uneaten").append("<div>"+response.id + ". " + newBurger.name + "<button dataid='"+response.id+"' class='devour uk-align-right uk-button uk-button-default uk-button-medium'>Devour</button></div>");
        });
      } else {
        // alert('You must include the word burger');
        UIkit.util.on('#submit', 'click', function (e) {
          e.preventDefault();
          e.target.blur();
          dialog.show();
        });
      }
    });
  });
  