    const ball = document.getElementById("ball")

    let deltaTime = 10
    const bottom = 280
    const fps = 30 
    const timeForOneFrame = 1000 / fps
    let currentPosition = 0
    let prevTime = 0


    function bounce(currentTime) {  
        console.log(currentTime);

        if (currentTime - prevTime < timeForOneFrame) {
            requestAnimationFrame(bounce)
            return
        }
        

        if(currentPosition >= bottom) {
            deltaTime = -10
        }else if (currentPosition <= 0) {
            deltaTime = 10  
        }

        prevTime = currentTime
        currentPosition += deltaTime


        ball.style.transform = `translateY(${currentPosition}px)`
        requestAnimationFrame(bounce)   
    }


    requestAnimationFrame(bounce)