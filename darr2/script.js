// class DynamicArray {
//     constructor(size) {
//         this.array = new Array(size);
//         this.currentSize = 0;
//     }

//     addElement(element) {
//         if (this.currentSize === this.array.length) {
//             throw new Error('Array is full. Resize first.');
//         }
//         this.array[this.currentSize] = element;
//         this.currentSize++;
//     }

//     resizeArray(newSize) {
//         const newArray = new Array(newSize);
//         for (let i = 0; i < this.currentSize; i++) {
//             newArray[i] = this.array[i];
//         }
//         this.array = newArray;
//     }

//     // Implement other methods as needed
// }

// // Create an instance of DynamicArray
// const dynamicArray = new DynamicArray(5);

// // Function to create the dynamic array visualization
// function createDynamicArrayVisualization() {
//     const arrayContainer = document.getElementById('arrayContainer');
//     arrayContainer.innerHTML = '';

//     for (let i = 0; i < dynamicArray.array.length; i++) {
//         const element = dynamicArray.array[i];
//         const arrayElement = document.createElement('div');
//         arrayElement.classList.add('array-element');
//         arrayElement.textContent = element !== undefined ? element : '-';
//         arrayContainer.appendChild(arrayElement);
//     }
// }

// // Function to handle resize button click event
// function handleResizeButtonClick() {
//     const sizeInput = document.getElementById('sizeInput');
//     const newSize = parseInt(sizeInput.value);
//     dynamicArray.resizeArray(newSize);
//     createDynamicArrayVisualization();
//     sizeInput.value = '';
// }

// // Function to handle size button click event
// function handleSizeButtonClick() {
//     const size = dynamicArray.size();
//     alert(`Size: ${size}`);
// }

// // Function to handle capacity button click event
// function handleCapacityButtonClick() {
//     const capacity = dynamicArray.array.length;
//     alert(`Capacity: ${capacity}`);
// }

// // Function to handle isEmpty button click event
// function handleIsEmptyButtonClick() {
//     const isEmpty = dynamicArray.isEmpty();
//     alert(`IsEmpty: ${isEmpty}`);
// }

// // Function to handle getElement button click event
// function handleGetElementButtonClick() {
//     const indexInput = document.getElementById('indexInput');
//     const index = parseInt(indexInput.value);
//     const element = dynamicArray.get(index);
//     document.getElementById('getElementResult').textContent = element !== undefined ? element : '-';
//     indexInput.value = '';
// }

// // Function to handle setElement button click event
// function handleSetElementButtonClick() {
//     const setIndexInput = document.getElementById('setIndexInput');
//     const setElementInput = document.getElementById('setElementInput');
//     const index = parseInt(setIndexInput.value);
//     const element = parseInt(setElementInput.value);
//     dynamicArray.set(index, element);
//     createDynamicArrayVisualization();
//     setIndexInput.value = '';
//     setElementInput.value = '';
// }

// // Function to handle addElement button click event
// function handleAddElementButtonClick() {
//     const addElementInput = document.getElementById('addElementInput');
//     const element = parseInt(addElementInput.value);
//     dynamicArray.addElement(element);
//     createDynamicArrayVisualization();
//     addElementInput.value = '';
// }

// // Function to handle insertElement button click event
// function handleInsertElementButtonClick() {
//     const insertIndexInput = document.getElementById('insertIndexInput');
//     const insertElementInput = document.getElementById('insertElementInput');
//     const index = parseInt(insertIndexInput.value);
//     const element = parseInt(insertElementInput.value);
//     dynamicArray.insert(index, element);
//     createDynamicArrayVisualization();
//     insertIndexInput.value = '';
//     insertElementInput.value = '';
// }

// // Function to handle removeElement button click event
// function handleRemoveElementButtonClick() {
//     const removeIndexInput = document.getElementById('removeIndexInput');
//     const index = parseInt(removeIndexInput.value);
//     dynamicArray.remove(index);
//     createDynamicArrayVisualization();
//     removeIndexInput.value = '';
// }

// // Function to handle contains button click event
// function handleContainsButtonClick() {
//     const containsInput = document.getElementById('containsInput');
//     const element = parseInt(containsInput.value);
//     const contains = dynamicArray.contains(element);
//     alert(`Contains ${element}: ${contains}`);
//     containsInput.value = '';
// }

// // Function to handle clear button click event
// function handleClearButtonClick() {
//     dynamicArray.clear();
//     createDynamicArrayVisualization();
// }

// // Add event listeners to buttons
// document.getElementById('resizeButton').addEventListener('click', handleResizeButtonClick);
// document.getElementById('sizeButton').addEventListener('click', handleSizeButtonClick);
// document.getElementById('capacityButton').addEventListener('click', handleCapacityButtonClick);
// document.getElementById('isEmptyButton').addEventListener('click', handleIsEmptyButtonClick);
// document.getElementById('getElementButton').addEventListener('click', handleGetElementButtonClick);
// document.getElementById('setElementButton').addEventListener('click', handleSetElementButtonClick);
// document.getElementById('addElementButton').addEventListener('click', handleAddElementButtonClick);
// document.getElementById('insertElementButton').addEventListener('click', handleInsertElementButtonClick);
// document.getElementById('removeElementButton').addEventListener('click', handleRemoveElementButtonClick);
// document.getElementById('containsButton').addEventListener('click', handleContainsButtonClick);
// document.getElementById('clearButton').addEventListener('click', handleClearButtonClick);

// // Initialize the dynamic array visualization
// createDynamicArrayVisualization();



class DynamicArray {
    constructor(size) {
        this.array = new Array(size);
        this.currentSize = 0;
    }

    addElement(element) {
        if (this.currentSize === this.array.length) {
            throw new Error('Array is full. Resize first.');
        }
        this.array[this.currentSize] = element;
        this.currentSize++;
    }

    resizeArray(newSize) {
        const newArray = new Array(newSize);
        for (let i = 0; i < this.currentSize; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

    size() {
        return this.currentSize;
    }

    isEmpty() {
        return this.currentSize === 0;
    }

    get(index) {
        if (index < 0 || index >= this.currentSize) {
            throw new Error('Invalid index.');
        }
        return this.array[index];
    }

    set(index, element) {
        if (index < 0 || index >= this.currentSize) {
            throw new Error('Invalid index.');
        }
        this.array[index] = element;
    }

    insert(index, element) {
        if (index < 0 || index > this.currentSize) {
            throw new Error('Invalid index.');
        }
        if (this.currentSize === this.array.length) {
            throw new Error('Array is full. Resize first.');
        }
        for (let i = this.currentSize - 1; i >= index; i--) {
            this.array[i + 1] = this.array[i];
        }
        this.array[index] = element;
        this.currentSize++;
    }

    remove(index) {
        if (index < 0 || index >= this.currentSize) {
            throw new Error('Invalid index.');
        }
        for (let i = index; i < this.currentSize - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.array[this.currentSize - 1] = undefined;
        this.currentSize--;
    }

    contains(element) {
        for (let i = 0; i < this.currentSize; i++) {
            if (this.array[i] === element) {
                return true;
            }
        }
        return false;
    }

    clear() {
        for (let i = 0; i < this.currentSize; i++) {
            this.array[i] = undefined;
        }
        this.currentSize = 0;
    }
}

// Create an instance of DynamicArray
const dynamicArray = new DynamicArray(5);

// Function to create the dynamic array visualization
function createDynamicArrayVisualization() {
    const arrayContainer = document.getElementById('arrayContainer');
    arrayContainer.innerHTML = '';

    for (let i = 0; i < dynamicArray.array.length; i++) {
        const element = dynamicArray.array[i];
        const arrayElement = document.createElement('div');
        arrayElement.classList.add('array-element');
        arrayElement.textContent = element !== undefined ? element : '-';
        arrayContainer.appendChild(arrayElement);
    }
}

// Function to handle resize button click event
function handleResizeButtonClick() {
    const sizeInput = document.getElementById('sizeInput');
    const newSize = parseInt(sizeInput.value);
    dynamicArray.resizeArray(newSize);
    createDynamicArrayVisualization();
    sizeInput.value = '';
}

// Function to handle size button click event
function handleSizeButtonClick() {
    const size = dynamicArray.size();
    alert(`Size: ${size}`);
}

// Function to handle capacity button click event
function handleCapacityButtonClick() {
    const capacity = dynamicArray.array.length;
    alert(`Capacity: ${capacity}`);
}

// Function to handle isEmpty button click event
function handleIsEmptyButtonClick() {
    const isEmpty = dynamicArray.isEmpty();
    alert(`IsEmpty: ${isEmpty}`);
}

// Function to handle getElement button click event
function handleGetElementButtonClick() {
    const indexInput = document.getElementById('indexInput');
    const index = parseInt(indexInput.value);
    const element = dynamicArray.get(index);
    document.getElementById('getElementResult').textContent = element !== undefined ? element : '-';
    indexInput.value = '';
}

// Function to handle setElement button click event
function handleSetElementButtonClick() {
    const setIndexInput = document.getElementById('setIndexInput');
    const setElementInput = document.getElementById('setElementInput');
    const index = parseInt(setIndexInput.value);
    const element = parseInt(setElementInput.value);
    dynamicArray.set(index, element);
    createDynamicArrayVisualization();
    setIndexInput.value = '';
    setElementInput.value = '';
}

// Function to handle addElement button click event
function handleAddElementButtonClick() {
    const addElementInput = document.getElementById('addElementInput');
    const element = parseInt(addElementInput.value);
    dynamicArray.addElement(element);
    createDynamicArrayVisualization();
    addElementInput.value = '';
}

// Function to handle insertElement button click event
function handleInsertElementButtonClick() {
    const insertIndexInput = document.getElementById('insertIndexInput');
    const insertElementInput = document.getElementById('insertElementInput');
    const index = parseInt(insertIndexInput.value);
    const element = parseInt(insertElementInput.value);
    dynamicArray.insert(index, element);
    createDynamicArrayVisualization();
    insertIndexInput.value = '';
    insertElementInput.value = '';
}

// Function to handle removeElement button click event
function handleRemoveElementButtonClick() {
    const removeIndexInput = document.getElementById('removeIndexInput');
    const index = parseInt(removeIndexInput.value);
    dynamicArray.remove(index);
    createDynamicArrayVisualization();
    removeIndexInput.value = '';
}

// Function to handle contains button click event
function handleContainsButtonClick() {
    const containsInput = document.getElementById('containsInput');
    const element = parseInt(containsInput.value);
    const contains = dynamicArray.contains(element);
    alert(`Contains ${element}: ${contains}`);
    containsInput.value = '';
}

// Function to handle clear button click event
function handleClearButtonClick() {
    dynamicArray.clear();
    createDynamicArrayVisualization();
}

// Add event listeners to buttons
document.getElementById('resizeButton').addEventListener('click', handleResizeButtonClick);
document.getElementById('sizeButton').addEventListener('click', handleSizeButtonClick);
document.getElementById('capacityButton').addEventListener('click', handleCapacityButtonClick);
document.getElementById('isEmptyButton').addEventListener('click', handleIsEmptyButtonClick);
document.getElementById('getElementButton').addEventListener('click', handleGetElementButtonClick);
document.getElementById('setElementButton').addEventListener('click', handleSetElementButtonClick);
document.getElementById('addElementButton').addEventListener('click', handleAddElementButtonClick);
document.getElementById('insertElementButton').addEventListener('click', handleInsertElementButtonClick);
document.getElementById('removeElementButton').addEventListener('click', handleRemoveElementButtonClick);
document.getElementById('containsButton').addEventListener('click', handleContainsButtonClick);
document.getElementById('clearButton').addEventListener('click', handleClearButtonClick);

// Initialize the dynamic array visualization
createDynamicArrayVisualization();
