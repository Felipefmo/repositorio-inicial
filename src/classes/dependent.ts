import { Gender } from "../enums/gender-enum";

export class Dependent {
    name: string;
    id: number;
    gender: Gender;
    age: number;

    constructor(name: string, id: number, gender: Gender, age: number) {
        this.name = name;
        this.id = id;
        this.gender = gender;
        this.age = age;
    }
}