import { Dependent } from "../../classes/dependent";
import { Employee } from "../../classes/employee"
import { Gender } from "../../enums/gender-enum";
import { employeeRetirementeFee } from "../../functions/employee-retiremente-fee";

export default () => {
    const jorge = new Employee("Jorge", 1000, "32", [new Dependent("judite", 1, Gender.FEMALE, 35)]);
    jorge.missedDays = 2,
        // console.log(jorge);
        jorge.vacation.lastVacationDate = new Date("10/13/2020");
    console.log("O Jorge tem ferias para tirar?", jorge.vacation.hasVacation());
};