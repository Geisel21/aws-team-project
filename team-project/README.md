# Team Project (Vue SPA)

Professional single-page Vue 3 website with:
- Responsive layout (mobile → desktop)
- Dark mode toggle (remembers preference)
- Smooth scrolling + subtle animations (AOS)
- AWS demo buttons:
  - **Save** (POST) and **Retrieve** (GET) via API Gateway → Aurora
  - **Get EC2 Region** via a backend endpoint (API Gateway)

## Local setup

Prereqs: Node.js (recommended **20 LTS** or **22 LTS**) + npm.

```bash
cd team-project
npm install
```

Create a local env file (Vite reads `.env.local`):

```bash
copy env.example .env.local
```

Edit `.env.local` and set:
- `VITE_SAVE_URL`
- `VITE_RETRIEVE_URL`
- `VITE_REGION_URL`

Run dev server (from the `team-project` directory):

```bash
npm run dev
# or
npm run serve
```

Build production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## AWS API expectations

The frontend calls these endpoints:
- **Save**: `POST VITE_SAVE_URL` with JSON body
- **Retrieve**: `GET VITE_RETRIEVE_URL`
- **Region**: `GET VITE_REGION_URL`

Notes:
- Your API Gateway must enable **CORS** for your site origin.
- The Region call must come from your backend; the browser **cannot** safely call EC2 Instance Metadata directly.

## Deploy to AWS EC2 (t2.micro) with Nginx

1) Build locally:

```bash
npm run build
```

2) Copy `dist/` to EC2 (example):

```bash
scp -r dist ubuntu@YOUR_EC2_IP:/var/www/team-project
```

3) Install Nginx on EC2 (Ubuntu):

```bash
sudo apt update
sudo apt install -y nginx
```

4) Nginx site config (example `/etc/nginx/sites-available/team-project`):

```nginx
server {
  listen 80;
  server_name YOUR_DOMAIN_OR_IP;

  root /var/www/team-project;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

Enable + reload:

```bash
sudo ln -s /etc/nginx/sites-available/team-project /etc/nginx/sites-enabled/team-project
sudo nginx -t
sudo systemctl reload nginx
```

## SSL (recommended)

Use Let’s Encrypt + Certbot (Ubuntu):

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d YOUR_DOMAIN
```

## Security notes

- Keep API Gateway protected (auth, throttling, validation).
- Validate all input on the backend (don’t trust client JSON).
- Use HTTPS (SSL) in production.

## SEO best practices

- Keep descriptive titles/descriptions (see `index.html`).
- Use semantic sections (`<main>`, `<section>`, headings).
- Provide alt text for any images you add.

## Testing guidance

- **Responsive**: Chrome DevTools device toolbar + real mobile device checks
- **Cross-browser**: latest Chrome/Edge/Firefox + Safari (if possible)
- **Performance**: Lighthouse report in Chrome DevTools

## Analytics

If you want Google Analytics, add the GA snippet to `index.html` and use events for:
- Save button click
- Retrieve button click
- Region lookup click

## Suggested libraries/tools

- **Tailwind CSS** (already included) for fast, consistent styling
- **AOS** (already included) for scroll animations
- Optional: **vue-router** (not needed for a single-page/one-route site, but useful if you later add pages)

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
