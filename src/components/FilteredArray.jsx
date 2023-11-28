// import React, { useState } from 'react';

// const FilteredArray = () => {
//   const [data, setData] = useState([
//     { id: 1, name: 'Blog 1', author: 'Author 1', courseName: 'Course 1', otherField: 'Other Field 1' },
//     { id: 2, name: 'Blog 2', author: 'Author 2', courseName: 'Course 2', otherField: 'Other Field 2' },
//     { id: 3, name: 'Blog 3', author: 'Author 3', courseName: 'Course 3', otherField: 'Other Field 3' },
//     { id: 4, name: 'Blog 4', author: 'Author 4', courseName: 'Course 4', otherField: 'Other Field 4' },
//     { id: 5, name: 'Blog 5', author: 'Author 5', courseName: 'Course 5', otherField: 'Other Field 5' },
//   ]);

//   const [filteredData, setFilteredData] = useState(data);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);

//   const handleFilter = (event) => {
//     const { value } = event.target;
//     const filtered = data.filter((item) =>
//       item.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//     setShowDetails(true);
//   };

//   const handleCheckboxChange = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Filter by name"
//         onChange={handleFilter}
//       />
//       <br />
//       <label>
//         Show Details:
//         <input
//           type="checkbox"
//           checked={showDetails}
//           onChange={handleCheckboxChange}
//         />
//       </label>
//       <br />
//       {filteredData.map((item) => (
//         <div key={item.id} onClick={() => handleItemClick(item)}>
//           {item.name}
//         </div>
//       ))}
//       {selectedItem && (
//         <div>
//           <h2>{selectedItem.name}</h2>
//           {showDetails && (
//             <>
//               <p>Author: {selectedItem.author}</p>
//               <p>Course Name: {selectedItem.courseName}</p>
//               <p>Other Field: {selectedItem.otherField}</p>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilteredArray;

// import React, { useState } from 'react';

// // Sample array of data
// const data = [
//   { name: 'Srikanth', author: 'Author 1', courseName: 'Course 1', otherField: 'Other 1' },
//   { name: 'Sanjay', author: 'Author 2', courseName: 'Course 2', otherField: 'Other 2' },
//   { name: 'Kushal', author: 'Author 3', courseName: 'Course 3', otherField: 'Other 3' },
//   { name: 'Ravi', author: 'Author 4', courseName: 'Course 4', otherField: 'Other 4' },
//   { name: 'Teja', author: 'Author 5', courseName: 'Course 5', otherField: 'Other 5' }
// ];

// const FilteredArray = () => {
//   const [filteredData, setFilteredData] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);

//   // Handle filter by name
//   const handleFilterByName = (event) => {
//     const filtered = data.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
//     setFilteredData(filtered);
//   };

//   // Handle click on item
//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//     setShowDetails(true);
//   };

//   // Handle checkbox toggle
//   const handleCheckboxToggle = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div>
//       {/* Component 1: Filter by name */}
//       <input type="text" placeholder="Filter by Name" onChange={handleFilterByName} />

//       {/* Component 2: Display filtered results */}
//       <ul>
//         {filteredData.map(item => (
//           <li key={item.name} onClick={() => handleItemClick(item)}>
//             {item.name}
//           </li>
//         ))}
//       </ul>

//       {/* Component 3: Show details */}
//       <div>
//         <label>
//           <input type="checkbox" checked={showDetails} onChange={handleCheckboxToggle} />
//           Show Details
//         </label>
//         {selectedItem && showDetails && (
//           <div>
//             <h3>{selectedItem.name}</h3>
//             <p>Author: {selectedItem.author}</p>
//             <p>Course Name: {selectedItem.courseName}</p>
//             <p>Other Field: {selectedItem.otherField}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilteredArray;





// import React, { useState } from 'react';

// const FilteredArray = () => {
//   const [products, setProducts] = useState([
//     { id: 1, title: 'Product 1', category: 'Category 1' },
//     { id: 2, title: 'Product 2', category: 'Category 2' },
//     { id: 3, title: 'Product 3', category: 'Category 1' },
//     { id: 4, title: 'Product 4', category: 'Category 3' },
//   ]);

//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Function to filter products based on title
//   const filterByTitle = (title) => {
//     const filtered = products.filter((product) =>
//       product.title.toLowerCase().includes(title.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   // Function to filter products based on category
//   const filterByCategory = (category) => {
//     const filtered = products.filter(
//       (product) => product.category === category
//     );
//     setFilteredProducts(filtered);
//   };

//   // Function to handle product click
//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <div>
//       {/* Filter by title */}
//       <input
//         type="text"
//         placeholder="Filter by title"
//         onChange={(e) => filterByTitle(e.target.value)}
//       />

//       {/* Filter by category */}
//       <select onChange={(e) => filterByCategory(e.target.value)}>
//         <option value="">All Categories</option>
//         <option value="Category 1">Category 1</option>
//         <option value="Category 2">Category 2</option>
//         <option value="Category 3">Category 3</option>
//       </select>

//       {/* Display filtered products */}
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id} onClick={() => handleProductClick(product)}>
//             {product.title}
//           </li>
//         ))}
//       </ul>

//       {/* Display selected product details */}
//       {selectedProduct && (
//         <div>
//           <h3>{selectedProduct.title}</h3>
//           <p>Category: {selectedProduct.category}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilteredArray;



// import React, { useState } from "react";

// const products = [
//   { id: 1, title: "Product 1", category: "Category A" },
//   { id: 2, title: "Product 2", category: "Category B" },
//   { id: 3, title: "Product 3", category: "Category A" },
//   { id: 4, title: "Product 4", category: "Category D" },
//   { id: 5, title: "Product 5", category: "Category E" },
//   { id: 6, title: "Product 6", category: "Category B" },
//   { id: 7, title: "Product 7", category: "Category C" },
//   { id: 8, title: "Product 8", category: "Category D" },
//   { id: 9, title: "Product 9", category: "Category E" },
//   { id: 10, title: "Product 10", category: "Category A" },
//   { id: 11, title: "Product 11", category: "Category B" },
//   { id: 12, title: "Product 12", category: "Category D" },
//   { id: 13, title: "Product 13", category: "Category E" },
//   { id: 14, title: "Product 14", category: "Category D" },
//   { id: 15, title: "Product 15", category: "Category E" },
// ];

// const FilteredArray = () => {
//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const handleTitleFilter = (title) => {
//     const filtered = products.filter((product) =>
//       product.title.includes(title)
//     );
//     setFilteredProducts(filtered);
//   };

//   const handleCategoryFilter = (category) => {
//     const filtered = products.filter((product) => product.category === category);
//     setFilteredProducts(filtered);
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     if (category === "") {
//       setFilteredProducts(products);
//     } else {
//       handleCategoryFilter(category);
//     }
//   };

//   return (
//     <div>
//       <h2>Product List</h2>
 

//       <h3>Filter by Category:</h3>
//       <ul>
//         <li onClick={() => handleCategoryClick("")}>All Categories</li>
//         {Array.from(new Set(products.map((product) => product.category))).map(
//           (category) => (
//             <li key={category} onClick={() => handleCategoryClick(category)}>
//               {category}
//             </li>
//           )
//         )}
//       </ul>

//       <h3>Filtered Products:</h3>
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             {product.title} - {product.category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FilteredArray;






// import React, { useEffect, useState } from 'react';

// function FilteredArray() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         // Extracting unique categories from the data
//         const uniqueCategories = Array.from(
//           new Set(data.map((product) => product.category))
//         );
//         setCategories(uniqueCategories);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const filterProducts = (category) => {
//     const filteredData = products.filter(
//       (product) => product.category === category
//     );
//     setFilteredProducts(filteredData);
//   };

//   return (
//     <div>
//       <h1>Product Categories</h1>
//       <ul>
//         {categories.map((category, index) => (
//           <li key={index} onClick={() => filterProducts(category)}>
//             {category}
//           </li>
//         ))}
//       </ul>

//       <h2>Filtered Products</h2>
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             <p>Title: {product.title}</p>
//             <p>Price: {product.price}</p>
//             <p>Rating: {product.rating.rate}</p>
//             <img src={product.image} alt={product.title} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FilteredArray;




// import React, { useEffect, useState } from 'react';

// function FilteredArray() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [priceFilter, setPriceFilter] = useState('');
//   const [ratingFilter, setRatingFilter] = useState('');

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);
//         setFilteredProducts(data);
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   const handleFilter = () => {
//     let filteredData = products;

//     if (priceFilter) {
//       const price = Number(priceFilter);
//       filteredData = filteredData.filter(product => product.price <= price);
//     }

//     if (ratingFilter) {
//       const rating = Number(ratingFilter);
//       filteredData = filteredData.filter(product => product.rating.rate >= rating);
//     }

//     setFilteredProducts(filteredData);
//   };

//   return (
//     <div>
//       <h2>Product List</h2>

//       <div>
//         <label>
//           Filter by Price:
//           <input
//             type="number"
//             value={priceFilter}
//             onChange={event => setPriceFilter(event.target.value)}
//           />
//         </label>

//         <label>
//           Filter by Rating:
//           <input
//             type="number"
//             value={ratingFilter}
//             onChange={event => setRatingFilter(event.target.value)}
//           />
//         </label>

//         <button onClick={handleFilter}>Apply Filter</button>
//       </div>

//       <ul>
//         {filteredProducts.map(product => (
//           <li key={product.id}>
//             <h3>{product.title}</h3>
//             <p>Price: ${product.price}</p>
//             <p>Rating: {product.rating.rate}</p>
//             <img src={product.image} alt={product.title} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FilteredArray;






// import React, { useState, useEffect } from "react";

// const FilteredArray = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 100]);
//   const [selectedRatings, setSelectedRatings] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setFilteredProducts(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//       });
//   }, []);

//   const handlePriceChange = (event, newValue) => {
//     setPriceRange(newValue);
//   };

//   const handleRatingChange = (event) => {
//     const rating = Number(event.target.value);
//     const checked = event.target.checked;

//     if (checked) {
//       setSelectedRatings([...selectedRatings, rating]);
//     } else {
//       const updatedRatings = selectedRatings.filter(
//         (selectedRating) => selectedRating !== rating
//       );
//       setSelectedRatings(updatedRatings);
//     }
//   };

//   useEffect(() => {
//     const filtered = products.filter(
//       (product) =>
//         product.price >= priceRange[0] &&
//         product.price <= priceRange[1] &&
//         (selectedRatings.length === 0 ||
//           selectedRatings.includes(product.rating))
//     );
//     setFilteredProducts(filtered);
//   }, [products, priceRange, selectedRatings]);

//   return (
//     <div>
//       <div>
//         <h2>Price Range</h2>
//         <input
//           type="range"
//           min={0}
//           max={100}
//           value={priceRange}
//           onChange={handlePriceChange}
//         />
//         <span>Min: {priceRange[0]}</span>
//         <span>Max: {priceRange[1]}</span>
//       </div>
//       <div>
//         <h2>Ratings</h2>
//         <label>
//           <input
//             type="checkbox"
//             value={1}
//             checked={selectedRatings.includes(1)}
//             onChange={handleRatingChange}
//           />
//           1 Star
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             value={2}
//             checked={selectedRatings.includes(2)}
//             onChange={handleRatingChange}
//           />
//           2 Stars
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             value={3}
//             checked={selectedRatings.includes(3)}
//             onChange={handleRatingChange}
//           />
//           3 Stars
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             value={4}
//             checked={selectedRatings.includes(4)}
//             onChange={handleRatingChange}
//           />
//           4 Stars
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             value={5}
//             checked={selectedRatings.includes(5)}
//             onChange={handleRatingChange}
//           />
//           5 Stars
//         </label>
//       </div>
//       <div>
//         <h2>Filtered Products</h2>
//         {filteredProducts.map((product) => (
//           <div key={product.id}>
//             <h3>{product.title}</h3>
//             <p>Price: {product.price}</p>
//             <p>Rating: {product.rating}</p>
//             <img src={product.image} alt={product.title} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilteredArray;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilteredArray = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedRatings, setSelectedRatings] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  const filterProducts = () => {
    const filteredByPrice = products.filter(
      (product) => product.price >= priceRange.min && product.price <= priceRange.max
    );

    const filteredByRating = filteredByPrice.filter((product) =>
      selectedRatings.includes(product.rating.toString())
    );

    setFilteredProducts(filteredByRating);
  };

  const handlePriceChange = (event) => {
    setPriceRange({ ...priceRange, [event.target.name]: Number(event.target.value) });
  };

  const handleRatingChange = (event) => {
    const ratingValue = event.target.value;

    if (selectedRatings.includes(ratingValue)) {
      setSelectedRatings(selectedRatings.filter((rating) => rating !== ratingValue));
    } else {
      setSelectedRatings([...selectedRatings, ratingValue]);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="range"
          id="minPrice"
          name="min"
          min="0"
          max="1000"
          value={priceRange.min}
          onChange={handlePriceChange}
        />
        <span>{priceRange.min}</span>
      </div>
      <div>
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="range"
          id="maxPrice"
          name="max"
          min="0"
          max="1000"
          value={priceRange.max}
          onChange={handlePriceChange}
        />
        <span>{priceRange.max}</span>
      </div>
      <div>
        <label>Ratings:</label>
        <label>
          <input type="checkbox" value="1" onChange={handleRatingChange} />
          1 star
        </label>
        <label>
          <input type="checkbox" value="2" onChange={handleRatingChange} />
          2 stars
        </label>
        <label>
          <input type="checkbox" value="3" onChange={handleRatingChange} />
          3 stars
        </label>
        <label>
          <input type="checkbox" value="4" onChange={handleRatingChange} />
          4 stars
        </label>
        <label>
          <input type="checkbox" value="5" onChange={handleRatingChange} />
          5 stars
        </label>
      </div>
      <button className='theme-btn' onClick={filterProducts}>Filter</button>
      <ul>
         {filteredProducts.map((product) => (
         <li className="col-md-3 border border-1 p-5 mt-3 mb-3">
         <h3>{product.title}</h3>
         <img src={product.image} alt={product.title} />
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating[1]}</p>
         </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredArray;


