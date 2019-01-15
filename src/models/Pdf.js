class Pdf extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("iframe");
        element.controls = true;
        super(file,type,element);
    }

    loadFileContent(){
        return new Promise((resolve, reject) => {
            this._readFileAsDataURL((result)=>{
                this.DOMElement.src = `${result}`;
                resolve();
            });
          });
    }
    
}