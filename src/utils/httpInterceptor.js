export default (interceptor) => {
  interceptor.response.use(function (response) {
      return response
    },
    function (error) {
      console.log(error.status)
      return Promise.reject(error)
    }
  )
}
