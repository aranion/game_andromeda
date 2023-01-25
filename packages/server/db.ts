import { Client } from 'pg';

export const createClientAndConnect = async (): Promise<Client | null> => {
  try {
    const client = new Client({
      host: 'postgres',
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: Number(process.env.POSTGRES_PORT || 5432),
    });

    console.log('>>>DEBUG<<<', client);

    await client.connect();

    const res = await client.query('SELECT NOW()');
    console.log('>>>DEBUG<<<', res);
    console.log('  ➜ 🎸 Connected to the database at:', res?.rows?.[0].now);
    client.end();

    return client;
  } catch (e) {
    console.error(e);
  }

  return null;
};
