var hangmanGame
{
  //List of words to randomly choose from
  //                    0            1         2        3         4          5           6         7         8            9
  var dictionary = ['xenomorph', 'predator', 'geth', 'twilek', 'spathi', 'hydralisk', 'human', 'klingon', 'formic', 'magrathean'];
  var word;
  var wins = 0;
  var remainingGuesses = 7;
  var lettersGuessed = [];
  var wordDisplay = [];
  var lGnode = document.getElementById("failDisplay");
  lGnode.innerHTML = remainingGuesses;
  var prevGuessed = document.getElementById("guessedLetters");
  var hang = false;

  /*Get a word from the dictionary array for the user to guess, turn it into an array,
    and display an "_" character for each letter in the word*/
  function getWord()
  {
    if (hang === true)
    {
      oldWord = [word];
      Array.prototype.push.apply(dictionary, oldWord);
      hang = false;
    }
    if (dictionary.length === 0)
      fullwin();
    var wordNode = document.getElementById("gameword");
    lettersGuessed.length = 0;
    wordDisplay.length = 0;
    wordNode.innerHTML = wordDisplay;
    prevGuessed.innerHTML = lettersGuessed;
    remainingGuesses = 7;
    lGnode.innerHTML = remainingGuesses;
    word = dictionary[Math.floor(Math.random() * dictionary.length)];
    var wordlist = Array.from(word);

    for (i = 0; i < wordlist.length; i++)
    {
      wordDisplay[i] = "_";
      wordNode.innerHTML += wordDisplay[i] + " ";
    }
    console.log(word);
    var pos = dictionary.indexOf(word);
    var remove = dictionary.splice(pos, 1);
    return wordlist;
  }

  var keyword = getWord();

  document.onkeyup = function(event)
  {
    var input = event.key;
    for (i = 0; i < lettersGuessed.length; i++)
    {
      if (lettersGuessed[i] === input)
      {
        alert("You already guessed this letter.");
        return;
      }
    }

    for (i = 0; i < keyword.length; i++)
    {
      if (keyword[i] === input)
      {
        console.log(input);
        score(input);
        showGuess(input);
        win(wordDisplay);
        return;
      }
    }
    
    console.log("Wrong");
    remainingGuesses--;
    lGnode.innerHTML = remainingGuesses;
    showGuess(input);
    if (remainingGuesses === 0)
    {
      alert("Hanged");
      hang = true;
      keyword = getWord();
    }
    return;
  }

  function score(input)
  {
    var wordNode = document.getElementById("gameword");

    for (i = 0; i < keyword.length; i++)
    {
      if (keyword[i] === input)
        wordDisplay[i] = keyword[i];
    }

    wordNode.innerHTML = " ";

    for (i = 0; i < wordDisplay.length; i++)
      wordNode.innerHTML += wordDisplay[i] + " ";

  }

  function showGuess(input)
  {
    lettersGuessed.push(input);
    prevGuessed.innerHTML += " " + input + " ";
  }

  function win(wordDisplay)
  {
    var winWord = wordDisplay.join();
    if (winWord === "x,e,n,o,m,o,r,p,h")
    {
      alert("Alien is an awesome movie!");
      keyword = getWord();
    }
    if (winWord === "p,r,e,d,a,t,o,r")
    {
      alert("The predators created the aliens as quarry");
      keyword = getWord();
    }
    if (winWord === "g,e,t,h")
    {
      alert("The original Mass Effect disappointed me greatly");
      keyword = getWord();
    }
    if (winWord === "t,w,i,l,e,k")
    {
      alert("I still haven't seen the last two movies");
      keyword = getWord();
    }
    if (winWord === "s,p,a,t,h,i")
    {
      alert("No one has topped Star Control 2");
      keyword = getWord();
    }
    if (winWord === "h,y,d,r,a,l,i,s,k")
    {
      alert("I played the shit out of Starcraft over a decade ago");
      keyword = getWord();
    }
    if (winWord === "h,u,m,a,n")
    {
      alert("If aliens exist, we're alien to them");
      keyword = getWord();
    }
    if (winWord === "k,l,i,n,g,o,n")
    {
      alert("Warf is a badass");
      keyword = getWord();
    }
    if (winWord === "f,o,r,m,i,c")
    {
      alert("Ender's Game \"Buggers\"");
      keyword = getWord();
    }
    if (winWord === "m,a,g,r,a,t,h,e,a,n")
    {
      alert("Hitchhiker's");
      keyword = getWord();
    }
  }

  function fullwin()
  {
    window.location.href = "win.html";
  }
}
