ATURFIN - Landing Page
https://./assets/images/logo-aturfin.png

AturFin adalah landing page profesional untuk layanan mediasi hutang pinjaman online (pinjol). Website ini dirancang dengan tampilan modern, responsif, dan user-friendly untuk membantu pengguna mendapatkan solusi atas masalah hutang mereka.

📋 Fitur Utama
🎯 Core Features
✅ Responsive Design - Optimal di semua device (Desktop, Tablet, Mobile)
✅ Modern UI/UX - Menggunakan Tailwind CSS dengan desain gradient & glassmorphism
✅ Animasi Interaktif - Menggunakan AOS (Animate On Scroll) untuk efek scroll
✅ WhatsApp Widget - Chat langsung dengan CS via WhatsApp
✅ FAQ Accordion - Sistem toggle untuk pertanyaan umum
✅ Progress Indicator - Visualisasi progress scroll
✅ Back to Top Button - Navigasi mudah kembali ke atas

🏗️ Section Structure
Navigation Bar - Menu sticky dengan backdrop blur
Hero Section - Value proposition utama dengan CTA
Program Statistics - Data pencapaian perusahaan
Services - Detail layanan yang ditawarkan
Process Steps - 6 Langkah menuju kebebasan hutang
Visi & Misi - Tujuan dan nilai perusahaan
Solutions - Solusi spesifik masalah pinjol
FAQ - Pertanyaan umum dengan accordion
Success Stories - Testimoni klien sukses
Contact Form - Form konsultasi terintegrasi WhatsApp
Footer - Informasi kontak & social media

🛠️ Teknologi yang Digunakan
Frontend Stack
HTML5 - Struktur dasar website
Tailwind CSS - Framework CSS utility-first
JavaScript (Vanilla) - Interaktivitas dan animasi
AOS Library - Animate On Scroll
Font Awesome - Ikon vektor
Google Fonts - Plus Jakarta Sans font family
External Resources
html

<!-- CSS Libraries -->

- Tailwind CSS (CDN)
- AOS Animation
- Font Awesome Icons
- Google Fonts

<!-- JavaScript Libraries -->

- AOS.js
- Tailwind Config
  📁 Struktur Proyek
  text
  aturfin-landing/
  ├── index.html # File utama HTML
  ├── assets/
  │ ├── images/ # Semua gambar assets
  │ │ ├── logo-aturfin.png
  │ │ ├── landing.jpeg
  │ │ ├── layanan.jpg
  │ │ ├── langkah.jpg
  │ │ ├── visi.jpeg
  │ │ ├── solusi.jpeg
  │ │ ├── komdigi.jpeg
  │ │ └── konsultasi-gratis.jpg
  │ └── (folder lain jika ada)
  ├── src/
  │ └── output.css # CSS hasil kompilasi Tailwind (jika ada)
  └── README.md # Dokumentasi ini
  🚀 Instalasi & Penggunaan
  Option 1: Local Development
  bash

# Clone repository (jika menggunakan Git)

git clone <repository-url>

# Navigasi ke direktori proyek

cd aturfin-landing

# Buka dengan live server

# Gunakan extension VS Code "Live Server" atau

# Buka langsung file index.html di browser

Option 2: Hosting Static
Upload semua file ke hosting static (Netlify, Vercel, GitHub Pages)
Pastikan struktur folder tetap sama
URL akan langsung mengarah ke index.html
Option 3: Custom Build (jika menggunakan Tailwind build)
bash

# Install dependencies (jika menggunakan npm)

npm install

# Build Tailwind CSS

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
⚙️ Konfigurasi
Customization Points
Admin WhatsApp Number
javascript
// Line 1220 di index.html
const adminNumber = "6289601208920"; // Ganti nomor ini
Social Media Links
javascript
// Line 1274-1278 di index.html
const urls = {
instagram: "https://instagram.com/aturfin.id",
tiktok: "https://tiktok.com/@aturfin",
facebook: "https://facebook.com/aturfin"
};
Images & Assets

Ganti gambar di folder assets/images/

Ukuran rekomendasi: Optimized untuk web (max 500KB per image)

Colors & Theme
Primary: Blue 600 (#2563eb)
Secondary: Cyan 500 (#06b6d4)
Background: Slate 50 (#f8fafc)

🔧 Fungsi JavaScript
Core Functions
Function Deskripsi Parameter
toggleMobileMenu() Toggle menu mobile -
toggleFaq(button) Toggle FAQ accordion HTMLElement button
scrollToSection(sectionId) Smooth scroll ke section string sectionId
toggleWidget() Toggle WhatsApp widget -
submitFormWidget() Kirim pesan default ke WA -
openSocial(platform) Buka link social media string platform
Event Listeners
Scroll: Update progress bar & back-to-top button

Form Submit: WhatsApp message formatter

Click Outside: Close widget/menu

📱 Responsive Breakpoints
Breakpoint Prefix Container Max Width
Mobile sm: 640px
Tablet md: 768px
Desktop lg: 1024px
Large Desktop xl: 1280px
Note: Menggunakan mobile-first approach dengan utility classes Tailwind.

🎨 Design System
Typography
Font Family: Plus Jakarta Sans

Headings:
h1: 3xl-6xl, extrabold
h2: 3xl-5xl, extrabold
h3: 2xl-4xl, bold
Body Text: slate-600/700

Color Palette
css
/_ Primary Colors _/
--color-primary: #2563eb; /_ blue-600 _/
--color-secondary: #06b6d4; /_ cyan-500 _/
--color-accent: #25D366; /_ WhatsApp green _/

/_ Neutral Colors _/
--color-bg: #f8fafc; /_ slate-50 _/
--color-text: #1e293b; /_ slate-800 _/
--color-light: #94a3b8; /_ slate-400 _/
Spacing & Layout
Container: max-w-7xl (80rem / 1280px)

Section Padding: py-16 to py-24

Gap Utilities: gap-4 to gap-16

🔍 SEO & Performance
Optimizations
✅ Meta Tags lengkap untuk SEO
✅ Viewport Optimization untuk mobile
✅ Lazy Loading (jika ada banyak gambar)
✅ Minified CSS & JS (via CDN)
✅ ALT Text untuk semua gambar

Meta Configuration
html

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Solusi lunas hutang & bebas teror">
<title>AturFin - Solusi Lunas Hutang & Bebas Teror</title>
📊 Analytics Integration
Google Analytics (Optional)
Tambahkan script berikut sebelum </head>:

html

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

Facebook Pixel (Optional)
html

<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'PIXEL_ID');
  fbq('track', 'PageView');
</script>

🐛 Troubleshooting
Common Issues
Gambar tidak muncul
Periksa path relatif di atribut src
Pastikan file ada di folder assets/images/
Cek permissions file
JavaScript tidak bekerja
Pastikan CDN libraries terload
Cek console untuk error messages
Pastikan fungsi dipanggil setelah DOM ready
Responsive issues
Pastikan viewport meta tag ada
Cek class Tailwind yang bertabrakan
Verifikasi breakpoints
WhatsApp tidak terbuka
Cek nomor admin di variable adminNumber
Pastikan format nomor: 62xxx tanpa + atau 0
Test di device mobile (beberapa desktop blokir WA Web)
Debug Mode
Aktifkan log untuk debugging:

javascript
// Tambahkan di awal script
console.log('AturFin Debug Mode');
console.log('Admin Number:', adminNumber);
console.log('DOM Loaded:', document.readyState);
📈 Performance Tips
Image Optimization

bash

# Gunakan tools seperti:

- Squoosh.app (online)
- ImageOptim (desktop)
- TinyPNG (online)
  CSS Optimization

Pertimbangkan menggunakan Tailwind JIT
Purge unused CSS classes
JavaScript Optimization
Defer non-critical scripts
Use async loading untuk libraries

🤝 Kontribusi
Development Workflow
Fork repository

Create feature branch (git checkout -b feature/AmazingFeature)
Commit changes (git commit -m 'Add AmazingFeature')
Push to branch (git push origin feature/AmazingFeature)
Open Pull Request

Coding Standards
Gunakan komentar struktur seperti yang sudah ada
Maintain konsistensi naming convention
Test di multiple browsers
Update README jika ada perubahan signifikan

📄 Lisensi
Proyek ini adalah hak milik AturFin Indonesia. Tidak diperbolehkan untuk distribusi atau penggunaan komersial tanpa izin.

📋 Dokumentasi Kode
Struktur Komentar Kode
Kode telah diorganisir dengan sistem komentar yang terstruktur:

text

<!-- ========================================= -->
<!-- [SECTION NAME] (START) -->
<!-- ========================================= -->
<!--
    Deskripsi: [Penjelasan section/fungsi]
    Tanggal: [Tanggal pembuatan/modifikasi]
    Author: [Nama developer]
    Versi: [Versi kode]
-->

[KODE]

<!-- ========================================= -->
<!-- [SECTION NAME] (END) -->
<!-- ========================================= -->

Main Sections dengan ID:
#hero - Hero/Banner utama
#program - Statistik program
#services - Layanan yang ditawarkan
#steps - 6 langkah proses
#visimisi - Visi & misi perusahaan
#about - Solusi spesifik
#faq - Frequently Asked Questions
#success-story - Testimoni klien
#contact - Form kontak

👤 Informasi Developer
Dibuat oleh: Abdurrahim
Tanggal Pembuatan: 24 Januari 2026
Teknologi: HTML5, Tailwind CSS, JavaScript Vanilla
Status Proyek: Production Ready

Kontak Developer:
Email: abdurrahim011902@gmail.com
Portfolio: https://abdurrahim0119.framer.website/
GitHub: https://github.com/Abdurrahim0119

👥 Tim & Kontak
AturFin Indonesia
Website: aturfin.id
Email: info@aturfin.id
WhatsApp: +62 896 0120 8920
Instagram: @aturfin.id

Last Updated: 24 Januari 2026
Version: 1.0.0
Status: Production Ready 🚀
Developer: Abdurrahim

"Dibuat dengan ❤️ oleh Abdurrahim untuk membantu masyarakat Indonesia terbebas dari hutang"
