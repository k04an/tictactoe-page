let allowWindowSwitch = false
$('.btnCreateRoom').click(() => { 
    if (allowWindowSwitch) {
        $('#bottom-wave').css('margin-bottom', '-90vh').css('animation', '').animate({
            width: '100%',
            marginBottom: "0vh"
        }, 2500)
        $('.window').hide()
    }
})

$('#bottom-wave').on('animationend', () => {
    allowWindowSwitch = true
})