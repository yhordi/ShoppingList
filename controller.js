var Controller = function(view) {
  this.view = new View()
};

Controller.prototype = {
  bindListeners: function() {
    // $("#add").on("click", this.view.itemCleanUp.bind(this.view));
    $("#add").on("click", this.cleanView.bind(this) );

  },
  cleanView: function() {
    this.view.itemCleanUp()
  }
};