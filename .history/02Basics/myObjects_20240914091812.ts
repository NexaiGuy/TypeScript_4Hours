// const User = {
//     name: "kevin",
//     email: "kev1bla1@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// createUser({name: "kevin", isPaid: false})

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "12345",
    name: "k",
    email: "k@k.com",
    isActive: false
}



type cardNumber



myUser.email = "k@gmail.com"
// myUser._id = "asa"


export {}