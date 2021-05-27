import { Component, OnInit } from '@angular/core';
//import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { GalleryModal } from "../modal/gallery-modal";
import { GalleryRepositoryService } from "../services/gallery-repository.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  //galleryOptions: NgxGalleryOptions[];
  //galleryImages: NgxGalleryImage[];
  selectedImage;
  galleryList : GalleryModal[];
  constructor(public dataService: GalleryRepositoryService) { }

  ngOnInit(): void {
    this.getAllImages();


   /*  this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];
    this.galleryImages = [
      {
          small: './assets/images/DSC_0309-1-300x199.jpg',
          medium: './assets/images/DSC_0309-1-1024x678.jpg',
          big: './assets/images/DSC_0316-1-300x199.jpg'
      },
      {
        small: './assets/images/DSC_0347-1-300x199.jpg',
        medium: './assets/images/DSC_0347-1-1024x678.jpg',
        big: './assets/images/DSC_0346-1-1024x678.jpg'
      },
      {
        small: './assets/images/DSC_0331-1-1024x678.jpg',
        medium: './assets/images/DSC_0331-1-300x199.jpg',
        big: './assets/images/d00f4e81-5564-4c54-9d32-2df0229c0c96-150x150.jpg'
      }
  ]; */
  }

  public selectImage(str){
    this.selectedImage = str;
  }

  public getAllImages(){
    this.dataService.getAllImages()
    .subscribe
    (
      data =>
      {
        this.galleryList = data;
      },
      (error) => {
         console.log(error)
      }
    );
  }

}
