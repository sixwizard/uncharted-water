import Path from './common/path'
import Driver from './common/driver'
import Manager from './common/manager'

$images.requestScreenCapture()

const driver = new Driver(500)
const manager = new Manager()
//const path = new Path('./images/2340X1080')
const path = new Path('/storage/emulated/0/脚本/uncharted-water/images/2340X1080')

// let target = images.read('/storage/emulated/0/脚本/手游框架-测试版/images/2340X1080/confirm.png');
const GetPath = path.GetPath.bind(path)

// const list = [
//     { name: '010', path: GetPath('铃铛_亮_32_159'), method: 'click', c },
//     { name: '020', path: GetPath('参加_568_1826'), method: 'click', next: ['030', '021'] },

//     { name: '021', path: GetPath('无法进入_324_1431'), method: 'click', next: ['010', '060'] },

//     { name: '030', path: GetPath('准备完成_328_1575'), method: 'click', next: ['040', '021'] },

//     { name: '040', path: GetPath('下一步_372_2000'), method: 'click', next: ['050', '041'] },
//     { name: '041', path: GetPath('等级提升_327_1089'), method: 'click', next: ['040'] },

//     { name: '050', path: GetPath('离开房间_168_1999'), method: 'click', next: ['010', '060'] },

//     { name: '060', path: GetPath('公告_912_1395'), method: 'click', next: ['070'], wait: 200000 },
//     { name: '070', path: GetPath('关闭公告_337_1966'), method: 'click', next: ['010', '060'] },
// ]

function clickAnywhere(x,y,time){
    sleep(time)
    console.log(1111)
    click(x,y)
}

//020
const dismantleList = [
    { name: '020', path: GetPath('dismantle_tab'), method: 'click', next: ['021'], wait: 2000},
    { name: '021', path: GetPath('dis_barque'), method: 'click', next: ['022'], wait: 2000},
    { name: '022', path: GetPath('dismantle'), method: 'click', next: ['023'], wait: 4000},
    { name: '023', path: GetPath('yes'), method: 'click', wait: 2000, next: ['010']},
]

//010
const buildList = [
    { name: '010', path: GetPath('build_tab'), method: 'click', next: ['011'], wait: 2000},
    { name: '011', path: GetPath('barque'), method: 'click', next: ['012'], wait: 2000},
    { name: '012', path: GetPath('build'), method: 'click', next: ['013'], wait: 4000},
    { name: '013', path: GetPath('yes'), method: 'click',wait: 2000, next: ['014']},
    { name: '014', path: GetPath('home'), method: 'click',wait: 10000, next: ['015']},
    { name: '015', path: null, method: ()=>null,wait: 2000, next: ['016'], wait: 2000},
    { name: '016', path: null, method: ()=>null,wait: 2000, next: ['040'], wait: 200000},
]

//030
const receiveShipList = [
    { name: '0301', path: GetPath('world'), method: 'click', next: ['0302'], wait: 2000, x:-100},
    { name: '0302', path: GetPath('shipyard'), method: 'click', next: ['030'], wait: 2000},
    { name: '030', path: GetPath('build_tab'), method: 'click', next: ['031'], wait: 15000},
    { name: '031', path: GetPath('build_tab_inactive'), method: 'click', next: ['032'], wait: 2000},
    { name: '032', path: GetPath('receive'), method: 'click', next: ['033'], wait: 2000},
    { name: '033', path: GetPath('confirm'), method: 'click', next: ['034'], wait: 2000},
    { name: '034', path: GetPath('proceed'), method: 'click', next: ['020'], wait: 2000},
]

//040
const buyCanonList = [
    { name: '040', path: GetPath('home'), method: 'click', next: ['041'], wait: 2000},
    { name: '041', path: GetPath('world'), method: 'click', next: ['042'], wait: 2000, x: -100},
    { name: '042', path: GetPath('market'), method: 'click', next: ['043'], wait: 2000},
    { name: '043', path: GetPath('purchase'), method: 'click', next: ['044'], wait: 15000},
    { name: '044', path: GetPath('cannon'), method: 'click', next: ['045'], wait: 2000},
    { name: '045', path: GetPath('purchase_confirm'), method: 'click', next: ['046'], wait: 2000},
    { name: '046', path: GetPath('confirm'), method: 'click', next: ['047'], wait: 2000},
    { name: '047', path: GetPath('yes'), method: 'click',wait: 4000, next: ['048']},
    { name: '048', path: GetPath('yes'), method: 'click',wait: 2000, next: ['049']},
    { name: '049', path: GetPath('yes'), method: 'click',wait: 2000, next: ['0491']},
    { name: '0491', path: GetPath('home'), method: 'click', wait: 2000,next: ['0301']},
]
const waitActionList =[
    { name: '050', path: GetPath('build_tab'), method: 'click', next: ['051'], skip: true, repeat: false},
    { name: '051', path: GetPath('dismantle_tab'), method: 'click', next: ['050'],  skip: true, repeat: false},
]

const taskList = receiveShipList.concat(dismantleList,buildList,buyCanonList)
const task = manager.Generate('test', taskList) 
driver.SetTask(task).Loop(1)