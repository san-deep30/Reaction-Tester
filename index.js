
    var start = new Date().getTime();

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = "#";
      for (var i = 0; i <6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }


    function move() {
         document.getElementById("shape").style.display = "block";
        document.getElementById("shape").style.backgroundColor = getRandomColor();
        document.body.style.backgroundColor = getRandomColor();
        start = new Date().getTime();
        
    }
    move();

    document.getElementById("shape").onclick = function () {
        document.getElementById("shape").style.display = "none";
        var end = new Date().getTime();
        var timeTaken = ((end - start)/1000).toFixed(2);
        document.getElementById("timeTaken").innerHTML = timeTaken + "s";
        move();
        
    }
