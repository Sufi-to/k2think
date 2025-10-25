'use client'

import { Lightbulb, Zap } from 'lucide-react'

interface Reasoning {
  overview: string
  keyDecisions: {
    decision: string
    rationale: string
  }[]
}

interface ReasoningSummaryProps {
  reasoning: Reasoning
}

export default function ReasoningSummary({ reasoning }: ReasoningSummaryProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg border border-blue-200 dark:border-slate-600 p-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Why This Plan?</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">K2 Think's Reasoning</p>
        </div>
      </div>

      {/* Overview */}
      <div className="mb-6">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {reasoning.overview}
        </p>
      </div>

      {/* Key Decisions */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
          <Zap className="w-4 h-4 text-yellow-500" />
          <span>Key Planning Decisions</span>
        </h4>
        
        <div className="space-y-3">
          {reasoning.keyDecisions.map((item, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-100 dark:border-slate-600">
              <p className="font-medium text-slate-900 dark:text-white mb-1 text-sm">
                {item.decision}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.rationale}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 pt-4 border-t border-blue-200 dark:border-slate-600">
        <p className="text-xs text-slate-600 dark:text-slate-400 italic">
          This plan was generated using K2 Think's advanced reasoning capabilities, 
          ensuring each module builds logically on previous knowledge while fitting your schedule.
        </p>
      </div>
    </div>
  )
}
