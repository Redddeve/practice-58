//tzrYPMWCkMl8QJ7RTOvCGFHY6cja6hKkGAxLf7onkhboy65dgPc6bURG
import axios from 'axios'

axios.defaults.baseURL = 'https://api.pexels.com/v1/'
axios.defaults.headers.common['Authorization'] = 'tzrYPMWCkMl8QJ7RTOvCGFHY6cja6hKkGAxLf7onkhboy65dgPc6bURG'
axios.defaults.params = {
	orientation: 'landscape',
	per_page: 15,
}
// search?query=cat

export const getImages = async userConfigParams => {
	const { data } = await axios.get('search', {
		params: {
			...userConfigParams,
		},
	})

	return data
}
