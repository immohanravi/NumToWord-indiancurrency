const numword = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twleve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
  'Twenty'
]
const more = [
  '',
  'Ten',
  'Twenty',
  'Thrity',
  'Fourty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety'
]

const converttoword = (value, isand) => {

  const len = value.length
  let answer = ''
  if (len == 1) {
    answer = answer + numword[value]
  } else if (len == 2) {
    if (parseInt(value) < 21) {
      answer = answer + numword[value]
    } else {
      const s = value.split('')
      answer = answer + more[s[0]] + " "
      answer = answer.concat(s[1] % 10 != 0
        ? numword[s[1]]
        : '')
    }
  } else if (len == 3) {
    const s = value.split('')
    if (value % 100 == 0) {
      answer = numword[s[0]] + " Hundred"
    } else {
      //console.log(converttoword(s[0]))
      answer = converttoword(s[0], isand) + " Hundred "
      answer = answer.concat(isand
        ? 'and '
        : '')
      /*if(parseInt(value) < 21){
                let lasttwo = parseInt(s[1]+s[2])
                answer = answer.concat(numword[lasttwo])
            }else{
                answer = answer + more[s[1]] + " "
                answer = answer.concat(s[2]%10 != 0 ? numword[s[2]] :'')
            }*/

      answer = answer.concat(converttoword(parseInt(s[1] + s[2]).toString(), isand))
    }
  } else if (len == 4) {
    const s = value.split('')
    if (value % 1000 == 0) {
      answer = numword[s[0]] + " Thousand"
    } else {
      answer = converttoword(s[0], isand) + " Thousand "
      answer = answer.concat(converttoword(parseInt(value.substring(1, 4)).toString(), isand))
    }
  } else if (len == 5) {
    const s = value.split('')
    if (value % 10000 == 0) {
      answer = more[s[0]] + " Thousand"
    } else {

      answer = answer.concat(converttoword(parseInt(value.substring(0, 2)).toString(), isand)) + " Thousand "
      answer = answer.concat(converttoword(parseInt(value.substring(2, 5)).toString(), isand))
    }
  } else if (len == 6) {
    const s = value.split('')
    if (value % 100000 == 0) {
      answer = numword[s[0]] + " Lakh"
    } else {
      answer = converttoword(s[0], isand) + " Lakh "
      answer = answer.concat(converttoword(parseInt(value.substring(1, 6)).toString(), isand))
    }
  } else if (len == 7) {
    const s = value.split('')
    if (value % 1000000 == 0) {
      answer = more[s[0]] + " Lakh"
    } else {
      answer = answer.concat(converttoword(parseInt(value.substring(0, 2)).toString(), isand)) + " lakh "
      answer = answer.concat(converttoword(parseInt(value.substring(2, 7)).toString(), isand))
    }
  } else if (len == 8) {
    const s = value.split('')
    if (value % 10000000 == 0) {
      answer = numword[s[0]] + " Crore"
    } else {
      answer = converttoword(s[0], isand) + " Crore "
      answer = answer.concat(converttoword(parseInt(value.substring(1, 8)).toString(), isand))
    }
  } else if (len == 9) {
    const s = value.split('')
    if (value % 100000000 == 0) {
      answer = more[s[0]] + " Core"
    } else {
      answer = answer.concat(converttoword(parseInt(value.substring(0, 2)).toString(), isand)) + " Core "
      answer = answer.concat(converttoword(parseInt(value.substring(2, 9)).toString(), isand))
    }
  } else if (len == 10) {
    const s = value.split('')
    if (value % 1000000000 == 0) {
      answer = converttoword(parseInt(value.substring(0, 3)).toString(), isand) + " Crore"
    } else {
      answer = converttoword(parseInt(value.substring(0, 3)).toString(), isand) + " Crore "
      answer = answer.concat(converttoword(parseInt(value.substring(3, 10)).toString(), isand))
    }
  }

  return answer
}

const NumToWord = (input) => {
    let correction = 0
  if (input.toString().includes('.')) {
    correction = parseFloat(input.toString()).toFixed(2)
  }else {
      correction = input
  }

  let value = correction
    .toString()
    .split('.')
  if (value.length === 2) {
    let an = converttoword(value[0], false) + " Rupee"
    an = an.concat(' and ' + converttoword(value[1], false) + " Paisa Only")
    console.log(an.replace(/\s\s/g, ' '))
  } else {
    let an = converttoword(value[0], true) + " Rupee only"
    console.log(an.replace(/\s\s/g, ' '))
  }

}
module.exports = {
  NumToWord
}
