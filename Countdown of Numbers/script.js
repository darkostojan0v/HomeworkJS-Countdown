console.log('Countdown');

function countDown(startNum) {
    let countDownArray = [];
    for(let i = startNum; i >= 0; i-- ){
      countDownArray.push(i);
    }
    return countDownArray;
  }
  
  console.log(countDown(13));