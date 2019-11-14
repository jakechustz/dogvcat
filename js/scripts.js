$(document).ready(function() {
  $("button#clickhere").click(function() {
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
      $("#my-image").click(function() {
        $("")
      }
      )
    });
  });

  $("button#clickhere").click(function() {
    $("ul#user").append("<li>Ruff</li>");
    $("ul#webpage").append("<li>Meow</li>");
  }); 

  $("button#clickagain").click(function() {
    $("ul#user").append("<li>Are you done yet?</li>");
    $("ul#webpage").append("<li>No, not yet.</li>");
  });

  $("button#clickforsurprise").click(function() {
    $("ul#user").append("<li>Cmon seriously...are you done yet?</li>");
    $("ul#webpage").append("<li>Nope.</li>");
  });
}); 