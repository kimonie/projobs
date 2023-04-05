import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
    const [ data, setData ] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);

    const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {query: 'Python developer in Texas, USA', page: '1', num_pages: '1'},
    headers: {
        'X-RapidAPI-Key': '636001c040mshc3bbaf844c7282cp163fedjsn21b75932eb5b',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
    };
}