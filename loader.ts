'use client'
 
export default function myImageLoader({ src, width, quality }:{src:string; width: number; quality: any}) {
    if(src.startsWith("https://images.pexels.com/")) return src
  return `https://rnepal.vercel.app/${src}?w=${width}&q=${quality || 75}`
}