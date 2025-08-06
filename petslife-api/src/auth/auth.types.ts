export interface jwtPayload {
  id: number;
  name: string;
  username: string;
  email: string;
  crmv?: string;
  role: 'USER' | 'VETERINARIAN';
  iat?: number;
  exp?: number;
}
