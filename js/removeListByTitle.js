const removeCurrentPageLink = () => {
   const pageTitle = document.title;
   const anchors = document.querySelectorAll('.ee-right-menu ul a');

   for (let i = 0; i < anchors.length; i++) {
     const anchor = anchors[i];
     if (anchor.textContent.trim() === pageTitle) {
       anchor.remove();
       break; // Exit the loop once the item is found and removed
     }
   }
 };

 $("#ee-header").load("components/header.html", removeCurrentPageLink);
