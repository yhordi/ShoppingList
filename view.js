var View = function() {
  // this.userItem = $("#userInput").val(); I couldn't make this work, but I intend to try
}

View.prototype = {
  createItem: function() {
    $('ul').append('<li>' + " " + $("#userInput").val() + '</li>');
    $('input').val('');
    this.addCheckBox()
    $("#noString").hide();
  },
  itemCleanUp: function() {
    if ($("#userInput").val().length > 0) {
      this.createItem()
    } else {
      this.showNoString()
    }
  },
  showNoString: function() {
    $("#noString").show()
  },
  addCheckBox: function(){
    $('<input>', {
      type: "checkbox",
    }).prependTo('li:last-child').addClass(".cb");
  },
  clearChecked: function(){
    console.log("clearChecked called")
    $("li.bonus").remove();
  },
  clearAll: function(){
    console.log("clearAll called")
    $("li").remove();
  },
  boxCheck: function(){
    console.log("box checked!")
    $("li").toggleClass("bonus");
  }
}
