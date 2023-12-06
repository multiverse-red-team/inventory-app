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
    it('creates a new item', async () => {
        const res = await request(app).post('/api/items').send({name: "Rat Bag", description: "a leather bag in the form of a rat.", price: 3499.99, category: "handbags", image: "https://technabob.com/blog/wp-content/uploads/2022/01/leather_rat_bag_1.jpg"})
            expect(res.body.name).toBe("Rat Bag")
            expect(res.body.price).toBe(3499.99)
            expect(res.statusCode).toBe(200)
    })
    it('updates an item', async () => {
        const res = await request(app).put("/api/items/21").send({name: "Thom Browne Rat Bag"})
        const updatedItem = await request(app).get("/api/items/21")
        expect(updatedItem.body.name).toBe("Thom Browne Rat Bag")
        expect(res.statusCode).toBe(200)
    })
    it('deletes an item', async () => {
        const res = await request(app).del("/api/items/20")
        expect(res.statusCode).toBe(200)
    })
})