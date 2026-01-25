# Website Portofolio - Irfan Riyanto

Website portofolio pribadi dengan desain Neumorphism (Soft UI) yang modern dan elegant.

## Fitur

- ✨ Desain Neumorphism dengan warna Lavender (#6D7993)
- 🌓 Dark Mode / Light Mode dengan toggle button
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- 🎨 Smooth animations dan micro-interactions
- 🖼️ Space untuk foto profil dan screenshot project
- 📧 Form kontak dengan validasi
- 🔗 Social media links (Email, LinkedIn, GitHub, Instagram)
- 💾 Theme preference tersimpan di localStorage

## Struktur File

```
portofolio/
├── index.html          # File HTML utama
├── style.css           # Stylesheet dengan neumorphic design
├── script.js           # JavaScript untuk interaktivitas
├── assets/             # Folder untuk gambar
│   ├── profile-photo.jpg           # Foto profil Anda
│   ├── rukunapp-screenshot.jpg     # Screenshot RukunApp
│   ├── umkmtegal-screenshot.jpg    # Screenshot UMKMTegal
│   ├── ngopitegal-screenshot.jpg   # Screenshot NgopiTegal
│   └── klaim-edp-screenshot.jpg    # Screenshot Klaim EDP CRB
└── README.md           # File ini
```

## Cara Menggunakan

### 1. Tambahkan Foto Profil

Letakkan foto profil Anda di folder `assets/` dengan nama `profile-photo.jpg`

**Rekomendasi:**
- Format: JPG atau PNG
- Ukuran: 350x350px (square/persegi)
- Resolusi: Minimal 350x350px untuk kualitas terbaik

### 2. Tambahkan Screenshot Project

Letakkan screenshot project Anda di folder `assets/` dengan nama:
- `rukunapp-screenshot.jpg`
- `umkmtegal-screenshot.jpg`
- `ngopitegal-screenshot.jpg`
- `klaim-edp-screenshot.jpg`

**Rekomendasi:**
- Format: JPG atau PNG
- Aspect Ratio: 16:9 atau 4:3
- Resolusi: Minimal 800x600px
- Ukuran file: Maksimal 500KB per gambar untuk loading cepat

### 3. Customize Konten

Edit file `index.html` untuk mengubah:
- Informasi personal (nama, email, LinkedIn, GitHub, Instagram)
- Deskripsi project
- Pengalaman kerja
- Keahlian teknis

### 4. Buka Website

Buka file `index.html` di browser Anda untuk melihat hasilnya.

## Teknologi yang Digunakan

- HTML5
- CSS3 (Neumorphism Design)
- JavaScript (Vanilla)
- Tailwind CSS (via CDN)
- Google Fonts (Plus Jakarta Sans & DM Sans)

## Design System

### Warna

**Light Mode:**
- **Primary**: #6D7993 (Lavender/Slate Blue)
- **Background**: #E0E5EC (Cool Grey)
- **Text Primary**: #3D4852 (Dark Blue Grey)
- **Text Secondary**: #6B7280 (Medium Grey)
- **Success**: #38B2AC (Teal)

**Dark Mode:**
- **Primary**: #8B9DC3 (Light Lavender)
- **Background**: #1A202C (Dark Blue Grey)
- **Text Primary**: #E2E8F0 (Light Grey)
- **Text Secondary**: #A0AEC0 (Medium Light Grey)
- **Success**: #38B2AC (Teal)

### Typography
- **Display**: Plus Jakarta Sans (500, 600, 700, 800)
- **Body**: DM Sans (400, 500, 700)

### Shadows
- Extruded: `9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)`
- Inset: `inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips

1. **Optimasi Gambar**: Compress gambar sebelum upload untuk loading lebih cepat
2. **Foto Profil**: Gunakan foto dengan background yang clean atau blur
3. **Screenshot**: Ambil screenshot dari bagian terbaik aplikasi Anda
4. **Testing**: Test website di berbagai device (mobile, tablet, desktop)
5. **Dark Mode**: Toggle dark mode dengan button di navbar (preference tersimpan otomatis)
6. **Accessibility**: Website sudah dioptimasi untuk keyboard navigation dan screen readers

## Lisensi

Free to use untuk personal portfolio.

---

Dibuat dengan ❤️ menggunakan Neumorphism Design System
