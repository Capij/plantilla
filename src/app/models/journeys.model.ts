import { TeamsModel } from './teams.model';

export interface journeyModel{
    id ?: string,
    league_id: string,
    type: string,
    name: string,
    init: number,
    end: number,
    active: boolean,    
    discontinued: boolean,
    deleted: boolean,
    closed: boolean
    created_at: number,
    games: Array<gameModel>;
}

export interface gameModel{
    id ?: string,
    journey_id: string,
    visiting_team: TeamsModel,
    visiting_point: number,
    local_team: TeamsModel,
    local_points: number,
    active: boolean,
    dateInit: number,
    created_at: number
}
