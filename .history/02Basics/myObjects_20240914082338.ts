const User = {
    name: "kevin",
    email: "kev1bla1@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}


createUser({name: "kevin", isPaid: false})

function createCourse():{name: string, price: number}{
    return {name: "react"}
}


export {}