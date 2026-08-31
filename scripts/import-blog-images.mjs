import sharp from 'sharp';

const source='C:/Users/west/Downloads';
const target='public';
const images=[
 ['ChatGPT Image 31 Ağu 2026 19_59_03.png','blog-ecoline-b45.webp'],
 ['ChatGPT Image 31 Ağu 2026 19_59_54.png','blog-ecoline-b140.webp'],
 ['ChatGPT Image 31 Ağu 2026 20_02_50.png','blog-ecoline-titan90.webp'],
 ['ChatGPT Image 31 Ağu 2026 20_03_51.png','blog-ecoline-titan140.webp'],
 ['ChatGPT Image 31 Ağu 2026 19_58_10.png','blog-ecoline-titan240.webp'],
 ['ChatGPT Image 31 Ağu 2026 20_01_41.png','blog-ecoline-b250.webp'],
 ['ChatGPT Image 31 Ağu 2026 20_00_48.png','blog-ecoline-b60.webp'],
];

for(const [input,output] of images){
 await sharp(`${source}/${input}`).resize({width:1536,withoutEnlargement:true}).webp({quality:86,smartSubsample:true}).toFile(`${target}/${output}`);
 const metadata=await sharp(`${target}/${output}`).metadata();
 console.log(`${output}: ${metadata.width}x${metadata.height}`);
}
