export interface LeagueModel{
    id ?: string,
    name: string,
    img: string,
    discontinued: boolean,
    deleted: boolean,
    created_at: number
}

export interface TeamsModel{
    id ?: string,
    league_id: string,
    name: string,
    img: string,
    discontinued: boolean,
    deleted: boolean,
    created_at: number
}