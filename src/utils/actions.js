import httpClient from './index'

export function getStores() {
  return httpClient.get('/store')
}

export function addOrder(orderData) {
  return httpClient.post('/order', orderData)
}