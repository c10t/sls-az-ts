import Vue from 'vue'

// enum Operators {
//   ADD, SUB, MUL, DEV
// }

interface IData {
  // Operators: typeof Operators
  left: string | null
  right: string | null
  // operator: Operators
}

export default Vue.extend({
  data(): IData {
    return {
      // Operators,
      left: null,
      right: null,
      // operator: Operators.ADD
    }
  },
  computed: {
    answer(): number {
      if (!this.left || !this.right) return 0

      const left = Number(this.left)
      const right = Number(this.right)

      return left + right

      /*
      switch (this.operator) {
        case Operators.ADD:
          return left + right
        case Operators.SUB:
          return left - right
        case Operators.MUL:
          return left * right
        case Operators.DEV:
          return left / right
        default:
          return 0
      }
      */
    }
  }  
})
