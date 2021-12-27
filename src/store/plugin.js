export const myPlugin = store => {
   store.subscribe(mutation => {
       if(mutation.type == "editFeedback") {
           console.log(mutation.payload);
       }
   })
}

