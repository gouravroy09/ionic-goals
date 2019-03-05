import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  ref = firebase.database().ref('infos/');
infoForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder,public alertController: AlertController) {
      this.infoForm = this.formBuilder.group({
        'info_title' : [null, Validators.required],
        'info_description' : [null, Validators.required]
      });
this.getInfo(this.route.snapshot.paramMap.get('key'));

}

  ngOnInit() {
  }
  getInfo(key) {
    firebase.database().ref('infos/'+key).on('value', resp => {
      let info = snapshotToObject(resp);
      this.infoForm.controls['info_title'].setValue(info.info_title);
      this.infoForm.controls['info_description'].setValue(info.info_description);
    });
  }
createUpdateInfo(){
  if(firebase.database().ref('infos/'+this.route.snapshot.paramMap.get('key'))==null){
    let newInfo = firebase.database().ref('infos/').push();
  newInfo.set(this.infoForm.value);
  //this.router.navigate(['/detail/'+newInfo.key]);
  this.router.navigate(['/home']);
  }else{
    let newInfo = firebase.database().ref('infos/'+this.route.snapshot.paramMap.get('key')).update(this.infoForm.value);
    //this.router.navigate(['/detail/'+this.route.snapshot.paramMap.get('key')]);
    this.router.navigate(['/home']);
  }
}
//   updateInfo() {
//     let newInfo = firebase.database().ref('infos/'+this.route.snapshot.paramMap.get('key')).update(this.infoForm.value);
//     this.router.navigate(['/detail/'+this.route.snapshot.paramMap.get('key')]);
// }
// saveInfo() {
//   let newInfo = firebase.database().ref('infos/').push();
//   newInfo.set(this.infoForm.value);
//   this.router.navigate(['/detail/'+newInfo.key]);
// }
async deleteInfo() {
  if(firebase.database().ref('infos/'+this.route.snapshot.paramMap.get('key'))!=null){
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete this info?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            firebase.database().ref('infos/'+this.route.snapshot.paramMap.get('key')).remove();
            this.router.navigate(['/home']);
          }
        }
      ]
    });
  
    await alert.present();
    
  }
  
}
}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}