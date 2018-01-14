$(() => {
    let $button = $('#button')
    let $wrapper = $('#wrapper')
    let $supernatant = $('#supernatant')
    let $toggleMethod = $('#toggleMethod')
    let $methods = $('#methods > li')
    let index = 0
    first()
    $toggleMethod.on('click',() => {
        $button.off()
        $wrapper.off()
        $(document).off()
        $supernatant.removeClass('active')
        index++
        if(index >= $methods.length){
            index = 0
        }
        $methods.eq(index).addClass('active').siblings().removeClass('active')
        console.log(index)
        switch (index){
            case 0 : first();console.log('first');break;
            case 1 : second();console.log('second');break;
            case 2 : third();console.log('third');break;
        }
    })





    function first() {
        let flag = true
        $button.on('click', () => {
            if (flag) {
                $supernatant.addClass('active')
                flag = false
            } else {
                $supernatant.removeClass('active')
                flag = true
            }

        })
        $wrapper.on('click', (event) => {
            event.stopPropagation()
        })
        $(document).on('click', () => {
            $supernatant.removeClass('active')
            flag = true
        })
    }

    function second() {
        let flag = true
        $button.on('click', () => {
            if (flag) {
                $supernatant.addClass('active')
                flag = false
                $(document).one('click', () => {
                    $supernatant.removeClass('active')
                    flag = true
                })
            } else {
                $supernatant.removeClass('active')
                flag = true
            }
        })
        $wrapper.on('click', (event) => {
            event.stopPropagation()
        })
    }
    function third() {
        let flag = true
        $button.on('click', () => {
            if (flag) {
                $supernatant.addClass('active')
                flag = false
                setTimeout(() => {
                    $(document).one('click', () => {
                        $supernatant.removeClass('active')
                        flag = true
                    })
                }, 0)
            } else {
                $supernatant.removeClass('active')
                flag = true
            }
        })
        $wrapper.on('click', (event) => {
            event.stopPropagation()
        })
    }
})