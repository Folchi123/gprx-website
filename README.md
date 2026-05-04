# Greenpoint Pharmacy — Website

Official website for **Greenpoint Pharmacy**, located at 4026 Greenpoint Avenue, Sunnyside, NY 11104.

📞 (718) 937-1750 · 📧 pharmacygprx@gmail.com · 🌐 [gprxpharmacy.com](https://gprxpharmacy.com)

---

## 🗂 Project Structure

```
gprx-website/
├── index.html          ← Entire website (single-file app)
├── favicon.ico         ← Add your favicon here
├── favicon-32x32.png   ← Add your favicon here
├── favicon-16x16.png   ← Add your favicon here
├── apple-touch-icon.png← Add your favicon here
├── site.webmanifest    ← Add your web manifest here
├── og-image.jpg        ← Add your 1200×630 social share image
├── robots.txt          ← Add your robots.txt here
├── sitemap.xml         ← Add your sitemap here
└── README.md           ← This file
```

---

## 🚀 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Main landing page with services, about, contact |
| Transfer Rx | `#transfer` | Prescription transfer form |
| Compounding | `#compounding` | Specialty compounding services |
| LTC Services | `#ltc` | Long-term care pharmacy services |
| Shop OTC | `#shop` | Over-the-counter products |
| Weight Loss | `#weightloss` | GLP-1 / weight loss medications |
| Legal | `#legal` | Privacy policy, HIPAA notice, disclaimers |

---

## ✏️ How to Make Updates

### Small text changes
1. Open `index.html` in any text editor (Notepad, TextEdit, VS Code)
2. Use **Ctrl+F** (Find) to locate the text you want to change
3. Edit and save
4. Push to GitHub (see below)

### Before going live — action items
- [ ] Replace `G-XXXXXXXXXX` with your real [Google Analytics 4](https://analytics.google.com) Measurement ID
- [ ] Upload `og-image.jpg` (1200×630px social share image)
- [ ] Add your NY pharmacy license number (search `INSERT LICENSE`)
- [ ] Generate and upload favicon files at [realfavicongenerator.net](https://realfavicongenerator.net)
- [ ] Create `robots.txt` and `sitemap.xml` (templates are in HTML comments inside `<head>`)
- [ ] Set up real payment gateway (Stripe/PayPal) for the Shop checkout
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)

---

## 🔧 Git Commands — Quick Reference

```bash
# Check what changed
git status

# Stage all changes
git add .

# Commit with a message
git commit -m "describe what you changed"

# Push to GitHub
git push origin main

# Pull latest (if editing from multiple computers)
git pull origin main
```

---

## 🌐 Hosting Options

### Option A — GitHub Pages (Free)
Enabled in this repo. Your site will be live at:
`https://YOUR-USERNAME.github.io/gprx-website/`

Point your custom domain `gprxpharmacy.com` to GitHub Pages by adding a `CNAME` file.

### Option B — Custom Host (GoDaddy, Namecheap, etc.)
Upload `index.html` and all asset files to your server's `public_html` folder via FTP.

---

## 📞 Support
Pharmacist on file: **Natali Malachov, RPh**
