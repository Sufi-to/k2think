'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, CheckCircle2, Circle, Clock, Book, ExternalLink } from 'lucide-react'

interface Topic {
  name: string
  duration: string
}

interface Module {
  id: number
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  estimatedHours: number
  topics: Topic[]
  resources: string[]
  completed: boolean
}

interface RoadmapViewProps {
  roadmap: Module[]
}

const difficultyColors = {
  Easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  Medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  Hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
}

export default function RoadmapView({ roadmap }: RoadmapViewProps) {
  const [expandedModules, setExpandedModules] = useState<number[]>([1])
  const [completedModules, setCompletedModules] = useState<number[]>([])

  const toggleModule = (id: number) => {
    setExpandedModules(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    )
  }

  const toggleComplete = (id: number) => {
    setCompletedModules(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    )
  }

  const completionPercentage = Math.round((completedModules.length / roadmap.length) * 100)

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Learning Modules</h3>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            {completedModules.length} of {roadmap.length} completed
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {completionPercentage}% complete
        </div>
      </div>

      {/* Modules */}
      <div className="divide-y divide-slate-200 dark:divide-slate-700">
        {roadmap.map((module, index) => {
          const isExpanded = expandedModules.includes(module.id)
          const isCompleted = completedModules.includes(module.id)

          return (
            <div key={module.id} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50">
              {/* Module Header */}
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Progress Toggle */}
                  <button
                    onClick={() => toggleComplete(module.id)}
                    className="mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    ) : (
                      <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600" />
                    )}
                  </button>

                  {/* Module Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                            Module {module.id}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColors[module.difficulty]}`}>
                            {module.difficulty}
                          </span>
                        </div>
                        <h4 className={`text-lg font-semibold mb-1 ${isCompleted ? 'line-through text-slate-500 dark:text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                          {module.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{module.estimatedHours}h</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Book className="w-4 h-4" />
                            <span>{module.topics.length} topics</span>
                          </div>
                        </div>
                      </div>

                      {/* Expand Button */}
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="ml-4 p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        )}
                      </button>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="mt-4 space-y-4 animate-slide-up">
                        {/* Topics */}
                        <div>
                          <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Topics Covered
                          </h5>
                          <ul className="space-y-2">
                            {module.topics.map((topic, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-400">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>
                                  {topic.name}
                                  <span className="text-slate-500 dark:text-slate-500 ml-1">
                                    ({topic.duration})
                                  </span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Resources */}
                        {module.resources.length > 0 && (
                          <div>
                            <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                              Recommended Resources
                            </h5>
                            <div className="space-y-2">
                              {module.resources.map((resource, idx) => (
                                <a
                                  key={idx}
                                  href="#"
                                  className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                  <span>{resource}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
