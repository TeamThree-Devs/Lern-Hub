import { Component } from '@angular/core';
import {MatFormField, MatInput, MatPrefix} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [
    MatFormField,
    MatIcon,
    MatPrefix,
    MatFormField,
    MatInput,
    MatPrefix,
    MatFormField,
    NgIf,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showResults: boolean = false;
  searchTerm: string = "";
}
