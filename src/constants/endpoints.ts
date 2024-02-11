const endpoints = {
  categories: '/categories.json',
  categoryDetails: (categoryId: number) => `/categories/${categoryId}.json`,
};

export default endpoints;
