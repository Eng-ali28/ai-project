// get system data;

import { getSystem, editSystem } from './system-api';
import { playVideo, stopPlayVideo } from './video-process';

let systemData = await getSystem();
// btns
const playBtn = document.getElementById('playbtn');
const btnEditVideoDistance = document.getElementById('btn3');
const cancelBtnVideoPath = document.getElementById('box-model-cancel-path');
const btnEditVideoPath = document.getElementById('btn2');
const cancelBtnVideoDistance = document.getElementById(
    'box-model-cancel-distance'
);

const editDistanceBtn = document.getElementById('edit-dst');
const resetDistanceBtn = document.getElementById('reset-dst');
const editVideoPathBtn = document.getElementById('video-path');
const resetVideoPathBtn = document.getElementById('restet-video-path');

//boxs
const modelEditDistance = document.getElementById('box-model-distance');
const modelEditPath = document.getElementById('box-model-path');

// inputs
const dst1 = document.getElementById('dst1');
const dst2 = document.getElementById('dst2');
const dropdown = document.getElementById('my-dropdown');

// set value
dst1.placeholder = `first distance : ${systemData.first_distance}`;
dst2.placeholder = `second distance : ${systemData.second_distance}`;
dropdown.selectedIndex = Array.from(dropdown.options).findIndex(
    (option) => option.value === systemData.video_path
);

// start edit video distance
const displayModelEditDistance = (e) => {
    modelEditDistance.style.setProperty('display', 'block');
};
const hideModelEditDistance = (e) => {
    modelEditDistance.style.setProperty('display', 'none');
};
const editDistance = async (e) => {
    const dist1 = dst1.value;
    const dist2 = dst2.value;

    try {
        await editSystem({
            first_distance: dist1,
            second_distance: dist2,
            video_path: null,
        });
        console.log('success');
    } catch (error) {
        console.log(error);
    }
};
const resetDistance = async (e) => {
    dst1.value = 0;
    dst2.value = 0;
};

btnEditVideoDistance.onclick = displayModelEditDistance;
cancelBtnVideoDistance.onclick = hideModelEditDistance;
editDistanceBtn.onclick = editDistance;
resetDistanceBtn.onclick = resetDistance;

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
resetVideoPathBtn.onclick = resetVideoPath;

async function getSelectedOption(e) {
    // Get the currently selected option
    const selectedOption = dropdown.options[dropdown.selectedIndex];

    // Access the selected option's value or text
    const selectedValue = selectedOption.value;

    try {
        await editSystem({
            first_distance: null,
            second_distance: null,
            video_path: selectedValue,
        });
        console.log('success');
    } catch (error) {
        console.log(error);
    }

    // You can use the selectedValue or selectedText for further actions
}

function resetVideoPath(e) {
    dropdown.selectedIndex = 0;
}

editVideoPathBtn.onclick = getSelectedOption;

// end edit video path

// start play video
const playBtnOnClick = async (e) => {
    if (playBtn.innerText == 'Stop') {
        playBtn.innerText = 'Play';
        await stopPlayVideo();
    } else if (playBtn.innerText == 'Play') {
        playBtn.innerText = 'Stop';
        await playVideo();
    }
};

playBtn.onclick = playBtnOnClick;

// end play video
