import { Employee } from "../classes/employee";

export function employeeRetirementeFee(employee: Employee): number {
    return employee.salary * 0.084;
};