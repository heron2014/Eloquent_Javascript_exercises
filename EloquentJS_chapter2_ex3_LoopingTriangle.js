/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var x;
var y;
var character;
for(x=1; x<=8; x++){
    for(y=1; y<x; y++){
        character += "#";
        }
        console.log(character);
        character = '';
        }
