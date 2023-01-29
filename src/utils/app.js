function toInputAlways() {
    document.getElementById('input').focus()
}

function notExitCommand() {
    holdMsg.insertAdjacentHTML("afterbegin", "<p class='go'>this command does not exist. Try help for list all commands</p>")
}

function clickButton() {
    document.getElementById("sendBtn").click()
}

function putYourCommand() {

    var fullCommand = document.getElementById('input')

    var caret = document.getElementById('caret')

    for (let i = 0; i < fullCommand.value.length; i++) {
        var walking = i + 7
        caret.setAttribute("style", 'left:' + walking * 8.4 + 'px')
    }


    function mainFunc(e) {
        if (e.code === 'Enter') {
            e.preventDefault();
            clickButton();
            caret.setAttribute("style", 'left: 45px')
        }
    }

    window.document.addEventListener('keydown', mainFunc, { once: true })
}

var user = 'C:\\Users\\LuciLua>'
var fullCommand = document.getElementById('input')
var holdMsg = document.getElementById('holdMsg')
// var user = 'C:\\Users\\LuciLua>'


function insertMyOwnPath() {
    holdMsg.insertAdjacentHTML("afterbegin", "<p class='msg'> " + user + " <span class='userContent'>" + fullCommand.value + "</span></p>")
}

insertMyOwnPath()


function send() {

    insertMyOwnPath()


    if (fullCommand.value == "exit") {
        exit()
    }

    else if (fullCommand.value == "ls") {
        if (user === 'C:\\Users\\LuciLua\\Pictures>') {
            pictures()
        }
        else if (user === 'C:\\Users\\LuciLua\\Home>') {
            home()
        }
        else if (user === 'C:\\Users\\LuciLua>') {
            ls()
        }

    }
    else if (fullCommand.value == "valorant.exe") {
        if (user === 'C:\\Users\\LuciLua\\Home>') {
            openValorant()
        }
        else {
            notExitCommand()
        }

    }

    else if (fullCommand.value == "test.py") {
        testPy()
    }
    else if (fullCommand.value == "clear" || fullCommand.value == "cls") {
        clear()
    }
    else if (fullCommand.value == "help" || fullCommand.value == "-h") {
        help()
    }
    else if (fullCommand.value[0] == "c" && fullCommand.value[1] == "d" && fullCommand.value[3] !== "." && fullCommand.value[4] !== ".") {
        cd(fullCommand.value)
        fullCommand.value = ""
        insertMyOwnPath()
    }
    else if (fullCommand.value[0] == "c" && fullCommand.value[1] == "d" && fullCommand.value[3] == "." && fullCommand.value[4] == ".") {

        backDir()
        fullCommand.value = ""
        insertMyOwnPath()
    }
    else {
        notExitCommand()
    }

    fullCommand.value = ""
}