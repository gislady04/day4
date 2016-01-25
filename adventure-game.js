var enter = confirm("You are outside a forest cabin. Press OK to enter.");

if (enter) {
// go into the cabin
  var bowl = prompt("You see three bowls of porridge. Eat bowl 1, 2, or 3?");

  if(bowl == 1){
    console.log("It's too hot! THE END");

  }else if (bowl == 2) {
    console.log("It's too cold! THE END");

  }else {
    console.log("It's delicious!");

    var hours = "The porridge makes you sleepy. Nap for how many hours?";

    var sleep = prompt(hours);
    sleep = Number(sleep);
    if (sleep < 2) {
      console.log("You wake up just in time, and scamper away!");
    }else{
      console.log("You sleep too late, and are eaten by hungry bears.");
    }
  }

}else {
  //didn't go in
  console.log("And that's the world's shortest fable. THE END.")
}
