interface User {
    readonly dbId: number
    email: string,
    userId: number
    goggleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(coupo)
}

const kevin: User = { dbId: 22, email: "k@k.com", 
userId: 2211,
startTrail: () => {
    return "trail started"
}
} 
kevin.email = "k@kb.com"
// kevin.dbId = 33