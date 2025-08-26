import express from 'express';
import cors from 'cors';
import { Person, PersonResponse } from 'shared-types';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
const mockPeople: Person[] = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Kowalski',
    email: 'jan.kowalski@example.com',
    age: 28,
    city: 'Warszawa',
    country: 'Polska'
  },
  {
    id: 2,
    firstName: 'Anna',
    lastName: 'Nowak',
    email: 'anna.nowak@example.com',
    age: 32,
    city: 'Kraków',
    country: 'Polska'
  },
  {
    id: 3,
    firstName: 'Piotr',
    lastName: 'Wiśniewski',
    email: 'piotr.wisniewski@example.com',
    age: 25,
    city: 'Gdańsk',
    country: 'Polska'
  },
  {
    id: 4,
    firstName: 'Maria',
    lastName: 'Wójcik',
    email: 'maria.wojcik@example.com',
    age: 29,
    city: 'Wrocław',
    country: 'Polska'
  },
  {
    id: 5,
    firstName: 'Tomasz',
    lastName: 'Kowalczyk',
    email: 'tomasz.kowalczyk@example.com',
    age: 35,
    city: 'Poznań',
    country: 'Polska'
  }
];

// Routes
app.get('/api/people', (req, res) => {
  const response: PersonResponse = {
    success: true,
    data: mockPeople,
    message: 'People retrieved successfully',
    timestamp: new Date().toISOString()
  };
  
  res.json(response);
});

app.get('/api/people/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = mockPeople.find(p => p.id === id);

  if (!person) {
    return res.status(404).json({ message: 'Not found' });
  }
  
  return res.json(person);
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`👥 People endpoint: http://localhost:${PORT}/api/people`);
});
