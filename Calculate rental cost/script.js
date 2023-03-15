let data = {economy:4000,midsize:10000,luxury:20000};

function rentalCost(days,carType) {
   let cost = data[carType]*days;
   return cost;
}