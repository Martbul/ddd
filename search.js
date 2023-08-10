function search() {
      let listItems = document.querySelectorAll("#towns li");
      let input = document.querySelector("input").value;
      let res = document.getElementById("result");

      let sum = 0;

      for (const li of listItems) {
         const inputToLower = input.toLowerCase();
         const liTextToLower = li.textContent.toLowerCase();

         if(liTextToLower.includes(inputToLower)) {
            li.style.fontWeight = 'bold';
            li.style.textDecoration = 'underline';
            sum++;
         }else{
            li.style.fontSize = '';
            li.style.textDecoration = '';
         }
      }
res.textContent = `${sum} matches found` 
}
