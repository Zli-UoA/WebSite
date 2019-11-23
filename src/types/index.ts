export interface Member {
    imageUrl: string,
    name: string,
    links: {
        hp: string,
        twitter: string,
        github: string,
    }
}

export interface Event {
    image: string,
    title: string,
    organizer: string,
    date: Date,
    time: {
        from: Date,
        to: Date
    },
    genre: string,
    tags: string[],
    comment: string
}
