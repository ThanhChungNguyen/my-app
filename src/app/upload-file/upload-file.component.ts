import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent implements OnInit {
  constructor() {}
  fileToUpload: File | null = null;

  ngOnInit(): void {}

  async handleFileInput(event: any) { // can use to show name/type before continue proess the file
    this.fileToUpload = event.target.files[0];
    console.log(event.target.files[0]);
    var reader = new FileReader();
    reader.onload = this.onReaderLoad;
    reader.readAsText(<File>this.fileToUpload);
  }

  onReaderLoad(event: any) { // auto run when above reader.readAsText is finished. can use to show content of added file to confirm before doing sth else ( save to db, etc)
    console.log(event); //ProgressEvent 
    var obj = JSON.parse(event.target.result);
    console.log(obj);
  }
}
