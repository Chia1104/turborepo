# ui

A React UI library based on Tailwind CSS and Radix UI.

You can easily incorporate your own Tailwind config without any conflicts, and it comes with built-in support for `clsx` and `tailwind-merge`.

## Installation

```bash
pnpm add ui tailwind-config
```

## Configuration

You can import the configuration in your tailwind config file by using the following import statement:

### TypeScript

Make sure your tailwind version is at least 3.3.0.

```ts
import type { Config } from "tailwindcss"
import baseConfig, { animation } from "tailwind-config"

export default {
  // other config
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    `node_modules/ui/**/*.{js,ts,jsx,tsx}`,
  ],
  presets: [animation, baseConfig],
} satisfies Config
```

### JavaScript

```js
const baseConfig = require("tailwind-config")
const { animation } = require("tailwind-config")

module.exports = {
  // other config
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    `node_modules/ui/**/*.{js,ts,jsx,tsx}`,
  ],
  presets: [animation, baseConfig],
}
```

## Usage

```tsx
import { Button } from "ui"

export default function App() {
  return <Button className="bg-gray-300">Click me!</Button>
}
```
