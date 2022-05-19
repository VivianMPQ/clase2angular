import {Component, OnInit, ViewChild} from '@angular/core';
import {Students} from "../../model/students";
import {StudentsService} from "../../services/students.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {NgForm} from "@angular/forms";
import * as _ from "lodash";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentsData: Students;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'actions'];
  isEditMode = false;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild('studentForm', {static: true})
  studentForm!: NgForm;


  constructor(private studentsService: StudentsService) {
    this.studentsData = {} as Students;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllStudents();
    //la pagina carga mostrando a los estudiantes


  }

  getAllStudents() {
    this.studentsService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;

    });
  }

  //para editar la info de los estudiantes
  editItem(element: Students) {
    this.studentsData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelItem() {
    this.isEditMode = false;
    this.studentForm.resetForm();

  }

  deleteItem(id: number) {
    this.studentsService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Students) => {
        return o.id !== id ? 0 : false;


      });
    });
    console.log(this.dataSource.data);

  }

  //creando las funciones vacias para que no salga error en onsummit
  updateStudent() {
    this.studentsService.update(this.studentsData.id, this.studentsData).subscribe((response: any)=>{
      this.dataSource.data=this.dataSource.data.map((o:Students)=>{
        if(o.id==response.id){
          o=response;
        }
        return o;
      });
    });

  }

  //primero se hace el create en el service
  addStudents() {
    this.studentsData.id=0;
    this.studentsService.create(this.studentsData).subscribe((response: any)=>{
      this.dataSource.data.push({...response});
      this.dataSource.data=this.dataSource.data.map((o: any)=>{return 0;});
    });


  }
//la mas facil porque no entran nuevos datos
  cancelEdit() {
    this.isEditMode=false;
    this.studentForm.resetForm(); //se cancela la modificacion

  }


  //crenado el onSummit para que no salga error
  onSummit() {
    if (this.studentForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateStudent(); //se creará para updear un dato
      } else {
        console.log('about to update');
        this.addStudents(); //se creará para agregar un estudiante
      }
      this.cancelEdit();
    } else {
      console.log('inavlid data');
    }
    //fin de if {} else {}
  }


}
