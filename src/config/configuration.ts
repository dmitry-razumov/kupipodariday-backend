import { join } from 'path';

export default () => ({
  server: { port: parseInt(process.env.SERVER_PORT, 10) || 3001 },
  database: {
    type: process.env.DATABASE_TYPE || 'postgres',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER || 'student',
    password: process.env.DATABASE_PASSWORD || 'student',
    database: process.env.DATABASE_NAME || 'kupipodariday',
    entities: [join(__dirname, '/../**/*.entity.{js,ts}')],
    synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE) || true,
    logging: true,
  },
  jwt: {
    secret:
      process.env.JWT_SECRET ||
      'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
    exp: process.env.JWT_EXP || '7d',
  },
});
