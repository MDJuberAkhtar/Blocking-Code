function sleep(timeCounter){
    var startTime = new Date().getTime();                    
    while (new Date().getTime() < startTime + timeCounter); 
}

function Cook (foodName) {
    var time = 0;
  switch(foodName) {
    case 'tea': 
      return[ time = 1000, sleep(1000)]
    break;
    case 'meal': 
      return [time = 2000, sleep(2000)];
       break;
    case 'milk': 
      return [time = 200, sleep(200)];
       
       break;  

  }

  return time;

}



function foodOrderingAndMaking(customerID, timeCounter, foodName) {

    setTimeout(function () {
        console.log("cutomerID ||", customerID, " ||foodName", foodName)
    }, timeCounter)

}

function customer(customerID, foodName) {

  var timeCounter  = Cook(foodName)

  foodOrderingAndMaking(customerID, timeCounter, foodName);

}



customer(1, 'tea');
customer(2, 'meal');
customer(3, 'milk');
customer(4, 'meal');
customer(5, 'meal');