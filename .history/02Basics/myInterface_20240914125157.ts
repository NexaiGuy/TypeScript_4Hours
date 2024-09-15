interface User {
    readonly dbId: number
    email: string,
    userId: number
    goggleId?: string
}

const kevin: User = { dbId: 22, email: "k@k.com", userId: 2211} 
kevin.email = "k@kb.com"
ke