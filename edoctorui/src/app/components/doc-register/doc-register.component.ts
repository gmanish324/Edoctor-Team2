import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-doctor-registration',
  standalone: true,
  imports: [],
  templateUrl: './doc-register.component.html',
  styleUrl: './doc-register.component.css'
})
export class DoctorRegistrationComponent {
  constructor(private activatedRoute: ActivatedRoute,private _router : Router) { }
  navigate()
  {
    this._router.navigate(['/login']);
  }
}
