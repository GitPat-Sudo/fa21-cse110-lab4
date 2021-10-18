/*let statistics = {
    redCars: 21, 
    blueCars: 45,
    greenCars: 12,
    raceCars: 5, 
    blackCars: 40,
    rareCars: 2
};*/ //not sure if you're going to run this code, if not uncomment ^
for(zz in statistics){
    if (zz.toString().charAt(0) === 'r' || statistics[zz]%2 == 1){
        console.log(statistics[zz])
    };
    
}