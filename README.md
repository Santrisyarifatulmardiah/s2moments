# S2Moments - Website Undangan Digital

Website undangan digital modern dan modular yang mudah dikustomisasi.

## 📁 Struktur File

```
📦 Project Root
├── 📄 index.html          # File HTML utama (template)
├── 📄 config.js           # Konfigurasi & data konten website
├── 📄 themes-data.js      # Data semua tema undangan
├── 📄 components.js       # Komponen UI reusable
├── 📄 app.js             # Logika aplikasi utama
└── 📄 styles.css         # Custom CSS styles
```

## 🎯 Cara Edit Konten Website

### 1. **Edit Informasi Bisnis & Kontak** 
Buka file: `config.js`

```javascript
// Edit bagian ini:
businessInfo: {
    name: "S2Moments",
    tagline: "Undangan Digital Modern & Elegan",
    // ... dst
}

contact: {
    whatsapp: "6281211114522",  // Ganti nomor WA
    email: "hello@s2moments.id", // Ganti email
    // ... dst
}
```

### 2. **Edit Hero Section (Judul & Subtitle)**
Buka file: `config.js`

```javascript
hero: {
    title: "Buat Undangan <span class='text-brand-gold'>Istimewa</span> dalam Sekejap",
    subtitle: "S2Moments hadir untuk...",
    stats: {
        invitationsCreated: "5.764+",  // Ubah angka statistik
        invitationsShared: "254.192+"
    }
}
```

### 3. **Edit Keunggulan (Why Choose Us)**
Buka file: `config.js`

```javascript
whyChooseUs: {
    features: [
        {
            title: "Proses Cepat",           // Ubah judul
            description: "Siap dalam 1x24 jam." // Ubah deskripsi
        },
        // ... tambahkan atau edit fitur lainnya
    ]
}
```

### 4. **Edit Testimoni**
Buka file: `config.js`

```javascript
testimonials: {
    list: [
        {
            name: "Riedho & Silvi",           // Nama klien
            avatar: "https://...",             // URL foto
            rating: 5,                         // Rating (1-5)
            text: "Testimoni klien..."         // Isi testimoni
        }
        // ... tambahkan testimoni baru di sini
    ]
}
```

### 5. **Edit FAQ**
Buka file: `config.js`

```javascript
faq: {
    list: [
        {
            question: "Berapa lama proses pembuatannya?",
            answer: "Proses pembuatan sangat cepat! ..."
        }
        // ... tambahkan FAQ baru
    ]
}
```

## 🎨 Cara Mengelola Tema

### **Tambah Tema Baru**
Buka file: `themes-data.js`

```javascript
themes: [
    // ... tema existing
    
    // TAMBAH TEMA BARU DI SINI:
    {
        id: 'premium-7',              // ID unik
        category: 'premium',          // Kategori: premium/exclusive/adat/floral/minimalist/no-photo
        name: 'Nama Tema Baru',       // Nama tema
        image: 'URL_GAMBAR',          // URL gambar tema
        originalPrice: 150000,        // Harga coret
        price: 99000,                 // Harga jual
        demoUrl: null                 // Link demo (opsional)
    }
]
```

### **Edit Harga Tema**
Cari tema yang ingin diubah di `themes-data.js`:

```javascript
{
    id: 'premium-1',
    // ...
    originalPrice: 150000,  // Ubah harga coret
    price: 99000,           // Ubah harga jual
}
```

### **Tambah Link Demo Tema**
Cari tema yang ingin ditambah demo di `themes-data.js`:

```javascript
{
    id: 'premium-1',
    // ...
    demoUrl: 'https://s2moments.id/demo/premium-1'  // ← Link demo
    // Atau isi null jika belum ada demo
}
```

**Cara Kerja:**
- ✅ **Jika `demoUrl` ada**: Tombol "Demo" langsung buka link demo
- ✅ **Jika `demoUrl` null**: Tombol "Demo" tampilkan modal "Segera Hadir!"

### **Hapus Tema**
Cukup hapus objek tema dari array `themes` di file `themes-data.js`

### **Tab "Semua Tema"**
✅ Sudah tersedia di akhir kategori!  
- Klik tab **"Semua Tema"** untuk melihat semua tema sekaligus
- Otomatis menampilkan tema dari semua kategori
- Berguna untuk browse cepat tanpa switch kategori

### **Tambah Kategori Baru**
1. Di `themes-data.js`, tambahkan kategori baru **sebelum** `{ id: 'all', label: 'Semua Tema' }`:
```javascript
categories: [
    { id: 'premium', label: 'Premium' },
    // ... existing categories
    { id: 'custom', label: 'Custom' },  // TAMBAH DI SINI
    { id: 'all', label: 'Semua Tema' }  // Jangan hapus ini!
]
```

2. Tambahkan tema dengan category yang sama:
```javascript
{
    id: 'custom-1',
    category: 'custom',  // Sesuaikan dengan ID kategori baru
    // ... dst
}
```

## 🎨 Cara Edit Warna & Style

Buka file: `styles.css`

```css
:root {
    --brand-gold: #D4AF37;        /* Warna emas utama */
    --brand-gold-dark: #C8A02B;   /* Emas lebih gelap */
    --brand-dark: #2C2A29;        /* Warna gelap */
    --bg-alt: #F9F6F0;            /* Background alternatif */
}
```

## 🚀 Cara Test Website

1. Buka file `index.html` di browser
2. Atau gunakan Live Server di VS Code
3. Pastikan semua file `.js` dan `.css` ada di folder yang sama

## ⚙️ Teknologi yang Digunakan

- **HTML5** - Struktur
- **Tailwind CSS** - Framework CSS
- **Alpine.js** - Interaktivitas
- **Vanilla JavaScript** - Logika aplikasi

## 📱 Responsive Design

Website telah dioptimasi untuk **100% responsive** di semua device:

✅ **Mobile** (320px - 639px) - Portrait & Landscape  
✅ **Tablet** (640px - 1023px) - iPad, Android Tablets  
✅ **Desktop** (1024px+) - Laptop & Desktop  
✅ **Touch Optimized** - Tap targets minimal 44x44px  
✅ **Safari/iOS Compatible** - Full support untuk iPhone & iPad  
✅ **Notch Support** - Safe area untuk iPhone X dan yang lebih baru  

Lihat **`RESPONSIVE_GUIDE.md`** untuk detail lengkap.

## 📝 Tips Penting

1. **Jangan edit `index.html`** - File ini hanya template. Edit data di `config.js` dan `themes-data.js`
2. **Format gambar** - Gunakan URL gambar dengan rasio 3:4 untuk tema (contoh: 600x800px)
3. **Backup** - Selalu backup file sebelum edit besar-besaran
4. **Test** - Selalu test di browser setelah edit

## 🆘 Troubleshooting

**Website tidak muncul?**
- Pastikan semua file JavaScript di-load dengan benar
- Cek Console browser (F12) untuk error

**Tema tidak muncul?**
- Pastikan `category` di tema sesuai dengan ID kategori yang ada
- Cek format data tema sudah benar

**Gambar tidak muncul?**
- Pastikan URL gambar valid dan accessible
- Gunakan URL absolute (https://...)

---

Dibuat dengan ❤️ untuk S2Moments

