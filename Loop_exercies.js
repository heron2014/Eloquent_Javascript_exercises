/* Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").*/

for (i=0; i<20; i++){
    if(i%2 == 0){
        console.log(i + ' is even');
        }
    else {
        console.log(i + ' is odd');
        }
    

/* Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). */

for(i=0;i<10;i++){
    var result = i * 9;
    console.log(i + '* 9 = ' + result);
    }

/* Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total). */

for(var multipl=0; multipl<=10; multipl++){
    for(var i=0; i<=10; i++){
        var result = multipl * i;
        console.log(multipl + ' * ' + i + ' = ' + result);
        }
    }
