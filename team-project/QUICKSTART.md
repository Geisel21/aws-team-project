# Quick Start Guide

## ⚠️ Important: Run commands from the `team-project` directory

All npm commands must be run from inside the `team-project` folder.

## First Time Setup

1. **Navigate to the project directory:**
   ```bash
   cd team-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file (optional for basic testing):**
   ```bash
   # Windows
   copy env.example .env.local
   
   # Mac/Linux
   cp env.example .env.local
   ```

4. **Edit `.env.local`** and add your API Gateway URLs (optional - app will run without them, but API buttons won't work).

## Running the App

**Start the development server:**
```bash
cd team-project
npm run dev
# or
npm run serve
```

The app will be available at `http://localhost:5173`

**Build for production:**
```bash
cd team-project
npm run build
```

**Preview production build:**
```bash
cd team-project
npm run preview
```

## Troubleshooting

**Error: "Could not read package.json"**
- You're in the wrong directory. Make sure you're in `team-project` folder.

**Error: "npm run serve" not found**
- Use `npm run dev` instead, or update to the latest code which includes the `serve` script.

**API buttons show errors**
- Make sure you've created `.env.local` and set `VITE_SAVE_URL`, `VITE_RETRIEVE_URL`, and `VITE_REGION_URL` with your API Gateway endpoints.

