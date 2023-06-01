export type streetType = {
    title:string
}

export type addressType = {
    number: number
    street: streetType
}

export type HouseType = {
    buildedAt:number
    repaired:boolean
    address: addressType
}

export type governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: addressType
}

export type CityType = {
    title:string
    houses:Array<HouseType>
    governmentBuildings:Array<governmentBuildingsType>
    citizensNumber:number
}