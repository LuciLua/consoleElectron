function exit() {
    window.close()
}

function ls() {
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls strong'> <p class='name'>Name</p><p class='type'>Type</p> <p class='write'>LastWriteTime</p></div>")
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls'> <p class='name'>Home</p> <p class='type'>DIR</p> <p class='write'>02/01/2023 - 12:33:00</p></div>")
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls'> <p class='name'>Pictures</p><p class='type'>DIR</p><p class='write'>22/01/2023 - 16:33:00</p></div>")
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls'> <p class='name'>Music</p><p class='type'>DIR</p><p class='write'>12/01/2023 - 22:40:00</p></div>")
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls'> <p class='name'>virus.py</p><p class='type'>40kb</p><p class='write'>20/12/2023 - 20:02:03</p></div>")
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls'> <p class='name'>test.py</p><p class='type'>40kb</p><p class='write'>26/01/2023 - 09:18:36</p></div>")
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls'> <p class='name'>open.exe</p><p class='type'>666kb</p><p class='write'>28/01/2023 - 07:02:11</p></div>")
}

function testPy() {
    holdMsg.insertAdjacentHTML("afterbegin", "<p class='ls'> HAHHAHAHAHHAAHHAHAA YOU WAS HACKED</p>")
    holdMsg.insertAdjacentHTML("afterbegin", "<p class='go'>GAME OVER</p>")
    holdMsg.insertAdjacentHTML("afterbegin", "<p class='ls'> HAHHAHAHAHHAAHHAHAA YOU WAS HACKED</p>")
}

function help() {
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls strong'> <p class='name'>Command</p><p class='type'>Description</p> <p class='write'>Short</p></div>")
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls'> <p class='name'>Help</p><p class='type'>This command</p> <p class='write'>help</p></div>")
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls'> <p class='name'>Exit</p><p class='type'>Exit this application</p> <p class='write'>exit</p></div>")
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls'> <p class='name'>Open Directory</p><p class='type'>Open a directory</p> <p class='write'>cd</p></div>")
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls'> <p class='name'>Go Back</p><p class='type'>Back to a prev directory</p> <p class='write'>cd ..</p></div>")
    holdMsg.insertAdjacentHTML("afterbegin", "<div class='ls'> <p class='name'>List dir and files in current dir</p><p class='type'>list</p> <p class='write'>ls</p></div>")
}


function clear() {
    holdMsg.innerHTML = ""
    fullCommand.value = ""
    insertMyOwnPath()
}

function cd(param) {
    let valueOfParam = param.slice(3)
    user = "C:\\Users\\LuciLua\\" + valueOfParam + ">"
}

function backDir(){
    user = "C:\\Users\\LuciLua>"
}
