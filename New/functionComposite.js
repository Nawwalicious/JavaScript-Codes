/*
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
*/

let functions = [x => x + 1, x => x * x, x => 2 * x];

var compose = function(functions) {
    
	return function(x) {
        return functions;
    }
};

console.log("Functions are:",compose());