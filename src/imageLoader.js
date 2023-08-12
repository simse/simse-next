export default function thumborLoader({ src, width, quality }) {
    const params = [`${width}x0`, `filters:quality(${quality || 75})`]
    return `https://image.sorensen.cloud/unsafe/${width}x0/${encodeURI(src).replace('?', '%3F')}`
  }