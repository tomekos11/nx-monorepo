<template>
  <div class="container">
    <h1>Lista Osób</h1>
    
    <div v-if="pending" class="loading">
      Ładowanie...
    </div>
    
    <div v-else-if="error" class="error">
      Błąd: {{ error }}
    </div>
    
    <div v-else-if="data?.success" class="people-grid">
      <div 
        v-for="person in data.data" 
        :key="person.id" 
        class="person-card"
      >
        <h3>{{ person.firstName }} {{ person.lastName }}</h3>
        <p><strong>Email:</strong> {{ person.email }}</p>
        <p><strong>Wiek:</strong> {{ person.age }} lat</p>
        <p><strong>Miasto:</strong> {{ person.city }}</p>
        <p><strong>Kraj:</strong> {{ person.country }}</p>
      </div>
    </div>
    
    <div v-else class="error">
      Nie udało się pobrać danych
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PersonResponse } from 'shared-types'

const config = useRuntimeConfig()

const { data, pending, error } = await $fetch<PersonResponse>(`${config.public.apiBaseUrl}/api/people`)
  .then(response => ({ data: response, pending: false, error: null }))
  .catch(err => ({ data: null, pending: false, error: err.message }))
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #3498db;
}

.error {
  text-align: center;
  color: #e74c3c;
  background-color: #fdf2f2;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e74c3c;
}

.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.person-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e8ed;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.person-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.person-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.person-card p {
  margin: 0.5rem 0;
  color: #555;
}

.person-card strong {
  color: #2c3e50;
}
</style>
