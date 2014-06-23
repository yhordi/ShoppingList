$(document).ready(function () {
  var userItem = $("#userInput").val();
  $("#noString").hide();
  $("#add").on("click", itemCleanUp);

  $("#userInput").keydown(function(e){
    if(e.which == 13) {
      var userItem = $("#userInput").val();
      if ($.trim(userItem) !== '') {
        $('ul').append('<li>' + " " + userItem + '</li>');
        $('input').val('');
        $('<input>', {
          type: "checkbox",
        }).prependTo('li:last-child').addClass(".cb");
        $("#noString").hide();
      } else $("#noString").show();
    }
  });


//view//
var View = function() {}

View.prototype = {
 itemCleanUp: function() {
  debugger
  if ($.trim(userItem) !== '') {
      $('ul').append('<li>' + " " + userItem + '</li>');
      $('input').val('');
      $('<input>', {
        type: "checkbox",
      }).prependTo('li:last-child').addClass(".cb");
      $("#noString").hide();
    } else $("#noString").show();
 }

}




  $("#clearChecked").click(function () {
    $("li.bonus").remove();
  });

  $("#clearAll").click(function () {
    $("li").remove();
  });

//checkbox functions for chekcing and unchecking
  $('body').on('click', 'input:checkbox', function () {
    $(this).parent("li").toggleClass("bonus");

  });

  if ($('checkbox:checked').is('checked')) {
    $('body').on('click', 'input:checkbox', function(){
      $(this).parent("li").removeClass("bonus");
    });
  }

});






