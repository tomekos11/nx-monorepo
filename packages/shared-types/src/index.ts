export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  city: string;
  country: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type PersonResponse = ApiResponse<Person[]>;
export type PaginatedPersonResponse = ApiResponse<PaginatedResponse<Person>>;

export interface CreatePersonRequest {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  city: string;
  country: string;
}

export interface UpdatePersonRequest extends Partial<CreatePersonRequest> {
  id: number;
}
