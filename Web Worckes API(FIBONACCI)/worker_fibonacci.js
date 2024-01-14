
const fibonacci = (n) => {
    n = +n;
    if(n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n  - 2)
}

this.addEventListener('message', (message) => {
    console.log(`Message from worker:  ${message}!`)
    console.dir({ message });
    const { data } = message;
    console.log(data)
})