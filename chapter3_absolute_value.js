/*
Write a function called absolute, which returns the absolute value of the number it is given as its argument. The absolute value of a negative number is the positive version of that same number, and the absolute value of a positive number (or zero) is that number itself.
*/

function absolute(n) {
    if (n < 0) {
        return -n;
    }
    else {
        return n;
    }
}

absolute(-144);