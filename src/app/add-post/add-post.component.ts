import { Component, OnInit } from '@angular/core';
import {RestApiServiceService } from '../services/rest-api-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  [x: string]: any;
  content:any;
  title = 'SocialMediaApp';
  contentForm:any= FormGroup;
  submitted = false;
  postdata=[];

  ngOnInit()
  {
    this.contentForm = this.formBuilder.group({
     
      content: ['', [Validators.required]]
     
    })
}


  get f() { return this.contentForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.contentForm.invalid) {
            return;
        }
        console.log(this.contentForm.value);

        this.restservice.AddPost(this.contentForm.value).subscribe(Response=>{
          console.log(Response);
         // this.postdata.push(this.contentForm.value);
        })
        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contentForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.contentForm.reset();
    }

    //GetPostData()
    //{
     // this.restservice.GetPost(this.);

   // }


  image:any;
  constructor(private restservice:RestApiServiceService, private formBuilder: FormBuilder ){}

  AddImages(){
    var formData = new FormData();
    formData.append('file',this.image);
    this.restservice.AddImages(formData).subscribe(res =>{
    console.log(res);
   })
   
  }

  hello(){
    document.getElementById('buttonid')?.addEventListener('click', this.openDialog);
  }

openDialog() {
  document.getElementById('fileid')?.click();
}
onFileChanged(event:any) {
  if(!event.target.files[0] || event.target.files[0].length == 0) {
    //this.msg = 'You must select an image';
    return;
  }
  
  var mimeType = event.target.files[0].type;
  
  if (mimeType.match(/image\/*/) == null) {
    //this.msg = "Only images are supported";
    return;
  }
  
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  
  reader.onload = (_event) => {
    //this.msg = "";
    this.image = reader.result; 
  }

}

}
