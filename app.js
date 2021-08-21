const best = document.getElementById('best')
const eight = document.getElementById('memo')
const storage = document.getElementById('storage');
const delivery = document.getElementById('delivery')
const total = document.getElementById('tp')
const totalPrice = document.getElementById('totalAmount')
const button = document.getElementById('inb');
const cupon  = document.getElementById('code')

function memory(isIncreasing){
    if(isIncreasing == true){
        eight.innerText = 0
    
    } else {
        eight.innerText = 180
    }
    updatePrice()
}
function store(option){
    if (option == 1){
        storage.innerText = 0
    } else if (option == 2) {
        storage.innerText = 100
    } else {
        storage.innerText = 180
    }
    updatePrice()
}

function time(isEarly){
    if(isEarly == true) {
        delivery.innerText = 20
    } else {
        delivery.innerText = 0
    }
    updatePrice()
}


function updatePrice() {
    total.innerText = parseInt(eight.innerText) + parseInt(best.innerText) + parseInt(storage.innerText) + parseInt(delivery.innerText)
    totalPrice.innerText = parseInt(eight.innerText) + parseInt(best.innerText) + parseInt(storage.innerText) + parseInt(delivery.innerText)
}

document.getElementById('eightgb').addEventListener('click', function() { 
    memory(true)
})

document.getElementById('sixteengb').addEventListener('click', function() {
    memory(false)
 
})
document.getElementById('256').addEventListener('click', function() {
    store(1)
})
document.getElementById('512').addEventListener('click', function() {
    store(2)
})
document.getElementById('1tb').addEventListener('click', function() {
    store(3)
})

document.getElementById('early').addEventListener('click', function() {
    time(true)
})

document.getElementById('late').addEventListener('click', function() {
    time(false)
})

button.addEventListener('click', function() {
    
        if(cupon.value == 'stevekaku') {
            total.innerText = parseInt(eight.innerText) + parseInt(best.innerText) + parseInt(storage.innerText) + parseInt(delivery.innerText) - (total.innerText*.2)
            totalPrice.innerText = parseInt(eight.innerText) + parseInt(best.innerText) + parseInt(storage.innerText) + parseInt(delivery.innerText) - (totalPrice.innerText * .2)
            button.disabled = true
            // Reload again to make the cupon button functionable

        }else{
            console.log('not valid')
        }
        
        cupon.value = ''

})







