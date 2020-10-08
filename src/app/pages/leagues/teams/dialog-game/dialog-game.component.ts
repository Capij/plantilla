import { Component, OnInit , Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
import { gameModel } from '../../../../models/journeys.model';
import { JounaryService } from '../../../jounary/service/jounary.service';
import { TeamsService } from '../../service/teams.service'

@Component({
  selector: 'app-dialog-game',
  templateUrl: './dialog-game.component.html',
  styleUrls: ['./dialog-game.component.css']
})
export class DialogGameComponent implements OnInit {

  @Input() game: gameModel; 
  @Input() newGame =  true;
  @Input() game_id : string;
  @Input() id : string;
  @Output() save =  new EventEmitter();
  stop = false;
  hide = true;
  
  teams = [];  

  fromNew =  new FormGroup({
    dateInit: new FormControl('', [Validators.required]),
    visiting_team: new FormControl('', [Validators.required]),
    visiting_point: new FormControl('', [Validators.required]),
    local_team: new FormControl('', [Validators.required]),
    local_points: new FormControl('', [Validators.required])

  }); 

  constructor(private js:JounaryService, private ts:TeamsService) {}

  ngOnInit() {

    this.ts.getTeams(this.id).subscribe((res)=>{
      this.teams = res;
    });

    if(this.game){
      this.fromNew.patchValue(this.game);
    }
  }

  onSave(){
    console.log("dadaf");
    this.stop = true;
    if(this.fromNew.valid){
      console.log("dadaf- 2");

      if(!this.newGame && this.game){
        console.log("dadaf - 3");

        this.game.visiting_team = this.fromNew.value.visiting_team;
        this.game.visiting_point = this.fromNew.value.visiting_point;
        this.game.local_team = this.fromNew.value.local_team;
        this.game.local_points = this.fromNew.value.local_points;
        this.game.dateInit = this.fromNew.value.dateInit;

        const updated ={
          ...this.game
        };
        
        this.js.gameUpdate(updated)
        .then(() => this.save.emit(updated))
        .catch((err) => console.log(err));

      }else{
        //console.log(this.fromNewProyects.value.typeTime)

        this.js.gameSave(this.fromNew.value, this.game_id )
        .then((res)=>{this.save.emit(res)})
        .catch((err)=> console.log(err));
      
          
      }

    }else{
      console.log("no entro");
    }
  }

  get dateInit() { return this.fromNew.get('dateInit'); }
  get visiting_team() { return this.fromNew.get('visiting_team'); }
  get local_team() { return this.fromNew.get('local_team'); }
  get visiting_point() { return this.fromNew.get('visiting_point'); }
  get local_points() { return this.fromNew.get('local_points'); }



}
