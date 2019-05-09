# Persistent Bugger Codewars Challenge Instructions
Write a function, persistence, that takes in a positive parameter **num** and returns its **multiplicative persistence**,
which is the number of times you must multiply the
digits in num until you reach a single digit.

## My Pseudocode
- Initialize a function persistence which takes a number and   the count as parameters.
The count is to keep track of the multiplicative persistence.
- Check if the number is a single digit.
- If it is a single digit, return 0.
- else convert the number into a string and split it up.
- Multiply the numbers from the returned array.
- Increase the count by 1
- Check if the product of the numbers is a single digit.
- If it is not then call the the persistence function on the product and the current value of count as the second parameter.
