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
                    { id: 2, titulo: "Abraçadeira PRETO", quantidadeAtual: 1, quantidadeIdeal: 15, quantidadeMinima: 5 },
                    { id: 3, titulo: "Adesivo Plastico PVC", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 4, titulo: "Adesivo PVC 90 KI KISAFIX 700g", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 5, titulo: "Água Destilada", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 6, titulo: "Álcool 70%", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 7, titulo: "Álcool Isopropílico", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 8, titulo: "Arame de Solda", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 9, titulo: "Arame GALVANIZADO rolo", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 10, titulo: "Barbante p/ Banner", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 11, titulo: "Bastão Madeira 16mm 5/8 - 105CM", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 12, titulo: "Bastão Madeira 16mm 5/8 - 150CM", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 13, titulo: "Bastão Madeira 16mm 5/8 - 42CM", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 14, titulo: "Bastão Madeira 16mm 5/8 - 75CM", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 15, titulo: "BROCAS (MALETA FECHADA)", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 1 },
                    { id: 16, titulo: "Cabeça HP Látex CIAN/BLACK", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 1 },
                    { id: 17, titulo: "Cabeça HP Látex LC/LM", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 1 },
                    { id: 18, titulo: "Cabeça HP Látex M/Y", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 1 },
                    { id: 19, titulo: "Cabeça HP Látex OPTIMIZER", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 1 },
                    { id: 20, titulo: "Cabeça HP Látex OVERCOAT", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 1 },
                    { id: 21, titulo: "Cabeça HP Látex WHITE", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 1 },
                    { id: 22, titulo: "Cartucho de Manutenção HP Látex", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 1 },
                    { id: 23, titulo: "CATALISADOR DUXONE 100ML", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 24, titulo: "CATALIZADOR LAZURRIL 300ML", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 25, titulo: "Chapa Acrílico 2MM TRANSPARENTE", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 26, titulo: "Chapa Acrílico 3MM TRANSPARENTE", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 27, titulo: "Chapa Acrílico 4mm TRANSPARENTE", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 28, titulo: "Chapa Acrílico 8MM TRANSPARENTE", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 29, titulo: "Chapa Acrílico AZUL 2mm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 30, titulo: "Chapa Acrílico BRANCO 2MM", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 31, titulo: "Chapa Acrílico BRANCO 2mm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 32, titulo: "Chapa Acrílico VERMELHO 2mm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 33, titulo: "Chapa POLICABORNATO 2MM", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 34, titulo: "Chapa POLICABORNATO 2MM transparente", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 35, titulo: "Chapa PS Branco 0.5MM", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 36, titulo: "Chapa PS Branco 1mm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 37, titulo: "Chapa PS Branco 2mm", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 38, titulo: "Chapa PS Branco 3mm", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 39, titulo: "Coador de Tinta", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 40, titulo: "Cola Acrílico", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 41, titulo: "Cola Alma Super", quantidadeAtual: 1, quantidadeIdeal: 20, quantidadeMinima: 5 },
                    { id: 42, titulo: "COLA PU BEGE", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 43, titulo: "COLA PU BRANCO", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 44, titulo: "COLA PU CINZA", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 0 },
                    { id: 45, titulo: "COLA PU PRETO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 46, titulo: "Cola SPRAY Alma Super KIT MDF", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 47, titulo: "Cola Super Bonder", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 48, titulo: "Disco de Corte 115mm x 1mm x 22,23mm", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 49, titulo: "Disco de Corte 304,8mm x 3mm x 25,5mm", quantidadeAtual: 1, quantidadeIdeal: 15, quantidadeMinima: 5 },
                    { id: 50, titulo: "Disco de Desbaste 114,3mm x 6,4mm x 22,2mm", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 51, titulo: "Disco Flap", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 52, titulo: "Dupla Face 19MM", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 53, titulo: "Dupla Face 20mm", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 54, titulo: "Dupla Face 9mm", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 10 },
                    { id: 55, titulo: "ELETRODO - CX 5 KG", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 56, titulo: "Endurecedor 150ml - MAZA", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 57, titulo: "ENDURECEDOR MAZA 300ML", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 58, titulo: "Espátula Feltro", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 59, titulo: "Espátula Plástico", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 60, titulo: "Estanho de Solda", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 61, titulo: "Estilete 18mm", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 62, titulo: "Estilete 9mm", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 5 },
                    { id: 63, titulo: "Estopa", quantidadeAtual: 1, quantidadeIdeal: 15, quantidadeMinima: 5 },
                    { id: 64, titulo: "EXTENSÃO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 1 },
                    { id: 65, titulo: "FERRO DE SOLDA - FERRAMENTA", quantidadeAtual: 1, quantidadeIdeal: 2, quantidadeMinima: 1 },
                    { id: 66, titulo: "Fita Alumínio 25mm", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 67, titulo: "Fita Crepe", quantidadeAtual: 1, quantidadeIdeal: 30, quantidadeMinima: 5 },
                    { id: 68, titulo: "Fita de Níquel", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 69, titulo: "Fita Isolante", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 70, titulo: "Fita Larga", quantidadeAtual: 1, quantidadeIdeal: 20, quantidadeMinima: 5 },
                    { id: 71, titulo: "Fonte 12V 5A", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 72, titulo: "Fonte 12V 6A", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 73, titulo: "Fonte Chaveada 12V 10A", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 74, titulo: "Fonte Chaveada 12V 20A", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 0 },
                    { id: 75, titulo: "Fonte Chaveada 12V 30A", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 0 },
                    { id: 76, titulo: "Fonte Chaveada 12V 50A", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 77, titulo: "Fonte Chaveada 12V 5A", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 78, titulo: "GANCHO ANZOL S", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 79, titulo: "Grampo Rocama 106/6", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 80, titulo: "Graxa de sabão", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 81, titulo: "Ilhós femea", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 82, titulo: "Ilhós macho", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 83, titulo: "LACA PROTETORA BRILHANTE", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 84, titulo: "Lamina Estilete 18mm", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 85, titulo: "Lamina Estilete 9mm", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 86, titulo: "LAMINA PARA CEGUETA", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 0 },
                    { id: 87, titulo: "Lâmpada Bulbo LED 12W", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 88, titulo: "Lâmpada Bulbo LED 16W", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 89, titulo: "Lâmpada Bulbo LED 20w", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 90, titulo: "Lâmpada Bulbo LED 50W", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 91, titulo: "Lâmpada Bulbo LED 9W", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 92, titulo: "Lâmpada Tub. Bc. Fria T8 10w 60cm", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 93, titulo: "Lâmpada Tub. Bc. Fria T8 18w 120cm", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 0 },
                    { id: 94, titulo: "Lâmpada Tub. Bc. QUENTE T8 18w 120cm", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 95, titulo: "LINHA DE PESCA", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 96, titulo: "Lixa D. Agua P100", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 97, titulo: "Lixa D. Agua P120", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 98, titulo: "Lixa D. Agua P220", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 99, titulo: "Lixa D. Agua P320", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 5 },
                    { id: 100, titulo: "Lona Backlight 440g 320cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 101, titulo: "Lona Brilho - 440g 1,40", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 102, titulo: "Lona Brilho - 440g 100cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 103, titulo: "Lona Brilho - 440g 120cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 104, titulo: "Lona Brilho - 440g 140cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 105, titulo: "Lona Brilho - 440g 150CM", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 106, titulo: "Lona Brilho - 440g 160cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 107, titulo: "Lona Brilho - 440g 170cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 108, titulo: "Lona Brilho - 440g 2,05m", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 109, titulo: "Lona Brilho - 440g 320cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 110, titulo: "Lona Brilho - MIL FIOS 320cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 111, titulo: "Lona FINA Brilho - 280g 320cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 112, titulo: "Lona Fosca - 440g 100cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 113, titulo: "Lona Fosca - 440g 120cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 114, titulo: "Lona Fosca - 440g 150cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 115, titulo: "Lona Fosca - 440g 160cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 116, titulo: "Lona Fosca - 440g 170cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 117, titulo: "Lona Fosca - 440g 320cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 118, titulo: "Lona Preto", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 119, titulo: "Luvas Vaqueta", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 120, titulo: "MALETA DE FERRAMENTAS", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 1 },
                    { id: 121, titulo: "Manta de Alumínio", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 122, titulo: "Manta Magnética", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 123, titulo: "Máscara AMÔNIA CHEIRO ODOR", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 124, titulo: "Máscara TRANSFERÊNCIA COM LINE", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 125, titulo: "Máscara TRANSFERÊNCIA SEM LINE", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 126, titulo: "Organizador Vertical", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 1 },
                    { id: 127, titulo: "PAFLON LED 36W", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 128, titulo: "Papel de Outdoor 150cm", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 129, titulo: "Pasta de Solda", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 130, titulo: "Plástico Bolha", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 131, titulo: "Plástico de Bolsa", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 132, titulo: "Ponteiras 16mm - 5/8 BRANCO", quantidadeAtual: 1, quantidadeIdeal: 100, quantidadeMinima: 20 },
                    { id: 133, titulo: "Ponteiras 16mm - 5/8 PRETO", quantidadeAtual: 1, quantidadeIdeal: 100, quantidadeMinima: 20 },
                    { id: 134, titulo: "Ponteiras 19mm - 3/4", quantidadeAtual: 1, quantidadeIdeal: 100, quantidadeMinima: 20 },
                    { id: 135, titulo: "Ponteiras 23mm - 7/8", quantidadeAtual: 1, quantidadeIdeal: 100, quantidadeMinima: 20 },
                    { id: 136, titulo: "Primer DF Saturno 900ml", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 137, titulo: "Primer Industrial", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 138, titulo: "Primer Universal Cinza", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 0 },
                    { id: 139, titulo: "PROTETOR AURICULAR", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 140, titulo: "Querosene", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 141, titulo: "Refletor 18W", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 142, titulo: "Refletor 200W", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 143, titulo: "Refletor 20W", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 144, titulo: "Refletor 30W", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 0 },
                    { id: 145, titulo: "Refletor 50W", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 146, titulo: "Régua 1m", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 147, titulo: "Removedor", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 148, titulo: "Removedor de TINTA", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 149, titulo: "ROLO DE IMÃ", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 150, titulo: "ROLO FIO PARALELO", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 151, titulo: "Rolo Fita Elástica", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 2 },
                    { id: 152, titulo: "Rolo Fita Teflon", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 153, titulo: "Socket de Lâmpada (UND)", quantidadeAtual: 1, quantidadeIdeal: 100, quantidadeMinima: 20 },
                    { id: 154, titulo: "Solvente Ampla", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 155, titulo: "Solvente HP UV", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 156, titulo: "Solvente ROLAND", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 0 },
                    { id: 157, titulo: "Thinner 18L", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 158, titulo: "Timer Digital", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 159, titulo: "Tinta HP Látex AMARELO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 160, titulo: "Tinta HP Látex BRANCO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 161, titulo: "Tinta HP Látex CIANO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 162, titulo: "Tinta HP Látex LIGHT CIANO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 163, titulo: "Tinta HP Látex LIGHT MAGENTA", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 164, titulo: "Tinta HP Látex MAGENTA", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 165, titulo: "Tinta HP Látex OTIMIZADOR", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 166, titulo: "Tinta HP Látex OVERCOAT", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 167, titulo: "Tinta HP Látex PRETO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 168, titulo: "Tinta HP UV AMARELO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 169, titulo: "Tinta HP UV CIANO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 170, titulo: "Tinta HP UV LIGHT CIANO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 171, titulo: "Tinta HP UV LIGHT MAGENTA", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 172, titulo: "Tinta HP UV MAGENTA", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 173, titulo: "Tinta HP UV PRETO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 174, titulo: "TINTA PRETO FOSCO 400ML", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 0 },
                    { id: 175, titulo: "Tintas Ampla AMARELO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 176, titulo: "Tintas Ampla CIANO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 177, titulo: "Tintas Ampla MAGENTA", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 178, titulo: "Tintas Ampla PRETO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 179, titulo: "Tintas ROLAND AMARELO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 180, titulo: "Tintas ROLAND AMARELO (cópia)", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 0 },
                    { id: 181, titulo: "Tintas ROLAND CIANO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 182, titulo: "Tintas ROLAND MAGENTA", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 183, titulo: "Tintas ROLAND PRETO", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 184, titulo: "Trena Básica 8m", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 185, titulo: "Uniforme Loja G", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 186, titulo: "Uniforme Loja GG", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 187, titulo: "Uniforme Loja M", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 188, titulo: "Uniforme Loja P", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 189, titulo: "Uniforme Loja PP", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 190, titulo: "Uniforme MANGA LONGA G", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 191, titulo: "Uniforme MANGA LONGA GG", quantidadeAtual: 1, quantidadeIdeal: 10, quantidadeMinima: 3 },
                    { id: 192, titulo: "Verniz Pu DUXONE 900ml", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 193, titulo: "Vinil Automotivo Bubble Free 1,27", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 194, titulo: "Vinil Automotivo Bubble Free 1,37", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 195, titulo: "Vinil Automotivo Bubble Free 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 196, titulo: "Vinil Automotivo DP100 1,27", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 197, titulo: "Vinil Automotivo DP100 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 198, titulo: "Vinil Automotivo DP120 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 199, titulo: "Vinil Blackout BRILHO 1,06", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 200, titulo: "Vinil Blackout BRILHO 1,27", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 201, titulo: "Vinil Blackout BRILHO 1,37", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 202, titulo: "Vinil Blackout BRILHO 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 203, titulo: "Vinil Blackout FOSCO 1,06", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 204, titulo: "Vinil Blackout FOSCO 1,27", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 205, titulo: "Vinil Blackout FOSCO 1,37", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 206, titulo: "Vinil Blackout FOSCO 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 207, titulo: "Vinil Blackout REMOVIVEL BRILHO 1,37", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 208, titulo: "Vinil Blackout REMOVIVEL FOSCO 1,06", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 209, titulo: "Vinil Blackout REMOVIVEL FOSCO 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 210, titulo: "Vinil BRILHO 1,06", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 211, titulo: "Vinil BRILHO 1,27", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 212, titulo: "Vinil BRILHO 1,37", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 213, titulo: "Vinil BRILHO 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 214, titulo: "Vinil ELETROESTÁTICO 1,06", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 215, titulo: "Vinil FOSCO 1,06", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 216, titulo: "Vinil FOSCO 1,27", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 217, titulo: "Vinil FOSCO 1,37", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 218, titulo: "Vinil FOSCO 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 219, titulo: "Vinil JATEADO 1,27", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 220, titulo: "Vinil JATEADO 1,37", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 221, titulo: "Vinil JATEADO 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 222, titulo: "Vinil PERFURADO 1,37", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 223, titulo: "Vinil PERFURADO 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 224, titulo: "Vinil Preto Fosco 1,00", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 225, titulo: "Vinil Preto Fosco 1,22", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 226, titulo: "Vinil PROMOCIONAL BRILHO 1,06", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 227, titulo: "Vinil PROMOCIONAL BRILHO 1,27", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 228, titulo: "Vinil PROMOCIONAL BRILHO 1,37", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 229, titulo: "Vinil PROMOCIONAL BRILHO 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 230, titulo: "Vinil Refletivo Branco 1,24", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 231, titulo: "Vinil Transparente 1,06", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 232, titulo: "Vinil Transparente 1,27", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 233, titulo: "Vinil Transparente 1,37", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 234, titulo: "Vinil Transparente 1,52", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 },
                    { id: 235, titulo: "Wash Primer Fundo Fosfatizante Maza 900ml", quantidadeAtual: 1, quantidadeIdeal: 5, quantidadeMinima: 2 },
                    { id: 236, titulo: "XPS Branco", quantidadeAtual: 1, quantidadeIdeal: 3, quantidadeMinima: 0 }
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