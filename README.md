# React + Vite

 **Theme Changer App**

A simple and responsive Theme Changer application built using React, Context API, and Tailwind CSS.

**Features**

- Light/Dark mode toggle
- Global theme management using Context API
- Responsive UI
- Tailwind CSS styling
- Smooth theme transition effects

**Tech Stack**

- React.js
- Tailwind CSS
- Context API
- Vite

**Project Structure**

src/
│
├── components/
│   ├── Card.jsx
│   └── ThemeBtn.jsx
│
├── contexts/
│   └── theme.js
│
├── App.jsx
├── main.jsx
└── index.css
Installation

**Clone the repository:**
git clone <your-repo-link>

N**avigate to the project folder:**
cd theme-changer

**Install dependencies:**
npm install

**Start development server:**
npm run dev
Dark Mode Setup

**For Tailwind CSS v4:**
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
How It Works
Theme state is managed globally using React Context API.
Clicking the toggle button switches between light and dark themes.
The selected theme updates the html class dynamically.
Future Improvements
Save theme preference in localStorage
Add multiple theme colors
Improve animations
Add product list with dynamic data



Author
Ritesh Sah


