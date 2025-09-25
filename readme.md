# @imprakhartripathi/reactron

![Reactron](https://img.shields.io/npm/v/@imprakhartripathi/reactron?style=flat-square)
![License](https://img.shields.io/npm/l/@imprakhartripathi/reactron?style=flat-square)
![Downloads](https://img.shields.io/npm/dt/@imprakhartripathi/reactron?style=flat-square)

🚀 A CLI tool to quickly create a custom structured React application with TypeScript and Vite, following a Custom Component-Page-Service architecture pattern.

---

## ✨ Features

* ⚡️ **Vite-powered** - Lightning fast development server and optimized builds
* 🧩 **TypeScript** - Type safety and better developer experience
* 📁 **Custom Structure** - Organized folder structure with components, pages, and services
* 🎨 **SCSS Support** - Enhanced styling capabilities with Sass
* 🌓 **Theme Switching** - Built-in light/dark mode with theme service
* 🧭 **React Router** - Configured routing with strict mode and navigation
* 🔧 **ESLint** - Code quality and consistency
* 🔄 **Auto-merging** - Automatically merges scripts and dependencies into your project's `package.json`

---

## 📦 Installation

You don't need to install it globally — just use `npx`:

```bash
npx @imprakhartripathi/reactron init
```

Or install globally:

```bash
npm install -g @imprakhartripathi/reactron
reactron init
```

---

## ⚡ Usage

Run inside an empty directory (or an existing React project):

```bash
# Create a new directory for your project
mkdir my-react-app
cd my-react-app

# Initialize a new React app with Reactron
npx @imprakhartripathi/reactron init

# Install dependencies
npm install

# Start the development server
npm run dev
```

This will:

1. Copy the React template into your current directory.
2. Merge the template's `scripts`, `dependencies`, and `devDependencies` into your project's root `package.json`.
3. Leave you ready to go with a working React setup.

---

## 📜 Available Scripts

After initialization, you'll have these scripts in your `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

---

## 📁 Project Structure

Reactron creates a project with the following structure:

```
my-reactron-app/
├── public/
│   └── vite.svg
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── homepage/
│   │   │   │   ├── homepage.component.scss
│   │   │   │   └── homepage.component.tsx
│   │   │   └── navigation/
│   │   │       ├── navigation.component.scss
│   │   │       └── navigation.component.tsx
│   │   ├── pages/
│   │   │   └── welcome/
│   │   │       ├── welcome.scss
│   │   │       └── welcome.tsx
│   │   └── services/
│   │       └── theme/
│   │           └── theme.service.tsx
│   ├── assets/
│   │   └── react.svg
│   ├── App.scss
│   ├── App.tsx
│   ├── index.scss
│   ├── main.tsx
│   └── router.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🛠️ Key Components

### Theme Service

The template includes a built-in theme service that provides light and dark mode functionality:

```tsx
// Using the theme service
import { useTheme } from './app/services/theme/theme.service';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### Routing

The application comes with pre-configured React Router:

```tsx
// Adding a new route in router.tsx
{
  path: 'about',
  element: <AboutPage />,
}
```

---

## 🎨 Customization

### Styling

The template uses SCSS for styling. Global styles are defined in `src/index.scss`, and component-specific styles are in their respective `.scss` files.

### Adding New Components

1. Create a new directory in `src/app/components/` or `src/app/pages/`
2. Add your component files (e.g., `my-component.component.tsx` and `my-component.component.scss`)
3. Import and use your component where needed

### Adding New Services

1. Create a new directory in `src/app/services/`
2. Add your service file (e.g., `my-service.service.tsx`)
3. Import and use your service where needed

---

## 🚀 Tech Stack

* React 19
* TypeScript
* Vite 7
* React Router 6
* SCSS/Sass
* ESLint 9

---

## 📌 Notes

* The template includes the latest React 19 and Vite 7

---

## 📄 License

MIT © [Prakhar Tripathi](https://www.npmjs.com/~imprakhartripathi)