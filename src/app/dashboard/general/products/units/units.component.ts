import { Component, OnInit } from '@angular/core';
import {  ToastrService } from 'ngx-toastr';
import { UnitsService } from 'src/app/services/units.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})

export class UnitsComponent implements OnInit {
  unitForm: FormGroup;
  submitted = false;
  addFlag = true;
  error: object;
  unitid;


  unitList;
  unit = {
    name: null,
    symbol: null
  };
  unitFormCaption = {
    caption1: "Unit Name",
    caption2: "Unit Symbol"
  };
  unitData:any= [{
    "id": 1,
    "name": "asdas",
    "symbol": "asdasd"
      },
      {
        "id": 2,
        "name": "weight",
        "symbol": "kg"
    }]
  constructor(private toastservice: ToastrService, private unitservice: UnitsService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllUnits();
    this.unitForm = this.formBuilder.group({
      unitName: ['', Validators.required],
      symbol: ['', Validators.required],
  });
  this.error = {
    required: "Please fill out this!"
  };
  }
  async getAllUnits() {
    this.unitList = await this.unitservice.getAllUnit();
  }
  // async add() {
  //   if (this.unit.name !== null &&
  //       this.unit.symbol !== null) {
  //         try {
  //         const respdata = await this.unitservice.addNewUnit(this.unit);
  //         await this.getAllUnits();
  //         this.toastservice.success('unit added successfully', 'success');
  //         this.close();
  //         } catch (error) {
  //           this.toastservice.error('something wrong', 'Error');
  //         }
  //       } else {
  //         this.toastservice.warning('some fields are missing', 'warning');
  //       }
  // }
  get f() { return this.unitForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.unitForm.invalid) {
      this.toastservice.warning('some fields are missing', 'warning');
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.unitForm.value))
}


  edit(editunit) {
    this.addFlag = false;
    this.unitid = editunit._id;
    this.unit.name = editunit.name;
    this.unit.symbol = editunit.symbol;
  }
  async delete(unit) {
    try {
    const respdata = await this.unitservice.deleteUnit(unit._id);
    await this.getAllUnits();
    this.toastservice.success('unit delete successfully', 'success');
    } catch (error) {
      this.toastservice.error('something wrong', 'Error');
    }
  }
  close() {
    this.addFlag = true;
    this.unit.name = null;
    this.unit.symbol = null;
  }
  async update() {
    if (this.unit.name !== null &&
      this.unit.symbol !== null &&
      this.unit.name !== '' &&
      this.unit.symbol !== '') {
        try {
        const respdata = await this.unitservice.editUnit(this.unitid, this.unit);
        await this.getAllUnits();
        this.toastservice.success('unit updated successfully', 'success');
        this.close();
        } catch (error) {
          this.toastservice.error('something wrong', 'Error');
        }
      } else {
        this.toastservice.warning('some fields are missing', 'warning');
      }
  }

}
