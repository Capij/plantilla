import { Component, OnInit , Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
import { TeamsModel } from '../../../../models/teams.model';
import { TeamsService } from '../../service/teams.service'

@Component({
  selector: 'app-dialog-teams',
  templateUrl: './dialog-teams.component.html',
  styleUrls: ['./dialog-teams.component.css']
})
export class DialogTeamsComponent implements OnInit {

  @Input() team: TeamsModel; 
  @Input() newTeam =  true;
  @Input() id : string;
  @Output() save =  new EventEmitter();
  stop = false;
  hide = true;
  
  students = [];
  fromNew =  new FormGroup({
    name: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });

  constructor(private ts:TeamsService ) {
    if(this.team){
      this.fromNew.patchValue(this.team);
    }

  }

  onSave(){
    this.stop = true;
    if(this.fromNew.valid){
      if(!this.newTeam && this.team){
        this.team.img = this.fromNew.value.img;
        this.team.name = this.fromNew.value.name;
        const updated ={
          ...this.team
        };
        
        this.ts.teamUpdate(updated)
        .then(() => this.save.emit(updated))
        .catch((err) => console.log(err));

      }else{
        //console.log(this.fromNewProyects.value.typeTime)

        this.ts.teamSave(this.fromNew.value, this.id )
        .then((res)=>{this.save.emit(res)})
        .catch((err)=> console.log(err));
      
          
      }

    }else{
      console.log("no entro");
    }
  }

  ngOnInit() {
    if(this.team){
      this.fromNew.patchValue(this.team);
    }
  }

  get name() { return this.fromNew.get('name'); }
  get img() { return this.fromNew.get('img'); }

}
