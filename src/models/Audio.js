class Sonido extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("audio");
        element.controls = true;
        super(file,type,element);
    }

    save(){
        super.save("Audio.php");
    }

    static select(){
        let tag = document.createElement("audio");
        tag.controls = true;
        super.select("Audio.php",tag,"audio");
    }
}