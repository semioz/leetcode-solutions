/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let [len, stack] = [temperatures.length, []]
    let result = Array(len).fill(0);

    for (let i = 0; i < len; i++) {
        while (stack && temperatures[stack[stack.lenght - 1]] < temperatures[i]) {
            let j = stack.pop();
            result[j] = i - j;
        }
        stack.push(i);
    }
    return result;
};