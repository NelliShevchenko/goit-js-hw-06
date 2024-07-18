class StringBuilder {
  #value; // Оголошення приватної властивості

  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Метод для отримання поточного значення value
  getValue() {
    return this.#value;
  }

  // Метод для додавання рядка в кінець value
  padEnd(str) {
    this.#value += str;
  }

  // Метод для додавання рядка на початок value
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Метод для додавання рядка на початок і в кінець value
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Перевірка роботи класу
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
