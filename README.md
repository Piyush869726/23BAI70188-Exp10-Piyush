# 🧪 Experiment 10: CRUD Operations using Node.js + Express.js

## 👤 Student Details

* **Name:** Piyush Kalyan
* **UID:** 23BAI70188

---

## 🎯 Objective

To develop RESTful APIs using Node.js and Express.js and perform CRUD (Create, Read, Update, Delete) operations on a MongoDB database.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman

---

## 📁 Project Structure

```
23BAI70188-Exp10-Piyush/
│── server.js
│
├── models/
│   └── Student.js
│
├── routes/
│   └── studentRoutes.js
│
├── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```
git clone https://github.com/Piyush869726/23BAI70188-Exp10-Piyush.git
cd 23BAI70188-Exp10-Piyush
```

### 2. Install Dependencies

```
npm install
```

### 3. Start MongoDB

```
mongod
```

### 4. Run Server

```
npx nodemon server.js
```

---

## 🚀 API Endpoints

### 🔹 Create Record

* **Method:** POST
* **URL:** `/api/students`
* **Body:**

```json
{
  "name": "Piyush",
  "email": "piyush@gmail.com",
  "course": "CSE"
}
```

---

### 🔹 Get All Records

* **Method:** GET
* **URL:** `/api/students`

---

### 🔹 Get Single Record

* **Method:** GET
* **URL:** `/api/students/:id`

---

### 🔹 Update Record

* **Method:** PUT
* **URL:** `/api/students/:id`
* **Body:**

```json
{
  "name": "Updated Name"
}
```

---

### 🔹 Delete Record

* **Method:** DELETE
* **URL:** `/api/students/:id`

---

## 🧪 Testing

All APIs were tested using **Postman**.

---

## 📸 Output Screenshots

* Database Connection Successful
* Create Record Output
* Read All Records
* Update Record
* Delete Record
* MongoDB Collection View

---

## 📌 Conclusion

This experiment helped in understanding backend development using Node.js and Express.js, and performing CRUD operations with MongoDB. It also improved knowledge of REST APIs and database connectivity.

---

## ✅ Status

✔ Completed Successfully
