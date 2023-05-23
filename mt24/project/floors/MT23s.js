main.floors.MT23s=
{
    "floorId": "MT23s",
    "title": "第 23 层",
    "name": "第 23 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "startText.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,8": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:lv",
                    "operator": "+=",
                    "value": "3"
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "+=",
                    "value": "3000"
                },
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "+=",
                    "value": "30"
                },
                {
                    "type": "setValue",
                    "name": "status:def",
                    "operator": "+=",
                    "value": "30"
                },
                {
                    "type": "playSound",
                    "name": "item.mp3"
                },
                {
                    "type": "hide",
                    "time": 0
                },
                {
                    "type": "autoText",
                    "text": "\t[得到大飞羽，等级提升三级！] ",
                    "time": 500
                }
            ]
        },
        "4,8": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:lv",
                    "operator": "+=",
                    "value": "3"
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "+=",
                    "value": "3000"
                },
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "+=",
                    "value": "30"
                },
                {
                    "type": "setValue",
                    "name": "status:def",
                    "operator": "+=",
                    "value": "30"
                },
                {
                    "type": "playSound",
                    "name": "item.mp3"
                },
                {
                    "type": "hide",
                    "time": 0
                },
                {
                    "type": "autoText",
                    "text": "\t[得到大飞羽，等级提升三级！] ",
                    "time": 500
                }
            ]
        }
    },
    "changeFloor": {
        "6,1": {
            "floorId": "MT22",
            "stair": "upFloor"
        },
        "6,7": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "6,9": [
            {
                "type": "moveHero",
                "time": 125,
                "steps": [
                    "up"
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    8
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3, 32,  4,  4,  4,  4, 88,  4,  4,  4,  4, 32,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  4, 82,  4,  4, 26, 82, 26,  4,  4, 82,  4,  3],
    [  3,  0,  0,  0,  4,  4, 26,  4,  4,  0,  0,  0,  3],
    [  3,  0,  4,228,  4,  4,  4,  4,  4,228,  4,  0,  3],
    [  3,  0,  4,228,  4,  4,  4,  4,  4,228,  4,  0,  3],
    [  3, 31,  4,228,  4,  4, 85,  4,  4,228,  4, 31,  3],
    [  3, 31,  4,247,125,  4, 86,  4,125,247,  4, 31,  3],
    [  3, 31,  4,  4,  4,  4,208,  4,  4,  4,  4, 31,  3],
    [  3,  0,  4,  4,  4,247, 83,247,  4,  4,  4,  0,  3],
    [  3,228,  0, 32, 32,  0,  4,  0, 32, 32,  0,228,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "downFloor": [
        6,
        2
    ],
    "upFloor": [
        6,
        2
    ],
    "beforeBattle": {
        "5,10": [
            {
                "type": "playSound",
                "name": "blackMagician.mp3"
            }
        ],
        "7,10": [
            {
                "type": "playSound",
                "name": "blackMagician.mp3"
            }
        ],
        "3,8": [
            {
                "type": "playSound",
                "name": "blackMagician.mp3"
            }
        ],
        "9,8": [
            {
                "type": "playSound",
                "name": "blackMagician.mp3"
            }
        ]
    },
    "cannotMoveIn": {},
    "autoEvent": {},
    "canFlyFrom": true,
    "flyPoint": [
        6,
        2
    ]
}