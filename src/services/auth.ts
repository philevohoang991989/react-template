import axiosInstance from 'services/axios'
const authApi = {
  login(data) {
    console.log('login')

    const url = '/auth/login'
    return axiosInstance.post(url, data)
  },
  logout() {
    const url = '/users/sign_out'
    return axiosInstance.delete(url)
  }
}

export default authApi
