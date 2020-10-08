export interface UserModel{
    id ?:string
    name:string,
    last_name:string,
    email:string,
    deleted:boolean,
    password:string,
    uid:string,
    pass:boolean,
    permission: Array<number>,
    timestap:number
}