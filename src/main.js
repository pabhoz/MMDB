let dropArea = new DropArea("#dropArea");
let fileCounter = 0;
const URLServidor = "http://localhost/usbcali/MMDBServer/";

function defaultBehavior(el){
    let da = dropArea.DOMElement;
    let centeredTitle = da.querySelector(".centeredTitle");
    centeredTitle.innerHTML = "Current files:";
    centeredTitle.style.borderBottom = "1px dashed gray";
    centeredTitle.style.justifyContent = "flex-start";
    da.classList.add("multimedia");

    fileCounter++;
    da.innerHTML +=`
    <div class="file" id="file${fileCounter}">
        <span class="name">${el.file.name}</span> 
        <div class="info">
            <div>
                <span class="type">${el.type}</span> 
                <span class="size">${el.sizeToMB()}MB</span>
            </div>
        </div>
    </div>
    `;
}

let imageBehavior = (file) => {
    var img = new Imagen(file);
    img.loadFileContent().then(()=>{
        defaultBehavior(img);

        let saveBtn = document.createElement("button");
        saveBtn.innerHTML = "Guardar en la DBMM";
        saveBtn.onclick = () => { img.save(); };

        dropArea.DOMElement.querySelector(`#file${fileCounter} .info`).prepend(img.DOMElement);
        dropArea.DOMElement.querySelector(`#file${fileCounter} .info`).append(saveBtn);
    });
};

let audioBehavior = (file) => {
    var audio = new Sonido(file);
    audio.loadFileContent().then(()=>{
        defaultBehavior(audio);

        let saveBtn = document.createElement("button");
        saveBtn.innerHTML = "Guardar en la DBMM";
        saveBtn.onclick = () => { audio.save(); };

        dropArea.DOMElement.querySelector(`#file${fileCounter} .info`).prepend(audio.DOMElement);
        dropArea.DOMElement.querySelector(`#file${fileCounter} .info`).append(saveBtn);
    });
};

let videoBehavior = (file) => {
    var video = new Vid(file);
    video.loadFileContent().then(()=>{
        defaultBehavior(video);
        dropArea.DOMElement.querySelector(`#file${fileCounter} .info`).prepend(video.DOMElement);
    });
};

let pdfBehavior = (file) => {
    var pdf = new Pdf(file);
    pdf.loadFileContent().then(()=>{
        defaultBehavior(pdf);
        dropArea.DOMElement.querySelector(`#file${fileCounter} .info`).prepend(pdf.DOMElement);
    });
};

dropArea.subscribe("image", imageBehavior);
dropArea.subscribe("audio", audioBehavior);
dropArea.subscribe("video", videoBehavior);
dropArea.subscribe("pdf", pdfBehavior);

/**
    SELECT AREA
*/
function select(sayWhat) {
    switch (sayWhat) {
        case "img":
            Imagen.select();
            break;
        case "audio":
            Sonido.select();
            break;
    }
}


