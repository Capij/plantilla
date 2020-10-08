import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';

import { DialogLigaComponent } from '../leagues/dialog-liga/dialog-liga.component'
import { LeagueModel, TeamsModel } from '../../models/teams.model';
import { TeamsService } from '../leagues/service/teams.service';
import { take } from 'rxjs/internal/operators/take';


@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  dialogRef: MatDialogRef<DialogLigaComponent>;

  load = false;

  leagues: LeagueModel[] = [];

  constructor(private dialog:MatDialog, private ts: TeamsService) {
    this.ts.getLeagues().subscribe((res)=>{
      this.leagues = res;
      this.load = true;
    })

  }

  ngOnInit() {
  }

  addleagues(){

    this.dialogRef =  this.dialog.open(DialogLigaComponent,{
      width: '500px'
    });
    
    this.dialogRef.componentInstance.save.pipe(take(1)).subscribe((projectDocRef) => {
      if(projectDocRef){
        this.dialogRef.close();
      }

    });

  }

  onEdit(league: LeagueModel){
    this.dialogRef =  this.dialog.open(DialogLigaComponent,{
      width: '500px'
    });

    this.dialogRef.componentInstance.league = league;
    this.dialogRef.componentInstance.newLeague = false;

    this.dialogRef.componentInstance.save.pipe(take(1)).subscribe((projectDocRef) => {
      if(projectDocRef){
        this.dialogRef.close();
      }

    });
  }


}
