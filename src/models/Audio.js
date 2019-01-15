class Sonido extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("audio");
        element.controls = true;
        element.autoplay = true;
        super(file,type,element);
    }
}