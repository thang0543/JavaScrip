var products = [];

function showProduct(){
    for( var item of products){
        console.log(item)
    }
}
function emptyCheck(){
    if(products.length == 0){
        console.log("không có sản phẩm để hiển thị")
    }else{
        showProduct()
    }
}


function addProduct(){
    var product
    do {
         product = prompt("nhap san pham can them: ")
        if(product.length < 5){
            console.log("vui long nhap lai: ")
        }
    } while (product.length  < 5);
    for(var item of products){
        if(item == product){
          console.log("san pham da ton tai")
          break
        } else{
            products.push(product)
        }
    }
   console.log(products)
}
// viết 1 hàm removeProduct để thực hiện việc xóa sản phẩm
function removeProduct(){
  
    var product = prompt("nhap san pham can xoa: ")
    if(products.includes(product)){
        for(var i = 0; i < products.length; i++){
            if(products[i] == product){
                // var index = products.indexOf(products[i])
                products.splice(i,1)
                showProduct()
            } 
        }
    }else{
        console.log("không tìm thấy sản phẩm cần xóa")
    }
    
}


function updateProduct(){
   
    var product = prompt("nhap san pham can sua: ")
    var newProduct ;
    if(products.includes(product)){
        newProduct = prompt("nhap thong tin thay doi: ")
        for(var i = 0; i < products.length; i++ ){
            if(products[i] == product){
                products.splice(i,0,newProduct)
                showProduct()
            }
        }
        
    }else{
        console.log("không tìm thấy sản phẩm cần cập nhật")
    }
}

function removeAllProduct(){
    products = [];
    showProduct()
}