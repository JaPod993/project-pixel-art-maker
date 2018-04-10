# Pixel Art Maker Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

To get started, open `designs.js` and start building out the app's functionality.

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
--------------------------------------------------------------------------------------------------------------------------------
You'll write JavaScript code that lets the user to create
a grid of squares representing their design, and apply colors
to those squares to create a digital masterpiece!
--------------------------------------------------------------------------------------------------------------------------------
-Dynamically set the size of the table as an N by M grid.
-Choose a color.
-Click a cell in the grid to fill that cell with the chosen color.
--------------------------------------------------------------------------------------------------------------------------------
Before writing any code, try loading up index.html from the starter project to see how things look! Notice that the design.js
file is implemented in the <body> tag in the index.html file. Your goal is to build out the design.js
file to achieve all the interactive elements on the page!

Now, open up design.js. As you start writing your code, keep these three tasks in mind:

Define your variables by selecting the DOM elements that the user will interact with.
This is where your DOM skills can come into play! For instance,
- the submit button,
- the table,
- color picker need
to be accessed.
- The value of the color selected needs to be stored
as well, since the clicked cell in the table needs to be set to the selected color.

Add event listeners to the relevant DOM elements, so that user input can be color values
and table sizes can be dynamically set by the user.


Set the size of the cross stitch canvas as an N by M grid with the makeGrid() function.

Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input.

Each cell should have an event listener that sets the background color of the cell to the selected color.

------------------------------------------------------------------------------------------------------------------------------
Now test it! When you're done, you should be able to create a canvas of any size,
choose a color using the color picker, and click on the canvas's table cells to set their color.