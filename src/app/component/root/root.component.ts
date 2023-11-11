import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderLineComponent } from '../header-line/header-line.component';
import { MainGridComponent } from '../main-grid/main-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderLineComponent, MainGridComponent],
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {}
