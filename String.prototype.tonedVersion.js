Object.defineProperty(String.prototype, 'tonedVersion', {
    get() {
        let arr = Object.entries(this.replace(/v/g, 'ü').replace(/V/g, 'Ü'))
        let update = obj => obj.map(([, val], i) => [i, val])
        arr = update(arr)
        let nums = []
        {
            let _obj = [...arr]
            let is = []
            _obj.reduce((acc, val, i) => {
                if (/[^0-4]/.test(val[1])) return acc + val[1]
                if (!/[aeiouü]/i.test(acc)) return acc + val[1]
                is.push(i)
                return ''
            }, '')
            is.forEach((val, i) => nums.push(arr.splice(val - i, 1)[0]))
        }
        nums = nums.map(([i, val], ind) => [i - ind, val])
        nums.reduce((acc, [i], ind) => {
            nums[ind][0] -= acc
            return i
        }, 0)
        arr = update(arr)
        let vowels = 'aāáǎàoōóǒòeēéěèiīíǐìuūúǔùüǖǘǚǜ'
        let str = ''
        for (let [_i, numValue] of nums) {
            let num = parseInt(numValue)
            let letters = arr.splice(0, _i)
            let $vowels = letters.filter(([, char]) => /[aeiouü]/i.test(char))
            let _$vowels = $vowels.map((([, val]) => val)).join('')
            if (_$vowels.toLowerCase() === 'iu') {
                let lowerCase = _$vowels[1] === _$vowels[1].toLowerCase()
                let toCase = val => lowerCase ? val.toLowerCase() : val.toUpperCase()
                letters[$vowels[1][0] - letters[0][0]][1] = toCase(vowels[vowels.indexOf('u') + num])
                str += letters.map(([, value]) => value).join('')
                continue
            }
            let lowest = _$vowels.split('').reduce((acc, char) => {
                if (vowels.indexOf(char.toLowerCase()) < acc) return vowels.indexOf(char.toLowerCase())
                return acc
            }, vowels.length)
            $vowels.forEach(([i, char]) => {
                if (char.toLowerCase() !== vowels[lowest]) return
                let lowerCase = char === char.toLowerCase()
                let toCase = val => lowerCase ? val.toLowerCase() : val.toUpperCase()
                letters[i - letters[0][0]][1] = toCase(vowels[lowest + num])
            })
            str += letters.map(([, value]) => value).join('')
        }
        str += arr.map(([, value]) => value).join('')
        return str
    }
})