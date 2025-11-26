// =================================================================
// COMPONENTS - Reusable UI Components
// =================================================================
// File ini berisi fungsi-fungsi untuk generate komponen HTML
// secara dinamis dari data di config.js dan themes-data.js

const Components = {
    
    // ===== HELPER: Format Rupiah =====
    formatRupiah(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    },

    // ===== HELPER: Generate WhatsApp Link =====
    generateWhatsAppLink(message = '') {
        const phone = CONFIG.contact.whatsapp;
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${phone}?text=${encodedMessage}`;
    },

    // ===== HERO SECTION =====
    renderHero() {
        return `
            <section id="home" class="relative overflow-hidden pt-6 pb-6 sm:pt-8 sm:pb-8 md:pt-10 md:pb-10 lg:pt-12 lg:pb-12">
                <div class="absolute inset-0 z-0 opacity-30">
                    <div class="absolute -top-1/4 left-0 w-3/4 h-3/4 rounded-full bg-gradient-to-br from-yellow-200 via-amber-300 to-yellow-400 opacity-40 blur-3xl"></div>
                    <div class="absolute -bottom-1/4 right-0 w-3/4 h-3/4 rounded-full bg-gradient-to-tl from-amber-200 via-yellow-300 to-amber-400 opacity-40 blur-3xl"></div>
                </div>

                <div class="container relative z-10 mx-auto w-full px-4 sm:px-6">
                    <!-- Logo di Kiri Atas Section -->
                    <div class="mb-8 sm:mb-10 md:mb-12 scroll-animate">
                        <a href="#home" class="inline-flex items-center gap-2 sm:gap-3 group">
                            <div class="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100/50 hover:border-brand-gold/40">
                                <img src="${CONFIG.businessInfo.logo}" alt="${CONFIG.businessInfo.name} Logo" class="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300" loading="eager">
                                <span class="text-sm sm:text-base md:text-lg font-bold text-brand-gold tracking-wide group-hover:text-brand-gold-dark transition-colors">${CONFIG.businessInfo.name}</span>
                            </div>
                        </a>
                    </div>

                    <div class="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
                        <div class="text-center lg:text-left">
                            <h1 class="text-2xl font-bold leading-tight text-brand-dark font-serif sm:text-4xl md:text-5xl lg:text-6xl scroll-animate" data-delay="0.1s">
                                ${CONFIG.hero.title}
                            </h1>
                            <p class="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base md:text-lg lg:mx-0 scroll-animate" data-delay="0.2s">
                                ${CONFIG.hero.subtitle}
                            </p>
                            
                            <div class="mt-4 sm:mt-6 flex items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-10 text-center scroll-animate" data-delay="0.25s">
                                <div>
                                    <p class="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brand-gold">${CONFIG.hero.stats.invitationsCreated}</p>
                                    <p class="mt-1 text-xs sm:text-sm text-brand-dark">Undangan Dibuat</p>
                                </div>
                                <div class="h-10 sm:h-12 w-px bg-gray-300"></div>
                                <div>
                                    <p class="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brand-gold">${CONFIG.hero.stats.invitationsShared}</p>
                                    <p class="mt-1 text-xs sm:text-sm text-brand-dark">Undangan Dibagikan</p>
                                </div>
                            </div>
    
                            <div class="mt-4 sm:mt-6 flex flex-col justify-center gap-3 sm:gap-4 sm:flex-row lg:justify-start scroll-animate" data-delay="0.3s">
                                <a href="${this.generateWhatsAppLink(CONFIG.contact.whatsappMessage)}" target="_blank" rel="noopener noreferrer" class="hero-btn-primary group flex items-center justify-center gap-2 sm:gap-3 rounded-xl px-6 sm:px-8 py-3.5 sm:py-4 font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95">
                                    <svg class="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                    <span class="text-sm sm:text-base">Pesan Sekarang</span>
                                    <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                </a>
                                <a href="#themes" class="hero-btn-secondary group flex items-center justify-center gap-2 sm:gap-3 rounded-xl border-2 border-brand-gold/30 bg-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-brand-dark shadow-xl transition-all duration-300 hover:bg-brand-gold/5 hover:border-brand-gold hover:shadow-2xl hover:scale-105 active:scale-95">
                                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold transition-all group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
                                    <span class="text-sm sm:text-base">Lihat Pilihan Tema</span>
                                </a>
                            </div>
                        </div>
                        <div class="mt-6 sm:mt-8 lg:mt-0 scroll-animate" data-delay="0.4s">
                            <img src="${CONFIG.hero.image}" alt="${CONFIG.hero.imageAlt}" class="w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-full" width="900" height="1200" decoding="async" fetchpriority="high">
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // ===== WHY CHOOSE US SECTION =====
    renderWhyChooseUs() {
        // Variasi gradient gold untuk setiap keunggulan - Konsisten dengan tema gold
        const gradients = [
            'from-amber-300 via-yellow-400 to-amber-400',      // Lightning - Proses Cepat
            'from-yellow-400 via-amber-400 to-yellow-500',     // Money - Terjangkau
            'from-amber-400 via-yellow-500 to-amber-500',      // Palette - Banyak Tema
            'from-yellow-500 via-amber-500 to-yellow-600'      // Badge - Bebas Revisi
        ];

        const features = CONFIG.whyChooseUs.features.map((feature, index) => `
            <div class="why-choose-card scroll-animate card-hover-effect rounded-2xl border border-gray-100 bg-white p-4 text-center sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 grid-item-fix" data-delay="${index * 0.1}s">
                <div class="why-icon-wrapper mx-auto mb-4 flex h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[index]} shadow-md transform hover:scale-110 hover:rotate-3 transition-all duration-300">
                    ${feature.icon}
                </div>
                <div class="flex flex-col justify-center">
                    <h3 class="font-bold text-brand-dark text-sm sm:text-base md:text-lg">${feature.title}</h3>
                    <p class="mt-1 text-xs sm:text-sm text-gray-600">${feature.description}</p>
                </div>
            </div>
        `).join('');

        return `
            <section class="py-12 sm:py-16 bg-section-alt">
                <div class="container mx-auto px-4 sm:px-6">
                     <div class="text-center mb-10 scroll-animate">
                        <h3 class="text-xs sm:text-sm font-semibold tracking-wider text-brand-gold uppercase">${CONFIG.whyChooseUs.sectionSubtitle}</h3>
                        <h2 class="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark">${CONFIG.whyChooseUs.sectionTitle}</h2>
                    </div>
                    <div class="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 sm:gap-6">
                        ${features}
                    </div>
                </div>
            </section>
        `;
    },

    // ===== FEATURES SECTION =====
    renderFeatures() {
        // Variasi gradient gold untuk setiap fitur - Semua konsisten dengan palet gold
        const gradients = [
            'from-yellow-300 via-amber-300 to-yellow-400',     // Light gold shimmer
            'from-yellow-400 via-amber-400 to-yellow-500',     // Classic bright gold
            'from-amber-400 via-yellow-500 to-amber-500',      // Rich warm gold
            'from-yellow-500 via-amber-500 to-yellow-600',     // Deep gold
            'from-amber-300 via-yellow-400 to-amber-400',      // Soft gold
            'from-yellow-400 via-amber-500 to-yellow-600',     // Vibrant gold
            'from-amber-400 via-yellow-400 to-amber-500',      // Balanced gold
            'from-yellow-500 via-amber-600 to-yellow-600'      // Intense gold
        ];

        const featureList = CONFIG.features.list.map((feature, index) => `
            <div class="feature-card text-center p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 scroll-animate shadow-lg hover:shadow-2xl transition-all duration-300" data-delay="${index * 0.1}s">
                <div class="feature-icon-wrapper mb-4 mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-2xl flex items-center justify-center transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md">
                ${feature.icon}
                </div>
                <h3 class="text-xs sm:text-base md:text-lg font-bold text-brand-dark">${feature.title}</h3>
            </div>
        `).join('');

        return `
            <section id="features" class="py-12 sm:py-16">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="text-center mb-10 scroll-animate">
                        <h2 class="text-3xl sm:text-4xl font-bold font-serif text-brand-dark">${CONFIG.features.sectionTitle}</h2>
                        <p class="mt-2">${CONFIG.features.sectionSubtitle}</p>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        ${featureList}
                    </div>
                </div>
            </section>
        `;
    },

    // ===== THEME CARD =====
    renderThemeCard(theme) {
        const waMessage = `Halo, saya tertarik dengan tema ${theme.name}`;
        
        // Tombol Demo: jika ada demoUrl, buka link; jika tidak, tampilkan modal
        const demoButton = theme.demoUrl 
            ? `<a href="${theme.demoUrl}" target="_blank" rel="noopener noreferrer" class="theme-demo-btn group flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-semibold py-2.5 px-3 text-xs sm:text-sm rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                <span>Demo</span>
            </a>`
            : `<button @click="showDemoModal = true" class="theme-demo-btn group flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-semibold py-2.5 px-3 text-xs sm:text-sm rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                <span>Demo</span>
            </button>`;
        
        return `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover-effect border border-gray-100">
                <div class="overflow-hidden theme-card-image">
                    <img src="${theme.image}" alt="Tema ${theme.name}" class="w-full h-full object-cover object-top transition-transform duration-500" loading="lazy">
                </div>
                <div class="p-3 sm:p-4 md:p-5 text-center">
                    <h3 class="text-sm sm:text-base md:text-lg font-bold text-brand-dark truncate">${theme.name}</h3>
                    <p class="text-xs text-gray-400 line-through mt-1">${this.formatRupiah(theme.originalPrice)}</p>
                    <p class="text-base sm:text-lg md:text-xl font-bold text-brand-gold mb-3">${this.formatRupiah(theme.price)}</p>
                    <div class="flex gap-2">
                        ${demoButton}
                        <a href="${this.generateWhatsAppLink(waMessage)}" target="_blank" rel="noopener noreferrer" class="theme-order-btn group flex-1 flex items-center justify-center gap-1.5 btn-gradient-gold font-semibold py-2.5 px-3 text-xs sm:text-sm rounded-lg transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg">
                            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            <span>Pesan</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    },

    // ===== CATALOG SECTION =====
    renderCatalog() {
        return `
            <section id="catalog" class="py-10 sm:py-14 md:py-16 bg-section-alt" x-data="{ activeCatalog: 'wedding', activeTab: 'luxe' }">
                <div class="container mx-auto px-4 sm:px-6">
                    <!-- Section Header -->
                    <div class="text-center mb-8 sm:mb-10 scroll-animate">
                        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-brand-dark">Pilih <span class="text-brand-gold">Katalog</span></h2>
                        <p class="mt-2 text-sm sm:text-base text-gray-600">Pilih katalog sesuai kebutuhan acara Anda</p>
                    </div>

                    <!-- Catalog Buttons -->
                    <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-2xl mx-auto scroll-animate">
                        <!-- Katalog Wedding Button -->
                        <button @click="activeCatalog = 'wedding'; activeTab = 'luxe'"
                                :class="activeCatalog === 'wedding' ? 'bg-gradient-to-br from-yellow-400 via-amber-400 to-amber-500 text-white shadow-lg' : 'bg-white text-brand-dark border border-amber-200 hover:border-brand-gold shadow-md hover:shadow-lg'"
                                class="group relative flex-1 overflow-hidden rounded-xl px-4 py-3 sm:px-5 sm:py-4 transition-all duration-300 hover:scale-[1.02] active:scale-95">
                            <!-- Background decoration -->
                            <div class="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <!-- Content -->
                            <div class="relative flex items-center justify-center gap-3">
                                <!-- Icon -->
                                <div :class="activeCatalog === 'wedding' ? 'bg-white/20' : 'bg-gradient-to-br from-yellow-400 to-amber-500'" class="inline-flex p-2 rounded-lg">
                                    <svg class="w-5 h-5 sm:w-6 sm:h-6" :class="activeCatalog === 'wedding' ? 'text-white' : 'text-white'" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                </div>
                                <!-- Text -->
                                <div class="text-left">
                                    <h3 class="text-base sm:text-lg font-bold font-serif">Katalog Wedding</h3>
                                    <p class="text-xs sm:text-sm opacity-80 hidden sm:block">Acara pernikahan</p>
                                </div>
                            </div>
                        </button>

                        <!-- Katalog Non-Wedding Button -->
                        <button @click="activeCatalog = 'nonwedding'; activeTab = 'engagement'"
                                :class="activeCatalog === 'nonwedding' ? 'bg-gradient-to-br from-yellow-400 via-amber-400 to-amber-500 text-white shadow-lg' : 'bg-white text-brand-dark border border-amber-200 hover:border-brand-gold shadow-md hover:shadow-lg'"
                                class="group relative flex-1 overflow-hidden rounded-xl px-4 py-3 sm:px-5 sm:py-4 transition-all duration-300 hover:scale-[1.02] active:scale-95">
                            <!-- Background decoration -->
                            <div class="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <!-- Content -->
                            <div class="relative flex items-center justify-center gap-3">
                                <!-- Icon -->
                                <div :class="activeCatalog === 'nonwedding' ? 'bg-white/20' : 'bg-gradient-to-br from-yellow-400 to-amber-500'" class="inline-flex p-2 rounded-lg">
                                    <svg class="w-5 h-5 sm:w-6 sm:h-6" :class="activeCatalog === 'nonwedding' ? 'text-white' : 'text-white'" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
                                    </svg>
                                </div>
                                <!-- Text -->
                                <div class="text-left">
                                    <h3 class="text-base sm:text-lg font-bold font-serif">Katalog Non-Wedding</h3>
                                    <p class="text-xs sm:text-sm opacity-80 hidden sm:block">Acara lainnya</p>
                                </div>
                            </div>
                        </button>
                    </div>

                    <!-- Category Tabs - Wedding -->
                    <div x-show="activeCatalog === 'wedding'" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform scale-95" x-transition:enter-end="opacity-100 transform scale-100">
                        <div class="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 scroll-animate overflow-x-auto pb-2">
                            <button @click="activeTab = 'luxe'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === 'luxe', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== 'luxe'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">Tema Luxe</button>
                            <button @click="activeTab = 'adat'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === 'adat', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== 'adat'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">Tema Adat</button>
                            <button @click="activeTab = 'flora'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === 'flora', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== 'flora'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">Floral</button>
                            <button @click="activeTab = 'watercolor'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === 'watercolor', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== 'watercolor'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">Tema Watercolor</button>
                            <button @click="activeTab = 'minimalist'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === 'minimalist', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== 'minimalist'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">Tema Minimalist</button>
                            <button @click="activeTab = 'serba70k'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === 'serba70k', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== 'serba70k'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">Tema SERBA 70K</button>
                        </div>
                    </div>

                    <!-- Category Tabs - Non-Wedding -->
                    <div x-show="activeCatalog === 'nonwedding'" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform scale-95" x-transition:enter-end="opacity-100 transform scale-100">
                        <div class="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 scroll-animate overflow-x-auto pb-2">
                            <button @click="activeTab = 'engagement'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === 'engagement', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== 'engagement'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">Tema Engagement</button>
                            <button @click="activeTab = 'anniversary'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === 'anniversary', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== 'anniversary'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">Tema Anniversary</button>
                            <button @click="activeTab = 'aqiqah'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === 'aqiqah', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== 'aqiqah'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">Tema Aqiqah</button>
                            <button @click="activeTab = 'khitan'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === 'khitan', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== 'khitan'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">Tema Khitan</button>
                            <button @click="activeTab = 'birthday'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === 'birthday', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== 'birthday'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">Tema Birthday</button>
                            <button @click="activeTab = 'others'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === 'others', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== 'others'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">Tema Others</button>
                        </div>
                    </div>

                    <!-- Theme Cards Grid -->
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                        ${this.renderCatalogThemes()}
                    </div>
                </div>
            </section>
        `;
    },

    // ===== CATALOG THEMES RENDERER =====
    renderCatalogThemes() {
        const allCategories = ['luxe', 'adat', 'flora', 'watercolor', 'minimalist', 'serba70k', 'engagement', 'anniversary', 'aqiqah', 'khitan', 'birthday', 'others'];

        return allCategories.map(catId => {
            const themes = THEMES_DATA.getThemesByCategory(catId);
            const themeCards = themes.map(theme => this.renderThemeCard(theme)).join('');

            return `
                <template x-if="activeTab === '${catId}'">
                    <div class="contents">
                        ${themeCards}
                    </div>
                </template>
            `;
        }).join('');
    },

    // ===== THEMES SECTION =====
    renderThemes() {
        const categories = THEMES_DATA.categories.map(cat => `
            <button @click="activeTab = '${cat.id}'" :class="{'btn-gradient-gold text-white shadow-md': activeTab === '${cat.id}', 'bg-white text-brand-dark hover:bg-gray-100': activeTab !== '${cat.id}'}" class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm whitespace-nowrap">${cat.label}</button>
        `).join('');

        const themesByCategory = THEMES_DATA.categories.map(cat => {
            // Jika kategori adalah 'all', tampilkan semua tema
            const themes = cat.id === 'all' 
                ? THEMES_DATA.themes 
                : THEMES_DATA.getThemesByCategory(cat.id);
            
            const themeCards = themes.map(theme => this.renderThemeCard(theme)).join('');
            
            return `
                <template x-if="activeTab === '${cat.id}'">
                    <div class="contents">
                        ${themeCards}
                    </div>
                </template>
            `;
        }).join('');

        return `
            <section id="themes" class="py-10 sm:py-14 md:py-16 bg-section-alt">
                <div class="container mx-auto px-4 sm:px-6" x-data="{ activeTab: 'luxe' }">
                    <div class="text-center mb-6 sm:mb-8 scroll-animate">
                        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-brand-dark">Pilihan <span class="text-brand-gold">Tema</span></h2>
                        <p class="mt-2 text-sm sm:text-base">Pilih dari berbagai kategori tema yang telah kami siapkan.</p>
                    </div>
                    
                    <div class="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 scroll-animate overflow-x-auto pb-2">
                        ${categories}
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                        ${themesByCategory}
                    </div>
                </div>
            </section>
        `;
    },

    // ===== TESTIMONIAL CARD =====
    renderTestimonialCard(testimonial, index) {
        const stars = Array(testimonial.rating).fill(this.icon.star).join('');

        return `
            <div class="group relative bg-gradient-to-br from-white via-amber-50/30 to-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl scroll-animate transition-all duration-500 hover:-translate-y-2 border border-amber-100 hover:border-brand-gold/40" data-delay="${index * 0.1}s">
                <!-- Decorative quote icon -->
                <div class="absolute top-4 right-4 text-amber-300/40 group-hover:text-brand-gold/50 transition-colors duration-300">
                    <svg class="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                </div>

                <!-- Content -->
                <div class="relative z-10">
                    <!-- Avatar and name -->
                    <div class="flex items-center mb-5">
                        <div class="relative">
                            <div class="absolute inset-0 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <img class="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-amber-50 shadow-lg" src="${testimonial.avatar}" alt="Avatar ${testimonial.name}" loading="lazy">
                        </div>
                        <div class="ml-4">
                            <p class="font-bold text-lg text-brand-dark group-hover:text-brand-gold transition-colors duration-300">${testimonial.name}</p>
                            <div class="flex text-amber-400 mt-1.5" aria-label="${testimonial.rating} dari 5 bintang">
                                ${stars}
                            </div>
                        </div>
                    </div>

                    <!-- Testimonial text -->
                    <p class="text-sm sm:text-base text-gray-700 leading-relaxed italic relative">
                        <span class="text-brand-gold text-xl font-serif mr-1">"</span>${testimonial.text}<span class="text-brand-gold text-xl font-serif ml-1">"</span>
                    </p>
                </div>

                <!-- Decorative corner accent -->
                <div class="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-amber-200/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        `;
    },

    // ===== TESTIMONIALS SECTION =====
    renderTestimonials() {
        const testimonials = CONFIG.testimonials.list.map((t, i) => this.renderTestimonialCard(t, i)).join('');

        return `
            <section id="testimonials" class="relative py-12 sm:py-20 overflow-hidden">
                <!-- Background decoration -->
                <div class="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-amber-50/30"></div>
                <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-amber-300/20 rounded-full blur-3xl"></div>
                <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-amber-200/20 to-yellow-300/20 rounded-full blur-3xl"></div>

                <div class="relative container mx-auto px-4 sm:px-6">
                    <!-- Section header -->
                    <div class="text-center mb-12 sm:mb-16 scroll-animate">
                        <div class="inline-flex items-center justify-center mb-4">
                            <div class="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold mr-3"></div>
                            <svg class="w-6 h-6 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            <div class="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold ml-3"></div>
                        </div>
                        <h2 class="text-3xl sm:text-5xl font-bold font-serif text-brand-dark mb-4">${CONFIG.testimonials.sectionTitle}</h2>
                        <p class="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">${CONFIG.testimonials.sectionSubtitle}</p>
                    </div>

                    <!-- Testimonials grid -->
                    <div class="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                        ${testimonials}
                    </div>

                    <!-- Bottom decoration -->
                    <div class="text-center mt-12 sm:mt-16 scroll-animate">
                        <div class="inline-flex items-center space-x-2 text-brand-gold">
                            <svg class="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <span class="text-sm font-medium">100% Kepuasan Pelanggan</span>
                            <svg class="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // ===== PAYMENT METHODS SECTION =====
    renderPaymentMethods() {
        return `
            <section id="payment-methods" class="py-8 sm:py-10">
                <div class="container mx-auto px-4 sm:px-6">
                    <!-- Section header -->
                    <div class="text-center mb-4 sm:mb-6">
                        <h3 class="text-lg sm:text-xl font-bold text-brand-dark mb-1">
                            ${CONFIG.paymentMethods.sectionTitle}
                        </h3>
                        <p class="text-xs sm:text-sm text-gray-600">${CONFIG.paymentMethods.sectionSubtitle}</p>
                    </div>

                    <!-- Payment Methods Image -->
                    <div class="max-w-4xl mx-auto">
                        <img src="${CONFIG.paymentMethods.image}"
                             alt="${CONFIG.paymentMethods.imageAlt}"
                             class="w-full h-auto"
                             loading="lazy">
                    </div>
                </div>
            </section>
        `;
    },

    // ===== FAQ ITEM =====
    renderFaqItem(faq, index) {
        return `
            <div class="group relative bg-gradient-to-br from-white via-amber-50/20 to-white rounded-2xl shadow-lg hover:shadow-2xl scroll-animate transition-all duration-500 border border-amber-100 hover:border-amber-300/60 overflow-hidden" data-delay="${index * 0.1}s">
                <!-- Decorative corner accent -->
                <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <!-- Question icon badge -->
                <div class="absolute left-4 top-4 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-amber-400 to-amber-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>

                <button @click="openFaq === ${index + 1} ? openFaq = null : openFaq = ${index + 1}" class="relative w-full flex justify-between items-center p-4 pl-16 pr-6 sm:p-5 sm:pl-20 sm:pr-8 text-left group-hover:bg-white/50 transition-colors duration-300">
                    <span class="font-bold text-sm sm:text-base text-brand-dark group-hover:text-brand-gold transition-colors duration-300 pr-4">${faq.question}</span>
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-yellow-400 group-hover:to-amber-500 flex items-center justify-center transition-all duration-300 shadow-sm">
                        <svg class="w-5 h-5 transform transition-all duration-300 text-gray-600 group-hover:text-white" :class="{'rotate-180': openFaq === ${index + 1}}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </button>

                <div x-show="openFaq === ${index + 1}" x-collapse class="px-4 pb-5 pt-0 pl-16 pr-6 sm:px-5 sm:pb-6 sm:pl-20 sm:pr-8">
                    <div class="relative pl-4 border-l-4 border-amber-300/50">
                        <p class="text-sm sm:text-base text-gray-700 leading-relaxed">${faq.answer}</p>
                    </div>
                </div>
            </div>
        `;
    },

    // ===== FAQ SECTION =====
    renderFaq() {
        const faqItems = CONFIG.faq.list.map((faq, i) => this.renderFaqItem(faq, i)).join('');

        return `
            <section id="faq" class="relative py-12 sm:py-20 overflow-hidden">
                <!-- Background decoration -->
                <div class="absolute inset-0 bg-gradient-to-b from-white via-amber-50/20 to-white"></div>
                <div class="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-amber-300/20 rounded-full blur-3xl"></div>
                <div class="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tl from-amber-200/20 to-yellow-300/20 rounded-full blur-3xl"></div>

                <div class="relative container mx-auto px-4 sm:px-6" x-data="{ openFaq: null }">
                    <!-- Section header -->
                    <div class="text-center mb-10 sm:mb-14 scroll-animate">
                        <div class="inline-flex items-center justify-center mb-4">
                            <div class="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold mr-3"></div>
                            <svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold ml-3"></div>
                        </div>
                        <h2 class="text-3xl sm:text-5xl font-bold font-serif text-brand-dark mb-3">${CONFIG.faq.sectionTitle}</h2>
                        <p class="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">${CONFIG.faq.sectionSubtitle}</p>
                    </div>

                    <!-- FAQ Items -->
                    <div class="max-w-4xl mx-auto space-y-4 sm:space-y-5">
                        ${faqItems}
                    </div>
                </div>
            </section>
        `;
    },

    // ===== CONTACT SECTION =====
    renderContact() {
        return `
            <section id="contact" class="py-10 sm:py-12 md:py-16">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="text-center mb-6 sm:mb-8 scroll-animate">
                        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-brand-dark">${CONFIG.contactSection.sectionTitle}</h2>
                        <p class="mt-2 text-sm sm:text-base">${CONFIG.contactSection.sectionSubtitle}</p>
                    </div>
                    <div class="max-w-4xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg scroll-animate" data-delay="0.2s">
                        <div class="grid md:grid-cols-2 gap-6 items-center">
                            <div class="text-center order-2 md:order-1">
                                <img src="${CONFIG.contactSection.mascot}" alt="S2Moments Mascot" class="inline-block h-32 sm:h-40 md:h-56" loading="lazy">
                            </div>
                            <div class="text-center md:text-left order-1 md:order-2">
                                <p class="text-sm sm:text-base md:text-lg">${CONFIG.contactSection.description}</p>
                                <div class="mt-4">
                                    <a href="${this.generateWhatsAppLink('Halo S2Moments, saya punya pertanyaan.')}" target="_blank" rel="noopener noreferrer" class="btn-gradient-gold inline-flex items-center justify-center gap-2 rounded-lg py-3 px-6 sm:px-8 font-bold shadow-lg transition-all duration-300 text-sm sm:text-base">
                                        ${this.icon.whatsapp}
                                        <span class="hidden xs:inline">Hubungi via</span> WhatsApp
                                    </a>
                                </div>
                                <div class="mt-4 sm:mt-6">
                                    <p class="text-sm sm:text-base">Atau temukan kami di media sosial:</p>
                                    <div class="flex justify-center md:justify-start space-x-4 sm:space-x-6 mt-3 sm:mt-4">
                                        <a href="${CONFIG.contact.instagram}" target="_blank" rel="noopener noreferrer" class="text-brand-dark hover:text-brand-gold transition p-2" aria-label="Kunjungi Instagram S2Moments">${this.icon.instagram}</a>
                                        <a href="${CONFIG.contact.facebook}" target="_blank" rel="noopener noreferrer" class="text-brand-dark hover:text-brand-gold transition p-2" aria-label="Kunjungi Facebook S2Moments">${this.icon.facebook}</a>
                                        <a href="${CONFIG.contact.tiktok}" target="_blank" rel="noopener noreferrer" class="text-brand-dark hover:text-brand-gold transition p-2" aria-label="Kunjungi TikTok S2Moments">${this.icon.tiktok}</a>
                                        <a href="mailto:${CONFIG.contact.email}" class="text-brand-dark hover:text-brand-gold transition p-2" aria-label="Kirim email ke S2Moments">${this.icon.email}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // ===== FOOTER =====
    renderFooter() {
        return `
            <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
                <!-- Decorative Elements -->
                <div class="absolute inset-0 opacity-10">
                    <div class="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full blur-3xl"></div>
                    <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-500 to-yellow-600 rounded-full blur-3xl"></div>
                </div>
                
                <!-- MOBILE LAYOUT (Simple & Compact) -->
                <div class="md:hidden container max-w-6xl mx-auto px-4 py-8 relative z-10">
                    <!-- Brand -->
                    <div class="text-center mb-6">
                        <div class="flex items-center justify-center gap-2 mb-3">
                            <img src="${CONFIG.businessInfo.logo}" alt="${CONFIG.businessInfo.name}" class="h-10 w-10">
                            <h3 class="text-xl font-bold font-serif text-brand-gold">${CONFIG.businessInfo.name}</h3>
                        </div>
                        <p class="text-sm text-gray-300">${CONFIG.businessInfo.tagline}</p>
                    </div>
                    
                    <!-- Quick Links (Horizontal on Mobile) -->
                    <div class="flex flex-wrap justify-center gap-3 mb-6 text-sm">
                        <a href="#home" class="text-gray-300 hover:text-brand-gold transition-colors">Beranda</a>
                        <span class="text-gray-600">•</span>
                        <a href="#features" class="text-gray-300 hover:text-brand-gold transition-colors">Fitur</a>
                        <span class="text-gray-600">•</span>
                        <a href="#themes" class="text-gray-300 hover:text-brand-gold transition-colors">Tema</a>
                        <span class="text-gray-600">•</span>
                        <a href="#faq" class="text-gray-300 hover:text-brand-gold transition-colors">FAQ</a>
                    </div>
                    
                    <!-- Copyright -->
                    <div class="text-center border-t border-gray-700 pt-4">
                        <p class="text-xs text-gray-500">
                            &copy; <span class="current-year"></span> ${CONFIG.businessInfo.name}. All Rights Reserved.
                        </p>
                    </div>
                </div>
                
                <!-- DESKTOP LAYOUT (Full Featured) -->
                <div class="hidden md:block container max-w-6xl mx-auto px-6 py-16 relative z-10">
                    <!-- Main Footer Content -->
                    <div class="grid md:grid-cols-3 gap-12 mb-12">
                        <!-- Brand Column -->
                        <div class="text-left">
                            <div class="flex items-center gap-3 mb-4">
                                <img src="${CONFIG.businessInfo.logo}" alt="${CONFIG.businessInfo.name}" class="h-12 w-12">
                                <h3 class="text-2xl font-bold font-serif text-brand-gold">${CONFIG.businessInfo.name}</h3>
                            </div>
                            <p class="text-base text-gray-300 leading-relaxed max-w-xs">${CONFIG.businessInfo.tagline}</p>
                        </div>
                        
                        <!-- Quick Links Column -->
                        <div class="text-center">
                            <h4 class="text-lg font-bold mb-4 text-brand-gold">Menu Cepat</h4>
                            <ul class="space-y-3">
                                <li><a href="#home" class="text-base text-gray-300 hover:text-brand-gold transition-colors duration-300">Beranda</a></li>
                                <li><a href="#features" class="text-base text-gray-300 hover:text-brand-gold transition-colors duration-300">Fitur</a></li>
                                <li><a href="#themes" class="text-base text-gray-300 hover:text-brand-gold transition-colors duration-300">Tema</a></li>
                                <li><a href="#faq" class="text-base text-gray-300 hover:text-brand-gold transition-colors duration-300">FAQ</a></li>
                            </ul>
                        </div>
                        
                        <!-- Contact Column -->
                        <div class="text-right">
                            <h4 class="text-lg font-bold mb-4 text-brand-gold">Hubungi Kami</h4>
                            <div class="space-y-3 mb-4">
                                <a href="https://wa.me/${CONFIG.contact.whatsapp}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-end gap-2 text-base text-gray-300 hover:text-brand-gold transition-colors duration-300">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                    <span>WhatsApp</span>
                                </a>
                                <a href="mailto:${CONFIG.contact.email}" class="flex items-center justify-end gap-2 text-base text-gray-300 hover:text-brand-gold transition-colors duration-300">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                                    <span class="text-sm">${CONFIG.contact.email}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Divider -->
                    <div class="border-t border-gray-700 pt-8">
                        <!-- Copyright -->
                        <div class="text-center">
                            <p class="text-sm text-gray-400">
                                Copyright &copy; <span class="current-year"></span> ${CONFIG.businessInfo.name}. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    },

    // ===== ICON COLLECTION =====
    icon: {
        whatsapp: `<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>`,
        sparkles: `<svg class="h-5 w-5 text-brand-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/></svg>`,
        star: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`,
        instagram: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
        facebook: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg>`,
        tiktok: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>`,
        email: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>`
    }
};

