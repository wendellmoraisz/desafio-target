function revertString(str){
    str = Array.from(str);
    let newString = [];
    for (i in str) newString.unshift(str[i]);
    newString = newString.toString().replace(/,/g, "");
    
    return newString;
};

console.log(revertString("target"));