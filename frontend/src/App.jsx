import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ShowBook from './pages/ShowBook'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path='/book/create' element={CreateBook}></Route>
      <Route path='/book/delete/:id' element={DeleteBook}></Route>
      <Route path='/book/edit/:id' element={EditBook}></Route>
      <Route path='/' element={Home}></Route>
      <Route path='/book/details/:id' element={ShowBook}></Route>
    </Routes>
  )
}
