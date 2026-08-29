# Road Dogg Rescue Website

A modern, mobile-friendly website for Road Dogg Rescue. It's built with plain HTML, CSS, and a tiny bit of JavaScript — **no special software or build tools required**. You can open any page by double-clicking it, and edit the text in any plain-text editor.

---

## Quick start

To preview the site on your computer, just **double-click `index.html`** — it opens in your web browser. That's it.

If you'd like a nicer live preview that auto-refreshes while editing, you can run a simple local server (optional):

```bash
cd "RDR site"
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

---

## What's in here

| File / folder | What it is |
|---|---|
| `index.html` | Home page (hero, about, available dogs, happy tails) |
| `adopt.html` | Adoption application page |
| `foster-volunteer.html` | Foster & volunteer page |
| `donate.html` | Donations page |
| `info.html` | Information / FAQ page |
| `contact.html` | Contact page + surrender request section |
| `css/style.css` | All the colors, fonts, and styling for every page |
| `js/main.js` | Mobile menu + auto-updating footer year |
| `images/` | Put your logo and photos here |

---

## The most common things you'll want to change

### 1. The adoptable dogs (Pawlytics)
The live dog list comes from **Pawlytics** and updates automatically — you don't need to touch it day to day.

If you ever get a new Pawlytics embed link, open `index.html`, search for **"PAWLYTICS LIVE PET LIST"**, and replace the long web address inside `src="..."` with your new one.

### 2. Your logo
Your logo is already in place — it lives at `images/logo.png` and appears in the header and footer of every page. To swap it for an updated version later, just replace that file with a new image of the same name (a PNG with a transparent background looks best).

### 3. Replace photos
The hero and "Happy Tails" photos currently use temporary stock images (web links). To use your own:
1. Save your photo into the `images/` folder.
2. Find the photo's `<img src="...">` line and change the address to, e.g., `images/your-photo.jpg`.

### 4. Fill in your real links
Throughout the pages there are placeholders marked with comments like `<!-- REPLACE ... -->`. Update these with your real web addresses:
- **Adoption application** link (`adopt.html`)
- **Foster / volunteer sign-up** link (`foster-volunteer.html`)
- **Donation** links — PayPal, Venmo, etc. (`donate.html`)
- **Surrender request** link (`contact.html`)
- **Facebook** page link (in the footer of every page)
- **Email, phone, address** (`contact.html`)

### 5. Make the contact form actually send email
The contact form on `contact.html` needs a free form service to deliver messages. The easiest option:
1. Create a free form at [formspree.io](https://formspree.io).
2. Copy the endpoint it gives you.
3. In `contact.html`, find `<form action="#" method="POST">` and replace `#` with your Formspree address.

---

## Publishing the site for free

Any of these host static sites for free. The simplest is **Netlify Drop**:

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the entire `RDR site` folder onto the page.
3. Your site goes live instantly with a free web address.
4. To use `roaddoggrescue.com`, point your domain to Netlify (their docs walk you through it).

Other good free options: **GitHub Pages** and **Cloudflare Pages**.

---

## Changing colors

Open `css/style.css` and look at the top `:root` section. Change the color values there (like `--color-accent`) and the whole site updates at once.

---

Questions or want changes? Keep this folder backed up, and feel free to edit the text directly — you can't break anything that a quick undo won't fix.
