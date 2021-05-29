# Hash Table

## Hash Functions

A hash function is a function where you put in a string and you get back a number. (Strings here means any kind of data)
In technical terminology, we'd say that a hash fucntion "maps strings to numbers."

A has function must have these requirements:

1. It needs to be consistent. For example, you cannot pass "apple" to it two times and get two different outputs
2. It should map different words into different numbers.

## How to create a hash table?

Simply enough, put a hash function with an array and you got yourself a hash table.

## Use Cases

1. Phonebooks
2. Preventing Duplicate Entries
3. Using hash tables as a cache

## How to avoid Collision?

You need two things to avoid collision

1. A low load factor
2. A good hash function

## Load Factor

Number of items in hash table / Total number of slots

Having a load factor of 1, that means that the best case is that every item will get its own slot
Having a load factor of 2, that means it is impossible for every item to get its own slot
