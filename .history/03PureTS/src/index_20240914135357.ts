console.log("typescript is here still");
console.log("typescript is amazing");

// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Ghent"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }

class User {
    public email: string
    private name: string
    readonly city: string = "Ghent"
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

const kevin = new User("k@k.com", "kevin")
// kevin.name