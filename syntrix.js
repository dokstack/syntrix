class Syntrix {
    static loadFromFile(file) {
        fetch(file)
            .then(r => r.text())
            .then(code => this.render(code));
    }

    static render(code) {
        const components = this.parse(code);
        document.head.insertAdjacentHTML('beforeend', `<style>${components.css}</style>`);
        document.body.innerHTML = components.html;
    }

    static parse(code) {
        let html = '';
        let css = '';
        let current = null;
        
        const lines = code.split('\n');
        lines.forEach(line => {
            line = line.trim();
            if (!line || line.startsWith('//')) return;

            if (line.startsWith('>>')) {
                const [type, name] = line.substring(2).trim().split(' ');
                current = name;
                
                switch(type) {
                    case 'page':
                        html += `<div class="${name}">`;
                        break;
                    case 'text':
                        html += `<p class="${name}">${name}</p>`;
                        break;
                    case 'button':
                        html += `<button class="${name}">${name}</button>`;
                        break;
                    case 'input':
                        html += `<input class="${name}" placeholder="${name}">`;
                        break;
                    case 'card':
                        html += `<div class="${name} card">`;
                        break;
                    case 'end':
                        html += '</div>';
                        break;
                }
            }
            else if (line.startsWith('::')) {
                const [prop, value] = line.substring(2).split('=').map(s => s.trim());
                css += `.${current} { ${prop}: ${value}; }\n`;
            }
        });

        return { html, css };
    }
}