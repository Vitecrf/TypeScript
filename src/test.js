const obj = {
    name: "Vladilen",
    age: 26,
    job: 'Fullstack'
}

const entries = [
    ['name', 'Vladilen'],
    ['age', 26],
    ['job', 'Fullstack']
]

// console.log(Object.entries(obj))            //возвращает из обьекта массив
// console.log(Object.fromEntries(entries))    //возвращает из массива обьект

const map = new Map(entries);
console.log(map)

