fetch("https://fakestoreapi.com/products/category/jewelery").then((data)=>{
    // console.log(data);
    return data.json(); //converted ro object
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`  <tr>
        <td>${values.title}</td>
        <!-- <th scope="row">1</th> -->
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
})
// .catch((err)=>{
//     console.log(err);
// })