# 🎓 Prompt: Xây dựng Website Bán Khóa Học Online

## 📋 Tổng quan dự án

Xây dựng một nền tảng bán khóa học online hiện đại với kiến trúc tách biệt frontend/backend, database PostgreSQL, thiết kế đẹp mắt theo xu hướng 2026.

---

## 🏗️ Kiến trúc hệ thống

### Backend (Node.js + Express + TypeScript)
- **Framework**: Express.js với TypeScript
- **Database**: PostgreSQL (Docker)
- **ORM**: Prisma hoặc TypeORM
- **Authentication**: JWT + bcrypt
- **File upload**: Multer hoặc cloud storage (Cloudinary/AWS S3)
- **Payment**: Stripe/PayPal integration
- **API**: RESTful API với chuẩn OpenAPI/Swagger docs

### Frontend (Next.js 14+ / React)
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand hoặc React Context
- **Forms**: React Hook Form + Zod validation
- **HTTP Client**: Axios hoặc fetch API
- **Video Player**: Video.js hoặc Plyr

### Database Schema (PostgreSQL)
```sql
-- Users table
users:
  - id (UUID, PK)
  - email (unique)
  - password_hash
  - full_name
  - avatar_url
  - role (student/instructor/admin)
  - created_at
  - updated_at

-- Courses table
courses:
  - id (UUID, PK)
  - title
  - slug (unique)
  - description
  - thumbnail_url
  - price
  - discount_price
  - instructor_id (FK -> users)
  - category_id (FK -> categories)
  - level (beginner/intermediate/advanced)
  - status (draft/published/archived)
  - created_at
  - updated_at

-- Categories table
categories:
  - id (UUID, PK)
  - name
  - slug (unique)
  - description

-- Lessons table
lessons:
  - id (UUID, PK)
  - course_id (FK -> courses)
  - title
  - video_url
  - duration (seconds)
  - order_index
  - is_preview (boolean)
  - created_at

-- Enrollments table
enrollments:
  - id (UUID, PK)
  - user_id (FK -> users)
  - course_id (FK -> courses)
  - enrolled_at
  - completed_at
  - progress (0-100)

-- Reviews table
reviews:
  - id (UUID, PK)
  - user_id (FK -> users)
  - course_id (FK -> courses)
  - rating (1-5)
  - comment
  - created_at

-- Payments table
payments:
  - id (UUID, PK)
  - user_id (FK -> users)
  - course_id (FK -> courses)
  - amount
  - currency
  - payment_method
  - transaction_id
  - status (pending/completed/failed)
  - created_at
```

---

## 🎨 Thiết kế UI/UX (Xu hướng 2026)

### Design System
- **Color Palette**: 
  - Primary: Gradient (Blue → Purple)
  - Secondary: Emerald/Teal
  - Neutral: Slate/Gray scale
  - Dark mode support
  
- **Typography**:
  - Headings: Inter/Geist Sans (bold, modern)
  - Body: System fonts với fallback
  - Code: Fira Code/JetBrains Mono

- **Components Style**:
  - Glassmorphism effects
  - Subtle shadows & blur
  - Smooth animations (Framer Motion)
  - Micro-interactions
  - Skeleton loaders

### Pages cần thiết

#### 1. **Homepage** (`/`)
- Hero section với CTA nổi bật
- Featured courses carousel
- Categories grid
- Testimonials
- Stats counter (students, courses, instructors)
- Newsletter signup

#### 2. **Course Listing** (`/courses`)
- Filter sidebar (category, price, level, rating)
- Search bar với autocomplete
- Sort options (newest, popular, price)
- Grid/List view toggle
- Pagination

#### 3. **Course Detail** (`/courses/[slug]`)
- Course header (title, instructor, rating, price)
- Video preview
- Course curriculum (collapsible sections)
- What you'll learn
- Requirements
- Description
- Instructor bio
- Reviews section
- Related courses
- Sticky "Enroll Now" button

#### 4. **Learning Dashboard** (`/learn/[courseId]`)
- Video player (main area)
- Lesson sidebar (progress tracking)
- Notes section
- Resources download
- Q&A tab
- Progress bar
- Certificate download (when completed)

#### 5. **User Dashboard** (`/dashboard`)
- My courses (enrolled)
- Progress overview
- Certificates
- Purchase history
- Profile settings

#### 6. **Instructor Dashboard** (`/instructor`)
- My courses (created)
- Analytics (views, enrollments, revenue)
- Create/Edit course
- Student management
- Earnings & payouts

#### 7. **Authentication**
- Login (`/login`)
- Register (`/register`)
- Forgot password (`/forgot-password`)
- Social login (Google, GitHub)

#### 8. **Checkout** (`/checkout/[courseId]`)
- Order summary
- Payment form (Stripe Elements)
- Coupon code input
- Invoice generation

---

## 🐳 Docker Setup

### `docker-compose.yml`
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: course-platform-db
    environment:
      POSTGRES_USER: courseadmin
      POSTGRES_PASSWORD: secure_password_here
      POSTGRES_DB: course_platform
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  pgadmin:
    image: dpage/pgadmin4:latest
    container_name: course-platform-pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@barneylabs.com
      PGADMIN_DEFAULT_PASSWORD: admin123
    ports:
      - "5050:80"
    depends_on:
      - postgres
    restart: unless-stopped

volumes:
  postgres_data:
```

---

## 📁 Cấu trúc thư mục

```
course-platform/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── index.ts
│   ├── prisma/
│   │   └── schema.prisma
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (dashboard)/
│   │   ├── courses/
│   │   ├── learn/
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── course/
│   │   ├── layout/
│   │   └── shared/
│   ├── lib/
│   ├── public/
│   ├── styles/
│   ├── .env.local.example
│   ├── next.config.js
│   ├── package.json
│   └── tailwind.config.ts
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🚀 Các tính năng chính

### Core Features
- ✅ User authentication & authorization (JWT)
- ✅ Course CRUD (instructor)
- ✅ Video streaming
- ✅ Progress tracking
- ✅ Payment integration (Stripe)
- ✅ Review & rating system
- ✅ Search & filter courses
- ✅ Responsive design (mobile-first)
- ✅ Dark mode toggle

### Advanced Features
- ✅ Certificate generation (PDF)
- ✅ Email notifications (enrollment, completion)
- ✅ Coupon/discount codes
- ✅ Wishlist
- ✅ Course preview (free lessons)
- ✅ Q&A section per lesson
- ✅ Admin panel (user/course management)
- ✅ Analytics dashboard
- ✅ Multi-language support (i18n)

---

## 🔧 Environment Variables

### Backend `.env`
```env
DATABASE_URL="postgresql://courseadmin:secure_password_here@localhost:5432/course_platform"
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"
PORT=5000
NODE_ENV="development"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email (SendGrid/Mailgun)
EMAIL_SERVICE="sendgrid"
EMAIL_API_KEY="SG.xxx"
EMAIL_FROM="noreply@barneylabs.com"

# Cloud Storage (optional)
CLOUDINARY_CLOUD_NAME="xxx"
CLOUDINARY_API_KEY="xxx"
CLOUDINARY_API_SECRET="xxx"
```

### Frontend `.env.local`
```env
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

---

## 📦 Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, React 18, TypeScript |
| Styling | Tailwind CSS, shadcn/ui, Framer Motion |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL 16 |
| ORM | Prisma |
| Auth | JWT, bcrypt |
| Payment | Stripe |
| Deployment | Vercel (Frontend), Railway/Render (Backend) |
| Container | Docker, Docker Compose |

---

## 🎯 Deployment Plan

### 1. Backend Deployment (Railway/Render)
- Push backend code to GitHub
- Connect Railway/Render to repo
- Set environment variables
- Deploy PostgreSQL instance
- Run migrations

### 2. Frontend Deployment (Vercel)
- Push frontend code to GitHub
- Import project to Vercel
- Set environment variables
- Auto-deploy on push to main

### 3. Database (Docker local / Cloud production)
- Local: `docker-compose up -d`
- Production: Railway PostgreSQL / Supabase / Neon

---

## ✅ Checklist triển khai

- [ ] Setup Git repo
- [ ] Initialize backend (Express + TypeScript + Prisma)
- [ ] Initialize frontend (Next.js + Tailwind + shadcn/ui)
- [ ] Setup Docker Compose for PostgreSQL
- [ ] Design database schema & run migrations
- [ ] Implement authentication (register/login/JWT)
- [ ] Build course CRUD APIs
- [ ] Build frontend pages (homepage, courses, detail)
- [ ] Integrate payment (Stripe)
- [ ] Implement video player & progress tracking
- [ ] Add review & rating system
- [ ] Setup email notifications
- [ ] Deploy backend to Railway/Render
- [ ] Deploy frontend to Vercel
- [ ] Test end-to-end flow
- [ ] Push final code to GitHub

---

## 🎨 Design Inspiration

- **Udemy** (course structure)
- **Coursera** (clean UI)
- **Skillshare** (modern aesthetic)
- **Framer** (smooth animations)
- **Linear** (minimalist design)

---

## 📝 Notes

- Sử dụng **TypeScript** cho cả frontend và backend để type-safe
- Áp dụng **best practices**: clean code, SOLID principles, error handling
- Viết **API documentation** với Swagger
- Implement **rate limiting** và **CORS** cho security
- Optimize images với Next.js Image component
- Lazy load components để tăng performance
- Setup **CI/CD** với GitHub Actions (optional)

---

**Mục tiêu**: Tạo ra một nền tảng khóa học online chuyên nghiệp, dễ sử dụng, có thể scale và maintain lâu dài.
