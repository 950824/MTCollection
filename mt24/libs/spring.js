function myFunction(action, value, type) { // type 1 是通过购买  0 是通过广告
    switch (action) {
        case 'money':
            if (type === '0'){
                core.addStatus('money', 5);
            } else {
                core.addStatus('money', parseInt(value)); // 生命 - hp  防御 - def  护盾 - mdef  金币 - money
            }
            core.updateStatusBar() // 刷新状态栏
            break
        case 'hp':
            if (type === '0'){
                core.addStatus('hp', 10);
            } else {
                core.addStatus('hp', parseInt(value)); 
            }
            core.updateStatusBar() // 刷新状态栏
            break
        case 'atk':
            if (type === '0'){
                core.addStatus('atk', 1);
            } else {
                core.addStatus('atk', parseInt(value));
            }
            core.updateStatusBar() // 刷新状态栏
            break
        case 'def':
            if (type === '0'){
                core.addStatus('def', 1);
            } else {
                core.addStatus('def', parseInt(value));
            }
            core.updateStatusBar() // 刷新状态栏
            break
        case 'keyboard':

            // if (core.isReplaying()) {
            //     core.control._replay_book();
            //     return;
            // }
            //
            // if (main.core.isPlaying()) main.core.openKeyBoard(true);
            break;
        case "save":
            if (core.isReplaying()) {
                core.speedDownReplay();
                return;
            }

            if (main.core.isPlaying()) main.core.save(true);
            break
        case "load":
            if (core.isReplaying()) {
                core.speedUpReplay();
                return;
            }

            if (main.core.isPlaying()) main.core.load(true);
            break
        case "error":

            break
    }
    console.log(message);
}

function onclick(){
    $("#atkCol").onclick(function () {
        console.log("111")
    })
}
