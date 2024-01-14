
this.addEventListener('message', (message) => {
    console.log(`Message from worker:  ${message}!`)
    console.dir({ message });
})