const API_BASE_URL = "http://localhost:3000/api" 

export async function fetchCategories() {
    try {
        const response = await fetch(`${API_BASE_URL}/categories`);

        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }
    
        return response.json();
    }
    catch (error) {
        throw error;
    }
}

export async function fetchProducts() {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
    
        return response.json();
    }
    catch (error) {
        throw error;
    }
}

export async function fetchProductById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch product with id ${id}`);
        }

        return response.json();
    }
    catch (error) {
        throw error;
    }
}

export async function addProduct(productData) {
    
}

export async function updateProduct(id, updatedData) {

}

export async function deleteProduct(id) {

}
