# GitHub Repository Setup Guide

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `aws-team-project` (or your preferred name)
   - **Description**: "Vue.js single-page team project site with AWS API Gateway integration
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## Step 2: Connect Your Local Repository to GitHub

After creating the repo, GitHub will show you commands. Use these commands (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

### Option A: Using HTTPS (recommended for first-time setup)

```bash
cd "C:\Users\geise\Documents\GitHub\AWS Project"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Option B: Using SSH (if you have SSH keys set up)

```bash
cd "C:\Users\geise\Documents\GitHub\AWS Project"
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Verify Connection

```bash
git remote -v
```

You should see your GitHub repository URL listed.

## Quick Commands Reference

**Check status:**
```bash
git status
```

**Add changes:**
```bash
git add .
```

**Commit changes:**
```bash
git commit -m "Your commit message"
```

**Push to GitHub:**
```bash
git push
```

**Pull from GitHub:**
```bash
git pull
```

## Troubleshooting

**If you get authentication errors:**
- For HTTPS: GitHub now requires a Personal Access Token instead of password
  - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate a new token with `repo` scope
  - Use the token as your password when prompted
- For SSH: Make sure your SSH key is added to your GitHub account

**If the remote already exists:**
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

