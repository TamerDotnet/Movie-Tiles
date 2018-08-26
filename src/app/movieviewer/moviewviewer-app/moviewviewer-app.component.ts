import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'pm-moviewviewer-app',
  templateUrl: './moviewviewer-app.component.html',
  styleUrls: ['./moviewviewer-app.component.css']
})
export class MoviewviewerAppComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl);
  }

  ngOnInit() {

  }

}
