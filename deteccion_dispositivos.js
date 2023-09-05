
const d=document,
n=navigator,
ua=n.userAgent;
export function userDeviceInfo(id) {
    const $id=d.getElementById(id),
    //estos objetos son para las redirecciones o tomas de deciones 
    isMobile={
        android:()=>ua.match(/android/i),//aqui estoy buscando si en la cadena de texto del ua esta la palabra android
        ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        },
    },

    isdesktop={
        linux:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac os/i),
        windows:()=>ua.match(/windows nt/i),
        any: function () {
            return this.linux() || this.mac() || this.windows();
        },
    },

    isBrowser={
        chrome:()=>ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera opera mini/i),
        ie:()=>ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        
        any: function () {
            return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge();

        },


    };
    
    //console.log(ua)
   // console.log(isMobile.android());
    //console.log(isMobile.ios())

    $id.innerHTML=`
    <ul>
    <li>User Agent:<b>${ua}</b> </li>
    <li>User Agent:<b>${isMobile.any()?isMobile.any():isdesktop.any()}</b> </li>
    <li>User Agent:<b>${isBrowser.any()}</b> </li>
    </ul>
    `

    /*Contenido exclusivo */

    if(isBrowser.chrome()){
        $id.innerHTML+=`<p><mark>este contenido se ve solo en Chrome</mark> </p>`
    }
    if(isBrowser.firefox()){
        $id.innerHTML+=`<p><mark>este contenido se ve solo en firefox</mark> </p>`
    }

    /*Redirecciones */
    /* if(isMobile.android()){
        window.location.href="https://es.tradingview.com/chart/"
    } */
}