function dwarfRollCall(dwarves) {
  var dwarfList = ""
  for (var i = 0; i < dwarves.length; i++){
    dwarfList += `${i + 1}` + ". " + `${dwarves[i]}` + " "
    /*created a new string
      adds array index # and +1 to it via template literal
      adds punctuation
      adds dwarf name
      adds punctiation 
      returned the string */
  }
  return dwarfList
}

function summonCaptainPlanet(planeteerCalls) {
  var shout = []
  for (var i = 0; i < planeteerCalls.length; i++){
    shout.push(`${planeteerCalls[i].toUpperCase()}!`)
    /*created a new array
      pushed the word onto the array as UpperCase with an !
      returned the new array
    */
  }
  return shout
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
    if (words[i].length > 4) {
      return true
      //checks to see if any of the words are > 4 characters
    }
  return false
  //if none of them are > 4, it returns false
  }
}

function findTheCheese(foods) {
  for (var i = 0; i < foods.length; i++){
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert" || foods[i] === "swiss" ||  foods[i] === "blue cheese"){
      return foods[i]    
      //checks array for cheese - || means "or"
    }
  }
  return "no cheese!"
}

function wordsWithB(words) {
  /*takes an array of words 
    returns an array of words from the input that start w/ B
    */  
    for (var i = 0; i < words.length; i++){
      if (words[i //checking for 0, 1])
    
    }
}

