export const humaniseIdentifier=(s:string)=>s?.replace(/[_-]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase())||'';
