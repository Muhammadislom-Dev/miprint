import React from 'react'
import {Link} from 'react-router-dom'
import './AdminCategory.css'

function AdminCategory() {
  return (
    <div className='category'>
        <ul className="category-list">
            <li className="category-item">
                <Link to="/category" className="category-link">Catalog</Link>
            </li>
            <li className="category-item">
                <Link to="/subcatalog" className="category-link">SubCatalog</Link>
            </li>
            <li className="category-item">
                <Link to="/admin-product" className="category-link">Product</Link>
            </li>
            <li className="category-item">
                <Link to="/template" className="category-link">Product Template</Link>
            </li>
            <li className="category-item">
                <Link to="/home-news" className="category-link">Home-News</Link>
            </li>
        </ul>
    </div>
  )
}

export default AdminCategory