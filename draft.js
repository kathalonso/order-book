function reconcileOrder (existingBook, incomingOrder) {

    if (existingBook.length == 0 ) {       // no strict equal, [] is empty to start
        existingBook.push(incomingOrder)
        return existingBook
    }
    for (let i=0; i < existingBook.length; i++) {  // 2, adds an order to the book when the book has orders of the corresponding type (i.e. a sell with no buys
        // if (incomingOrder.type == existingBook[i].type
        //     && incomingOrder.price !== existingBook[i].price) {
            // existingBook.push(incomingOrder)
            // return existingBook
        //  // 3, adds an order to the book when the book has a corresponding order type but it does not match
        // } else if ((incomingOrder.type !== existingBook[i].type)
        // && (incomingOrder.quantity !== existingBook[i].quantity)
        // && (incomingOrder.price !== existingBook[i].price)) {
            // existingBook.push(incomingOrder)
            // return existingBook
        // 4, fulfills an order and removes the matching order when the book contains a matching order of the same quantity
        if ((incomingOrder.type !== existingBook[i].type)
                && (incomingOrder.quantity == existingBook[i].quantity)
                && (incomingOrder.price == existingBook[i].price)) {
            existingBook.splice(i, 1)
            i--
            return existingBook
        // 5, fulfills an order and reduces the matching order when the book contains a matching order of a larger quantity
        } else if ((incomingOrder.type !== existingBook[i].type)            
        && (incomingOrder.quantity < existingBook[i].quantity)
        && (incomingOrder.price == existingBook[i].price)) {
            existingBook[i].quantity -= incomingOrder.quantity
            // existingBook.push(existingBook[i])
            existingBook.splice(i, 1)
            i--
            //console.log('step #', existingBook)
            return existingBook
        // 6?, partially fulfills an order, removes the matching order and adds the remainder of the order to the book 
        //    when the book contains a matching order of a smaller quantity                      
        } else if ((incomingOrder.type !== existingBook[i].type)
        && (incomingOrder.quantity > existingBook[i].quantity)
        && (incomingOrder.price === existingBook[i].price)) {
            incomingOrder.quantity -= existingBook[i].quantity
            existingBook.splice(i,1)
            i--
        }
    }
        // // 7, uses two existing orders to completely fulfill an order, removing the matching orders from the book
        // } else if ((incomingOrder.type !== existingBook[i].type)
        // && (incomingOrder.price == existingBook[i].price)) {
        //     console.log('case7', existingBook)


        // // 8, uses two existing orders to completely fulfill an order, 
        // //    removing the first matching order from the book and reducing the second
        // } else if ((incomingOrder.type !== existingBook[i].type)
        // && (incomingOrder.price == existingBook[i].price)) {
        //     console.log('case8', existingBook)
            
        // // 9, uses two existing orders to partially fulfill an order, 
        // //    removing the matching orders from the book and 
        // //    reducing the incoming order before adding it to the book
        // } else if ((incomingOrder.type !== existingBook[i].type)
        // && (incomingOrder.price == existingBook[i].price)) {
        //     console.log('case9', existingBook)
        // } else { 
        //     console.log('caseElse', existingBook)
        //     return false
        // }
    
    if (incomingOrder.quantity !== 0) {
        existingBook.push(incomingOrder)
    }
    return existingBook
}

module.exports = reconcileOrder 