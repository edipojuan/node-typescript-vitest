import { test, expect, describe, beforeAll } from 'vitest'
import request from 'supertest'
import { App } from './app'

describe('Test App', () => {
    const { server } = new App()

    test('should get main route', async () => {
        const res = await request(server).get('/')

        expect(res.body).toHaveProperty('message')
        expect(res.body).toEqual({ message: 'test' })
    })
})
