// =============== CARA BERPINDAH PAGE DENGAN QUERY ID ========================


function getId() {
    // Ambil Query Params id dari url source
    // https://www.sitepoint.com/get-url-parameters-with-javascript/

    // step - 1
    const queryString = window.location.search;
 

    // step - 2
    const urlParams = new URLSearchParams(queryString)
 

    // step - 3
    const productId = urlParams.get('id')

    // step - 4 
    esekusiContent(productId)
}


const images = [ 
    // ============== Pajero ========================
    {
        nama: "New PAJERO SPORT 2.5L GLX (4X4) 5M/T",
        hara: "Rp. 555.000.000",
        img : "images/pajero/pajero2.png"
    },
    {
        nama: "New PAJERO SPORT 2.4L Dakar Ultimate (4x2) 8A/T",
        hara: "Rp. 650.000.000",
        img : "images/pajero/pajero3.png"
    },
    {
        nama: "New PAJERO SPORT 2.4L Dakar Ultimate (4x4) 8A/T",
        hara: "Rp. 705.000.000",
        img : "images/pajero/pajero6.png"
    },
    // =========== X-pander ============================
    {
        nama: "New Xpander SPORT M/T",
        hara: "Rp. 292.000.000",
        img : "images/x-pander/x-pander1.png"
    },
    {
        nama: "New Xpander GLS CVT",
        hara: "Rp. 268.500.000",
        img : "images/x-pander/x-pander2.png"
    },
    {
        nama: "New Xpander Cross CVT 1.5L Plus",
        hara: "Rp. 326.000.000",
        img : "images/x-pander/x-pander3.png"
    },
    {
        nama: "New Xpander Cross CVT 1.5L",
        hara: "Rp. 315.500.000",
        img : "images/x-pander/x-pander4.png"
    },
    {
        nama: "New Xpander GLS M/T",
        hara: "Rp. 295.500.000",
        img : "images/x-pander/x-pander5.png"
    },
    {
        nama: "New Xpander Cross 1.5L M/T",
        hara: "Rp. 301.500.000",
        img : "images/x-pander/x-pander6.png"
    },
    {
        nama: "New Xpander Exceed CVT",
        hara: "Rp. 281.000.000",
        img : "images/x-pander/x-pander7.png"
    },
    {
        nama: "New Xpander Exceed M/T",
        hara: "Rp. 273.000.000",
        img : "images/x-pander/x-pander8.png"
    },
    // ============== L-300 ==================
    {
        nama: "PICK UP Standard",
        hara: "Rp. 219.000.000",
        img : "images/l-300/l-300-1.png"
    },
    {
        nama: "PICK UP Flatdeck",
        hara: "Rp. 220.000.000",
        img : "images/l-300/l-300-2.png"
    },
    {
        nama: "PICK UP Cabin Chasis",
        hara: "Rp. 214.500.000",
        img : "images/l-300/l-300-3.png"
    },
    // ============== Eclipse ==================
    {
        nama: "Eclipse Cross Ultimate A/T 1.5L Turbo (Amethyst Black)",
        hara: "Rp. 500.100.000",
        img : "images/eclips/eclips1.png"
    },
    {
        nama: "Eclipse Cross Ultimate A/T 1.5L Turbo (Sikly White)",
        hara: "Rp. 503.100.000",
        img : "images/eclips/eclips2.png"
    },
    {
        nama: "Eclipse Cross Ultimate A/T 1.5L Turbo (Red Dimond)",
        hara: "Rp. 505.100.000",
        img : "images/eclips/eclpis3.png"
    },
    // ============== Outlander ==================
    {
        nama: "Outlander Sport GLX",
        hara: "Rp. 359.500.000",
        img : "images/outlander/outlander1.png"
    },
    {
        nama: "Outlander Sport GLS",
        hara: "Rp. 377.500.000",
        img : "images/outlander/outlander2.png"
    },
    {
        nama: "Outlander Sport PX",
        hara: "Rp. 403.800.000",
        img : "images/outlander/outlnader3.png"
    },
    {
        nama: "Oulander Sport PX Action",
        hara: "Rp. 411.000.000",
        img : "images/outlander/outlnader4.png"
    },
    {
        nama: "Outlander PHEV 2.4L",
        hara: "Rp. 890.000.000",
        img : "images/outlander/outlander5.png"
    },
     // ============== Outlander ==================
     {
        nama: "Triton 2.4L SC GLX (4X2) M/T Single Cab 2WD",
        hara: "Rp. 278.000.000",
        img : "images/triton/triton1.png"
    },
     {
        nama: "Triton 2.4L SC HDX (4X4) M/T Double Cab 4WD",
        hara: "Rp. 407.500.000",
        img : "images/triton/triton1.png"
    },
     {
        nama: "Triton 2.4L DC HDX (4X4) M/T Double Cab 4WD",
        hara: "Rp. 464.500.000",
        img : "images/triton/triton3.png"
    },
     {
        nama: "Triton 2.4L DC GLS (4X4) M/T Double Cab 4WD",
        hara: "Rp. 486.000.000",
        img : "images/triton/triton4.png"
    },
     {
        nama: "Triton 2.4L DC EXCEED (4X4) M/T Double Cab 4WD",
        hara: "Rp. 546.500.000",
        img : "images/triton/triton4.png"
    },
     {
        nama: "Triton 2.4L DC ULTIMATE (4X4) A/T Double Cab 4WD",
        hara: "Rp. 575.000.000",
        img : "images/triton/triton4.png"
    },
     // ============== ColtDiesel ==================
     {
        nama: "FE 71 LBC Non-Cabin (BUS)",
        hara: "Rp. 352.400.000",
        img : "images/coltdiesel/col1.png"
    },
     {
        nama: "FE 71 Long  BC (BUS)",
        hara: "Rp. 363.500.000",
        img : "images/coltdiesel/col2.png"
    },
     {
        nama: "FE 71 BC (BUS)",
        hara: "Rp. 348.000.000",
        img : "images/coltdiesel/col3.png"
    },
     {
        nama: "FE 71 L",
        hara: "Rp. 374.000.000",
        img : "images/coltdiesel/col4.png"
    },
     {
        nama: "FE 71 PS",
        hara: "Rp. 369.000.000",
        img : "images/coltdiesel/col5.png"
    },
     {
        nama: "FE 71 M/T",
        hara: "Rp. 362.500.000",
        img : "images/coltdiesel/col6.png"
    },
     // ============== Fuso ==================
     {
        nama: "FZ 4028 4 X 2 (Tractor Head)",
        hara: "Rp. 966.000.000",
        img : "images/fuso/fuso1.png"
    },
     {
        nama: "Fuso FN 527 6 X 4 (Fuso)",
        hara: "Rp. 1.087.000.000",
        img : "images/fuso/fuso2.png"
    },
     {
        nama: "Fuso FN 527 MS 6 X 4 (Fuso)",
        hara: "Rp. 1.073.500.000",
        img : "images/fuso/fuso3.png"
    },
     {
        nama: "Fuso FN 517 ML2 SUPER LONG 6 X 2 (Fuso)",
        hara: "Rp. 960.500.000",
        img : "images/fuso/fuso4.png"
    },
     {
        nama: "Fuso FN 517 ML2 6 X 2 (Fuso)",
        hara: "Rp. 948.000.000",
        img : "images/fuso/fuso5.png"
    },
     {
        nama: "Fuso FM 517 HL LONG 4 X 2 (Fuso)",
        hara: "Rp. 842.500.000",
        img : "images/fuso/fuso6.png"
    },
     {
        nama: "Fuso FM 517 HL 4 X 2 (Fuso)",
        hara: "Rp. 837.000.000",
        img : "images/fuso/fuso7.png"
    },
     {
        nama: "Fuso FM 517 HS 4 X 2 (Fuso)",
        hara: "Rp. 806.500.000",
        img : "images/fuso/fuso8.png"
    },
     {
        nama: "FM 65 FM HI GEAR 4 X 2 MT (Tractor Head)",
        hara: "Rp. 846.500.000",
        img : "images/fuso/fuso9.png"
    },
     {
        nama: "FM 65 FM 4 X 2 M/T (Tractor Head)",
        hara: "Rp. 829.500.000",
        img : "images/fuso/fuso10.png"
    },
     {
        nama: "FM 65 FL HI GEAR 4 X 2 (Tractor Head)",
        hara: "Rp. 865.000.000",
        img : "images/fuso/fuso11.png"
    },
     {
        nama: "FM 65 FL 4 X 2 (Tractor Head)",
        hara: "Rp. 846.000.000",
        img : "images/fuso/fuso12.png"
    },
     {
        nama: "FM 65 HI GEAR 4 X 2 (Tractor Head)",
        hara: "Rp. 840.000.000",
        img : "images/fuso/fuso13.png"
    },
     {
        nama: "FM 65 FS 4 X 2 (Tractor Head)",
        hara: "Rp. 835.000.000",
        img : "images/fuso/fuso14.png"
    }
]



function esekusiContent(id) {
    const Tujuan = document.getElementById('cards')
    let key = id.replace(/[?id=]/gi, '');
    
    images.map((value,index) => {
        if(key == index){
            Tujuan.innerHTML = ` 
         

            <div class="card mb-5" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-6">
      <img src="${value.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">${value.nama}</h5>
        <h5 class="card-text">${value.hara}</h5>
        <p class="card-text"><small class="text-muted">Stock Ready</small></p>
      </div>
    </div>
  </div>
</div>
               
          

        
                
           
          `
           }
    })
}

window.onload = function() {
    getId()
}