import Entity from './Entity';

class Company extends Entity {
    constructor() {
        super (
            {
                'id'        : 0,
                'name'      : '',
                'email'     : '',
                'address'   : null,
                'logo_url'  : null,
                'created_at': new Date(),
                'updated_at': new Date()
            },
            {
                create: '/api/companies',
                read  : '/api/companies', 
                update: '/api/companies',
                delete: '/api/companies',
            }
        );
    }
}

export default Company;