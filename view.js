var View = function() {
  this.userItem = $("#userInput").val();
}

View.prototype = {
  createItem: function() {
    $('ul').append('<li>' + " " + this.userItem + '</li>');
    $('input').val('');
    $('<input>', {
      type: "checkbox",
    }).prependTo('li:last-child').addClass(".cb");
    $("#noString").hide();
  },
  itemCleanUp: function() {
    if (this.userItem.length > 0) {
      createItem()
    } else {
      this.showNoString()
    }
  },
  showNoString: function() {
    $("#noString").show()
  },
  addCheckBox: function(){

    }

}
