var currentDayEl = $('#currentDay')
var hour9 = $('#9')
var txtEl9 = $('#9txt')
var txtEl10 = $('#10txt')
var txtEl11 = $('#11txt')
var txtEl12 = $('#12txt')
var txtEl13 = $('#13txt')
var txtEl14 = $('#14txt')
var txtEl15 = $('#15txt')
var txtEl16 = $('#16txt')
var txtEl17 = $('#17txt')
var hourEl = $('.hour')
var textAreaEl = $('.textarea')
var saveBtnEl = $('.saveBtn')
var currentTime = moment().format('ddd, MMMM DD')

currentDayEl.text(currentTime)

function saveSched() {

    var work = $(this).siblings("input").val()
    var hour = $(this).siblings("div").text()

    localStorage.setItem(hour, work)

}

function renderMessage() {

    if (localStorage.getItem(900) !== null) {
        txtEl9.val(localStorage.getItem(900))
    }
    if (localStorage.getItem(1000) !== null) {
        txtEl10.val(localStorage.getItem(1000))
    }
    if (localStorage.getItem(1100) !== null) {
        txtEl11.val(localStorage.getItem(1100))
    }
    if (localStorage.getItem(1200) !== null) {
        txtEl12.val(localStorage.getItem(1200))
    }
    if (localStorage.getItem(1300) !== null) {
        txtEl13.val(localStorage.getItem(1300))
    }
    if (localStorage.getItem(1400) !== null) {
        txtEl14.val(localStorage.getItem(1400))
    }
    if (localStorage.getItem(1500) !== null) {
        txtEl15.val(localStorage.getItem(1500))
    }
    if (localStorage.getItem(1600) !== null) {
        txtEl16.val(localStorage.getItem(1600))
    }
    if (localStorage.getItem(1700) !== null) {
        txtEl17.val(localStorage.getItem(1700))
    }

}

renderMessage()
saveBtnEl.click(saveSched)
var schedTime = moment().toArray()

if (09 > schedTime[3]) {
    txtEl9.addClass('future')
} else if (09 === schedTime[3]) {
    txtEl9.addClass('present')

} else {
    txtEl9.addClass('past')
}
if (10 > schedTime[3]) {
    txtEl10.addClass('future')
} else if (10 === schedTime[3]) {
    txtEl10.addClass('present')
} else {
    txtEl10.addClass('past')
}
if (11 > schedTime[3]) {
    txtEl11.addClass('future')
} else if (11 === schedTime[3]) {
    txtEl11.addClass('present')
} else {
    txtEl11.addClass('past')
}
if (12 > schedTime[3]) {
    txtEl12.addClass('future')
} else if (12 === schedTime[3]) {
    txtEl12.addClass('present')
} else {
    txtEl12.addClass('past')
}
if (13 > schedTime[3]) {
    txtEl13.addClass('future')
} else if (13 === schedTime[3]) {
    txtEl13.addClass('present')
} else {
    txtEl13.addClass('past')
}
if (14 > schedTime[3]) {
    txtEl14.addClass('future')
} else if (14 === schedTime[3]) {
    txtEl14.addClass('present')
} else {
    txtEl14.addClass('past')
}
if (15 > schedTime[3]) {
    txtEl15.addClass('future')
} else if (15 === schedTime[3]) {
    txtEl15.addClass('present')
} else {
    txtEl15.addClass('past')
}
if (16 > schedTime[3]) {
    txtEl16.addClass('future')
} else if (16 === schedTime[3]) {
    txtEl16.addClass('present')
} else {
    txtEl16.addClass('past')
}
if (17 > schedTime[3]) {
    txtEl17.addClass('future')
} else if (17 === schedTime[3]) {
    txtEl17.addClass('present')
} else {
    txtEl17.addClass('past')
}