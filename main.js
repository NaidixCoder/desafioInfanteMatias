class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, stock, code) {

        if (!title || !description || !price || !thumbnail || !stock) {
            console.error('Error: Todos los campos son obligatorios');
            return;
        }

        if (this.products.some(prod => prod.code === code)) {
            console.error('Error: Ya existe un producto con ese código');
            return;
        }

        const product = {
            code: this.#getCode(code),
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            stock: stock,
        };

        this.products.push(product);
        console.log(`Producto agregado: ${JSON.stringify(product)}`);
    }

    #getCode(code) {
        if (code !== undefined) {
            // Si se proporciona un código manualmente, lo retornamos
            return code;
        }
            // Si no se proporciona un código manualmente, genera el AUTOINCREMENTAL.
        if (this.products.length === 0) return 1;
        return this.products[this.products.length - 1].code + 1;
    }

    getProducts() {
        return this.products;
    }

    getProductById(productId) {
        const product = this.products.find(prod => prod.code === productId);

        if (product) {
            return console.log(product);  
        } else {
            console.error('Error: Producto no encontrado');
        }
    }
}

const PRODUCTOS = new ProductManager();

// Carga de productos
console.log("CARGA DE PRODUCTOS:")
PRODUCTOS.addProduct('Reel de pesca', 'Reel para pesca deportiva', 1500, '../reel.png', 10);
PRODUCTOS.addProduct('Caña de pescar', 'Caña de pescar resistente y ligera', 800, '../cana.png', 10);
PRODUCTOS.addProduct('Señuelo realista', 'Señuelo para atraer peces de manera efectiva', 2500, '../senuelo.png', 10);
PRODUCTOS.addProduct('Anzuelos variados', 'Anzuelos de diferentes tamaños y tipos', 1800, '../anzuelos.png', 10);
console.log("CARGA DE PRODUCTOS FINALIZADA")
console.log("...")


// No lo agrega porque falta la descripcion del producto
console.log("CARGA DE PRODUCTO QUE LE FALTA DESCRIPCION:")  // AGREGO CLG PARA FACILITAR LECTURA EN LA CONSOLA.
PRODUCTOS.addProduct('Caña de pescar', 800, '../cana.png', 10);
console.log("...")

// No lo agrega porque se repite el ID.
console.log("CARGA DE PRODUCTO CON CODE REPETIDO:")
PRODUCTOS.addProduct('Botas de pesca', 'Botas impermeables ideales para la pesca', 2000, '../botas.png', 128, 1);
console.log("...")

// Array de PRODUCTOS
console.log("CARGA DE ARRAY DE PRODUCTOS: ")
console.log(PRODUCTOS.getProducts());
console.log("...")

// Busqueda segun ID
console.log("BUSQUEDA DEL CODE 3:")
PRODUCTOS.getProductById(3);
console.log("...")

// Busqueda ID INEXISTENTE
console.log("BUSQUEDA CODE INEXISTENTE:")
PRODUCTOS.getProductById(29);
console.log("FIN PRUEBAS")