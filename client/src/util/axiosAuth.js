import axios from 'axios';

export const axiosAuth = () => {
    const token = localStorage.getItem('token');

    return axiosAuth.create({baseURL: 'http://localhost:5001/api',
     headers: {authorization}})
}