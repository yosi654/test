
let bigNumber = (arr) => {
    let bigNum=0;
    arr.forEach((el)=> {
        if(bigNum<el){
            bigNum=el;
            }
        });
        return bigNum;
}
let smallNumber = (arr) => {
    let smallNum = 100;
    arr.forEach((el)=> {
        if(smallNum>el){
            smallNum=el;
            }
        });
    return smallNum;
}
let lengNumber = (arr) => {
    let lengNum = 0;
    arr.forEach((el)=> {
        if(lengNum<el){
            lengNum=el.toString();
            }
        });
        return lengNum.length;
}
let arr = [151,44,55,999,9,18,3,5511118,88888,178];


console.log(arr);
console.log('The big number is:',bigNumber(arr));
console.log('The small number is:',smallNumber(arr));
console.log('length:',lengNumber(arr));
