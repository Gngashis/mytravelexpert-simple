# My Travel Expert — Luxury Himalayan Travel Platform

A bespoke, enterprise-grade Next.js 14 web application engineered for **My Travel Expert**, specializing in curated luxury expeditions, private tea garden heritage stays, high-altitude alpine lake circuits, and cultural tours across Darjeeling, Sikkim, Bhutan, and Dooars.

---

## 🌟 Key Highlights & Engineering Features

- **Custom Kinematic Physics Engine**: 60FPS WebGL canvas particle system simulating high-altitude snow and Tibetan gold dust with hand-tuned exponential damping matrices.
- **Interactive 3D Perspective Tilt**: Dual-axis angular card tilt ($R_x, R_y$) and cursor-tracked radial spotlight shaders.
- **Himalayan Luxury Palette**: Handcrafted color system featuring deep forest greens (`#040D0B`), mountain slate (`#11181B`), Tibetan gold (`#D4AF37`), and crisp snow white (`#F8FAFC`).
- **Comprehensive Route Architecture**:
  - `/` — Homepage featuring 3D Hero, Bento grid showcase, altitude ticker, and package highlights.
  - `/destinations` — Sacred geography directory (Darjeeling, Sikkim, Bhutan, Dooars, Kalimpong).
  - `/packages` — Tour catalog with expandable day-by-day itineraries, pricing, and inclusions.
  - `/about` — Siliguri headquarters heritage, native masters philosophy, and 4 trust pillars.
  - `/contact` — Custom expedition builder with direct WhatsApp concierge dispatch.
- **Enterprise SEO & Structured Data**: Complete Schema.org JSON-LD graph (`TravelAgency`, `TouristTrip`, `AggregateRating`, `FAQPage`), dynamic OpenGraph/Twitter cards, and semantic HTML5.
- **Authoritative Knowledge Files**: RFC-compliant `humans.txt`, modern AI-ready `llms.txt`, `robots.txt`, and `sitemap.xml`.

---

## 🚀 Deployment Guide for Domain: `mytravelexper.me`

This platform is production-ready for instantaneous deployment to any modern edge hosting service.

### Option 1: One-Click Vercel Deployment (Recommended)
1. Import this GitHub repository (`Gngashis/mytravelexpert-simple`) into [Vercel](https://vercel.com).
2. Framework Preset will auto-detect as **Next.js**.
3. Click **Deploy**.
4. Once deployed, navigate to **Project Settings > Domains**:
   - Add `mytravelexper.me`
   - Add `www.mytravelexper.me`
5. Configure DNS at your Domain Registrar (Namecheap, GoDaddy, Cloudflare, Hostinger):
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
6. Vercel will automatically provision SSL/TLS certificates within 60 seconds.

### Option 2: Cloudflare Pages / Workers
1. Connect GitHub repository in Cloudflare Dashboard.
2. Build command: `npm run build`
3. Output directory: `.next`
4. Attach custom domain `mytravelexper.me`.

### Option 3: Traditional VPS / Ubuntu / Docker (PM2 Node.js)
```bash
git clone https://github.com/Gngashis/mytravelexpert-simple.git
cd mytravelexpert-simple
npm install --production
npm run build
pm2 start npm --name "mytravelexpert" -- start -- -p 3000
```
Nginx Reverse Proxy configuration:
```nginx
server {
    server_name mytravelexper.me www.mytravelexper.me;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/Gngashis/mytravelexpert-simple.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 📄 License & Attribution

- **Client**: My Travel Expert (Bespoke Himalayan Expeditions & Luxury Stays)
- **Headquarters**: Hill Cart Road, Siliguri, West Bengal 734001, India
- **Hotline & WhatsApp**: `+91 80012 47778`
- **Email**: `infomytravelexpert4306@gmail.com`
- **Engineering Studio**: Senior Principal Front-End Architect & Design Studio
