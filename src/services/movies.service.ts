import { MovieDto } from '@/dtos'

class MoviesService {
  async getAll(year?: string): Promise<MovieDto[]> {
    const endpoint = import.meta.env.VITE_API_MOVIES
    let url = `${endpoint}/movies`

    if (year) {
      url += `?year=${year}`
    }

    const responseHttp = await fetch(url)

    const bodyHttp = await responseHttp.json()

    if (!responseHttp.ok) {
      throw bodyHttp
    }

    if (!Array.isArray(bodyHttp)) {
      throw new Error(`Error server: ${JSON.stringify(bodyHttp, null, 2)}`)
    }

    return bodyHttp
  }
}

export default MoviesService
