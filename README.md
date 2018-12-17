# PIG DICE GAME
#### It is a dice game that can be played by two people against each other, 14/12/2018.
#### By **ANUM ASIF**
## Description
This game is developed for fun. It requires two players. Each has a turn. On each turn a player rolls a dice as many times as he wants until a dice rolls "1". Or he can decide to pass the dice before the dice rolls "1". If a dice rolls "1". All the points he gained in that turn are lost. So it's very tricky to decide when to pass the dice and when to keep playing it. 
## Setup/Installation Requirements
*Web Browser*
## Specifications
### The website:
1. displays a form if the user decides to play this game after reading the rules: 
   - INPUT:"Play Game button pressed" 
   - OUTPUT:"A form to enter player names"
2. displays a message to input  names of both users if one or both input fields are left empty:
   - INPUT:"//no user name"
   - OUTPUT:"Enter the name of both players"
3. displays a game board with player names after user enter the names:
   - INPUT:"Start the game button pressed"
   - OUTPUT:"A board displaying user name and buttons to roll the dice and pass the turn"
4. displays the name of the player for each turn on board game:
   - INPUT:"PASS button pressed"
   - OUTPUT:"Name of the player for that turn"
5. displays a message for no score gained if the dice rolls 1:
   - INPUT: "Dice rolled 1"
   - OUTPUT: "Sorry!! No score for this turn"
6. displays a message if any one of the player's score reaches 100 and finishes the game:
   - INPUT: Dice rolled a value"
   - OUTPUT:"Player(name) has won!!"	
### Development
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 
## Known Bugs
If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/AnumAsif/pig-dice/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/AnumAsif/pig-dice/issues/new). Please include sample queries and their corresponding results.
## Technologies Used
- [JavaScript Constructors](https://www.w3schools.com/js/js_object_constructors.asp) - Sometimes we need a "blueprint" for creating many objects of the same "type". Like in this game every time two users play this game. we need two objects of the same type "Player". This is where we need to build a constructor
- [Function Prototypes](https://hackernoon.com/prototypes-in-javascript-5bba2990e04b) -Function objects inherit from Function.prototype.  Function.prototype cannot be modified.
## Link to my live site on GitHub Pages
- [PIG DICE GAME](https://anumasif.github.io/pig-dice/)
## Support and contact details
Please feel free to contact me if you have any suggestion for me to improve this website.
- Email: anum@cockar.com
### License
*MIT*
Copyright (c) 2018 **ANUM ASIF**
