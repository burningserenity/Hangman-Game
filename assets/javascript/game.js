var hangmanGame
{
  //List of words to randomly choose from
  //                    0            1         2        3         4          5           6         7         8            9
  var dictionary = ['xenomorph', 'predator', 'geth', 'twilek', 'spathi', 'hydralisk', 'human', 'klingon', 'formic', 'magrathean'];
  var word;
  var wins = 0;
  var winNode = document.getElementById("wins");
  var remainingGuesses = 7;
  var lettersGuessed = [];
  var wordDisplay = [];
  var prevGuessed = document.getElementById("guessedLetters");
  var hang = false;
  var imageNode = document.getElementById("image");
  var audio = new Audio('assets/sounds/xenomorph.ogg');

  /*Get a word from the dictionary array for the user to guess, turn it into an array,
    and display an "_" character for each letter in the word*/
  function getWord()
  {
    audio.pause();
    imageNode.src = "assets/images/hang0.png";
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
    word = dictionary[Math.floor(Math.random() * dictionary.length)];
    var wordlist = Array.from(word);

    for (i = 0; i < wordlist.length; i++)
    {
      wordDisplay[i] = "_";
      wordNode.innerHTML += wordDisplay[i] + " ";
    }
    // console.log(word);
    var pos = dictionary.indexOf(word);
    var remove = dictionary.splice(pos, 1);
    return wordlist;
  }

  winNode.innerHTML = "Wins <br><br>" + wins;
  var keyword = getWord();

  document.onkeyup = function(event)
  {
    var keystroke = event.key;
    var keystring = keystroke.toString();
    var input = keystring.toLowerCase();
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
        // console.log(input);
        score(input);
        showGuess(input);
        win(wordDisplay);
        return;
      }
    }

    // console.log("Wrong");
    remainingGuesses--;
    hanging();
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
      wins++;
      winNode.innerHTML = "Wins<br><br>" + wins;
      imageNode.src = "assets/images/xenomorph.jpg";
      audio = new Audio('assets/sounds/xenomorph.ogg');
      audio.play();
      alert("The word \"xenomorph\" literally means \"alien form,\" which makes it fitting that the Alien series calls its titular antagonist by no other name.");
      keyword = getWord();
    }
    if (winWord === "p,r,e,d,a,t,o,r")
    {
      wins++;
      winNode.innerHTML = "Wins<br><br>" + wins;
      imageNode.src = "assets/images/predator.jpeg";
      audio = new Audio('assets/sounds/predator.ogg');
      audio.play();
      alert("According to film lore, the Predators created the Xenomorphs from the Alien series as the perfect prey.");
      keyword = getWord();
    }
    if (winWord === "g,e,t,h")
    {
      wins++;
      winNode.innerHTML = "Wins<br><br>" + wins;
      imageNode.src = "assets/images/geth.jpg";
      audio = new Audio('assets/sounds/geth.ogg');
      audio.play();
      alert("The Geth are a cybernetic alien race of invaders in the original Mass Effect trilogy.");
      keyword = getWord();
    }
    if (winWord === "t,w,i,l,e,k")
    {
      wins++;
      winNode.innerHTML = "Wins<br><br>" + wins;
      imageNode.src = "assets/images/twilek.jpeg";
      audio = new Audio('assets/sounds/twilek.ogg');
      audio.play();
      alert("Distinguished by their head tails in place of hair, the Twilek are perhaps the most recognizable alien race from the Star Wars universe.");
      keyword = getWord();
    }
    if (winWord === "s,p,a,t,h,i")
    {
      wins++;
      winNode.innerHTML = "Wins<br><br>" + wins;
      imageNode.src = "assets/images/spathi.gif";
      audio = new Audio('assets/sounds/spathi.ogg');
      audio.play();
      alert("The Spathi are a race of \"meta-mollusks\" from Star Control 2, who live in constant fear of an undetectable phantom called the Ultimate Evil.");
      keyword = getWord();
    }
    if (winWord === "h,y,d,r,a,l,i,s,k")
    {
      wins++;
      winNode.innerHTML = "Wins<br><br>" + wins;
      imageNode.src = "assets/images/hydralisk.jpg";
      audio = new Audio('assets/sounds/hydralisk.ogg');
      audio.play();
      alert("Hydralisks are the backbone of the Zerg swarm, and are noted as being of the fiercest and most sadistic of Zerg strains.");
      keyword = getWord();
    }
    if (winWord === "h,u,m,a,n")
    {
      wins++;
      winNode.innerHTML = "Wins<br><br>" + wins;
      imageNode.src = "assets/images/human.jpg";
      audio = new Audio('assets/sounds/human.ogg');
      audio.play();
      alert("If aliens exist, we're alien to them.");
      keyword = getWord();
    }
    if (winWord === "k,l,i,n,g,o,n")
    {
      wins++;
      winNode.innerHTML = "Wins<br><br>" + wins;
      imageNode.src = "assets/images/klingon.jpeg";
      audio = new Audio('assets/sounds/klingon.ogg');
      audio.play();
      alert("The Klingon are a fierce, warfaring race who aspire to honor and glory in battle above all else.");
      keyword = getWord();
    }
    if (winWord === "f,o,r,m,i,c")
    {
      wins++;
      winNode.innerHTML = "Wins<br><br>" + wins;
      imageNode.src = "assets/images/formic.jpeg"
      audio = new Audio('assets/sounds/formic.ogg');
      audio.play();
      alert("Known primarily as \"The Buggers\" in the Ender's Game series, the Formic actually a highly intelligent alien race who operate in hives.");
      keyword = getWord();
    }
    if (winWord === "m,a,g,r,a,t,h,e,a,n")
    {
      wins++;
      winNode.innerHTML = "Wins<br><br>" + wins;
      imageNode.src = "assets/images/magrathean.png";
      audio = new Audio('assets/sounds/magrathean.ogg');
      audio.play();
      alert("According the The Hitchhiker's Guide to the Galxay, the Magratheans are a humanoid race of planet builders, who built Earth at the request of mice.");
      keyword = getWord();
    }
  }

  function fullwin()
  {
    alert("You got them all!");
    location.reload(true);
  }

  function hanging()
  {
    if (remainingGuesses === 6)
      imageNode.src = "assets/images/hang1.png";
    else if (remainingGuesses === 5)
      imageNode.src = "assets/images/hang2.png";
    else if (remainingGuesses === 4)
      imageNode.src = "assets/images/hang3.png";
    else if (remainingGuesses === 3)
      imageNode.src = "assets/images/hang4.png";
    else if (remainingGuesses === 2)
      imageNode.src = "assets/images/hang5.png";
    else if (remainingGuesses === 1)
      imageNode.src = "assets/images/hang6.png";
    else if (remainingGuesses === 0)
      imageNode.src = "assets/images/hang7.png";
    else
      imageNode.src = "assets/images/hang0.png";
  }
}
