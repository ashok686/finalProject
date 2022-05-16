let fval = document.querySelector('#qty-1')
let rval = document.querySelector('#val1')
let total = document.querySelector('#asdf')
let checkOutTotal = document.querySelector('#total-checkout')
fval.addEventListener('change', () => {
    let val = fval.value
    rval.innerText = val * 499
    total.innerText = rval.innerText
    checkOutTotal.innerText = rval.innerText
})

let remove = document.querySelector('#remove')
let td = document.querySelector('#singleItem')

remove.addEventListener('click', () => {
    td.remove();
    alert('You removed the item ')

})

let checkOutButton = document.querySelector('#checkOutButton')
checkOutButton.addEventListener('click', () => {
    if (rval.val != null) {
        alert("Your Order Has Been Placed Successfully")
    } else {
        alert("Please Add Something In Your Cart  ")


    }
})


let couponButton = document.querySelector('#couponButton');
couponButton.addEventListener('click', function() {
    alert("Invalid coupon , Coupon may  expired or not valid")
})