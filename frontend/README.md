# EcoSort AI Bin - Frontend v2 (React + Vite + Tailwind)

    npm install
    npm run dev        # http://localhost:5173

## Features
- Sirf dark (black-green) theme
- Guest: Home, About, How it Works, Contact + Login (navbar ke right par)
- Login ke baad: Dashboard, Live Sorting, Statistics, Waste Records, Profile, Settings
- Reveal animation: elements top/left/right/bottom se aate hain (components/ui/Reveal.jsx)
- 3D feel: Tilt cards, perspective page transitions, 3D buttons

## Structure
- src/layouts        PublicLayout (guest) / AppLayout (sidebar, login ke baad)
- src/components     ui/ (Card, Tilt, Reveal, ThemeToggle...), layout/, home/, live/
- src/context        ThemeContext, AuthContext (demo), SystemContext (live data - demo simulation)
- src/data           constants.js (stages, team, colours)
- src/pages          public/ auth/ app/

## Backend / hardware jodte waqt
- AuthContext.jsx: login/signup/updateProfile mein API calls
- SystemContext.jsx: makeDetection() aur stage timer ki jagah Socket.io events
- constants.js: DEVELOPERS mein team ke asli naam/email

## Backgrounds
- src/assets/backgrounds/ mein 8 generated eco images hain (forest, bins, conveyor, vision, recycle, globe, sprout, circuit); BackgroundSlideshow.jsx unhe crossfade + zoom + particles ke sath chalata hai.
- Apni photos lagani hon to wahi folder mein daal kar BackgroundSlideshow.jsx ki SCENES list badal dein.
- Scan History: SystemContext ke records mein `img` (URL) dein to asli camera photo dikhegi, warna illustration thumbnail.
