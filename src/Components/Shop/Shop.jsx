import React, { useEffect, useState } from 'react';
import Card from '../Card/Card'

const Shop = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        console.log(result)
        setData(result); 
        setFilter(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  const filterCategory = (category) => {
    const filtered = data.filter((product)=>(product.category === category));
    setFilter(filtered)
  }
 

  const buttonStyle = {
    color: 'white',
    backgroundColor: '#9a4d55', 
    transition: '.2s all ease-in',
    hover: {
        backgroundColor: '#2563eb'
    },
    fontWeight: '600', 
    padding: '0.5rem 1rem', 
    borderRadius: '0.375rem',
    marginLeft:'20px'
};

  return (
      <>
         <div className=' flex flex-col justify-center py-7 '>
        <h2 className='flex justify-center text-5xl font-bold text-Purple font-serif'>SHOP</h2>
        <div className='flex justify-center py-7'>
        <button style={buttonStyle}
            onClick={() => filterCategory("men's clothing")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#111c30")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#9a4d55")}
          >Men </button>
          <button style={buttonStyle}
            onClick={() => filterCategory("women's clothing")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#111c30")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#9a4d55")}
        >Women </button>
          <button style={buttonStyle}
            onClick={() => filterCategory("jewelery")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#111c30")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#9a4d55")}
        >Jewellery </button>
          <button style={buttonStyle}
            onClick={() => filterCategory("electronics")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#111c30")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#9a4d55")}
        >Others </button>
     
      </div>
      </div>
      <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 mx-auto justify-center">
        {filter.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            productName={product.title}
            price={product.price}
          />
        ))}
      </div>
      </>
  )
}

export default Shop