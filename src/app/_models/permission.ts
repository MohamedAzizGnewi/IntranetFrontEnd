
export class Permission {
 
    id: bigint ;
    permission:  number;
    constructor(permission:  number){
        this.permission=permission;
      
    }
     setId(id :bigint){this.id=id;}
    getId(){
        return this.id;
    }
    setName_directory(permission:  number){this.permission=permission;}
    getName_directory(){
        return this.permission;
    }
 
 
    
}