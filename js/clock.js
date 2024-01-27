let myName = document.querySelector('#myName')
let myClock = document.querySelector('#myClock')


function updateDate(){
    let now = new Date()


    let days = ['Sunday','Monday','Tuesday','Wednasday','Thursday','Friday','Saturday']

    let day = days[now.getDay()]
    let hour = now.getHours()
    let minute = now.getMinutes()
    let seconds = now.getSeconds()

    myClock.innerHTML = `${hour}:${minute}:${seconds} ${day}`

}

setInterval(updateDate,1000)
updateDate()

myName.innerHTML = prompt()