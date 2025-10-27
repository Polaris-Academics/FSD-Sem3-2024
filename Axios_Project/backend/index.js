import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;
const DB_FILE = "./db.json";

function readDB() {
  const data = fs.readFileSync(DB_FILE);
  return JSON.parse(data);
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
}

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const db = readDB();
  if (db.users.find((u) => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = { id: db.users.length + 1, username, passwordHash };
  db.users.push(newUser);
  writeDB(db);
  res.json({ message: "User created successfully" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const db = readDB();
  const user = db.users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ message: "Invalid username or password" });
  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) return res.status(400).json({ message: "Invalid username or password" });
  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ message: "Login successful", token });
});

app.get("/contacts", authMiddleware, (req, res) => {
  const db = readDB();
  const userContacts = db.contacts.filter((c) => c.owner === req.user.username);
  res.json(userContacts);
});

app.post("/contacts", authMiddleware, (req, res) => {
  const { name, phone } = req.body;
  const db = readDB();
  const newContact = {
    id: db.contacts.length + 1,
    name,
    phone,
    owner: req.user.username
  };
  db.contacts.push(newContact);
  writeDB(db);
  res.json({ message: "Contact added", contact: newContact });
});

app.put("/contacts/:id", authMiddleware, (req, res) => {
  const db = readDB();
  const contact = db.contacts.find(
    (c) => c.id == req.params.id && c.owner === req.user.username
  );
  if (!contact) return res.status(404).json({ message: "Contact not found" });
  contact.name = req.body.name || contact.name;
  contact.phone = req.body.phone || contact.phone;
  writeDB(db);
  res.json({ message: "Contact updated", contact });
});

app.delete("/contacts/:id", authMiddleware, (req, res) => {
  const db = readDB();
  const index = db.contacts.findIndex(
    (c) => c.id == req.params.id && c.owner === req.user.username
  );
  if (index === -1) return res.status(404).json({ message: "Contact not found" });
  db.contacts.splice(index, 1);
  writeDB(db);
  res.json({ message: "Contact deleted" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));