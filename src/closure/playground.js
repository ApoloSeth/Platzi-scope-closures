//Solución playgroung clase 10
export function createPetList() {
    const petList = [];
    function myPetList(pet) {
        if (!pet) {
        return petList;
        } else {
        petList.push(pet);
        }
    }
    return myPetList;
}