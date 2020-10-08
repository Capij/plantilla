import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
import { LeagueModel } from '../../../models/teams.model';
import { TeamsService } from '../service/teams.service'

@Component({
  selector: 'app-dialog-liga',
  templateUrl: './dialog-liga.component.html',
  styleUrls: ['./dialog-liga.component.css']
})
export class DialogLigaComponent implements OnInit {
  @Input() league: LeagueModel; 
  @Input() newLeague =  true;
  @Output() save =  new EventEmitter();
  stop = false;
  hide = true;
  
  students = [];
  fromNew =  new FormGroup({
    name: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });

  constructor(private ts:TeamsService ) {
    if(this.league){
      this.fromNew.patchValue(this.league);
    }

  }

  onSave(){
    this.stop = true;
    if(this.fromNew.valid){
      if(!this.newLeague && this.league){
        this.league.img = this.fromNew.value.img;
        this.league.name = this.fromNew.value.name;
        const updated ={
          ...this.league
        };
        
        this.ts.leagueUpdate(updated)
        .then(() => this.save.emit(updated))
        .catch((err) => console.log(err));

      }else{
        //console.log(this.fromNewProyects.value.typeTime)

        this.ts.leagueSave(this.fromNew.value)
        .then((res)=>{this.save.emit(res)})
        .catch((err)=> console.log(err));
      
          
      }

    }else{
      console.log("no entro");
    }
  }

  ngOnInit() {
    if(this.league){
      this.fromNew.patchValue(this.league);
    }
  }

  get name() { return this.fromNew.get('name'); }
  get img() { return this.fromNew.get('img'); }


}
