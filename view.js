var View = function() {
  // this.userItem = $("#userInput").val(); I couldn't make this work, but I intend to try
}

View.prototype = {
  createItem: function() {
    console.log("createItem called")
    $('ul').append('<li>' + " " + $("#userInput").val() + '</li>');
    $('input').val('');
    $('<input>', {
      type: "checkbox",
    }).prependTo('li:last-child').addClass(".cb");
    $("#noString").hide();
  },
  itemCleanUp: function() {
    console.log("itemCleanUp called")
    if ($("#userInput").val().length > 0) {
      console.log("if statement called")
      this.createItem()
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
