# 🔗 TransChain

A simple blockchain implementation using Node.js and Express with a frontend interface.
This project demonstrates basic blockchain concepts including proof-of-work, block validation, and data persistence.

---

## 🎯 Project Description

This project was created as part of the Node.js course assignment. It implements a basic blockchain with:

- Block creation with transaction data (sender, recipient, amount)
- Proof-of-Work mining system
- Chain validation
- Simple web interface

---

## ✅ Project Requirements Met

- **RESTful API:** Create, list, and validate blocks
- **MVC Pattern:** Models, Views (frontend), Controllers
- **ES6 Modules:** Modern JavaScript syntax
- **Blockchain Features:** 
  - Proof-of-Work mining
  - Chain validation
  - Data persistence
- **Error Handling:** Centralized error management
- **Testing:** Jest-based TDD approach

---

## 🖥️ Requirements

- Node.js (v18 or newer)
- npm

---

## 🚀 How to Run

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm run dev
```

3. Open in browser:
```
http://localhost:3000
```

---

## 📁 Project Structure

```
project-2/
├── public/             # Frontend files
├── models/             # Blockchain logic
├── controllers/        # API controllers
├── routes/            # API routes
├── utils/             # Helper functions
├── tests/             # Jest tests
└── blockchain.json    # Data storage
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/blocks | Get all blocks |
| POST   | /api/blocks | Add new block |
| GET    | /api/blocks/validate | Validate chain |

---

## 🧪 Testing

Run tests with:
```bash
npm test
```

Tests cover:
- Block creation
- Mining process
- Chain validation
- Data integrity

