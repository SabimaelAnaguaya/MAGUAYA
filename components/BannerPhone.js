class Banner extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */

            this.title = this.getAttribute('title');
            

    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <picture class="container">
            <source srcset="../assets/laptop.svg" media="(min-width:968px)">
            <source srcset="../assets/ipad.svg" media="(min-width:768px)">
            <img class="grid-img" src="../assets/phone.svg">

            <div class="grid-info">

                <div class="grid-focus">
                    <h1 class="grid-title">${this.title}</h1>
                    <p class="grid-paragraph">
                        <slot>
                        </slot>
                    </p>

                </div>
                <a href="https://api.whatsapp.com/send?phone=59160636949&text=Hola!, me gustaria saber más" target="_Blank" class="btn">
               

                <span>COMENZAR</span>
                    <div class="dot"></div>
                </a>
            </div>
        </picture>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
        :host{
            --btn-color: gray;
            --border-color: black;
            --font-color: white;
            width: fit-content;
            height: fit-content;
            
        }

        a{
            text-decoration:none;
        }
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
        }
        .container{
            width: 100%;
            min-width: 350px;
            max-width:350px;
            
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;

            place-content: center;
            place-items: center;
         

        }

        .grid-img{
            width:100%;
            grid-column: 1/2;
            grid-row: 1/2;
        }
        .grid-focus{
            width:105%;
            padding:15px 20px;
            margin:40px 0;
        }
        .grid-title{
            color: white;
            text-align:center;
            margin-bottom:10px;
            color:white;
            font-size:2rem;
        }

        .grid-info{
            width: 85%;
            grid-column: 1/2;
            grid-row: 1/2;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            overflow:hidden;
            padding: 20px;
        }

        .grid-paragraph{
            color: white;
            margin-bottom:10px;
            font-size:1.6rem;
            text-align:center; 
            font-weight:500;
        }

        .btn {
            position: relative;
            margin: 0 ;
            width: 150px;
            color: var(--font-color);
            border: 4px solid var(--border-color);
            background:var(--btn-color);
            border-radius: 5em;
            text-transform: uppercase;
            text-align: center;
            font-size: 1.6rem;
            line-height: 2em;
            cursor: pointer;  
            font-weight: 700;
          }

          .dot {
            content: '';
            position: absolute;
            top: -5px;
            width: 10px;
            height: 100%;
            border-radius: 100%;
            transition: all 300ms ease;
            display: none;
          }
          .dot:after {
            content: '';
            position: absolute;
            left: calc(50% - .4em);
            top: -.4em;
            height: .8em;
            width: .8em;
            background: var(--btn-color);
            border-radius: 1em;
            border: 2px solid var(--border-color);
            box-shadow: 0 0 .7em var(--border-color), 0 0 2em var(--btn-color);
          }

          .btn:hover .dot, .btn:focus .dot {
            animation: atom 2s infinite linear;
            display: block;
          }
          @keyframes atom {
            0% {transform: translateX(0) rotate(0);}
            30%{transform: translateX(130px) rotate(0);}
            50% {transform: translateX(130px) translateY(10px) rotate(180deg);}
            80% {transform: translateX(0) translateY(10px)rotate(180deg);}
            100% {transform: translateX(0) translateY(5px)rotate(360deg);}
          }
          @media screen and (max-width:375px) {
            .container{
             width:100%;
             min-width: 250px;
             max-width: 350px;
            }
 
             .grid-img{
                 width:100%;
             }

             .grid-title{
                font-size:1.6rem;
             }

             .grid-paragraph{
                font-size:1.3rem;
             }
         
           }
          @media screen and (min-width:768px) {
            .container{
             width:100%;
             min-width: 400px;
             max-width: 600px;
            }
 
             .grid-img{
                 width:120%;
                 
             }

             .grid-title{
                font-size:3.5rem;
                color: white;
            }

               .grid-paragraph{
                padding:0 50px;
                margin-bottom:20px;
                font-size:2.5rem;
                text-align:center;
            }
         
           }
          @media screen and (min-width: 968px) {
           .container{
            width:100%;
            min-width: 600px;
            max-width: 800px;
           }
           .grid-title{
            font-size:4rem;
            color:white;
           }
            .grid-img{
                width:120%;
            }
            .grid-focus{
                width:100%;
            }
            .grid-paragraph{
               
                padding:0 50px;
                margin-bottom:20px;
                font-size:2.5rem;
                text-align:center; 
                color:white;
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

customElements.define('bg-banner', Banner);