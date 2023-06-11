import {CityType} from "../02/02_02";
import {createMassages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05_02";
import {createMassage} from "../03/03";

let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"}
                }
            }],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {number: 0, street: {title: "Central Str"}}
        },
            {type: "FIRE-STATION", budget: 500000, staffCount: 1000, address: {number: 1, street: {title: "South Str"}}}

        ],
        citizensNumber: 1000000
    }
})

test("list of streets titles of government buildings", () =>{
    let streetNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);



    expect(streetNames.length).toBe(2);
    expect(streetNames[0]).toBe("Central Str")
    expect(streetNames[1]).toBe("South Str")
})

test("list of streets titles", ()=>{
    let streets = getStreetsTitlesOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street")
    expect(streets[1]).toBe("Happy street")
    expect(streets[2]).toBe("Happy street")
})

test("create greeting massages for strees",()=>{
    let massages = createMassages(city.houses);

    expect(massages.length).toBe(3)
    expect(massages[0]).toBe("Hello guys from White street")
    expect(massages[1]).toBe("Hello guys from Happy street")
    expect(massages[2]).toBe("Hello guys from Happy street")
})