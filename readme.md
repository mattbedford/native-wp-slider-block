# Native WP Slider Block

A native WordPress block that turns its inner blocks into a Swiper.js-powered slider — no extra JavaScript needed.

---

## Features

- 📦 Native block built with `@wordpress/scripts`
- 🧱 Container block with nested block support
- 🎛️ Configurable options:
    - Show/hide navigation
    - Show/hide arrows
    - Autoplay
    - Loop
    - Slides per view
- 🎨 Editor preview with horizontal layout
- 🚀 Frontend powered by [Swiper.js](https://swiperjs.com/) via CDN
- ⚙️ Unique instance IDs for multiple sliders on one page

---

## Development

Install dependencies:

```bash
npm install

// Build
npm run build

// Watch
npm run start

// Format code
npm run format
```

** Folder structure required
```bash
native-wp-slider-block/
├── build/              # Compiled assets (ignored by git)
├── src/                # Block source files (JS, CSS)
├── block.json          # Block config
├── devteam-native-wp-slider.php
├── package.json
├── webpack.config.js
├── .gitignore
└── README.md
```