# 📘 Panduan Lengkap: Cara Menambah Tema Baru

## 🎯 Langkah-Langkah

### STEP 1: Siapkan Gambar Tema
1. Upload gambar tema ke hosting (Imgur, Cloudinary, atau hosting sendiri)
2. Salin URL gambar
3. Rekomendasi ukuran: **600x800 pixel** (rasio 3:4)

### STEP 2: Buka File `themes-data.js`

### STEP 3: Tambahkan Tema Baru

Scroll ke bagian bawah array `themes`, lalu tambahkan kode berikut:

```javascript
// Di dalam array themes[], setelah tema terakhir:

    // ========== TEMA BARU SAYA ==========
    {
        id: 'premium-7',                    // 1. ID UNIK (jangan ada yang sama!)
        category: 'premium',                // 2. Pilih kategori
        name: 'Golden Sunset',              // 3. Nama tema
        image: 'https://i.imgur.com/ABCD.jpg',  // 4. URL gambar tema
        originalPrice: 150000,              // 5. Harga coret
        price: 99000,                       // 6. Harga jual
        demoUrl: null                       // 7. Link demo (opsional)
    },
```

### STEP 4: Penjelasan Detail

#### 1️⃣ **ID** (`id`)
- Harus **UNIK**, tidak boleh sama dengan tema lain
- Format: `kategori-nomor` atau `nama-unik`
- Contoh: `premium-7`, `exclusive-8`, `wedding-royal`

#### 2️⃣ **Kategori** (`category`)
Pilih salah satu:
- `'premium'` - Tema Premium
- `'exclusive'` - Tema Exclusive  
- `'adat'` - Tema Adat
- `'floral'` - Tema Floral
- `'minimalist'` - Tema Minimalist
- `'no-photo'` - Tema Tanpa Foto

**Note:** Tidak perlu kategori `'all'`, karena tab "Semua Tema" akan otomatis menampilkan semua tema dari kategori manapun!

#### 3️⃣ **Nama** (`name`)
- Nama tema yang akan ditampilkan
- Boleh pakai spasi, huruf besar/kecil, dan karakter &
- Contoh: `"Golden Sunset"`, `"Royal Wedding"`, `"Elegant & Modern"`

#### 4️⃣ **Gambar** (`image`)
- URL lengkap gambar tema
- Harus dimulai dengan `http://` atau `https://`
- Pastikan gambar bisa diakses publik

#### 5️⃣ **Harga Asli** (`originalPrice`)
- Harga coret (yang dicoret)
- Format: angka tanpa titik/koma
- Contoh: `150000` (bukan "150.000")

#### 6️⃣ **Harga Jual** (`price`)
- Harga diskon/jual
- Format: angka tanpa titik/koma
- Harus lebih kecil dari `originalPrice`

#### 7️⃣ **URL Demo** (`demoUrl`)
- Link ke halaman demo tema (jika ada)
- Jika **ada URL demo**: Tombol "Demo" akan langsung membuka link demo di tab baru
- Jika **`null`**: Tombol "Demo" akan tampilkan modal "Segera Hadir!"
- Contoh: `'https://s2moments.id/demo/premium-7'` atau `null`

**Cara Kerja:**
```javascript
// Dengan demo URL - Buka langsung
demoUrl: 'https://s2moments.id/demo/tema-saya'

// Tanpa demo URL - Tampilkan modal
demoUrl: null
```

---

## 📋 Contoh Lengkap: Menambah 3 Tema Baru

```javascript
themes: [
    // ... tema-tema yang sudah ada ...

    // TEMA BARU 1
    {
        id: 'premium-7',
        category: 'premium',
        name: 'Golden Sunset',
        image: 'https://i.imgur.com/ABC123.jpg',
        originalPrice: 150000,
        price: 99000,
        demoUrl: null
    },

    // TEMA BARU 2
    {
        id: 'floral-7',
        category: 'floral',
        name: 'Spring Bouquet',
        image: 'https://i.imgur.com/XYZ789.jpg',
        originalPrice: 120000,
        price: 89000,
        demoUrl: 'https://s2moments.id/demo/spring'
    },

    // TEMA BARU 3
    {
        id: 'minimalist-7',
        category: 'minimalist',
        name: 'Clean & Simple',
        image: 'https://i.imgur.com/DEF456.jpg',
        originalPrice: 100000,
        price: 79000,
        demoUrl: null
    }
]
```

---

## ✅ Checklist Sebelum Save

- [ ] ID tema unik, tidak ada yang sama?
- [ ] Kategori sudah benar dan sesuai dengan yang ada?
- [ ] URL gambar valid dan bisa dibuka?
- [ ] Harga originalPrice > price?
- [ ] Format angka tanpa titik, koma, atau Rp?
- [ ] Ada koma (`,`) di akhir objek (kecuali tema terakhir)?
- [ ] Sudah test di browser?

---

## 🚨 Kesalahan yang Sering Terjadi

### ❌ SALAH:
```javascript
{
    id: 'premium-1',  // ❌ ID sudah ada!
    category: 'Premium',  // ❌ Huruf besar
    name: Golden Sunset,  // ❌ Tidak pakai tanda kutip
    image: 'gambar.jpg',  // ❌ Bukan URL lengkap
    originalPrice: '150000',  // ❌ String, bukan angka
    price: 150.000,  // ❌ Pakai titik
}
```

### ✅ BENAR:
```javascript
{
    id: 'premium-99',  // ✅ ID unik
    category: 'premium',  // ✅ Huruf kecil
    name: 'Golden Sunset',  // ✅ Pakai tanda kutip
    image: 'https://i.imgur.com/ABC.jpg',  // ✅ URL lengkap
    originalPrice: 150000,  // ✅ Angka
    price: 99000,  // ✅ Angka tanpa titik
    demoUrl: null  // ✅ null tanpa tanda kutip
}
```

---

## 🎨 Tips Pro

### 💡 Mengelompokkan Tema
Gunakan komentar untuk memudahkan:

```javascript
themes: [
    // ========== PREMIUM THEMES ==========
    { id: 'premium-1', ... },
    { id: 'premium-2', ... },
    
    // ========== TEMA WEDDING SPESIAL ==========
    { id: 'premium-99', ... },
    { id: 'premium-100', ... },
]
```

### 💡 Harga Bertingkat
```javascript
// Premium: 99k
{ ..., originalPrice: 150000, price: 99000 },

// Exclusive: 149k  
{ ..., originalPrice: 200000, price: 149000 },

// Basic: 79k
{ ..., originalPrice: 100000, price: 79000 },
```

### 💡 Nama Tema Menarik
- ✅ "Elegant Gold & White"
- ✅ "Royal Majestic"
- ✅ "Floral Paradise"
- ❌ "Tema 1"
- ❌ "Undangan Bagus"

---

## 🧪 Test Tema Baru

1. Save file `themes-data.js`
2. Refresh browser (F5)
3. Klik tab kategori tema baru
4. Cek apakah tema muncul dengan benar
5. Cek harga, gambar, dan tombol "Pesan"

---

## 📞 Butuh Bantuan?

Jika ada error atau tema tidak muncul:
1. Cek Console browser (F12)
2. Pastikan tidak ada error merah
3. Cek format JSON sudah benar (kurung, koma, dll)

**Semoga berhasil! 🎉**

