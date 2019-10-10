        let semanticElements = ['#text', '#comment'];
        let text = '';
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


        console.log(text);