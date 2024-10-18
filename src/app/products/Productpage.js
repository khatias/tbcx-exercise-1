// import Header from '../../components/Header/Header'
// import Footer from '../../components/Footer/Footer'
// import './ProductPage.css'
// import { FaStar } from 'react-icons/fa'; 

// import React from 'react'


// function ProductPage({product }) {
//     const { width, height, depth } = product.dimensions;

//     const renderStars = () => {
//         const stars = [];
//         for (let i = 1; i <= 5; i++) {
//           stars.push(
//             <FaStar key={i} color={i <= product.rating ? '#a65e3f' : 'gray'} /> 
//           );
//         }
//         return stars;
//       };
//   return (
//     <>
//        <Header />
//       <main>
//         <div className='container'>
//             <div className='product-text-content'>
//                 <h1>{product.title}</h1>
//                 <p className='product-description'>{product.description}</p>
//             </div>
//             <div className='product-hero'>

//                 <img src={product.images[0]} alt={product.title} className="product-image" />

//                 <div className='product-detail'>
//                     <p className='product-category'><strong>Category:</strong> {product.category}</p>
//                     <p className='product-price'><strong>Price:</strong> ${product.price}</p>
//                     <p className='product-discount-price'><strong>Discount Price:</strong> ${product.discountPercentage}</p>

//                     <div className="product-rating">
//                         {renderStars()} <span>{product.rating}</span>
//                     </div>

//                     <p className='stock'><strong>Stock:</strong> {product.stock}</p>
//                     <p className='availability-status'><strong>Availability Status:</strong> {product.availabilityStatus}</p>
//                 </div>
                
//             </div>
       
//             <div className='product-tags-container'>
//             {product.tags.map((tag, index) => (
//                 <span key={index} className="tag">#{tag}</span>
//             ))}
//             </div>


//             <ul className='product-dimensions'>
//             <li><strong>Width:</strong> {width} cm</li>
//             <li><strong>Height:</strong> {height} cm</li>
//             <li><strong>Depth:</strong> {depth} cm</li>
//             </ul>

//             <p className='warranty'><strong>Warranty:</strong> {product.warrantyInformation}</p>
//             <p className='shipping-information'><strong>Shipping Information:</strong> {product.shippingInformation}</p>

//             <p className='return-policy'><strong>Return Policy:</strong> {product.returnPolicy}</p>
//             <p className='minimum-order-quantity'><strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}</p>
            
//             <div className='product-reviews'>
//             <h2>Reviews</h2>
//             {product.reviews.length === 0 ? (
//                 <p>No reviews yet.</p>
//             ) : (
//                 product.reviews.map((review, index) => (
//                 <div key={index} className='review'>
//                     <p><strong>Reviewer:</strong> {review.reviewerName}</p>
//                     <p><strong>Rating:</strong> {review.rating} ★</p>
//                     <p><strong>Comment:</strong> {review.comment}</p>
//                     <p><strong>Date:</strong> {new Date(review.date).toLocaleDateString()}</p>
//                 </div>
//                 ))
//             )}
//             </div>

//             <div className='meta-information'>
//             <p><strong>Barcode:</strong> {product.meta.barcode}</p>
//             <p><strong>QR Code:</strong> <img src={product.meta.qrCode} alt="QR Code" className="qr-code" /></p>
//             </div>
//         </div>
//       </main>
//       <Footer /> 
//      </>
    
//   )
// }

// export default ProductPage
