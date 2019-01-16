class Imagen extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("img");
        super(file,type,element);
    }

    save(){
        super.save("Imagen.php");
    }

    static select(id,callback){
        super.select("Imagen.php",id,callback);
    }
}