export function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, '')
}

export function jsonFormatter(data: string): string {
  let newStr = "";
  if (typeof data === 'string') {
    newStr = data.replace(/(\r\n|\n|\r)/gm, '').split(/\s/).join('').replace(/:,/gi, ':"",').replace(/:}/gi, ':""}');
  } else {
    newStr = JSON.stringify(data).replace(/(\r\n|\n|\r)/gm, '').split(/\s/).join('').replace(/:,/gi, ':"",').replace(/:}/gi, ':""}');
  }
  
  
  return JSON.parse(newStr);
}

export function objectToQueryString(obj: any): string {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

export function randomStr(length: number): string {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let charactersLength = characters.length;

  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}