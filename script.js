// Fetch the input integer from website
function getNum(){
    var num = Number(document.getElementById("input").value);
    return num;
}







// Action from pushing the button
function start(){

    // Define list of numbers
    const listOfNums=[];

    // Get number
    var num=getNum();

    // Place number in list of numbers
    listOfNums.push(num);

    // How many numbers do you want?
    const n=1000;

    // Loop n times
    for (var i=0;i<n;i++){

        //Check if number is even or odd
        // Do calculations there after

        if (num % 2 === 0){
            num = num / 2;

            //Add to list
            listOfNums.push(num);
        } else {
            num = 3*num +1;
            listOfNums.push(num);
        }
    }
    console.log(listOfNums);

    // Print numbers to website

    // Get the div where we put the items
    var container = document.getElementById("output-area");

    for (var i=0;i<listOfNums.length;i++) {

        // Create list item
        var listItem = document.createElement("li");

        // Get number with index i from list
        var listNumber = listOfNums[i];

        // Construct number to put in item
        const output = document.createTextNode(listNumber);

        // Place output in list item
        listItem.appendChild(output);

        // Place the list item in created div
        container.appendChild(listItem);
        }

}



