const checkIfMorning = (time) => {
    return time.endsWith('AM')
}

const removeAmPm = (time) => {
    if (checkIfMorning(time)) return time.replace("AM",'')
    else return time.replace("PM",'')
}

const removeMin = (duration) => {
    return duration.replace("mins",'')
}

const structureTime = (time_without_am_pm) => {
    if (time_without_am_pm.length !== 5) return "0" + time_without_am_pm;
    else return time_without_am_pm;
}

const splitHourMinute = (time)=>{
    /**
     *return ["hour", "minutes"]
     */
    return ([parseInt(structureTime(time).split(":")[0]),parseInt(structureTime(time).split(":")[1])])
}

function removeWhiteSpace (time){
    return time.replace(/ /g,'')
}
const addDuration = (start_time, duration) => {
    let time_of_day;
    if (checkIfMorning(removeWhiteSpace(start_time))){
        time_of_day = "AM"
    } else time_of_day = "PM"
    let hour_ = splitHourMinute(removeWhiteSpace(start_time))[0]
    let min_ = splitHourMinute(removeWhiteSpace(start_time))[1]
    let duration_ = removeMin(removeWhiteSpace(duration))
    const total_minutes = min_ + parseInt(duration_)
    if (total_minutes >= 60){
        let minutes = total_minutes % 60
        const hour = hour_ + 1
        if (hour === 12 && time_of_day==="PM") return "00:" + minutes.toString() +" AM"
        if (hour === 12 && time_of_day==="AM") return "00:" + minutes.toString() +" PM" 
        if (hour > 12 && hour < 24)  return (hour%12).toString() + ":" + minutes.toString() +" PM"
        if (hour ===  24) return "00:" + minutes.toString() +" AM"
        if (hour > 24) return (hour%24).toString() + ":" + minutes.toString() +" AM"
        if (hour > 0) return hour.toString() + ":" + minutes.toString() + " " + time_of_day
    }
    else return hour_.toString() + total_minutes.toString() + " " + time_of_day
}       

module.exports = addDuration;


