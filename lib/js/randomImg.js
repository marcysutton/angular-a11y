var RandomImg = function(imgArray, imgDivSelector, textDivSelector){
  this.imgArray = imgArray;
  this.imgDiv = document.querySelector(imgDivSelector);
  this.textContentDiv = document.querySelector(textDivSelector);
}
RandomImg.prototype = {
  generateRandom: function(min, max) {
    var num = Math.random() * (max - min) + min;
    return Math.floor(num);
  },
  showImages: function() {
    var self = this;
    var path = '';
    if(window.imgPath){
      path = window.imgPath;
    }
    this.textContentDiv.setAttribute('class','initialized');
    for(var i=0; i<this.imgArray.length; i++){
        var left = self.generateRandom(-600, 800);
        var top = self.generateRandom(-400, 800);
        var img = document.createElement("img");
        img.setAttribute('src', path+"img/"+self.imgArray[i]);
        img.setAttribute('style', "position:absolute; top:"+ top +"px; left:"+ left +"px;");
        self.imgDiv.appendChild(img);
    }
  }
};
