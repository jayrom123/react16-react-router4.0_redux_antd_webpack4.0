import {ip,xhr} from '../common/index.js';

let server = {
    getList:xhr({
        method:'get',
    }),
} 

export default server;
