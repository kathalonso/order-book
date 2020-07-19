//Notes

// 1
iO --> EB
return EB

//2
if (IO type = EB type)
    then IO --> EB

//3 
if (IO type != EB type && IO.q != EB.q && IO.p != EB.p )
    then IO --> EB

//4
if (IO type != EB type && IO.q = EB.q && IO.p = EB.p)
    then EB - EBi

//5
if (IO type != EB type && IO.q < EB.q && IO.p = EB.p)
    shift/pop/slice out EBmatch
    then EBmatchq = EBmatchq - IOq
    push EBmatch 

//6 
if (IO type != EB type && IO.q > EB.q && IO.p = EB.p)
    then IOq = IOq - EBmatchq 
    push IO to EB 
    pop/slice EBmatch from EB

//7             FINISH :(
if (IO type != EB type && IO price = EB price)
    IOq = IOq - EBmatchq
    pop/slice EBmatch from EB


//8 
if (IO type != EB type && IO price = EB price)


if (ioq != 0)
///Logic...
   if(io type != ebMatch type && io price === ebMatch price)
       ioq = ioq - ebMatchq /// so.. ioq would equal 0
       splice/pop get rid of ebMatch ///existing book would noq? equal... 
                                    //{ type: 'sell', quantity: 12, price: 5950 }
