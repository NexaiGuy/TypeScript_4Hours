function addTwo(num: number){
     return num + 2
    // return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5)
getUpper("kevin")

signUpUser("kevin", "kevbla@gmail.com", false)
loginUser("k", "k@k.com")

// function getValue(myVal: number){
//   if (myVal > 5) {
//      return true
//   }
//   return "200 OK"
// }

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]

heros.map(hero => {
    return `hero is ${hero}`
})


export {}