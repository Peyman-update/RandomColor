
const colorRandom = () => {
            
    let letters = '0123456789ABCDEF';
    let color = '#';
    
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};




const ProductionElement = () => {
    
    const Element = document.createElement('div');

    document.body.append(Element);
    
    Element.style.backgroundColor = colorRandom();

};

const interval = setInterval(() => {
    
    ProductionElement();

}, 1000);




        