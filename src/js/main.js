// start play/stop btn
const playBtn = document.getElementById('playbtn');

const playBtnOnClick = (e) => {
    if (playBtn.innerText == 'Stop') playBtn.innerText = 'Play';
    else if (playBtn.innerText == 'Play') playBtn.innerText = 'Stop';
};

playBtn.onclick = playBtnOnClick;
// end play/stop btn
