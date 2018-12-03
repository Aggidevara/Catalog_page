import { Component, OnInit } from '@angular/core';
import { CourseDetailsService} from '../../services/course-details.service';
import { CoursesDetails} from '../../coursedetail.modal';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
coursedetails :CoursesDetails[];
  constructor( private coursedetailsservice: CourseDetailsService) {

  }
  ngOnInit() {
    this.courseDetails();
  }
courseDetails() {
  this.coursedetailsservice.getCourseDetails().subscribe((data: CoursesDetails[]) =>{
  this.coursedetails = data ;

});
    }
  }

