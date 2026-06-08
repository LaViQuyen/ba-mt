// src/data/fullmt/cam19_test1.js

export const cam19_test1 = {
  id: "mt5",
  category: "full",
  testName: "MOCK TEST 5",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 10 - 15)
    // ==========================================================================
    listening: {
      audioSrc: "https://dl.dropboxusercontent.com/scl/fi/078kjrxqrovucgdjj9y0o/mt5.mp3?rlkey=3gtolg9ubm4jnx6by1sm6upqy",
      timeLimit: 1725,
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 5 - LISTENING SECTION1</h3>",
      questions: [
        // --- PART 1: Questions 1-10 (Gap-fill) ---
        {
          "type": "gap",
          "title": "Part 1: Questions 1-10",
          "instruction": "Complete the notes below. Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">Hinchingbrooke Country Park</h3>
                
                <p><strong>The park</strong></p>
                <ul>
                    <li>Area: <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="input-1"> hectares</li>
                    <li>Habitats: wetland, grassland and woodland</li>
                    <li>Wetland: lakes, ponds and a <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="input-2"></li>
                    <li>Wildlife includes birds, insects and animals</li>
                </ul>

                <p><strong>Subjects studied in educational visits include</strong></p>
                <ul>
                    <li><strong>Science:</strong> Children look at <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="input-3"> about plants, etc.</li>
                    <li><strong>Geography:</strong> includes learning to use a <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="input-4"> and compass</li>
                    <li><strong>History:</strong> changes in land use</li>
                    <li><strong>Leisure and tourism:</strong> mostly concentrates on the park's <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="input-5"></li>
                    <li><strong>Music:</strong> Children make <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="input-6"> with natural materials, and experiment with rhythm and speed.</li>
                </ul>

                <p><strong>Benefits of outdoor educational visits</strong></p>
                <ul>
                    <li>They give children a feeling of <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="input-7"> that they may not have elsewhere.</li>
                    <li>Children learn new <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="input-8"> and gain self-confidence.</li>
                </ul>

                <p><strong>Practical issues</strong></p>
                <ul>
                    <li>Cost per child: £ <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="input-9"></li>
                    <li>Adults, such as <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="input-10"> free</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": ["69", "sixty-nine"] },
            { "qNum": 2, "answer": "stream" },
            { "qNum": 3, "answer": "data" },
            { "qNum": 4, "answer": "map" },
            { "qNum": 5, "answer": "visitors" },
            { "qNum": 6, "answer": "sounds" },
            { "qNum": 7, "answer": "freedom" },
            { "qNum": 8, "answer": "skills" },
            { "qNum": 9, "answer": "4.95" },
            { "qNum": 10, "answer": "leaders" }
          ]
        },

        // --- PART 2: Questions 11-15 (MCQ Single) ---
        {
          "type": "mcq_single",
          "title": "Part 2: Questions 11-15",
          "instruction": "Choose the correct letter, <strong>A, B or C</strong>.",
          "items": [
            {
              "qNum": 11,
              "text": "During the visit to Malatte, in France, members especially enjoyed",
              "options": ["A. going to a theme park.", "B. experiencing a river trip.", "C. visiting a cheese factory."],
              "answer": "B"
            },
            {
              "qNum": 12,
              "text": "What will happen in Stanthorpe to mark the 25th anniversary of the Twinning Association?",
              "options": ["A. A tree will be planted.", "B. A garden seat will be bought.", "C. A footbridge will be built."],
              "answer": "A"
            },
            {
              "qNum": 13,
              "text": "Which event raised most funds this year?",
              "options": ["A. the film show", "B. the pancake evening", "C. the cookery demonstration"],
              "answer": "B"
            },
            {
              "qNum": 14,
              "text": "For the first evening with the French visitors host families are advised to",
              "options": ["A. take them for a walk round the town.", "B. go to a local restaurant.", "C. have a meal at home."],
              "answer": "C"
            },
            {
              "qNum": 15,
              "text": "On Saturday evening there will be the chance to",
              "options": ["A. listen to a concert.", "B. watch a match.", "C. take part in a competition."],
              "answer": "A"
            }
          ]
        },

        // --- PART 2: Questions 16-20 (Map Labeling) ---
        {
          "type": "labelling_grid",
          "title": "Questions 16-20",
          "instruction": "Label the map below. Write the correct letter, <strong>A-H</strong>, next to Questions 16-20.",
          // ⚠️ Bạn cần cắt ảnh map từ trang 11 của PDF và upload lên host, sau đó thay link vào đây
          "image": "https://i.postimg.cc/zXZZ1W8y/Screenshot-2026-01-03-112502.png", 
          "options": ["A", "B", "C", "D", "E", "F", "G", "H"],
          "items": [
            { "qNum": 16, "text": "Farm shop", "answer": "G" },
            { "qNum": 17, "text": "Disabled entry", "answer": "C" },
            { "qNum": 18, "text": "Adventure playground", "answer": "B" },
            { "qNum": 19, "text": "Kitchen gardens", "answer": "D" },
            { "qNum": 20, "text": "The Temple of the Four Winds", "answer": "A" }
          ]
        },

        // --- PART 3: Questions 21-24 (MCQ Multi - Choose 2) ---
        {
          "type": "mcq_multi",
          "title": "Part 3: Questions 21 and 22",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "Which TWO things did Colin find most satisfying about his bread reuse project?",
          "options": [
            "A. receiving support from local restaurants",
            "B. finding a good way to prevent waste",
            "C. overcoming problems in a basic process",
            "D. learning how to apply 3-D printing",
            "E. experimenting with designs and colours"
          ],
          "items": [
            { "qNums": [21, 22], "answer": ["B", "D"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 23 and 24",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "Which TWO ways do the students agree that touch-sensitive sensors for food labels could be developed in future?",
          "options": [
            "A. for use on medical products",
            "B. to show that food is no longer fit to eat",
            "C. for use with drinks as well as foods",
            "D. to provide applications for blind people",
            "E. to indicate the weight of certain foods"
          ],
          "items": [
            { "qNums": [23, 24], "answer": ["A", "E"] }
          ]
        },

        // --- PART 3: Questions 25-30 (Matching Opinions) ---
        {
          "type": "matching",
          "title": "Questions 25-30",
          "instruction": "What is the students' opinion about each of the following food trends?",
          "options": [
            "A. This is only relevant to young people.",
            "B. This may have disappointing results.",
            "C. This already seems to be widespread.",
            "D. Retailers should do more to encourage this.",
            "E. More financial support is needed for this.",
            "F. Most people know little about this.",
            "G. There should be stricter regulations about this.",
            "H. This could be dangerous."
          ],
          "items": [
            { "qNum": 25, "text": "Use of local products", "answer": "D" },
            { "qNum": 26, "text": "Reduction in unnecessary packaging", "answer": "G" },
            { "qNum": 27, "text": "Gluten-free and lactose-free food", "answer": "C" },
            { "qNum": 28, "text": "Use of branded products related to celebrity chefs", "answer": "B" },
            { "qNum": 29, "text": "Development of 'ghost kitchens' for takeaway food", "answer": "F" },
            { "qNum": 30, "text": "Use of mushrooms for common health concerns", "answer": "H" }
          ]
        },

        // --- PART 4: Questions 31-40 (Gap-fill) ---
        {
          "type": "gap",
          "title": "Part 4: Questions 31-40",
          "instruction": "Complete the notes below. Write <strong>ONE WORD ONLY</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">Céide Fields</h3>
                <p><strong>Discovery</strong></p>
                <ul>
                    <li>In the 1930s, a local teacher realised that stones beneath the bog surface were once <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="input-31"></li>
                    <li>His <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="input-32"> became an archaeologist and undertook an investigation of the site.</li>
                    <li>A traditional method used by local people to dig for <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="input-33"> was used to identify where stones were located.</li>
                    <li>Items are well preserved in the bog because of a lack of <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="input-34"></li>
                </ul>

                <p><strong>Neolithic farmers</strong></p>
                <ul>
                    <li>Houses were <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="input-35"> in shape and had a hole in the roof.</li>
                    <li>Neolithic innovations include:
                        <ul>
                            <li>cooking indoors</li>
                            <li>pots used for storage and to make <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="input-36"></li>
                        </ul>
                    </li>
                    <li>Each field at Céide was large enough to support a big <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="input-37"></li>
                    <li>The fields were probably used to restrict the grazing of animals - no evidence of structures to house them during <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="input-38"></li>
                </ul>

                <p><strong>Reasons for the decline in farming</strong></p>
                <ul>
                    <li>a decline in <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="input-39"> quality</li>
                    <li>an increase in <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="input-40"></li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 31, "answer": "walls" },
            { "qNum": 32, "answer": "son" },
            { "qNum": 33, "answer": "fuel" },
            { "qNum": 34, "answer": "oxygen" },
            { "qNum": 35, "answer": "rectangular" },
            { "qNum": 36, "answer": "lamps" },
            { "qNum": 37, "answer": "family" },
            { "qNum": 38, "answer": "winter" },
            { "qNum": 39, "answer": "soil" },
            { "qNum": 40, "answer": "rain" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 16 - 29)
    // ==========================================================================
    reading: {
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <h3 style="text-align: center;">How tennis rackets have changed</h3>
            
            <p>In 2016, the British professional tennis player Andy Murray was ranked as the world's number one. It was an incredible achievement by any standard made even more remarkable by the fact that he did this during a period considered to be one of the strongest in the sport's history, competing against the likes of Rafael Nadal, Roger Federer and Novak Djokovic, to name just a few. Yet five years previously, he had been regarded as a talented outsider who entered but never won the major tournaments.</p>

            <p>Of the changes that account for this transformation, one was visible and widely publicised: in 2011, Murray invited former number one player Ivan Lendl onto his coaching team – a valuable addition that had a visible impact on the player's playing style. Another change was so subtle as to pass more or less unnoticed. Like many players, Murray has long preferred a racket that consists of two types of string: one for the mains (verticals) and another for the crosses (horizontals). While he continued to use natural string in the crosses, in 2012 he switched to a synthetic string for the mains. A small change, perhaps, but its importance should not be underestimated.</p>

            <p>The modification that Murray made is just one of a number of options available to players looking to tweak their rackets in order to improve their games. 'Touring professionals have their rackets customised to their specific needs,' says Colin Triplow, a UK-based professional racket stringer. 'It's a highly important part of performance maximisation. Consequently, the specific rackets used by the world's elite are not actually readily available to the public; rather, each racket is individually made to suit the player who uses it.'</p>

            <p>Take the US professional tennis players Mike and Bob Bryan, for example: 'We're very particular with our racket specifications,' they say. 'All our rackets are sent from our manufacturer to Tampa, Florida, where our frames go through a thorough customisation process.' They explain how they have adjusted not only racket length, but even experimented with different kinds of paint. The rackets they use now weigh more than the average model and also have a denser string pattern (i.e. more crosses and mains). The primary reason for these modifications is simple: as the line between winning and losing becomes thinner and thinner, even these slight changes become more and more important.</p>

            <p>Racket modifications mainly date back to the 1970s, when the amateur German tennis player Werner Fischer started playing with the so-called spaghetti-strung racket. It created a string bed that generated so much topspin that it was quickly banned by the International Tennis Federation. However, within a decade or two, racket modification became a regularity. Today it is, in many ways, an aspect of the game that is equal in significance to nutrition or training.</p>

            <p>Modifications can be divided into two categories: those to the string bed and those to the racket frame. The former is far more common than the latter: the choice of the strings and the tension with which they are installed is something that nearly all professional players experiment with. They will continually change it depending on various factors including the court surface, climatic conditions, and game styles. Some will even change it depending on how they feel at the time.</p>

            <p>At one time, all tennis rackets were strung with natural gut made from the outer layer of sheep or cow intestines. This all changed in the early 1990s with the development of synthetic strings that were cheaper and more durable. They are made from three materials: nylon (relatively durable and affordable), Kevlar (too stiff to be used alone) or co-polyester (polyester combined with additives that enhance its performance). Even so, many professional players continue to use a 'hybrid set-up', where a combination of both synthetic and natural strings are used.</p>

            <p>Of the synthetics, co-polyester is by far the most widely used. It's a perfect fit for the style of tennis now played, where players tend to battle it out from the back of the court rather than coming to the net. Studies indicate that the average spin from a co-polyester string is 25% greater than that from natural string or other synthetics. In a sense, the development of co-polyester strings has revolutionised the game.</p>
            
            <p>However, many players go beyond these basic adjustments to the strings and make changes to the racket frame itself. For example, much of the serving power of US professional player Pete Sampras was attributed to the addition of four to five lead weights onto his rackets, and today many professionals have the weight adjusted during the manufacturing process. Other changes to the frame involve the handle. Players have individual preferences for the shape of the handle and some will have the handle of one racket moulded onto the frame of a different racket. Other players make different changes. The professional Portuguese player Gonçalo Oliveira replaced the original grips of his rackets with something thinner because they had previously felt uncomfortable to hold.</p>
        </div>
        
        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <h3 style="text-align: center;">The pirates of the ancient Mediterranean</h3>
            <p><em>In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers</em></p>

            <p><strong>A</strong> When one mentions pirates, an image springs to most people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea. Yet from the first to the third millennium BCE, thousands of years before these swashbucklers began spreading fear across the Caribbean, pirates prowled the Mediterranean, raiding merchant ships and threatening vital trade routes. However, despite all efforts and the might of various ancient states, piracy could not be stopped. The situation remained unchanged for thousands of years. Only when the pirates directly threatened the interests of ancient Rome did the Roman Republic organise a massive fleet to eliminate piracy. Under the command of the Roman general Pompey, Rome eradicated piracy, transforming the Mediterranean into 'Mare Nostrum' (Our Sea).</p>

            <p><strong>B</strong> Although piracy in the Mediterranean is first recorded in ancient Egypt during the reign of Pharaoh Amenhotep III (c 1390-1353 BCE), it is reasonable to assume it predated this powerful civilisation. This is partly due to the great importance the Mediterranean held at this time, and partly due to its geography. While the Mediterranean region is predominantly fertile, some parts are rugged and hilly, even mountainous. In the ancient times, the inhabitants of these areas relied heavily on marine resources, including fish and salt. Most had their own boats, possessed good seafaring skills, and unsurpassed knowledge of the local coastline and sailing routes. Thus, it is not surprising that during hardships, these men turned to piracy.</p>

            <p><strong>C</strong> Geography itself further benefited the pirates, with the numerous coves along the coast providing places for them to hide their boats and strike undetected. Before the invention of ocean-going caravels in the 15th century, ships could not easily cross long distances over open water. Thus, in the ancient world most were restricted to a few well-known navigable routes that followed the coastline. Caught in a trap, a slow merchant ship laden with goods had no other option but to surrender. In addition, knowledge of the local area helped the pirates to avoid retaliation once a state fleet arrived.</p>

            <p><strong>D</strong> One should also add that it was not unknown in the first and second millennia BCE for governments to resort to pirates' services, especially during wartime, employing their skills and numbers against their opponents. A pirate fleet would serve in the first wave of attack, preparing the way for the navy. Some of the regions were known for providing safe harbours to pirates, who, in return, boosted the local economy.</p>

            <p><strong>E</strong> The first known record of a named group of Mediterranean pirates, made during the rule of ancient Egyptian Pharaoh Akhenaten (c 1353-1336 BCE), was in the Amarna Letters. These were extracts of diplomatic correspondence between the pharaoh and his allies, and covered many pressing issues, including piracy. It seems the pharaoh was troubled by two distinct pirate groups, the Lukka and the Sherden. Despite the Egyptian fleet's best efforts, the pirates continued to cause substantial disruption to regional commerce. In the letters, the king of Alashiya (modern Cyprus) rejected Akhenaten's claims of a connection with the Lukka. The king assured Akhenaten he was prepared to punish any of his subjects involved in piracy.</p>

            <p><strong>F</strong> The ancient Greek world's experience of piracy was different from that of Egyptian rulers. While Egypt's power was land-based, the ancient Greeks relied on the Mediterranean in almost all aspects of life, from trade to warfare. Interestingly, in his works the Iliad and the Odyssey, the ancient Greek writer Homer not only condones, but praises the lifestyle and actions of pirates. The opinion remained unchanged in the following centuries. The ancient Greek historian Thucydides, for instance, glorified pirates' daring attacks on ships or even cities. For Greeks, piracy was a part of everyday life. Even high-ranking members of the state were not beyond engaging in such activities.</p>

            <p><strong>G</strong> The rising power of ancient Rome required the Roman Republic to deal with piracy in the Mediterranean. While piracy was a serious issue for the Republic, Rome profited greatly from its existence. Pirate raids provided a steady source of slaves, essential for Rome's agriculture and mining industries. But this arrangement could work only while the pirates left Roman interests alone. Pirate attacks on grain ships, which were essential to Roman citizens, led to angry voices in the Senate, demanding punishment of the culprits. Rome, however, did nothing, further encouraging piracy. By the 1st century BCE, emboldened pirates kidnapped prominent Roman dignitaries, asking for a large ransom to be paid. Their most famous hostage was none other than Julius Caesar, captured in 75 BCE.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <h3 style="text-align: center;">The persistence and peril of misinformation</h3>
            <p><em>Brian Southwell looks at how human brains verify information and discusses some of the challenges of battling widespread falsehoods</em></p>

            <p>Misinformation - both deliberately promoted and accidentally shared - is perhaps an inevitable part of the world in which we live, but it is not a new problem. People likely have lied to one another for roughly as long as verbal communication has existed. Deceiving others can offer an apparent opportunity to gain strategic advantage, to motivate others to action, or even to protect interpersonal bonds. Moreover, people inadvertently have been sharing inaccurate information with one another for thousands of years.</p>
            
            <p>However, we currently live in an era in which technology enables information to reach large audiences distributed across the globe, and thus the potential for immediate and widespread effects from misinformation now looms larger than in the past. Yet the means to correct misinformation might, over time, be found in those same patterns of mass communication and of the facilitated spread of information.</p>
            
            <p>The main worry regarding misinformation is its potential to unduly influence attitudes and behavior, leading people to think and act differently than they would if they were correctly informed. In other words, we worry that misinformation might lead people to hold misperceptions (or false beliefs) and that these misperceptions, especially when they occur among large groups of people, may have detrimental consequences for health, social harmony, and the political climate.</p>
            
            <p>At least three observations related to misinformation in the contemporary mass-media environment warrant the attention of researchers, policy makers, and everyone else. First of all, people who encounter misinformation tend to believe it, at least initially. Secondly, electronic and print media often do not block many types of misinformation before it appears in content available to large audiences. Thirdly, countering misinformation once it has enjoyed wide exposure can be a resource-intensive effort.</p>
            
            <In>Knowing what happens when people initially encounter misinformation holds tremendous importance for estimating the potential for subsequent problems. Although it is fairly routine for individuals to come across information that is false, the question of exactly how - and when - we mentally label information as true or false has garnered philosophical debate. The dilemma is neatly summarized by a contrast between how the 17th-century philosophers René Descartes and Baruch Spinoza described human information engagement. Descartes argued that a person only accepts or rejects information after considering its truth or falsehood; Spinoza argued that people accept all encountered information by default and then subsequently verify or reject it. In recent decades, empirical evidence has supported Spinoza's account: people appear to encode all new information as if it were true, even if only momentarily, and later tag the information as being either true or false. This pattern seems consistent with the observation that mental resources for skepticism physically reside in a different part of the brain than the resources used in perceiving and encoding.</p>
            
            <p>What about our second observation that misinformation often can appear in electronic or print media without being preemptively blocked? In support of this, one might consider the nature of regulatory structures in the United States. Organizations such as the Food and Drug Administration (FDA) offer considerable monitoring, but these roles typically do not involve preemptive censoring. Such programs, although laudable and useful, do not keep false advertising off the airwaves.</p>
            
            <p>This leads us to our third observation: a campaign to correct misinformation requires resources and planning to accomplish necessary reach and frequency. For corrective campaigns to be persuasive, audiences need to be able to comprehend them, which requires effort to frame messages in ways that are accessible. That some audiences might be unaware of the potential for misinformation also suggests the utility of media literacy efforts as early as elementary school.</p>
        
            <p>We live at a time when widespread misinformation is common. Yet at this time many people also are passionately developing potential solutions and remedies. The journey forward undoubtedly will be a long and arduous one. Future remedies will require not only continued theoretical consideration but also the development and maintenance of consistent monitoring tools- and a recognition among fellow members of society that claims which find prominence in the media that are insufficiently based in scientific consensus and social reality should be countered. Misinformation arises as a result of human fallibility and human information needs. To overcome the worst effects of the phenomenon, we will need coordinated efforts over time, rather than any singular one-time panacea we could hope to offer.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          "type": "tfng",
          "title": "Questions 1-7",
          "instruction": "Do the following statements agree with the information given in Reading Passage 1?",
          "items": [
            { "qNum": 1, "text": "People had expected Andy Murray to become the world's top tennis player for at least five years before 2016.", "answer": "FALSE" },
            { "qNum": 2, "text": "The change that Andy Murray made to his rackets attracted a lot of attention.", "answer": "FALSE" },
            { "qNum": 3, "text": "Most of the world's top players take a professional racket stringer on tour with them.", "answer": "NOT GIVEN" },
            { "qNum": 4, "text": "Mike and Bob Bryan use rackets that are light in comparison to the majority of rackets.", "answer": "FALSE" },
            { "qNum": 5, "text": "Werner Fischer played with a spaghetti-strung racket that he designed himself.", "answer": "NOT GIVEN" },
            { "qNum": 6, "text": "The weather can affect how professional players adjust the strings on their rackets.", "answer": "TRUE" },
            { "qNum": 7, "text": "It was believed that the change Pete Sampras made to his rackets contributed to his strong serve.", "answer": "TRUE" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 8-13",
          "instruction": "Complete the notes below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <p><strong>The tennis racket and how it has changed</strong></p>
                <ul>
                    <li>Mike and Bob Bryan made changes to the types of <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="input-8"> used on their racket frames.</li>
                    <li>Players were not allowed to use the spaghetti-strung racket because of the amount of <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="input-9"> it created.</li>
                    <li>Changes to rackets can be regarded as being as important as players' diets or the <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="input-10"> they do.</li>
                    <li>All rackets used to have natural strings made from the <span class="q-badge-inline">11</span><input type="text" class="gap-input" data-qnum="11" id="input-11"> of animals.</li>
                    <li>Pete Sampras had metal <span class="q-badge-inline">12</span><input type="text" class="gap-input" data-qnum="12" id="input-12"> put into the frames of his rackets.</li>
                    <li>Gonçalo Oliveira changed the <span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="input-13"> on his racket handles.</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 8, "answer": "paint" },
            { "qNum": 9, "answer": "topspin" },
            { "qNum": 10, "answer": "training" },
            { "qNum": 11, "answer": ["intestines", "gut"] },
            { "qNum": 12, "answer": "weights" },
            { "qNum": 13, "answer": "grips" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          "type": "matching",
          "title": "Questions 14-19",
          "instruction": "Reading Passage 2 has seven paragraphs, <strong>A-G</strong>. Which paragraph contains the following information?",
          "options": ["A", "B", "C", "D", "E", "F", "G"],
          "items": [
            { "qNum": 14, "text": "a reference to a denial of involvement in piracy", "answer": "E" },
            { "qNum": 15, "text": "details of how a campaign to eradicate piracy was carried out", "answer": "G" },
            { "qNum": 16, "text": "a mention of the circumstances in which states in the ancient world would make use of pirates", "answer": "D" },
            { "qNum": 17, "text": "a reference to how people today commonly view pirates", "answer": "A" },
            { "qNum": 18, "text": "an explanation of how some people were encouraged not to return to piracy", "answer": "G" },
            { "qNum": 19, "text": "a mention of the need for many sailing vessels to stay relatively close to land", "answer": "C" }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 20 and 21",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>. Which <strong>TWO</strong> of the following statements does the writer make about inhabitants of the Mediterranean region in the ancient world?",
          "options": [
            "A. They often used stolen vessels to carry out pirate attacks.",
            "B. They managed to escape capture by the authorities because they knew the area so well.",
            "C. They paid for information about the routes merchant ships would take.",
            "D. They depended more on the sea for their livelihood than on farming.",
            "E. They stored many of the goods taken in pirate attacks in coves along the coastline."
          ],
          "items": [
            { "qNums": [20, 21], "answer": ["B", "D"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 22 and 23",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>. Which <strong>TWO</strong> of the following statements does the writer make about piracy and ancient Greece?",
          "options": [
            "A. The state estimated that very few people were involved in piracy.",
            "B. Attitudes towards piracy changed shortly after the Iliad and the Odyssey were written.",
            "C. Important officials were known to occasionally take part in piracy.",
            "D. Every citizen regarded pirate attacks on cities as unacceptable.",
            "E. A favourable view of piracy is evident in certain ancient Greek texts."
          ],
          "items": [
            { "qNums": [22, 23], "answer": ["C", "E"] }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 24-26",
          "instruction": "Complete the summary below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <p><strong>Ancient Rome and piracy</strong></p>
                <p>Piracy was an issue ancient Rome had to deal with, but it also brought some benefits for Rome. For example, pirates supplied slaves that were important for Rome's industries.</p>
                <p>However, attacks on vessels transporting <span class="q-badge-inline">24</span><input type="text" class="gap-input" data-qnum="24" id="input-24"> to Rome resulted in calls for <span class="q-badge-inline">25</span><input type="text" class="gap-input" data-qnum="25" id="input-25"> for the pirates responsible.</p>
                <p>Nevertheless, piracy continued, with some pirates demanding a <span class="q-badge-inline">26</span><input type="text" class="gap-input" data-qnum="26" id="input-26"> for the return of the Roman officials they captured.</p>
            </div>
          `,
          "items": [
            { "qNum": 24, "answer": "grain" },
            { "qNum": 25, "answer": "punishment" },
            { "qNum": 26, "answer": "ransom" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          "type": "mcq_single",
          "title": "Questions 27-30",
          "instruction": "Choose the correct letter, <strong>A, B, C or D</strong>.",
          "items": [
            {
              "qNum": 27,
              "text": "What point does the writer make about misinformation in the first paragraph?",
              "options": [
                "A. Misinformation is a relatively recent phenomenon.",
                "B. Some people find it easy to identify misinformation.",
                "C. Misinformation changes as it is passed from one person to another.",
                "D. There may be a number of reasons for the spread of misinformation."
              ],
              "answer": "D"
            },
            {
              "qNum": 28,
              "text": "What does the writer say about the role of technology?",
              "options": [
                "A. It may at some point provide us with a solution to misinformation.",
                "B. It could fundamentally alter the way in which people regard information.",
                "C. It has changed the way in which organisations use misinformation.",
                "D. It has made it easier for people to check whether information is accurate."
              ],
              "answer": "A"
            },
            {
              "qNum": 29,
              "text": "What is the writer doing in the fourth paragraph?",
              "options": [
                "A. comparing the different opinions people have of misinformation",
                "B. explaining how the effects of misinformation have changed over time",
                "C. outlining which issues connected with misinformation are significant today",
                "D. describing the attitude of policy makers towards misinformation in the media"
              ],
              "answer": "C"
            },
            {
              "qNum": 30,
              "text": "What point does the writer make about regulation in the USA?",
              "options": [
                "A. The guidelines issued by the FDA need to be simplified.",
                "B. Regulation does not affect people's opinions of new prescription drugs.",
                "C. The USA has more regulatory bodies than most other countries.",
                "D. Regulation fails to prevent misinformation from appearing in the media."
              ],
              "answer": "D"
            }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 31-36",
          "instruction": "Complete the summary using the list of phrases, <strong>A-J</strong>, below.",
          "htmlContent": `
             <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                 <p><strong>What happens when people encounter misinformation?</strong></p>
                 <p>Although people have <span class="q-badge-inline">31</span><select class="gap-select" data-qnum="31"><option value=""></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> to misinformation, there is debate about precisely how and when we label something as true or untrue.</p>
                 <p>The philosophers Descartes and Spinoza had <span class="q-badge-inline">32</span><select class="gap-select" data-qnum="32"><option value=""></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> about how people engage with information.</p>
                 <p>Moreover, Spinoza believed that a distinct <span class="q-badge-inline">33</span><select class="gap-select" data-qnum="33"><option value=""></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> is involved in these stages.</p>
                 <p>Recent research has provided <span class="q-badge-inline">34</span><select class="gap-select" data-qnum="34"><option value=""></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> for Spinoza's theory and it would appear that people accept all encountered information as if it were true, even if this is for an extremely <span class="q-badge-inline">35</span><select class="gap-select" data-qnum="35"><option value=""></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> and do not label the information as true or false until later.</p>
                 <p>This is consistent with the fact that the resources for scepticism and the resources for perceiving and encoding are in <span class="q-badge-inline">36</span><select class="gap-select" data-qnum="36"><option value=""></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> in the brain.</p>
                 
                 <div style="margin-top:15px; padding:10px; background:#eef7ff; font-size:0.9rem;">
                     <strong>A</strong> constant conflict &nbsp;&nbsp; <strong>B</strong> additional evidence &nbsp;&nbsp; <strong>C</strong> different locations <br>
                     <strong>D</strong> experimental subjects &nbsp;&nbsp; <strong>E</strong> short period &nbsp;&nbsp; <strong>F</strong> extreme distrust <br>
                     <strong>G</strong> frequent exposure &nbsp;&nbsp; <strong>H</strong> mental operation &nbsp;&nbsp; <strong>I</strong> dubious reason &nbsp;&nbsp; <strong>J</strong> different ideas
                 </div>
             </div>
          `,
          "items": [
            { "qNum": 31, "answer": "G" },
            { "qNum": 32, "answer": "J" },
            { "qNum": 33, "answer": "H" },
            { "qNum": 34, "answer": "B" },
            { "qNum": 35, "answer": "E" },
            { "qNum": 36, "answer": "C" }
          ]
        },
        {
          "type": "ynng",
          "title": "Questions 37-40",
          "instruction": "Do the following statements agree with the claims of the writer in Reading Passage 3?",
          "items": [
            { "qNum": 37, "text": "Campaigns designed to correct misinformation will fail to achieve their purpose if people are unable to understand them.", "answer": "YES" },
            { "qNum": 38, "text": "Attempts to teach elementary school students about misinformation have been opposed.", "answer": "NOT GIVEN" },
            { "qNum": 39, "text": "It may be possible to overcome the problem of misinformation in a relatively short period.", "answer": "NO" },
            { "qNum": 40, "text": "The need to keep up with new information is hugely exaggerated in today's world.", "answer": "NOT GIVEN" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 30 - 31)
    // ==========================================================================
    writing: {
      task1: {
        title: "Writing Task 1",
        instruction: "You should spend about 20 minutes on this task.",
        // ⚠️ Cắt ảnh biểu đồ từ trang 30 PDF và thay link vào đây
        image: "https://i.postimg.cc/GpsymCrq/Screenshot-2026-01-03-181031.png", 
        prompt: `The graph below gives information on the numbers of participants for different activities at one social centre in Melbourne, Australia for the period 2000 to 2020.
        
        Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`
      },
      task2: {
        title: "Writing Task 2",
        instruction: "You should spend about 40 minutes on this task.",
        prompt: `Some people think that competition at work, at school and in daily life is a good thing.Others believe that we should try to cooperate more, rather than competing against each other.
        
        Discuss both these views and give your own opinion.
        
        Give reasons for your answer and include any relevant examples from your own knowledge or experience.`
      }
    }
  }
};