
import request from 'superagent';

const URL = 'https://pure-falls-15312.herokuapp.com';

export function fetchMonitors() {
    return request.get(`${URL}/monitors`);
}

export function fetchMonitor(id) {
    return request.get(`${URL}/monitors/${id}`);
}

export function createMonitor(monitorData) {
    return request.post(`${URL}/monitors`, monitorData)
}