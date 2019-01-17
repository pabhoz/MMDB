class Imagen extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("img");
        super(file,type,element);
    }

    save(){
        super.save("Imagen.php");
    }

    static select(){
        var tag = document.createElement("img");
        super.select("Imagen.php",tag,"imagen");
    }
}