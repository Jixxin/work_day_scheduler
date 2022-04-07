var currentDayEl = $('#currentDay')
var hourEl = $('.hour')
var textAreaEl = $('.textarea')
var saveBtnEl = $('.saveBtn')
var localPull = JSON.parse(localStorage.getItem("itinerary"))
var currentTime = moment().format('ddd, MMMM DD')
var saveArr = []
var workData = []
var haHa = localPull[0]

currentDayEl.text(currentTime)

function saveSched() {
    var toDo = [{
        work: $(this).siblings("input").val(),
        hour: $(this).siblings("div").text()
    }]

    saveArr.push(toDo)

    console.log("I work")
    console.log(toDo)

    var scheddy = JSON.stringify(saveArr)

    if (localPull === null) {
        JSON.stringify(scheddy)
        localStorage.setItem("itinerary", scheddy)

    } else {

        saveArr.push(JSON.parse(localStorage.getItem("itinerary")))
        localStorage.setItem("itinerary", scheddy)
    }

    //renderMessage()

}


function renderMessage() {

    if (localPull !== null) {
        textAreaEl.text = haHa[0].work
    }
}

console.log(haHa[0].work)
console.log(moment().format('hh a'))
saveBtnEl.click(saveSched)

//if (hour.val() === moment().format('HH a')){
//turn bg green
//else if (hour.val() > moment().format('HH a'))

//localStorage.setItem()
 //$("input:text").val("input from storage")

