var decision = (timeForBed, cb)=>{
  console.log('thinking ... ')
  setTimeout(()=>{
    cb(timeForBed)
  }, 5000)
}

function shutdownTv(){
  console.log('shutdown tv, pewwwwwuh! TV stopped')
}

decision(false, function(t){
  if (t){
    console.log('got to bed')
  }
  else{
    console.log('not time for bed, you\'re lucky')
  }
})

shutdownTv()
