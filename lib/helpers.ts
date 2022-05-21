export function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, '')
}

export function jsonFormatter(data: string): string {
  return JSON.parse((typeof data === 'string' ? data : JSON.stringify(data)).replace(/:,/gi, ':"",'));
}