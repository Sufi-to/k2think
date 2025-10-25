# K2 Think AI Tutor - Frontend Demo

A beautiful, interactive demo showcasing the K2 Think AI Tutor platform for creating personalized learning roadmaps with adaptive scheduling.

## 🚀 Features

- **Smart Learning Plans**: AI-powered roadmap generation with structured modules
- **Interactive UI**: Collapsible modules with progress tracking and difficulty indicators
- **Reasoning Display**: See the AI's decision-making process for each plan
- **Calendar Integration**: Auto-scheduled study sessions with Google Calendar sync and .ics download
- **Adaptive Scheduling**: Automatic rescheduling for missed modules
- **Modern Design**: Beautiful, responsive UI with dark mode support

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling with utility classes
- **Lucide React** - Beautiful icon library

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Demo Flow

1. **Input Screen**: Enter learning goal, skill level, weekly hours, timeframe, and start date
2. **Roadmap Generation**: AI generates a personalized 10-module learning plan
3. **Interactive Roadmap**: 
   - View collapsible modules with topics and resources
   - Track progress with checkboxes
   - See difficulty levels and time estimates
4. **Reasoning Summary**: Understand why the AI structured the plan this way
5. **Calendar Integration**: 
   - Preview upcoming study sessions
   - Sync to Google Calendar
   - Download .ics file

## 💡 Example Input

**Goal**: Learn Python for Data Analysis in 8 weeks  
**Skill Level**: Beginner  
**Weekly Hours**: 4.5 hours  
**Start Date**: Today

The demo will generate a comprehensive roadmap covering:
- Python fundamentals
- NumPy and Pandas
- Data cleaning and EDA
- Visualization (Matplotlib, Seaborn)
- Real-world datasets
- Capstone project

## 🎨 Components

- `app/page.tsx` - Main application with form and state management
- `components/RoadmapView.tsx` - Interactive module display with progress tracking
- `components/ReasoningSummary.tsx` - AI reasoning explanation
- `components/CalendarIntegration.tsx` - Calendar sync and session preview
- `data/sampleData.ts` - Demo data for the Python Data Analysis roadmap

## 🔮 Future Enhancements

- Backend integration with FastAPI
- Real K2 Think LLM integration
- User authentication
- Progress persistence
- Multiple roadmap support
- Social sharing features

## 📝 Notes

This is a frontend demo designed for hackathon presentation. The roadmap generation is simulated with a 2-second delay to demonstrate the user experience. In production, this would connect to a FastAPI backend with K2 Think LLM for real-time reasoning and roadmap generation.

## 🙏 Built For

Hackathon organizers and judges to experience the K2 Think AI Tutor vision - transforming scattered learning goals into structured, achievable roadmaps with intelligent scheduling.

---

**Powered by K2 Think's Advanced Reasoning Engine**
