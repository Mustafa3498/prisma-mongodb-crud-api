# Prisma MongoDB CRUD API

A simple REST API built with **Node.js**, **Express.js**, **Prisma ORM**, and **MongoDB**.

---

## Tech Stack

- Node.js
- Express.js
- Prisma ORM v6
- MongoDB

---

## Prerequisites

Before running the project, make sure you have installed:

- Node.js
- MongoDB Community Server
- Git

---

# Installation

## 1. Clone the repository

```bash
git clone <repository-url>
cd prisma-mongodb-crud-api-main
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Create a `.env` file

```env
DATABASE_URL="mongodb://localhost:27017/prisma_demo"
PORT=3000
```

---

## 4. Generate Prisma Client

```bash
npx prisma generate
```

---

## 5. Push the Prisma schema to MongoDB

```bash
npx prisma db push
```

---

## 6. Start the server

```bash
node index.js
```

Server will start on:

```
http://localhost:3000
```

---

# API Endpoints

## Create User

**POST**

```
/users
```

### Request Body

```json
{
  "name": "Mustafa Umer",
  "email": "mustafa@example.com"
}
```

---

## Get All Users

**GET**

```
/users
```

---

# Project Structure

```
.
├── prisma
│   └── schema.prisma
├── index.js
├── package.json
├── package-lock.json
├── .env.example
└── README.md
```

---

# Useful Prisma Commands

Generate Prisma Client

```bash
npx prisma generate
```

Push Schema

```bash
npx prisma db push
```

Open Prisma Studio

```bash
npx prisma studio
```

---

# Notes

- Ensure MongoDB is running before starting the server.
- Update the `DATABASE_URL` in the `.env` file if your MongoDB instance uses different credentials or a different host.
- If using Prisma with MongoDB write operations, MongoDB should be configured as a replica set because Prisma uses transactions for certain operations.

---

# License

This project is for learning and educational purposes.
