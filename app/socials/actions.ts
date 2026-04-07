'use server';

import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';

export async function postMessage(formData: FormData) {
  const sql = neon(process.env.DATABASE_POSTGRES_URL!);
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  if (!name || !message) return;

  await sql`INSERT INTO guestbook (name, message) VALUES (${name}, ${message})`;
  
  // This refreshes the page so the new message appears instantly
  revalidatePath('/socials');
}