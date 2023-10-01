import React, { useState, useEffect } from 'react'
import Spinner from '../Spinner'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

export default function Home() {
    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3000/books')
            .then((response) => {
                setBook(response.data)
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>Home</div>
    )
}
