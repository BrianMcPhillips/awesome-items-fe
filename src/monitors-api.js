
import request from 'superagent';

const URL = 'http://localhost:4000';

export function fetchMonitors() {
    try {
        return request.get(`${URL}/monitors`);

    } catch(e) {
        return { error: e.message }
    }
}

export function fetchMonitor(id) {
    return request.get(`${URL}/monitors/${id}`);
}

export function createMonitor(monitorData) {
    return request.post(`${URL}/monitors`, monitorData)
}
export function fetchBrands() {
    try{
        return request.get(`${URL}/brands`);
    } catch(e) {
        return { error: e.message }
    }
}

export function updateMonitor(id, updatedMonitor) {
    console.log(updatedMonitor)
    return request.put(`${URL}/monitors/${id}`, updatedMonitor);
}

export function deleteMonitor(id) {
    return request.delete(`${URL}/monitors/${id}`);
}