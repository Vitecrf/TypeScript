// let str:string
// str = "10";
// function fun(op1: number, op2: number): number {
//     return op1 * op2;
// }
// //если не присвоить переменной тип то тип определяется по первному присвоению
// let a = fun(2, 2);
// a = 10;
// let b = 10;
//
//
// if(str){
//     console.log(str);
// }
//
// function fun1(s:string): boolean{
//     return !!s;
// }
//
// let vf: (n1: number, n2: number)=> string;   //определяем тип функции
// function fun4(op1: number, op2:number): string {
//     return op1 + op2 + "";
// }
// vf = fun4;
// console.log(vf(2,2))
// function sum(ar: number[]): number{
//     return ar.reduce((res, cur)=>res+cur)
// }
// let ar: Array<number> = [1,2,3, 10];
// ar.push(12);
// console.log(sum(ar));
// let set = new Set<number>([1,1,1,2,2,3,3,3]);
// console.log(set)
//=========================HW 32==============
let set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let set2 = new Set([1, 3, 6, 7, 9]);
function intersection(set1, set2) {
    let arr = [];
    for (let value of set1) {
        if (set2.has(value)) {
            arr.push(value);
        }
    }
    return arr;
}
let res = intersection(set1, set2);
console.log(res);
function sbtract(set1, set2) {
    let arr = [];
    for (let value of set1) {
        if (!set2.has(value)) {
            arr.push(value);
        }
    }
    return arr;
}
let res1 = sbtract(set1, set2);
console.log(res1);
//======================2=========================
const arr = ['Imn', 'cb', 'ab', 'a', 'a', 'cb', 'lm', 'cd', 'Imn', 'ab', 'cb'];
function getSortedOccurrences(array) {
    let mapArr = new Map([]);
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            let res = map.get(array[i]);
            map.set(array[i], ++res);
        }
        else {
            map.set(array[i], 1);
        }
    }
    // const res = map.map(i => {
    //     return {
    //         str: map[i][0],
    //         count: map[i][1]
    //     }
    // })
    // console.log(res)
    return mapArr.map(i => ({ [mapArr[0]]: i.toString() }));
}
const ress = getSortedOccurrences(arr);
// console.log(ress)
