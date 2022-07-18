type OtherProps = {
    url: string
    name: string
}

export type Character = {
    url: string
    id: number
    type: string
    name: string
    status: string
    image: string
    gender: string
    created: string
    species: string
    episode: [string]
    origin: OtherProps
    location: OtherProps
}