# Course Platform - Nền tảng Bán Khóa Học Online

Dự án xây dựng website bán khóa học online hiện đại với kiến trúc tách biệt frontend/backend.

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express, TypeScript, Prisma
- **Database**: PostgreSQL (Docker)
- **Payment**: Stripe
- **Deployment**: Vercel (Frontend), Railway/Render (Backend)

## 📁 Cấu trúc dự án

```
course-platform/
├── backend/          # API server (Express + TypeScript)
├── frontend/         # Next.js application
├── docker-compose.yml
└── PROMPT.md        # Chi tiết yêu cầu và hướng dẫn
```

## 🐳 Khởi động Database

```bash
docker-compose up -d
```

## 📖 Tài liệu

Xem file `PROMPT.md` để biết chi tiết về:
- Kiến trúc hệ thống
- Database schema
- Thiết kế UI/UX
- Tính năng
- Hướng dẫn deployment

## 🔗 Links

- **Frontend**: https://barneylabs-courses.vercel.app
- **GitHub Repo**: https://github.com/dovantudev-ux/course-platform
- **Backend API**: (chưa deploy - cần Railway/Render)
- **Database**: PostgreSQL (Docker local)

## 👨‍💻 Development

Xem hướng dẫn chi tiết trong từng thư mục:
- `backend/README.md`
- `frontend/README.md`
