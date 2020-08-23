import httpClient from './index'

export function getStores() {
  return httpClient.get('/store')
}

export function addOrder(orderData) {
  return httpClient.post('/order', orderData)
}

export function getOrders() {
  return httpClient.get('/orders')
}

export function deleteOrder(orderId){
  return httpClient.delete('/order/'+orderId)
}