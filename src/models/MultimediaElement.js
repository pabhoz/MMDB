class MultimediaElement{


    constructor(file, type = null, DOMElement = null){
        this.file = file;
        this.type = type;
        this.DOMElement = DOMElement;
    }

    set file(value){
        this._file = value;
    }

    get file(){
        return this._file;
    }

    set type(value){
        this._type = (value == null) ? this.file.type : value;
    }

    get type(){
        return this._type;
    }

    set DOMElement(value){
        let isHTMLElement = value instanceof HTMLElement;
        if(isHTMLElement){
            this._DOMElement = value;
        }else{
            this._DOMElement = this.checkTypeAndSetElement();
        }
    }

    get DOMElement(){
        return this._DOMElement;
    }
    /**
     * @returns {HTMLElement} element
     */
    checkTypeAndSetElement(){
        var element = null;

        if(this.type == "image/png" || this.type == "image/gif"
        || this.type == "image/jpeg" || this.type == "image/webp"){
            element = document.createElement("img");
        }

        if(this.type == "audio/aac" || this.type == "audio/ogg"
        || this.type == "audio/mp3" || this.type == "audio/webm"){
            element = document.createElement("audio");
        }

        if(this.type == "video/mpeg" || this.type == "video/ogg"
        || this.type == "video/avi" || this.type == "video/webm"){
            element = document.createElement("video");
        }

        if(this.type == "text/plain" || this.type == "text/html"){
            element = document.createElement("div");
        }

        return element;
    }

    loadFileContent(){
        return new Promise((resolve, reject) => {
            this._readFileAsDataURL((result)=>{
                this.DOMElement.src = result;
                resolve();
            });
          });
    }

    _readFileAsDataURL(callback){
        var freader = new FileReader();
    
        freader.onload = function (e) {
            callback(this.result);
        };

        freader.readAsDataURL(this.file);
    }

}