import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();


  imageDefault = './assets/images/descarga.png';

  constructor() {
    console.log('Constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(){
      console.log('ngChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
