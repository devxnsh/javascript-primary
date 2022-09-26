const LOCAL_FORECAST = {
    today : {min : 72, max : 83},
    tomorrow : { min : 73.3, max : 84.6}
}
function getMaxofTmrw(forecast) {
    "use strict";
    const { tomorrow : { max : maxOfTomorrow}} = forecast
    return maxOfTomorrow
}
function getMinofToday(forecast){
    "use strict";
    const {today : TEMPTODAY} =forecast
    const {min : minimaToday} =TEMPTODAY
    return(minimaToday)
}
console.log(getMaxofTmrw(LOCAL_FORECAST))
console.log(getMinofToday(LOCAL_FORECAST))