import StorageService from './local-storage'

const repositories = {
  StorageService
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: (name: string) => {
    // check if name is not found
    if (!repositories[name]) {
      throw new Error(`${name.toUpperCase()} Services Not Found`)
    }

    return repositories[name]
  }
}
