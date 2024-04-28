class FibonacciSequence {
  constructor() {
    this.seq = [0, 1];
  }

  setSequence(n) {
    for (let i = 0; i < n - 1; i++) {
      this.seq.push(this.seq[i] + this.seq[i + 1]);
    }
  }

  getSequenceValue(n) {
    return this.seq[n]
  }
}

const fbSeq = new FibonacciSequence();
fbSeq.setSequence(3);

const seqValIndex = 3;
const curSeqValue = fbSeq.getSequenceValue(seqValIndex);

console.log('\n\nЗадание 6: \n');
console.log(` For index: ${seqValIndex}, sequence value is: ${curSeqValue}`);
