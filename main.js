var myInput = document.querySelector('input');
var myImage=document.querySelector('#source')
myInput.onchange = function(){
  var f = myInput.files[0];  

  
  myImage.src=window.URL.createObjectURL(f);
}

myImage.onload= function(){
  var canvas = document.getElementById("inverted")
  canvas.width=myImage.width
  canvas.height=myImage.height
  var ctx = canvas.getContext("2d")
  ctx.drawImage(myImage,0,0)
  

  var pixel=ctx.getImageData(0,0,canvas.width,canvas.height);
  for(var i=0;i<pixel.data.length;i+=4){
      pixel.data[i]     = 255 - pixel.data[i];     
      pixel.data[i + 1] = 255 - pixel.data[i + 1]; 
      pixel.data[i + 2] = 255 - pixel.data[i + 2]; }

    
    ctx.putImageData(pixel, 0, 0)

  }

