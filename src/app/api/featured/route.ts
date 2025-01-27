import { NextResponse } from 'next/server';
import type { Film } from '@/types/film';

// Mock data - replace with actual database calls later
const featuredFilms: Film[] = [
  {
    id: 1,
    title: "The Forest Whispers",
    posterUrl: "/images/forest-whispers.jpg",
    description: "A haunting tale of mystery in the deep woods"
  },
  {
    id: 2,
    title: "Urban Dreams",
    posterUrl: "/images/urban-dreams.jpg",
    description: "Life in the city takes an unexpected turn"
  },
  {
    id: 3,
    title: "Tomorrow's Promise",
    posterUrl: "/images/tomorrow.jpg",
    description: "A story of hope and redemption"
  }
];

export async function GET() {
  try {
    return NextResponse.json(featuredFilms);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch featured films' },
      { status: 500 }
    );
  }
}
