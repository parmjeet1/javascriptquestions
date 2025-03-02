// let dayNumber=new Date().getDay();
dayNumber=8
let day;
switch(dayNumber){
case 0:
        day="sunday"
        break;
case 1:
            day="monday";
            break;
case 2:
                day="wednesday";
                break;
case 3:
    day="tuesday";
    break;
case 4:
    day="thursday"
   break;
    case 5:

        day="firday"
        break;
        case 6:
            day="saturday"   
            break;
            default:
                day="undefined"         
}

console.log(day)