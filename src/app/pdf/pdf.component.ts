import { Component, OnInit } from '@angular/core';
import { LinkTarget } from '../options/link-target';
import { pdfDefaultOptions } from '../options/pdf-default-options';
import { PagesLoadedEvent} from '../options/lib/pages-loaded-event';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FileService} from "../_services/file.service";
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  id;
  base:"";
  public rootFolder = location.href;
  constructor(private route: ActivatedRoute,private router: Router,private fileService: FileService) {
  
   }
   getFile(item) {
    this.fileService.getFile(item)
      .subscribe(
        data => {
           
           this.base=data.base64;
     
          },
        error => {
          console.log(error);
        });
     
       
    }
   ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
    console.log("file"+this.id);
    this.getFile(this.id);
    
    pdfDefaultOptions.externalLinkTarget = LinkTarget.BLANK;
  }
  public onPagesLoaded(event: PagesLoadedEvent) {
    console.log('Document loaded with ' + event.pagesCount + ' pages');
  }
}
