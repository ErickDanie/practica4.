class pelota {
    constructor(){
        this.x=50;
        this.y=100;
        this.width=20;
        this.height=20;
    }
    display(nomImg){
        image(nomImg,this.x, this.y, this.width, this.height);
    }
}