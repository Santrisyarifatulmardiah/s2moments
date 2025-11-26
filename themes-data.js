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
            id: 'adat-minang',
            category: 'adat',
            name: 'Adat - Minang',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Minang.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/adat-minang/'
        },
        {
            id: 'adat-bali',
            category: 'adat',
            name: 'Adat - Bali',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Bali.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/adat-bali/'
        },
        {
            id: 'adat-jawa',
            category: 'adat',
            name: 'Adat - Jawa',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Jawa.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/adat-jawa/'
        },
        {
            id: 'adat-jawa-batik',
            category: 'adat',
            name: 'Adat - Jawa (Batik)',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Jawa_Batik.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/adat-jawa-batik/'
        },
        {
            id: 'adat-sunda',
            category: 'adat',
            name: 'Adat - Sunda',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Sunda.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/adat-sunda/'
        },
        {
            id: 'adat-batak',
            category: 'adat',
            name: 'Adat - Batak',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Batak.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/adat-batak/'
        },
        {
            id: 'adat-banjar',
            category: 'adat',
            name: 'Adat - Banjar',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Banjar.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/adat-banjar/'
        },
        {
            id: 'adat-betawi',
            category: 'adat',
            name: 'Adat - Betawi',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Betawi.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/adat-betawi/'
        },
        {
            id: 'adat-bugis',
            category: 'adat',
            name: 'Adat - Bugis',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Bugis.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/adat-bugis/'
        },
        {
            id: 'adat-kalimantan',
            category: 'adat',
            name: 'Adat - Kalimantan',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Kalimantan.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/adat-kalimantan/'
        },
        {
            id: 'adat-papua',
            category: 'adat',
            name: 'Adat - Papua',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Papua.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/adat-papua/'
        },

        // ========== TEMA FLORA ==========
        {
            id: 'floral-01',
            category: 'flora',
            name: 'Luxee Floral - 01',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Mockup-Luxee-Floral-01.jpg',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/tema/demo-floral-01/'
        },
        {
            id: 'floral-03',
            category: 'flora',
            name: 'Luxee Floral - 03',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Mockup-Luxee-Floral-03.jpg',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/tema/demo-floral-03/'
        },
        {
            id: 'floral-05',
            category: 'flora',
            name: 'Luxee Floral - 05',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Mockup-Luxee-Floral-05.jpg',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/tema/demo-floral-05/'
        },
        {
            id: 'floral-06',
            category: 'flora',
            name: 'Luxee Floral - 06',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Mockup-Luxee-Floral-06.jpg',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/tema/demo-floral-06/'
        },
        {
            id: 'floral-07',
            category: 'flora',
            name: 'Luxee Floral - 07',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Mockup-Luxee-Floral-07.jpg',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/tema/demo-floral-07/'
        },
        {
            id: 'floral-08',
            category: 'flora',
            name: 'Luxee Floral - 08',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Mockup-Luxee-Floral-08.jpg',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/tema/demo-floral-08/'
        },
        {
            id: 'floral-09',
            category: 'flora',
            name: 'Luxee Floral - 09',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Mockup-Luxee-Floral-09.jpg',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/tema/demo-floral-09/'
        },
        {
            id: 'floral-10',
            category: 'flora',
            name: 'Luxee Floral - 10',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Mockup-Luxee-Floral-10.jpg',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/tema/demo-floral-10/'
        },

        // ========== TEMA WATERCOLOR ==========
        {
            id: 'watercolor-01',
            category: 'watercolor',
            name: 'Luxee Watercolor - 01',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1028.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/tema/watercolor-04/'
        },
        {
            id: 'watercolor-02',
            category: 'watercolor',
            name: 'Luxee Watercolor - 02',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1026.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/tema/watercolor-02/'
        },
        {
            id: 'watercolor-03',
            category: 'watercolor',
            name: 'Luxee Watercolor - 03',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1027.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/tema/watercolor-03/'
        },
        {
            id: 'watercolor-04',
            category: 'watercolor',
            name: 'Luxee Watercolor - 04',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1025.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/tema/watercolor-01/'
        },

        // ========== TEMA MINIMALIST ==========
        {
            id: 'minimalist-01',
            category: 'minimalist',
            name: 'Luxee Minimalist - 01',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Minimalist_01.webp',
            originalPrice: 100000,
            price: 79000,
            demoUrl: 'https://luxee.net/premium/minimalist-01/'
        },
        {
            id: 'minimalist-02',
            category: 'minimalist',
            name: 'Luxee Minimalist - 02',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Minimalist_02.webp',
            originalPrice: 100000,
            price: 79000,
            demoUrl: 'https://luxee.net/premium/minimalist-02/'
        },
        {
            id: 'minimalist-03',
            category: 'minimalist',
            name: 'Luxee Minimalist - 03',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Minimalist_03.webp',
            originalPrice: 100000,
            price: 79000,
            demoUrl: 'https://luxee.net/premium/minimalist-03/'
        },
        {
            id: 'minimalist-04',
            category: 'minimalist',
            name: 'Luxee Minimalist - 04',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Minimalist_04.webp',
            originalPrice: 100000,
            price: 79000,
            demoUrl: 'https://luxee.net/premium/minimalist-04/'
        },
        {
            id: 'minimalist-05',
            category: 'minimalist',
            name: 'Luxee Minimalist - 05',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Minimalist_05.webp',
            originalPrice: 100000,
            price: 79000,
            demoUrl: 'https://luxee.net/premium/minimalist-05/'
        },
        {
            id: 'minimalist-06',
            category: 'minimalist',
            name: 'Luxee Minimalist - 06',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Minimalist_06.webp',
            originalPrice: 100000,
            price: 79000,
            demoUrl: 'https://luxee.net/premium/minimalist-06/'
        },
        {
            id: 'minimalist-07',
            category: 'minimalist',
            name: 'Luxee Minimalist - 07',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Minimalist_07.webp',
            originalPrice: 100000,
            price: 79000,
            demoUrl: 'https://luxee.net/premium/minimalist-07/'
        },
        {
            id: 'minimalist-08',
            category: 'minimalist',
            name: 'Luxee Minimalist - 08',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Minimalist_08.webp',
            originalPrice: 100000,
            price: 79000,
            demoUrl: 'https://luxee.net/premium/minimalist-08/'
        },
        {
            id: 'minimalist-09',
            category: 'minimalist',
            name: 'Luxee Minimalist - 09',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Minimalist_09.webp',
            originalPrice: 100000,
            price: 79000,
            demoUrl: 'https://luxee.net/premium/minimalist-09/'
        },
        {
            id: 'minimalist-10',
            category: 'minimalist',
            name: 'Luxee Minimalist - 10',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Luxee_Minimalist_10.webp',
            originalPrice: 100000,
            price: 79000,
            demoUrl: 'https://luxee.net/premium/minimalist-10/'
        },
        {
            id: 'minimalist-overlay',
            category: 'minimalist',
            name: 'Luxee Overlay Shadow',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/Mockup-Overlay-Shadow.png',
            originalPrice: 100000,
            price: 79000,
            demoUrl: 'https://luxee.net/tema/overlay-shadow-01/'
        },
        {
            id: 'minimalist-elegant-02',
            category: 'minimalist',
            name: 'Luxee Elegant 02',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1029.webp',
            originalPrice: 100000,
            price: 79000,
            demoUrl: 'https://luxee.net/tema/elegant-02/'
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
            name: 'Engagement Day - 01',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1056.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/engagement-day/'
        },
        {
            id: 'engagement-02',
            category: 'engagement',
            name: 'Engagement Day - 02',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1057.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/engagement-day-02/'
        },
        {
            id: 'engagement-03',
            category: 'engagement',
            name: 'Engagement Day - 03',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1058.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/engagement-floral-01/'
        },
        {
            id: 'engagement-04',
            category: 'engagement',
            name: 'Engagement Day - 04',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1059.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/engagement-floral-02/'
        },

        // ========== TEMA ANNIVERSARY ==========
        {
            id: 'anniversary-01',
            category: 'anniversary',
            name: 'Anniversary 01',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1060.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/anniversary-inv-01/'
        },
        {
            id: 'anniversary-02',
            category: 'anniversary',
            name: 'Anniversary 02',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1061.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/anniversary-inv-02/'
        },

        // ========== TEMA AQIQAH ==========
        {
            id: 'aqiqah-01',
            category: 'aqiqah',
            name: 'Aqiqah 01',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1054.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/undangan-tasmiyah-aqiqah-01/'
        },
        {
            id: 'aqiqah-02',
            category: 'aqiqah',
            name: 'Aqiqah 02',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1055.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/undangan-tasmiyah-aqiqah-02/'
        },

        // ========== TEMA KHITAN ==========
        {
            id: 'khitan-01',
            category: 'khitan',
            name: 'Khitan 01',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1051.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/khitan-01/'
        },
        {
            id: 'khitan-02',
            category: 'khitan',
            name: 'Khitan 02',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1052.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/khitan-02/'
        },
        {
            id: 'khitan-03',
            category: 'khitan',
            name: 'Khitan 03',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1053.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/khitan-03/'
        },

        // ========== TEMA BIRTHDAY ==========
        {
            id: 'birthday-01',
            category: 'birthday',
            name: 'Birthday 01',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1062.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/undangan-birthday-17-girl/'
        },
        {
            id: 'birthday-02',
            category: 'birthday',
            name: 'Birthday 02',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1063.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/undangan-birthday-17-boy/'
        },
        {
            id: 'birthday-03',
            category: 'birthday',
            name: 'Birthday 03',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1064.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/undangan-birthday-perempuan/'
        },
        {
            id: 'birthday-04',
            category: 'birthday',
            name: 'Birthday 04',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1065.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/undangan-birthday-pria/'
        },

        // ========== TEMA OTHERS ==========
        {
            id: 'bridal-shower',
            category: 'others',
            name: 'Bridal Shower',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1078.png',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/bridal-shower/'
        },
        {
            id: 'walimatussafar',
            category: 'others',
            name: 'Walimatussafar',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1066.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/undangan-walimatussafar/'
        },
        {
            id: 'kajian-islami',
            category: 'others',
            name: 'Kajian Islami',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1067.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/undangan-kajian-islami/'
        },
        {
            id: 'pengukuhan-guru-besar',
            category: 'others',
            name: 'Pengukuhan Guru Besar',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1068.webp',
            originalPrice: 130000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/undangan-pengukuhan-guru-besar/'
        },
        {
            id: 'wisuda-mahasiswa',
            category: 'others',
            name: 'Wisuda (Mahasiswa)',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1069.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/undangan-wisuda-mahasiswa/'
        },
        {
            id: 'wisuda-kampus',
            category: 'others',
            name: 'Wisuda (Kampus)',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1070.webp',
            originalPrice: 130000,
            price: 99000,
            demoUrl: 'https://luxee.net/premium/undangan-wisuda-kampus/'
        },
        {
            id: 'kelulusan-sekolah',
            category: 'others',
            name: 'Kelulusan Sekolah',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1071.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/undangan-kelulusan-sekolah/'
        },
        {
            id: 'reuni',
            category: 'others',
            name: 'Reuni',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1072.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/reunion-invitation/'
        },
        {
            id: 'kantor-formal',
            category: 'others',
            name: 'Kantor - Formal',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1073.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/undangan-kantor-formal/'
        },
        {
            id: 'rapat-formal',
            category: 'others',
            name: 'Rapat - Formal',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1074.webp',
            originalPrice: 120000,
            price: 89000,
            demoUrl: 'https://luxee.net/premium/undangan-rapat-formal/'
        },
        {
            id: 'event-formal',
            category: 'others',
            name: 'Event - Formal',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1075.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/undangan-event-formal/'
        },
        {
            id: 'event-01',
            category: 'others',
            name: 'Event 01',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1076.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/event-invitation-01/'
        },
        {
            id: 'event-02',
            category: 'others',
            name: 'Event 02',
            image: 'https://s2moments.id/wp-content/uploads/2025/11/1077.webp',
            originalPrice: 110000,
            price: 85000,
            demoUrl: 'https://luxee.net/premium/event-invitation-02/'
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

