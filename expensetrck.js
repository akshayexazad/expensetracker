function saveToLocalStorage(event){
    event.preventDefault();
    let enterAmount=event.target.expamount.value;
    let enterDescription=event.target.entdescription.value;
    let catagorySelect=event.target.selectCatagory.value;
    // console.log(catagorySelect)
    let obj={
       Amount: enterAmount,
        Description:enterDescription,
        Catagory:catagorySelect
    }
    localStorage.setItem(obj.Description,JSON.stringify(obj));
    DisplayOnUi(obj)

}
function DisplayOnUi(items){
  let   ParentLi=document.getElementById('listOfUsers');
  let   ChildsOfLi=`<li id=${items.Description}>Amount= ${items.Amount}  Description=${items.Description} catagory= ${items.Catagory}
                <button onclick=deleteItem('${items.Description}')>DeleteItem</button>
                <button onclick=editItem('${items.Amount}','${items.Description}','${items.Catagory}')>editItem</button>
                </li>`;
     ParentLi.innerHTML= ParentLi.innerHTML+ChildsOfLi;   


}
// delete from local storage;
function deleteItem(Description){
    localStorage.removeItem(Description); 
    removeItemFromUi(Description);
}
//delete fron ui;
function removeItemFromUi(Description){
    let ParentLi =document.getElementById('listOfUsers');
    let delteChild=document.getElementById(Description);
    ParentLi.removeChild(delteChild);
}
function editItem(amount,description,catagory){
   document.getElementById('expamount').value= amount;
   document.getElementById('entdescription').value=description;
   document.getElementById('selectCatagory').value=catagory;
   removeItemFromUi(description);
   }

















// function editItem(amount,description,catagory){
//  document.getElementById('expamount').value=amount;
//  document.getElementById('entdescription').value=description;
//  document.getElementById('selectCatagory').value=catagory;
//  deleteItem(description);
// }