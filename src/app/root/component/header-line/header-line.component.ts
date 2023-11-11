import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'header-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-line.component.html',
  styleUrls: ['./header-line.component.scss'],
})
export class HeaderLineComponent {}
