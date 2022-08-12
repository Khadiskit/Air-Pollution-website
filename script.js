/* .js files add interaction to your website */
//fact generator
var quoteList = [
  "Inhaling air pollution takes away at least 1-2 years of a typical human life.",
  " Pollutants that are released into the air, as opposed to land and water pollutants, are the most harmful.",
  "Deaths caused by air pollution cost the European Union €161 billion.",
  "Air pollution and resulting deaths are increasing fastest in Asia.",
  "65% of the deaths in Asia and 25% of deaths in India is due to air pollution."
  
];

var quote = document.getElementById("quote");
var myBtn = document.getElementById("myBtn");
var count = 0

myBtn.addEventListener("click",displayQuote);
function displayQuote() {
  quote.innerHTML = quoteList[count];
  count++; // adds 1 to count
  if (count == quoteList.length) {
    count = 0;
  }
}