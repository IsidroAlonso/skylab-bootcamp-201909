const calculator = document.querySelector('.calculator')
const buttons = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')


buttons.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key=e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
        if (!action){
            calculator.dataset.previousKeyType = 'number'
            console.log('number key!')
            console.log(previousKeyType)
            if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate'){
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        } if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ){
            console.log('operator key!')
            console.log(previousKeyType)
            key.classList.add('is-depressed')
            calculator.dataset.firstValue = displayedNum
            firstValue=calculator.dataset.firstValue
            calculator.dataset.operator = action
            calculator.dataset.previousKeyType = 'operator'
        } if (action === 'decimal') {
            calculator.dataset.previousKeyType = 'decimal'
            console.log('decimal key!')
            if (displayedNum.includes('.')){
                display.textContent = displayedNum
            }else {
                display.textContent = displayedNum + '.'
            }
        } if (action === 'clear') {
            calculator.dataset.previousKeyType = 'clear'
            console.log('clear key!')
            display.textContent = 0
            calculator.dataset.firstValue = 0
            calculator.dataset.operator = 0
        } if (action === 'calculate') {
            calculator.dataset.previousKeyType = 'calculate'
            console.log('equal key!')
            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    calculator.dataset.firstValue = displayedNum
                }
            } if (calculator.dataset.operator  === 'add' && firstValue){
                display.textContent = parseFloat(calculator.dataset.firstValue) + parseFloat(displayedNum)
            } if (calculator.dataset.operator  === 'subtract' && firstValue ){
                display.textContent = parseFloat(calculator.dataset.firstValue) - parseFloat(displayedNum)
            } if (calculator.dataset.operator  === 'multiply' && firstValue ){
                display.textContent = parseFloat(calculator.dataset.firstValue) * parseFloat(displayedNum)
            } if (calculator.dataset.operator  === 'divide' && firstValue){
                display.textContent = parseFloat(calculator.dataset.firstValue) / parseFloat(displayedNum)
            }
        }
    }
})

 