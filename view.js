var View = function() {}

View.prototype = {
 itemCleanUp: function() {
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