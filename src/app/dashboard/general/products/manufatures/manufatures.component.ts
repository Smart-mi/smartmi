import { Component, OnInit } from '@angular/core';
import { ManufatureService } from 'src/app/services/manufature.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-manufatures',
  templateUrl: './manufatures.component.html',
  styleUrls: ['./manufatures.component.css']
})
export class ManufaturesComponent implements OnInit {
  manufactureForm: FormGroup;
  submitted = false;
  brandaddFlag = false;
  brandeditFlag = false;
  brandList=[
    {
        "id": 4,
        "name": "Nubes Technologies",
        "website": "www.nubestechnologies.com",
        "logo": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/manufacturer/logos/nubesFavicon_ag4dVC0.png",
        "mfr_part_code": "",
        "start_date": null,
        "end_date": null,
        "mfr_average_cost": null,
        "updated_by": null,
        "company": null,
        "is_active": true,
        "mfr_rev_details": [],
        "revision_count": 0,
        "company_details": null
    },
    {
        "id": 3,
        "name": "test2",
        "website": "www.google.com",
        "logo": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/manufacturer/logos/nubesFavicon_8uN00y6.png",
        "mfr_part_code": "",
        "start_date": null,
        "end_date": null,
        "mfr_average_cost": null,
        "updated_by": null,
        "company": null,
        "is_active": true,
        "mfr_rev_details": [],
        "revision_count": 0,
        "company_details": null
    },
    {
        "id": 6,
        "name": "Xtrastaff",
        "website": "xtf.com",
        "logo": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/manufacturer/logos/773601489.png",
        "mfr_part_code": "",
        "start_date": null,
        "end_date": null,
        "mfr_average_cost": null,
        "updated_by": null,
        "company": null,
        "is_active": true,
        "mfr_rev_details": [],
        "revision_count": 0,
        "company_details": null
    },
    {
        "id": 1,
        "name": "KIMMCOISOVER",
        "website": "KIMMCO.com",
        "logo": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/manufacturer/logos/Kimmco.png",
        "mfr_part_code": "",
        "start_date": null,
        "end_date": null,
        "mfr_average_cost": null,
        "updated_by": null,
        "company": null,
        "is_active": true,
        "mfr_rev_details": [],
        "revision_count": 0,
        "company_details": null
    },];
  brandid;
  brand = {
    name: null,
    website: null,
    logo: null,
    active: false
  };

  constructor(private manufatureservice: ManufatureService, private toastservice: ToastrService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllManufature();
    this.manufactureForm = this.formBuilder.group({
      name: ['', Validators.required],
      website: ['', Validators.required],
      logo: ['', Validators.required],
      active: [false],
  });
  }
  async getAllManufature() {
    this.brandList = await this.manufatureservice.getAllManufatures();

  }
  logoSelect(value) {
    const logo = value.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(logo);
    reader.onload = () => {
      this.brand.logo = reader.result;
    };
  }
  reset(){
    this.submitted=false
    this.brand.logo = null;
    this.manufactureForm.reset()
  }
  // async save() {
  //   if (this.brand.name !== null &&
  //       this.brand.logo !== null &&
  //       this.brand.name !== '') {
  //         const respdata = await this.manufatureservice.addManufature(this.brand);
  //         this.toastservice.success('brand added sucessfully', 'Success');
  //         this.getAllManufature();
  //       } else {
  //         this.toastservice.warning('Some fields are missing', 'warning');
  //       }
  // }

  get f() { return this.manufactureForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.manufactureForm.invalid) {
      this.toastservice.warning('some fields are missing', 'warning');
      return;
    }

    alert('SUCCESS!! :-)\n\n' )
}

  close() {
    this.brand.name = null;
    this.brand.website = null;
    this.brand.logo = null;
    this.brand.active = false;
    this.brandaddFlag = ! this.brandaddFlag;
    this.brandeditFlag = false;
    this.manufactureForm.get('logo').setValue(null);
  }
  edit(data) {
    this.brandid = data._id;
    this.brand.name = data.name;
    this.brand.website = data.website;
    this.brand.logo = data.logo;
    this.brand.active = data.active;
    this.brandaddFlag = true;
    this.brandeditFlag = true;
  }
  async update() {
    if (this.brand.name !== null &&
      this.brand.logo !== null &&
      this.brand.name !== '') {
        console.log(this.brand, this.brandid);
        const respdata = await this.manufatureservice.editManufature(this.brandid, this.brand);
        this.getAllManufature();
        this.toastservice.success('brand updated sucessfully', 'Success');
        this.close();
      } else {
        this.toastservice.warning('Some fields are missing', 'warning');
      }
  }
  async delete(data) {
    const respdata =  await this.manufatureservice.deleteMAnufature(data._id);
    this.toastservice.success('brand deleted sucessfully', 'Success');
    this.getAllManufature();
  }
}
