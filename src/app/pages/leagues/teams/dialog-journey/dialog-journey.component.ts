import { Component, OnInit , Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
import { TeamsModel } from 'src/app/models/teams.model';
import { journeyModel } from '../../../../models/journeys.model';
import { JounaryService } from '../../../jounary/service/jounary.service';
import { TeamsService } from '../../service/teams.service'


@Component({
  selector: 'app-dialog-journey',
  templateUrl: './dialog-journey.component.html',
  styleUrls: ['./dialog-journey.component.css']
})


export class DialogJourneyComponent implements OnInit {


  @Input() journey: journeyModel; 
  @Input() newJourney =  true;
  @Input() id : string;
  @Output() save =  new EventEmitter();
  stop = false;
  hide = true;
  
  types = ['Apertura', 'Clausura'];  
  fromNew =  new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    init: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required])

  });

  constructor(private js:JounaryService , private ts: TeamsService) {
    if(this.journey){
      this.fromNew.patchValue(this.journey);
    }

  }

  onSave(){
    this.stop = true;
    if(this.fromNew.valid){
      if(!this.newJourney && this.journey){
        this.journey.name = this.fromNew.value.name;
        this.journey.type = this.fromNew.value.type;
        this.journey.init  = Date.parse(this.fromNew.value.init);  
        this.journey.end  = Date.parse(this.fromNew.value.end);  

        const updated ={
          ...this.journey
        };
        
        this.js.journeyUpdate(updated)
        .then(() => this.save.emit(updated))
        .catch((err) => console.log(err));

      }else{
        //console.log(this.fromNewProyects.value.typeTime)

        this.js.journeySave(this.fromNew.value, this.id )
        .then((res)=>{this.save.emit(res)})
        .catch((err)=> console.log(err));
      
          
      }

    }else{
      console.log("no entro");
    }
  }

  ngOnInit() {
    if(this.journey){
      this.fromNew.patchValue(this.journey);
    }
  }

  get name() { return this.fromNew.get('name'); }
  get type() { return this.fromNew.get('type'); }


}
