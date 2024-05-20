import axios from 'axios';
import { baseUrl } from './system-api';

async function playVideo() {
    let response = await axios.get(`${baseUrl}/video_process`);
    return response.data;
}

async function stopPlayVideo() {
    let response = await axios.get(`${baseUrl}/stop_video_process`);
    return response.data;
}

export { playVideo, stopPlayVideo };
