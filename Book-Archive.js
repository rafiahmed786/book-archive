const showBooksAmount = document.getElementById('total-book');
// Error message 
const error = document.getElementById('error').style.display="none";

// getting api data 
const inputText = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value= "";

    const url = `https://openlibrary.org/search.json?q=${inputText}`;
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayItems(data.docs));
}

// displaying the data 
const displayItems = (books) => {
   
  // Display total books amount 
  showBooksAmount.innerHTML="";
  showBooksAmount.innerHTML=`<h5>Total result: ${books.length}</h5>`;

    if(books.length === 0){
        // when user will enter an invalid text 
        const error = document.getElementById('error').style.display="Block";
         const displayNone=document.getElementById('meal-container').style.display="none";

    }
    else{
        // display none of error 
        const error1 = document.getElementById('error').style.display="none";
        // display flex of books 
        document.getElementById('meal-container').style.display="flex"

        // display all the books 
        const mealContainer = document.getElementById('meal-container');
        mealContainer.textContent= "";

        // using for each loop to show the first 20 books 
        books.slice(0,20).forEach(book => {
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
        <div onclick="mealDetails()" class="card h-100">
            <img  src= "https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" width='100px' class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p>Author: <span style="color:red;font-style:italic;">
            ${book.author_name? book.author_name : "Didn't Found"}</span></p>

             <p class="card-text">Publisher: 
             <span style="color:#333;font-weight:bold;">
             ${book.publisher[0] ? book.publisher[0] : "Didn't Found"}</span></p>

             <p class="card-text">First Published:
             <span style="font-weight:bold;"> 
             ${book.first_publish_year ? book.first_publish_year : "Didn't Found"}</span></p>

         </div>
        </div>
        `;
        mealContainer.appendChild(div)
        
    })
    }   
};