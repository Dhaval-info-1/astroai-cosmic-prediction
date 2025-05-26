# AstroAI - Your Cosmic Blueprint

AstroAI is a beautiful, production-ready web app that delivers instant, AI-powered astrology readings. Enter your birth details and receive a personalized, private, and insightful cosmic prediction—no signup required.

## ✨ Features
- **Instant AI Astrology**: Get your reading in seconds, powered by Google Gemini AI.
- **No Signup, 100% Private**: No accounts, no tracking, just insights.
- **Beautiful UI**: Custom-designed with Tailwind CSS and Lucide icons.
- **Share & Download**: (Coming soon) Download your reading as PDF or share with friends.
- **Supabase Integration**: Stores predictions securely with Row Level Security.

## 🛠️ Tech Stack
- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS
- **AI**: Google Gemini (via @google/generative-ai)
- **Database**: Supabase (Postgres)
- **Icons**: Lucide React

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd bolt-pb
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root with:
```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the app
```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

## 🧩 Project Structure
- `src/` - React components, pages, and utilities
- `supabase/` - Database migrations
- `.bolt/` - Project template config

## 🗄️ Database
- Supabase table: `predictions`
- Row Level Security enabled (public insert/select)
- See `supabase/migrations/` for schema

## 🛡️ Security & Privacy
- No user accounts or tracking
- All predictions are stored anonymously
- RLS policies restrict access to only insert/select

## 🧪 Testing & Linting
- ESLint for code quality
- (Recommended) Add Jest + React Testing Library for tests

## 🌐 Deployment
- Deploy on Vercel, Netlify, or your preferred platform
- Ensure all environment variables are set in your deployment environment

## 📄 License
MIT

---

> Made with ❤️ and stardust by the AstroAI team # astroai-cosmic-prediction
