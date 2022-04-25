
export class Departement {
 
    id: bigint ;
    departement:string;
    permission:  boolean;
    val:  number;
    constructor(id: bigint ,permission:  boolean,departement:string,val:number){
        this.id=id;
        this.permission=permission;
        this.departement=departement;
        this.val=val;
    }
    setVal(val :number){this.val=val;}
    getVal(){
        return this.val;
    }
     setId(id :bigint){this.id=id;}
    getId(){
        return this.id;
    }
    setPermission(permission:  boolean){this.permission=permission;}
    getPermission(){
        return this.permission;
    }
    setdepartement(departement:  string){this.departement=departement;}
    getdepartement(){
        return this.departement;
    }
 
    
}