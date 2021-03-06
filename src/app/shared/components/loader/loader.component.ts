import { LoaderService } from './../loader.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public loading : Subject<boolean> = this.loaderService.isLoading

  constructor(private loaderService : LoaderService) { }

  ngOnInit(): void {
  }

}
