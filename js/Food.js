class Food{
    constructor(){
       
       this.foodStock=0;
       this.lastFeed;
        this.image=loadImage("Milk.png");

        
    }
    display(){
        var x=80;
        var y=100;
        imageMode(CENTER);
        image(this.image,100,150,50,50);
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);   
                x=x+30;
            }
        
        }
   
    }
    getFedTime(lastFed){
        this.lastFeed=lastFed;
    }

    getFoodStock() {
   return  this.foodStock
    }
    updateFoodStock(foodStock){
    this.foodStock=foodStock;
    }
    deductFood(){
       if(this.foodStock>0) {
           this.foodStock=this.foodStock-1;

       }
    }

}