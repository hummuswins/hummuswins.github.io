$(document).ready(function() {
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      $(".qte").html(a[0].content);
      $(".author").html(a[0].title);
  });
  $("#getQuote").on("click", function(e) {
    e.preventDefault();
     $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('.author').text(post.title);
        $('.qte').html(post.content);
      },
      cache: false
    });
  });
});