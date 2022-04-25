import {Permission} from "./permission"
export class Directory {
 
    id: bigint ;
    name_directory:  string;
    permission_requests: Permission[];
    constructor(name_directory:  string ,permission_requests: Permission[]){
        this.name_directory=name_directory;
        this.permission_requests=permission_requests;

    }
     setId(id :bigint){this.id=id;}
    getId(){
        return this.id;
    }
    setName_directory(name_directory :string){this.name_directory=name_directory;}
    getName_directory(){
        return this.name_directory;
    }
    setPermission_requests(permission_requests :Permission[]){this.permission_requests=permission_requests;}
    getPermission_requests(){
        return this.permission_requests;
    }
}