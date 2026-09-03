// Vocabulary data
// Format: { id, word, partOfSpeech, meaning, exampleSentence }

const vocabularyData = [
    {
        id: 1,
        word: "clumsy",
        partOfSpeech: "(adj.)",
        meaning: "不器用な",
        exampleSentence: "His clumsy attempt to fix the machine only made it worse."
    },
    {
        id: 2,
        word: "desperate",
        partOfSpeech: "(adj.)",
        meaning: "必死の、自暴自棄の",
        exampleSentence: "The survivors were desperate for food and water."
    },
    {
        id: 3,
        word: "exacerbate",
        partOfSpeech: "(verb)",
        meaning: "悪化させろ、怒らせる",
        exampleSentence: "His comments only served to exacerbate the tension in the room."
    },
    {
        id: 4,
        word: "rehabilitate",
        partOfSpeech: "(verb)",
        meaning: "(けが人などの)健康を元通りにする、修復する",
        exampleSentence: "The rehabilitation program helped him recover from the injury."
    },
    {
        id: 5,
        word: "allegory",
        partOfSpeech: "(noun)",
        meaning: "寓話、たとえ話",
        exampleSentence: "The novel was seen as an allegory for political corruption, with characters symbolizing real-life figures."
    },
    {
        id: 6,
        word: "pretentious",
        partOfSpeech: "(adj.)",
        meaning: "うぬぼれた、これ見よがしの",
        exampleSentence: "His pretentious demeanor made it challenging for others to connect with him."
    },
    {
        id: 7,
        word: "aesthetic",
        partOfSpeech: "(adj.)",
        meaning: "美の、審美的な",
        exampleSentence: "The design had both aesthetic appeal and functional features."
    },
    {
        id: 8,
        word: "bleak",
        partOfSpeech: "(adj.)",
        meaning: "荒涼とした、寂しい、寒々とした、吹きさらしの",
        exampleSentence: "The landscape was bleak, with nothing but barren fields stretching into the distance."
    },
    {
        id: 9,
        word: "exponential",
        partOfSpeech: "(adj.)",
        meaning: "(変化などが)急激な",
        exampleSentence: "The company experienced exponential growth after launching new product."
    },
    {
        id: 10,
        word: "spark",
        partOfSpeech: "(noun/verb)",
        meaning: "火花",
        exampleSentence: "The spark ignited the dry leaves, starting a small fire."
    },
    {
        id: 11,
        word: "ameliorate",
        partOfSpeech: "(verb)",
        meaning: "改善する",
        exampleSentence: "Efforts were made to ameliorate the living conditions in the impoverished area."
    },
    {
        id: 12,
        word: "degrade",
        partOfSpeech: "(verb)",
        meaning: "(格や品位を落とす、(面目を)失わせる",
        exampleSentence: "The comments were intended to degrade the competitor's reputation."
    },
    {
        id: 13,
        word: "rubble",
        partOfSpeech: "(noun)",
        meaning: "石くず、がれき",
        exampleSentence: "After the earthquake, the streets were covered in rubble."
    },
    {
        id: 14,
        word: "pyrite",
        partOfSpeech: "(noun)",
        meaning: "鉄鉱",
        exampleSentence: "Fool's gold is a common nickname for pyrite due to its resemblance to real gold."
    },
    {
        id: 15,
        word: "affix",
        partOfSpeech: "(verb)",
        meaning: "貼る、添付する",
        exampleSentence: "Be sure to affix your signature at the bottom of the document."
    },
    {
        id: 16,
        word: "transient",
        partOfSpeech: "(adj.)",
        meaning: "一時の、短期の、(滞在などが)短い",
        exampleSentence: "The joy of winning the lottery was transient, fading quickly."
    },
    {
        id: 17,
        word: "induce",
        partOfSpeech: "(verb)",
        meaning: "誘発する",
        exampleSentence: "The motivational speaker aimed to induce a positive mindset in the audience."
    },
    {
        id: 18,
        word: "saturate",
        partOfSpeech: "(verb)",
        meaning: "すっかり濡らす、満たす",
        exampleSentence: "The heavy rain began to saturate the soil, causing flooding."
    },
    {
        id: 19,
        word: "ambush",
        partOfSpeech: "(verb)",
        meaning: "待ち伏せて急襲する",
        exampleSentence: "The soldiers set up an ambush to catch the enemy off guard."
    },
    {
        id: 20,
        word: "abstain",
        partOfSpeech: "(verb)",
        meaning: "慎む",
        exampleSentence: "The doctor advised him to abstain from alcohol."
    },
    {
        id: 21,
        word: "confiscate",
        partOfSpeech: "(verb)",
        meaning: "没収する、押収する、差し押さえる",
        exampleSentence: "The authorities had the right to confiscate any illegal goods found during the search."
    },
    {
        id: 22,
        word: "stifle",
        partOfSpeech: "(verb)",
        meaning: "(反乱などを)鎮圧する、抑制する、窒息させる",
        exampleSentence: "The smoke threatened to stifle the firefighters in the burning building."
    },
    {
        id: 23,
        word: "voracious",
        partOfSpeech: "(adj.)",
        meaning: "貪欲な",
        exampleSentence: "The voracious reader finished the entire book in a single sitting."
    },
    {
        id: 24,
        word: "jurisdiction",
        partOfSpeech: "(noun)",
        meaning: "(司法などの)管轄権",
        exampleSentence: "The court has jurisdiction over cases in this district."
    },
    {
        id: 25,
        word: "humus",
        partOfSpeech: "(noun)",
        meaning: "腐植土",
        exampleSentence: "Humus provides essential nutrients to plants and contributes to soil fertility."
    },
    {
        id: 26,
        word: "inoculation",
        partOfSpeech: "(noun)",
        meaning: "(予防)接種",
        exampleSentence: "Inoculation is an effective way to prevent certain diseases."
    },
    {
        id: 27,
        word: "lethargic",
        partOfSpeech: "(adj.)",
        meaning: "眠気を誘う、眠い",
        exampleSentence: "The hot weather made everyone feel lethargic and unwilling to move."
    },
    {
        id: 28,
        word: "credibility",
        partOfSpeech: "(noun)",
        meaning: "信用できること、信頼性",
        exampleSentence: "The witness's credibility was questioned during the trial."
    },
    {
        id: 29,
        word: "inexplicable",
        partOfSpeech: "(adj.)",
        meaning: "不可解な、説明できない",
        exampleSentence: "The mysterious phenomenon remained inexplicable despite extensive investigation."
    },
    {
        id: 30,
        word: "mandate",
        partOfSpeech: "(noun/verb)",
        meaning: "権限、命令、委任統治領にする、権限を与える",
        exampleSentence: "The government issued a mandate requiring citizens to wear masks in public places."
    },
    {
        id: 31,
        word: "engaging",
        partOfSpeech: "(adj.)",
        meaning: "(人を)引きつける、魅力がある",
        exampleSentence: "The speaker delivered an engaging presentation that captivated the audience."
    },
    {
        id: 32,
        word: "refrain",
        partOfSpeech: "(verb)",
        meaning: "慎む、断つ、やめる",
        exampleSentence: "The teacher reminded the students to refrain from talking during the exam."
    },
    {
        id: 33,
        word: "consonance",
        partOfSpeech: "(noun)",
        meaning: "調和、協和音、一致",
        exampleSentence: "The committee reached consonance on the proposed changes to the company's policies."
    },
    {
        id: 34,
        word: "surge",
        partOfSpeech: "(verb/noun)",
        meaning: "波のように押し寄せる、群衆の殺到、高まり、動揺",
        exampleSentence: "A surge in demand led to a shortage of the product."
    },
    {
        id: 35,
        word: "apogee",
        partOfSpeech: "(noun)",
        meaning: "遠地点、絶頂、極点",
        exampleSentence: "The success of the team's performance marked the apogee of their season."
    },
    {
        id: 36,
        word: "pupil",
        partOfSpeech: "(noun)",
        meaning: "(眼の)瞳孔",
        exampleSentence: "The pupils were attentive during the science lesson."
    },
    {
        id: 37,
        word: "taste bud",
        partOfSpeech: "(noun)",
        meaning: "味蕾",
        exampleSentence: "Different taste buds on the tongue are responsible for detecting sweet, salty, sour, and bitter flavors."
    },
    {
        id: 38,
        word: "quarry",
        partOfSpeech: "(verb/noun)",
        meaning: "(石などを)切り出す、(事実などを)探し出す、石切場、採石場",
        exampleSentence: "The quarry provided materials for construction."
    },
    {
        id: 39,
        word: "trilobite",
        partOfSpeech: "(noun)",
        meaning: "三葉虫",
        exampleSentence: "Fossils of the trilobite provided valuable insights into ancient marine life."
    },
    {
        id: 40,
        word: "beneficiary",
        partOfSpeech: "(noun)",
        meaning: "恩恵(利益)を受ける人、(年金などの)受取人",
        exampleSentence: "The beneficiary of the will was surprised to inherit a valuable estate."
    },
    {
        id: 41,
        word: "authenticate",
        partOfSpeech: "(verb)",
        meaning: "本物であると証明する",
        exampleSentence: "The certificate was used to authenticate the document."
    },
    {
        id: 42,
        word: "frigid",
        partOfSpeech: "(adj.)",
        meaning: "極寒の、寒さが厳しい",
        exampleSentence: "The winter wind made the air feel frigid, and people bundled up in layers."
    },
    {
        id: 43,
        word: "distress",
        partOfSpeech: "(noun/verb)",
        meaning: "悩み、苦痛、疲労、貧困、苦しめる",
        exampleSentence: "The news of the accident caused distress among family members."
    },
    {
        id: 44,
        word: "chassis",
        partOfSpeech: "(noun)",
        meaning: "(自動車などの)車台",
        exampleSentence: "The mechanic examined the car's chassis for signs of damage."
    },
    {
        id: 45,
        word: "novelty",
        partOfSpeech: "(noun)",
        meaning: "珍しさ、斬新さ、目新しいもの",
        exampleSentence: "The store showcased a variety of novelties and unique gift items."
    },
    {
        id: 46,
        word: "husbandry",
        partOfSpeech: "(noun)",
        meaning: "農業、耕作、節約、家計のやりくり",
        exampleSentence: "Good husbandry is essential for sustainable agriculture."
    },
    {
        id: 47,
        word: "cardiac",
        partOfSpeech: "(adj.)",
        meaning: "心臓の",
        exampleSentence: "Cardiac health is essential for overall well-being."
    },
    {
        id: 48,
        word: "quiver",
        partOfSpeech: "(verb)",
        meaning: "震える、揺れる",
        exampleSentence: "The leaves on the trees began to quiver as a gentle breeze passed through."
    },
    {
        id: 49,
        word: "abject",
        partOfSpeech: "(adj.)",
        meaning: "惨めな、軽蔑に値する",
        exampleSentence: "The refugees lived in abject conditions, lacking basic necessities."
    },
    {
        id: 50,
        word: "exacting",
        partOfSpeech: "(adj.)",
        meaning: "厳格な、厳しい、(仕事などが)骨の折れる、つらい",
        exampleSentence: "The exacting nature of the project required careful planning and precision."
    },
    {
        id: 51,
        word: "illusive",
        partOfSpeech: "(adj.)",
        meaning: "錯覚を起こさせる、幻想的な",
        exampleSentence: "The mirage in the desert was illusive, disappearing as they approached."
    },
    {
        id: 52,
        word: "liaison",
        partOfSpeech: "(noun)",
        meaning: "連絡",
        exampleSentence: "The liaison between the two companies resulted in a successful collaboration."
    },
    {
        id: 53,
        word: "precinct",
        partOfSpeech: "(noun)",
        meaning: "選挙区、管区、境界、周囲",
        exampleSentence: "The police officer patrolled the precinct to ensure public safety."
    },
    {
        id: 54,
        word: "insubordinate",
        partOfSpeech: "(adj.)",
        meaning: "従順でない、反抗的な、言うことを聞かない",
        exampleSentence: "The insubordinate behavior of the employee led to disciplinary action."
    },
    {
        id: 55,
        word: "trivial",
        partOfSpeech: "(adj.)",
        meaning: "ささいな、つまらない",
        exampleSentence: "Some consider the issue trivial, while others find it crucial."
    },
    {
        id: 56,
        word: "texture",
        partOfSpeech: "(noun)",
        meaning: "(布地・皮膚などの)感触、手触り、織地",
        exampleSentence: "The fabric had a soft texture that was pleasant to the touch."
    },
    {
        id: 57,
        word: "acquittal",
        partOfSpeech: "(noun)",
        meaning: "無罪放免、釈放",
        exampleSentence: "The defense attorney secured an acquittal for the wrongly accused defendant."
    },
    {
        id: 58,
        word: "herald",
        partOfSpeech: "(noun/verb)",
        meaning: "先触れ、先駆者、先触れをする、布告をする",
        exampleSentence: "The ringing bells heralded the arrival of the parade."
    },
    {
        id: 59,
        word: "herculean",
        partOfSpeech: "(adj.)",
        meaning: "非常に困難な、怪力無双",
        exampleSentence: "The construction of the massive skyscraper was a herculean task."
    },
    {
        id: 60,
        word: "temperate",
        partOfSpeech: "(adj.)",
        meaning: "穏やかな、節度のある",
        exampleSentence: "The temperate climate of the region attracts many tourists."
    },
    {
        id: 61,
        word: "astrology",
        partOfSpeech: "(noun)",
        meaning: "占星術",
        exampleSentence: "Some people believe in the predictive power of astrology and consult their horoscopes regularly."
    },
    {
        id: 62,
        word: "stagnant",
        partOfSpeech: "(adj.)",
        meaning: "よどんだ、活気がない",
        exampleSentence: "The stagnant economy required strategic interventions for revival."
    },
    {
        id: 63,
        word: "bogus",
        partOfSpeech: "(adj.)",
        meaning: "偽の",
        exampleSentence: "The detective uncovered a scheme involving the production of bogus passports."
    },
    {
        id: 64,
        word: "incomprehensible",
        partOfSpeech: "(adj.)",
        meaning: "理解できない、わかりにくい",
        exampleSentence: "The professor's lecture was so technical that it became incomprehensible to the students."
    },
    {
        id: 65,
        word: "exasperate",
        partOfSpeech: "(verb)",
        meaning: "いら立たせる、怒らせる",
        exampleSentence: "The constant delays began to exasperate the passengers waiting at the airport."
    },
    {
        id: 66,
        word: "stroll",
        partOfSpeech: "(verb)",
        meaning: "ぶらつく、放浪する",
        exampleSentence: "They decided to take a stroll in the park on a sunny afternoon."
    },
    {
        id: 67,
        word: "philanthropist",
        partOfSpeech: "(noun)",
        meaning: "博愛主義者",
        exampleSentence: "The philanthropist donated a large sum to the local hospital."
    },
    {
        id: 68,
        word: "collapse",
        partOfSpeech: "(noun/verb)",
        meaning: "崩壊、崩れ落ちる",
        exampleSentence: "The old building collapsed after years of neglect."
    },
    {
        id: 69,
        word: "contrite",
        partOfSpeech: "(adj.)",
        meaning: "悔い改めた、悔恨の",
        exampleSentence: "The defendant appeared contrite during the court hearing."
    },
    {
        id: 70,
        word: "acquiesce",
        partOfSpeech: "(verb)",
        meaning: "(嫌々ながら)従う、黙認する",
        exampleSentence: "Despite his reservations, he decided to acquiesce to the team's decision."
    },
    {
        id: 71,
        word: "bold",
        partOfSpeech: "(adj.)",
        meaning: "大胆な、勇敢な",
        exampleSentence: "The bold explorer ventured into uncharted territories."
    },
    {
        id: 72,
        word: "bill",
        partOfSpeech: "(noun/verb)",
        meaning: "法案、請求書、請求書を送る",
        exampleSentence: "The restaurant presented the bill to the customers after their meal."
    },
    {
        id: 73,
        word: "correlation",
        partOfSpeech: "(noun)",
        meaning: "相互関係、関連",
        exampleSentence: "Studies explored the correlation between regular exercise and improved mental health."
    },
    {
        id: 74,
        word: "transcend",
        partOfSpeech: "(verb)",
        meaning: "越える、勝る",
        exampleSentence: "The artist's work aimed to transcend conventional boundaries and challenge perceptions."
    },
    {
        id: 75,
        word: "archaic",
        partOfSpeech: "(adj.)",
        meaning: "旧式の、古語の",
        exampleSentence: "The archaic language in the text required translation for modern readers."
    },
    {
        id: 76,
        word: "solvent",
        partOfSpeech: "(adj.)",
        meaning: "支払い能力のある、溶解力のある",
        exampleSentence: "The company remained solvent despite facing financial challenges."
    },
    {
        id: 77,
        word: "siege",
        partOfSpeech: "(noun)",
        meaning: "包囲(攻撃)",
        exampleSentence: "The castle endured a long siege during the war."
    },
    {
        id: 78,
        word: "squarely",
        partOfSpeech: "(adv.)",
        meaning: "はっきりと、公平に、まともに",
        exampleSentence: "She addressed the issue squarely, leaving no room for ambiguity."
    },
    {
        id: 79,
        word: "precursor",
        partOfSpeech: "(noun)",
        meaning: "先者、前兆",
        exampleSentence: "The invention of the printing press was a precursor to the Information Age."
    },
    {
        id: 80,
        word: "unleash",
        partOfSpeech: "(verb)",
        meaning: "解放する、(感情などを)爆発させる、(犬の)を外す",
        exampleSentence: "The new technology will unleash a wave of innovation in the industry."
    },
    {
        id: 81,
        word: "abuse",
        partOfSpeech: "(verb)",
        meaning: "乱用する、虐待する",
        exampleSentence: "Substance abuse can have serious health consequences."
    },
    {
        id: 82,
        word: "clemency",
        partOfSpeech: "(noun)",
        meaning: "寛大さ、慈悲",
        exampleSentence: "The governor showed clemency by pardoning some prisoners."
    },
    {
        id: 83,
        word: "articulate",
        partOfSpeech: "(verb/adj.)",
        meaning: "はっきり述べる、話のはっきりした",
        exampleSentence: "The speaker was articulate and persuasive in presenting the proposal."
    },
    {
        id: 84,
        word: "expel",
        partOfSpeech: "(verb)",
        meaning: "放出する、吐き出す、(学校・国などから)追放する",
        exampleSentence: "The school decided to expel the student for repeated misconduct."
    },
    {
        id: 85,
        word: "detergent",
        partOfSpeech: "(noun)",
        meaning: "(合成)洗剤",
        exampleSentence: "The detergent effectively removed stains from the fabric."
    },
    {
        id: 86,
        word: "untamed",
        partOfSpeech: "(adj.)",
        meaning: "飼い慣らされていない、自由な",
        exampleSentence: "The untamed wolf roamed freely in the wilderness."
    },
    {
        id: 87,
        word: "oppression",
        partOfSpeech: "(noun)",
        meaning: "压迫、抑圧",
        exampleSentence: "The people protested against political oppression."
    },
    {
        id: 88,
        word: "buzzword",
        partOfSpeech: "(noun)",
        meaning: "(専門家のもったいぶった)愛用語、キャッチフレーズ、スローガン",
        exampleSentence: "Sustainability became a buzzword in discussions about environmental responsibility."
    },
    {
        id: 89,
        word: "dissertation",
        partOfSpeech: "(noun)",
        meaning: "学位論文、博士論文",
        exampleSentence: "The scholar spent years researching and writing her dissertation on medieval history."
    },
    {
        id: 90,
        word: "critical",
        partOfSpeech: "(adj.)",
        meaning: "批判的な、重大な",
        exampleSentence: "The movie critic provided a critical review of the new film."
    },
    {
        id: 91,
        word: "smuggle",
        partOfSpeech: "(verb)",
        meaning: "密輪する",
        exampleSentence: "Customs officers detected attempts to smuggle contraband across the border."
    },
    {
        id: 92,
        word: "contraband",
        partOfSpeech: "(noun/adj.)",
        meaning: "密売品、密輸、密輸の",
        exampleSentence: "Customs officers seized the contraband hidden in the cargo."
    },
    {
        id: 93,
        word: "esteem",
        partOfSpeech: "(verb/noun)",
        meaning: "尊敬する、~と思う、尊敬",
        exampleSentence: "The teacher held the student in high esteem."
    },
    {
        id: 94,
        word: "spare",
        partOfSpeech: "(verb/adj.)",
        meaning: "使い惜しみする、労を惜しむ、予備の",
        exampleSentence: "He kept a spare set of keys in case of emergencies."
    },
    {
        id: 95,
        word: "impotent",
        partOfSpeech: "(adj.)",
        meaning: "無力な、無益な",
        exampleSentence: "The government felt impotent in the face of the economic crisis."
    },
    {
        id: 96,
        word: "homage",
        partOfSpeech: "(noun)",
        meaning: "敬意、服従",
        exampleSentence: "The ceremony was a tribute to pay homage to the achievements of the great scientist."
    },
    {
        id: 97,
        word: "torment",
        partOfSpeech: "(noun)",
        meaning: "苦痛",
        exampleSentence: "The haunting memories of the war continued to be a torment for the veteran."
    },
    {
        id: 98,
        word: "seep",
        partOfSpeech: "(verb)",
        meaning: "(水などが)漏れる、染み出る",
        exampleSentence: "Water began to seep through the cracks in the old wooden roof."
    },
    {
        id: 99,
        word: "personify",
        partOfSpeech: "(verb)",
        meaning: "体現する、人格化する",
        exampleSentence: "The artist chose to personify nature in the painting, depicting it as a human figure."
    },
    {
        id: 100,
        word: "subsidiary",
        partOfSpeech: "(noun/adj.)",
        meaning: "子会社、補助員、補助的な、補助金による",
        exampleSentence: "The subsidiary expanded its product line under the parent company's guidance."
    },
    {
        id: 101,
        word: "placebo",
        partOfSpeech: "(noun)",
        meaning: "偽薬",
        exampleSentence: "The patients unknowingly received a placebo in the study."
    },
    {
        id: 102,
        word: "arbitrary",
        partOfSpeech: "(adj.)",
        meaning: "独断的な、恣意的な、任意の",
        exampleSentence: "The selection process seemed arbitrary and unfair."
    },
    {
        id: 103,
        word: "grim",
        partOfSpeech: "(adj.)",
        meaning: "険しい、残酷な",
        exampleSentence: "The prospect of war brought a grim reality to the nation."
    },
    {
        id: 104,
        word: "onlooker",
        partOfSpeech: "(noun)",
        meaning: "傍観者",
        exampleSentence: "Onlookers gathered to witness the street performance."
    },
    {
        id: 105,
        word: "abruptly",
        partOfSpeech: "(adv.)",
        meaning: "突然に",
        exampleSentence: "The car came to a stop abruptly."
    },
    {
        id: 106,
        word: "overwhelm",
        partOfSpeech: "(verb)",
        meaning: "困惑させる、圧倒する、打ちのめす",
        exampleSentence: "The beauty of the landscape overwhelmed the hikers."
    },
    {
        id: 107,
        word: "maternal",
        partOfSpeech: "(adj.)",
        meaning: "母親の、母親らしい",
        exampleSentence: "The maternal instinct kicked in as she cared for her newborn."
    },
    {
        id: 108,
        word: "binary",
        partOfSpeech: "(adj.)",
        meaning: "二進法な、双対の",
        exampleSentence: "Computers use binary code, which consists of 0s and 1s."
    },
    {
        id: 109,
        word: "hardy",
        partOfSpeech: "(adj.)",
        meaning: "(動植物が)耐寒性の、頑丈な、勇敢な",
        exampleSentence: "The hardy plants survived the harsh winter conditions."
    },
    {
        id: 110,
        word: "rectify",
        partOfSpeech: "(verb)",
        meaning: "改正する、直す",
        exampleSentence: "The company took immediate action to rectify the error."
    },
    {
        id: 111,
        word: "euphonious",
        partOfSpeech: "(adj.)",
        meaning: "響きの良い、耳に快い、音色の美しい",
        exampleSentence: "The euphonious melody of the piano captivated the audience."
    },
    {
        id: 112,
        word: "mold",
        partOfSpeech: "(noun/verb)",
        meaning: "かび、腐植土、鋳型、型にはめて成形する",
        exampleSentence: "The chef used a silicone mold to shape the chocolate into intricate designs."
    },
    {
        id: 113,
        word: "mow",
        partOfSpeech: "(verb)",
        meaning: "(草などを)刈る",
        exampleSentence: "The farmer needed to mow the field before the rainy season began."
    },
    {
        id: 114,
        word: "concord",
        partOfSpeech: "(noun)",
        meaning: "一致、調和、協調",
        exampleSentence: "The concord between the two nations led to increased collaboration."
    },
    {
        id: 115,
        word: "debilitate",
        partOfSpeech: "(verb)",
        meaning: "衰弱させる",
        exampleSentence: "The illness debilitated him, leaving him unable to perform daily activities."
    },
    {
        id: 116,
        word: "null",
        partOfSpeech: "(adj.)",
        meaning: "無効な、無意味な",
        exampleSentence: "The contract was declared null and void due to a breach of terms."
    },
    {
        id: 117,
        word: "strife",
        partOfSpeech: "(noun)",
        meaning: "争い、不和、衝突",
        exampleSentence: "Strife among team members hindered the project's progress."
    },
    {
        id: 118,
        word: "frustrate",
        partOfSpeech: "(verb)",
        meaning: "失望させる、(計画や努力などを)挫折させる、やる気をくじく",
        exampleSentence: "Technical difficulties can frustrate even the most well-prepared presentations."
    },
    {
        id: 119,
        word: "indispensable",
        partOfSpeech: "(adj.)",
        meaning: "不可欠な",
        exampleSentence: "Water is indispensable for human survival."
    },
    {
        id: 120,
        word: "mundane",
        partOfSpeech: "(adj.)",
        meaning: "ありふれた、日常の、現世の",
        exampleSentence: "The routine tasks became mundane, and the employees sought new challenges."
    },
    {
        id: 121,
        word: "conglomeration",
        partOfSpeech: "(noun)",
        meaning: "(異質なものが)一つにまとまること、集合体",
        exampleSentence: "The flea market offered a conglomeration of items, from vintage books to antique furniture."
    },
    {
        id: 122,
        word: "rococo",
        partOfSpeech: "(noun)",
        meaning: "ロココ様式",
        exampleSentence: "The furniture in the palace was adorned with intricate rococo designs."
    },
    {
        id: 123,
        word: "thinker",
        partOfSpeech: "(noun)",
        meaning: "思想家、思索家",
        exampleSentence: "The philosopher was a deep thinker who pondered the nature of existence."
    },
    {
        id: 124,
        word: "concession",
        partOfSpeech: "(noun)",
        meaning: "譲歩",
        exampleSentence: "The company made a concession by offering a discount to loyal customers."
    },
    {
        id: 125,
        word: "atypical",
        partOfSpeech: "(adj.)",
        meaning: "異常な、型にはまらない",
        exampleSentence: "Her atypical approach to problem-solving surprised her colleagues."
    },
    {
        id: 126,
        word: "tan",
        partOfSpeech: "(noun/verb/adj.)",
        meaning: "日焼けした色、日焼けさせる、日焼けした",
        exampleSentence: "After spending the day at the beach, she got a tan."
    },
    {
        id: 127,
        word: "authoritarian",
        partOfSpeech: "(adj./noun)",
        meaning: "権威主義の、権威主義者",
        exampleSentence: "The regime was known for its authoritarian rule."
    }
];
