interface User {
    readonly dbId: number
    email: string,
    userId: number,
    goggleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
}

const kevin: Admin = { dbId: 22, email: "k@k.com", 
userId: 2211,
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "kevin10", off: 10) => {
    return 10
}
} 
kevin.email = "k@kb.com"
// kevin.dbId = 33