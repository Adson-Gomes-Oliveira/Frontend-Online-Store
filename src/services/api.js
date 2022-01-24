// codigo fonte produzido em pair programing com integrantes Degemar/Diego

export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const promise = await fetch(url);
    const result = await promise.json();
    return result;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId === '') {
    try {
      const promise = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
      const result = await promise.json();
      return result;
    } catch (error) {
      return error;
    }
  }
  try {
    const promise = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`);
    const result = await promise.json();
    return result;
  } catch (error) {
    return error;
  }
}
