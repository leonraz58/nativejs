import {governmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<governmentBuildingsType>)=>{
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export function createMassages(houses: Array<HouseType>) {
    let callbackfn = (h: HouseType) =>{
        debugger
        return `Hello guys from ${h.address.street.title}`
    }
    return houses.map(callbackfn)
}