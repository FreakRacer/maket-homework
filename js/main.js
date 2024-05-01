/*

let arr = [33, 2, 45, 6];

let arr2 = ['agg', ...arr , 30];

console.log(arr2);

let obj = {
    name: 'idiot',
    age: 22,
};

let obj2 = {

    ...obj,
    color: 'yellow'
};

console.log(obj2);

function fn(a, b, ...args){
    args.forEach(item =>{
        console.log()
    })
    console.log(args)
};

fn(2432,4342,3432,342546,1);

let obj3 = {
    name: 'jason',
    age: 12,
    color: 'yellow'
};

//let {name, age} = obj;
//console.log(name, age);

let arr3 = ['Jason', 24, 1888, 1];

let [name, cop, suck] = arr3
console.log(name, cop, suck);

let carr = [101,202, 303, 404, 505, ];
let carr2 = [606, 707, 808, 909];
let superCarr = [...carr, ...carr2];

console.log(Math.min(...superCarr));

let  objj = {

    width: 300,
    height: 500
};

let  objj2 = {...objj, area: function(){
    return this.width * this.height
}
};

console.log(objj2.area(), objj);

function gt(...args){
    //return args.reduce((acc, item) => acc + item, 0);
    return args.reduce(function(acc, item){
        return acc + item
        } , 0)
};

console.log(gt(1,2,3,4,5,6,7,8));

*/

let a = document.getElementById("big");

console.log(a)





