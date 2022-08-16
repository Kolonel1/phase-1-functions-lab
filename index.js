// Code your solution in this file!
function distanceFromHqInBlocks(street){

if(street>=42){
   return street-42;

}
else{
    return 42-street;
  
}
};
distanceFromHqInBlocks(50);
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(street){
    return (distanceFromHqInBlocks(street))*264
}

function distanceTravelledInFeet(start,finish){
    if(start>=finish){
        return (start - finish)*264 
    }else if(finish>=start){
        return(finish - start)*264
    }
}

console.log(distanceTravelledInFeet(40,30));



function calculatesFarePrice(start,finish){
    if (distanceTravelledInFeet(start,finish)<=400){
        return 0
    }
    else if (distanceTravelledInFeet(start,finish)>2500){
        return 'cannot travel that far'
    }
    else if (distanceTravelledInFeet(start,finish)>2000){
        return 25
    }
    else if (distanceTravelledInFeet(start,finish)<=2000){
        return (distanceTravelledInFeet(start,finish)-400)*0.02
    }
};
console.log(calculatesFarePrice(4,5));
console.log(calculatesFarePrice(50,70));
