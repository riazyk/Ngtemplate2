import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../node_modules/primeng/components/common/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

    constructor() { }

    items1: MenuItem[];
    items2: MenuItem[];
    visibleSidebar1;
    text;

    showSideMenu () {
        var sidebar = document.getElementById('bar');
        sidebar.classList.toggle('visible');
    }

    ngOnInit() {

        this.items1 = [

            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                    label: 'New',
                    icon: 'fa-plus',
                    items: [
                        { label: 'Project' },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            { label: 'Save', icon: 'fa-save' },
                            { label: 'Update', icon: 'fa-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            { label: 'Delete', icon: 'fa-minus' }
                        ]
                    }
                ]
            }

        ];




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




}
