import { NextResponse } from 'next/server';

// idk, I kinda really like APIs

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = 'ZahryaRozi';

  if (!apiKey) {
    return NextResponse.json(null);
  }

  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`,
      {
        cache: 'no-store',
      }
    );

    const data = await res.json();

    const track = data?.recenttracks?.track?.[0];

    if (!track) {
      return NextResponse.json(null);
    }

    const isNowPlaying =
      track['@attr']?.nowplaying === 'true';

    const art =
        track.image?.find((img: any) => img.size === 'extralarge')
          ?.['#text'] ||
        track.image?.find((img: any) => img.size === 'large')
          ?.['#text'] ||
        null;

    return NextResponse.json({
      isNowPlaying,
      name: track.name,
      artist: track.artist['#text'],
      album: track.album['#text'],
      url: track.url,
      art,
    });
  } catch {
    return NextResponse.json(null);
  }
}