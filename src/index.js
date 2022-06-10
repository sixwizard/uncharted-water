import Path from './common/path'
import Driver from './common/driver'
import Manager from './common/manager'

$images.requestScreenCapture()

const driver = new Driver(500)
const manager = new Manager()
const path = new Path('./images/2340X1080')
//const path = new Path('/storage/emulated/0/脚本/uncharted-water/images/2340X1080')

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

function clickAnywhere(x,y){
    click(100,200)
}
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
    { name: '048', path: GetPath('no'), method: 'click',wait: 2000, next: ['049']},
    { name: '049', path: GetPath('no'), method: 'click',wait: 2000, next: ['0491']},
    { name: '0491', path: GetPath('home'), method: 'click', wait: 2000,next: ['0301']},
]


//2600 Sail to venice
const sail2Venice = [
    { name: '2600', path: GetPath('home'), method: 'click', next: ['2601'], wait: 2000},
    { name: '2601', path: GetPath('world'), method: 'click', next: ['2602'], wait: 2000},
    { name: '2602', path: GetPath('venice'), method: 'click', next: ['2603'], wait: 4000},
    { name: '2603', path: GetPath('move'), method: 'click', next: ['2604'], wait: 2000},
    { name: '2604', path: GetPath('depart'), method: 'click', next: ['2605'], wait: 10000},
    { name: '2605', path: null, method: null, next: ['2606'],wait: 300000},
    { name: '2606', path: null, method: [clickAnywhere], next: ['1700'],wait: 250000},
]


//1700 buy items in venice
const buyItemsVenice = [
    { name: '1700', path: GetPath('home'), method: 'click', next: ['1701'], wait: 5000},
    { name: '1701', path: GetPath('world'), method: 'click', next: ['1702'], wait: 2000, x: -100},
    { name: '1702', path: GetPath('market'), method: 'click', next: ['2701'], wait: 2000},
    { name: '2701', path: GetPath('sell-tab'), method: 'click', next: ['2703'], wait: 10000},
    { name: '2703', path: GetPath('cannon'), method: 'click', next: ['2704'], wait: 500},
    { name: '2704', path: GetPath('painting'), method: 'click', next: ['2705'], wait: 500},
    { name: '2705', path: GetPath('ceramics'), method: 'click', next: ['2706'], wait: 500},
    { name: '2706', path: GetPath('pickle'), method: 'click', next: ['2707'], wait: 500},
    { name: '2707', path: GetPath('glass'), method: 'click', next: ['2708'], wait: 500},
    { name: '2708', path: GetPath('etchings'), method: 'click', next: ['27081'], wait: 500},
    { name: '27081', path: GetPath('lavender'), method: 'click', next: ['2709'], wait: 500},
    { name: '2709', path: GetPath('sell'), method: 'click', next: ['2710'], wait: 2000},
    { name: '2710', path: GetPath('confirm'), method: 'click', next: ['2711'], wait: 2000},
    { name: '2711', path: GetPath('yes'), method: 'click',wait: 2000, next: ['2712']},
    { name: '2712', path: GetPath('no'), method: 'click',wait: 4000, next: ['2713']},
    { name: '2713', path: GetPath('no'), method: 'click',wait: 4000, next: ['2714']},
    { name: '2714', path: null, method: [clickAnywhere], next: ['1703'], wait: 1000},
    { name: '1703', path: GetPath('purchase'), method: 'click', next: ['1704'], wait: 5000},
    { name: '1704', path: GetPath('reis'), method: 'click', next: ['1705'], wait: 2000},
    { name: '1705', path: GetPath('glasswork'), method: 'click', next: ['1706'], wait: 2000},
    { name: '1706', path: GetPath('satin'), method: 'click', next: ['1707'], wait: 2000},
    { name: '1707', path: GetPath('parsley'), method: 'click', next: ['1708'], wait: 2000},
    { name: '1708', path: GetPath('purchase_confirm'), method: 'click', next: ['1709'], wait: 2000},
    { name: '1709', path: GetPath('confirm'), method: 'click', next: ['1710'], wait: 2000},
    { name: '1710', path: GetPath('yes'), method: 'click',wait: 2000, next: ['1711']},
    { name: '1711', path: GetPath('no'), method: 'click',wait: 4000, next: ['1712']},
    { name: '1712', path: GetPath('no'), method: 'click',wait: 4000, next: ['1713']},
    { name: '1713', path: GetPath('home'), method: 'click', wait: 2000,next: ['1714']},
    { name: '1714', path: GetPath('world'), method: 'click', next: ['1715'], wait: 2000, x: -100},
    { name: '1715', path: GetPath('harbor'), method: 'click', next: ['1716'], wait: 2000},
    { name: '1716', path: GetPath('supplies'), method: 'click', next: ['1717'], wait: 10000},
    { name: '1717', path: GetPath('auto-supply'), method: 'click', next: ['1718'], wait: 2000},
    { name: '1718', path: GetPath('home'), method: 'click', next: ['1600'], wait: 2000},
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

//020
const dismantleShip = [
    { name: '020', path: GetPath('dismantle_tab'), method: 'click', next: ['021'], wait: 2000},
    { name: '021', path: GetPath('dis_barque'), method: 'click', next: ['022'], wait: 2000},
    { name: '022', path: GetPath('dismantle'), method: 'click', next: ['023'], wait: 4000},
    { name: '023', path: GetPath('yes'), method: 'click', wait: 2000, next: ['010']},
]

//010
const buildShip = [
    { name: '010', path: GetPath('build_tab'), method: 'click', next: ['011'], wait: 2000},
    { name: '011', path: GetPath('barque'), method: 'click', next: ['012'], wait: 2000},
    { name: '012', path: GetPath('build'), method: 'click', next: ['013'], wait: 4000},
    { name: '013', path: GetPath('yes'), method: 'click',wait: 2000, next: ['014']},
    { name: '014', path: GetPath('home'), method: 'click',wait: 2000, next: ['015']},
    { name: '015', path: null, method: ()=>null, next: ['016'], wait: 2000},
    { name: '016', path: null, method: ()=>null, next: ['017'], wait: 2000},
    { name: '017', path: GetPath('cross'), method: 'click' ,next: ['0600'], wait: 2000},
]


//0600 Sail to Pisa
const sail2Pisa = [
    { name: '0600', path: GetPath('home'), method: 'click', next: ['0601'], wait: 2000},
    { name: '0601', path: GetPath('world'), method: 'click', next: ['0602'], wait: 2000},
    { name: '0602', path: GetPath('pisa'), method: 'click', next: ['0603'], wait: 4000},
    { name: '0603', path: GetPath('move'), method: 'click', next: ['0604'], wait: 2000},
    { name: '0604', path: GetPath('depart'), method: 'click', next: ['07001'], wait: 10000},
]


//0700 buy items in pisa
const buyItemsPisa = [
    { name: '07001', path: null, method: [clickAnywhere], next: ['0700'], wait: 80000},
    { name: '0700', path: GetPath('home'), method: 'click', next: ['0701'], wait: 5000},
    { name: '0701', path: GetPath('world'), method: 'click', next: ['0702'], wait: 2000, x: -100},
    { name: '0702', path: GetPath('market'), method: 'click', next: ['0703'], wait: 2000},
    { name: '0703', path: GetPath('purchase'), method: 'click', next: ['0704'], wait: 5000},
    { name: '0704', path: GetPath('cannon'), method: 'click', next: ['0705'], wait: 2000},
    { name: '0705', path: GetPath('ceramics'), method: 'click', next: ['0706'], wait: 2000},
    { name: '0706', path: GetPath('pickle'), method: 'click', next: ['0708'], wait: 2000},
    { name: '0708', path: GetPath('purchase_confirm'), method: 'click', next: ['0709'], wait: 2000},
    { name: '0709', path: GetPath('confirm'), method: 'click', next: ['0710'], wait: 2000},
    { name: '0710', path: GetPath('yes'), method: 'click',wait: 2000, next: ['0711']},
    { name: '0711', path: GetPath('no'), method: 'click',wait: 4000, next: ['0712']},
    { name: '0712', path: GetPath('no'), method: 'click',wait: 4000, next: ['0713']},
    { name: '0713', path: GetPath('home'), method: 'click', wait: 2000,next: ['1800']},
]

//1800 Sail to syracuse
const sail2Syracuse = [
    { name: '1800', path: GetPath('home'), method: 'click', next: ['1801'], wait: 2000},
    { name: '1801', path: GetPath('world'), method: 'click', next: ['1802'], wait: 2000},
    { name: '1802', path: GetPath('syracuse'), method: 'click', next: ['1803'], wait: 4000},
    { name: '1803', path: GetPath('move'), method: 'click', next: ['1804'], wait: 2000},
    { name: '1804', path: GetPath('depart'), method: 'click',next: ['1805'], wait: 10000},
    { name: '1805', path: GetPath('restart-auto-move'), method: 'click', next: ['1806'], wait: 10000},
    { name: '1806', path: null, method: [clickAnywhere], next: ['1807'], wait: 130000},
    { name: '1807', path: GetPath('home'), method: 'click', next: ['2000'], wait: 5000},
]

//2000 Sail to candia
const sail2Candia = [
    { name: '2000', path: GetPath('home'), method: 'click', next: ['2001'], wait: 2000},
    { name: '2001', path: GetPath('world'), method: 'click', next: ['2002'], wait: 2000},
    { name: '2002', path: GetPath('candia'), method: 'click', next: ['2003'], wait: 4000},
    { name: '2003', path: GetPath('move'), method: 'click', next: ['2006'], wait: 2000},
    { name: '2006', path: GetPath('depart'), method: 'click',next: ['2007'], wait: 10000},
    { name: '2007', path: GetPath('restart-auto-move'), method: 'click', next: ['2008'], wait: 10000},
    { name: '2008', path: null, method: [clickAnywhere], next: ['2009'], wait: 110000},
    { name: '2009', path: GetPath('home'), method: 'click', next: ['1900'], wait: 5000},
]



//1900 Sail to beirut
const sail2Beirut = [
    { name: '1900', path: GetPath('home'), method: 'click', next: ['1901'], wait: 2000},
    { name: '1901', path: GetPath('world'), method: 'click', next: ['1902'], wait: 2000},
    { name: '1902', path: GetPath('beirut'), method: 'click', next: ['1903'], wait: 4000},
    { name: '1903', path: GetPath('move'), method: 'click', next: ['1904'], wait: 2000},
    { name: '1904', path: GetPath('depart'), method: 'click',next: ['1905'], wait: 10000},
    { name: '1905', path: GetPath('restart-auto-move'), method: 'click', next: ['1906'], wait: 10000},
    { name: '1906', path: null, method: [clickAnywhere], next: ['2201'], wait: 120000},
]



//2200 buy items in beirut
const buyItemsBeirut = [
    { name: '2201', path: GetPath('home'), method: 'click', next: ['2202'], wait: 5000},
    { name: '2202', path: GetPath('world'), method: 'click', next: ['2203'], wait: 2000, x: -100},
    { name: '2203', path: GetPath('market'), method: 'click', next: ['2204'], wait: 2000},
    { name: '2204', path: GetPath('sell-tab'), method: 'click', next: ['2205'], wait: 10000},
    { name: '2205', path: GetPath('cannon'), method: 'click', next: ['2206'], wait: 500},
    { name: '2206', path: GetPath('painting'), method: 'click', next: ['2207'], wait: 500},
    { name: '2207', path: GetPath('ceramics'), method: 'click', next: ['2208'], wait: 500},
    { name: '2208', path: GetPath('pickle'), method: 'click', next: ['2209'], wait: 500},
    { name: '2209', path: GetPath('glass'), method: 'click', next: ['2210'], wait: 500},
    { name: '2210', path: GetPath('etchings'), method: 'click', next: ['2211'], wait: 500},
    { name: '2211', path: GetPath('lavender'), method: 'click', next: ['2212'], wait: 500},
    { name: '2212', path: GetPath('glasswork'), method: 'click', next: ['2213'], wait: 500},
    { name: '2213', path: GetPath('sell'), method: 'click', next: ['2214'], wait: 2000},
    { name: '2214', path: GetPath('confirm'), method: 'click', next: ['2215'], wait: 2000},
    { name: '2215', path: GetPath('yes'), method: 'click',wait: 2000, next: ['2216']},
    { name: '2216', path: GetPath('no'), method: 'click',wait: 4000, next: ['2217']},
    { name: '2217', path: GetPath('no'), method: 'click',wait: 4000, next: ['2218']},
    { name: '2218', path: null, method: [clickAnywhere], next: ['2219'], wait: 1000},
    { name: '2219', path: GetPath('purchase'), method: 'click', next: ['2220'], wait: 5000},
    { name: '2220', path: GetPath('civet'), method: 'click', next: ['2221'], wait: 2000},
    { name: '2221', path: GetPath('steel'), method: 'click', next: ['2222'], wait: 2000},
    { name: '2222', path: GetPath('paper'), method: 'click', next: ['2223'], wait: 2000},
    { name: '2223', path: GetPath('purchase_confirm'), method: 'click', next: ['2224'], wait: 2000},
    { name: '2224', path: GetPath('confirm'), method: 'click', next: ['2225'], wait: 2000},
    { name: '2225', path: GetPath('yes'), method: 'click',wait: 2000, next: ['2226']},
    { name: '2226', path: GetPath('no'), method: 'click',wait: 4000, next: ['2227']},
    { name: '2227', path: GetPath('no'), method: 'click',wait: 4000, next: ['2228']},
    { name: '2228', path: GetPath('home'), method: 'click', wait: 2000,next: ['2100']},
]

//2100 Sail to jaffa
const sail2Jaffa = [
    { name: '2100', path: GetPath('home'), method: 'click', next: ['2101'], wait: 2000},
    { name: '2101', path: GetPath('world'), method: 'click', next: ['2102'], wait: 2000},
    { name: '2102', path: GetPath('jaffa'), method: 'click', next: ['2103'], wait: 4000},
    { name: '2103', path: GetPath('move'), method: 'click', next: ['2104'], wait: 2000},
    { name: '2104', path: GetPath('depart'), method: 'click',next: ['2105'], wait: 10000},
    { name: '2105', path: GetPath('restart-auto-move'), method: 'click', next: ['2106'], wait: 10000},
    { name: '2106', path: null, method: [clickAnywhere], next: ['2300'], wait: 50000},
]

//2300 buy items in jaffa
const buyItemsJaffa = [
    { name: '2300', path: GetPath('home'), method: 'click', next: ['2301'], wait: 5000},
    { name: '2301', path: GetPath('world'), method: 'click', next: ['2302'], wait: 2000, x: -100},
    { name: '2302', path: GetPath('market'), method: 'click', next: ['2303'], wait: 2000},
    { name: '2303', path: GetPath('purchase'), method: 'click', next: ['2304'], wait: 10000},
    { name: '2304', path: GetPath('civet'), method: 'click', next: ['2305'], wait: 2000},
    { name: '2305', path: GetPath('fig'), method: 'click', next: ['2306'], wait: 2000},
    { name: '2306', path: GetPath('ginger'), method: 'click', next: ['2308'], wait: 2000},
    { name: '2308', path: GetPath('purchase_confirm'), method: 'click', next: ['2309'], wait: 2000},
    { name: '2309', path: GetPath('confirm'), method: 'click', next: ['2310'], wait: 2000},
    { name: '2310', path: GetPath('yes'), method: 'click',wait: 2000, next: ['2311']},
    { name: '2311', path: GetPath('no'), method: 'click',wait: 4000, next: ['2312']},
    { name: '2312', path: GetPath('no'), method: 'click',wait: 4000, next: ['2313']},
    { name: '2313', path: GetPath('home'), method: 'click', wait: 2000,next: ['2314']},
    { name: '2314', path: GetPath('world'), method: 'click', next: ['2315'], wait: 2000, x: -100},
    { name: '2315', path: GetPath('harbor'), method: 'click', next: ['2316'], wait: 2000},
    { name: '2316', path: GetPath('supplies'), method: 'click', next: ['2317'], wait: 10000},
    { name: '2317', path: GetPath('auto-supply'), method: 'click', next: ['2318'], wait: 2000},
    { name: '2318', path: GetPath('home'), method: 'click', next: ['2400'], wait: 2000},
]

//2400 Sail to candia return
const sail2Candia2 = [
    { name: '2400', path: GetPath('home'), method: 'click', next: ['2401'], wait: 2000},
    { name: '2401', path: GetPath('world'), method: 'click', next: ['2402'], wait: 2000},
    { name: '2402', path: GetPath('candia'), method: 'click', next: ['2403'], wait: 4000},
    { name: '2403', path: GetPath('move'), method: 'click', next: ['2406'], wait: 2000},
    { name: '2406', path: GetPath('depart'), method: 'click',next: ['2407'], wait: 10000},
    { name: '2407', path: GetPath('restart-auto-move'), method: 'click', next: ['2408'], wait: 10000},
    { name: '2408', path: null, method: [clickAnywhere], next: ['2409'], wait: 120000},
    { name: '2409', path: GetPath('home'), method: 'click', next: ['11800'], wait: 5000},
]


//11800 Sail to syracuse return
const sail2Syracuse2 = [
    { name: '11800', path: GetPath('home'), method: 'click', next: ['11801'], wait: 2000},
    { name: '11801', path: GetPath('world'), method: 'click', next: ['11802'], wait: 2000},
    { name: '11802', path: GetPath('syracuse'), method: 'click', next: ['11803'], wait: 4000},
    { name: '11803', path: GetPath('move'), method: 'click', next: ['11804'], wait: 2000},
    { name: '11804', path: GetPath('depart'), method: 'click',next: ['11805'], wait: 10000},
    { name: '11805', path: GetPath('restart-auto-move'), method: 'click', next: ['11806'], wait: 10000},
    { name: '11806', path: null, method: [clickAnywhere], next: ['11807'], wait: 120000},
    { name: '11807', path: GetPath('home'), method: 'click', next: ['1600'], wait: 5000},
]



//1600 Sail to genoa restart-auto-move
const sail2Genoa = [
    { name: '1600', path: GetPath('home'), method: 'click', next: ['1601'], wait: 2000},
    { name: '1601', path: GetPath('world'), method: 'click', next: ['1602'], wait: 2000},
    { name: '1602', path: GetPath('sassari'), method: 'click', next: ['1603'], wait: 2000},
    { name: '1603', path: GetPath('genoa'), method: 'click', next: ['1604'], wait: 4000},
    { name: '1604', path: GetPath('move'), method: 'click', next: ['1605'], wait: 2000},
    { name: '1605', path: GetPath('depart'), method: 'click',next: ['1606'], wait: 10000},
    { name: '1606', path: GetPath('restart-auto-move'), method: 'click', next: ['1607'], wait: 10000},
    { name: '1607', path: null, method: [clickAnywhere], next: ['0500'], wait: 120000},
]


//0500 buy items in Genoa
const buyItemsGenoa = [
    { name: '0500', path: GetPath('home'), method: 'click', next: ['0501'], wait: 5000},
    { name: '0501', path: GetPath('world'), method: 'click', next: ['0502'], wait: 2000, x: -100},
    { name: '0502', path: GetPath('market'), method: 'click', next: ['1501'], wait: 2000},
    { name: '1501', path: GetPath('sell-tab'), method: 'click', next: ['1502'], wait: 10000},
    { name: '1502', path: GetPath('civet'), method: 'click', next: ['1504'], wait: 2000},
    { name: '1504', path: GetPath('steel'), method: 'click', next: ['1505'], wait: 2000},
    { name: '1505', path: GetPath('paper'), method: 'click', next: ['1506'], wait: 2000},
    { name: '1506', path: GetPath('ginger'), method: 'click', next: ['1507'], wait: 2000},
    { name: '1507', path: GetPath('fig'), method: 'click', next: ['1508'], wait: 2000},
    { name: '1508', path: GetPath('sell'), method: 'click', next: ['1509'], wait: 2000},
    { name: '1509', path: GetPath('confirm'), method: 'click', next: ['1510'], wait: 2000},
    { name: '1510', path: GetPath('yes'), method: 'click',wait: 2000, next: ['1511']},
    { name: '1511', path: GetPath('no'), method: 'click',wait: 4000, next: ['1512']},
    { name: '1512', path: GetPath('no'), method: 'click',wait: 4000, next: ['1513']},
    { name: '1513', path: null, method: [clickAnywhere], next: ['0503'], wait: 4000},
    { name: '0503', path: GetPath('purchase'), method: 'click', next: ['0504'], wait: 5000},
    { name: '0504', path: GetPath('cannon'), method: 'click', next: ['0505'], wait: 2000},
    { name: '0505', path: GetPath('painting'), method: 'click', next: ['0506'], wait: 2000},
    { name: '0506', path: GetPath('lavender'), method: 'click', next: ['0507'], wait: 2000},
    { name: '0507', path: GetPath('etchings'), method: 'click', next: ['05081'], wait: 2000},
    { name: '05081', path: GetPath('glasswork'), method: 'click', next: ['0508'], wait: 2000},
    { name: '0508', path: GetPath('purchase_confirm'), method: 'click', next: ['0509'], wait: 2000},
    { name: '0509', path: GetPath('confirm'), method: 'click', next: ['0510'], wait: 2000},
    { name: '0510', path: GetPath('yes'), method: 'click',wait: 2000, next: ['0511']},
    { name: '0511', path: GetPath('no'), method: 'click',wait: 4000, next: ['0512']},
    { name: '0512', path: GetPath('no'), method: 'click',wait: 4000, next: ['0513']},
    { name: '0513', path: GetPath('home'), method: 'click', wait: 2000,next: ['0514']},
    { name: '0514', path: GetPath('world'), method: 'click', next: ['0515'], wait: 2000, x: -100},
    { name: '0515', path: GetPath('harbor'), method: 'click', next: ['0516'], wait: 2000},
    { name: '0516', path: GetPath('supplies'), method: 'click', next: ['0517'], wait: 10000},
    { name: '0517', path: GetPath('auto-supply'), method: 'click', next: ['0518'], wait: 2000},
    { name: '0518', path: GetPath('home'), method: 'click', next: ['0301'], wait: 2000},
]


const waitActionList =[
    // { name: '050', path: GetPath('build_tab'), method: 'click', next: ['051'],wait: 2000},
    { name: '051', path: GetPath('dismantle_tab'), method: 'click', next: ['052'],wait: 2000},
    { name: '052', path: null, method: null, next: ['053'],wait: 200000},
    { name: '053', path: null, method: null, next: ['054'],wait: 200000},
    { name: '054', path: null, method: null, next: ['055'],wait: 200000},
    { name: '055', path: null, method: null, next: ['056'],wait: 200000},
    { name: '056', path: GetPath('build_tab'), method: 'click', next: ['051'],wait: 2000},
]

const onlyBuild = receiveShipList.concat(dismantleShip,buildShip,buyCanonList)

const build = receiveShipList.concat(dismantleShip,buildShip)
const tradePisa = sail2Pisa.concat(buyItemsPisa)
const tradeBeirut = sail2Syracuse.concat(sail2Candia,sail2Beirut,buyItemsBeirut)
const tradeJaffa = sail2Jaffa.concat(buyItemsJaffa,sail2Candia2,sail2Syracuse2)
const tradeGenoa = sail2Genoa.concat(buyItemsGenoa)

const tasks = build.concat(tradePisa,tradeBeirut,tradeJaffa,tradeGenoa)
const task = manager.Generate('test', tasks)
driver.SetTask(task).Loop(1)