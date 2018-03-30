import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from '../../../node_modules/primeng/components/common/api';
import { MenuItem } from '../../../node_modules/primeng/components/common/api';
import { KeyFilterModule } from '../../../node_modules/primeng/keyfilter';
import { MessageService } from 'primeng/components/common/messageservice';

import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    ccRegex1: RegExp = /^([А-ЯЁ]{1}[а-яё]{1,30})$/;
    ccRegex2: RegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
    ccRegex3: RegExp = /^([A-Z]{1}[a-z]{1,30})$/;
    ccRegex4: RegExp = /^([A-Z]{1}[A-Za-z\-]{1,30})$/;
    ccRegex5: RegExp = /^([А-ЯЁ]{1}[А-ЯЁа-яё\-]{1,30})$/;
   
    

    msgs: Message[] = [];

    userform: FormGroup;

    submitted: boolean;

    positions: SelectItem[];

    departments: SelectItem[];

    regions: SelectItem[];

    cities: SelectItem[];

    streets: SelectItem[];

    locations: SelectItem[];

    description: string;

    items2: MenuItem[];

    cc: string;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {

        this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'middlename': new FormControl(''),
            'firstnameEng': new FormControl('', Validators.required),
            'lastnameEng': new FormControl('', Validators.required),
            'middlenameEng': new FormControl(''),
            'position': new FormControl(''),
            'department': new FormControl(''),
            'region': new FormControl(''),
            'town': new FormControl(''),
            'city': new FormControl(''),
            'street': new FormControl(''),
            'corpCellPhone': new FormControl('', Validators.required),
            'cellPhone': new FormControl('', Validators.required),
            'corpWaredPhone': new FormControl(''),
            'homePhone': new FormControl(''),
            'location': new FormControl('')
        });

        this.positions = [];
        this.positions.push({ label: 'Выберите должность', value: '' });
        this.positions.push({ label: 'Должность1', value: 'Должность1' });
        this.positions.push({ label: 'Должность2', value: 'Должность2' });
        this.positions.push({ label: 'Должность3', value: 'Должность3' });
        this.positions.push({ label: 'Должность4', value: 'Должность4' });
        this.positions.push({ label: 'Должность5', value: 'Должность5' });

        this.departments = [];
        this.departments.push({ label: 'Выберите отдел', value: '' });
        this.departments.push({ label: 'Отдел1', value: 'Отдел1' });
        this.departments.push({ label: 'Отдел2', value: 'Отдел2' });
        this.departments.push({ label: 'Отдел3', value: 'Отдел3' });
        this.departments.push({ label: 'Отдел4', value: 'Отдел4' });
        this.departments.push({ label: 'Отдел5', value: 'Отдел5' });

        this.regions = [];
        this.regions.push({ label: 'Выберите регион', value: '' });
        this.regions.push({ label: 'Регион1', value: 'Регион1' });
        this.regions.push({ label: 'Регион2', value: 'Регион2' });
        this.regions.push({ label: 'Регион3', value: 'Регион3' });
        this.regions.push({ label: 'Регион4', value: 'Регион4' });
        this.regions.push({ label: 'Регион5', value: 'Регион5' });


        this.cities = [];
        this.cities.push({ label: 'Выберите город', value: '' });
        this.cities.push({ label: 'Город1', value: 'Город1' });
        this.cities.push({ label: 'Город2', value: 'Город2' });
        this.cities.push({ label: 'Город3', value: 'Город3' });
        this.cities.push({ label: 'Город4', value: 'Город4' });
        this.cities.push({ label: 'Город5', value: 'Город5' });


        this.streets = [];
        this.streets.push({ label: 'Выберите улицу', value: '' });
        this.streets.push({ label: 'Улица1', value: 'Улица1' });
        this.streets.push({ label: 'Улица2', value: 'Улица2' });
        this.streets.push({ label: 'Улица3', value: 'Улица3' });
        this.streets.push({ label: 'Улица4', value: 'Улица4' });
        this.streets.push({ label: 'Улица5', value: 'Улица5' });

        this.locations = [];
        this.locations.push({ label: 'Выберите рабочее место', value: '' });
        this.locations.push({ label: 'Место1', value: 'Место1' });
        this.locations.push({ label: 'Место2', value: 'Место2' });
        this.locations.push({ label: 'Место3', value: 'Место3' });
        this.locations.push({ label: 'Место4', value: 'Место4' });
        this.locations.push({ label: 'Место5', value: 'Место5' });


        this.items2 = [{
            label: 'Profile',
            items: [
                { label: 'Profile', icon: 'fa-user' },
                { label: 'Privacy', icon: 'fa-user-secret' },
                { label: 'Settings', icon: 'fa-cog' },
                { label: 'Logout', icon: 'fa-sign-out' }
            ]
        },
        {
            label: 'Settings',
            items: [
                { label: 'Undo', icon: 'fa-refresh' },
                { label: 'Redo', icon: 'fa-repeat' }
            ]
        },
        {
            label: 'Messages',
            items: [
                { label: 'Undo', icon: 'fa-refresh' },
                { label: 'Redo', icon: 'fa-repeat' }
            ]
        }];



    }

    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Спасибо!', detail: 'Данные успешно сохранены' });
    }

    get diagnostic() { return JSON.stringify(this.userform.value); }
}
