main.floors.MT13=
{
    "floorId": "MT13",
    "title": "第 13 层",
    "name": "第 13 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,7": [
            {
                "type": "openShop",
                "id": "expShop2",
                "open": true
            }
        ],
        "8,11": {
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
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "3,4": [
            {
                "type": "openDoor",
                "loc": [
                    4,
                    7
                ]
            }
        ]
    },
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,224,  0,  0,  0,  0,  0,  1,  0,225,  0,  3],
    [  3,  0,  1,  1,  1,  1,  1, 81,  1,  0,  1,  0,  3],
    [  3,  0,  1,  0,  0,222,  0,  0,  1,  0,  1,  0,  3],
    [  3, 32,  1, 83,  1,  1,  1,  0,  1,  0,  1,  0,  3],
    [  3,226,  1,  0,  0,225,  1,222,  1, 27,  1,  0,  3],
    [  3,227,  1,  0,212,  6,  1,223,  1, 27,  1,  0,  3],
    [  3,226,  1,225, 86,121,  1,222,  1, 27,  1, 28,  3],
    [  3,  0,  1,  1,  1,  1,  1,  0,  1,  0,  1, 28,  3],
    [  3,  0,226,  0,  1,  0,  0,  0,225,  0,  1, 28,  3],
    [  3,  1,  1,  0,  1, 32,  1,  1,  1,  1,  1,  0,  3],
    [  3, 88,  0,  0, 82,  0, 87,  1,125,212, 81,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        5,
        11
    ],
    "downFloor": [
        2,
        11
    ],
    "bgm": "area2.mp3",
    "beforeBattle": {},
    "cannotMoveIn": {},
    "autoEvent": {},
    "canFlyFrom": true
}