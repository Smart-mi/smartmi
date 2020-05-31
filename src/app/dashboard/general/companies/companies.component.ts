import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  public companyLList = [
    {
        "id": 4,
        "name": "test",
        "logo": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/company/logos/773601489_ewd6K4W.png",
        "code": "test123",
        "address1": "123",
        "address2": "123",
        "phone": "1234567890",
        "fax": "1234567890",
        "email": "kiran.c@test.com",
        "country": 1,
        "website": "www.test.com",
        "is_active": false,
        "enable_reports": false,
        "is_group": false,
        "header_img": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/company/headers/773601489.png",
        "footer_img": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/company/footers/773601489.png",
        "employee_count": 6,
        "color": null,
        "quote_count": 1,
        "order_count": 0,
        "country_details": {
            "id": 1,
            "name": "Qatar"
        },
        "categories": {
            "categories": [
                {
                    "id": 3,
                    "name": "test",
                    "company": 4,
                    "legendLabel": null,
                    "legendValue": null,
                    "tooltip": null
                },
                {
                    "id": 4,
                    "name": "qqq",
                    "company": 4,
                    "legendLabel": null,
                    "legendValue": null,
                    "tooltip": null
                },
                {
                    "id": 51,
                    "name": "ssss",
                    "company": 4,
                    "legendLabel": null,
                    "legendValue": null,
                    "tooltip": null
                }
            ],
            "no_of_categories": 3
        }
    },
    {
        "id": 6,
        "name": "MS Nubes",
        "logo": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/company/logos/nubesFavicon_oTXLxdh.png",
        "code": "NB123",
        "address1": "Kochin",
        "address2": "Kochin",
        "phone": "1234567890",
        "fax": "1234567890",
        "email": "admin@nubestechno.com",
        "country": 1,
        "website": "www.nubestechno.com",
        "is_active": true,
        "enable_reports": true,
        "is_group": false,
        "header_img": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/company/headers/nubesLogo_IzqnNTV.png",
        "footer_img": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/company/footers/nubesLogo_V0SHd3x.png",
        "employee_count": 19,
        "color": "#FD4577",
        "quote_count": 22,
        "order_count": 0,
        "country_details": {
            "id": 1,
            "name": "Qatar"
        },
        "categories": {
            "categories": [
                {
                    "id": 7,
                    "name": "testing",
                    "company": 6,
                    "legendLabel": null,
                    "legendValue": null,
                    "tooltip": null
                },
                {
                    "id": 9,
                    "name": "test",
                    "company": 6,
                    "legendLabel": null,
                    "legendValue": null,
                    "tooltip": null
                },
                {
                    "id": 10,
                    "name": "test",
                    "company": 6,
                    "legendLabel": null,
                    "legendValue": null,
                    "tooltip": null
                },
                {
                    "id": 37,
                    "name": "test1234678",
                    "company": 6,
                    "legendLabel": null,
                    "legendValue": null,
                    "tooltip": null
                }
            ],
            "no_of_categories": 4
        }
    },
    {
        "id": 1,
        "name": "Test1",
        "logo": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/company/logos/nubesFavicon_AZpsE2S.png",
        "code": "undefined",
        "address1": "123",
        "address2": "123",
        "phone": "9879879879",
        "fax": "2147483647",
        "email": "nubes@nubes.com",
        "country": 1,
        "website": "www.goo1gle.com",
        "is_active": true,
        "enable_reports": true,
        "is_group": false,
        "header_img": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/company/headers/nubesFavicon_1i3uwPy.png",
        "footer_img": "http://ec2-13-127-88-245.ap-south-1.compute.amazonaws.com:7004/media/company/footers/nubesLogo_fR41OcE.png",
        "employee_count": 11,
        "color": "",
        "quote_count": 4,
        "order_count": 0,
        "country_details": {
            "id": 1,
            "name": "Qatar"
        },
        "categories": {
            "categories": [
                {
                    "id": 8,
                    "name": "testing",
                    "company": 1,
                    "legendLabel": null,
                    "legendValue": null,
                    "tooltip": null
                },
                {
                    "id": 33,
                    "name": "TestCat",
                    "company": 1,
                    "legendLabel": "",
                    "legendValue": "",
                    "tooltip": ""
                }
            ],
            "no_of_categories": 2
        }
    },]

  constructor(private router: Router, private companysevice: CompanyService) { }

  ngOnInit() {
    this.getAllCompany();
  }
  getAllCompany() {
    this.companysevice.getAllCompany().subscribe(data => this.companyLList = data);
  }
  edit(company) {
    const option: NavigationExtras = {
      state: {data: company}
    };
    this.router.navigate(['dashboard/general/createcompany'], option);
  }
  navigate(path) {
    this.router.navigate([path]);
  }

}
