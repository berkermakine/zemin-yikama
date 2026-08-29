import sharp from 'sharp';

const products = [
  {input:'public/titan90-01.webp',output:'public/titan90-showcase.webp',model:'TITAN 90'},
  {input:'public/titan140-01.webp',output:'public/titan140-showcase.webp',model:'TITAN 140'},
  {input:'public/titan240-01.webp',output:'public/titan240-showcase.webp',model:'TITAN 240'},
];

const header = model => Buffer.from(`
<svg width="1024" height="1536" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gold" x1="0" x2="1">
      <stop offset="0" stop-color="#c78616"/><stop offset="0.35" stop-color="#fff0a0"/>
      <stop offset="0.62" stop-color="#df9c24"/><stop offset="1" stop-color="#fff2ad"/>
    </linearGradient>
    <linearGradient id="silver" x1="0" x2="1">
      <stop offset="0" stop-color="#9aa8b9"/><stop offset="0.45" stop-color="#ffffff"/><stop offset="1" stop-color="#8395aa"/>
    </linearGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000" flood-opacity="0.85"/></filter>
  </defs>
  <g text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" filter="url(#shadow)">
    <text x="512" y="155" font-size="94" letter-spacing="3" fill="url(#gold)">BERKER</text>
    <text x="512" y="245" font-size="84" letter-spacing="2" fill="url(#silver)">MAKİNE</text>
    <line x1="105" y1="300" x2="919" y2="300" stroke="#e9a528" stroke-width="3"/>
    <circle cx="512" cy="300" r="7" fill="#fff0a0"/>
    <text x="512" y="405" font-size="58" letter-spacing="8" fill="url(#silver)">ECOLINE</text>
    <text x="512" y="490" font-size="78" letter-spacing="4" fill="#19a8ff">${model}</text>
  </g>
  <ellipse cx="512" cy="1328" rx="390" ry="68" fill="#008dff" opacity="0.25"/>
</svg>`);

for (const product of products) {
  const machine = await sharp(product.input)
    .resize(920,920,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}})
    .png()
    .toBuffer();
  await sharp('public/titan-showcase-background.png')
    .resize(1024,1536,{fit:'cover'})
    .composite([
      {input:header(product.model),top:0,left:0},
      {input:machine,top:500,left:52},
    ])
    .webp({quality:92,effort:5})
    .toFile(product.output);
  console.log(product.output);
}
