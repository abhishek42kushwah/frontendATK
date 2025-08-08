# Atulya Karigari Frontend

This is the frontend for Atulya Karigari, built with [React](https://react.dev/) and [Vite](https://vitejs.dev/). It features a modern UI, authentication, and integration with a backend API.

## Features

- User authentication (login/signup)
- Protected routes using context
- Responsive design with [Tailwind CSS](https://tailwindcss.com/)
- Toast notifications
- Modular component structure

## Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── tailwind.config.js
├── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/frontendatk.git
   cd frontendatk
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   - Edit `.env` and set your API endpoint, e.g.:
     ```
     VITE_APP_API=http://localhost:5000/api/
     ```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:

```sh
npm run build
```

### Lint

To run ESLint:

```sh
npm run lint
```

## Customization

- **Tailwind CSS**: Edit `tailwind.config.js` for custom colors and fonts.
- **API Services**: See [`src/services/ApiServices.jsx`](src/services/ApiServices.jsx) for API integration.
- **Authentication**: Context and hooks in [`src/services/AuthContext.jsx`](src/services/AuthContext.jsx).

## License

MIT

---

For questions or support, contact [atulyakarigariindia@gmail.com](mailto:atulyakarigariindia@gmail.com)