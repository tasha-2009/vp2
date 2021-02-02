//Create variables here
var dog,hdog,sdog,dogImg,database,foodS,foodStock;
var foodObj,lastFed,fedTime;
var feed,addFood; 

function preload()
{
 
  sdog=loadImage("dogImg.png");
  hdog=loadImage("dogImg1.png")
	//load images here
}

function setup() {
  createCanvas(1000,500);
  database=firebase.database();
  foodObj=new Food();
  foodStock=database.ref('food').on('value',readStocks);

  dog=createSprite(800,200);
  dog.addImage(sdog)
  dog.scale=0.1;

  feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoodS);



}


function draw() { 
  background(46, 139, 87) ;
 // text("click up arrow to feed drago milk",200,200);
  // if(keyWentDown(UP_ARROW)){
  //  writeStock(foodS);
  
  //  dog.addImage(dog1Img);
  // }
  foodObj.display();
  
  fedTime=database.ref("FeedTime");
fedTime.on("value",function(data){
  lastfed=data.val();
})
fill(255,255,254);
 textSize(15);
  if(lastFed>=12){ 
    text("Last Feed : "+ lastFed%12 + " PM", 350,30); 
  }else if(lastFed==0){
     text("Last Feed : 12 AM",350,30);
     }else{ 
       text("Last Feed : "+ lastFed + " AM", 350,30);
       }

  drawSprites();
  //add styles here

}
function readStocks(data){

foodS=data.val();
foodObj.updateFoodStock(foodS);
}

function feedDog(){
   dog.addImage(hdog);
    if(foodObj.getFoodStock()<= 0){
       foodObj.updateFoodStock(foodObj.getFoodStock()*0);
    }else{ 
       foodObj.updateFoodStock(foodObj.getFoodStock()-1);
    }
    database.ref('/').update({
       Food:foodObj.getFoodStock(),
        FeedTime:hour() 
      }) 
}
function addFoodS(){
   foodS++;
   database.ref("/").update({
     Food:foodS

   })
   
}




