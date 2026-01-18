# jsAsyncSquareAdSlider 📈

A professional, high-performance square advertisement widget built with modern JavaScript. This project uses an asynchronous engine to cycle through promotional banners with individual display timings.

## ✨ Key Features

- **Ad-Specific Logic**: Each banner in the `BANNER_CONFIG` has its own unique display duration (e.g., a "Hot Offer" can stay longer than a regular ad).
- **Asynchronous Loop**: Powered by `async/await` and Promises, ensuring perfectly timed transitions without blocking the main thread.
- **Smart "Interruption" System**: If a user interacts with the manual navigation (Prev/Next), the auto-cycle intelligently resets to prevent "jittery" transitions.
- **Visual Progress Timer**: An integrated loader bar shows potential customers exactly how much time is left for the current offer.
- **Optimized for Ads**: Square (1:1) aspect ratio with `object-fit: cover` ensures that ad creatives look sharp and professional, filling the entire viewport without black borders.
- **Smooth Fading**: Uses `requestAnimationFrame` for a premium "soft-emergence" effect rather than a basic CSS snap.

## 🛠️ Technical Implementation

- **CSS Grid & Flexbox**: For precise control over the ad's UI elements.
- **Async Engine**: 
  - `await showSlide()`: Manages the lifecycle of a single advertisement.
  - `await wait(ms)`: A custom Promise-based delay utility.
- **Hardware-Accelerated Transitions**: Smooth opacity and scaling that feels native.

## 📁 Files

- `ads-container.html` — The ad unit skeleton.
- `ads-animations.css` — Styling and square-format definitions.
- `ads-engine.js` — The logic behind the promo cycling.

## 🚀 Installation

1. Clone the repository.
2. Place your 1024x1024 (or similar) ad creatives in the `imgs/` folder.
3. Open the HTML file to see the marketing engine in action.

## 📖 License
MIT License. Free for commercial and personal use.
