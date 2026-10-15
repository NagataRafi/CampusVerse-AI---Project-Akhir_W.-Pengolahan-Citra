<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# CampusVerse AI — Agent Operational Guide

> **Panduan Utama untuk AI Coding Agents**
> Setiap AI Agent yang bekerja pada repositori ini WAJIB membaca, memahami, dan mematuhi panduan ini sebelum melakukan tindakan apa pun.

---

## 1. Ringkasan Proyek

- **Nama Proyek**: CampusVerse AI
- **Deskripsi**: Platform kampus virtual berbasis web interaktif yang menggabungkan grafika 3D, pengolahan citra digital dari webcam pengguna (AI gesture recognition), multiplayer real-time, dan audio/video conference.
- **Teknologi Utama**:
  - Frontend & Framework: Next.js (App Router), React 19, TypeScript, Tailwind CSS v4.
  - Rencana Grafika 3D: Three.js & React Three Fiber (`@react-three/fiber`).
  - Rencana Pengolahan Citra & AI: MediaPipe (Hand Landmarker / Gesture Recognition).
  - Rencana Real-time & Komunikasi: WebSocket & WebRTC.

---

## 2. Aturan Wajib untuk Agent

1. **Selalu Cek Status Aktual Terlebih Dahulu**:
   - Sebelum memulai pekerjaan, baca [`PROJECT_STATUS.md`](./PROJECT_STATUS.md) untuk memahami apa yang sudah selesai dan apa yang sedang menjadi prioritas berikutnya.
   - Pahami arsitektur pada [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).
2. **Integritas Dokumentasi dan Bukti Pengujian**:
   - **Dilarang keras** mengklaim fitur telah selesai atau pengujian berhasil jika belum diverifikasi langsung melalui eksekusi perintah di terminal.
   - Perbarui [`PROJECT_STATUS.md`](./PROJECT_STATUS.md) di setiap akhir sesi kerja.
3. **Pertimbangan Lingkungan Spesifik**:
   - **OS & Hardware**: Windows, RAM 8 GB. Perhatikan alokasi memori; hindari kebocoran memori saat bekerja dengan canvas 3D atau stream webcam.
   - **Filesystem**: Berada di Google Drive for Desktop (`G:\...`). Hindari operasi I/O yang memanipulasi ribuan file secara bersamaan tanpa penanganan kunci file (*file locking*).
4. **Prinsip Pengembangan Bertahap**:
   - Kerjakan tugas secara modular dan inkremental. Jangan menginstal banyak dependensi berat sekaligus.
   - Jangan menambahkan fitur yang belum diminta oleh pengguna.
   - Jangan melakukan `git push` ke repositori remote tanpa persetujuan eksplisit dari pengguna.
