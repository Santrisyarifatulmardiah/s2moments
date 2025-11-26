// =================================================================
// DATA TEMA UNDANGAN
// =================================================================
// File ini berisi semua data tema yang tersedia
// Anda bisa dengan mudah menambah, edit, atau hapus tema di sini

const THEMES_DATA = {
    // ===== KATEGORI TEMA =====
    categories: [
        { id: 'luxee', label: 'Tema Luxee' },
        { id: 'adat', label: 'Tema Adat' },
        { id: 'flora', label: 'Tema Flora' },
        { id: 'watercolor', label: 'Tema Watercolor' },
        { id: 'minimalist', label: 'Tema Minimalist' },
        { id: 'serba70k', label: 'Tema SERBA 70K' },
        { id: 'engagement', label: 'Tema Engagement' },
        { id: 'anniversary', label: 'Tema Anniversary' },
        { id: 'aqiqah', label: 'Tema Aqiqah' },
        { id: 'khitan', label: 'Tema Khitan' },
        { id: 'birthday', label: 'Tema Birthday' },
        { id: 'others', label: 'Tema Others' },
        { id: 'all', label: 'Semua Tema' }  // Tab untuk menampilkan semua tema
    ],

    // ===== DAFTAR TEMA =====
    // Format:
    // {
    //     id: string (unique),
    //     category: string (sesuai category id di atas),
    //     name: string,
    //     image: string (URL),
    //     originalPrice: number,
    //     price: number,
    //     demoUrl: string (optional, untuk link demo)
    // }

    themes: [
        // ========== TEMA LUXE ==========
        {
            id: 'luxe-01',
            category: 'luxee',
            name: 'Luxe 01',
            image: 'https://placehold.co/600x800/2C2A29/E5C158?text=Luxe+01',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-02',
            category: 'luxee',
            name: 'Luxe 02',
            image: 'https://placehold.co/600x800/1a1918/F5C845?text=Luxe+02',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-03',
            category: 'luxee',
            name: 'Luxe 03',
            image: 'https://placehold.co/600x800/2C2A29/FAD961?text=Luxe+03',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-04',
            category: 'luxee',
            name: 'Luxe 04',
            image: 'https://placehold.co/600x800/332f2d/D4AF37?text=Luxe+04',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-05',
            category: 'luxee',
            name: 'Luxe 05',
            image: 'https://placehold.co/600x800/FFFCF2/C8A02B?text=Luxe+05',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-06',
            category: 'luxee',
            name: 'Luxe 06',
            image: 'https://placehold.co/600x800/E5C158/2C2A29?text=Luxe+06',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-07',
            category: 'luxee',
            name: 'Luxe 07',
            image: 'https://placehold.co/600x800/1a1918/E5C158?text=Luxe+07',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-08',
            category: 'luxee',
            name: 'Luxe 08',
            image: 'https://placehold.co/600x800/FFF8E7/C8A02B?text=Luxe+08',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-09',
            category: 'luxee',
            name: 'Luxe 09',
            image: 'https://placehold.co/600x800/D4AF37/FFFCF2?text=Luxe+09',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-10',
            category: 'luxee',
            name: 'Luxe 10',
            image: 'https://placehold.co/600x800/2C2A29/FAD961?text=Luxe+10',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-11',
            category: 'luxee',
            name: 'Luxe 11',
            image: 'https://placehold.co/600x800/FFFCF2/B8941F?text=Luxe+11',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-12',
            category: 'luxee',
            name: 'Luxe 12',
            image: 'https://placehold.co/600x800/E5C158/2C2A29?text=Luxe+12',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-13',
            category: 'luxee',
            name: 'Luxe 13',
            image: 'https://placehold.co/600x800/2C2A29/E5C158?text=Luxe+13',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-14',
            category: 'luxee',
            name: 'Luxe 14',
            image: 'https://placehold.co/600x800/1a1918/F5C845?text=Luxe+14',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-15',
            category: 'luxee',
            name: 'Luxe 15',
            image: 'https://placehold.co/600x800/2C2A29/FAD961?text=Luxe+15',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-16',
            category: 'luxee',
            name: 'Luxe 16',
            image: 'https://placehold.co/600x800/332f2d/D4AF37?text=Luxe+16',
            originalPrice: 150000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'luxe-fantasy',
            category: 'luxee',
            name: 'Luxe - Fantasy Special',
            image: 'https://placehold.co/600x800/663399/FFD700?text=Fantasy+Special',
            originalPrice: 180000,
            price: 129000,
            demoUrl: null
        },

        // ========== TEMA LUXEE ==========
        {
            id: 'luxee-01',
            category: 'luxee',
            name: 'Luxee 01',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1001.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-01/'
        },
        {
            id: 'luxee-02',
            category: 'luxee',
            name: 'Luxee 02',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1005.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-05/'
        },
        {
            id: 'luxee-03',
            category: 'luxee',
            name: 'Luxee 03',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1007.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-07/'
        },
        {
            id: 'luxee-04',
            category: 'luxee',
            name: 'Luxee 04',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1002.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-02/'
        },
        {
            id: 'luxee-05',
            category: 'luxee',
            name: 'Luxee 05',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1003.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-03/'
        },
        {
            id: 'luxee-06',
            category: 'luxee',
            name: 'Luxee 06',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1004.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-04/'
        },
        {
            id: 'luxee-07',
            category: 'luxee',
            name: 'Luxee 07',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1006.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-06/'
        },
        {
            id: 'luxee-08',
            category: 'luxee',
            name: 'Luxee 08',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1008.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-08/'
        },
        {
            id: 'luxee-09',
            category: 'luxee',
            name: 'Luxee 09',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1009.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-09/'
        },
        {
            id: 'luxee-10',
            category: 'luxee',
            name: 'Luxee 10',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1010.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-10/'
        },
        {
            id: 'luxee-11',
            category: 'luxee',
            name: 'Luxee 11',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1011.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-11/'
        },
        {
            id: 'luxee-12',
            category: 'luxee',
            name: 'Luxee 12',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1012.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-12/'
        },
        {
            id: 'luxee-13',
            category: 'luxee',
            name: 'Luxee 13',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1013.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-13/'
        },
        {
            id: 'luxee-14',
            category: 'luxee',
            name: 'Luxee 14',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1014.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-14/'
        },
        {
            id: 'luxee-15',
            category: 'luxee',
            name: 'Luxee 15',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1015.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-15/'
        },
        {
            id: 'luxee-16',
            category: 'luxee',
            name: 'Luxee 16',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1016.webp',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-16/'
        },
        {
            id: 'luxee-17',
            category: 'luxee',
            name: 'Luxee 17',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee-premium-17.png',
            originalPrice: 150000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/tema-17/'
        },

        // ========== TEMA ADAT ==========
        {
            id: 'adat-sriwijaya',
            category: 'adat',
            name: 'Adat Sriwijaya',
            image: 'https://placehold.co/600x800/DC143C/FFD700?text=Adat+Sriwijaya',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'adat-minang',
            category: 'adat',
            name: 'Adat Minang',
            image: 'https://placehold.co/600x800/FFD700/800000?text=Adat+Minang',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'adat-bali',
            category: 'adat',
            name: 'Adat Bali',
            image: 'https://placehold.co/600x800/DAA520/000000?text=Adat+Bali',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'adat-jawa',
            category: 'adat',
            name: 'Adat Jawa',
            image: 'https://placehold.co/600x800/8B4513/FFFFFF?text=Adat+Jawa',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'adat-jawa-batik',
            category: 'adat',
            name: 'Adat Jawa - Batik',
            image: 'https://placehold.co/600x800/654321/FFD700?text=Adat+Jawa+Batik',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'adat-sunda',
            category: 'adat',
            name: 'Adat Sunda',
            image: 'https://placehold.co/600x800/228B22/FFFFFF?text=Adat+Sunda',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'adat-batak',
            category: 'adat',
            name: 'Adat Batak',
            image: 'https://placehold.co/600x800/000080/FFFFFF?text=Adat+Batak',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'adat-banjar',
            category: 'adat',
            name: 'Adat Banjar',
            image: 'https://placehold.co/600x800/FF8C00/FFFFFF?text=Adat+Banjar',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'adat-betawi',
            category: 'adat',
            name: 'Adat Betawi',
            image: 'https://placehold.co/600x800/B22222/FFFFFF?text=Adat+Betawi',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'adat-bugis',
            category: 'adat',
            name: 'Adat Bugis',
            image: 'https://placehold.co/600x800/8B0000/FFD700?text=Adat+Bugis',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'adat-kalimantan',
            category: 'adat',
            name: 'Adat Kalimantan',
            image: 'https://placehold.co/600x800/8B4513/FFD700?text=Adat+Kalimantan',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'adat-papua',
            category: 'adat',
            name: 'Adat Papua',
            image: 'https://placehold.co/600x800/CD853F/000000?text=Adat+Papua',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },

        // ========== TEMA FLORA ==========
        {
            id: 'floral-01',
            category: 'flora',
            name: 'Floral 01',
            image: 'https://placehold.co/600x800/FFC0CB/000000?text=Floral+01',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'floral-02',
            category: 'flora',
            name: 'Floral 02',
            image: 'https://placehold.co/600x800/E6E6FA/000000?text=Floral+02',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'floral-03',
            category: 'flora',
            name: 'Floral 03',
            image: 'https://placehold.co/600x800/90EE90/000000?text=Floral+03',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'floral-04',
            category: 'flora',
            name: 'Floral 04',
            image: 'https://placehold.co/600x800/FFB6C1/000000?text=Floral+04',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'floral-05',
            category: 'flora',
            name: 'Floral 05',
            image: 'https://placehold.co/600x800/87CEEB/000000?text=Floral+05',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'floral-06',
            category: 'flora',
            name: 'Floral 06',
            image: 'https://placehold.co/600x800/FF7F50/FFFFFF?text=Floral+06',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'floral-07',
            category: 'flora',
            name: 'Floral 07',
            image: 'https://placehold.co/600x800/DDA0DD/000000?text=Floral+07',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'floral-08',
            category: 'flora',
            name: 'Floral 08',
            image: 'https://placehold.co/600x800/F0E68C/000000?text=Floral+08',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'floral-09',
            category: 'flora',
            name: 'Floral 09',
            image: 'https://placehold.co/600x800/98FB98/000000?text=Floral+09',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'floral-10',
            category: 'flora',
            name: 'Floral 10',
            image: 'https://placehold.co/600x800/FFE4E1/000000?text=Floral+10',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },

        // ========== TEMA WATERCOLOR ==========
        {
            id: 'watercolor-01',
            category: 'watercolor',
            name: 'Watercolor 01',
            image: 'https://placehold.co/600x800/ADD8E6/000000?text=Watercolor+01',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'watercolor-02',
            category: 'watercolor',
            name: 'Watercolor 02',
            image: 'https://placehold.co/600x800/F0E68C/000000?text=Watercolor+02',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'watercolor-03',
            category: 'watercolor',
            name: 'Watercolor 03',
            image: 'https://placehold.co/600x800/FFB6C1/000000?text=Watercolor+03',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'watercolor-04',
            category: 'watercolor',
            name: 'Watercolor 04',
            image: 'https://placehold.co/600x800/E6E6FA/000000?text=Watercolor+04',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },

        // ========== TEMA MINIMALIST ==========
        {
            id: 'minimalist-overlay',
            category: 'minimalist',
            name: 'Overlay Shadow',
            image: 'https://placehold.co/600x800/555555/FFFFFF?text=Overlay+Shadow',
            originalPrice: 100000,
            price: 79000,
            demoUrl: null
        },
        {
            id: 'minimalist-01',
            category: 'minimalist',
            name: 'Minimalist 01',
            image: 'https://placehold.co/600x800/F5F5F5/000000?text=Minimalist+01',
            originalPrice: 100000,
            price: 79000,
            demoUrl: null
        },
        {
            id: 'minimalist-02',
            category: 'minimalist',
            name: 'Minimalist 02',
            image: 'https://placehold.co/600x800/000000/FFFFFF?text=Minimalist+02',
            originalPrice: 100000,
            price: 79000,
            demoUrl: null
        },
        {
            id: 'minimalist-03',
            category: 'minimalist',
            name: 'Minimalist 03',
            image: 'https://placehold.co/600x800/EEEEEE/333333?text=Minimalist+03',
            originalPrice: 100000,
            price: 79000,
            demoUrl: null
        },
        {
            id: 'minimalist-04',
            category: 'minimalist',
            name: 'Minimalist 04',
            image: 'https://placehold.co/600x800/FFFFFF/000000?text=Minimalist+04',
            originalPrice: 100000,
            price: 79000,
            demoUrl: null
        },
        {
            id: 'minimalist-05',
            category: 'minimalist',
            name: 'Minimalist 05',
            image: 'https://placehold.co/600x800/36454F/FFFFFF?text=Minimalist+05',
            originalPrice: 100000,
            price: 79000,
            demoUrl: null
        },
        {
            id: 'minimalist-06',
            category: 'minimalist',
            name: 'Minimalist 06',
            image: 'https://placehold.co/600x800/F0E68C/000000?text=Minimalist+06',
            originalPrice: 100000,
            price: 79000,
            demoUrl: null
        },
        {
            id: 'minimalist-07',
            category: 'minimalist',
            name: 'Minimalist 07',
            image: 'https://placehold.co/600x800/2C3E50/FFFFFF?text=Minimalist+07',
            originalPrice: 100000,
            price: 79000,
            demoUrl: null
        },
        {
            id: 'minimalist-08',
            category: 'minimalist',
            name: 'Minimalist 08',
            image: 'https://placehold.co/600x800/ECF0F1/2C3E50?text=Minimalist+08',
            originalPrice: 100000,
            price: 79000,
            demoUrl: null
        },
        {
            id: 'minimalist-09',
            category: 'minimalist',
            name: 'Minimalist 09',
            image: 'https://placehold.co/600x800/34495E/FFFFFF?text=Minimalist+09',
            originalPrice: 100000,
            price: 79000,
            demoUrl: null
        },
        {
            id: 'minimalist-10',
            category: 'minimalist',
            name: 'Minimalist 10',
            image: 'https://placehold.co/600x800/BDC3C7/2C3E50?text=Minimalist+10',
            originalPrice: 100000,
            price: 79000,
            demoUrl: null
        },

        // ========== TEMA SERBA 70K ==========
        {
            id: 'serba70k-01',
            category: 'serba70k',
            name: 'SERBA 70K - 01',
            image: 'https://placehold.co/600x800/FF6B6B/FFFFFF?text=SERBA+70K+01',
            originalPrice: 90000,
            price: 70000,
            demoUrl: null
        },
        {
            id: 'serba70k-02',
            category: 'serba70k',
            name: 'SERBA 70K - 02',
            image: 'https://placehold.co/600x800/4ECDC4/FFFFFF?text=SERBA+70K+02',
            originalPrice: 90000,
            price: 70000,
            demoUrl: null
        },
        {
            id: 'serba70k-03',
            category: 'serba70k',
            name: 'SERBA 70K - 03',
            image: 'https://placehold.co/600x800/45B7D1/FFFFFF?text=SERBA+70K+03',
            originalPrice: 90000,
            price: 70000,
            demoUrl: null
        },
        {
            id: 'serba70k-04',
            category: 'serba70k',
            name: 'SERBA 70K - 04',
            image: 'https://placehold.co/600x800/F7B731/FFFFFF?text=SERBA+70K+04',
            originalPrice: 90000,
            price: 70000,
            demoUrl: null
        },
        {
            id: 'serba70k-05',
            category: 'serba70k',
            name: 'SERBA 70K - 05',
            image: 'https://placehold.co/600x800/5F27CD/FFFFFF?text=SERBA+70K+05',
            originalPrice: 90000,
            price: 70000,
            demoUrl: null
        },
        {
            id: 'serba70k-06',
            category: 'serba70k',
            name: 'SERBA 70K - 06',
            image: 'https://placehold.co/600x800/00D2D3/FFFFFF?text=SERBA+70K+06',
            originalPrice: 90000,
            price: 70000,
            demoUrl: null
        },
        {
            id: 'serba70k-07',
            category: 'serba70k',
            name: 'SERBA 70K - 07',
            image: 'https://placehold.co/600x800/FF9FF3/000000?text=SERBA+70K+07',
            originalPrice: 90000,
            price: 70000,
            demoUrl: null
        },
        {
            id: 'serba70k-08',
            category: 'serba70k',
            name: 'SERBA 70K - 08',
            image: 'https://placehold.co/600x800/54A0FF/FFFFFF?text=SERBA+70K+08',
            originalPrice: 90000,
            price: 70000,
            demoUrl: null
        },
        {
            id: 'serba70k-09',
            category: 'serba70k',
            name: 'SERBA 70K - 09',
            image: 'https://placehold.co/600x800/48DBFB/000000?text=SERBA+70K+09',
            originalPrice: 90000,
            price: 70000,
            demoUrl: null
        },
        {
            id: 'serba70k-10',
            category: 'serba70k',
            name: 'SERBA 70K - 10',
            image: 'https://placehold.co/600x800/FF6348/FFFFFF?text=SERBA+70K+10',
            originalPrice: 90000,
            price: 70000,
            demoUrl: null
        },

        // ========== TEMA ENGAGEMENT ==========
        {
            id: 'engagement-01',
            category: 'engagement',
            name: 'Engagement 01',
            image: 'https://placehold.co/600x800/FFB6C1/000000?text=Engagement+01',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'engagement-02',
            category: 'engagement',
            name: 'Engagement 02',
            image: 'https://placehold.co/600x800/FFC0CB/000000?text=Engagement+02',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'engagement-03',
            category: 'engagement',
            name: 'Engagement 03',
            image: 'https://placehold.co/600x800/FFE4E1/8B4513?text=Engagement+03',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'engagement-04',
            category: 'engagement',
            name: 'Engagement 04',
            image: 'https://placehold.co/600x800/F0E68C/8B4513?text=Engagement+04',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },

        // ========== TEMA ANNIVERSARY ==========
        {
            id: 'anniversary-01',
            category: 'anniversary',
            name: 'Anniversary 01',
            image: 'https://placehold.co/600x800/DC143C/FFFFFF?text=Anniversary+01',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'anniversary-02',
            category: 'anniversary',
            name: 'Anniversary 02',
            image: 'https://placehold.co/600x800/FF1493/FFFFFF?text=Anniversary+02',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },

        // ========== TEMA AQIQAH ==========
        {
            id: 'aqiqah-01',
            category: 'aqiqah',
            name: 'Aqiqah 01',
            image: 'https://placehold.co/600x800/87CEEB/FFFFFF?text=Aqiqah+01',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'aqiqah-02',
            category: 'aqiqah',
            name: 'Aqiqah 02',
            image: 'https://placehold.co/600x800/FFB6C1/FFFFFF?text=Aqiqah+02',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },

        // ========== TEMA KHITAN ==========
        {
            id: 'khitan-01',
            category: 'khitan',
            name: 'Khitan 01',
            image: 'https://placehold.co/600x800/4169E1/FFFFFF?text=Khitan+01',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'khitan-02',
            category: 'khitan',
            name: 'Khitan 02',
            image: 'https://placehold.co/600x800/1E90FF/FFFFFF?text=Khitan+02',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'khitan-03',
            category: 'khitan',
            name: 'Khitan 03',
            image: 'https://placehold.co/600x800/00BFFF/FFFFFF?text=Khitan+03',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },

        // ========== TEMA BIRTHDAY ==========
        {
            id: 'birthday-01',
            category: 'birthday',
            name: 'Birthday 01',
            image: 'https://placehold.co/600x800/FF69B4/FFFFFF?text=Birthday+01',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'birthday-02',
            category: 'birthday',
            name: 'Birthday 02',
            image: 'https://placehold.co/600x800/FF1493/FFFFFF?text=Birthday+02',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'birthday-03',
            category: 'birthday',
            name: 'Birthday 03',
            image: 'https://placehold.co/600x800/FFB6C1/000000?text=Birthday+03',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'birthday-04',
            category: 'birthday',
            name: 'Birthday 04',
            image: 'https://placehold.co/600x800/FFC0CB/000000?text=Birthday+04',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },

        // ========== TEMA OTHERS ==========
        {
            id: 'bridal-shower',
            category: 'others',
            name: 'Bridal Shower',
            image: 'https://placehold.co/600x800/FFE4E1/8B4513?text=Bridal+Shower',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'walimatussafar',
            category: 'others',
            name: 'Walimatussafar',
            image: 'https://placehold.co/600x800/4169E1/FFFFFF?text=Walimatussafar',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'kajian-islami',
            category: 'others',
            name: 'Kajian Islami',
            image: 'https://placehold.co/600x800/228B22/FFFFFF?text=Kajian+Islami',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'pengukuhan-guru-besar',
            category: 'others',
            name: 'Pengukuhan Guru Besar',
            image: 'https://placehold.co/600x800/2C3E50/FFFFFF?text=Pengukuhan+GB',
            originalPrice: 130000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'wisuda-mahasiswa',
            category: 'others',
            name: 'Wisuda (Mahasiswa)',
            image: 'https://placehold.co/600x800/1E3A8A/FFFFFF?text=Wisuda+Mhs',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'wisuda-kampus',
            category: 'others',
            name: 'Wisuda (Kampus)',
            image: 'https://placehold.co/600x800/1E40AF/FFFFFF?text=Wisuda+Kampus',
            originalPrice: 130000,
            price: 99000,
            demoUrl: null
        },
        {
            id: 'kelulusan-sekolah',
            category: 'others',
            name: 'Kelulusan Sekolah',
            image: 'https://placehold.co/600x800/2563EB/FFFFFF?text=Kelulusan',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'reuni',
            category: 'others',
            name: 'Reuni',
            image: 'https://placehold.co/600x800/DC2626/FFFFFF?text=Reuni',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'kantor-formal',
            category: 'others',
            name: 'Kantor - Formal',
            image: 'https://placehold.co/600x800/1F2937/FFFFFF?text=Kantor+Formal',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'rapat-formal',
            category: 'others',
            name: 'Rapat - Formal',
            image: 'https://placehold.co/600x800/374151/FFFFFF?text=Rapat+Formal',
            originalPrice: 120000,
            price: 89000,
            demoUrl: null
        },
        {
            id: 'formal',
            category: 'others',
            name: 'Formal',
            image: 'https://placehold.co/600x800/4B5563/FFFFFF?text=Formal',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'event-01',
            category: 'others',
            name: 'Event - 01',
            image: 'https://placehold.co/600x800/7C3AED/FFFFFF?text=Event+01',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'event-02',
            category: 'others',
            name: 'Event - 02',
            image: 'https://placehold.co/600x800/8B5CF6/FFFFFF?text=Event+02',
            originalPrice: 110000,
            price: 85000,
            demoUrl: null
        },
        {
            id: 'luxee-elegant-02',
            category: 'others',
            name: 'Luxee Elegant 02',
            image: 'https://placehold.co/600x800/D4AF37/000000?text=Luxee+Elegant+02',
            originalPrice: 130000,
            price: 99000,
            demoUrl: null
        }
    ],

    // ===== HELPER FUNCTION: Get themes by category =====
    getThemesByCategory(categoryId) {
        return this.themes.filter(theme => theme.category === categoryId);
    },

    // ===== HELPER FUNCTION: Get theme by ID =====
    getThemeById(themeId) {
        return this.themes.find(theme => theme.id === themeId);
    }
};

