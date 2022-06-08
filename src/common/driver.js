class Driver {
    constructor(step) {
        if (!Driver.instance) this.Init(step)
        return Driver.instance
    }

    Init(step) {
        this.task = null
        this.head = null
        this.step = step? step : 500
        this.loop = 1

        this.timer = setInterval(()=>{
            this.capture = captureScreen()
            if(this.task) this.task.Excute(this)
        }, this.step)

        Driver.instance = this
    }

    Excute(task) {
        let pos = this.FindImgPos(task.pictrue)
        // console.log(`pos is ${pos}`)
        if (task.skip&&!pos) {
            pos = 'skip'
        }
        // console.log(`task is ${task.name}`)
        // console.log(`driver done is ${task.done}`)
        if (pos&&!task.done) task.RunEvent(pos)

        return pos
    }

    FindImgPos(pictrue,skip) {
        if(!pictrue){
            return 'emptyPos';
        }
        let pos = findImage(this.capture, pictrue.img, {
            region: pictrue.region,
        })
        if (pos) {
            pos.x += pictrue.img.width / 2
            pos.y += pictrue.img.height / 2
        }

        //if need skip
        if(!pos&&skip){
            pos = 'skip'
        }

        return pos
    }

    SetTask(task) {
        this.head = task
        this.task = task
        return this
    }

    Loop(count) {
        this.loop = count
    }

    TaskOver() {
        this.loop --
        if(this.loop > 1) this.task = this.head
        else this.task = null
    }

    GetStep() {
        return this.step
    }
}

export default Driver