console.log("typescript is here still");
console.log("typescript is amazing");


class User {
    email: string
    name: string
    city: string = ""
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

const kevin = new User("k@k.com", "kevin")
kevin.city = "2"