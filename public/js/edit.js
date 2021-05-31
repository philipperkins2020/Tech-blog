

const editProcess = async  (event) => {
    event.preventDefault();

      //Getting information for the edit
    
    const title = document.querySelector("[name='post-title']").value.trim();
    const body = document.querySelector("[name='post-body']").value.trim();
    const user_id = document.querySelector("[name='post-id']").value.trim();

    const id = window.location.toString().split('/') [
        window.location.toString().split('/').length - 1
    ];
    
     // use the update route to update the inventory
    const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title,
                               body 
                              
                              }),
        headers: { 'Content-Type': 'application/json' }
      });
    
    if (response.ok) {
        document.location.replace('/dashboard');
        // document.location.href="/modinventory";
       
        // otherwise, display the error
        } else {
        alert(response.statusText);
        }

  }
  const deletepost= async (event) => {
      event.preventDefault()
      const id = window.location.toString().split('/') [
        window.location.toString().split('/').length - 1
    ];
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
        
       
      });
      if (response.ok) {
        document.location.replace('/dashboard');
        // document.location.href="/modinventory";
       
        // otherwise, display the error
        } else {
        alert(response.statusText);
        }
  }
  document.querySelector("#edit-post-form").addEventListener('submit', editProcess);
  document.querySelector("#delete-btn").addEventListener('click',deletepost);