allowWindowSwitch = false
$(document).ready(function() {
    $('.btnCreateRoom').click(() => { 
        if (allowWindowSwitch) {switchToWindow('game')}
    })

    $('.buttons > div').click(() => {
        if (allowWindowSwitch) {switchToWindow('home')}
    })
 
    $('#bottom-wave').on('animationend', () => {
        allowWindowSwitch = true
    })

    $('.curtain-buttons > div:nth-child(1)').click(() => {
        switchToWindow('home')
        resetGameWindow()
    })

    $('.curtain-buttons > div:nth-child(2)').click(() => {
        toggleCurtain(false)
    }) 
})