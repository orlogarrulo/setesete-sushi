import{s as e}from"./link-BbZsmMoA.js";import{t}from"./printer-DOfD1q4d.js";import{a as n}from"./index-DZXICj84.js";var r=n(`file-down`,[[`path`,{d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`,key:`1rqfz7`}],[`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4`,key:`tnqrlb`}],[`path`,{d:`M12 18v-6`,key:`17g6i2`}],[`path`,{d:`m9 15 3 3 3-3`,key:`1npd3o`}]]);function i(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function a(e,t,n,r){let a=t.map(e=>`<th style="background:#1a1714;color:#f4f0e8;font-weight:700;text-align:left;padding:10px 12px;font-family:Calibri,Arial,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;border:1px solid #2a2622">${i(e)}</th>`).join(``),o=n.map((e,t)=>`<tr style="background:${t%2==0?`#fbfaf7`:`#f3eee6`}">${e.map(e=>`<td style="padding:8px 12px;font-family:Calibri,Arial,sans-serif;font-size:12px;color:#1a1714;border:1px solid #e6dfd4;vertical-align:top">${i(String(e))}</td>`).join(``)}</tr>`).join(``),s=new Date().toLocaleString(`pt-PT`,{timeZone:`Africa/Luanda`});return`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>${i(e)}</title>
<style>
  @page { size: A4 ${r}; margin: 14mm; }
  body { margin: 0; background: #fbfaf7; color: #1a1714; }
  h1 { font-family: "Times New Roman", serif; font-size: 28px; margin: 0; }
  .kicker { font-family: Calibri, Arial, sans-serif; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #e24a17; }
  .meta { font-family: Calibri, Arial, sans-serif; font-size: 11px; color: #6b6560; margin-top: 4px; }
  table { border-collapse: collapse; width: 100%; margin-top: 18px; }
</style>
</head>
<body>
  <p class="kicker">Sete Sete · Backoffice</p>
  <h1>${i(e)}</h1>
  <p class="meta">Luanda · gerado ${i(s)} · ${n.length} linhas</p>
  <table>
    <thead><tr>${a}</tr></thead>
    <tbody>${o}</tbody>
  </table>
</body>
</html>`}function o(e){let t=a(e.title,e.headers,e.rows,e.orientation??`landscape`),n=new Blob([`﻿`,t],{type:`application/vnd.ms-excel`}),r=document.createElement(`a`);r.href=URL.createObjectURL(n),r.download=e.filename.endsWith(`.xls`)?e.filename:`${e.filename}.xls`,r.click(),window.setTimeout(()=>URL.revokeObjectURL(r.href),1500)}function s(e){let t=a(e.title,e.headers,e.rows,e.orientation??`landscape`),n=window.open(``,`_blank`,`noopener,noreferrer`);n&&(n.document.open(),n.document.write(t),n.document.close(),n.focus(),window.setTimeout(()=>{n.print()},350))}var c=e();function l({title:e,filename:n,headers:i,rows:a,orientation:l=`landscape`}){return(0,c.jsxs)(`div`,{className:`flex flex-wrap gap-2 print:hidden`,children:[(0,c.jsxs)(`button`,{type:`button`,onClick:()=>s({title:e,headers:i,rows:a,orientation:l}),className:`inline-flex min-h-11 items-center gap-2 rounded-full border border-rice/15 px-4 text-[11px] font-semibold tracking-[0.12em] uppercase`,children:[(0,c.jsx)(t,{className:`size-3.5`}),`PDF`]}),(0,c.jsxs)(`button`,{type:`button`,onClick:()=>o({filename:n,title:e,headers:i,rows:a,orientation:l}),className:`inline-flex min-h-11 items-center gap-2 rounded-full bg-kaki px-4 text-[11px] font-semibold tracking-[0.12em] text-rice uppercase`,children:[(0,c.jsx)(r,{className:`size-3.5`}),`Excel`]})]})}export{l as t};