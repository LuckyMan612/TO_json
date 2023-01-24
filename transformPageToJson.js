// funkcja do przekształcania strony internetowej w JSON
function transformPageToJson(pageUrl) {
  // tworzenie nowego obiektu XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // żądanie GET na podany adres URL
  xhr.open('GET', pageUrl);
  // po otrzymaniu odpowiedzi
  xhr.onload = function() {
    if (xhr.status === 200) {
      // zapisanie odpowiedzi
      var pageHtml = xhr.responseText;
      // zamienienie HTML na tablicę lini tekstu
      var pageLines = pageHtml.split('\n');
      // tworzenie obiektu JSON
      var pageJson = {};
      // przekształcanie lini tekstu w obiekt JSON
      pageLines.forEach(function(line, index) {
        pageJson[index] = line;
      });
      // wyświetlenie obiektu JSON
      console.log(pageJson);
    } else {
      console.log('Wystąpił błąd podczas żądania');
    }
  };
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // wysłanie żądania
  xhr.send();  
  // nie wiem
  
}
