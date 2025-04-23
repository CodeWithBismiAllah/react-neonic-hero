# React Neonic Hero
A stunning, futuristic, animated hero section component for React applications.

<a href="https://www.npmjs.com/package/bismillahcss">
    <img src="docs/bismillah.svg" alt="npm version">
</a>

<div align="center">
  <a href="https://www.npmjs.com/package/bismillahcss">
    <img src="https://img.shields.io/npm/v/bismillahcss.svg" alt="npm version">
  </a>
  <a href="https://github.com/BismillahCSS/bismillahcss-framework/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/bismillahcss.svg" alt="license">
  </a>
  <a href="https://www.npmjs.com/package/bismillahcss">
    <img src="https://img.shields.io/npm/dt/bismillahcss.svg" alt="downloads">
  </a>
  <a href="https://github.com/BismillahCSS/.github/tree/main/profile">
    <img src="https://img.shields.io/github/stars/BismillahCSS/bismillahcss-framework.svg?style=social" alt="GitHub stars">
  </a>
</div>


![Neonic Hero Preview](../public/hero.png)

## Features

- ✨ Futuristic neon styling with customizable colors
- 🎬 Multiple animation styles and speeds
- 📱 Fully responsive design
- 🌓 Dark and light mode support
- 🎛️ Extensive customization options
- 🔧 TypeScript support with full type definitions
- ⚡ Optimized performance

## Installation

\`\`\`bash
npm install react-neonic-hero
# or
yarn add react-neonic-hero
\`\`\`

## Usage

\`\`\`jsx
import NeonicHero from 'react-neonic-hero';

function App() {
  return (
    <NeonicHero 
      title="Build futuristic UIs with Neonic Hero"
      subtitle="NEXT GENERATION"
      description="Create immersive digital experiences with our animated hero component."
      glowColor="#0ea5e9"
      animationStyle="slide"
    />
  );
}
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Build the future with stunning UI" | Main heading text |
| `subtitle` | string | "NEXT GENERATION" | Small text displayed above the title |
| `description` | string | "Create immersive digital experiences..." | Paragraph text below the title |
| `primaryButtonText` | string | "Get Started" | Text for the primary CTA button |
| `primaryButtonLink` | string | "#" | URL for the primary button |
| `secondaryButtonText` | string | "Learn More" | Text for the secondary button |
| `secondaryButtonLink` | string | "#" | URL for the secondary button |
| `backgroundImage` | string | "https://images.unsplash.com/..." | URL for the background image |
| `showGithubButton` | boolean | true | Whether to show the GitHub button |
| `githubLink` | string | "https://github.com" | URL for the GitHub button |
| `glowColor` | string | "#0ea5e9" | Color for the neon glow effects |
| `textGlowColor` | string | "#0ea5e9" | Color for the text glow effects |
| `animationSpeed` | "slow" \| "medium" \| "fast" | "medium" | Speed of the animations |
| `animationStyle` | "fade" \| "slide" \| "scale" \| "bounce" | "fade" | Style of the animations |
| `layout` | "centered" \| "left" \| "right" | "centered" | Alignment of the content |
| `darkMode` | boolean | true | Whether to use dark mode styling |
| `onPrimaryButtonClick` | () => void | undefined | Callback for primary button click |
| `onSecondaryButtonClick` | () => void | undefined | Callback for secondary button click |

## Examples

### Basic Example

\`\`\`jsx
import NeonicHero from 'react-neonic-hero';

function BasicExample() {
  return (
    <NeonicHero 
      title="Welcome to My Website"
      subtitle="MODERN DESIGN"
      description="Experience the future of web design with our stunning UI components."
      glowColor="#0ea5e9"
    />
  );
}
\`\`\`

### Custom Styling

\`\`\`jsx
import NeonicHero from 'react-neonic-hero';

function CustomExample() {
  return (
    <NeonicHero 
      title="Elevate Your Digital Experience"
      subtitle="PREMIUM QUALITY"
      description="Create immersive web applications with our futuristic components."
      primaryButtonText="Get Started"
      secondaryButtonText="View Demo"
      glowColor="#10b981"
      textGlowColor="#10b981"
      animationStyle="scale"
      animationSpeed="slow"
      layout="left"
      darkMode={true}
    />
  );
}
\`\`\`

### With Event Handlers

\`\`\`jsx
import NeonicHero from 'react-neonic-hero';

function EventHandlersExample() {
  const handlePrimaryClick = () => {
    console.log('Primary button clicked');
    // Add your custom logic here
  };
  
  const handleSecondaryClick = () => {
    console.log('Secondary button clicked');
    // Add your custom logic here
  };

  return (
    <NeonicHero 
      title="Interactive Experience"
      subtitle="FULLY CUSTOMIZABLE"
      description="Add your own event handlers to create interactive experiences."
      onPrimaryButtonClick={handlePrimaryClick}
      onSecondaryButtonClick={handleSecondaryClick}
      animationStyle="bounce"
    />
  );
}
\`\`\`

## Demo

Check out the [live demo](https://your-demo-url.com) to see all the customization options in action.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Your Name]
\`\`\`

```js file="postcss.config.js"
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
