class BtnBegin extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <span class="btn-container">
            <a class="button" href="" >
                COMENZAR
            </a>

        </span>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }
            a{
                width:120px;
                text-decoration:none;
                color:#eef2e2;
                font-size:1.6rem;
                font-weight:700;
                padding:8px 15px;
                background:#247291;
                border-radius:10px;
            }

            a:hover{
                background:#f8da5b;
                color:#247291;
            }

        </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define('btn-begin', BtnBegin);