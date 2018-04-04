import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ResumeService} from '../service/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private router: Router, private _resumeService: ResumeService) {
  }

  ngOnInit() {

  }

  onBack(): void {
    this.resetForm();
    this.router.navigate(['resume']);
  }

  onLogout(): void {
    this.resetForm();
    this.router.navigate(['']);
  }

  private resetForm(): void {
    this._resumeService.resetForms();
  }
}
