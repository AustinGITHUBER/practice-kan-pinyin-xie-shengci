'use strict'
let words = [["zun1zhong4", "尊重", "to respect"], ["mei3de2", "美德", "virtue; moral; excellence"], ["gong1gong4", "公共", "public"], ["cai2wu4", "财物", "property"], ["xin1qin2", "辛勤", "industrious; hardworking"], ["jia1bei4", "加倍", "double; to be twice as much"], ["yang3cheng2", "养成", "to form; to acquire; to cultivate"], ["tai4du", "态度", "attitude; manner"], ["si1ren2", "私人", "private; personal"], ["ai4xi1", "爱惜", "to cherish; to treasure"], ["po4huai4", "破坏", "to destroy"], ["dao4de2", "道德", "morality; ethics"], ["yi4shi2", "一时", "momentarily; for a short while"], ["cai3", "采", "to pick"], ["zhe2", "折", "to break"], ["cu1xin1", "粗心", "careless"], ["yong4pin3", "用品", "articles for use"], ["yue4qi4", "乐器", "musical instrument"], ["bao3guan3", "保管", "to take care of"], ["lei4", "类", "kind; type"], ["fan4", "犯", "to violate"], ["cuo4wu4", "错误", "mistake; error"], ["shun4jian1", "瞬间", "in a twinkling of an eye"], ["shi2shi2", "时时", "often; constantly"], ["yan3qian2", "眼前", "before one's eyes"], ["you2qi2", "尤其", "especially; particularly"], ["she4ying3shi1", "摄影师", "photographer"], ["pai1zhao4", "拍照", "to take a picture"], ["shun4xin1", "顺心", "satisfactory"], ["bie4niu", "别扭", "to be at odds"], ["li3cai3", "理睬", "to show interest in"], ["niu3", "扭", "to turn around"], ["ge2", "隔", "to stand between"], ["na3pa4", "哪怕", "even if; no matter how"], ["he2zuo4", "合作", "to cooperate"], ["sun3hai4", "损害", "to damage; to harm"], ["ji2ti3", "集体", "collective"], ["xing2xiang4", "形象", "image"], ["hong2liang4", "洪亮", "loud and clear"], ["qi1dai4", "期待", "to expect; to look forward to"], ["mu4guang1", "目光", "sight"], ["zhen1xi1", "珍惜", "to treasure; to cherish"], ["yi1jiao3", "衣角", "corner of the clothes"], ["ka1cha1", "喀嚓", "snap"], ["luo4hua1sheng1", "落花生", "peanut"], ["kong4di4", "空地", "vacant lot"], ["ji4ran2", "既然", "since"], ["hua1sheng1", "花生", "peanut"], ["zhong4", "种", "to plant"], ["zhong3", "种", "seeds"], ["jiao1", "浇", "to sprinkle water on; to water"], ["ju1ran2", "居然", "unexpectedly; to one's surprise"], ["die1die", "爹爹", "father"], ["chang2", "尝", "to taste"], ["shi2pin3", "食品", "food"], ["jia1ting2", "家庭", "family"], ["zheng1", "争", "to strive; to vie"], ["xiang1", "香", "fragrant; aromatic"], ["zha4you2", "榨油", "to extract oil"], ["ke3gui4", "可贵", "valuable"], ["guo3shi2", "果实", "fruit"], ["cheng2shu2", "成熟", "ripe"], ["pao2", "刨", "to dig"], ["zhu4zhong4", "注重", "to attach importance to"], ["wai4biao3", "外表", "outward appearance"], ["xin1", "心", "heart"], ["bian4", "便", "an adverb that shows result brought about by certain condition and/or circumstance"], ["ren2sheng1", "人生", "life"], ["zhong1deng3", "中等", "medium"], ["shen1cai2", "身材", "stature; figure"], ["qin1qie4", "亲切", "cordial; kind"], ["pu3su4", "朴素", "simple; plain"], ["jiang3jiu", "讲究", "to be particular about"], ["chuan1zhuo2", "穿着", "chuan1zhuo2"], ["er2", "而", "and"], ["shi2", "食", "food; to eat"], ["xing2", "行", "to transport"], ["hao3xiang4", "好像", "to seem; to be like"], ["jing3jing3you3tiao2", "井井有条", "in perfect order; methodical"], ["jia1wu4", "家务", "household duties"], ["jin3guan3", "尽管", "even though; in spite of"], ["chong2", "重", "repeat"], ["dai4ti4", "代替", "to replace; to substitute"], ["zai4san1", "再三", "over and over again"], ["ben3shi", "本事", "skill; ability; capability"], ["zhong1wu3", "中午", "noon; midday"], ["bu2shi4 er2shi4", "不是而是", "not... but..."], ["pen2", "盆", "pot"], ["mo4li4hua1", "茉莉花", "Jasmine, Sampaguita"], ["chu1", "初", "in the early part of"], ["lin2", "临", "just before"], ["chun2jie2", "纯洁", "pure"], ["xiang4zheng1", "象征", "to symbolize; to stand for"], ["jie2bai2", "洁白", "pure white"], ["qing1xiang1", "清香", "faint scent; delicate fragrance"], ["guan1kan4", "观看", "to watch; to view"], ["yi2zai4", "一再", "time and again; repeatedly"], ["bu4xu3", "不许", "not allow; must not"], ["peng4", "碰", "to touch"], ["can4lan4", "灿烂", "splendid; bright magnificent"], ["kuang2feng1", "狂风", "fierce wind"], ["chao2", "朝", "towards"], ["yao2bai3", "摇摆", "to sway; to swing"], ["bu2gu4", "不顾", "to ignore; regardless of"], ["ban4", "绊", "to stumble"], ["gan1", "干", "dry"], ["xin1'ai4", "心爱", "beloved; treasured"], ["shui3zhu1", "水珠", "drop of water"], ["zhao4she4", "照射", "to shine"], ["sao3mu4", "扫墓", "to sweep a grave"], ["xin1yan3r", "心眼儿", "heart; mind"], ["ben3jia1", "本家", "a member of the same clan"], ["qin1ren2", "亲人", "relatives; one's family members"], ["xin1xian", "新鲜", "new; novel"], ["fei1jia4", "飞架", "to hover in the air"], ["shang4kong1", "上空", "overhead; in the sky"], ["heng2", "横", "across; horizontal"], ["kua4", "跨", "to cut across"], ["ji4 you4", "既又", "both... and...; as well as"], ["kuan1kuo4", "宽阔", "broad; wide"], ["wen2hua4guan3", "文化馆", "cultural center"], ["yang3lao3yuan4", "养老院", "home for the aged"], ["ju1min2", "居民", "resident"], ["ceng2", "层", "storey"], ["kan4dechu1lai2", "看得出来", "can see; can make out"], ["po4jiu4", "破旧", "old and shabby; worn-out"], ["chan1", "搀", "to help by the arm"], ["qin1re4", "亲热", "affectionate; warm hearted"], ["jin4r", "劲儿", "spirit; zeal; manner"], ["bie2ti2le", "别提了", "not to mention (to show deep intensity or high degree)"]]
let div = document.createElement('div')
let input = document.createElement('input')
let info = document.createElement('div')
let wordsLeft = [...words]
let points = 0
div.textContent = '0\nLoading...'
div.style.whiteSpace = 'pre'
info.textContent = 'Try to keep your streak!'
info.style.whiteSpace = 'pre'
info.style.fontSize = '50px'
input.placeholder = 'Input 生词'
let word = ['Loading...']
let setDiv = () => {
    div.textContent = `${points}\n${word?.[0] === undefined ? 'N/A' : word?.[0]}`
    info.textContent = `${word?.[2] === undefined ? 'N/A' : word?.[2]}\nTry to keep your streak!`
}
let setWord = () => {
    if (!wordsLeft.length) wordsLeft = [...words]
    word = wordsLeft.splice(Math.floor(Math.random() * wordsLeft.length), 1)[0]
}
let focusing = false
input.addEventListener('focusout', () => focusing = false)
input.addEventListener('focusin', () => focusing = true)
let entering = false
addEventListener('keyup', ev => {
    if (ev.key !== 'Enter') return
    entering = false
})
addEventListener('keydown', ev => {
    if (entering || !focusing || ev.key !== 'Enter') return
    entering = true
    if (input.value.replace(/\s/g, '').toLowerCase() === word?.[1]?.toString?.()?.replace?.(/\s/g, '')?.toLowerCase?.()) ++points
    else points = 0
    setWord()
    setDiv()
    input.value = ''

})
document.body.append(div, info, input)
input.focus()
let start = WORDS => {
    words = WORDS
    wordsLeft = [...words]
    setWord()
    setDiv()
}
if (['http:', 'data:', 'isolated-app:', 'chrome-extension:', 'chrome:', 'https:', 'chrome-untrusted:'].indexOf(new URL(location.href).protocol) !== -1 && navigator.onLine) fetch('https://raw.githubusercontent.com/AustinGITHUBER/practice-kan-pinyin-xie-shengci/main/words.json').then(resp => {
    if (!resp.ok) return
    resp.text().then(str => {
        start(JSON.parse(str).map(elem => [elem[0].tonedVersion, ...elem.slice(1)]))
    })
}).catch(() => {})