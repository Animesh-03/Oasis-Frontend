import React from 'react'
import styles from './advanceSearch.module.css'
function AdvanceSearch({advanceOpen, setAdvanceOpen}) {
  const [data, setData] = React.useState({
    bookName: '',
    author: '',
    location: '',
    seller: '',
    category: '',
    rating: '',
    language: '',
    price: '',
  })
  const search = () => { }
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>Advance Search</div>
        </div>
        <div className={styles.info}>
          <div className={styles.info_left}>
            <div>
             <label>Book Name</label>
             <input type="text" value={data.bookName} onChange={(e) => setData({...data, bookName: e.target.value})} />
            </div>
            <div>
              <label>Author</label>
              <input type="text" value={data.author} onChange={(e) => setData({...data, author: e.target.value})} />
            </div>
            <div>
              <label>Location</label>
              <input type="text" value={data.location} onChange={(e) => setData({...data, location: e.target.value})} />
            </div>
            <div>
              <label>Seller</label>
              <input type="text" value={data.seller} onChange={(e) => setData({...data, seller: e.target.value})} />
            </div>
          </div>
          <div className={styles.info_right}>
            <div>
              <label>Category</label>
              <select value={data.category} onChange={(e) => setData({...data, category: e.target.value})}>
                <option value="0">Category 0</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>   
            </div>
            <div>
              <label>Rating</label>
              <select value={data.rating} onChange={(e) => setData({...data, rating: e.target.value})}>
                <option value="0">Rating 0</option>
                <option value="1">Rating 1</option>
                <option value="2">Rating 2</option>
                <option value="3">Rating 3</option>
              </select>
            </div>  
            <div>
              <label>Language</label>
              <select value={data.language} onChange={(e) => setData({...data, language: e.target.value})}>
                <option value="0">Language 0</option>
                <option value="1">Language 1</option>
                <option value="2">Language 2</option>
                <option value="3">Language 3</option>
              </select>
            </div>
            <div>
              <label>Price</label>
              <select value={data.price} onChange={(e) => setData({...data, price: e.target.value})}>
                <option value="0">Price 0</option>
                <option value="1">Price 1</option>
                <option value="2">Price 2</option>
                <option value="3">Price 3</option>
              </select>
            </div>

          </div>
        </div>
        <div className={styles.button}>
          <div onClick={() => search()}>Search</div>
          <div onClick={() => setAdvanceOpen(!advanceOpen)}>Close</div>
        </div>
      </div>
    </div>
  )
}

export default AdvanceSearch