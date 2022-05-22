export function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, '')
}

export function jsonFormatter(data: string): string {
  return JSON.parse((typeof data === 'string' ? data : JSON.stringify(data)).replace(/:,/gi, ':"",'));
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