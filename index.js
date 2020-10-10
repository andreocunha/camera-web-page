const cam = document.getElementById('cam')

const startVideo = () => {
navigator.getUserMedia(
    { video: {} },
    stream => cam.srcObject = stream,
    err => console.error(err)
    )
}

startVideo()