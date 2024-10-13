// Type aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name: string
  active?: boolean
  albums: stringOrNumberArray
}

type userId = stringOrNumber

// interface PostId = stringOrNumber

// Literal types
let myName: 'Abhijit'
// myName = 'John'

let userName: 'Abhijit' | 'John' | 'Amy'
userName = 'Amy'
// userName = 'Rachel'

// functions
const add = (a: number, b: number): number => a + b

const logMessage = (message: any): void => {
  console.log(message)
}

logMessage('Hello')
logMessage(add(2, 3))
// logMessage(add('a', 3))

let subtract = function (c: number, d: number): number {
  return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//   (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
  return c * d
}

logMessage(multiply(2, 2))

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') return a + b + c
  return a + b
}

// default parameters
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c
}

logMessage(addAll(2, 3, 2))
logMessage(addAll(2, 3))
logMessage(sumAll(2, 3))
logMessage(sumAll(undefined, 3))

// Rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((acc, cur) => acc + cur, 0)
}

logMessage(total(1, 2, 3, 4))
logMessage(total(1, 2))
logMessage(total(1, 2, 10))

const createError = (errMsg: string): never => {
  throw new Error(errMsg)
}

const infinite = () => {
  let i: number = 1
  while (true) {
    i++
    if (i > 100) break
  }
}

// custom type guard
const isNumber = (value: any): boolean =>
  typeof value === 'number' ? true : false

// use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string'
  if (isNumber(value)) return 'number'
  return createError('This should never happen')
}
