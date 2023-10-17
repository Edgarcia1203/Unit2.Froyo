function countFroyoFlavors(){
    const input = prompt("Enter a list of comma-seperated froyo flavors:");
    if (input === null){
        console.log("No input provided.");
        return;
    }

    const flavors = input.split(",");
    const flavorCounts = {};

    for (const flavor of flavors) {
        const trimmedFlavor = flavor.trim();
        if (trimmedFlavor) {
            flavorCounts[trimmedFlavor] = (flavorCounts[trimmedFlavor] || 0) + 1;
        }
    }
    console.log("Froyo Flavor Counts");
    for (const [flavor, count] of Object.entries(flavorCounts)) {
        console.log(`${flavor}: ${count}`);
    }
}

const countButton = document.getElementById("countButton");
countButton.addEventListener("click", countFroyoFlavors);