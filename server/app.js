const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 20000)
    })
}

const runForever = async () => {
    while(true) {
        await wait()
        console.log('Still running...')
    }
}

(async () => {
    console.log('Started.')
    await runForever()
})()
