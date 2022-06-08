class Task{
    constructor(name, path) {
        this.tasks = []

        this.name = name
        this.pictrue = null
        this.actions = []

        this.count = 0
        this.timer = 0
        this.repeat = true
        this.done = false
        this.skip = true
        if (path) this.ReadImg(path)
    }

    AddTask(task) {
        if(task) this.tasks.push(task)
    }

    AddEvent(action) {
        this.actions.push(action)
    }

    SetWait(wait) {
        this.timer = wait
    }

    SetRepeat(repeat) {
        this.repeat = repeat
    }

    SetX(x) {
        this.x = x
    }

    SetSkip(skip) {
        this.skip = skip
    }


    RunEvent(pos) {
        log(this.name, ' RunEvent')
        let newPos = pos;
        if(this.x) newPos = {x:pos.x+this.x,y:pos.y}

        //console.log(`pos is ${newPos}`)
        this.actions.map(el => el(newPos))
 
        if(!this.repeat) this.done = true

    }

    ReadImg(path) {
        if(!path){
            return
        }
        const img = images.read(path)
        const params = this.DealPath(path)
        if(params) params.concat(img.getWidth(), img.getHeight())
        this.pictrue = { img: img, region: params }
        if (!img) log(`no img in path: ${path}`)
    }

    DealPath(path) {
        const reg = /(_[0-9]+){2}\./
        if(!reg.test(path)) return null
        const params = path.split('_')
        const l = params.length
        const y = params[l-1].split('.')[0]
        const x = params[l-2]
        return [parseInt(x), parseInt(y)]
    }

    Excute(driver) {
        log(this.name, ' Excute')
        const pass = driver.Excute(this)
        //log(this.name, `length: ${this.tasks.length}`)
        if(pass && !this.tasks.length) {
            if(pass==='skip') log(this.name, 'skip')
            driver.TaskOver()
            log(this.name, ' TaskOver')
        }else{
            const task = this.tasks.find(el => {
                if(el.count < el.timer) {
                    el.count += driver.GetStep()
                    return false
                }
                return driver.FindImgPos(el.pictrue,this.skip)
            })
            if(task) {
                log(task.name, ' SetTask')
                // console.log(`set task done is ${task.done}`)
                task.done = false;
                // console.log(`set task done after is ${task.done}`)
                this.tasks.map(el => el.count = 0)
                driver.SetTask(task)
            }
        }
    }
}

export default Task