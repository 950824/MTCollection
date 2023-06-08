function myFunction(type, succ) {   // type: 'onGameExtend' 'onGameUndo' 'onGameShuffle' 'onClickable'
    if (succ == 1){
        switch (type) {
            case 'onGameExtend':
                DataManager.instance.extendnum += 1
                break
            case 'onGameUndo':
                DataManager.instance.undbnum += 1
                break
            case 'onGameShuffle':
                DataManager.instance.shufflenum += 1
                break
            case 'onClickable':
                DataManager.instance.clickablenum += 1
                break
        }
        EventManager.instance.emit(GAME_EVENT_ENUM.REWORD_BACK, { status: true, msg: 'Distribute rewards', typeAd: type })
    } else {
        EventManager.instance.emit(GAME_EVENT_ENUM.REWORD_BACK, { status: false, msg: 'Abnormal advertising playback', typeAd: type })
    }
  
}