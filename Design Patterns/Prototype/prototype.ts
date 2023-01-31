//* A real-world example of the prototype pattern could be creating new bikes in a bicycle factory. The factory keeps a prototype of a basic bike model and 
//creates new bikes by cloning this prototype and making necessary modifications.

interface BikePrototype {
    clone(): BikePrototype;
};

class MountainBike implements BikePrototype {
    wheels:number;
    frame:string;
    suspension:string;

    constructor(wheels:number,frame:string,suspension:string){
        this.wheels = wheels;
        this.frame = frame;
        this.suspension = suspension;
    }
    clone(): BikePrototype {
        return new MountainBike(this.wheels,this.frame,this.suspension);
    };
};

//Create a prototype object

const prototypeBike = new MountainBike
