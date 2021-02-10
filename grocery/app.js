let form = document.querySelector('#form');
let alert = form.querySelector('.alert');
let input = form.querySelector('#grocery')
let groceryList = document.querySelector('.grocery-list');
let groceryContainer = document.querySelector('.grocery-container');
let clearBtn = document.querySelector('.clear-btn');
let groceryArray = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    alert.classList.remove('success');
    alert.classList.remove('danger');
    
    if(input.value.trim() == '' || input.value.trim() == null)
    {
        showAlert('danger', 'Input field is empty');
    }
    else
    {
        showAlert('success', 'Item successfully added to list');
        groceryArray = JSON.parse(localStorage.getItem('grocery'))|| [];
        groceryArray.push(input.value);
        localStorage.setItem('grocery', JSON.stringify(groceryArray));
        populateList();
    }

    
    form.reset();
})

function populateList()
{
    groceryContainer.classList.add('show-container')
    groceryArray = JSON.parse(localStorage.getItem('grocery'));
    groceryList.innerHTML = ``;
    if(groceryArray && groceryArray.length > 0)
    {

        groceryArray.forEach(item => {
            let element = document.createElement('div');
            element.classList.add('grocery-item');
            element.innerHTML = `<p class="title">${item}</p>
            <div class="btn-container">
            <button type="button" data-item="${item}" class="edit-btn">
            <i class="fas fa-edit"></i>
            </button>
            <button type="button" data-item="${item}" class="delete-btn">
            <i class="fas fa-trash"></i>
            </button>
            </div>`;
            const delButton = element.querySelector('.delete-btn');
            const editButton = element.querySelector('.edit-btn');
            
            delButton.addEventListener('click', deleteItem);
            editButton.addEventListener('click', editItem);
            
            groceryList.appendChild(element);
        })
        clearBtn.style.display = 'block';
    }
    else
    {
        clearBtn.style.display = 'none';
    }

}

function deleteItem()
{
    showAlert('success', 'Item deleted successfully');
    groceryArray = JSON.parse(localStorage.getItem('grocery'));
    if(groceryArray.length === 1)
    {
        groceryContainer.classList.remove('show-container');   
    }
    for(item of groceryArray)
    { 
        if (item = this.dataset.item) 
        { 
            let i = groceryArray.indexOf(item);
            groceryArray.splice(i, 1); 
            break;
        }
    }
    localStorage.setItem('grocery', JSON.stringify(groceryArray));
    populateList();
}

function editItem()
{
    groceryArray = JSON.parse(localStorage.getItem('grocery'));
    for(item of groceryArray)
    { 
        if (item = this.dataset.item) 
        { 
            input.value = item;
            let i = groceryArray.indexOf(item);
            groceryArray.splice(i, 1); 
            break;
        }
    }
    localStorage.setItem('grocery', JSON.stringify(groceryArray));  
    populateList();  
}

function showAlert(classname, text)
{
    alert.classList.add(classname);
    alert.innerText = text;
    setTimeout(() => {
        alert.classList.remove(classname)
    }, 1500);

}

clearBtn.addEventListener('click', () =>  {
    localStorage.removeItem('grocery');
    populateList()
})

console.clear();
populateList();