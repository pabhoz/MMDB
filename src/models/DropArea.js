class DropArea{

    constructor(selector){
        this.DOMElement = document.querySelector(selector);
        this.DOMElement.ondragover = (event) => { event.preventDefault() };
        this.DOMElement.ondrop = (event) => { this.drop(event); };

        this.listeners = {
            image: ()=>{ console.log("Image Dropped, this is a default message, please subscribe."); },
            audio: ()=>{ console.log("Audio Dropped, this is a default message, please subscribe."); },
            video: ()=>{ console.log("Video Dropped, this is a default message, please subscribe."); },
            text: ()=>{ console.log("Text Dropped, this is a default message, please subscribe."); },
            pdf: ()=>{ console.log("PDF Dropped, this is a default message, please subscribe."); }
        };
    }

    set DOMElement(value){
        this._DOMElement = value;
    }

    get DOMElement(){
        return this._DOMElement;
    }

    /**
     * Este método nos permitirá subscribirnos al DropArea
     * para que ejecute un comportamiento específico al
     * momento de que una acción en concreto se lleve a cabo
     * de tal manera que inicialmente el usuario se subscribe
     * y pasa explicitamente el comportamiento esperado tras
     * la emición.
     * 
     * @param {String} fileGroup 
     * @param {function} callback 
     */
    subscribe(fileGroup,callback){
        //fileGroups => image, audio, video, text
        this.listeners[fileGroup] = callback;
    }

    /**
     * Ejecuta la publicación del evento esperado.
     * 
     * @param {String} fileGroup
     * @param {File} file 
     * @returns void
     *  
     */
    emit(fileGroup,file){
        this.listeners[fileGroup](file);
    }

    drop(event) {
        event.preventDefault();
        let files = event.dataTransfer.files;
        for (let i = 0; i < files.length; i++) {
            this.loadFile(files[i]); //console.log(files[i]);
        }
    }

    loadFile(file){
        //Lista de tipos MIME
        //https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Lista_completa_de_tipos_MIME
        let toEmit = "";

        if(file.type == "image/png" || file.type == "image/gif"
        || file.type == "image/jpeg" || file.type == "image/webp"){
            toEmit = "image";
        }

        if(file.type == "audio/aac" || file.type == "audio/ogg"
        || file.type == "audio/mp3" || file.type == "audio/webm"){
            toEmit = "audio";
        }

        if(file.type == "video/mpeg" || file.type == "video/ogg"
        || file.type == "video/avi" || file.type == "video/webm"){
            toEmit = "video";
        }

        if(file.type == "text/plain" || file.type == "text/html"){
            toEmit = "text";
        }

        if(file.type == "application/pdf"){
            toEmit = "pdf";
        }

        if(toEmit != ""){
            this.emit(toEmit,file);
        }else{
            alert("File type not supported");
        }
    }
}