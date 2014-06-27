$(document).ready(function() {
  var view = new View()
  var controller = new Controller(view)
  controller.bindListeners()
  $("#noString").hide();
});
