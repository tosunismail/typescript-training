import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

//declare an arry for coaches ... initially empty
let theCoaches: Coach[] = [];

//add the coaches the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}