

/*  
   name:demo
   desc:这是一个描述
   @param name string
   @return newName string
*/
export const changeName = (name)=>{
    return name += " roger";
}


/*
 * 移除cookie
 *
 * @param string 需要移除cookie名称
 * @param string 需要移除的域
 * @param string 需要移除的路径
 * @return undefined
 * */
export const removeCookie = (name, domain = location.host, path = '/') => {    //name,domain,path
    document.cookie = name + '=' + '' + ';expires=' + new Date(0) + ';path=' + path + ';domain=' + domain;
};

