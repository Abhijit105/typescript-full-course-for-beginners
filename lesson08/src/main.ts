const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean =>
  typeof arg === 'object' && !Array.isArray(arg) && arg !== null

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1, 2, 3]))
console.log(isObj({ name: 'John' }))
console.log(isObj(null))

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false }
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false }
  }
  return {
    arg,
    is: !!arg,
  }
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Abhijit'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue({ name: 'Abhijit' }))
console.log(isTrue([]))
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

interface BoolCheck<T> {
  value: T
  is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false }
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false }
  }
  return {
    value: arg,
    is: !!arg,
  }
}

interface HasId {
  id: number
}

const processUser = <T extends HasId>(user: T): T => {
  // process the user with logic here
  return user
}

console.log(processUser({ id: 1, name: 'Abhijit' }))
// console.log(processUser({name: 'Abhijit'}))

const getUsersProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map(user => user[key])
}

const usersArray = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
]

console.log(getUsersProperty(usersArray, 'email'))
console.log(getUsersProperty(usersArray, 'username'))

class StateObject<T> {
  private data: T

  constructor(value: T) {
    this.data = value
  }

  get state(): T {
    return this.data
  }

  set state(value: T) {
    this.data = value
  }
}

const store = new StateObject('John')
console.log(store.state)
store.state = 'Abhijit'
// store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = ['Abhijit', 42, true]
console.log(myState.state)
