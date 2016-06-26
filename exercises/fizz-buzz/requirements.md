# String Calculator

As a delusional counter of numbers I want to insert words into my list of numbers so I can keep up the appearance of being utterly insane.

## Rules

* The function must be able to take a start point and a length of list
* The function should return a comma separated string of the list of numbers requested e.g. (start = 1, length = 2) => "1, 2"
* If a number in the list is divisible by 3 the function should replace that number with "Fizz" e.g. (start = 2, length = 3) => "2, Fizz, 4"
* If a number in the list is divisible by 5 then the function should replace that number with "Buzz" e.g. (start = 4, length = 2) => "4, Buzz"
* If a number in the list is divisible by both 3 and 5 then the function should replace that number with "Fizz Buzz" e.g. (start = 13, length = 3) => "13, 14, Fizz Buzz"
* Default for start point is 0
* Default for length is 0
* Should error if length is less than 0 (with an understandable message)
* Should error if start point or length is not a number (with an understandable message)
