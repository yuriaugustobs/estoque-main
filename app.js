function App() {
    const [products, setProducts] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [editingProduct, setEditingProduct] = React.useState(null);

    // Função para inicializar os produtos
    React.useEffect(() => {
        try {
            let initialProducts = getProducts();
            if (initialProducts.length === 0) {
                // Adicione produtos pré-definidos
                initialProducts = [
                    { id: 1, titulo: "Abraçadeira BRANCO", quantidadeAtual: 1, quantidadeIdeal: 20, quantidadeMinima: 5 },
                    { id: 4, titulo: "Adesivo PVC 90 KI KISAFIX 700g", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 1 },
                    { id: 5, titulo: "Água Destilada", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 10, titulo: "Barbante p/ Banner", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 11, titulo: "Bastão Madeira 16mm 5/8 - 105CM", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 12, titulo: "Bastão Madeira 16mm 5/8 - 150CM", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 13, titulo: "Bastão Madeira 16mm 5/8 - 42CM", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 14, titulo: "Bastão Madeira 16mm 5/8 - 75CM", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 16, titulo: "Cabeça HP Látex CIAN/BLACK", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 17, titulo: "Cabeça HP Látex LC/LM", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 18, titulo: "Cabeça HP Látex M/Y", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 19, titulo: "Cabeça HP Látex OPTIMIZER", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 20, titulo: "Cabeça HP Látex OVERCOAT", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 21, titulo: "Cabeça HP Látex WHITE", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 22, titulo: "Cartucho de Manutenção HP Látex", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 23, titulo: "CATALISADOR DUXONE 100ML", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 24, titulo: "CATALIZADOR LAZURRIL 300ML", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 36, titulo: "Chapa PS Branco 1mm", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 37, titulo: "Chapa PS Branco 2mm", quantidadeAtual: 1, quantidadeIdeal: 20, quantidadeMinima: 5 },
                    { id: 38, titulo: "Chapa PS Branco 3mm", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 39, titulo: "Coador de Tinta", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 5 },
                    { id: 40, titulo: "Cola Acrílico", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 41, titulo: "Cola Alma Super", quantidadeAtual: 1, quantidadeIdeal: 20, quantidadeMinima: 5 },
                    { id: 43, titulo: "COLA PU BRANCO", quantidadeAtual: 1, quantidadeIdeal: 15, quantidadeMinima: 5 },
                    { id: 44, titulo: "COLA PU CINZA", quantidadeAtual: 1, quantidadeIdeal: 15, quantidadeMinima: 5 },
                    { id: 45, titulo: "COLA PU PRETO", quantidadeAtual: 1, quantidadeIdeal: 15, quantidadeMinima: 5 },
                    { id: 46, titulo: "Cola SPRAY Alma Super KIT MDF", quantidadeAtual: 1, quantidadeIdeal: 20, quantidadeMinima: 5 },
                    { id: 48, titulo: "Disco de Corte 115mm x 1mm x 22,23mm", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 49, titulo: "Disco de Corte 304,8mm x 3mm x 25,5mm", quantidadeAtual: 1, quantidadeIdeal: 15, quantidadeMinima: 5 },
                    { id: 50, titulo: "Disco de Desbaste 114,3mm x 6,4mm x 22,2mm", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 51, titulo: "Disco Flap", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 52, titulo: "Dupla Face 19MM", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 53, titulo: "Dupla Face 20mm", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 54, titulo: "Dupla Face 9mm", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 55, titulo: "ELETRODO - CX 5 KG", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    
                    { id: 58, titulo: "Espátula Feltro", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 59, titulo: "Espátula Plástico", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 61, titulo: "Estilete 18mm", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 62, titulo: "Estilete 9mm", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 5 },
                    { id: 63, titulo: "Estopa", quantidadeAtual: 1, quantidadeIdeal: 15, quantidadeMinima: 5 },
                    { id: 67, titulo: "Fita Crepe", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 5 },
                    { id: 69, titulo: "Fita Isolante", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 79, titulo: "Grampo Rocama 106/6", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 81, titulo: "Ilhós femea", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 82, titulo: "Ilhós macho", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 84, titulo: "Lamina Estilete 18mm", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    
                    { id: 96, titulo: "Lixa D. Agua P100", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 97, titulo: "Lixa D. Agua P120", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 98, titulo: "Lixa D. Agua P220", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 99, titulo: "Lixa D. Agua P320", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 100, titulo: "Lona Backlight 440g 320cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 101, titulo: "Lona Brilho - 440g 1,40", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 102, titulo: "Lona Brilho - 440g 100cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 103, titulo: "Lona Brilho - 440g 120cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 104, titulo: "Lona Brilho - 440g 140cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 105, titulo: "Lona Brilho - 440g 150CM", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 106, titulo: "Lona Brilho - 440g 160cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 107, titulo: "Lona Brilho - 440g 170cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 108, titulo: "Lona Brilho - 440g 2,05m", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 109, titulo: "Lona Brilho - 440g 320cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 110, titulo: "Lona Brilho - MIL FIOS 320cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 111, titulo: "Lona FINA Brilho - 280g 320cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 112, titulo: "Lona Fosca - 440g 100cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 113, titulo: "Lona Fosca - 440g 120cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 114, titulo: "Lona Fosca - 440g 150cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 115, titulo: "Lona Fosca - 440g 160cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 116, titulo: "Lona Fosca - 440g 170cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 117, titulo: "Lona Fosca - 440g 320cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 124, titulo: "Máscara TRANSFERÊNCIA COM LINE", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 125, titulo: "Máscara TRANSFERÊNCIA SEM LINE", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 128, titulo: "Papel de Outdoor 150cm", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 130, titulo: "Plástico Bolha", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 136, titulo: "Primer DF Saturno 900ml", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 138, titulo: "Primer Universal Cinza", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 149, titulo: "ROLO DE IMÃ", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 153, titulo: "Socket de Lâmpada (UND)", quantidadeAtual: 1, quantidadeIdeal: 100, quantidadeMinima: 20 },
                    { id: 154, titulo: "Solvente Ampla", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 155, titulo: "Solvente HP UV", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 159, titulo: "Tinta HP Látex AMARELO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 160, titulo: "Tinta HP Látex BRANCO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 161, titulo: "Tinta HP Látex CIANO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 162, titulo: "Tinta HP Látex LIGHT CIANO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 163, titulo: "Tinta HP Látex LIGHT MAGENTA", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 164, titulo: "Tinta HP Látex MAGENTA", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 165, titulo: "Tinta HP Látex OTIMIZADOR", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 166, titulo: "Tinta HP Látex OVERCOAT", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 167, titulo: "Tinta HP Látex PRETO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 168, titulo: "Tinta HP UV AMARELO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 169, titulo: "Tinta HP UV CIANO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 170, titulo: "Tinta HP UV LIGHT CIANO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 171, titulo: "Tinta HP UV LIGHT MAGENTA", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 172, titulo: "Tinta HP UV MAGENTA", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 173, titulo: "Tinta HP UV PRETO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 175, titulo: "Tintas Ampla AMARELO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 176, titulo: "Tintas Ampla CIANO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 177, titulo: "Tintas Ampla MAGENTA", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 178, titulo: "Tintas Ampla PRETO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 179, titulo: "Tintas ROLAND AMARELO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 181, titulo: "Tintas ROLAND CIANO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 182, titulo: "Tintas ROLAND MAGENTA", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 183, titulo: "Tintas ROLAND PRETO", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 192, titulo: "Verniz Pu DUXONE 900ml", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 193, titulo: "Vinil Automotivo Bubble Free 1,27", quantidadeAtual: 2, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 194, titulo: "Vinil Automotivo Bubble Free 1,37", quantidadeAtual: 2, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 195, titulo: "Vinil Automotivo Bubble Free 1,52", quantidadeAtual: 2, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 196, titulo: "Vinil Automotivo DP100 1,27", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 197, titulo: "Vinil Automotivo DP100 1,52", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 198, titulo: "Vinil Automotivo DP120 1,52", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 199, titulo: "Vinil Blackout BRILHO 1,06", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 200, titulo: "Vinil Blackout BRILHO 1,27", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 201, titulo: "Vinil Blackout BRILHO 1,37", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 202, titulo: "Vinil Blackout BRILHO 1,52", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 203, titulo: "Vinil Blackout FOSCO 1,06", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 204, titulo: "Vinil Blackout FOSCO 1,27", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 205, titulo: "Vinil Blackout FOSCO 1,37", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 206, titulo: "Vinil Blackout FOSCO 1,52", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 210, titulo: "Vinil BRILHO 1,06", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 211, titulo: "Vinil BRILHO 1,27", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 212, titulo: "Vinil BRILHO 1,37", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 213, titulo: "Vinil BRILHO 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 215, titulo: "Vinil FOSCO 1,06", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 216, titulo: "Vinil FOSCO 1,27", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 217, titulo: "Vinil FOSCO 1,37", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 218, titulo: "Vinil FOSCO 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 219, titulo: "Vinil JATEADO 1,27", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 221, titulo: "Vinil JATEADO 1,52", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 223, titulo: "Vinil PERFURADO 1,52", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 224, titulo: "Vinil Preto Fosco 1,00", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 225, titulo: "Vinil Preto Fosco 1,22", quantidadeAtual: 1, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 227, titulo: "Vinil PROMOCIONAL BRILHO 1,27", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 231, titulo: "Vinil Transparente 1,06", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 234, titulo: "Vinil Transparente 1,52", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 235, titulo: "Wash Primer Fundo Fosfatizante Maza 900ml", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                ];
                // Salvar os produtos pré-definidos no LocalStorage
                saveProducts(initialProducts);
            }
            setProducts(initialProducts);
        } catch (error) {
            reportError(error);
        }
    }, []);

    // ... (restante do código permanece o mesmo)

    const handleSaveProduct = (productData) => {
        try {
            if (productData.id) {
                const updated = updateProduct(productData);
                setProducts(getProducts());
            } else {
                const newProduct = addProduct(productData);
                setProducts(getProducts());
            }
        } catch (error) {
            reportError(error);
        }
    };

    const handleDeleteProduct = (productId) => {
        try {
            if (confirm('Tem certeza que deseja excluir este produto?')) {
                deleteProduct(productId);
                setProducts(getProducts());
            }
        } catch (error) {
            reportError(error);
        }
    };

    const handleEditProduct = (product) => {
        try {
            setEditingProduct(product);
            setShowModal(true);
        } catch (error) {
            reportError(error);
        }
    };

    const handleQuantityChange = (productId, newQuantity) => {
        try {
            const product = products.find(p => p.id === productId);
            if (product) {
                updateProduct({ ...product, quantidadeAtual: newQuantity });
                setProducts(getProducts());
            }
        } catch (error) {
            reportError(error);
        }
    };

    const handleGeneratePdf = () => {
        try {
            generatePDF(products);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
            <Header onGeneratePdf={handleGeneratePdf} />
            
            <ProductList 
                products={products}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
                onQuantityChange={handleQuantityChange}
            />

            <FloatingButton onClick={() => {
                setEditingProduct(null);
                setShowModal(true);
            }} />

            {showModal && (
                <ProductModal
                    product={editingProduct}
                    onSave={handleSaveProduct}
                    onClose={() => {
                        setShowModal(false);
                        setEditingProduct(null);
                    }}
                />
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));

// Funções de manipulação de produtos

const STORAGE_KEY = 'stock_products';

function getProducts() {
    try {
        const products = localStorage.getItem(STORAGE_KEY);
        return products ? JSON.parse(products) : [];
    } catch (error) {
        reportError(error);
        return [];
    }
}

function saveProducts(products) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (error) {
        reportError(error);
    }
}

function addProduct(product) {
    try {
        const products = getProducts();
        const newProduct = {
            ...product,
            id: Date.now().toString()
        };
        products.push(newProduct);
        saveProducts(products);
        return newProduct;
    } catch (error) {
        reportError(error);
    }
}

function updateProduct(product) {
    try {
        const products = getProducts();
        const index = products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            products[index] = product;
            saveProducts(products);
            return product;
        }
    } catch (error) {
        reportError(error);
    }
}

function deleteProduct(productId) {
    try {
        const products = getProducts();
        const newProducts = products.filter(p => p.id !== productId);
        saveProducts(newProducts);
    } catch (error) {
        reportError(error);
    }
}

function reportError(error) {
    console.error('Error:', error);
}

// Função para gerar PDF permanece a mesma
function generatePDF(products) {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text('Relatório de Reabastecimento', 20, 20);
        doc.setFontSize(12);
        doc.text(`Data: ${new Date().toLocaleDateString()}`, 20, 30);

        const headers = ['Produto', 'Qtd. Atual', 'Qtd. Ideal', 'Diferença'];
        let y = 40;

        const productsToRestock = products.filter(p => p.quantidadeAtual < p.quantidadeIdeal);

        if (productsToRestock.length === 0) {
            doc.text('Não há produtos que precisam ser reabastecidos.', 20, y);
        } else {
            doc.setFontSize(12);
            doc.setFont(undefined, 'bold');
            headers.forEach((header, i) => {
                doc.text(header, 20 + (i * 45), y);
            });

            doc.setFont(undefined, 'normal');
            y += 10;
            productsToRestock.forEach(product => {
                const difference = product.quantidadeIdeal - product.quantidadeAtual;

                if (y > 270) {
                    doc.addPage();
                    y = 20;
                }

                doc.text(product.titulo.substring(0, 20), 20, y);
                doc.text(product.quantidadeAtual.toString(), 65, y);
                doc.text(product.quantidadeIdeal.toString(), 110, y);
                doc.text(difference.toString(), 155, y);

                y += 10;
            });
        }

        doc.save('relatorio-estoque.pdf');
    } catch (error) {
        reportError(error);
    }
}