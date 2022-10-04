class Banner extends HTMLElement {
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
        <section class="banner-container">

            <div class="info-banner">
                <h1>Desarrollo Web</h1>
                <p><slot></slot></p>
                <span >
                    <a href="https://api.whatsapp.com/send?phone=59160636949&text=Hola!, me gustaria saber más" target="_Blank" class="btn">COMENZAR</a>
                </span>
            </div>

        </section>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
        :host{
            width:100%;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 350px;
            margin-top:40px;
        }

        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

        a{
            text-decoration:none;
            color:white;
        }

        .banner-container{
            width: 100%;
            
            
            background-image:url("./assets/imgBannerSm.jpg");
            background-attachment:fixed;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        
            place-items: center;
            place-content: center;
        }
        
        
        
        .banner-container .info-banner{
            width:100%;
            height:100%;
            background:rgb(36, 114, 145, .9);
            font-size: 2rem;
            text-align: center;
            color: white;
            grid-area: 1/2;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            z-index: 2;
        }
        .info-banner h1{
            margin:0;
        }
        .info-banner p{
            width:80%;
            font-weight:500;
            margin-bottom:50px;
        }

        .btn{
            border:2px solid white;
            padding:5px 8px ;
            border-radius:10px;
            cursor:pointer;
        }

        .btn:hover{
            background:#247291;
        }

        @media screen and (min-width:768px) {
    
 
        }
        @media screen and (min-width: 968px) {
            .info-banner h1{
                font-size:4rem;
                margin:0;
            }
            .info-banner p{
                font-size:2.5rem;
                width:80%;
                font-weight:500;
                margin-bottom:50px;
            }
    
            .btn{
                font-weight:700;
                border:2px solid white;
                padding:5px 8px ;
                border-radius:10px;
                cursor:pointer;
            }
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

customElements.define('banner-info', Banner);