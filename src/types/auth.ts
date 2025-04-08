export interface User {
  email: string;
  password: string;
  createdAt: Date;
}

export interface AuthResponse {
  success: boolean;
  message: string;
}