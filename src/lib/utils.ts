import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLocalStorage(key: string) {
  const existingStoredString =
    typeof window !== 'undefined' ? localStorage.getItem(key) : ''
  const existingData =
    existingStoredString !== null && typeof window !== 'undefined'
      ? JSON.parse(existingStoredString)
      : []
  return existingData
}
