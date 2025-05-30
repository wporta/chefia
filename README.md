# 👨‍🍳 Chefia

**Chefia** is a modern web application designed to streamline and enhance the management of culinary operations. Built with a robust tech stack, it offers a responsive and efficient platform for chefs, kitchen staff, and restaurant managers to collaborate seamlessly.

---

## 🚀 Tech Stack

- **Frontend**: React + TypeScript
- **Build Tool**: Vite
- **Containerization**: Docker & Docker Compose
- **Package Manager**: pnpm
- **Linting & Formatting**:
  - ESLint
  - Prettier

---

## 📦 Project Structure

```
chefia/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   ├── pages/              # Application pages
│   ├── styles/             # Styling files
│   └── main.tsx            # Application entry point
├── index.html              # HTML template
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose setup
├── package.json            # Project metadata and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [pnpm](https://pnpm.io/) (v6 or later)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/wporta/chefia.git
   cd chefia
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Start the development server**:

   ```bash
   pnpm dev
   ```

   The application will be accessible at `http://localhost:5173`.

---

## 🐳 Docker Deployment

To run the application using Docker:

1. **Build and start the containers**:

   ```bash
   docker-compose up --build
   ```

2. **Access the application**:

   Navigate to `http://localhost:5173` in your browser.

---

## 🧪 Scripts

- `pnpm dev`: Start the development server with hot module replacement.
- `pnpm build`: Build the application for production.
- `pnpm lint`: Run ESLint to analyze code for potential issues.
- `pnpm format`: Format code using Prettier.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

Developed by [Wilfredo Porta](https://wporta.org/), a passionate Software Engineer based in Managua, Nicaragua, dedicated to creating software that simplifies and enriches lives.
