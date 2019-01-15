let dropArea = new DropArea("#dropArea");
let fileCounter = 0;

function BtoMB(B){
    return Math.round( (B/(1024*1024)) * 100 ) / 100;
}

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
                <span class="size">${BtoMB(el.file.size)}MB</span>
            </div>
        </div>
    </div>
    `;
}

let imageBehavior = (file) => {
    var img = new Imagen(file);
    img.loadFileContent().then(()=>{
        defaultBehavior(img);
        dropArea.DOMElement.querySelector(`#file${fileCounter} .info`).prepend(img.DOMElement);
    });
};

let audioBehavior = (file) => {
    var audio = new Sonido(file);
    audio.loadFileContent().then(()=>{
        defaultBehavior(audio);
        dropArea.DOMElement.querySelector(`#file${fileCounter} .info`).prepend(audio.DOMElement);
    });
};

dropArea.subscribe("image", imageBehavior);
dropArea.subscribe("audio", audioBehavior);
/*dropArea.subscribe("video", );
dropArea.subscribe("text", );*/