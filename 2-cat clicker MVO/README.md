# Cat Clicker MV\*

This is cat clicker premium application made using better code organization using MV\* design pattern.

Here we are refactoring our code and seperating code into 3 portions:

1- Model - Deals only with the data
2- View - Deals only with view/UI of the application
3- '\*' - Connects the model and view

How does our model and view connect with each other? With our Octopus

the octopus gets things going

How does our application run?

We start with a blank screen
1- the list (model) gets created
2- the list view (the 5 different cat options) get populated with cats (octopus calls view render to render list on screen)
3- Octopus does both of the above 2 things
4- octopus changes the current cat in our model
5- current cat gets set to the current cat
6- when current cat is set, octopus then asks the view to render the current cat on the screen via view
7- octopus has gotten our application started by instructing the model and view
now the basic 1st look into the app is complete
now when user clicks on a cat the following happens

1-the octopus is keeping track of where user clicks
2-if cat picture is clicked, octopus will run a method that increases the click counter for that cat in the model first and then the view
3-if user clicks on a cat in the list, then the octopus does the following things
(a)it changes the model; the current cat is now being set to selected cat (eg cat2)
(b)then it tells the view to re-render itself
