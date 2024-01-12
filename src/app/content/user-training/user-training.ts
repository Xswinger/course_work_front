export interface Training {
    coachId: number,
    sportsmanId: number,
    exercises: Task[]
}

export interface Task {
    description: string,
    count: number
}

export interface UserExercises {
    id: number,
    coachId: number,
    sportsmanId: number,
    exercises: UserTask[]
}

export interface UserTask {
    id: number,
    description: string,
    count: number,
    trainingId: number
}