import {student, StudentType} from "../02/02";
import exp from "constants";
import {CityType, governmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a:number, b:number) => {
    return a+b;
}

export function sum2 (a:number, b:number) {
    return a+b;
}

export const addSkill = (student: StudentType, skill: string)=> {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
    return 0;
}

export function addSkill2 (student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
    return 0;
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn=(s:StudentType, cityname: string) => {
    return s.adress.city.title === cityname
}

export const addMoneyToBudget = (building: governmentBuildingsType, budget: number)=>{
    building.budget+=budget
}

export const repairHouse = (houseType: HouseType) =>{
    houseType.repaired = true
}

export const toFireStaff = (building: governmentBuildingsType, staffCountToFire: number) => {
    building.staffCount+=staffCountToFire
}

export const toHireStaff = (building: governmentBuildingsType, staffCountToHire: number) => {
    building.staffCount+=staffCountToHire
}

export function createMassage(props:CityType) {
    return `${props.title} ${props.citizensNumber}`
}