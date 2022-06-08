import Task from "./task"

class Manager {
    constructor() {
        if (!Manager.instance) Manager.instance = this
        return Manager.instance
    }

    Generate(key, list) {
        this[key] = []
        list.forEach(el => {
            const task = this.FindTask(key, el.name) || this.CreateTask(key, el)

            if(typeof el.next == 'string') el.next = [el.next]
            const isArray = Array.isArray(el.next)
            isArray && el.next.map(val => {
                let child = null
                const params = list.find(p => p.name == val)
                if(params) child = this.FindTask(key, val) || this.CreateTask(key, params)
                task.AddTask(child)
            })
        })
    
        return this[key][0]
    }

    CreateTask(key, val) {
        const task = new Task(val.name, val.path)

        if(typeof val.method == 'string') val.method = [val.method]
        const isArray = Array.isArray(val.method)
        isArray && val.method.map(el => this.SetMethod(task, el))

        if(val.wait) task.SetWait(val.wait)
        if(val.x) task.SetX(val.x)
        if(val.repeat === false) task.SetRepeat(val.repeat)
        if(val.skip === true) task.SetSkip(val.skip)
        this[key].push(task)
        return task
    }

    SetMethod(task, method) {
        const isClick = typeof method == 'string'
        if (isClick) task.AddEvent(this.CreateMethod(method))

        const isFunc = typeof method == 'function'
        if (isFunc) task.AddEvent(method)
    }

    CreateMethod(method) {
        switch (method) {
            case 'click': return pos => pos.x&&click(pos.x, pos.y)
            default: return () => {}
        }
    }

    FindTask(key, name) {
        let task = null
        if(this[key]) task = this[key].find(el => el.name == name)
        return task
    }
}

export default Manager