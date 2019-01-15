class Imagen extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("img");
        super(file,type,element);
    }
}