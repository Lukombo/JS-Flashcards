var wordArea = document.querySelector("#words");
var flipButton = document.querySelector("#flipButton");
var nextButton = document.querySelector("#nextButton");

var englishWords = ["tree", "house", "mouse", "pen", "car"];
var germanWords = ["Baum", "Haus", "Maus" , "Stift" , "Auto" ];

nextButton.addEventListener("click", (e) => addWord())
flipButton.addEventListener("click", (e) => flip())

var count = 0;
var wordType = "german";
var englishWord;
var germanWord;

function counter(){
  count++;
  if (count > 4)
    count = 0;
}

function addWord(){
  if(germanWord != null)
    germanWord.remove();
  if(englishWord != null)
    englishWord.remove;
  englishWord = document.createElement("h2");
  englishWord.innerText = englishWords[count];
  englishWord.setAttribute("class", "englishWord")
  germanWord = document.createElement("h2");
  germanWord.innerText = germanWords[count];
  germanWord.setAttribute("class", "germanWord")
  wordArea.appendChild(germanWord);
  counter();
}

function flip(){
  if(wordType == "german"){
    document.querySelector(".germanWord").remove();
    wordArea.appendChild(englishWord);
    wordType = "english";
    return;
  }
  if(wordType == "english"){
    document.querySelector(".englishWord").remove();
    wordArea.appendChild(germanWord);
    wordType = "german";
    return;
  }
}