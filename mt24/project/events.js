var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
			{
				"type": "comment",
				"text": "通过传参，flag:arg1 表示当前应该的加点数值"
			},
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+${1*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "1*flag:arg1"
							}
						]
					},
					{
						"text": "防御+${2*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "2*flag:arg1"
							}
						]
					},
					{
						"text": "生命+${200*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "200*flag:arg1"
							}
						]
					}
				]
			}
		],
		"回收钥匙商店": [
			{
				"type": "while",
				"condition": "(core.canUseQuickShop('keyShop2')==null)",
				"data": [
					{
						"type": "choices",
						"text": "\t[商人,trader]哦，欢迎你的到来，如果你手里缺少金币，我可以帮你：",
						"choices": [
							{
								"text": "卖出一把黄钥匙（7）",
								"action": [
									{
										"type": "if",
										"condition": "(item:yellowKey >= 1)",
										"true": [
											{
												"type": "playSound",
												"name": "keySold.mp3"
											},
											{
												"type": "setValue",
												"name": "item:yellowKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "7"
											}
										],
										"false": [
											"\t[商人,trader]你没有黄钥匙！"
										]
									}
								]
							},
							{
								"text": "卖出一把蓝钥匙（35）",
								"action": [
									{
										"type": "if",
										"condition": "(item:blueKey >= 1)",
										"true": [
											{
												"type": "playSound",
												"name": "keySold.mp3"
											},
											{
												"type": "setValue",
												"name": "item:blueKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "35"
											}
										],
										"false": [
											"\t[商人,trader]你没有蓝钥匙！"
										]
									}
								]
							},
							{
								"text": "卖出一把红钥匙（70）",
								"action": [
									{
										"type": "if",
										"condition": "(item:redKey>= 1)",
										"true": [
											{
												"type": "playSound",
												"name": "keySold.mp3"
											},
											{
												"type": "setValue",
												"name": "item:redKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "70"
											}
										],
										"false": [
											"\t[商人,trader]你没有红钥匙！"
										]
									}
								]
							},
							{
								"text": "离开商店",
								"action": [
									{
										"type": "playSound",
										"name": "queren.mp3"
									},
									{
										"type": "exit"
									}
								]
							}
						]
					},
					{
						"type": "playSound",
						"name": "keyUnsold.mp3"
					}
				]
			}
		]
	}
}