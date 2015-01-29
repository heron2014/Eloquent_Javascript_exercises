/*Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. */


var size = 8;
var chess = '';

for(var i=0; i<size; i++){
    for(var y=0; y<size; y++){
        if((i+y) % 2 == 0){
            chess += ' ';
            }
        else{
            chess += '#';}
        
        }
        chess += '\n';
        }
        console.log(chess);


/*Ok, this is how I see it: You start in the outer loop where i = 0. We then move straight to the inner loop where y = 0. The inner loop then loops from 0 to 8 to create a row. If (i+y) % 2 == 0 then we add a space. So for the first character of the the first row, i = 0 and y = 0, so the condition is true and we add a space. The inner loop then moves to y = 1. This is for the second character in the first row. Now i = 0 and y = 1, so the condition is false and we add a hash. This keeps incrementing by 1 over the first row until y = 8. After this we move outside the inner loop back to the outer loop, create a new line character and then the outer loop increments to i = 1.
The code then moves back into the inner loop and we increment over the inner loop again. This will create the second row. So for the first character of this row, y = 1 and i = 0, so a hash is added as the condition is false. For the second character, y = 1 and i = 1, so the condition is true and a space is added. And so on.
  */
