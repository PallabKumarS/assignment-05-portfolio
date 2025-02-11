# Modern Portfolio with Blog & Message Management

A feature-rich portfolio application built with Next.js 14, TypeScript, and
MongoDB.

## ✨ Features

- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark/Light mode
- 🎭 Admin Dashboard
- 📝 Blog Management
- 💌 Message System
- 🖼️ Project Showcase
- 🔐 Authentication
- 📱 Fully Responsive
- 🎉 3D Card Effects

## 🚀 Tech Stack

- Next.js 15 (App Router)
- TypeScript
- MongoDB & Mongoose
- Tailwind CSS
- Shadcn UI
- NextAuth.js
- React Icons
- React Hook Form
- Zod Validation

## 📁 Project Structure

    src/ ├── app/ │ ├── (dashboardLayout)/ │ │ └── dashboard/ │ │ ├── blog-management/ │ │ ├── message-management/ │ │ └── project-management/ │ ├── api/ │ │ ├── auth/ │ │ ├── blogs/ │ │ ├── messages/ │ │ └── projects/ │ ├── blogs/ │ └── projects/ ├── components/ ├── lib/ ├── schemas/ ├── types/ └── utils/

## 🛣️ Routes

- `/` - Home page
- `/blogs` - All blogs
- `/blogs/[id]` - Single blog
- `/projects` - All projects
- `/dashboard` - Admin dashboard
- `/dashboard/blog-management` - Blog CRUD
- `/dashboard/message-management` - Message management
- `/dashboard/project-management` - Project CRUD

## 🔧 Environment Variables

```env
# Database
DATABASE_URL="your_mongodb_connection_string"

# GitHub OAuth
GITHUB_ID="your_github_client_id"
GITHUB_SECRET="your_github_client_secret"

# Google OAuth
GOOGLE_ID="your_google_client_id"
GOOGLE_SECRET="your_google_client_secret"

# NextAuth
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"



git clone https://github.com/PallabKumarS/your-portfolio.git

npm install

npm run dev
```
