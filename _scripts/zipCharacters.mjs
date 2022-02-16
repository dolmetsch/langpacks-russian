import readJSON from './utils/readJSON.mjs'
import zipAlphabetCharacters from './utils/zipAlphabetCharacters.mjs'


const alphabet = readJSON('../characters/alphabet.json')
const layout = readJSON('../keyboard_layouts/macos-default.inverse.json')
const frequencies = readJSON('../maps/frequencies.json')
const uppercases = readJSON('../maps/uppercase.json')

const subsets = {
    'vowel': readJSON('../characters/subsets/vowels.json'),
    'consonant': readJSON('../characters/subsets/consonants.json'),
    'other': readJSON('../characters/subsets/other.json'),
}


console.log(
    JSON.stringify(
        zipAlphabetCharacters(alphabet, subsets, frequencies, layout, uppercases)
    )
)
