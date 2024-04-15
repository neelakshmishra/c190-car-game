AFRAME.registerComponent("drive",{
    init:function(){
        var gameStateValue = this.el.getAttribute("game")
        if(gameStateValue == "play"){
            this.driveCar()
        }
    },
    isVelocityActive:function(){
        return Math.random()<0.25
    },
    driveCar:function(){
        var multiply = 10
        var wheelRotation = 0
        window.addEventListener("keydown",function(e){
            var wheel = document.querySelector("#control-wheel")
            if(e.code == "ArrowRight" && wheelRotation>-40){
                wheelRotation -= 5
                wheel.setAttribute("rotation",{x:0, y:0, z:wheelRotation})
            }
            if(e.code == "ArrowLeft" && wheelRotation<40){
                wheelRotation += 5
                wheel.setAttribute("rotation",{x:0, y:0, z:wheelRotation})
            }
            // speed up/ accelerate in the up arrow key

            if(e.code=="ArrowUp"){
                multiply += 0.5
                if(multiply<=100 && cameraposition.z > -500){
                    // camera rig


                }
            }
            // stop/brake on space Key down
            if(e.code=="Space"){
                // brake



            }






        })
    }
})