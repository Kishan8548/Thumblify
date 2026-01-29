# Thumblify

AI-assisted thumbnail generation using prompt-based inputs

[Live Demo](https://thumblify-rho.vercel.app) | [Report Bug](https://github.com/Kishan8548/Thumblify/issues) | [Request Feature](https://github.com/Kishan8548/Thumblify/issues)


---

## About The Project

Thumblify is a web-based thumbnail generation application that allows users to create and manage thumbnails using predefined styles, aspect ratios, and color schemes. The project follows a client–server architecture and focuses on providing a smooth UI with real-time preview and user-based thumbnail management.

### Key Features

- Thumbnail generation with selectable styles
- Real-time preview support
- User-based thumbnail management
- Responsive frontend UI
- Secure backend APIs

### Why Thumblify?

Creating consistent and visually appealing thumbnails can be time-consuming, especially without design tools or experience. Thumblify simplifies this process by offering predefined styles, aspect ratios, and color schemes, allowing users to quickly generate and preview thumbnails through a clean and easy-to-use interface.

---

## Built With

This project is built using modern web technologies:

**Frontend**
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router](https://reactrouter.com/) - Declarative routing for React

**Backend**
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Fast, unopinionated web framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety for backend code

**Deployment**
- [Vercel](https://vercel.com/) - Platform for frontend frameworks and static sites

---

## Project Structure

```
THUMBLIFY/
│
├── client/                  # Frontend (Vite + React + TypeScript)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AspectRatioSelector.tsx
│   │   │   ├── ColorSchemeSelector.tsx
│   │   │   ├── PreviewPanel.tsx
│   │   │   ├── StyleSelector.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── configs/
│   │   │   └── api.ts
│   │   ├── context/
│   │   │   └── AuthContext.tsx
│   │   ├── data/
│   │   │   ├── pricing.ts
│   │   │   ├── testimonial.ts
│   │   │   └── features.tsx
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── Generate.tsx
│   │   │   ├── MyGeneration.tsx
│   │   │   └── YtPreview.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── globals.css
│   │   └── types.ts
│   ├── index.html
│   ├── vite.config.ts
│   ├── package.json
│   └── README.md
│
├── server/                  # Backend (Node.js + Express + TypeScript)
│   ├── configs/
│   │   ├── ai.ts
│   │   └── db.ts
│   ├── controllers/
│   │   ├── AuthController.ts
│   │   ├── ThumbnailController.ts
│   │   └── UserController.ts
│   ├── middlewares/
│   │   └── auth.ts
│   ├── models/
│   │   ├── User.ts
│   │   └── Thumbnail.ts
│   ├── routes/
│   │   ├── AuthRoutes.ts
│   │   ├── UserRoutes.ts
│   │   └── ThumbnailRoutes.ts
│   ├── images/
│   ├── server.ts
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```
---

### Directory Descriptions

**Client (Frontend)**
- `assets/` – Static assets such as images and icons
- `components/` – Reusable UI components (selectors, preview panel, navbar, footer)
- `configs/` – Frontend configuration (API base URL, Axios setup)
- `context/` – React Context for authentication and global state
- `data/` – Static data such as features, pricing, and testimonials
- `pages/` – Route-level page components
- `App.tsx` – Root React component
- `main.tsx` – Application entry point
- `types.ts` – Shared TypeScript interfaces and types
- `globals.css` – Global application styles

**Server (Backend)**
- `configs/` – Database and AI configuration
- `controllers/` – Request handling logic
- `routes/` – API route definitions
- `middlewares/` – Authentication middleware
- `models/` – Database schemas and models
- `images/` – Generated thumbnail storage
- `server.ts` – Backend server entry point

---

## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16.0.0 or higher)
  ```sh
  node --version
  ```
- npm (comes with Node.js)
  ```sh
  npm --version
  ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Kishan8548/Thumblify.git
   ```

2. Navigate to the project directory
   ```sh
   cd Thumblify
   ```

3. Install server dependencies
   ```sh
   cd server
   npm install
   ```

4. Install client dependencies
   ```sh
   cd ../client
   npm install
   ```

5. Set up environment variables

   Create a `.env` file in the `server` directory:
   ```env
   SESSION_SECRET
   MONGODB_URI
   GEMINI_API_KEY
   CLOUDINARY_URL
   ENABLE_GENERATION
   ```

   Create a `.env` file in the `client` directory:
   ```env
   VITE_API_URL
   VITE_EMAILJS_SERVICE_ID
   VITE_EMAILJS_TEMPLATE_ID
   VITE_EMAILJS_PUBLIC_KEY
   ```

6. Start the development server (Backend)
   ```sh
   cd server
   npm run server
   ```

7. Start the development client (Frontend)
   ```sh
   cd client
   npm run dev
   ```

8. Open your browser and navigate to `http://localhost:5173`

---

## Usage

Once the application is running, you can:

1. Enter a Title or Topic describing the thumbnail you want to generate
2. Choose an Aspect Ratio, Style, and Color Scheme
3. (Optional) Add Additional Prompts for specific visual preferences
4. Click Generate Thumbnail to let the AI create your design
5. Preview and regenerate thumbnails instantly

### Example Use Cases

**For YouTube Creators**
```
Generate attention-grabbing video thumbnails with custom text overlays and brand colors
```

**For Bloggers**
```
Create featured images for blog posts that increase click-through rates
```

**For Social Media Managers**
```
Design platform-specific thumbnails optimized for engagement
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Follow the existing code style and structure
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation for new features
- Ensure all tests pass before submitting PR

---

## Contact

Kishan Garhwal - [@Kishan8548](https://github.com/Kishan8548)

Project Link: [https://github.com/Kishan8548/Thumblify](https://github.com/Kishan8548/Thumblify)

---

## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Best README Template](https://github.com/othneildrew/Best-README-Template)

---

<p align="center">Made with ❤️ by Kishan Garhwal</p>
