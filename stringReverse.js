function stringReverse(string) {
    arr = []
    for(let i = 0;i<string.length;i+=1){
        arr.push(string[string.length-(i+1)])
    }
    return arr.reduce((a, b) => a + b)
}
module.exports = stringReverse