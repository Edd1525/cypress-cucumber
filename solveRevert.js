const revertReplace = {

    reverseString: function(str) {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");

    return joinArray;
},


deleteParenthesesAndReplace: function(str) {
    if (str.length > 50) {
        return 'error length must be less than 50';
    }
    const regExp = /\(([^)]+)\)/;
    const matches = regExp.exec(str);
    const revert = this.reverseString(matches[1])

    return str.replace(/ *\([^)]*\) */g, revert);
}

}

module.exports = revertReplace

