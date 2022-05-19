import { TestBed } from '@angular/core/testing';
import { StudentsService } from './students.service';


//invocamos al student.service desde describe
describe('StudentsService', () => {
  let service: StudentsService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsService);

  });

  it('should create the app', () => {

    expect(service).toBeTruthy();
  });

});
