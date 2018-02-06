import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Test3RegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { Test3CountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { Test3LocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { Test3DepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { Test3TaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { Test3EmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { Test3JobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { Test3JobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Test3RegionMySuffixModule,
        Test3CountryMySuffixModule,
        Test3LocationMySuffixModule,
        Test3DepartmentMySuffixModule,
        Test3TaskMySuffixModule,
        Test3EmployeeMySuffixModule,
        Test3JobMySuffixModule,
        Test3JobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Test3EntityModule {}
