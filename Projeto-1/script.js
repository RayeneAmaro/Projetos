const alterarLinks = document.querySelectorAll('a[href^="www.google.com.br"]');

alterarLinks.forEach((alterar) => {
    alterar.setAttribute('href', 'https://www.google.com/');
})

