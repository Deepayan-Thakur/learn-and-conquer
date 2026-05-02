/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BarChart2,
  BookOpen,
  Cpu,
  CheckCircle2,
  Clock,
  ChevronRight,
  Youtube,
  Book,
  Brain,
  Calculator,
  History,
  Scale,
  TrendingUp,
  LayoutDashboard,
  Globe,
  Menu,
  X
} from 'lucide-react';
import { DSA_TOPICS, THEORY_SUBJECTS, APTITUDE_TOPICS, EXTRA_APTITUDE_TOPICS, AI_TRENDS } from './constants';
import { Goal } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [goals, setGoals] = useState<Goal[]>(() => {
    const saved = localStorage.getItem('learn-hub-goals');
    return saved ? JSON.parse(saved) : [
      { id: '1', text: 'Watch Padho with Pratyush: Pattern 1', completed: false, category: 'DSA' },
      { id: '2', text: 'Read 1 chapter of Polity (Bookswawa)', completed: false, category: 'Theory' },
      { id: '3', text: 'Complete 5 Two Pointers questions', completed: false, category: 'DSA' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('learn-hub-goals', JSON.stringify(goals));
  }, [goals]);

  const toggleGoal = (id: string) => {
    setGoals(goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g));
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'dsa', label: 'DSA (Java)', icon: BookOpen },
    { id: 'ai', label: 'AI Trends', icon: Cpu },
    { id: 'aptitude', label: 'Aptitude & Reasoning', icon: Calculator },
    { id: 'theory', label: 'UPSC / SSC Prep', icon: History },
  ];

  return (
    <div className="flex min-h-screen bg-bg text-ink selection:bg-accent/20">
      {/* Mobile Header overlay */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-bg border-b border-ink/10 flex items-center justify-between px-6 z-20">
        <h1 className="text-xl italic-heading tracking-tight">Learn & Lead</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 -mr-2 text-ink">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-ink/20 z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-64 border-r border-ink/10 p-8 flex flex-col fixed h-screen bg-bg z-30 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} top-0 md:top-0 left-0 pt-20 md:pt-8`}>
        <div className="mb-12 hidden md:block">
          <h1 className="text-2xl italic-heading tracking-tight">Learn & Lead</h1>
          <p className="text-[10px] uppercase font-mono tracking-widest opacity-50 mt-1">Personal Productivity Hub</p>
        </div>

        <nav className="space-y-1 flex-grow">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${activeSection === item.id
                  ? 'bg-accent/10 text-accent font-medium'
                  : 'hover:bg-accent/5 text-ink/60 hover:text-ink'
                }`}
            >
              <item.icon size={18} className={activeSection === item.id ? 'text-accent' : 'opacity-50 group-hover:opacity-100'} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-ink/5">
          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-tighter opacity-40">
            <Clock size={12} />
            <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-6 pt-24 md:p-12 md:pt-12 min-w-0 transition-all">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="max-w-4xl"
          >
            {activeSection === 'dashboard' && (
              <Dashboard goals={goals} toggleGoal={toggleGoal} />
            )}
            {activeSection === 'dsa' && <DSASection />}
            {activeSection === 'ai' && <AISection lastScan={new Date()} />}
            {activeSection === 'aptitude' && <AptitudeSection />}
            {activeSection === 'theory' && <TheorySection />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function Dashboard({ goals, toggleGoal }: { goals: Goal[], toggleGoal: (id: string) => void }) {
  return (
    <section>
      <header className="mb-12">
        <h2 className="text-4xl italic-heading mb-2">Morning Shift.</h2>
        <p className="text-ink/60 max-w-xl">Focus on compound growth. Every segment counts towards the final goal.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="border border-ink/10 rounded-2xl p-6 bg-white/40 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-mono uppercase tracking-widest opacity-50">Daily Targets</h3>
              <CheckCircle2 size={16} className="text-accent/50" />
            </div>
            <div className="space-y-4">
              {goals.map(goal => (
                <div
                  key={goal.id}
                  onClick={() => toggleGoal(goal.id)}
                  className="flex items-start space-x-3 cursor-pointer group"
                >
                  <div className={`mt-1 h-4 w-4 rounded border flex items-center justify-center transition-colors ${goal.completed ? 'bg-accent border-accent' : 'border-ink/20 group-hover:border-accent/40'
                    }`}>
                    {goal.completed && <CheckCircle2 size={10} className="text-white" />}
                  </div>
                  <div className="flex-grow">
                    <p className={`text-sm ${goal.completed ? 'line-through opacity-40' : ''}`}>{goal.text}</p>
                    <span className="text-[9px] font-mono uppercase tracking-tighter opacity-30">{goal.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-6 border border-accent/20 bg-accent/5 rounded-2xl">
            <h4 className="italic-heading text-lg mb-4 text-accent">Thought for Today</h4>
            <p className="text-sm font-serif italic text-accent/80">"Patterns emerge only to those who look close enough. Mastery is the result of repeated observation."</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-ink/5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow cursor-default">
              <p className="text-2xl italic-heading text-accent">75%</p>
              <p className="text-[10px] font-mono uppercase opacity-50">Java Progress</p>
            </div>
            <div className="p-4 border border-ink/5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow cursor-default">
              <p className="text-2xl italic-heading text-accent">12</p>
              <p className="text-[10px] font-mono uppercase opacity-50">Study Streak</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DSASection() {
  return (
    <section>
      <header className="mb-12">
        <h2 className="text-4xl italic-heading mb-2">Algorithmic Patterns.</h2>
        <p className="text-ink/60">Curated DSA patterns from <span className="text-accent font-medium">Padho with Pratyush</span>. Focus: Java & FAANG Readiness.</p>
      </header>

      <div className="space-y-12">
        {DSA_TOPICS.map((topic, i) => (
          <div key={i} className="border-t border-ink/5 pt-8">
            <div className="flex items-baseline space-x-4 mb-4">
              <span className="text-[10px] font-mono opacity-30">0{i + 1}</span>
              <h3 className="text-2xl font-serif italic">{topic.pattern}</h3>
            </div>
            <p className="text-sm text-ink/70 mb-6 max-w-2xl">{topic.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-3 underline underline-offset-4">Resources</h4>
                <div className="space-y-2">
                  {topic.videos.map((v, vid) => (
                    <a
                      key={vid}
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white border border-ink/5 hover:border-accent transition-all group"
                    >
                      <div className="p-2 bg-red-50 rounded text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <Youtube size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-medium">{v.title}</p>
                        <p className="text-[9px] opacity-50 uppercase tracking-tighter">{v.platform}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-3 underline underline-offset-4">Practice Set</h4>
                <ul className="space-y-4">
                  {topic.questions.map((q, qid) => (
                    <li key={qid} className="space-y-2 group">
                      <div className="flex items-center space-x-2 text-xs cursor-default">
                        <ChevronRight size={12} className="text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                        <span className="font-medium group-hover:text-accent transition-colors">{q.title}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 pl-5">
                        {q.links.map((link, lid) => {
                          const isLeetCode = link.includes('leetcode');
                          const isGFG = link.includes('geeksforgeeks');
                          const label = isLeetCode ? 'LeetCode' : isGFG ? 'GFG' : `Resource ${lid + 1}`;

                          return (
                            <a
                              key={lid}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[9px] px-2 py-0.5 rounded border border-accent/20 text-accent hover:bg-accent hover:text-white transition-all font-mono uppercase tracking-tighter bg-white shadow-sm"
                            >
                              {label}
                            </a>
                          );
                        })}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AISection({ lastScan }: { lastScan: Date }) {
  const [isScanning, setIsScanning] = useState(false);
  const [scanTime, setScanTime] = useState(lastScan);
  const [displayedTrends, setDisplayedTrends] = useState(() => AI_TRENDS.slice(0, 3));

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanTime(new Date());
      const shuffled = [...AI_TRENDS].sort(() => 0.5 - Math.random());
      setDisplayedTrends(shuffled.slice(0, 3));
    }, 2000);
  };

  return (
    <section>
      <header className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-4xl italic-heading mb-2">Market Horizons.</h2>
          <p className="text-ink/60">Live AI trends scanned from global research hubs and repositories.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-[10px] font-mono uppercase opacity-40">Last Internet Scan</p>
            <p className="text-xs font-medium">{scanTime.toLocaleString()}</p>
          </div>
          <button
            onClick={handleScan}
            disabled={isScanning}
            className={`px-6 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all ${isScanning ? 'bg-accent/20 text-accent cursor-wait' : 'bg-ink text-white hover:bg-accent'
              }`}
          >
            {isScanning ? 'Scanning...' : 'Scan Now'}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {displayedTrends.map((trend, i) => (
          <div key={i} className="p-8 border border-ink/10 rounded-3xl bg-white hover:border-accent/30 transition-all group flex flex-col h-full shadow-sm hover:shadow-md">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-accent/5 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <TrendingUp size={20} />
              </div>
              <span className="text-[10px] font-mono opacity-20">0{i + 1}</span>
            </div>
            <h3 className="text-xl italic-heading mb-3 group-hover:text-accent transition-colors">{trend.title}</h3>
            <p className="text-xs text-ink/60 mb-8 leading-relaxed flex-grow">{trend.description}</p>
            <div className="mt-auto space-y-2 pt-6 border-t border-ink/5">
              {trend.resources.map((r, rid) => (
                <a
                  key={rid}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-accent hover:underline group/link"
                >
                  <span>Read Report</span>
                  <ChevronRight size={10} className="transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 border border-accent/10 bg-accent/[0.02] rounded-3xl overflow-hidden relative">
        <div className="relative z-[1]">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent">Active Monitoring Policy</span>
          </div>
          <h3 className="text-2xl italic-heading mb-4">Daily Global Scan Engine</h3>
          <p className="text-sm text-ink/70 max-w-2xl leading-relaxed mb-8">
            Our system performs 24/7 automated indexing of technical breakthroughs. We prioritize Agentic Sovereignty, Hardware physical grounding, and Neuro-symbolic safety research.
          </p>
          <div className="flex flex-wrap gap-4">
            {['ArXiv', 'Github', 'DeepMind', 'OpenAI', 'Y Combinator'].map((source) => (
              <span key={source} className="text-[10px] font-mono px-3 py-1 border border-ink/10 rounded-full opacity-40">{source}</span>
            ))}
          </div>
        </div>
        <Cpu size={140} className="absolute -bottom-8 -right-8 opacity-[0.03] rotate-12" />
      </div>
    </section>
  );
}

function AptitudeSection() {
  return (
    <section id="aptitude">
      <header className="mb-12">
        <h2 className="text-4xl italic-heading mb-2">Logical Precision.</h2>
        <p className="text-ink/60">Quantitative Aptitude and Reasoning by <span className="text-accent font-medium">Aditya Ranjan Sir & Rakesh Yadav</span>.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest opacity-40 mb-6 border-b border-ink/10 pb-2">Quantitative Aptitude (Maths)</h3>
          <div className="space-y-3">
            {APTITUDE_TOPICS.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border border-ink/5 bg-white hover:border-accent hover:shadow-md transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 flex flex-shrink-0 items-center justify-center bg-blue-50 text-accent rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                    <Youtube size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-accent transition-colors line-clamp-1">{r.title}</h4>
                    <p className="text-[10px] opacity-50 uppercase font-mono tracking-tighter mt-1">{r.platform}</p>
                  </div>
                </div>
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest opacity-40 mb-6 border-b border-ink/10 pb-2">Reasoning & GS Focus</h3>
          <div className="space-y-6 mb-8">
            <div className="group p-8 border border-ink/5 rounded-3xl bg-white hover:border-accent/20 transition-all shadow-sm hover:shadow-md">
              <h4 className="italic-heading text-xl mb-3 group-hover:text-accent transition-colors">Analytical Reasoning</h4>
              <p className="text-xs text-ink/60 mb-6 leading-relaxed">Logical reasoning and analytical ability for decision-making and problem-solving.</p>
              <div className="flex space-x-2">
                <span className="text-[9px] px-2 py-0.5 rounded border border-accent/20 text-accent font-mono">LOGICAL</span>
                <span className="text-[9px] px-2 py-0.5 rounded border border-accent/20 text-accent font-mono">PUZZLES</span>
              </div>
            </div>

            <div className="space-y-3">
              {EXTRA_APTITUDE_TOPICS.map((r, i) => (
                <a
                  key={i}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl border border-ink/5 bg-white hover:border-accent hover:shadow-md transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 flex flex-shrink-0 items-center justify-center bg-purple-50 text-purple-600 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Youtube size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium group-hover:text-purple-600 transition-colors line-clamp-1">{r.title}</h4>
                      <p className="text-[10px] opacity-50 uppercase font-mono tracking-tighter mt-1">{r.platform}</p>
                    </div>
                  </div>
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-600 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheorySection() {
  return (
    <section id="gs-theory">
      <header className="mb-12">
        <h2 className="text-4xl italic-heading mb-2">The Civil Core.</h2>
        <p className="text-ink/60">GS Paper I & II Theory powered by <span className="text-accent font-medium">Bookstawa</span>.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <div className="p-8 bg-blue-50/30 border border-blue-100 rounded-3xl">
          <h3 className="text-[13px] font-bold uppercase tracking-widest text-blue-800 mb-6 border-b border-blue-100 pb-4">General Studies Paper I</h3>
          <div className="space-y-2">
            {[
              { text: "Current events of national and international importance.", url: "https://www.youtube.com/results?search_query=upsc+current+events+playlist" },
              { text: "History of India and Indian National Movement.", url: "https://www.youtube.com/playlist?list=PLZfz5K8XpMW1BCazrkRFzS9NxCZVMiXcM" },
              { text: "Indian and World Geography - Physical, Social, Economic Geography of India and the World.", url: "https://www.youtube.com/playlist?list=PLZfz5K8XpMW0RQKIkvGyWlHRYaj0FoaeT" },
              { text: "Indian Polity and Governance - Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc.", url: "https://www.youtube.com/playlist?list=PLZfz5K8XpMW2mGIuerMSMDc5LjeoAABjN" },
              { text: "Economic and Social Development Sustainable Development, Poverty, Inclusion, Demographics, Social Sector initiatives, etc.", url: "https://www.youtube.com/playlist?list=PLZfz5K8XpMW3p6uoaRSnmClfoe5bNvCjm" },
              { text: "General issues on Environmental Ecology, Bio-diversity and Climate Change.", url: "https://www.youtube.com/watch?v=k_sYIs8C-IQ" },
              { text: "General Science.", url: "https://www.youtube.com/watch?v=Z39MoLhp9uw" }
            ].map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-blue-100/50 transition-colors group">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <p className="text-[11px] text-blue-900/70 leading-relaxed flex-1 group-hover:text-blue-900 transition-colors">{item.text}</p>
                <ChevronRight size={14} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>

        <div className="p-8 bg-teal-50/30 border border-teal-100 rounded-3xl">
          <h3 className="text-[13px] font-bold uppercase tracking-widest text-teal-800 mb-6 border-b border-teal-100 pb-4">General Studies Paper II CSAT</h3>
          <div className="space-y-2">
            {[
              { text: "Comprehension", url: "https://www.youtube.com/results?search_query=upsc+csat+reading+comprehension" },
              { text: "Interpersonal skills including communication skills;", url: "https://www.youtube.com/results?search_query=upsc+csat+interpersonal+skills" },
              { text: "Logical reasoning and analytical ability", url: "https://www.youtube.com/results?search_query=rakesh+yadav+reasoning+playlist" },
              { text: "Decision-making and problem-solving", url: "https://www.youtube.com/results?search_query=upsc+csat+decision+making" },
              { text: "General mental ability", url: "https://www.youtube.com/results?search_query=rakesh+yadav+general+mental+ability" },
              { text: "Basic numeracy (numbers and their relations, orders of magnitude, etc.) (Class X level), Data interpretation (charts, graphs, tables, data sufficiency etc. - Class X level)", url: "https://www.youtube.com/results?search_query=aditya+ranjan+sir+maths+playlist" },
              { text: "English Language Comprehension skills (Class X level).", url: "https://www.youtube.com/results?search_query=upsc+csat+english+comprehension" }
            ].map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-teal-100/50 transition-colors group">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                <p className="text-[11px] text-teal-900/70 leading-relaxed flex-1 group-hover:text-teal-900 transition-colors">{item.text}</p>
                <ChevronRight size={14} className="text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
        {Object.entries(THEORY_SUBJECTS).map(([key, subject]) => (
          <div key={key} className="p-8 border border-ink/5 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group flex flex-col h-full border-b-4 border-b-transparent hover:border-b-accent">
            <div className="mb-8">
              {key === 'polity' && <Scale size={24} className="text-accent/40" />}
              {key === 'history' && <History size={24} className="text-accent/40" />}
              {key === 'economics' && <BarChart2 size={24} className="text-accent/40" />}
              {key === 'geography' && <Globe size={24} className="text-accent/40" />}
            </div>
            <h3 className="text-2xl italic-heading mb-2 group-hover:text-accent transition-colors">{subject.title}</h3>
            {subject.recommendation && (
              <div className="inline-flex items-center space-x-2 px-2 py-1 bg-accent/10 rounded mb-6 w-fit">
                <Book size={10} className="text-accent" />
                <span className="text-[10px] font-mono text-accent uppercase tracking-tighter">Rec: {subject.recommendation}</span>
              </div>
            )}
            <div className="space-y-4 mb-8 flex-grow">
              {subject.resources.slice(0, 4).map((res, rid) => (
                <a key={rid} href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-[13px] font-medium text-ink/70 hover:text-accent transition-colors group/link py-2 px-1 -ml-1 rounded-lg hover:bg-accent/5">
                  <span className="opacity-40 font-mono text-[10px] w-5">0{rid + 1}</span>
                  <span className="truncate flex-1">{res.title}</span>
                  <ChevronRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity ml-auto flex-shrink-0" />
                </a>
              ))}
            </div>
            <div className="mt-auto pt-6 border-t border-ink/5">
              <a href={subject.resources[0].url} target="_blank" rel="noopener noreferrer" className="block w-full">
                <div className="text-[10px] font-mono uppercase tracking-widest text-ink/30 group-hover:text-accent transition-colors flex items-center justify-between w-full cursor-pointer">
                  <span>Explore Fully</span>
                  <Youtube size={14} className="opacity-50" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 border border-accent/10 bg-white rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <Brain size={24} />
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent mb-1">Bookstawa Strategy</h4>
            <p className="text-sm italic font-serif opacity-70">Focus on "Conceptual Clarity" videos for complex Polity and History events.</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://upsc.gov.in/examinations/active-exams" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-ink/10 rounded-full text-[10px] font-mono uppercase tracking-widest hover:border-accent hover:text-accent transition-all cursor-pointer">View Exam Dates</a>
          <a href="https://upsc.gov.in/sites/default/files/Syllabus-CSE-2023-e-170123.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-ink text-white rounded-full text-[10px] font-mono uppercase tracking-widest hover:bg-accent transition-all cursor-pointer">Full Syllabus PDF</a>
        </div>
      </div>
    </section>
  );
}
