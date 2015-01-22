/* Print all even numbers from 0-12 , show 3 ways of doing it.
    1. using while loop
    2. using for loop
    3 using modulus
    */
    
    var number = 0;
    while(number <=12){
        console.log(number);
        number+=2;
        }
        
        
    for(i=0;i<=12;i+=2){
        console.log(i);
        }
        
     for(i=0;i<=12;i++){
        if(i % 2 == 0){
            console.log(i);}
        }
