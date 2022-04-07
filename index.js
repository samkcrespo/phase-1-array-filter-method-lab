
const findMatching = (drivers, string) => {
    let answer = drivers.filter(element => element === string || element === string.toLowerCase() )
    return answer
}

function fuzzyMatch(drivers, string){
    let firstLetter = drivers.filter(driver => driver.slice(0, string.length) === string)
    return firstLetter
}
function matchName(drivers, string){
    let name = drivers.filter(driver => driver.name === string)
    return name
}
// Code your solution here
