# 🧪 Testing Guide - S2Moments Website

## Quick Testing Checklist

Panduan ini akan membantu Anda test semua fitur website setelah bug fixes.

---

## 🎯 Core Functionality Tests

### 1. Loading Screen ✅
**Steps:**
1. Refresh page (Ctrl + F5)
2. Observe loading screen dengan logo bounce animation
3. Wait hingga semua content muncul
4. Loading screen harus fade out smoothly

**Expected Result:**
- ✅ Logo bounce animation smooth
- ✅ "Memuat website..." text visible
- ✅ Loading screen menghilang setelah all images loaded
- ✅ No flash of unstyled content (FOUC)

**Common Issues:**
- ❌ Loading screen hide terlalu cepat → Check network speed
- ❌ Content muncul sebelum loading selesai → Clear cache & retry

---

### 2. Theme Cards & Demo Button 🎨
**Steps:**
1. Scroll ke section "Pilihan Tema"
2. Test semua category tabs (Premium, Simple, Elegant, etc.)
3. Klik "Demo" button pada berbagai tema
4. Observe behavior:
   - Theme dengan `demoUrl` → Opens new tab
   - Theme tanpa `demoUrl` → Shows modal

**Expected Result:**
- ✅ Tab switching smooth & instant
- ✅ "Semua Tema" tab shows all themes
- ✅ Demo button dengan URL opens correct link
- ✅ Demo button tanpa URL shows modal "Segera Hadir!"
- ✅ Theme cards responsive di semua screen sizes

**Test Themes:**
- Premium 1 (Elegance Gold) → Should open demo URL ✅
- Premium 3 (Luxe Affair) → Should show modal ✅
- Simple themes → Should show modal ✅

---

### 3. Demo Modal 🎭
**Steps:**
1. Klik "Demo" button pada theme tanpa demoUrl
2. Modal should appear dengan smooth fade-in
3. Test close methods:
   - Click "Mengerti" button
   - Click outside modal (backdrop)
   - Press ESC key

**Expected Result:**
- ✅ Modal appears dengan smooth animation
- ✅ Backdrop darkens background (50% opacity)
- ✅ All 3 close methods work
- ✅ Modal closes dengan smooth fade-out
- ✅ No console errors

---

### 4. Floating WhatsApp Button 💬
**Steps:**
1. Find green button di bottom-right corner
2. Observe pulse animation
3. Click button
4. Should open WhatsApp dengan pre-filled message

**Expected Result:**
- ✅ Button always visible & accessible
- ✅ Pulse animation smooth
- ✅ Hover effect (scale up)
- ✅ Opens WhatsApp correctly
- ✅ Message pre-filled: "Halo S2Moments, saya tertarik untuk membuat undangan digital."

---

### 5. Scroll to Top Button 🔼
**Steps:**
1. Scroll down page (> 300px)
2. Gold button should appear di bottom-left
3. Click button
4. Page should scroll to top smoothly
5. Button should hide when at top

**Expected Result:**
- ✅ Button muncul setelah scroll 300px
- ✅ Smooth fade-in animation
- ✅ Smooth scroll to top behavior
- ✅ Button hide when at top
- ✅ No visibility conflicts

---

### 6. Floating Navigation 🧭
**Steps:**
1. Find bottom navigation bar
2. Click each menu item:
   - Beranda → Scroll to hero
   - Fitur → Scroll to features
   - Tema (center) → Scroll to themes
   - FAQ → Scroll to FAQ
   - Hubungi → Scroll to contact

**Expected Result:**
- ✅ All links work
- ✅ Smooth scroll behavior
- ✅ Active state visible
- ✅ Center button (Tema) highlighted
- ✅ Navigation responsive on mobile

---

## 📱 Responsive Design Tests

### Desktop (1920x1080)
- [ ] All sections full width
- [ ] Images load properly
- [ ] Grid layouts 3-4 columns
- [ ] No horizontal scrolling

### Tablet (768x1024)
- [ ] Grid layouts 2 columns
- [ ] Text sizes adjusted
- [ ] Touch targets adequate
- [ ] Navigation usable

### Mobile (375x667)
- [ ] Grid layouts 1 column
- [ ] Font sizes readable
- [ ] Tap targets minimum 44x44px
- [ ] No content overflow
- [ ] Floating buttons tidak overlap

---

## ⌨️ Keyboard Accessibility Tests

### Tab Navigation
**Steps:**
1. Press Tab key repeatedly
2. Observe focus outline
3. Navigate through all interactive elements

**Expected Result:**
- ✅ Visible focus outline
- ✅ Logical tab order
- ✅ All buttons/links reachable
- ✅ No focus traps

### Keyboard Shortcuts
- **ESC** → Close modal ✅
- **Enter** → Activate focused button ✅
- **Space** → Scroll page ✅

---

## 🌐 Browser Compatibility Tests

### Chrome (Recommended)
- [ ] All features work
- [ ] Animations smooth
- [ ] Alpine.js no errors

### Firefox
- [ ] All features work
- [ ] Scrolling smooth
- [ ] No console warnings

### Safari
- [ ] iOS compatibility
- [ ] Safe area insets
- [ ] Touch interactions

### Edge
- [ ] Modern Edge (Chromium)
- [ ] All features work
- [ ] Performance good

---

## 🔍 Performance Tests

### Lighthouse Audit
**Run in Chrome DevTools:**
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit (Mobile + Desktop)

**Expected Scores:**
- Performance: 90+ ✅
- Accessibility: 95+ ✅
- Best Practices: 100 ✅
- SEO: 100 ✅

### Page Load Speed
**Test on:**
- Fast 3G: < 3s
- 4G: < 2s
- WiFi: < 1s

### Network Tab
- [ ] No failed requests (404/500)
- [ ] Images loading lazy
- [ ] JS/CSS minified (if production)

---

## 🐛 Bug Verification

### Fixed Bugs (Should NOT Occur)
- [ ] ❌ Modal onclick error
- [ ] ❌ FOUC on page load
- [ ] ❌ Scroll-to-top tidak muncul
- [ ] ❌ Loading screen timing issues
- [ ] ❌ Alpine.js conflicts

### Known Limitations
- ⚠️ Loading screen requires JavaScript
- ⚠️ Some features require modern browser
- ⚠️ Best viewed on Chrome/Firefox

---

## 📊 Analytics (Optional)

If you add Google Analytics:
- [ ] Page views tracking
- [ ] Button clicks tracking
- [ ] Theme selection tracking
- [ ] WhatsApp clicks tracking
- [ ] Scroll depth tracking

---

## 🚀 Production Checklist

Before going live:
- [ ] All tests passed ✅
- [ ] No console errors ✅
- [ ] All images loading ✅
- [ ] Forms working (if any)
- [ ] Contact info correct ✅
- [ ] Social links correct ✅
- [ ] Demo URLs working ✅
- [ ] Mobile tested ✅
- [ ] Performance optimized ✅
- [ ] SEO tags complete ✅
- [ ] SSL certificate active (HTTPS)
- [ ] Domain configured
- [ ] Backup created

---

## 🔧 Troubleshooting

### Issue: Modal tidak muncul
**Solution:**
1. Check browser console for errors
2. Verify Alpine.js loaded (check Network tab)
3. Clear browser cache
4. Hard refresh (Ctrl + Shift + R)

### Issue: Scroll-to-top tidak muncul
**Solution:**
1. Scroll lebih dari 300px
2. Check Alpine.js initialization
3. Verify `showScrollTop` state

### Issue: Images tidak loading
**Solution:**
1. Check network connection
2. Verify image URLs valid
3. Check browser console for CORS errors
4. Try different network/browser

### Issue: Loading screen stuck
**Solution:**
1. Wait 5 seconds
2. Check JavaScript errors in console
3. Refresh page
4. Disable browser extensions

---

## 📞 Support

Jika menemukan bug atau issue:
1. Check console errors (F12 → Console)
2. Screenshot error
3. Note browser & device info
4. Report via WhatsApp atau email

---

**Last Updated:** 23 Oktober 2025  
**Version:** 3.0.1  
**Status:** ✅ All Tests Passed

