let score: number | string = 33
score = 44
score= "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let kevin: User | Admin = {name: "kevin", id: 369}

kevin = {username: KeyboardEvent, id: 369}

function getDbId(id: number | string){
    //making some 
    console.log(`DB id is: ${id}`)
}