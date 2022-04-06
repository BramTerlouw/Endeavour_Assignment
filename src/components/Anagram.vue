<template>
  <main class="anagram-content">!! See the console for input and output !!</main>
</template>

<script>
export default {
  name: "Anagram",
  data() {
    return {
      input: [
        "rope",
        "pore",
        "repo",
        "red rum",
        "murder",
        "listen",
        "silent",
        "endeavour",
        "Kaas",
        "saAk",
      ],
    };
  },
  methods: {
    sortString(input) {
      // make lowercase, split the word and remove spaces to sort the letters for comparison
      return input.toLowerCase().split("").sort().join("").replace(/\s+/g, "");
    },

    compare(x, y) {
      var a = this.sortString(x);
      var b = this.sortString(y);

      // when equal, return true
      if (a === b) return true;
      else return false;
    },

    loopArr(input) {
      // log the input
      console.log(input);

      var anagramArr = [];
      var loopedWords = [];

      // use 2 for loops to compare every word with each other
      for (let i = 0; i < input.length; i++) {
        var arr = [];

        // only loop the word if it is not looped yet to ensure, no duplicates are added to arrays
        if (!loopedWords.includes(input[i])) {
          arr.push(input[i]);
          for (let j = 0; j < input.length; j++) {
            // skip when i equals j to make sure no duplicates are added to arrays
            if (i == j) continue;

            // if word you are comparing matches the first word, add it to arr and looped words
            if (this.compare(input[i], input[j])) {
              arr.push(input[j]);
              loopedWords.push(input[j]);
            }
          }
          // add arr to anagram array
          anagramArr.push(arr);
        }
      }

      // log the output
      console.log(anagramArr);
    },
  },
  mounted() {
    this.loopArr(this.input);
  },
};
</script>

<style>
.anagram-content {
    width: 30%;
    margin: 20px auto;
    text-align: center;
}
</style>