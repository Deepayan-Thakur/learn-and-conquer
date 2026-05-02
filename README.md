# Learn & Lead Hub

> A comprehensive personal productivity and learning hub for competitive exams, DSA mastery, and career growth.

![React](https://img.shields.io/badge/React-18.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0-purple?logo=vite)
![License](https://img.shields.io/badge/License-Apache%202.0-green)

## 🎯 Overview

**Learn & Lead Hub** is a full-stack learning platform designed to consolidate your preparation across multiple domains:
- **DSA & Data Structures** - Master algorithmic patterns with curated video resources and 450+ practice problems
- **AI & Emerging Trends** - Stay updated with cutting-edge AI research and market insights
- **Aptitude & Reasoning** - Comprehensive resources for quantitative skills and logical reasoning
- **UPSC/SSC Preparation** - Structured learning for Indian competitive exams (Polity, History, Geography, Economics)
- **Daily Goal Tracking** - Personal productivity dashboard with daily targets across all segments

## ✨ Features

### 📚 Comprehensive DSA Patterns
- **15+ Algorithmic Patterns** including:
  - Two Pointers
  - Sliding Window
  - Fast & Slow Pointers
  - Kadane's Algorithm
  - Prefix Sum
  - Merge Intervals
  - Binary Search
  - Heap / Priority Queue
  - Recursion & Backtracking
  - Tree Traversals & BST
  - Graph Algorithms
  - Stack & Queue
  - Hash Maps
  - And more...

- **450+ Curated Practice Questions** linked to:
  - LeetCode
  - GeeksforGeeks
  - Other premium platforms

- **Video Tutorials** from Padho with Pratyush DSA Pattern series

### 🤖 AI Trends Monitoring
- Real-time tracking of emerging AI trends:
  - Agentic Autonomy
  - Local LLM Sovereignty
  - Multi-modal Action Models
  - Neuro-symbolic Reasoning
  - Hardware Physical Grounding
  - Zero-Shot Generative UI
- Links to latest research papers and articles

### 📊 Aptitude & Reasoning
- **Core Quantitative Topics**:
  - Percentage & Profit/Loss
  - Ratio & Proportion
  - Interest (Simple & Compound)
  - Time, Speed & Distance
  - Number System & Algebra
  - Geometry & Trigonometry
  - Data Interpretation
  - And more...

- **General Intelligence Resources**
- **English Comprehension Materials**
- **Computer Knowledge** resources

### 🏛️ UPSC/SSC Preparation
Curated resources for Indian competitive exams:
- **Indian Polity** - From Bookstawa
- **History** - Ancient, Medieval, and Modern India
- **Geography** - Physical and Indian geography with mapping
- **Economics** - Indian economy focus
- **General Awareness**

### ✅ Daily Goal Tracking
- Personal dashboard with daily targets
- Track progress across DSA, AI, Aptitude, and Theory segments
- Goal completion tracking with visual indicators
- LocalStorage persistence for continuous tracking

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

### Development Tools
- **Node.js** - Runtime environment
- **npm** - Package manager
- **ESLint & TypeScript** - Code quality

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/learn-and-lead-hub.git
   cd learn-and-lead-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
learn-and-lead-hub/
├── src/
│   ├── App.tsx                 # Main application component
│   ├── main.tsx               # Entry point
│   ├── index.css              # Global styles
│   ├── constants.tsx          # All data (DSA topics, resources, trends)
│   ├── types.ts               # TypeScript type definitions
│   └── vite-env.d.ts          # Vite type definitions
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
```

### Key Files Overview

- **`src/App.tsx`** - Main React component with all sections (Dashboard, DSA, AI, Aptitude, Theory)
- **`src/constants.tsx`** - Centralized data store containing:
  - `DSA_TOPICS` - 15+ algorithmic patterns with 450+ questions
  - `THEORY_SUBJECTS` - UPSC/SSC preparation materials
  - `APTITUDE_TOPICS` - Quantitative and reasoning resources
  - `EXTRA_APTITUDE_TOPICS` - General intelligence and comprehension
  - `AI_TRENDS` - Emerging technology trends
- **`src/types.ts`** - TypeScript interfaces for type safety

## 🚀 Usage

### Dashboard Section
- View daily targets and track progress
- See overall statistics (Java progress, study streak)
- Quick access to motivational thoughts

### DSA Section
- Browse 15+ algorithmic patterns
- Access video resources from Padho with Pratyush
- View 450+ practice questions organized by pattern
- Click on questions to jump to LeetCode/GeeksforGeeks

### AI Trends Section
- Stay updated with cutting-edge AI research
- Scan for latest trends with the "Scan Now" button
- Access research papers and articles

### Aptitude Section
- Access resources for quantitative aptitude
- Learn core mathematical concepts
- Prepare for reasoning sections

### UPSC/SSC Prep Section
- Structured learning materials for Indian competitive exams
- Organized by subject (Polity, History, Geography, Economics)
- Curated from trusted sources

## 🎨 Customization

### Adding New DSA Patterns
Edit `src/constants.tsx` and add to `DSA_TOPICS` array:
```typescript
{
  pattern: "Pattern Name",
  description: "Brief description",
  videos: [
    { title: "Video Title", url: "...", type: "video", platform: "Source" },
  ],
  questions: [
    { title: "Question Title", links: ["https://leetcode.com/..."] },
  ]
}
```

### Adding New Resources
Edit the corresponding array in `src/constants.tsx`:
- For UPSC: `THEORY_SUBJECTS`
- For Aptitude: `APTITUDE_TOPICS`
- For AI Trends: `AI_TRENDS`

### Styling
- Global styles: `src/index.css`
- Component styles: Tailwind CSS classes in components
- Theme colors: Configure in `tailwind.config.js`

## 🔄 Data Persistence

- **Daily Goals** are saved to browser's LocalStorage
- Goals persist across browser sessions
- Toggle goal completion by clicking on them

## 📈 Future Enhancements

- [ ] Backend integration for cloud sync
- [ ] User authentication and profiles
- [ ] Progress analytics and statistics
- [ ] Spaced repetition system for questions
- [ ] Discussion forums for doubt clearing
- [ ] Mobile app version
- [ ] Offline mode support
- [ ] Dark mode toggle
- [ ] Multiple language support

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions, suggestions, or issues:
- Create an issue in the GitHub repository
- Reach out with detailed information about your query

## 🙏 Acknowledgments

- **Padho with Pratyush** - DSA pattern video resources
- **Bookstawa** - UPSC preparation materials
- **LeetCode & GeeksforGeeks** - Practice problem platforms
- **Aditya Ranjan & Rakesh Yadav Sir** - Aptitude resources
- **React & Vite communities** - Amazing frameworks and tools

## 📅 Last Updated

May 3, 2026

---

**Built with ❤️ for continuous learning and growth**
