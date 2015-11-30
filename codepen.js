// Twitter Button
window.twttr = (function(d, s, id) {
  var t, js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  return window.twttr || (t = {
    _e: [],
    ready: function(f) {
      t._e.push(f)
    }
  });
}(document, "script", "twitter-wjs"));

// my Jquery

var randomQuote = function() {
  return $.getJSON("http://api.icndb.com/jokes/random?escape=javascript", function(data) {
    var quote = data.value.joke;
    $("#quote").text(quote);
    $('title').text(quote);
    createButton();
  });
};

function createButton() {

  // Remove Whatever is in the tweeetbox div if theres somethign
  //there to avoid adding multiple tweetbuttons

  var elem = $('.twitter-share-button')[0];
  $(elem).remove();

  // Create a New Tweet Element
  var msg = $('#quote').text();
  if(msg.length > 91) {
    msg = msg.slice(0, 88) + "..."
  }
  var link = document.createElement('a');
  link.setAttribute('href', 'https://twitter.com/share');
  link.setAttribute('class', 'twitter-share-button');
  link.setAttribute('style', 'margin-top:5px;');
  link.setAttribute("data-text", "" + msg + "");
  link.setAttribute("data-hashtags", "chuckNorris");
  link.setAttribute("data-size", "large");
  // Put it inside the twtbtn div
  tweetdiv = document.getElementById('twtbtn');
  tweetdiv.appendChild(link);

  twttr.widgets.load(); //very important
}

$(document).ready(function() {
  randomQuote();
  $("").css("font-size", "100px");
  $("#new-quote").click(randomQuote);
});