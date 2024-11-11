const API_BASE_URL = "http://localhost:3000/api" 

export async function fetchCategories() {
    const response = await fetch(`${API_BASE_URL}/categories`);

    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }

    return response.json();
}

export async function fetchProducts() {
    const response = await fetch(`${API_BASE_URL}/products`);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
}

export async function fetchProductById(id) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch product with id: ${id}`);
    }

    return response.json();
}

export async function addProduct(productData) {

}

export async function updateProduct(id, updatedData) {

}

export async function deleteProduct(id) {

}
