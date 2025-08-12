import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  fileName= 'ExcelSheet.xlsx';
   
  Addnewemployee: FormGroup;

  newemployee: any[] = [];
  Users: any[] = [];
  Teams: any[] = [];
  
  empForm: FormGroup;
  SelectedEmp: any = null;
  
  constructor(private _rest: RestService, private fb: FormBuilder) {
    this.Addnewemployee = this.fb.group({
      emp_code: new FormControl('', [Validators.required]),
      emp_name: new FormControl('', [Validators.required]),
      emp_email: new FormControl('', [Validators.required]),
      userlevel_id: this.fb.array([], [Validators.required]),
      team_id: this.fb.array([], [Validators.required]),
      status: new FormControl('', [Validators.required])
    });

    this.empForm = this.fb.group({
      emp_id: [''],
      emp_code: ['', Validators.required],
      emp_name: ['', Validators.required],
      emp_email: ['', Validators.required],
      password: ['', Validators.required],
      status: ['', Validators.required],
      teamRoles: this.fb.array([])  // key part
    });
  }
  
exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
  
 ngOnInit(): void {
    this.getEmployee();
    this.getUserlevel();
    this.getTeams();
  }

  getUserlevel() {
    this._rest.Alluserlevel().subscribe((data: any) => {
      this.Users = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  getTeams() {
    this._rest.AllTeam().subscribe((data: any) => {
      this.Teams = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }
  
  getEmployee() {
    this._rest.Allemployee().subscribe((data: any) => {
      console.log(data);
      this.newemployee = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  onCheckboxChange(event: any, controlName: string) {
    const formArray: FormArray = this.Addnewemployee.get(controlName) as FormArray;

    if (event.target.checked) {
      formArray.push(new FormControl(parseInt(event.target.value)));
    } else {
      const index = formArray.controls.findIndex(x => x.value === parseInt(event.target.value));
      if (index !== -1) {
        formArray.removeAt(index);
      }
    }
  }

  Addemp() {
  const formData = this.Addnewemployee.value;
    const teamIds = formData.team_id;
    const userlevelIds = formData.userlevel_id;
    const teamRoles = [];
    // Generate all combinations
    for (let t of teamIds) {
      for (let u of userlevelIds) {
        teamRoles.push({ team_id: t, userlevel_id: u });
      }
    }
    const payload = { 
       emp_code: formData.emp_code,
       emp_name: formData.emp_name,
       emp_email: formData.emp_email,
       status: formData.status,
       teamRoles: teamRoles
    };
    
    this._rest.Newapiaddenployee(payload).subscribe({
      next: (result: any) => {
        console.log('Employee added:', result);
        this.newemployee.push(result);
        this.getEmployee();
        this.Addnewemployee.reset();
        this.ngOnInit();
      },
      error: (err: any) => {
        console.error('API error:', err);
      }
    });
  }
  
  // Editemp(emp_id: number){
  //   const selectemployee = this.newemployee.find(employee => employee.emp_id === emp_id);
  //     if(selectemployee){
  //       this.selctedemp = 1;
  //       this.Editempform.patchValue(selectemployee);
  //     }else{
  //       console.log(`Employee ${emp_id} not found`)
  //     }
  // }

  // Updateemployee(){
  //    this._rest.Updateemployee(this.Editempform.value).subscribe((data: any) => {
  //     console.log(data);
  //     this.getEmployee();
  //     this.Editempform.reset();
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }

  delete(emp_id: number) {
    if (confirm('Are You Sure To Delete Employee?')) {
      this._rest.deleteemployee(emp_id).subscribe(data => {
        console.log(data);
        this.getEmployee();
      }, err => {
        console.log(err);
        this.getEmployee();
      });
    }
  }
  
  getRolesString(emp: any): string {
    if (!emp.teamRoles) return '';
    return emp.teamRoles.map((r: any) => r.userlevel_name).join(', ');
  }

  getTeamsString(emp: any): string {
    if (!emp.teamRoles) return '';
    // Use Set to avoid duplicates
    const teams = [...new Set(emp.teamRoles.map((r: any) => r.TeamName))];
    return teams.join(', ');
  }

  onSubmit(emp_id: number) {
    const selectemp = this.newemployee.find(e => e.emp_id === emp_id);
    if (selectemp) {
      this.SelectedEmp = 1;
      // Fill normal fields
      this.empForm.patchValue({
        emp_id: selectemp.emp_id,
        emp_code: selectemp.emp_code,
        emp_name: selectemp.emp_name,
        emp_email: selectemp.emp_email,
        password: selectemp.password,
        status: selectemp.status,
      });
      // Fill teamRoles FormArray
      const teamRolesArray: FormArray = this.fb.array([]);
      if (selectemp.teamRoles && Array.isArray(selectemp.teamRoles)) {
        selectemp.teamRoles.forEach((role: any) => {
          if (role) {
            teamRolesArray.push(this.fb.group({
              id: [role.id],
              team_id: [role.team_id],
              userlevel_id: [role.userlevel_id]
            }));
          }
        });
      }
      // Set the array
      this.empForm.setControl('teamRoles', teamRolesArray); 
    }
  }

  addTeamRole() {
    const teamRolesArray = this.empForm.get('teamRoles') as FormArray;
    teamRolesArray.push(this.fb.group({
      id: null,  // null for new records
      team_id: '',
      userlevel_id: ''
    }));
  }

  updateemp() {
    const formValue = this.empForm.value;
    const emp_id = formValue.emp_id;

    this._rest.Updateemployee(emp_id, formValue).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getEmployee();
        this.empForm.reset();
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  get teamRoles(): FormArray {
    return this.empForm.get('teamRoles') as FormArray;
  }

}

  // @Input() emp_id: any;
  // @Input() userlevel_id: any;
  // @Input() team_id: any;

  // // @Input() userlevel: any;
  // isAdmin: boolean = false;
  // employees: any[] = [];
  // userlevel: any[] = [];
  // team: any[] = [];
  // Alldata: any[] = [];

  // Addform: FormGroup;
  // Addempform: FormGroup;
  // Editempform: FormGroup;
  // selctedemp: any = null;

  // constructor(@Inject(RestService) private _rest: RestService, private fb: FormBuilder) {
  //   this.Addempform = this.fb.group({
  //     emp_code: new FormControl('', [Validators.required]),
  //     emp_name: new FormControl('', [Validators.required]),
  //     emp_email: new FormControl('', [Validators.required]),
  //     userlevel: this.fb.array([], [Validators.required]),
  //     team: this.fb.array([], [Validators.required]),
  //     // team: new FormControl('', [Validators.required]),
  //     // teamId: this.fb.array([], [Validators.required]),
  //     status: new FormControl('', [Validators.required]),
  //     added_date: new FormControl(''),
  //     updated_date: new FormControl('')
  //   })

  //   this.Editempform = this.fb.group({
  //     emp_id: new FormControl(''),
  //     emp_code: new FormControl('', [Validators.required]),
  //     emp_name: new FormControl('', [Validators.required]),
  //     emp_email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required]),
  //     userlevel: this.fb.array([], [Validators.required]), // FormArray for checkboxes
  //     team: this.fb.array([], [Validators.required]), // FormArray for checkboxes
  //     // team: new FormControl('', [Validators.required]),
  //     // teamId: this.fb.array([], [Validators.required]),
  //     status: new FormControl('', [Validators.required]),
  //     updated_date: new FormControl('')
  //   });

    // this.Addform = new FormGroup({
    //   emp_id: new FormControl('', [Validators.required]),
    //   userlevel_id: new FormControl('', [Validators.required]),
    //   team_id: new FormControl('', [Validators.required])
    // });

    // to get old employees table data with role column name
    // this.Addempform = new FormGroup({
    //   emp_code: new FormControl('', [Validators.required]),
    //   emp_name: new FormControl('', [Validators.required]),
    //   emp_email: new FormControl('', [Validators.required]),
    //   role: new FormControl('', [Validators.required]),
    //   status: new FormControl('', [Validators.required]),
    //   added_date: new FormControl(''),
    //   updated_date: new FormControl('')
    // })

    // this.Editempform = new FormGroup({
    //   emp_id: new FormControl(''),
    //   emp_code: new FormControl('', [Validators.required]),
    //   emp_name: new FormControl('', [Validators.required]),
    //   emp_email: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.required]),
    //   role: new FormControl('', [Validators.required]),
    //   status: new FormControl('', [Validators.required]),
    //   updated_date: new FormControl('')
    // })
  // }

  // ngOnInit(): void {
  
  //   // const token = localStorage.getItem('token');
  //   // if (token) {
  //   //   const decoded: any = jwtDecode(token);
  //   //   if (decoded.role === 'Admin') {
  //   //     this.isAdmin = true;
  //   //   } else {
  //   //     // this._toastr.warning('Only admin can add new users.', 'Unauthorized');
  //   //   }
  //   // } else {
  //   //   // this._toastr.error('No token found.', 'Unauthorized');
  //   // }
  // }

  // getUserlevel() {
  //   this._rest.Alluserlevel().subscribe((data: any) => {
  //     this.userlevel = data.data;
  //     console.log(data);
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }

  // getTeams() {
  //   this._rest.AllTeam().subscribe((data: any) => {
  //     this.team = data.data;
  //     console.log(data);
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }

  // getEmployee() {
  //   this._rest.Allemployee().subscribe((data: any) => {
  //     console.log(data);
  //     this.employees = data.data;
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }

  // Addemp() {
  //   const formValue = this.Addempform.value;
  //   formValue.userlevel = `${formValue.userlevel.join(', ')}`;
  //   formValue.team = ` ${formValue.team.join(', ')}`;
  //   this._rest.Addemployee(formValue).subscribe(
  //     (result: any) => {
  //       console.log(result);
  //       this.employees.push(result);
  //       this.getEmployee();
  //       this.Addempform.reset();
  //       this.ngOnInit();
  //     },
  //     (err: any) => {
  //       console.log(err);
  //     }
  //   );
  // }
  // selectedValues: number[] = [];

  // isSelected(id: number): boolean {
  //   return this.selectedValues.includes(id);
  // }

  // onCheckboxChange(event: any, field: string) {
  //   const formArray: FormArray = this.Addempform.get(field) as FormArray;
  //   // const frmArray: FormArray = this.Addempform.get(field) as FormArray;x
  //   if (event.target.checked) {
  //     formArray.push(this.fb.control(event.target.value));
  //     // frmArray.push(this.fb.control(event.target.value));
  //   } else {
  //     let i: number = 0;
  //     formArray.controls.forEach((ctrl: any) => {
  //       if (ctrl.value == event.target.value) {
  //         formArray.removeAt(i);
  //         // frmArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

  // onCheckboxupdatechange(event: any) {
  //   const formArray: FormArray = this.Editempform.get('userlevel || team') as FormArray;
  //   if (event.target.checked) {
  //     formArray.push(new FormControl(event.target.value));
  //   } else {
  //     const index = formArray.controls.findIndex(ctrl => ctrl.value === event.target.value);
  //     if (index !== -1) {
  //       formArray.removeAt(index);
  //     }
  //   }
  // }

  // onCheckboxupdatechange(event: any, formArrayName: string) {
  //   const formArray: FormArray = this.Editempform.get(formArrayName) as FormArray;
  //   if (event.target.checked) {
  //     formArray.push(new FormControl(event.target.value));
  //   } else {
  //     const index = formArray.controls.findIndex(ctrl => ctrl.value === event.target.value);
  //     if (index !== -1) {
  //       formArray.removeAt(index);
  //     }
  //   }
  // }

  // Editemp(emp_id: number) {
  //   const selectedEmployee = this.employees.find(emp => emp.emp_id === emp_id);
  //   if (selectedEmployee) {
  //     this.selctedemp = 1;

  //     // Patch basic form values
  //     this.Editempform.patchValue({
  //       emp_id: selectedEmployee.emp_id,
  //       emp_code: selectedEmployee.emp_code,
  //       emp_name: selectedEmployee.emp_name,
  //       emp_email: selectedEmployee.emp_email,
  //       password: selectedEmployee.password,
  //       status: selectedEmployee.status,
  //       updated_date: selectedEmployee.updated_date
  //     });

  //     // Populate userlevel (Checkbox handling)
  //     const userlevelArray = this.Editempform.get('userlevel') as FormArray;
  //     const teamArray = this.Editempform.get('team') as FormArray;
  //     userlevelArray.clear(); // Clear existing values
  //     teamArray.clear();

  //     if (selectedEmployee.userlevel) {
  //       const userlevels = selectedEmployee.userlevel.split(','); // Convert string to array if stored as CSV
  //       userlevels.forEach((name: string) => {
  //         userlevelArray.push(new FormControl(name));
  //       });
  //     }

  //     // Populate team checkboxes
  //     if (selectedEmployee.team) {
  //       const teams = selectedEmployee.team.split(','); // Convert string to array if stored as CSV
  //       teams.forEach((name: string) => {
  //         teamArray.push(new FormControl(name));
  //       });
  //     }
  //     // if (selectedEmployee.userlevel && selectedEmployee.team) {
  //     //   selectedEmployee.userlevel.forEach((name: string) => {
  //     //     userlevelArray.push(new FormControl(name));
  //     //     teamArray.push(new FormControl(name));
  //     //   });
  //     // }
  //   } else {
  //     console.log(`Employee ID ${emp_id} not found.`);
  //   }
  // }

  // Update Employee
  // updateemp() {
  //   const formValue = {
  //     ...this.Editempform.value,
  //     userlevel: this.Editempform.value.userlevel.join(','),
  //     team: this.Editempform.value.team.join(',')
  //   };

  //   console.log("Updating Employee:", formValue);

  //   this._rest.Updateemployee(formValue).subscribe(
  //     (result: any) => {
  //       console.log(result);
  //       this.getEmployee();
  //       this.Editempform.reset();
  //     },
  //     (err: any) => {
  //       console.log(err);
  //     }
  //   );
  // }

  // delete(emp_id: number) {
  //   if (confirm('Are You Sure To Delete Employee?')) {
  //     this._rest.deleteemployee(emp_id).subscribe(data => {
  //       console.log(data);
  //       this.getEmployee();
  //     }, err => {
  //       console.log(err);
  //       this.getEmployee();
  //     });
  //   }
  // }

  // Addteamrole() {
  //   this._rest.AddTeamrole(this.Addform.value).subscribe((data: any) => {
  //     this.Alldata.push(data);
  //     this.Addform.reset();
  //     this.getEmployee();
  //     console.log(data);
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }