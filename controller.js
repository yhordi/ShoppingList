function Controller(view) {
  this.view = new View()
};

Controller.prototype = {
  bindListeners: function() {
    var self = this
    $("#add").on("click", this.cleanView.bind(this));
    $("#userInput").keydown(function(e) {
      self.enterPress(e)
    })
    $("#clearChecked").click(this.view.clearChecked.bind(this))
    $("#clearAll").click(this.view.clearAll.bind(this))
    $('body').on('click', 'input:checkbox', this.view.boxCheck.bind(this));
  },
  cleanView: function() {
    console.log("cleanView")
    this.view.itemCleanUp()
  },
  enterPress: function(e) {
    if (e.which == 13) {
      this.cleanView();
    }
  }
};
