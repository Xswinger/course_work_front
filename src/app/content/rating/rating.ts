export interface CompetitionResults {
    name: string,
    location: string,
    date: string,
    distances: Distance[]
}

export interface Distance {
    name: string,
    results: Result[]
}

export interface Result {
    place: number,
    name: string,
    result: string
}