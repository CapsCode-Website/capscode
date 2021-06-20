$("#myform").submit(function(e) {
    e.preventDefault();// will let page not to reload
  
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Hey, Thank you!");
    });
  });