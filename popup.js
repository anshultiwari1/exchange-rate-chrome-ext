var get_aed_rate = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.xe.com/currencyconverter/convert/?Amount=1&From=AED&To=INR", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var el = document.createElement( 'div' );
      el.innerHTML = xhr.responseText;

      var currency_text;
      $('.uccRes .rightCol', el).each(function() { currency_text = $(this).html();});

      var re = /\d+.\d+/;
      var current_rate = currency_text.match(re)[0];
      $("#aed_amount").val(current_rate);
    }
  }

  xhr.send();
};

var get_usd_rate = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=INR", true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var el = document.createElement( 'div' );
      el.innerHTML = xhr.responseText;

      var currency_text;
      $('.uccRes .rightCol', el).each(function() { currency_text = $(this).html();});

      var re = /\d+.\d+/;
      var current_rate = currency_text.match(re)[0];
      $("#usd_amount").val(current_rate);
    }
  }

  xhr.send();
};

var get_eur_rate = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.xe.com/currencyconverter/convert/?Amount=1&From=EUR&To=INR", true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var el = document.createElement( 'div' );
      el.innerHTML = xhr.responseText;

      var currency_text;
      $('.uccRes .rightCol', el).each(function() { currency_text = $(this).html();});

      var re = /\d+.\d+/;
      var current_rate = currency_text.match(re)[0];
      $("#eur_amount").val(current_rate);
    }
  }

  xhr.send();
};

var get_aus_rate = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.xe.com/currencyconverter/convert/?Amount=1&From=AUD&To=INR", true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var el = document.createElement( 'div' );
      el.innerHTML = xhr.responseText;

      var currency_text;
      $('.uccRes .rightCol', el).each(function() { currency_text = $(this).html();});

      var re = /\d+.\d+/;
      var current_rate = currency_text.match(re)[0];
      $("#aud_amount").val(current_rate);
    }
  }

  xhr.send();
};

var get_currency_rate = function () {
  get_aed_rate();
  get_usd_rate();
  get_eur_rate();
  get_aus_rate();
};


$(document).ready(function() {
  get_currency_rate();

  $("#get_rate").click(function() {
    get_currency_rate();
  });

});
