# 📸 Panduan Screenshot untuk README.md

## Screenshot yang Dibutuhkan

Ambil screenshot dari website Anda dan simpan di folder `.github/` dengan nama berikut:

### 1. Preview Utama
- **File**: `preview.png`
- **Ukuran**: 1200x630px (optimal untuk GitHub preview)
- **Konten**: Full hero section dengan navigation
- **Mode**: Light mode
- **Tips**: Ini akan muncul sebagai preview utama di GitHub

### 2. Light Mode (2 screenshot)
- **File**: `light-hero.png`
  - Hero section lengkap
  - Ukuran: 1200x800px
  
- **File**: `light-skills.png`
  - Skills section dengan cards
  - Ukuran: 1200x800px

### 3. Dark Mode (2 screenshot)
- **File**: `dark-hero.png`
  - Hero section dalam dark mode
  - Ukuran: 1200x800px
  
- **File**: `dark-projects.png`
  - Projects section dengan project cards
  - Ukuran: 1200x800px

### 4. Mobile Responsive (3 screenshot)
- **File**: `mobile-menu.png`
  - Mobile menu terbuka
  - Ukuran: 375x812px (iPhone X)
  
- **File**: `mobile-hero.png`
  - Hero section di mobile
  - Ukuran: 375x812px
  
- **File**: `mobile-projects.png`
  - Projects section di mobile
  - Ukuran: 375x812px

### 5. Special Features (2 screenshot)
- **File**: `loading-screen.png`
  - Loading screen animation
  - Ukuran: 1200x800px
  - Tips: Screenshot saat loading animation aktif
  
- **File**: `language-toggle.png`
  - Tampilkan language toggle button
  - Ukuran: 1200x800px
  - Tips: Bisa screenshot navigation bar dengan focus pada tombol ID/EN

---

## 🛠️ Cara Mengambil Screenshot

### Untuk Desktop (Light/Dark Mode):

1. **Buka website** di browser (Chrome/Firefox)
2. **Set zoom** ke 100%
3. **Resize window** ke ukuran yang diinginkan
4. **Ambil screenshot**:
   - Windows: `Win + Shift + S` atau Snipping Tool
   - Mac: `Cmd + Shift + 4`
   - Chrome DevTools: `Ctrl + Shift + P` → "Capture screenshot"

### Untuk Mobile:

1. **Buka Chrome DevTools** (`F12`)
2. **Toggle device toolbar** (`Ctrl + Shift + M`)
3. **Pilih device**: iPhone X (375x812)
4. **Ambil screenshot**: 
   - `Ctrl + Shift + P` → "Capture screenshot"
   - Atau klik icon "..." → "Capture screenshot"

### Untuk Loading Screen:

1. **Buka DevTools** (`F12`)
2. **Network tab** → Throttling: "Slow 3G"
3. **Refresh page** (`Ctrl + F5`)
4. **Screenshot cepat** saat loading muncul
5. Atau edit `script.js` → ubah timeout loading dari 2200ms ke 10000ms

---

## 📐 Ukuran Rekomendasi

| Screenshot | Width | Height | Aspect Ratio |
|------------|-------|--------|--------------|
| Preview | 1200px | 630px | 1.9:1 |
| Desktop | 1200px | 800px | 3:2 |
| Mobile | 375px | 812px | ~1:2 |

---

## 🎨 Tips untuk Screenshot Berkualitas

1. **Clean browser**: Hapus bookmark bar, extensions
2. **Full content**: Pastikan semua elemen terlihat
3. **No scrollbar**: Hide scrollbar jika perlu
4. **High resolution**: Minimal 2x untuk retina display
5. **Compress**: Gunakan TinyPNG atau Squoosh (target < 200KB per file)
6. **Format**: PNG untuk UI, JPG untuk photos
7. **Consistent**: Gunakan zoom dan window size yang sama

---

## 🚀 Setelah Screenshot Siap

1. Simpan semua file di folder `.github/`
2. Commit dan push ke GitHub:
   ```bash
   git add .github/
   git commit -m "docs: Add screenshots to README"
   git push origin main
   ```
3. Refresh repository di GitHub
4. Screenshot akan otomatis muncul di README.md

---

## 📝 Checklist

- [ ] preview.png (1200x630px)
- [ ] light-hero.png (1200x800px)
- [ ] light-skills.png (1200x800px)
- [ ] dark-hero.png (1200x800px)
- [ ] dark-projects.png (1200x800px)
- [ ] mobile-menu.png (375x812px)
- [ ] mobile-hero.png (375x812px)
- [ ] mobile-projects.png (375x812px)
- [ ] loading-screen.png (1200x800px)
- [ ] language-toggle.png (1200x800px)

Total: **10 screenshot**

---

## 🎯 Alternatif Cepat

Jika tidak sempat ambil semua screenshot, minimal ambil:
1. `preview.png` - Preview utama (WAJIB)
2. `light-hero.png` - Light mode
3. `dark-hero.png` - Dark mode
4. `mobile-hero.png` - Mobile responsive

Total minimal: **4 screenshot**
