var initialData = {
   vehicle: '',
   isLoading: false
};

const reducer = (state = initialData, action) => {
   switch (action.type) {
      case "Car":
         return (
            initialData = {
               vehicle: "Car",
               isLoading: false
            }
         )
      case "Bike":
         return (
            initialData = {
               vehicle: "Bike",
               isLoading: false
            }
         )
      default:
         return true;
   }
}
 
export default reducer;