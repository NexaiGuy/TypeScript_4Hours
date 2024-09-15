interface User {
    readonly dbId: number
    email: string,
    userId: number
    goggleId?: string
}

const kevin: User = { dbemail: "k@k.com", userId: 2211} 