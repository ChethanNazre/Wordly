import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import { loadGameStateFromLocalStorage } from './localStorage'

/**
 * Checks if a word is in the valid word list or the main word list.
 */
export const isWordInWordList = (word: string) => {
  const lower = word.toLowerCase()
  return WORDS.includes(lower) || VALIDGUESSES.includes(lower)
}

/**
 * Compares the input word with the current solution.
 */
export const isWinningWord = (word: string) => {
  return solution === word.toUpperCase()
}

/**
 * Custom Word Indices – define your special words here.
 * These must exist in the WORDS array.
 */
const happyIndex = WORDS.indexOf('happy')
const birthIndex = WORDS.indexOf('birth')
const monthIndex = WORDS.indexOf('month')

/**
 * Safe helper to fallback to a default if index lookup fails.
 */
const getSafeIndex = (index: number, fallback: number = 0) => {
  return index >= 0 && index < WORDS.length ? index : fallback
}

/**
 * Fetch today's word — controlled manually by saved state.
 */
export const getWordOfDay = () => {
  const state = loadGameStateFromLocalStorage()
  let index: number

  switch (state?.index) {
    case 1:
      index = getSafeIndex(birthIndex, happyIndex)
      break
    case 2:
      index = getSafeIndex(monthIndex, happyIndex)
      break
    default:
      index = getSafeIndex(happyIndex)
      break
  }

  const solutionWord = WORDS[index]?.toUpperCase() || 'HAPPY' // fallback to 'HAPPY' if undefined

  return {
    solution: solutionWord,
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
