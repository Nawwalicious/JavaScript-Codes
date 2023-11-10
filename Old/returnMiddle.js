function getMiddle(s) {
    //Code goes here!
    let len = s.length;
    let res = '';

    if (len % 2 == 0) {
        res = res.concat(s[(len / 2) - 1], s[len / 2]);
        return res;
    }
    else if (len == 1) {
        return s;
    }
    else
        return s[parseInt(len / 2)]
}

console.log(getMiddle("test"))

console.log(getMiddle("testing"))

console.log(getMiddle("middle"))

console.log(getMiddle("A"))