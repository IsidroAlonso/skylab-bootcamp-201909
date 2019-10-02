let semanticElements = ['div', 'p', 'a', 'span', 'script', 'strong', 'b', 'noscript', 'br', '#text', '#comment', 'button', 'i'];
       let text = '';
       let cont = 0;
       dom = document.getElementsByTagName('body');
       dom = dom[0];
       console.log(dom);
       hijos(dom);
       function hijos(padre) {
           while (padre.hasChildNodes()) {
               const tagName = padre.firstChild.nodeName.toLowerCase();
               if (!semanticElements.includes(tagName)) text += ('<' + tagName + '>');
               if (padre.hasChildNodes()) hijos(padre.firstChild);
               if (!semanticElements.includes(tagName)) text += ('</' + tagName + '>');
               padre.removeChild(padre.childNodes[0]);
           }
       }
       localStorage.setItem('SemanticTree', text);

// let elems = document.querySelectorAll('h1,address,header,nav,section,aside,footer,main,mark,summary,figure,figcaption,details,article')

// console.log(this.document.querySelector('h1 address header nav section aside footer main mark summary figure figcaption details article'));

// console.log(this.document.getElementsByTagName(elems)[0]);

// let elems4 = this.document.querySelectorAll('h1 address header nav section aside footer main mark summary figure figcaption details article');

// this.document.getElementsByTagName(elems4)[0];

// const regex = "";