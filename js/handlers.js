$(document).ready(function() {
    let allowWindowSwitch = false
    $('.btnCreateRoom').click(() => { 
        if (allowWindowSwitch) switchToWindow('game')
    })

    $('.buttons > div').click(() => {
        if (allowWindowSwitch) switchToWindow('home')
    })
 
    $('#bottom-wave').on('animationend', () => {
        allowWindowSwitch = true
    })
})

function switchToWindow(windowName) {
    switch (windowName) {
        case 'home':
            allowWindowSwitch = false
            displayWindow('#game-field', false)
            $('#bottom-wave').css('transform', 'scale(1)')
            $('#bottom-wave').animate({
                'marginBottom': '-90vh'
            }, 2500, () => {
                displayWindow('#home-window', true)
                allowWindowSwitch = true
            })
            break
        
        case 'game':
            allowWindowSwitch = false
            $('#bottom-wave').css('margin-bottom', '-90vh').css('animation', '').animate({
                marginBottom: "0vh"
            }, {
                duration: 2500,
                complete: () => {
                    toggleFallingShapes(false)
                    $('#bottom-wave').css('transform', 'scale(1.6)')
                    displayWindow('#game-field', true)
                    allowWindowSwitch = true
                }
            })
            displayWindow('#home-window', false)
            break
    }
}