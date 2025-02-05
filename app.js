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
                    { id: 1, titulo: "Cabeça HP Látex LC/LM", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 2, titulo: "ABRACADEIRA", quantidadeAtual: 0, quantidadeIdeal: 15, quantidadeMinima: 5 },
                    { id: 3, titulo: "LIMPEZA LATEX", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 4, titulo: "BARBANTE BANNER", quantidadeAtual: 0, quantidadeIdeal: 2, quantidadeMinima: 1 },
                    { id: 5, titulo: "BASTAO 105", quantidadeAtual: 0, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 6, titulo: "BASTAO 150", quantidadeAtual: 0, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 7, titulo: "BASTAO 42CM", quantidadeAtual: 0, quantidadeIdeal: 20, quantidadeMinima: 10 },
                    { id: 8, titulo: "BASTAO 75", quantidadeAtual: 0, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 9, titulo: "Cabeça HP Látex C/B", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 10, titulo: "Cabeça HP Látex M/Y", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 11, titulo: "Cabeça HP Látex OPT", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 12, titulo: "Cabeça HP Látex OVCT", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 13, titulo: "Cabeça HP Látex WHITE", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 14, titulo: "Cartucho de Manutenção HP Látex", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 15, titulo: "COLA ALMA SUPER", quantidadeAtual: 0, quantidadeIdeal: 20, quantidadeMinima: 5 },
                    { id: 16, titulo: "COLA PU BRANCO", quantidadeAtual: 0, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 17, titulo: "COLA PU PRETO", quantidadeAtual: 0, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 18, titulo: "COLA SECANTE", quantidadeAtual: 0, quantidadeIdeal: 20, quantidadeMinima: 5 },
                    { id: 19, titulo: "Disco de Corte 115mm x 1mm x 22,23mm", quantidadeAtual: 0, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 20, titulo: "Disco de Corte 304,8mm x 3mm x 25,5mm", quantidadeAtual: 0, quantidadeIdeal: 15, quantidadeMinima: 5 },
                    { id: 21, titulo: "Disco de Desbaste 114,3mm x 6,4mm x 22,2mm", quantidadeAtual: 0, quantidadeIdeal: 21, quantidadeMinima: 5 },
                    { id: 22, titulo: "Disco Flap", quantidadeAtual: 0, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 23, titulo: "Dupla Face 19MM", quantidadeAtual: 0, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 24, titulo: "Dupla Face 9mm", quantidadeAtual: 0, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 25, titulo: "ELETRODO - CX 5 KG", quantidadeAtual: 0, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 26, titulo: "ESPATULA FELTRO", quantidadeAtual: 0, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 27, titulo: "ESPATULA PLASTICO", quantidadeAtual: 0, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 28, titulo: "Estilete 18mm", quantidadeAtual: 0, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 29, titulo: "Estilete 9mm", quantidadeAtual: 0, quantidadeIdeal: 30, quantidadeMinima: 5 },
                    { id: 30, titulo: "Estopa", quantidadeAtual: 0, quantidadeIdeal: 15, quantidadeMinima: 5 },
                    { id: 31, titulo: "Fita Crepe", quantidadeAtual: 0, quantidadeIdeal: 30, quantidadeMinima: 5 },
                    { id: 32, titulo: "ILHOS FEMEA", quantidadeAtual: 0, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 33, titulo: "ILHOS MACHO", quantidadeAtual: 0, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 34, titulo: "LAMINA 18MM", quantidadeAtual: 0, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 35, titulo: "LAMINA 9MM", quantidadeAtual: 0, quantidadeIdeal: 200, quantidadeMinima: 20 },
                    { id: 36, titulo: "LIXA 100", quantidadeAtual: 0, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 37, titulo: "LIXA 120", quantidadeAtual: 0, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 38, titulo: "LIXA 220", quantidadeAtual: 0, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 39, titulo: "LIXA 320", quantidadeAtual: 0, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 40, titulo: "LONA 1,00", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 41, titulo: "LONA 1,20", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 42, titulo: "LONA 1,50", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 43, titulo: "LONA 3,20 280G COCAP", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 44, titulo: "LONA 3,20 BRILHO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 45, titulo: "LONA 3,20 FOSCA", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 46, titulo: "LONA 3,20 MIL FIOS", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 47, titulo: "PAPEL OUTDOOR", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 48, titulo: "PONTEIRA (PCT)", quantidadeAtual: 0, quantidadeIdeal: 20, quantidadeMinima: 5 },
                    { id: 49, titulo: "PVC 1MM", quantidadeAtual: 0, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 50, titulo: "PVC 2MM", quantidadeAtual: 0, quantidadeIdeal: 20, quantidadeMinima: 5 },
                    { id: 51, titulo: "PVC 3MM", quantidadeAtual: 0, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 52, titulo: "SOLVENTE AMPLA", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 53, titulo: "SOLVENTE UV", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 54, titulo: "Tinta HP Látex AMARELO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 55, titulo: "Tinta HP Látex BRANCO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 56, titulo: "Tinta HP Látex CIANO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 57, titulo: "Tinta HP Látex LIGHT CIANO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 58, titulo: "Tinta HP Látex LIGHT MAGENTA", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 59, titulo: "Tinta HP Látex MAGENTA", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 60, titulo: "Tinta HP Látex OTIMIZADOR", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 61, titulo: "Tinta HP Látex OVERCOAT", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 62, titulo: "Tinta HP Látex PRETO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 63, titulo: "Tinta HP UV AMARELO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 64, titulo: "Tinta HP UV CIANO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 65, titulo: "Tinta HP UV LIGHT CIANO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 66, titulo: "Tinta HP UV LIGHT MAGENTA", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 67, titulo: "Tinta HP UV MAGENTA", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 68, titulo: "Tinta HP UV PRETO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 69, titulo: "Tintas Ampla AMARELO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 70, titulo: "Tintas Ampla CIANO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 71, titulo: "Tintas Ampla MAGENTA", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 72, titulo: "Tintas Ampla PRETO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 73, titulo: "Tintas ROLAND AMARELO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 74, titulo: "Tintas ROLAND CIANO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 75, titulo: "Tintas ROLAND MAGENTA", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 76, titulo: "Tintas ROLAND PRETO", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 77, titulo: "Vinil Auto Bubble Free 1,27", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 78, titulo: "Vinil Auto Bubble Free 1,52", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 79, titulo: "VINIL BLACKOUT BRILHO 1,52", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 80, titulo: "VINIL BLACKOUT FOSCO 1,52", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 81, titulo: "VINIL BRILHO 1,06", quantidadeAtual: 0, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 82, titulo: "Vinil BRILHO 1,27", quantidadeAtual: 0, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 83, titulo: "Vinil BRILHO 1,37", quantidadeAtual: 0, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 84, titulo: "Vinil BRILHO 1,52", quantidadeAtual: 0, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 85, titulo: "Vinil FOSCO 1,06", quantidadeAtual: 0, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 86, titulo: "Vinil FOSCO 1,27", quantidadeAtual: 0, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 87, titulo: "Vinil FOSCO 1,37", quantidadeAtual: 0, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 88, titulo: "Vinil FOSCO 1,52", quantidadeAtual: 0, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 89, titulo: "VINIL JATEADO 1,22", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 90, titulo: "VINIL JATEADO 1,52", quantidadeAtual: 0, quantidadeIdeal: 2, quantidadeMinima: 0 },
                    { id: 91, titulo: "VINIL PERFURADO 1,52", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 92, titulo: "VINIL PRETO 1,00", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 93, titulo: "VINIL TRANSPARENTE 1,06", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 },
                    { id: 94, titulo: "VINIL TRANSPARENTE 1,52", quantidadeAtual: 0, quantidadeIdeal: 1, quantidadeMinima: 0 }
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