const User = {
    name: "kevin",
    email: "kev1bla1@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}


createUser({name: "kevin", isPaid: false})

//BAD SYNTAX)

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}


export {}