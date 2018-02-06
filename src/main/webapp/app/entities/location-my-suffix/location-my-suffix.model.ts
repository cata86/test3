import { BaseEntity } from './../../shared';

export class LocationMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public streetAddress?: string,
        public streetAddress2?: string,
        public postalCode?: string,
        public city?: string,
        public stateProvince?: string,
        public countryId?: number,
    ) {
    }
}
