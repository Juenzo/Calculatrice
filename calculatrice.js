class Calculator {
  constructor() {
    // Initialise la propriété "display" à l'élément HTML avec l'id "display"
    this.display = document.getElementById('display');
    // Initialise la propriété "expression" à une chaîne de caractères vide
    this.expression = '';
    // Initialise la propriété "history" à une liste vide pour stocker l'historique des expressions
    this.history = [];
  }
  
  addValue(digit) {
    // Ajoute le chiffre ou le nombre à l'expression courante
    this.expression += digit;
    // Ajoute l'expression courante à l'historique
    this.history.push(this.expression);
    // Affiche l'expression courante sur l'écran de la calculatrice
    this.display.value = this.expression;
  }

  addPoint() {
    // Vérifie si l'expression ne contient pas déjà un point décimal
    if (!this.expression.includes('.')) {
      // Ajoute un point décimal à l'expression courante
      this.expression += '.';
      // Ajoute l'expression courante à l'historique
      this.history.push(this.expression);
      // Affiche l'expression courante sur l'écran de la calculatrice
      this.display.value = this.expression;
    }
  }

  addOperator(operator) {
    // Vérifie si l'expression se termine par un opérateur (+, -, *, /)
    if (this.expression.endsWith('+') || this.expression.endsWith('-') || this.expression.endsWith('*') || this.expression.endsWith('/')) {
      // Remplace le dernier opérateur de l'expression par l'opérateur spécifié
      this.expression = this.expression.slice(0, -1) + operator;
    } else {
      // Ajoute l'opérateur spécifié à l'expression courante
      this.expression += operator;
    }
    // Ajoute l'expression courante à l'historique
    this.history.push(this.expression);
    // Affiche l'expression courante sur l'écran de la calculatrice
    this.display.value = this.expression;
  }

  clear() {
    // Réinitialise l'expression à une chaîne de caractères vide
    this.expression = '';
    // Réinitialise l'historique à une liste vide
    this.history = [];
    // Affiche l'expression courante (vide) sur l'écran de la calculatrice
    this.display.value = this.expression;
  }

  deleteLast() {
    // Supprime le dernier caractère de l'expression courante
    this.expression = this.expression.slice(0, -1);
    // Ajoute l'expression courante à l'historique
    this.history.push(this.expression);
    // Affiche l'expression courante sur l'écran de la calculatrice
    this.display.value = this.expression;
  }

  calculate() {
    try {
      // Évalue l'expression courante en utilisant la fonction eval() de JavaScript
      const result = eval(this.expression);
      // Convertit le résultat en une chaîne de caractères et met à jour l'expression courante
      this.expression = result.toString();
      // Ajoute l'expression courante à l'historique
      this.history.push(this.expression);
      // Affiche le résultat sur l'écran de la calculatrice
      this.display.value = this.expression;
    } catch (error) {
      alert('Invalid Expression');
      this.clearDisplay();
    }
  }
  
  undo() {
    if (this.history.length > 0) {
      this.history.pop(); // supprime le dernier élément de l'historique
      if (this.history.length > 0) {
        this.expression = this.history[this.history.length - 1]; // utilise le dernier élément restant de l'historique pour mettre à jour l'expression
      } else {
        this.expression = ''; // efface l'expression si l'historique est vide
      }
      this.display.value = this.expression;
    }
  }
}

const baseCalculator = new Calculator();