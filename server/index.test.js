const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');
const {items} = require("./seedData.js")
const request = require("supertest")
const app = require("./app.js")

describe("testing items endpoint", () => {
    it("returns all items", async () => {
        const res = await request(app).get("/api/items")
        expect(res.body.length).toBe(20)
        expect(res.statusCode).toBe(200)
        expect(res.body).toMatchObject(items)
    })
    it('returns a single item', async () => {
        const res = await request(app).get('/api/items/4')
        expect(res.body.id).toBe(4)
        expect(res.body).toMatchObject(items[3])
        expect(res.statusCode).toBe(200)
    })
})