var timeForBed = true

var decision = new Promise((resolve, reject)=>{
  console.log('thinking ... ') //thinking takes some time
  setTimeout(()=>{
    //code
    if (timeForBed){
      resolve('got to bed')
    }
    else{
      reject('not time for bed, you\'re lucky')
    }
  }, 5000)
})

var closeTv = ()=>{
  console.log('shutdown tv, pewwwwwuh! TV stopped')
}

//decision
//  .then((dec)=>console.log(dec))
//  .catch((err)=>console.log(err))
decision.then(
  (dec)=>console.log(dec),
  (err)=>console.log(err))

closeTv()
