import {CityType, governmentBuildingsType} from "../02/02_02";

export function demolishHouseOnTheStreet (city:CityType, street:string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(governmentBuildings: Array<governmentBuildingsType>, number: number){
    return governmentBuildings.filter(b => b.staffCount > number)
}