module.exports = function reverse (n) {
    var result= String(Math.abs(n)).split('').reverse().join('');
    return  result;
}
