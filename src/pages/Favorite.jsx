export const Favorite = () => {
	return (
		<div>
			<ul>
				{[].map(product => (
					<li key={product.id}>
						<img src={product.thumbnail} alt={product.title} />
						<h1>{product.title}</h1>
						<p>Description: {product.description}</p>
						<p>Price: {product.price}$</p>
						<button>Remove from favorites</button>
					</li>
				))}
			</ul>
		</div>
	)
}
