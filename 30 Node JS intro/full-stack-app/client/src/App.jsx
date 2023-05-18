import { useEffect, useState } from "react"

function App() {
  const[products,setProducts] = useState([]);
  const[newProduct,setNewProduct] = useState({});
  useEffect(()=>{
    fetch('http://localhost:7070/api/products')
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
      setNewProduct({name:'',price:''})
    })
  },[])
  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:7070/api/products',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(newProduct)
    })
    setProducts([...products,newProduct]);
  }
  function handleChange(e){
    setNewProduct({...newProduct, [e.target.name]: e.target.value});
  }
  function handleSearch(e){
    fetch(`http://localhost:7070/api/products?name=${e.target.value}`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
  }
  return (
    <>
        <h1>Product from Node API</h1>
        <input onChange={(e)=>handleSearch(e)} placeholder="search product"/>
        <ul>
          {products && products.map((product)=>{
            return <li key={product.id}>
              {product.name} | {product.price}
              <button onClick={()=>{
                if (window.confirm('are you sure to delete?')) {
                    fetch(`http://localhost:7070/api/products/${product.id}`,{
                      method:'DELETE'
                    })
                    setProducts(products.filter((pro)=>pro.id!==product.id))
                }
              }}>delete</button>
              </li>
          })}
        </ul>
        <form onSubmit={(e)=>handleSubmit(e)}>
           <input onChange={(e)=>handleChange(e)} name="name" placeholder="product name" type="text"/>
           <input onChange={(e)=>handleChange(e)} name="price" placeholder="product price" type="number" step='any'/>
           <button>add product</button>
        </form>
    </>
  )
}

export default App
