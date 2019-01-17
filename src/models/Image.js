class Imagen extends MultimediaElement{
    constructor(file,type = null){
        let tag = document.createElement("img");
        super(file,type,tag);

        this._pixels = null;
    }

    set pixels(value){
        this._pixels = value;
    }

    get pixels(){
        return this._pixels;
    }

    loadFileContent(){
        return new Promise((resolve, reject) => {
            this._readFileAsDataURL((result)=>{
                this.DOMElement.src = result;
                this.DOMElement.onload = () => {
                    this.loadPixels();
                    this.getPNGHistogram();
                }
                resolve();
            });
          });
    }

    /**
     * Image Processing
     */
    loadPixels(){
        var c = this.getCanvas();
        var ctx = c.getContext('2d');
        ctx.drawImage(this.DOMElement,0,0,this.DOMElement.naturalWidth, this.DOMElement.naturalHeight);
        this.pixels = ctx.getImageData(0,0,c.width,c.height);
    }

    getCanvas(){
        var c = document.createElement('canvas');
        c.width = this.DOMElement.naturalWidth;
        c.height = this.DOMElement.naturalHeight;
        return c;
    }

    getPNGHistogram(){
        let d = this.pixels.data;
        let histogram = {
            r: {},
            g: {},
            b: {}
        };
        for (let i = 0; i < d.length; i+=4) {
            console.log(`Voy en el pixel ${(i/4) +1}`);
            console.log(`
            R: ${d[i]}, 
            G: ${d[i+1]}, 
            B: ${d[i+2]}
            `);
            //Acá el histograma por componente de la imagen.
        }
    }

    /***
     * CRUD
     */
    save(){
        super.save("Imagen.php");
    }

    static select(){
        var tag = document.createElement("img");
        super.select("Imagen.php",tag,"imagen");
    }
}