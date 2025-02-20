import { redirect } from 'next/navigation'
import type { ReactNode } from 'react'

export default function Page({ children }: { children: ReactNode }) {
    redirect('/')
    return {children} 
}
