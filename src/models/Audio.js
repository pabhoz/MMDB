class Sonido extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("audio");
        element.controls = true;
        super(file,type,element);
    }

    save(){
        super.save("Audio.php");
    }
}