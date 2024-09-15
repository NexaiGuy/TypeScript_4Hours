interface User {
    readonly dbId: number
    email: string,
    userId: number
    goggleId?: string
    startTrail: () => string
}

const kevin: User = { dbId: 22, email: "k@k.com", 
userId: 2211,
startTrail:
} 
kevin.email = "k@kb.com"
// kevin.dbId = 33