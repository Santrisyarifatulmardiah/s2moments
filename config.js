// =================================================================
// KONFIGURASI WEBSITE S2MOMENTS
// =================================================================
// File ini berisi semua data yang bisa Anda edit dengan mudah
// tanpa menyentuh kode HTML atau JavaScript lainnya

const CONFIG = {
    // ===== INFORMASI BISNIS =====
    businessInfo: {
        name: "S2Moments",
        tagline: "Undangan Digital Modern & Elegan",
        description: "Buat undangan pernikahan digital yang modern, elegan, dan interaktif dengan S2Moments. Proses cepat, harga terjangkau, dan banyak pilihan tema eksklusif.",
        logo: "https://i.imgur.com/LX42OMF.png",
        ogImage: "https://i.imgur.com/mx5kbOX.png",
        domain: "https://s2moments.id/"
    },

    // ===== KONTAK =====
    contact: {
        whatsapp: "6281211114522",
        whatsappMessage: "Halo S2Moments, saya tertarik untuk membuat undangan digital.",
        email: "hello@s2moments.id",
        instagram: "https://www.instagram.com/s2moments.id",
        facebook: "https://www.facebook.com/s2moments.id",
        tiktok: "https://www.tiktok.com/@s2moments.id"
    },

    // ===== HERO SECTION =====
    hero: {
        title: "Undangan Digital,<br>Untuk <span class='text-brand-gold'>Momen Istimewa</span>",
        subtitle: "S2Moments hadir untuk menyempurnakan hari bahagia Anda dengan undangan digital yang modern, interaktif, dan mudah dibagikan.",
        image: "https://i.imgur.com/mx5kbOX.png",
        imageAlt: "Contoh Undangan Digital S2Moments",
        stats: {
            invitationsCreated: "5.764+",
            invitationsShared: "254.192+"
        }
    },

    // ===== KEUNGGULAN (WHY CHOOSE US) =====
    whyChooseUs: {
        sectionTitle: "Mengapa Memilih Layanan Kami?",
        sectionSubtitle: "KAMI BERIKAN YANG TERBAIK!",
        features: [
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>`,
                title: "Proses Cepat",
                description: "Siap dalam 1x24 jam."
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>`,
                title: "Terjangkau",
                description: "Harga ramah di kantong."
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" /></svg>`,
                title: "Banyak Tema",
                description: "Pilihan tema eksklusif."
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>`,
                title: "Bebas Revisi",
                description: "Revisi data sepuasnya."
            }
        ]
    },

    // ===== FITUR PRODUK =====
    features: {
        sectionTitle: "Fitur <span class='text-brand-gold'>Lengkap</span>",
        sectionSubtitle: "Semua yang Anda butuhkan untuk undangan digital yang sempurna.",
        list: [
            {
                icon: `<svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
                title: "Countdown Timer"
            },
            {
                icon: `<svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>`,
                title: "Galeri Foto"
            },
            {
                icon: `<svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`,
                title: "Google Maps"
            },
            {
                icon: `<svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>`,
                title: "Buku Tamu"
            },
            {
                icon: `<svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>`,
                title: "Amplop Digital"
            },
            {
                icon: `<svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>`,
                title: "Cerita Cinta"
            },
            {
                icon: `<svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" /></svg>`,
                title: "Musik Latar"
            },
            {
                icon: `<svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
                title: "Konfirmasi Hadir"
            }
        ]
    },

    // ===== TESTIMONI =====
    testimonials: {
        sectionTitle: "Apa Kata <span class='text-brand-gold'>Mereka?</span>",
        sectionSubtitle: "Ribuan pasangan telah mempercayakan momen spesial mereka kepada kami.",
        list: [
            {
                name: "Riedho & Silvi",
                avatar: "https://i.imgur.com/rELTAdd.jpeg",
                rating: 5,
                text: "Prosesnya cepet banget dan hasilnya super elegan! Semua tamu muji undangannya. Adminnya juga ramah dan sabar banget jawabin semua pertanyaan. Recommended!"
            },
            {
                name: "Makbul & Layla",
                avatar: "https://i.imgur.com/R1HgFYU.jpeg",
                rating: 5,
                text: "Gak nyangka dengan harga segitu bisa dapet undangan sekeren ini. Fiturnya lengkap, desainnya modern. Puas banget sama layanan S2Moments!"
            },
            {
                name: "Rasca & Salsa",
                avatar: "https://i.imgur.com/C6aDRb0.jpeg",
                rating: 5,
                text: "Awalnya ragu pakai undangan digital, tapi S2Moments bikin semuanya jadi gampang. Bisa revisi data berkali-kali tanpa tambahan biaya. Terima kasih banyak!"
            }
        ]
    },

    // ===== FAQ =====
    faq: {
        sectionTitle: "Tanya <span class='text-brand-gold'>Jawab</span>",
        sectionSubtitle: "Temukan jawaban untuk pertanyaan yang sering diajukan.",
        list: [
            {
                question: "Berapa lama proses pembuatannya?",
                answer: "Proses pembuatan sangat cepat! Undangan Anda akan siap dalam waktu maksimal 1x24 jam setelah semua data kami terima dengan lengkap."
            },
            {
                question: "Apakah saya bisa revisi data?",
                answer: "Tentu saja! Kami memberikan kebebasan revisi data minor (seperti salah ketik nama, waktu, atau tempat) sampai Anda merasa puas, tanpa biaya tambahan."
            },
            {
                question: "Bisakah saya menggunakan lagu sendiri?",
                answer: "Tentu! Anda bisa me-request lagu favorit Anda untuk dijadikan musik latar pada undangan, selama lagu tersebut tersedia di platform seperti YouTube atau Spotify."
            },
            {
                question: "Berapa lama undangan akan aktif?",
                answer: "Undangan Anda akan aktif selama 1 tahun penuh. Anda tidak perlu khawatir undangan akan nonaktif sebelum atau sesaat setelah acara selesai."
            },
            {
                question: "Apakah bisa ganti tema setelah undangan jadi?",
                answer: "Penggantian tema setelah undangan selesai akan dikenakan biaya tambahan. Pastikan Anda memilih tema yang paling disukai dari awal, ya!"
            },
            {
                question: "Bagaimana cara saya membagikan undangan?",
                answer: "Sangat mudah! Anda akan mendapatkan sebuah link unik (contoh: s2moments.id/nama-pasangan) yang bisa langsung Anda salin dan bagikan ke seluruh tamu melalui WhatsApp, media sosial, atau platform lainnya."
            },
            {
                question: "Apakah ada batasan jumlah tamu yang bisa diundang?",
                answer: "Tidak ada batasan! Anda bisa mengundang sebanyak apapun tamu yang Anda inginkan. Undangan digital kami dapat diakses oleh unlimited jumlah tamu."
            },
            {
                question: "Apakah bisa menambahkan foto pre-wedding atau foto pasangan?",
                answer: "Tentu bisa! Anda dapat menambahkan galeri foto pre-wedding, foto pasangan, atau foto keluarga. Kami akan membantu mengatur layout foto agar terlihat menarik dan elegan."
            },
            {
                question: "Apakah undangan bisa diakses di semua perangkat?",
                answer: "Ya! Undangan digital kami responsive dan dapat diakses dengan sempurna di semua perangkat - smartphone Android/iOS, tablet, laptop, dan desktop dengan berbagai ukuran layar."
            },
        ]
    },

    // ===== PAYMENT METHODS =====
    paymentMethods: {
        sectionTitle: "Metode <span class='text-brand-gold'>Pembayaran</span>",
        sectionSubtitle: "Kami menerima berbagai metode pembayaran untuk kemudahan Anda",
        methods: [
            {
                name: "BCA",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
            },
            {
                name: "Mandiri",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png"
            },
            {
                name: "BRI",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_2020.svg/2560px-BRI_2020.svg.png"
            },
            {
                name: "BNI",
                logo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Bank_Negara_Indonesia_logo_%282004%29.svg "
            },
            {
                name: "BSI",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/2560px-Bank_Syariah_Indonesia.svg.png"
            },
            {
                name: "BTN",
                logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/BTN_2024.svg"
            },
            {
                name: "Permata",
                logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Permata_Bank_%282024%29.svg"
            },
            {
                name: "CIMB Niaga",
                logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/CIMB_Niaga_logo.svg"
            },
            {
                name: "Danamon",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Danamon.svg"
            },
            {
                name: "Bank Mega",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Bank_Mega_2013.svg"
            },
            {
                name: "GoPay",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png"
            },
            {
                name: "OVO",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png"
            },
            {
                name: "Dana",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/2560px-Logo_dana_blue.svg.png"
            },
            {
                name: "ShopeePay",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopee_logo.svg"
            },
            {
                name: "LinkAja",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/LinkAja.svg/2560px-LinkAja.svg.png"
            },
            {
                name: "QRIS",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/QRIS_logo.svg/2560px-QRIS_logo.svg.png"
            }
        ]
    },

    // ===== CONTACT =====
    contactSection: {
        sectionTitle: "Hubungi <span class='text-brand-gold'>Kami</span>",
        sectionSubtitle: "Punya pertanyaan? Jangan ragu untuk menghubungi kami.",
        mascot: "https://i.imgur.com/Nv0KmH0.png",
        description: "Cara tercepat untuk menghubungi kami adalah melalui WhatsApp."
    }
};

