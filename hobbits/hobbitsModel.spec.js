const request = require('supertest')

const db = require('../data/dbConfig')
const Hobbits = require('./hobbitsModel')

describe('hobbits model', () => {
    describe('insert()', () => {
        afterEach(async () => {
            await db('hobbits').truncate()
        })
        it('should insert the provided hobbit', async () => {
            const hobbit = await Hobbits.insert({ name: "Sam" })
            expect(hobbit.name).toBe("Sam")
        })
        it('should insert the provided hobbits into the db', async () => {
            await Hobbits.insert({ name: "Sam" })
            await Hobbits.insert({ name: "Frodo" })
            const hobbits = await db('hobbits')
            expect(hobbits).toHaveLength(2)
        })
    })
})