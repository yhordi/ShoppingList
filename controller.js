var Controller = function(){
  this.view = new View
};

Controller.prototype = {
  bindListeners: function(){
  $("#add").on("click", this.view.itemCleanUp);
  },
};