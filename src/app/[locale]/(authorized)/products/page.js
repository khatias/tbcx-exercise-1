import ProductList from "./ProductList";
async function fetchProducts(search, sort) {
  let productsUrl = `https://dummyjson.com/products/search?q=${search || ""}`;

  if (sort === "asc") {
    productsUrl += "&sortBy=price&order=asc";
  } else if (sort === "desc") {
    productsUrl += "&sortBy=price&order=desc";
  }

  try {
    const response = await fetch(productsUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Products({ searchParams }) {
  const search = searchParams.search || "";
  const sort = searchParams.sort || "";
  const productList = await fetchProducts(search, sort);

  return (
    <main className="container mx-auto px-4  2xl:px-20 ">
      <ProductList productList={productList} />
    </main>
  );
}
