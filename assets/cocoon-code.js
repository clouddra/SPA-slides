$('#owner')
  .on('cocoon:before-insert', function() {
    $("#owner_from_list").hide();
    $("#owner a.add_fields").hide();
  })
  .on('cocoon:after-insert', function() {
    /* ... do something ... */
  });