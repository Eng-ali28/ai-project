const playBtn = document.getElementById('playbtn');
const cancelBtnVideoDistance = document.getElementById(
    'box-model-cancel-distance'
);
const btnEditVideoDistance = document.getElementById('btn3');
const cancelBtnVideoPath = document.getElementById('box-model-cancel-path');
const btnEditVideoPath = document.getElementById('btn2');
const modelEditDistance = document.getElementById('box-model-distance');
const modelEditPath = document.getElementById('box-model-path');
// start play/stop btn

const playBtnOnClick = (e) => {
    if (playBtn.innerText == 'Stop') playBtn.innerText = 'Play';
    else if (playBtn.innerText == 'Play') playBtn.innerText = 'Stop';
};

playBtn.onclick = playBtnOnClick;
// end play/stop btn

// start edit video distance
const displayModelEditDistance = (e) => {
    modelEditDistance.style.setProperty('display', 'block');
};
const hideModelEditDistance = (e) => {
    modelEditDistance.style.setProperty('display', 'none');
};

btnEditVideoDistance.onclick = displayModelEditDistance;
cancelBtnVideoDistance.onclick = hideModelEditDistance;

// end edit video distance

// start edit video path
const displayModelEditPath = (e) => {
    modelEditPath.style.setProperty('display', 'block');
};
const hideModelEditPath = (e) => {
    modelEditPath.style.setProperty('display', 'none');
};

btnEditVideoPath.onclick = displayModelEditPath;
cancelBtnVideoPath.onclick = hideModelEditPath;

// end edit video path
