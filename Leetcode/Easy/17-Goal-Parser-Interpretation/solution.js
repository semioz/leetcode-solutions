/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let new_command = command.replaceAll("()", "o").replaceAll("(al)", "al");
    return new_command
};