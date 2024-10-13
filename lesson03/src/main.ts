let stringArr = ['one', 'hey', 'Abhijit']
let guitars = ['Strat', 'Les Paul', 5150]
let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')
// guitars.unshift(true)

// stringArr = guitars
guitars = stringArr

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]
let mixed = ['John', 1, false]
mixed = myTuple
// myTuple=mixed
// myTuple[3]=42
// myTuple[2]=42
myTuple[1] = 42

// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'Abhijit',
  prop2: true,
}
// exampleObj.prop2 = 42
exampleObj.prop1 = 'John'

interface Guitarist {
  name: string
  active?: boolean
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  albums: [1984, 5150, 'OU812'],
}

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'IV'],
}

// evh = jp

// evh.years = 40

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}!`
}
console.log(greetGuitarist(jp))

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U)
