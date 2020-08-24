import httpClient from './index'

export function getStores() {
  return httpClient.get('/store')
}

export function addOrder(orderData) {
  return httpClient.post('/order', orderData)
}

export function getOrders(params) {
  return httpClient.get('/orders', {params:params})
}

export function deleteOrder(orderId){
  return httpClient.delete('/order/'+orderId)
}

export function addProduct(data){
  return httpClient.post('/product', data)
}