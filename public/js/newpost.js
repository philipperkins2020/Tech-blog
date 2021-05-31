const addInventoryProcess = async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const body = document.getElementById("body").value.trim();
    // const user_id = document.getElementById("user_id").value.trim();
    
   

        
        const response = await fetch('/api/post/', {
            method: "POST",
            body: JSON.stringify({title, body}),
            headers: { "Content-Type": "application/json" },
        });
            console.log(response.body)
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        }
    };

document.querySelector(".addpost").addEventListener("submit", addInventoryProcess);
