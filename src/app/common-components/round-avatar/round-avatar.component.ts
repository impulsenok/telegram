import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RandomBackgroundColorDirective } from 'src/app/directive/random-background-color/random-background-color.directive';
import { FirstLettersPipe } from 'src/app/pipe/first-letters/first-letters.pipe';

@Component({
  selector: 'round-avatar',
  standalone: true,
  imports: [CommonModule, RandomBackgroundColorDirective, FirstLettersPipe],
  templateUrl: './round-avatar.component.html',
  styleUrls: ['./round-avatar.component.scss'],
})
export class RoundAvatarComponent {
  @Input()
  title!: string;
}
