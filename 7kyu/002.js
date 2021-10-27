//Number of People in the Bus


var number = function(busStops){
    let current = 0;
    
    for(let i = 0; i<busStops.length; i++){
      current += busStops[i][0] - busStops[i][1];
    }
    return current
  }