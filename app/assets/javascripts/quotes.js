$(document).ready(function(){
  $('#btn-submit').click(function(e){
    e.preventDefault();

    var quoteData = $('form').serialize();
    var $quotes = $('#quotes');
    var content = $('#content').val();
    var writer = $('#writer').val();

    $.ajax({
      url:'/quotes',
      method: 'POST',
      data: quoteData,
      dataType: 'script',
      success: function(quote){
        $quotes.prepend(`<ul class = "quote">
          <li> ${content} </li>
          <li>by <em>${writer}</em></li>
          </ul>`);
      },
      error: function(){
        alert("ajax not working!");
      }
    });
  });

})
