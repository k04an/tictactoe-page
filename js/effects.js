        // Константы для настройки эффектов
        const FIGURES = 6 // Будет уножино на три для каждой фигуры
        // Классы
class Cross {
    constructor() {
        this.left = Math.random() * window.innerWidth;
        this.top = Math.random() * -450 - 81;
        this.to = Math.random() * 200 + (window.innerHeight / 3 * 2) + 200
        this.size = Math.random() * 60 + 20
        this.id = (Math.random() + 1).toString(36).substring(7)
        this.deg = Math.random() * 90 + 90
    }
    add() {
       $('body').append(`
       <svg id="${this.id}" class="falling-shape" style="left: ${this.left}px; top: ${this.top}px; z-index: 0;" id="cross" width="${this.size}" height="${this.size}" viewBox="0 0 324 324" fill="#EE4747" xmlns="http://www.w3.org/2000/svg">
            <circle cx="291.5" cy="32.5" r="32.5" fill="#EE4747"/>
            <circle cx="32.5" cy="291.5" r="32.5" fill="#EE4747"/>
            <line x1="34.019" y1="290.019" x2="293.019" y2="31.019" stroke="#EE4747" stroke-width="65"/>
            <circle cx="32.5" cy="32.5" r="32.5" transform="rotate(-90 32.5 32.5)" fill="#EE4747"/>
            <circle cx="291.5" cy="291.5" r="32.5" transform="rotate(-90 291.5 291.5)" fill="#EE4747"/>
            <line x1="290.019" y1="289.981" x2="31.019" y2="30.981" stroke="#EE4747" stroke-width="65"/>
        </svg>  
       `)
       $(`#${this.id}`).animate({
           top: `${this.to}px`,
           deg: this.deg,
        }, {
           duration: 15000,
           step: function(now) {
            $(`#${this.id}`).css({
                transform: `rotate(${now}deg)`
            })
           },
           complete: function() {
               let newCross = new Cross()
               newCross.add()
               $(this).remove()
           }
       })
    }
}
class Nought {
    constructor() {
        this.left = Math.random() * window.innerWidth;
        this.top = Math.random() * -450 - 81;
        this.to = Math.random() * 200 + (window.innerHeight / 3 * 2) + 200
        this.size = Math.random() * 60 + 20
        this.id = (Math.random() + 1).toString(36).substring(7)
        this.deg = Math.random() * 90 + 90
    }
    add() {
       $('body').append(`
       <svg id="${this.id}" class="falling-shape" style="left: ${this.left}px; top: ${this.top}px; z-index: 0;" id="cross" width="${this.size}" height="${this.size}" viewBox="0 0 324 324" fill="#FFFFFF" fill-opacity="0" xmlns="http://www.w3.org/2000/svg">
            <circle cx="162" cy="162" r="139.5" stroke="#2B8F8F" stroke-width="45"/>
        </svg>  
       `)
       $(`#${this.id}`).animate({
           top: `${this.to}px`,
           deg: this.deg,
        }, {
           duration: 15000,
           step: function(now) {
            $(`#${this.id}`).css({
                transform: `rotate(${now}deg)`
            })
           },
           complete: function() {
               let newNought = new Nought()
               newNought.add()
               $(this).remove()
           }
       })
    }
}
        // Создание эффектов
// Отрисовка крестов. Рисуем 2 группы с некоторым интервалом, для обеспечения непрерывного падения
setTimeout(function() {
    for (let i = 1; i < FIGURES; i++) {
        let cross = new Cross()
        cross.add()
    }
}, 1500)
setTimeout(function() {
    for (let i = 1; i < FIGURES; i++) {
        let cross = new Cross()
        cross.add()
    }
}, 5000)
setTimeout(function() {
    for (let i = 1; i < FIGURES; i++) {
        let cross = new Cross()
        cross.add()
    }
}, 8500)
// Отрисовка ноликов
setTimeout(function() {
    for (let i = 1; i < FIGURES; i++) {
        let nought = new Nought()
        nought.add()
    }
}, 1500)
setTimeout(function() {
    for (let i = 1; i < FIGURES; i++) {
        let nought = new Nought()
        nought.add()
    }
}, 5000)
setTimeout(function() {
    for (let i = 1; i < FIGURES; i++) {
        let nought = new Nought()
        nought.add()
    }
}, 8500)    