class MyLogo extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        
        
    }
    
    
    
    typeWord(){
        this.printTitle = this.shadowRoot.querySelector('.logo-title');
        const logoTitle = 'MAGUAYA'.split('');
        this.printSubTitle = this.shadowRoot.querySelector('.logo-subtitle');
        const logoSubTitle = 'Web Design'.split('');
       
        let i = 0;
        let j = 0;

        let titlePrint = this.printTitle;
        let subTitlePrint = this.printSubTitle;

        let printCharI = setInterval(function(){
            
            titlePrint.innerHTML += logoTitle[i];
            if(logoTitle.length -1 === i){
                clearInterval(printCharI)
            }
            i++;
            
        },300)

        let printCharJ = setInterval(function(){
            
            subTitlePrint.innerHTML += logoSubTitle[j];
            if(logoSubTitle.length -1 === j){
                clearInterval(printCharJ)
            }
            j++;
            
        },300)
        
      
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <div class="logo-container">
                <img src="./assets/Maguaya-Web-Design.svg" alt="">
                <div class="logo-info">
                    <h2 class="logo-title"></h2>
                    <h3 class="logo-subtitle"></h3>
                </div>
        </div>
        
        ${this.getStyles()}
        `;
        return template;
    }

    getStyles(){
        return `
        <style>
        :host{
            --color-font: black;
            font-size: 62.5%;
            width: 170px
        }
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .logo-container{
            
            font-family: 'Abril Fatface', cursive;
            height: fit-content;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .logo-container img{
            width: 50px;
        }
        
        .logo-info{
            font-size: 1.6rem;
            line-height: 2rem;
            color:var(--color-font);
        }
        
        </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
        
    }
    
    connectedCallback(){
        this.render();
        this.typeWord();
    }
}

customElements.define('my-logo', MyLogo);