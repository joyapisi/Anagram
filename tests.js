const anagram = require('./anagram-checker')
const assert = require('assert')

describe('Tests', function () {
  it('anagram("friend", "finder") should return a boolean.', function () {
    assert(typeof anagram('friend', 'finder') === 'boolean')
  })
  it('anagram("friend", "finder") should return true.', function () {
    assert(anagram('friend', 'finder') === true)
  })
  it('anagram("friend", "friend") should return true.', function () {
    assert(anagram('friend', 'friend') === true)
  })
  it('anagram("FRIEND", "finder") should return true.', function () {
    assert(anagram('FRIEND', 'finder') === true)
  })
  it('anagram("friend", "finDer") should return true.', function () {
    assert(anagram('friend', 'finDer') === true)
  })
  it('anagram("A gentleman", "Elegant man") should return true.', function () {
    assert(anagram('A gentleman', 'Elegant man') === true)
  })
  it('anagram("Fourth of July", "Joyful Fourth") should return true.', function () {
    assert(anagram('Fourth of July', 'Joyful Fourth') === true)
  })
  it('anagram("O, Draconian devil", "Leonardo da Vinci") should return true.', function () {
    assert(anagram('O, Draconian devil', 'Leonardo da Vinci') === true)
  })
  it('anagram("friend", "find") should return false.', function () {
    assert(anagram('friend', 'find') === false)
  })
  it('anagram("friend", "smile") should return false.', function () {
    assert(anagram('friend', 'find') === false)
  })
})
