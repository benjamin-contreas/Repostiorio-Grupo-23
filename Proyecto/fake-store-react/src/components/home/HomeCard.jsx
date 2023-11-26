
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const descriptionWords = product.description.split(' ');
  const truncatedDescription = descriptionWords.slice(0, 20).join(' ');

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '300px',
    width: 'auto',
    height: 'auto',
  };

  return (
    <div className='border border-neutral-500 p-4 rounded-md shadow-xl'>
      <a href='#' className='text-xl text-stone-800 hover:underline'>
        {product.title}
      </a>

      <img
        className='p-2 w-48 mx-auto mt-4'
        src={product.image}
        alt=''
        style={imageStyle}
      />

      <p className='text-xs text-stone-600 mt-3'>
        <span>Category: </span>
        <a href='#' className='hover:underline'>
          {product.category}
        </a>
      </p>

      <p className='text-zinc-400 p-2'>{truncatedDescription}</p>

      <div className='flex items-center justify-between mx-3 mt-3'>
        <p className='text-left'>
          <span className='text-stone-500 underline'>Price</span>
          <span className='text-stone-500'>: </span>
          <span className='text-stone-600'>${product.price}</span>
        </p>
        <Link to="/fake-store-react/shop">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Store
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;