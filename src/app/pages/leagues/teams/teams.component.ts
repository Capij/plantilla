import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { LeagueModel, TeamsModel } from '../../../models/teams.model';
import { journeyModel }  from '../../../models/journeys.model';
import { JounaryService } from '../../jounary/service/jounary.service';
import { DialogTeamsComponent } from './dialog-teams/dialog-teams.component';
import { DialogJourneyComponent } from './dialog-journey/dialog-journey.component';
import { DialogGameComponent } from './dialog-game/dialog-game.component';
import { TeamsService } from '../../leagues/service/teams.service';
import { take } from 'rxjs/internal/operators/take';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  dialogRef: MatDialogRef<DialogTeamsComponent>;
  dialogRefJ: MatDialogRef<DialogJourneyComponent>;
  dialogRefGa: MatDialogRef<DialogGameComponent>;

  load = false;

  teams: TeamsModel[] = [];
  journeys: journeyModel[] = [];
  id:string;
  url:string;

  constructor(private dialog:MatDialog,
              private ts: TeamsService,
              private router: ActivatedRoute,
              private location: Location,
              private js:JounaryService) {

    this.ts.getTeams( this.router.snapshot.params.id ).subscribe((res)=>{
      this.teams = res;
      this.load = true;
    })

    this.js.getJourneys( this.router.snapshot.params.id ).subscribe((res)=>{

      res.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      
      this.journeys = res;

    })

  }

  ngOnInit() {
  }

  addTeams(){

    this.dialogRef =  this.dialog.open(DialogTeamsComponent,{
      width: '500px'
    });
    
    this.dialogRef.componentInstance.id = this.router.snapshot.params.id;
    this.dialogRef.componentInstance.save.pipe(take(1)).subscribe((projectDocRef) => {
      if(projectDocRef){
        this.dialogRef.close();
      }

    });

  }

  onEdit(team: TeamsModel){
    this.dialogRef =  this.dialog.open(DialogTeamsComponent,{
      width: '500px'
    });

    this.dialogRef.componentInstance.team = team;
    this.dialogRef.componentInstance.newTeam = false;

    this.dialogRef.componentInstance.save.pipe(take(1)).subscribe((projectDocRef) => {
      if(projectDocRef){
        this.dialogRef.close();
      }

    });
  }

  addJourneys(){
    this.dialogRefJ =  this.dialog.open(DialogJourneyComponent,{
      width: '500px'
    });
    
    this.dialogRefJ.componentInstance.id = this.router.snapshot.params.id;
    this.dialogRefJ.componentInstance.save.pipe(take(1)).subscribe((projectDocRef) => {
      if(projectDocRef){
        this.dialogRefJ.close();
      }

    });
  }

  onEditJourney(journey: journeyModel){
    this.dialogRefJ =  this.dialog.open(DialogJourneyComponent,{
      width: '500px'
    });

    this.dialogRefJ.componentInstance.journey = journey;
    this.dialogRefJ.componentInstance.newJourney = false;

    this.dialogRefJ.componentInstance.save.pipe(take(1)).subscribe((projectDocRef) => {
      if(projectDocRef){
        this.dialogRefJ.close();
      }

    });

  }

  addGame(id: string){    
    this.dialogRefGa =  this.dialog.open(DialogGameComponent,{
      width: '600px'
    });

    
    this.dialogRefGa.componentInstance.game_id = id;
    this.dialogRefGa.componentInstance.id = this.router.snapshot.params.id;

    this.dialogRefGa.componentInstance.save.pipe(take(1)).subscribe((projectDocRef) => {
      if(projectDocRef){
        this.dialogRefGa.close();
      }

    });


  }

  onback(){
    this.location.back(); 
  }

}
