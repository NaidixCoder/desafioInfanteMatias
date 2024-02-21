class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, stock, code) {


        if (!title || !description || !price || !thumbnail || !stock || !code) {
            console.error('Error: Todos los campos son obligatorios');
            return;
        }

        if (this.isCodeDuplicate(code)) {
            return;
        }

        const product = {
            id: this.#getID(),
            code: code,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            stock: stock,
        };

        this.products.push(product);
        console.log(`Producto agregado: ${JSON.stringify(product)}`);
    }

    isCodeDuplicate(code) {
        if (code !== undefined && this.products.some(prod => prod.code === code)) {
            
            console.error(`Error: Ya existe un producto con el código: "${code}"`);
            return true;
        }
        return false;
    }

    #getID() {
        if (this.products.length === 0) return 1;
        return this.products[this.products.length - 1].id + 1;
    }

    getProducts() {
        return this.products;
    }

    getProductById(productId) {
        const product = this.products.find(prod => prod.id === productId);

        if (product) {
            console.log(product);  
        } else {
            console.error(`Error: ID: ${productId}, no encontrado`);
        }
    }
}

// const PRODUCTOS = new ProductManager();   -----> Corrección camelCase
const mainProductManager = new ProductManager();

// Carga de productos
// title, description, price, thumbnail, stock, code
console.log("CARGA DE PRODUCTOS:")
mainProductManager.addProduct("product-1", "desc-1", 1000, "../path1", 10, "codigo-1")
mainProductManager.addProduct("product-2", "desc-2", 1000, "../path2", 10, "codigo-2")
mainProductManager.addProduct("product-3", "desc-3", 1000, "../path3", 10, "codigo-3")
console.log("CARGA DE PRODUCTOS FINALIZADA")
console.log("...")


// No lo agrega porque falta la descripcion del producto
console.log("CARGA DE PRODUCTO QUE LE FALTA DESCRIPCION:")  // AGREGO CLG PARA FACILITAR LECTURA EN LA CONSOLA.
mainProductManager.addProduct("product-4", 1000, "../path4", 10, "codigo-4")
console.log("...")

// No lo agrega porque se repite el CODE.
console.log("CARGA DE PRODUCTO CON CODE REPETIDO:")
mainProductManager.addProduct("product-1", "desc-1", 1000, "../path1", 10, "codigo-1")
mainProductManager.addProduct("product-2", "desc-2", 1000, "../path2", 10, "codigo-2")
mainProductManager.addProduct("product-3", "desc-3", 1000, "../path3", 10, "codigo-3")
console.log("...")

// Array de PRODUCTOS
console.log("CARGA DE ARRAY DE PRODUCTOS: ")
console.log(mainProductManager.getProducts());
console.log("...")

// Busqueda segun ID
console.log("BUSQUEDA DEL ID 3:")
mainProductManager.getProductById(3);
console.log("...")

// Busqueda ID INEXISTENTE
console.log("BUSQUEDA ID INEXISTENTE:")
mainProductManager.getProductById(29);
mainProductManager.getProductById(32);
mainProductManager.getProductById(45);
console.log("FIN PRUEBAS")