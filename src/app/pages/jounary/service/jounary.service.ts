import { Injectable } from '@angular/core';
import { journeyModel ,gameModel} from '../../../models/journeys.model'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JounaryService {

  constructor(
              private afs: AngularFirestore,
              private afAuth: AngularFireAuth
    ) { }
    /* SERVICES OF TEAMS */
    getJourneys( id: String ): Observable<journeyModel[]>{
      return this.afs.collection('journey', res => res.where('deleted','==',false).where('league_id', '==', id) ).snapshotChanges()
      .pipe(
        map((doc)=>{
          return doc.map((ele) =>{
            return {
              id: ele.payload.doc.id,
              ...ele.payload.doc.data()
            }
          }) as journeyModel[];
        })
      )  
    }
  
    async journeySave(team:journeyModel, league_id:string ){
      try {
          team.active = false;
          team.discontinued = false;
          team.deleted = false;
          team.closed = false;
          team.created_at = Date.now();
          team.league_id = league_id;
  
          this.afs.collection('journey').add(team);
          return team;   
  
      } catch (e) {
        console.error(e);
        if (e.message) {
          alert(e.message);
        }
        throw e;
      }
  
    }
  
    async journeyUpdate(teams:journeyModel ){
      if(teams.id){
  
        return this.afs.doc<journeyModel>(`journey/${teams.id}`).update(teams);
      }else{
        throw Error('No cuenta con id')
      }
    }

    getGame( journeys: string[]): Observable<gameModel[]>{

      return this.afs.collection('game', res => res.where('journey_id', '==', journeys) ).snapshotChanges()
      .pipe(
        map((doc)=>{
          return doc.map((ele) =>{
            return {
              id: ele.payload.doc.id,
              ...ele.payload.doc.data()
            }
          }) as gameModel[];
        })
      )

    }

    async gameSave(game:gameModel, journey_id:string ){
      try {
          game.journey_id = journey_id;
          game.active = true;
          game.created_at = Date.now();

          this.afs.collection('game').add(game);
          return game;   
  
      } catch (e) {
        console.error(e);
        if (e.message) {
          alert(e.message);
        }
        throw e;
      }
  
    }
  
    async gameUpdate(game:gameModel ){
      if(game.id){
  
        return this.afs.doc<journeyModel>(`game/${game.id}`).update(game);
      }else{
        throw Error('No cuenta con id')
      }
    }

}
