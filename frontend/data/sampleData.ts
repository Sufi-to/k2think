export const sampleRoadmap = [
  {
    id: 1,
    title: "Python Fundamentals & Environment Setup",
    difficulty: "Easy" as const,
    estimatedHours: 3,
    topics: [
      { name: "Installing Python and Anaconda", duration: "30 min" },
      { name: "Variables, data types, and operators", duration: "1 hour" },
      { name: "Control structures (if/else, loops)", duration: "1 hour" },
      { name: "Functions and basic file I/O", duration: "30 min" }
    ],
    resources: [
      "Python.org Official Tutorial",
      "Anaconda Installation Guide",
      "Real Python - Python Basics"
    ],
    completed: false
  },
  {
    id: 2,
    title: "Data Structures in Python",
    difficulty: "Easy" as const,
    estimatedHours: 4,
    topics: [
      { name: "Lists, tuples, and sets", duration: "1.5 hours" },
      { name: "Dictionaries and their methods", duration: "1 hour" },
      { name: "List comprehensions", duration: "1 hour" },
      { name: "Working with strings", duration: "30 min" }
    ],
    resources: [
      "Python Data Structures Documentation",
      "DataCamp - Python Lists Tutorial"
    ],
    completed: false
  },
  {
    id: 3,
    title: "Introduction to NumPy",
    difficulty: "Medium" as const,
    estimatedHours: 4,
    topics: [
      { name: "NumPy arrays vs Python lists", duration: "45 min" },
      { name: "Array creation and indexing", duration: "1 hour" },
      { name: "Array operations and broadcasting", duration: "1.5 hours" },
      { name: "Statistical functions", duration: "45 min" }
    ],
    resources: [
      "NumPy Official Documentation",
      "NumPy Quickstart Tutorial"
    ],
    completed: false
  },
  {
    id: 4,
    title: "Pandas for Data Manipulation",
    difficulty: "Medium" as const,
    estimatedHours: 5,
    topics: [
      { name: "Series and DataFrame objects", duration: "1 hour" },
      { name: "Reading and writing data (CSV, Excel)", duration: "1 hour" },
      { name: "Data selection and filtering", duration: "1.5 hours" },
      { name: "Handling missing data", duration: "1 hour" },
      { name: "Basic data aggregation", duration: "30 min" }
    ],
    resources: [
      "Pandas Official Documentation",
      "10 Minutes to Pandas",
      "Kaggle - Pandas Course"
    ],
    completed: false
  },
  {
    id: 5,
    title: "Data Cleaning and Preprocessing",
    difficulty: "Medium" as const,
    estimatedHours: 4,
    topics: [
      { name: "Handling duplicates", duration: "45 min" },
      { name: "Data type conversions", duration: "45 min" },
      { name: "String operations in Pandas", duration: "1 hour" },
      { name: "Data normalization and scaling", duration: "1.5 hours" }
    ],
    resources: [
      "Data Cleaning Best Practices",
      "Real Python - Data Cleaning Guide"
    ],
    completed: false
  },
  {
    id: 6,
    title: "Exploratory Data Analysis (EDA)",
    difficulty: "Medium" as const,
    estimatedHours: 4,
    topics: [
      { name: "Descriptive statistics", duration: "1 hour" },
      { name: "Correlation analysis", duration: "1 hour" },
      { name: "Grouping and pivoting data", duration: "1.5 hours" },
      { name: "Time series basics", duration: "30 min" }
    ],
    resources: [
      "Towards Data Science - EDA Guide",
      "Pandas Profiling Library"
    ],
    completed: false
  },
  {
    id: 7,
    title: "Data Visualization with Matplotlib",
    difficulty: "Medium" as const,
    estimatedHours: 3,
    topics: [
      { name: "Basic plotting (line, bar, scatter)", duration: "1 hour" },
      { name: "Customizing plots (labels, legends, styles)", duration: "1 hour" },
      { name: "Subplots and figure layouts", duration: "1 hour" }
    ],
    resources: [
      "Matplotlib Official Gallery",
      "Python Graph Gallery"
    ],
    completed: false
  },
  {
    id: 8,
    title: "Advanced Visualization with Seaborn",
    difficulty: "Medium" as const,
    estimatedHours: 3,
    topics: [
      { name: "Statistical plots (box, violin, dist)", duration: "1 hour" },
      { name: "Categorical data visualization", duration: "1 hour" },
      { name: "Heatmaps and pair plots", duration: "1 hour" }
    ],
    resources: [
      "Seaborn Official Tutorial",
      "Seaborn Example Gallery"
    ],
    completed: false
  },
  {
    id: 9,
    title: "Working with Real Datasets",
    difficulty: "Hard" as const,
    estimatedHours: 4,
    topics: [
      { name: "Loading data from APIs", duration: "1 hour" },
      { name: "Web scraping basics with BeautifulSoup", duration: "1.5 hours" },
      { name: "Combining multiple data sources", duration: "1.5 hours" }
    ],
    resources: [
      "Requests Library Documentation",
      "BeautifulSoup Tutorial",
      "Public APIs List"
    ],
    completed: false
  },
  {
    id: 10,
    title: "Capstone Project & Best Practices",
    difficulty: "Hard" as const,
    estimatedHours: 6,
    topics: [
      { name: "End-to-end data analysis project", duration: "4 hours" },
      { name: "Code organization and Jupyter notebooks", duration: "1 hour" },
      { name: "Documentation and reporting", duration: "1 hour" }
    ],
    resources: [
      "Kaggle Datasets",
      "Jupyter Notebook Best Practices",
      "Data Analysis Project Templates"
    ],
    completed: false
  }
]

export const sampleReasoning = {
  overview: "This roadmap is designed to build your Python data analysis skills progressively over 8 weeks, starting with fundamentals and advancing to real-world applications. The structure ensures each module builds upon previous knowledge, with strategic pacing that matches your beginner level and available study time of 4.5 hours per week.",
  keyDecisions: [
    {
      decision: "NumPy before Pandas",
      rationale: "NumPy provides the foundational understanding of array operations and vectorization, which Pandas is built upon. This ordering prevents confusion and builds stronger conceptual knowledge."
    },
    {
      decision: "Separate visualization modules (Matplotlib → Seaborn)",
      rationale: "Starting with Matplotlib teaches core plotting concepts, while Seaborn introduction afterward demonstrates higher-level abstractions. This progression helps understand what happens 'under the hood.'"
    },
    {
      decision: "Data cleaning positioned after Pandas basics",
      rationale: "You need to be comfortable with DataFrames before tackling complex cleaning operations. This prevents cognitive overload and builds confidence incrementally."
    },
    {
      decision: "Capstone project at the end",
      rationale: "A comprehensive project synthesizes all learned skills, reinforcing knowledge through practical application and building portfolio-worthy work."
    }
  ]
}

export const sampleCalendarSessions = [
  { week: 1, date: "Mon, Oct 28, 2025 • 6:00 PM", module: "Python Fundamentals & Setup", duration: "1.5h" },
  { week: 1, date: "Wed, Oct 30, 2025 • 6:00 PM", module: "Python Fundamentals (cont.)", duration: "1.5h" },
  { week: 1, date: "Sat, Nov 01, 2025 • 10:00 AM", module: "Data Structures in Python", duration: "1.5h" },
  { week: 2, date: "Mon, Nov 04, 2025 • 6:00 PM", module: "Data Structures (cont.)", duration: "1.5h" },
  { week: 2, date: "Wed, Nov 06, 2025 • 6:00 PM", module: "Introduction to NumPy", duration: "1.5h" },
  { week: 2, date: "Sat, Nov 08, 2025 • 10:00 AM", module: "NumPy Arrays & Operations", duration: "1.5h" },
  { week: 3, date: "Mon, Nov 11, 2025 • 6:00 PM", module: "Pandas Basics", duration: "1.5h" },
  { week: 3, date: "Wed, Nov 13, 2025 • 6:00 PM", module: "Pandas DataFrames", duration: "1.5h" },
  { week: 3, date: "Sat, Nov 15, 2025 • 10:00 AM", module: "Pandas Data Selection", duration: "1.5h" },
  { week: 4, date: "Mon, Nov 18, 2025 • 6:00 PM", module: "Data Cleaning", duration: "1.5h" },
  { week: 4, date: "Wed, Nov 20, 2025 • 6:00 PM", module: "Data Preprocessing", duration: "1.5h" },
  { week: 4, date: "Sat, Nov 22, 2025 • 10:00 AM", module: "Exploratory Data Analysis", duration: "1.5h" }
]
