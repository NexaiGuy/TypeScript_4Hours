interface User {
    readonly dbId: number
    email: string,
    userId: number
    goggleId?: string
}

const kevin: User = { email: "k@k.com", userId: 2211} 