class Vid extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("video");
        element.controls = true;
        super(file,type,element);
    }

    save(){
        super.save("Video.php");
    }

    static select(){
        let tag = document.createElement("video");
        tag.controls = true;
        super.select("Video.php",tag,"audio");
    }
}