var img  = null;

function aplicarFiltro(imagem , nomeFiltro)
{
  if (img == null) {
     img = imagem;
  };

  switch (nomeFiltro)
        {
          case "vintage":
              Caman(img, function () {

               this.revert();
               this.greyscale();
               this.contrast(5);
               this.noise(3);
               this.sepia(100);
               this.channels({red:8,blue:2,green:4});
               this.gamma(0.87);
               this.vignette("40%",30);
               this.render();
           });
            break;

          case "lomo":
              Caman(img, function () {
                  this.revert();
               this.brightness(15);
               this.exposure(15);
               this.curves("rgb",[0,0],[200,0],[155,255],[255,255]);
               this.saturation(-20);
               this.gamma(1.8);
               this.vignette("50%",60);
               this.brightness(5);
               this.render();
           });
            break;
          case "clarity":
              Caman(img, function () {
                  this.revert();
               this.vibrance(20);
               this.curves("rgb",[5,0],[130,150],[190,220],[250,255]);
               this.sharpen(15);
               this.vignette("45%",20);
               this.greyscale();
               this.contrast(4);
               this.render();
           });
            break;
          case "orange":

              Caman(img, function () {
                  this.revert();
               this.curves("rgb", [0, 0], [100, 50], [140, 200], [255, 255]);
               this.vibrance(-30);
               this.saturation(-30);
               this.colorize("#ff9000", 30);
               this.contrast(-5);
               this.gamma(1.4);
               this.render();
           });
            break;
       default:

           Caman(img, function () {
               this.revert();
               this.render();
           });
           break;
        } 

}         

function renderizar(filtro)
{

aplicarFiltro("#foto1",filtro);

}



function teste() {

    var myimage = new Image();
    myimage.onload = function () {
        $('#myImageDiv').html('<img id="my-image" src=' + myimage.src + ' />');
        Caman('#my-image', function () {
            this.brightness(10);
            this.contrast(30);
            this.sepia(60);
            this.saturation(-30);
            this.render();
        });
    }
    myimage.src = 'foto1.jpg';
 
 
 }


//Camera button functionality
function takepicture()
{
    intel.xdk.camera.takePicture(80, true, "jpg");
} 