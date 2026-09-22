# AI Smart Event Management System

> A modern web-based event management platform for centralized event monitoring, analytics, insights, notifications, and event operations.

## Overview

**AI Smart Event Management System** is a React-based event management application designed to provide a centralized dashboard for managing events and monitoring key event information.

The application combines event management, data visualization, activity tracking, notifications, calendar-based organization, and an AI Insights interface into a unified dashboard.

The current implementation focuses on the frontend experience and provides a scalable foundation for integrating real-time data, machine learning, backend APIs, and intelligent event-safety services.

## Key Features

- **Interactive Dashboard** — Centralized view of event statistics, activities, insights, and notifications.
- **Event Management** — Create, view, edit, delete, search, filter, and paginate events.
- **Analytics & Visualization** — Charts and category-based visualizations for event information.
- **AI Insights** — Dedicated interface for presenting intelligent event-related insights.
- **Activity Timeline** — Track recent event-related activities.
- **Notifications** — Centralized notification and alert interface.
- **Calendar** — Organized view of event activities and schedules.
- **Authentication UI** — Login and registration interfaces.
- **Responsive Layout** — Dashboard interface designed for different screen sizes.
- **Reusable Components** — Modular React components for maintainability and future expansion.

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript |
| Build Tool | Vite |
| Styling | CSS, Tailwind CSS |
| Data Visualization | Recharts, Chart.js |
| Maps | Leaflet, React Leaflet |
| Package Management | npm |
| Version Control | Git, GitHub |
| Development | VS Code |

## Application Modules

### Dashboard

The dashboard provides a centralized overview of the event environment through:

- Statistics cards
- Analytics charts
- AI insights
- Recent activities
- Notifications
- Calendar
- Recent events
- Quick actions

### Event Management

The event management module supports:

- Event creation
- Event editing
- Event deletion
- Event search
- Event filtering
- Event statistics
- Event table
- Pagination

### Analytics

Interactive charts and visualizations provide a structured way to understand event-related information and categories.

### AI Insights

The AI Insights interface provides a dedicated space for intelligent recommendations and event-related analysis.

The architecture is designed to allow future integration with machine-learning models and real-time event data.

## Project Architecture

```text
User
 │
 ▼
React Application
 │
 ├── Dashboard
 │    ├── Statistics
 │    ├── Charts
 │    ├── AI Insights
 │    ├── Notifications
 │    ├── Calendar
 │    └── Activity Timeline
 │
 ├── Event Management
 │    ├── Search
 │    ├── Filters
 │    ├── Add Event
 │    ├── Edit Event
 │    ├── Delete Event
 │    └── Pagination
 │
 ├── Authentication UI
 │    ├── Login
 │    └── Registration
 │
 └── Navigation
      ├── Navbar
      ├── Sidebar
      └── Dashboard Layout
```

## Project Structure

```text
AI-Smart-Event-Management-System/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── events/
│   │   ├── forms/
│   │   ├── layout/
│   │   └── tables/
│   │
│   ├── pages/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/LokeshBabuMacharla/AI-Smart-Event-Management-System.git
```

Navigate to the project:

```bash
cd AI-Smart-Event-Management-System
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Future Enhancements

The frontend is designed to serve as the foundation for a larger intelligent event-management platform.

Planned extensions include:

- Real-time crowd-density monitoring
- Crowd-density forecasting
- Machine-learning-based risk prediction
- Real-time location monitoring
- Venue and gate-level monitoring
- Emergency alert management
- Backend REST APIs
- MySQL database integration
- Real-time data processing
- AI-powered event recommendations
- Intelligent chatbot
- Cloud deployment

## Project Vision

The long-term goal of the project is to develop an intelligent event operations platform capable of combining **event management, real-time monitoring, predictive analytics, and safety-oriented decision support** within a single system.

## Development Status

| Module | Status |
|---|---|
| React Frontend | ✅ Implemented |
| Dashboard | ✅ Implemented |
| Event Management | ✅ Implemented |
| Analytics & Charts | ✅ Implemented |
| Notifications | ✅ Implemented |
| Calendar | ✅ Implemented |
| AI Insights Interface | ✅ Implemented |
| Authentication UI | ✅ Implemented |
| Backend Services | Planned |
| Machine Learning | Planned |
| Real-Time Monitoring | Planned |
| MySQL Integration | Planned |

## Author

**Macharla Lokesh Babu**

B.Tech — Computer Science and Engineering  
K L University

GitHub: [@LokeshBabuMacharla](https://github.com/LokeshBabuMacharla)

## License

This project is developed for educational and portfolio purposes.
