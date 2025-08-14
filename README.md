# Secure Link Generator

This project contains two applications:

- **Backend**: NestJS API for generating and viewing secure document links.
- **Frontend**: React + Vite application to interact with the backend.

Both projects are configured to run with Docker using `docker-compose`.

## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:wporta/secure-document-link-generator.git
cd secure-document-link-generator
```

---

## Executing the projects with Docker Compose

Build and start the containers:

```bash
docker-compose up -d
```

Open your browser and visit the frontend:

```
http://localhost:5173
```

---

## Stopping the Project

To stop and remove containers:

```bash
docker-compose down
```

---

## Executing the projects manually

Both projects can be executed manually:

### Backend

Installing dependencies:

```
cd backend
npm install
```

Running the project

```
npm run start:dev
```

Now you can use the url: `http://localhost:3000/api/generate-link`

### FrontEnd

Installing dependencies:

```
cd frontend
npm install
```

Running the project

```
npm run start

```

Now you can use the url: `http://localhost:5173/`
