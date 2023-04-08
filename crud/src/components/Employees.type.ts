export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export const stevonEmployeeList: IEmployee[] = [{
    id: new Date().toJSON().toString(),
    firstName: "Stevon",
    lastName: "Andrade",
    email: "stevon@gmail.com",
}]

export enum PageEnum {
    list,
    add,
    edit,
}