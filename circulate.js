$(window).load(function() {

  function startBallOne() {
      $("#orange-ball").circulate({
          speed: 4000,
          height: 100,
          width: -700,
          sizeAdjustment: 40,
          loop: true,
          zIndexValues:[1, 1, 5, 5]
      });
  }
  
  function startBallTwo() {
      $("#blue-ball").circulate({
          speed: 4000,
          height: 120,
          width: -700,
          sizeAdjustment: 35,
          loop: true,
          zIndexValues: [2, 2, 3, 3]
      })
  }
  
  function startBallThree() {
      $("#green-ball").circulate({
          speed: 4000,
          height: 140,
          width: -700,
          sizeAdjustment: 30,
          loop: true,
          zIndexValues: [3, 3, 2, 2]
      })
  }
  function startBallFour() {
    $("#red-ball").circulate({
        speed: 4000,
        height: 140,
        width: -700,
        sizeAdjustment: 25,
        loop: true,
        zIndexValues: [4, 4, 3, 3]
    }).fadeIn();
}
function startBallFive() {
    $("#yellow-ball").circulate({
        speed: 4000,
        height: 140,
        width: -700,
        sizeAdjustment: 20,
        loop: true,
        zIndexValues: [5, 5, 4, 4]
    }).fadeIn();
}
function startBallSix() {
    $("#purple-ball").circulate({
        speed: 4000,
        height: 140,
        width: -700,
        sizeAdjustment: 15,
        loop: true,
        zIndexValues: [6, 6, 1, 1]
    }).fadeIn();
}
  
          
  startBallOne();
  setTimeout(startBallTwo, 2000);
  setTimeout(startBallThree, 4000);
  setTimeout(startBallFour, 6000);
  setTimeout(startBallFive, 8000);
  setTimeout(startBallSix, 10000);

  
});