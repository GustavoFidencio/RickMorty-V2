export type UserProps = {
    email: string
    password: string
}

export type UserDispatchProps = {
    type: string
    email?: string
    password?: string
}