import { atom } from 'jotai'

export const firstNameAtom = atom<string>('')
export const lastnameAtom = atom<string>('')
export const ageAtom = atom<number>(0)
export const hobbiesAtom = atom<string[]>([])
