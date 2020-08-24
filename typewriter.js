const sentence = "hello there from lighthouse labs";
let tmp = 1000;

for (const char of sentence) {
  tmp += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, tmp) // <= 1s delay to make it noticeable. Can dial it down later.
  
}

setTimeout(() => {
  process.stdout.write("\n");
}, tmp + 50)
