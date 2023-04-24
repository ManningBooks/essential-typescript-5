type Person = {
    id: string;
    name: string;
    city: string;
    getContact(field: string): string;
};
type Employee = {
    id: string;
    company: string;
    dept: string;
    getContact(field: number): number;
};
type EmployedPerson = Person & Employee;
declare let person: EmployedPerson;
declare let typeTest: ((field: string) => string) & ((field: number) => number);
declare let stringParamTypeTest: string;
declare let numberParamTypeTest: number;
