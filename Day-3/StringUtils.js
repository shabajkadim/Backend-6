function CapitalString(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(CapitalString("shahabaj"));

function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("welcome"));

module.exports = { CapitalString, reverseString };
