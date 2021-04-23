// const square = function(x){
//     return x*x 

// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) =>  x*x

// console.log(square(6))

const event = {
    name: ' Birthday party',
    guestlist: ['Geetansh', 'jen', 'may'],
    printGuestList( ) {

        console.log('Guest List For' + this.name)
        this.guestlist.forEach((guest) => {
            console.log(guest + ' is attending' + this.name )

        })

    }
}
event.printGuestList()