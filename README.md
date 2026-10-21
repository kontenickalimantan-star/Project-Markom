# Project-Markom

Motion graphic untuk marketing iColor Kalimantan.

## Menjalankan

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm run dev      # buka Remotion Studio untuk preview dan edit
npm run render   # render komposisi Intro ke out/intro.mp4
```

## Struktur

- `src/index.ts` mendaftarkan root Remotion.
- `src/Root.tsx` berisi daftar komposisi (ukuran, durasi, fps). `Intro` berukuran 1080x1920 (format Reels/TikTok), 5 detik, 30 fps.
- `src/Intro.tsx` adalah animasi contoh: judul, garis aksen, dan subjudul.

Teks judul dan subjudul bisa diganti lewat `defaultProps` di `src/Root.tsx`.
