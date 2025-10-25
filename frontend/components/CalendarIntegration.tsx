'use client'

import { Calendar, Download, ExternalLink, Clock } from 'lucide-react'

interface CalendarSession {
  week: number
  date: string
  module: string
  duration: string
}

interface CalendarIntegrationProps {
  sessions: CalendarSession[]
}

export default function CalendarIntegration({ sessions }: CalendarIntegrationProps) {
  const handleDownloadICS = () => {
    // In a real implementation, this would generate and download an .ics file
    alert('Downloading .ics file...\nThis would contain all your scheduled study sessions.')
  }

  const handleGoogleCalendarSync = () => {
    // In a real implementation, this would initiate OAuth 2.0 flow
    alert('Redirecting to Google Calendar OAuth...\nYour study sessions would be automatically synced.')
  }

  return (
    <div className="space-y-6">
      {/* Calendar Actions */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Study Calendar</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Auto-scheduled sessions</p>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleGoogleCalendarSync}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Sync to Google Calendar</span>
          </button>

          <button
            onClick={handleDownloadICS}
            className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download .ics File</span>
          </button>
        </div>

        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-xs text-blue-700 dark:text-blue-300">
            <strong>📅 Schedule:</strong> 3 sessions/week × 1.5 hours each
          </p>
        </div>
      </div>

      {/* Upcoming Sessions Preview */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
          Next 2 Weeks
        </h4>
        
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600"
            >
              <div className="flex items-start justify-between mb-1">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  Week {session.week}
                </div>
                <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400">
                  <Clock className="w-3 h-3" />
                  <span>{session.duration}</span>
                </div>
              </div>
              <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                {session.module}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {session.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Card */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800 p-6">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
          Study Statistics
        </h4>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600 dark:text-slate-400">Total Hours</span>
            <span className="text-lg font-bold text-slate-900 dark:text-white">36h</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600 dark:text-slate-400">Sessions</span>
            <span className="text-lg font-bold text-slate-900 dark:text-white">24</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600 dark:text-slate-400">Completion Date</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Dec 20, 2025</span>
          </div>
        </div>
      </div>

      {/* Adaptive Rescheduling Note */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
        <p className="text-xs text-amber-800 dark:text-amber-200">
          <strong>🔄 Auto-Rescheduling:</strong> Missed sessions will be automatically rescheduled to fit your availability.
        </p>
      </div>
    </div>
  )
}
