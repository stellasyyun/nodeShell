const pwdFunc =() => {
    process.stdin.on('data', data => {
    //const cmd = data.toString().trim()
    if (cmd === 'pwd') {
      process.stdout.write(__dirname)

    }
})
}

module.exports = pwdFunc;