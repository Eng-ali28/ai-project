import axios from 'axios';

export const baseUrl = 'http://localhost:5000';

async function getSystem() {
    let response = await axios.get(`${baseUrl}/system`);
    return response.data;
}

async function editSystem(data) {
    console.log(data);
    let response = await axios.put(`${baseUrl}/system`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });

    return response.data;
}

export { getSystem, editSystem };
