interface User {
    readonly dbId: number
    email: string,
    userId: number
    goggleId?: string
    startT
}

const kevin: User = { dbId: 22, email: "k@k.com", userId: 2211} 
kevin.email = "k@kb.com"
// kevin.dbId = 33