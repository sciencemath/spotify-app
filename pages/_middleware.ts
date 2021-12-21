import { NextResponse } from 'next/server';

const signedinPages = ['/', '/playlist', '/library'];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const { SPOTIFY_ACCESS_TOKEN: token } = req.cookies;

    if (!token) {
      return NextResponse.redirect('/signin');
    }
  }
}
