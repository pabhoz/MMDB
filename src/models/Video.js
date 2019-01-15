class Vid extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("video");
        element.controls = true;
        super(file,type,element);
    }
}