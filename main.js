import signIn from './sign_in.js'

signIn()
  .then(() => {
    console.log('签到成功')
  })
  .catch(error => {
    console.error('签到失败', error.message)
    process.exit(1)
  })
