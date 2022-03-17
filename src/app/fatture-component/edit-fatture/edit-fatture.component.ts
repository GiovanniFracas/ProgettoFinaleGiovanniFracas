import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatoFattura } from 'src/app/classes/stato-fattura/stato-fattura';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';



@Component({
  selector: 'app-edit-fatture',
  templateUrl: './edit-fatture.component.html',
  styleUrls: ['./edit-fatture.component.css']
})
export class EditFattureComponent implements OnInit {

  editFattura!:Fatture
  statoFattura:StatoFattura [] =[]

  constructor(private route: ActivatedRoute, private fattureService:FattureService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.fattureService.getFatturaById(params['id']).subscribe(res =>{
        this.editFattura= res
      })
    })
    this.fattureService.getStatoFattura().subscribe((statoFattura:any) => {
      this.statoFattura = statoFattura.content
      console.log(this.statoFattura);
    })
   }


   saveFattura(editFattura:Fatture) {
    this.fattureService.updateFatture(editFattura).subscribe(data => {
     console.log(
       'Modifica riuscita!',
       'Hai modificato una fattura!',
       'success'
     )
     this.router.navigate(["fattureDetail", this.editFattura.id])
    })
  }
 back(){
  this.router.navigate(["fattureDetail", this.editFattura.id])

 }

}
