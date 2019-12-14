let semanticElements = ['div', 'p', 'a', 'span', 'script', 'strong', 'b', 'noscript', 'br', '#text', '#comment', 'button', 'i'];
       let text = '';
       let cont = 0;
       dom = document.getElementsByTagName('body');
       dom = dom[0];
       alert(dom);
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
       console.log(text);
