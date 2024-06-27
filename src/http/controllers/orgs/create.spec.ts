import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('Create Org (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a org', async () => {
    const response = await request(app.server).post('/orgs').send({
      name: 'Example Organization',
      author_name: 'John Doe',
      email: 'john@org.com',
      whatsapp_number: '1234567890',
      password: 'securePassword123',
      cep: '12345-678',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Centro',
      street: 'Rua Exemplo',
      latitude: -23.55052,
      longitude: -46.633308,
    })

    expect(response.statusCode).toEqual(201)
  })
})
