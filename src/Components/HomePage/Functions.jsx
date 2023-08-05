import {MEDIUM_API_LINK,axios } from '../../imports'
import {} from '../../imports.jsx'


export const fetchMediumArticles = async() => {
    const response = await axios.get(MEDIUM_API_LINK)
    return response?.data
}