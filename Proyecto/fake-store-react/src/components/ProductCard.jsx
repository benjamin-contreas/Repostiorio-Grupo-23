import AddButton from "./AddButon";

function ProductCard({ product }) {
  return (
    <div className='border border-neutral-500 p-4 rounded-md shadow-xl'>
      <a href='#' className='text-xl text-stone-800 hover:underline'>
        {product.title}
      </a>

      <img className='p-2 w-48 mx-auto mt-4' src={product.image} alt='' />

      <p className='text-xs text-stone-600 mt-3'>
        <span>Category: </span>
        <a href='#' className='hover:underline'>
          {product.category}
        </a>
      </p>

      <p className='text-zinc-400 p-2'>{product.description}</p>

      <div className='flex items-center justify-between mx-3 mt-3'>
        <p className='text-left'>
          <span className='text-stone-500 underline'>Price</span>
          <span className='text-stone-500'>: </span>
          <span className='text-stone-600'>${product.price}</span>
        </p>
        <AddButton product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
