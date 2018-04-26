import {ip,xhr} from '../common/index.js';

let server = {
    getList:()=>xhr({
        method:'get',
        url:ip+'/demo'
    }),
} 

export default server;
