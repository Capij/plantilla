import { Injectable } from '@angular/core';
import { LeagueModel, TeamsModel } from '../../../models/teams.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class TeamsService {

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
  ) { }

  /* SERVICES OF LEAGUES */
  getLeagues(): Observable<LeagueModel[]>{
    return this.afs.collection('leagues', res => res.where('deleted','==',false)).snapshotChanges()
    .pipe(
      map((doc)=>{
        return doc.map((ele) =>{
          return {
            id: ele.payload.doc.id,
            ...ele.payload.doc.data()
          }
        }) as LeagueModel[];
      })
    )  
  }

  async leagueSave(league:LeagueModel){
    try {
        league.deleted = false;
        league.discontinued = false;
        league.created_at = Date.now();

        this.afs.collection('leagues').add(league);
        return league;   

    } catch (e) {
      console.error(e);
      if (e.message) {
        alert(e.message);
      }
      throw e;
    }

  }

  async leagueUpdate(teams:LeagueModel ){
    if(teams.id){

      return this.afs.doc<LeagueModel>(`leagues/${teams.id}`).update(teams);
    }else{
      throw Error('No cuenta con id')
    }
  }

  /* SERVICES OF TEAMS */
  getTeams( id: String ): Observable<TeamsModel[]>{
    return this.afs.collection('teams', res => res.where('deleted','==',false).where('league_id', '==', id) ).snapshotChanges()
    .pipe(
      map((doc)=>{
        return doc.map((ele) =>{
          return {
            id: ele.payload.doc.id,
            ...ele.payload.doc.data()
          }
        }) as TeamsModel[];
      })
    )  
  }

  async teamSave(team:TeamsModel, league_id:string ){
    try {
        team.deleted = false;
        team.discontinued = false;
        team.created_at = Date.now();
        team.league_id = league_id;

        this.afs.collection('teams').add(team);
        return team;   

    } catch (e) {
      console.error(e);
      if (e.message) {
        alert(e.message);
      }
      throw e;
    }

  }

  async teamUpdate(teams:TeamsModel ){
    if(teams.id){

      return this.afs.doc<TeamsModel>(`teams/${teams.id}`).update(teams);
    }else{
      throw Error('No cuenta con id')
    }
  }


}
