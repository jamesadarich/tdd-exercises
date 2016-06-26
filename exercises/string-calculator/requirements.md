# String Calculator

As a purveyor of string based equations I need a tool to evaluate my equations so that I can know the answer to them

## Rules

* An empty string evaluates as 0
* A number on it's own evaluates as it's own number e.g. "1" = 1, "42" = 42
* Two numbers delimited by a plus sign "+" are summed e.g. "1+2" = 3
* Two numbers delimited by a minus sign "-" are subtracted e.g. "2-1" = 1
* Two numbers delimited by a forward slash "/" are divided e.g. "2/1" = 0.5
* Two numbers delimited by an asterisk "*" are multiplied e.g. "2*2" = 4
* Two numbers delimited only by whitespace throws an error (unknown operator)
* All other whitespace is ignored
* Any unknown characters detected must throw an error (parse failed)
* If the equation contains more than two groups of numbers then the order of execution must conform to BODMAS
