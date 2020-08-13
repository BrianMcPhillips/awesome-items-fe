/* eslint-disable */
import request from 'superagent';

const URL = 'https://pure-falls-15312.herokuapp.com';

export function fetchMonitors() {
    return request.get(`${URL}/monitors`);
}