import axios from 'axios'
import {useNavigate} from 'react-router-dom'

// set up the base url to plug into later on.
const baseUrl = "http://127.0.0.1:8000"

// set up function to get our token.

export const getToken = ({ username, password }) => {
    return axios.post(`${baseUrl}/token/`, {
        username: username,
        password: password
    }).then(response => {
        console.log('RESPONSE: ', response)
        // auth.setAccessToken(response.data.access)
        return (response)
        
    })
}

export const fetchUser = ({ auth }) => {
    axios({
        method: 'get',  
        url: `${baseUrl}/profile/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
    }).then(response => {
        console.log('PROFILE: ', response)
        console.log('accessToken: ', auth.accessToken)
        // start changes
        
        // end changes
    })
    .catch(error => {
        console.log('error:', error)
        // auth.setAccessToken(undefined)
    })
}

export const createUser = ({ username, password, firstName, lastName }) => {
    // console.log('access token: ')
    return axios({
        method: 'post',
        url: `${baseUrl}/create_user/`,
        data: {
            username,   
            password,
            first_name: firstName,
            last_name: lastName
        },
        
    }).then(response => {
        console.log('CREATE USER: ', response)
        return(response)
    })
    .catch(error => {
        if (error.response) {
            // Request was made and server responded with a status code that falls out of 2xx range
            console.log('ERROR DATA: ', error.response.data);  // Logging error data
            console.log('ERROR STATUS: ', error.response.status);  // Logging error status
            console.log('ERROR HEADERS: ', error.response.headers);  // Logging error headers
            console.log('access token: ', auth.accessToken)
        } else if (error.request) {
            // Request was made but no response was received
            console.log('ERROR REQUEST: ', error.request);  // Logging error request
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('ERROR MESSAGE: ', error.message);  // Logging error message
        }
        console.log('ERROR CONFIG: ', error.config);  // Logging error config
        })
}

export const submitPost = ({ auth, userPost }) => {
    console.log('auth', auth)
    return axios({
        method: 'post',
        url: `${baseUrl}/user_post/`,
        data: {
            content: userPost.content
        },
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
        
    }).then(response => {
        console.log('user post submitted: ', response)

    })
    .catch(error => {
        console.log('error submitting post', error)
    })
}

export const deletePost = ({auth, postId}) => {
    return axios({
        method: 'post',
        url: `${baseUrl}/delete_post/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        },
        data: {
            post_id: postId
        }
        
    }).then(response => {
        console.log('post deleted', response)
        return response.data
    }).catch(error => {
        console.log('error deleting post', error)
        throw error
    })
}

export const retrievePost = ({ auth }) => {
    return axios({
        method: 'get',
        url: `${baseUrl}/user_post/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
    }).then(response => {
        console.log('user post retrieved', response)
        return response.data
    })
    .catch(error => {
        console.log('error getting user post', error)
        return []
    })
}
// this is a new function, delete if doesnt works


export const retrieveProfilePost = ({ auth }) => {
    return axios({
        method: 'get',
        url: `${baseUrl}/profile_posts/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
    }).then(response => {
        console.log('user post retrieved', response)
        return response.data
    })
    .catch(error => {
        console.log('error getting user post', error)
        return []
    })
}

export const logout = () => {
    localStorage.removeItem('accessToken')
    
}

