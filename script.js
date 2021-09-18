function motivationalSpeechWallpaper (wallPaperObject, domObj) {
    let rowDiv = document.createElement("div");
    let colDiv = document.createElement("div");
    let textH2 = document.createElement("h2");

    var vPlaceMap = {"top": "start", "center": "center", "bottom": "end"};
    var hPlaceMap = {"left": "start", "center": "center", "right": "end"};

    rowDiv.classList.add("wallPaper", "m-1", "row", "align-items-" + vPlaceMap[wallPaperObject.vPlace], "justify-content-" + hPlaceMap[wallPaperObject.hPlace]);
    colDiv.classList.add("col-6", "m-2")
    textH2.innerHTML = '"' + wallPaperObject.text + '"';
    textH2.style.color = "#" + wallPaperObject.colorCode;

    rowDiv.style.backgroundImage = "url(" + wallPaperObject.url + ")";

    colDiv.append(textH2);
    rowDiv.append(colDiv);

    domObj.append(rowDiv);

    // <div class="wallPaper m-1 row align-items-center justify-content-center" style="background-image: url(https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg);">
    //   <div class="col-6 m-2">
    //     <h2>"hello"</h2>
    //   </div>
    // </div>
}

class WallPaper {
    constructor(text, colorCode, url, vPlace, hPlace) {
        this.text = text;
        this.colorCode = colorCode;
        this.url = url;
        this.vPlace = vPlace;
        this.hPlace = hPlace;
    }
}

let target = document.getElementById("target");

let wallPaper1 = new WallPaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center");
let wallPaper2 = new WallPaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left");
let wallPaper3 = new WallPaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right");

motivationalSpeechWallpaper(wallPaper1, target);
motivationalSpeechWallpaper(wallPaper2, target);
motivationalSpeechWallpaper(wallPaper3, target);

