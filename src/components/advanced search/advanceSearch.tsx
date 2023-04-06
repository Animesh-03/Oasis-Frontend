import React from 'react'
import styles from './advanceSearch.module.css'
import { useGetAllCategoriesQuery, useSearchAdvertisementsLazyQuery } from '@/graphql/generated/generated';
function AdvanceSearch({advanceOpen, setAdvanceOpen, onSearch}) {

  const {data: categories, loading} = useGetAllCategoriesQuery();
  const [searchAdvertisement] = useSearchAdvertisementsLazyQuery();

  const [data, setData] = React.useState({
    bookName: undefined,
    author: undefined,
    location: undefined,
    seller: undefined,
    category: undefined,
    rating: undefined,
    language: undefined,
    price: 0,
  });


  const search = async () => { 
    const res = await searchAdvertisement({
      variables: {
        searchInput: {
          authorName: data.author,
          bookName: data.bookName,
          category: data.category,
          maxPrice: data.price === 8 ? undefined : (data.price*100 + 200),
          minPrice: data.price*100,
          sellerName: data.seller
        }
      }
    });

    onSearch(res.data.searchAdvertisements);
  }
  
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
            {/* <div>
              <label>Location</label>
              <input type="text" value={data.location} onChange={(e) => setData({...data, location: e.target.value})} />
            </div> */}
            <div>
              <label>Seller</label>
              <input type="text" value={data.seller} onChange={(e) => setData({...data, seller: e.target.value})} />
            </div>
          </div>
          <div className={styles.info_right}>
            <div>
              <label>Category</label>
              <select value={data.category} onChange={(e) => setData({...data, category: e.target.value})}>
                {categories?.getAllCategories.map(category => {
                  return <option key={category.id} value={category.id}>{category.name}</option>
                })}
              </select>   
            </div>
            <div>
              <label>Rating</label>
              <select value={data.rating} onChange={(e) => setData({...data, rating: e.target.value})}>
                <option value="0">1+</option>
                <option value="1">2+</option>
                <option value="2">3+</option>
                <option value="3">4+</option>
              </select>
            </div>  
            {/* <div>
              <label>Language</label>
              <select value={data.language} onChange={(e) => setData({...data, language: e.target.value})}>
                <option value="0">Language 0</option>
                <option value="1">Language 1</option>
                <option value="2">Language 2</option>
                <option value="3">Language 3</option>
              </select>
            </div> */}
            <div>
              <label>Price</label>
              <select value={data.price} onChange={(e) => setData({...data, price: Number(e.target.value)})}>
                <option value={0}>Price &#8377; 0 - &#8377; 200</option>
                <option value={2}>Price &#8377; 200 - &#8377; 400</option>
                <option value={4}>Price &#8377; 400 - &#8377; 600</option>
                <option value={6}>Price &#8377; 600 - &#8377; 800</option>
                <option value={8}>Price &#8377; 800+</option>
              </select>
            </div>

          </div>
        </div>
        <div className={styles.button}>
          <div onClick={search}>Search</div>
          <div onClick={() => setAdvanceOpen(!advanceOpen)}>Close</div>
        </div>
      </div>
    </div>
  )
}

export default AdvanceSearch