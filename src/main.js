let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `/*你好呀,我叫小林子
*接下来我画一个八卦图你看看
*首先我要准备一个div
**/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    top:0;
    border-radius:50%;
    background:#000;
}
#div1::after{
    bottom:0;
    border-radius:50%;
    background:#fff;
}
#div1::before{
    background:radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/* 接下来就让它动起来吧~*/
#div1{
    animation:rotate 8s linear infinite;
}
`
let n = 0
let string2 = ''
let x = 50
let btn = document.getElementsByTagName('button')

let timer
let move = () => {
    timer = setTimeout(() => {
        //判断是否是回车或者空格
        joinStr(n)
        //写在页面上和内部css上
        painting(n)
        if (n < string.length - 1) {
            n += 1
            move()
        }
    }, x)
}
let move2 = () => {

    for (let i = 0; i < string.length; i++) {
        joinStr(i)
    }
    //写在页面上和内部css上
    painting()
}

function painting(n = Infinity) {
    //写在页面上和内部css上
    html.innerHTML = string2
    console.log('n', n)
    style.innerHTML = string.substring(0, n)
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
}
function joinStr(n) {
    if (string[n] === '\n') {
        string2 += '<br>'
    } else if (string[n] === ' ') {
        string2 += '&nbsp;'
    } else {
        string2 += string[n]
    }
}


btn[0].onclick = () => {
    x = 0
}
btn[1].onclick = () => {
    x = 100
}
btn[2].onclick = () => {
    clearTimeout(timer)
    move2()
}
move()
