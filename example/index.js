import statuses from '../src'

(async () => {
  const res = await statuses({
    text: 'example',
  })
  console.log(res)
})()