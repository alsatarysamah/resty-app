
export function setItem(key,value){
    sessionStorage.setItem(key, value);

}

export function  getItem(key){
  return  sessionStorage.getItem(key)
}