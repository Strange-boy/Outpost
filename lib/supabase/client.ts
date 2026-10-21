'use client'

import { useMemo } from 'react'
import { useSession } from '@clerk/nextjs'
import { createClient } from '@supabase/supabase-js'

/**
 * Browser Supabase client for Realtime only. Data access goes through Prisma
 * on the server. Auth is handled by Clerk: its session token is forwarded to
 * Supabase (requires Clerk configured as a Third-Party Auth provider), so RLS
 * policies can match on `auth.jwt()->>'sub'`.
 */
export function useSupabase() {
  const { session } = useSession()

  return useMemo(
    () =>
      createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
          accessToken: async () => (await session?.getToken()) ?? null,
        }
      ),
    [session]
  )
}
