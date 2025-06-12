import { expect, test } from '@playwright/test'

import { StatusCodes } from 'http-status-codes'

test('get order with correct id should receive code 200', async ({ request }) => {
  // Build and send a GET request to the server
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/1')
  // Log the response status, body and headers
  console.log('response body:', await response.json())
  console.log('response headers:', response.headers())
  // Check if the response status is 200
  expect(response.status()).toBe(200)
})

test('post order with correct data should receive code 201', async ({ request }) => {
  // prepare request body
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }
  // Send a POST request to the server
  const response = await request.post('https://backend.tallinn-learning.ee/test-orders', {
    data: requestBody,
  })
  // Log the response status and body
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

// Homework #9
//GET
test('Успешная аутентификация и получение API-ключа с корректными логином и паролем в строковом формате, получаем код 200 ', async ({ request }) => {
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders?username=test&password=test')
  console.log('response body:', await response.json())
  console.log('response headers:', response.headers())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('Неуспешная аутентификация при отсутствии логина и пароля, получаем код 500', async ({ request }) => {
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders')
  console.log('response body:', await response.json())
  console.log('response headers:', response.headers())
  expect(response.status()).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
})


// PUT
test('Успешное изменение заказа с корректным ID - 2, получаем код 200', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }

  const requestHeaders: {api_key: string} = {'api_key': '1234567890123456'};
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/2', {
    data: requestBody,
    headers: requestHeaders,
  })
  // Log the response status and body
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('Успешное изменение заказа с корректным ID - 4, получаем код 200', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }

  const requestHeaders: {api_key: string} = {'api_key': '1234567890123456'};
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/4', {
    data: requestBody,
    headers: requestHeaders,
  })
  // Log the response status and body
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('Успешное изменение заказа с корректным ID - 9, получаем код 200', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }

  const requestHeaders: {api_key: string} = {'api_key': '1234567890123456'};
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/9', {
    data: requestBody,
    headers: requestHeaders,
  })
  // Log the response status and body
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('Неуспешное изменение заказа с некорректным ID - 0, получаем код 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }

  const requestHeaders: {api_key: string} = {'api_key': '1234567890123456'};
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/0', {
    data: requestBody,
    headers: requestHeaders,
  })
  // Log the response status and body
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Неуспешное изменение заказа с некорректным ID - 11, получаем код 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }

  const requestHeaders: {api_key: string} = {'api_key': '1234567890123456'};
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/11', {
    data: requestBody,
    headers: requestHeaders,
  })
  // Log the response status and body
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Неуспешное изменение заказа при отсутствии ID, получаем код 405', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }

  const requestHeaders: {api_key: string} = {'api_key': '1234567890123456'};
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/', {
    data: requestBody,
    headers: requestHeaders,
  })

  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
})

test('Неуспешное изменение заказа с ID в некорректном формате, получаем код 400', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }

  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/test', {
    data: requestBody,
    headers: requestHeaders,
  })
  // Log the response status and body
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})


//DELETE
test('Успешное удаление заказа с корректным ID - 2, получаем код 204', async ({ request }) => {
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/2', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.NO_CONTENT)
})

test('Успешное удаление заказа с корректным ID - 4, получаем код 204', async ({ request }) => {
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/4', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.NO_CONTENT)
})

test('Успешное удаление заказа с корректным ID - 9, получаем код 204', async ({ request }) => {
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/9', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.NO_CONTENT)
})

test('Успешное удаление заказа с некорректным ID - 0, получаем код 400', async ({ request }) => {
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/0', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Успешное удаление заказа с некорректным ID - 11, получаем код 400', async ({ request }) => {
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/11', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Неуспешное удаление заказа при отсутствии ID, получаем код 405', async ({ request }) => {
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
})
