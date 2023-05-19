// Dynamic Array class
class Dynamic_Array {
    constructor(size) {
       
        this.array = new Array(size);
        this.currentSize = 0;
      }
  
    addElement(element) {
      if (this.currentSize === this.array.length) {
        this.resizeArray();
      }
      this.array[this.currentSize] = element;
      this.currentSize++;
    }
  
    removeElement() {
      if (this.isEmpty()) {
        throw new Error("Array is empty.");
      }
      this.currentSize--;
      const removedElement = this.array[this.currentSize];
      this.array[this.currentSize] = undefined;
      return removedElement;
    }
  
    get(index) {
      this.checkBounds(index);
      return this.array[index];
    }
  
    set(index, element) {
      this.checkBounds(index);
      this.array[index] = element;
    }
  
    insert(index, element) {
      if (index < 0 || index > this.currentSize) {
        throw new Error("Invalid index.");
      }
      if (this.currentSize === this.array.length) {
        this.resizeArray();
      }
      for (let i = this.currentSize; i > index; i--) {
        this.array[i] = this.array[i - 1];
      }
      this.array[index] = element;
      this.currentSize++;
    }
  
    remove(index) {
      this.checkBounds(index);
      for (let i = index; i < this.currentSize - 1; i++) {
        this.array[i] = this.array[i + 1];
      }
      this.array[this.currentSize - 1] = undefined;
      this.currentSize--;
    }
  
    size() {
      return this.currentSize;
    }
  
    isEmpty() {
      return this.currentSize === 0;
    }
  
    clear() {
      this.array.fill(undefined);
      this.currentSize = 0;
    }
  
    indexOf(element) {
      for (let i = 0; i < this.currentSize; i++) {
        if (this.array[i] === element) {
          return i;
        }
      }
      return -1;
    }
  
    contains(element) {
      return this.indexOf(element) !== -1;
    }
  
    toArray() {
      return this.array.slice(0, this.currentSize);
    }
  
    resizeArray() {
      const newSize = Math.max(this.array.length * 2, 1);
      const newArray = new Array(newSize);
      for (let i = 0; i < this.currentSize; i++) {
        newArray[i] = this.array[i];
      }
      this.array = newArray;
    }
  
    checkBounds(index) {
      if (index < 0 || index >= this.currentSize) {
        throw new Error("Invalid index.");
      }
    }
  }
//  End of class



  function testDynamicArray() {
    const dynamicArray = new Dynamic_Array(5);
  
    dynamicArray.addElement(1);
    dynamicArray.addElement(2);
    dynamicArray.addElement(3);
    dynamicArray.addElement(4);
    dynamicArray.addElement(5);
    dynamicArray.addElement(6); // Will resize the array
  
    console.log(dynamicArray.toArray()); // Output: [1, 2, 3, 4, 5, 6]
    console.log(dynamicArray.size()); // Output: 6
  
    dynamicArray.removeElement();
    console.log(dynamicArray.toArray()); // Output: [1, 2, 3, 4, 5]
    console.log(dynamicArray.size()); // Output: 5
  
    console.log(dynamicArray.get(2)); // Output: 3
  
    dynamicArray.set(1, 10);
    console.log(dynamicArray.toArray()); // Output: [1, 10, 3, 4, 5]
  
    dynamicArray.insert(2, 7);
    console.log(dynamicArray.toArray()); // Output: [1, 10, 7, 3, 4, 5]
  
    dynamicArray.remove(3);
    console.log(dynamicArray.toArray()); // Output: [1, 10, 7, 4, 5]
  
    console.log(dynamicArray.size()); // Output: 5
    console.log(dynamicArray.isEmpty()); // Output: false
  
    dynamicArray.clear();
    console.log(dynamicArray.toArray()); // Output: []
    console.log(dynamicArray.size()); // Output: 0
    console.log(dynamicArray.isEmpty()); // Output: true
  
    dynamicArray.addElement(5);
    dynamicArray.addElement(10);
    dynamicArray.addElement(15);
    console.log(dynamicArray.indexOf(10)); // Output: 1
    console.log(dynamicArray.contains(20)); // Output: false
  }
  
  testDynamicArray();
  