import { Dependent } from "../../classes/dependent";
import { Employee } from "../../classes/employee"
import { Gender } from "../../enums/gender-enum";
import { employeeRetirementeFee } from "../../functions/employee-retiremente-fee"

export default () => {
    const carlos = new Employee("carlos", 1200, "0", [new Dependent("judite", 1, Gender.FEMALE, 35)]);
    carlos.missedDays = 2;
    console.log(employeeRetirementeFee(carlos));
}