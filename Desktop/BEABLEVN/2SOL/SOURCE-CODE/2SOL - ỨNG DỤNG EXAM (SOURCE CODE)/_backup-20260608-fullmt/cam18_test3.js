// src/data/cam18_test3.js

export const cam18_test3 = {
  id: "m11",
  category: "full",
  testName: "MOCK TEST 11",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 55 - 60 PDF)
    // ==========================================================================
    listening: {
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/beablevn-ielts.firebasestorage.app/o/audio%2Fmt11.mp3?alt=media&token=2f8e178d-33d9-463a-8d35-c080ce1fe55f", // Bạn nhớ kiểm tra file âm thanh
      timeLimit: 1710, // 30 phút
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 11 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1: Questions 1-6 (Notes) ---
        {
          "type": "gap",
          "title": "Part 1: Questions 1-6",
          "instruction": "Complete the notes below. Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; margin-bottom: 20px;">
                <h3 style="margin-top:0; color:#2B6830; text-align:center;">Local food shops</h3>
                <p><strong>Where to go</strong></p>
                <ul style="line-height: 1.8;">
                    <li><strong>Kite Place</strong> - near the <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="input-1"></li>
                    <li><strong>Fish market</strong>:
                        <ul style="list-style-type: circle; padding-left: 20px;">
                            <li>cross the <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="input-2"> and turn right</li>
                            <li>best to go before <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="input-3"> pm, earlier than closing time</li>
                        </ul>
                    </li>
                    <li><strong>Organic shop</strong>:
                        <ul style="list-style-type: circle; padding-left: 20px;">
                            <li>called <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="input-4"></li>
                            <li>below a restaurant in the large, grey building</li>
                            <li>look for the large <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="input-5"> outside</li>
                        </ul>
                    </li>
                    <li><strong>Supermarket</strong>:
                        <ul style="list-style-type: circle; padding-left: 20px;">
                            <li>take a <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="input-6"> minibus, number 289</li>
                        </ul>
                    </li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": ["harbour", "harbor"] },
            { "qNum": 2, "answer": "bridge" },
            { "qNum": 3, "answer": ["3.30", "three thirty", "half 3"] },
            { "qNum": 4, "answer": ["Rose", "rose"] },
            { "qNum": 5, "answer": "sign" },
            { "qNum": 6, "answer": "purple" }
          ]
        },

        // --- PART 1: Questions 7-10 (Table) ---
        {
          "type": "gap",
          "title": "Questions 7-10",
          "instruction": "Complete the table below. Write <strong>ONE WORD ONLY</strong> for each answer.",
          "htmlContent": `
            <div style="background:#fff; padding:15px; border:1px solid #ccc;">
                <h3 style="text-align: center; margin-top:0; color: #2B6830;">Shopping</h3>
                <table style="width:100%; border-collapse: collapse; font-size: 0.95rem;">
                    <thead style="background:#2B6830; color:white;">
                        <tr>
                            <th style="padding:10px; border:1px solid #ccc;"></th>
                            <th style="padding:10px; border:1px solid #ccc;">To buy</th>
                            <th style="padding:10px; border:1px solid #ccc;">Other ideas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">Fish market</td>
                            <td style="padding:10px; border:1px solid #ccc;">a dozen prawns</td>
                            <td style="padding:10px; border:1px solid #ccc;">a handful of <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="input-7"> (type of seaweed)</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">Organic shop</td>
                            <td style="padding:10px; border:1px solid #ccc;">beans and a <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="input-8"> for dessert</td>
                            <td style="padding:10px; border:1px solid #ccc;">spices and <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="input-9"></td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">Bakery</td>
                            <td style="padding:10px; border:1px solid #ccc;">a brown loaf</td>
                            <td style="padding:10px; border:1px solid #ccc;">a <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="input-10"> tart</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
          "items": [
             { "qNum": 7, "answer": "samphire" },
             { "qNum": 8, "answer": "melon" },
             { "qNum": 9, "answer": "coconut" },
             { "qNum": 10, "answer": "strawberry" }
          ]
        },

        // --- PART 2: Questions 11-16 (Matching) ---
        {
          "type": "matching",
          "title": "Part 2: Questions 11-16",
          "instruction": "What information is given about each of the following festival workshops? Choose <strong>SIX</strong> answers from the box.",
          "options": [
            "A. involves painting and drawing",
            "B. will be led by a prize-winning author",
            "C. is aimed at children with a disability",
            "D. involves a drama activity",
            "E. focuses on new relationships",
            "F. is aimed at a specific age group",
            "G. explores an unhappy feeling",
            "H. raises awareness of a particular culture"
          ],
          "items": [
            { "qNum": 11, "text": "Superheroes", "answer": "C" },
            { "qNum": 12, "text": "Just do it", "answer": "D" },
            { "qNum": 13, "text": "Count on me", "answer": "F" },
            { "qNum": 14, "text": "Speak up", "answer": "G" },
            { "qNum": 15, "text": "Jump for joy", "answer": "B" },
            { "qNum": 16, "text": "Sticks and stones", "answer": "H" }
          ]
        },

        // --- PART 2: Questions 17-20 (Multiple Choice) ---
        {
          "type": "mcq_multi",
          "title": "Questions 17-18",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "Which TWO reasons does the speaker give for recommending <em>Alive and Kicking</em>?",
          "options": [
            "A. It will appeal to both boys and girls.",
            "B. The author is well known.",
            "C. It has colourful illustrations.",
            "D. It is funny.",
            "E. It deals with an important topic."
          ],
          "items": [
            { "qNums": [17, 18], "answer": ["D", "E"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 19-20",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "Which TWO pieces of advice does the speaker give to parents about reading?",
          "options": [
            "A. Encourage children to write down new vocabulary.",
            "B. Allow children to listen to audio books.",
            "C. Get recommendations from librarians.",
            "D. Give children a choice about what they read.",
            "E. Only read aloud to children until they can read independently."
          ],
          "items": [
            { "qNums": [19, 20], "answer": ["B", "C"] }
          ]
        },

        // --- PART 3: Questions 21-25 (MCQ) ---
        {
          "type": "mcq_single",
          "title": "Part 3: Questions 21-25",
          "instruction": "Choose the correct letter, <strong>A, B or C</strong>.",
          "items": [
            {
              "qNum": 21,
              "text": "How does Clare feel about the students in her Year 12 science class?",
              "options": [
                "A. worried that they are not making progress",
                "B. challenged by their poor behaviour in class",
                "C. frustrated at their lack of interest in the subject"
              ],
              "answer": "C"
            },
            {
              "qNum": 22,
              "text": "How does Jake react to Clare's suggestion about an experiment based on children's diet?",
              "options": [
                "A. He is concerned that the results might not be meaningful.",
                "B. He feels some of the data might be difficult to obtain.",
                "C. He suspects that the conclusions might be upsetting."
              ],
              "answer": "B"
            },
            {
              "qNum": 23,
              "text": "What problem do they agree may be involved in an experiment involving animals?",
              "options": [
                "A. Any results may not apply to humans.",
                "B. It may be complicated to get permission.",
                "C. Students may not be happy about animal experiments."
              ],
              "answer": "A"
            },
            {
              "qNum": 24,
              "text": "What question do they decide the experiment should address?",
              "options": [
                "A. Are mice capable of controlling their food intake?",
                "B. Does an increase in sugar lead to health problems?",
                "C. How much do supplements of different kinds affect health?"
              ],
              "answer": "A"
            },
            {
              "qNum": 25,
              "text": "Clare might also consider doing another experiment involving",
              "options": [
                "A. other types of food supplement.",
                "B. different genetic strains of mice.",
                "C. varying amounts of exercise."
              ],
              "answer": "C"
            }
          ]
        },

        // --- PART 3: Questions 26-30 (Flowchart HTML with Select) ---
        {
          "type": "gap",
          "title": "Questions 26-30",
          "instruction": "Complete the flowchart below. Choose <strong>FIVE</strong> answers from the box and select the correct letter, <strong>A-H</strong>, next to Questions 26-30.",
          "htmlContent": `
            <div style="background:#fff; padding:20px; border:1px solid #ccc; max-width: 800px; margin: 0 auto;">
                <div style="border: 2px solid #2B6830; padding: 15px; margin-bottom: 30px; background: #fdfdfd; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px;">
                    <div><strong>A</strong> size</div>
                    <div><strong>B</strong> escape</div>
                    <div><strong>C</strong> age</div>
                    <div><strong>D</strong> water</div>
                    <div><strong>E</strong> cereal</div>
                    <div><strong>F</strong> calculations</div>
                    <div><strong>G</strong> changes</div>
                    <div><strong>H</strong> colour</div>
                </div>

                <div style="border:1px solid #000; padding:15px; text-align:left; background: #fff; border-radius: 4px;">
                    Choose mice which are all the same <span class="q-badge-inline">26</span><select class="gap-select" data-qnum="26"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select>
                </div>
                <div style="text-align:center; font-size:24px; padding: 5px;">&#8595;</div>

                <div style="border:1px solid #000; padding:15px; text-align:left; background: #fff; border-radius: 4px;">
                    Divide the mice into two groups, each with a different <span class="q-badge-inline">27</span><select class="gap-select" data-qnum="27"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select>
                </div>
                <div style="text-align:center; font-size:24px; padding: 5px;">&#8595;</div>

                <div style="border:1px solid #000; padding:15px; text-align:left; background: #fff; border-radius: 4px;">
                    <p style="margin:5px 0;">Feed group A commercial mouse food.</p>
                    <p style="margin:5px 0;">Feed group B the same, but also sugar contained in <span class="q-badge-inline">28</span><select class="gap-select" data-qnum="28"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select></p>
                </div>
                <div style="text-align:center; font-size:24px; padding: 5px;">&#8595;</div>

                <div style="border:1px solid #000; padding:15px; text-align:left; background: #fff; border-radius: 4px;">
                    <p style="margin:5px 0;">Take measurements using an electronic scale.</p>
                    <p style="margin:5px 0;">Place them in a weighing chamber to prevent <span class="q-badge-inline">29</span><select class="gap-select" data-qnum="29"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select></p>
                </div>
                <div style="text-align:center; font-size:24px; padding: 5px;">&#8595;</div>

                <div style="border:1px solid #000; padding:15px; text-align:left; background: #fff; border-radius: 4px;">
                    Do all necessary <span class="q-badge-inline">30</span><select class="gap-select" data-qnum="30"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select>
                </div>
            </div>
          `,
          "items": [
            { "qNum": 26, "answer": "C" },
            { "qNum": 27, "answer": "H" },
            { "qNum": 28, "answer": "E" },
            { "qNum": 29, "answer": "B" },
            { "qNum": 30, "answer": "F" }
          ]
        },

        // --- PART 4: Questions 31-40 (Notes) ---
        {
          "type": "gap",
          "title": "Part 4: Questions 31-40",
          "instruction": "Complete the notes below. Write <strong>ONE WORD ONLY</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="text-align:center; margin-top:0; color:#2B6830;">Microplastics</h3>
                <p><strong>Where microplastics come from</strong></p>
                <ul>
                    <li>fibres from some <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="input-31"> during washing</li>
                    <li>the breakdown of large pieces of plastic</li>
                    <li>waste from industry</li>
                    <li>the action of vehicle tyres on roads</li>
                </ul>

                <p><strong>Effects of microplastics</strong></p>
                <ul>
                    <li>They cause injuries to the <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="input-32"> of wildlife and affect their digestive systems.</li>
                    <li>They enter the food chain, e.g., in bottled and tap water, <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="input-33"> and seafood.</li>
                    <li>They may not affect human health, but they are already banned in skin cleaning products and <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="input-34"> in some countries.</li>
                    <li>Microplastics enter the soil through the air, rain and <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="input-35">.</li>
                </ul>

                <p><strong>Microplastics in the soil - a study by Anglia Ruskin University</strong></p>
                <ul>
                    <li>Earthworms are important because they add <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="input-36"> to the soil.</li>
                    <li>The study aimed to find whether microplastics in earthworms affect the <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="input-37"> of plants.</li>
                    <li>The study found that microplastics caused:
                        <ul>
                            <li><span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="input-38"> loss in earthworms</li>
                            <li>fewer seeds to germinate</li>
                            <li>a rise in the level of <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="input-39"> in the soil.</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>The study concluded:</strong></p>
                <ul>
                    <li>soil should be seen as an important natural process.</li>
                    <li>changes to soil damage both ecosystems and <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="input-40">.</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 31, "answer": "clothing" },
            { "qNum": 32, "answer": "mouths" },
            { "qNum": 33, "answer": "salt" },
            { "qNum": 34, "answer": "toothpaste" },
            { "qNum": 35, "answer": ["fertilisers", "fertilizers"] },
            { "qNum": 36, "answer": "nutrients" },
            { "qNum": 37, "answer": "growth" },
            { "qNum": 38, "answer": "weight" },
            { "qNum": 39, "answer": "acid" },
            { "qNum": 40, "answer": "society" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 61 - 74 PDF)
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">Archaeologists discover evidence of prehistoric island settlers</h3>
            
            <p>In early April 2019, Dr Ceri Shipton and his colleagues from Australian National University became the first archaeologists to explore Obi, one of many tropical islands in Indonesia's Maluku Utara province. The research team's discoveries suggest that the prehistoric people who lived on Obi were adept on both land and sea, hunting in the dense rainforest, foraging on the seashore, and possibly even voyaging between islands.</p>
            
            <p>The excavations were part of a project to learn more about how people first dispersed from mainland Asia, through the Indonesian archipelago and into the prehistoric continent that once connected Australia and New Guinea. The team's earlier research suggested that the northernmost islands in the group, known as the Wallacean islands, including Obi, would have offered the easiest migration route. It also seemed likely that these islands were crucial 'stepping stones' on humans' island-hopping voyages through this region millennia ago. But to support this idea, they needed archaeological evidence for humans living in this remote area in the ancient past. So, they travelled to Obi to look for sites that might reveal evidence of early occupation.</p>

            <p>Just inland from the village of Kelo on Obi's northern coast, Shipton and his colleagues found two caves containing prehistoric rock shelters that were suitable for excavation. With the permission and help of the local people of Kelo, they dug a small test excavation in each shelter. There they found numerous artefacts, including fragments of axes, some dating to about 14,000 years ago. The earliest axes at Kelo were made using clam shells. Axes made from clam shells from roughly the same time had also previously been found elsewhere in this region, including on the nearby island of Gebe to the northeast. As on Gebe, it is highly likely that Obi's axes were used in the construction of canoes, thus allowing these early peoples to maintain connections between communities on neighbouring islands.</p>

            <p>The oldest cultural layers from the Kelo site provided the team with the earliest record for human occupation on Obi, dating back around 18,000 years. At this time the climate was drier and colder than today, and the island's dense rainforests would likely have been much less impenetrable than they are now. Sea levels were about 120 metres lower, meaning Obi was a much larger island, encompassing what is today the separate island of Bisa, as well as several other small islands nearby.</p>

            <p>Roughly 11,700 years ago, as the most recent ice age ended, the climate became significantly warmer and wetter, no doubt making Obi's jungle much thicker. According to the researchers, it is no coincidence that around this time the first axes crafted from stone rather than sea shells appear, likely in response to their heavy-duty use for clearing and modification of the increasingly dense rainforest. While stone takes about twice as long to grind into an axe compared to shell, the harder material keeps its sharp edge for longer.</p>

            <p>Judging by the bones which the researchers unearthed in the Kelo caves, people living there mainly hunted the Rothschild's cuscus, a possum-like creature that still lives on Obi today. As the forest grew more dense, people probably used axes to clear patches of forest and make hunting easier.</p>

            <p>Shipton's team's excavation of the shelters at the Kelo site unearthed a volcanic glass substance called obsidian, which must have been brought over from another island, as there is no known source on Obi. It also revealed particular types of beads, similar to those previously found on islands in southern Wallacea. These finds again support the idea that Obi islanders routinely travelled to other islands.</p>

            <p>The excavations suggest people successfully lived in the two Kelo shelters for about 10,000 years. But then, about 8,000 years ago, both were abandoned. Did the residents leave Obi completely, or move elsewhere on the island? Perhaps the jungle had grown so thick that axes were no longer a match for the dense undergrowth. Perhaps people simply moved to the coast and turned to fishing rather than hunting as a means of survival.</p>

            <p>Whatever the reason for the departure, there is no evidence for use of the Kelo shelters after this time, until about 1,000 years ago, when they were re-occupied by people who owned pottery as well as items made out of gold and silver. It seems likely, in view of Obi's location, that this final phase of occupation also saw the Kelo shelters used by people involved in the historic trade in spices between the Maluku islands and the rest of the world.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">The global importance of wetlands</h3>

            <p><strong>A</strong> Wetlands are areas where water covers the soil, or is present either at or near the surface of the soil, for all or part of the year. These are complex ecosystems, rich in unique plant and animal life. But according to the World Wide Fund for Nature (WWFN), half of the world's wetlands have disappeared since 1900-converted or destroyed for commercial development, drainage schemes and the extraction of minerals and peat. Many of those that remain have been damaged by agricultural pesticides and fertilisers, industrial pollutants, and construction works.</p>

            <p><strong>B</strong> Throughout history, humans have gathered around wetlands, and their fertile ecosystems have played an important part in human development. Consequently, they are of considerable religious, historical and archaeological value to many communities around the world. 'Wetlands directly support the livelihoods and well-being of millions of people,' says Dr Matthew McCartney, principal researcher and hydrologist at the International Water Management Institute (IWMI). 'In many developing countries, large numbers of people are dependent on wetland agriculture for their livelihoods.'</p>

            <p><strong>C</strong> They also serve a crucial environmental purpose. 'Wetlands are one of the key tools in mitigating climate change across the planet,' says Pieter van Eijk, head of Climate Adaptation at Wetlands International (WI), pointing to their use as buffers that protect coastal areas from sea-level rise and extreme weather events such as hurricanes and flooding. Wetland coastal forests provide food and water, as well as shelter from storms, and WI and other agencies are working to restore those forests which have been lost. 'It can be as simple as planting a few trees per hectare to create shade and substantially change a microclimate,' he says. 'Implementing climate change projects isn't so much about money.'</p>

            <p><strong>D</strong> The world's wetlands are, unfortunately, rich sources for in-demand commodities, such as palm oil and pulpwood. Peatlands - wetlands with a waterlogged organic soil layer - are particularly targeted. When peatlands are drained for cultivation, they become net carbon emitters instead of active carbon stores, and, according to Marcel Silvius, head of Climate-smart Land-use at WI, this practice causes six per cent of all global carbon emissions. The clearance of peatlands for planting also increases the risk of forest fires, which release huge amounts of CO2. 'We're seeing huge peatland forests with extremely high biodiversity value being lost for a few decades of oil palm revenues,' says Silvius.</p>

            <p><strong>E</strong> The damage starts when logging companies arrive to clear the trees. They dig ditches to enter the peat swamps by boat and then float the logs out the same way. These are then used to drain water out of the peatlands to allow for the planting of corn, oil palms or pulpwood trees. Once the water has drained away, bacteria and fungi then break down the carbon in the peat and turn it into CO2 and methane. Meanwhile, the remainder of the solid matter in the peat starts to move downwards, in a process known as subsidence. Peat comprises 90 per cent water, so this is one of the most alarming consequences of peatland clearances. 'In the tropics, peat subsides at about four centimetres a year, so within half a century, very large landscapes on Sumatra and Borneo will become flooded as the peat drops below water level,' says Silvius. 'It's a huge catastrophe that's in preparation. Some provinces will lose 40 per cent of their landmass.'</p>

            <p><strong>F</strong> And while these industries affect wetlands in ways that can easily be documented, Dr Dave Tickner of the WWFN believes that more subtle impacts can be even more devastating. 'Sediment run-off and fertilisers can be pretty invisible,' says Tickner. 'Over-extraction of water is equally invisible. You do get shock stories about rivers running red, or even catching fire, but there's seldom one big impact that really hurts a wetland.' Tickner does not blame anyone for deliberate damage, however. 'I've worked on wetland issues for 20 years and have never met anybody who wanted to damage a wetland,' he says. 'It isn't something that people generally set out to do. Quite often, the effects simply come from people trying to make a living.'</p>

            <p><strong>G</strong> Silvius also acknowledges the importance of income generation. 'It's not that we just want to restore the biodiversity of wetlands - which we do - but we recognise there's a need to provide an income for local people.' This approach is supported by IWMI. 'The idea is that people in a developing country will only protect wetlands if they value and profit from them,' says McCartney. 'For sustainability, it's essential that local people are involved in wetland planning and decision making and have clear rights to use wetlands.'</p>

            <p><strong>H</strong> The fortunes of wetlands would be improved, Silvius suggests, if more governments recognised their long-term value. 'Different governments have different attitudes,' he says, and goes on to explain that some countries place a high priority on restoring wetlands, while others still deny the issue. McCartney is cautiously optimistic, however. 'Awareness of the importance of wetlands is growing,' he says. 'It's true that wetland degradation still continues at a rapid pace, but my impression is that things are slowly changing.'</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            
            <h3 style="text-align: center;">Is the era of artificial speech translation upon us?</h3>
            <p style="text-align:center; font-style:italic;">Once the stuff of science fiction, technology that enables people to talk using different languages is now here. But how effective is it?</p>

            <p>Noise, Alex Waibel tells me, is one of the major challenges that artificial speech translation has to meet. A device may be able to recognise speech in a laboratory, or a meeting room, but will struggle to cope with the kind of background noise I can hear in my office surrounding Professor Waibel as he speaks to me from Kyoto station in Japan. I'm struggling to follow him in English, on a scratchy line that reminds me we are nearly 10,000 kilometres apart - and that distance is still an obstacle to communication even if you're speaking the same language, as we are. We haven't reached the future yet. If we had, Waibel would have been able to speak more comfortably in his native German and I would have been able to hear his words in English.</p>

            <p>At Karlsruhe Institute of Technology, where he is a professor of computer science, Waibel and his colleagues already give lectures in German that their students can follow in English via an electronic translator. The system generates text that students can read on their laptops or phones, so the process is somewhat similar to subtitling. It helps that lecturers speak clearly, don't have to compete with background chatter, and say much the same thing each year.</p>

            <p>The idea of artificial speech translation has been around for a long time. Douglas Adams' science fiction novel, The Hitchhiker's Guide to the Galaxy, published in 1979, featured a life form called the 'Babel fish' which, when placed in the ear, enabled a listener to understand any language in the universe. It came to represent one of those devices that technology enthusiasts dream of long before they become practically realisable, like TVs flat enough to hang on walls: objects that we once could only dream of having but that are now commonplace. Now devices that look like prototype Babel fish have started to appear, riding a wave of advances in artificial translation and voice recognition.</p>

            <p>At this stage, however, they seem to be regarded as eye-catching novelties rather than steps towards what Waibel calls 'making a language-transparent society'. They tend to be domestic devices or applications suitable for hotel check-ins, for example, providing a practical alternative to speaking traveller's English. The efficiency of the translator is less important than the social function. However, 'Professionals are less inclined to be patient in a conversation,' founder and CEO at Waverly Labs, Andrew Ochoa, observes. To redress this, Waverly is now preparing a new model for professional applications, which entails performance improvements in speech recognition, translation accuracy and the time it takes to deliver the translated speech.</p>

            <p>For a conversation, both speakers need to have devices called Pilots (translator earpieces) in their ears. 'We find that there's a barrier with sharing one of the earphones with a stranger,' says Ochoa. That can't have been totally unexpected. The problem would be solved if earpiece translators became sufficiently prevalent that strangers would be likely to already have their own in their ears. Whether that happens, and how quickly, will probably depend not so much on the earpieces themselves, but on the prevalence of voice-controlled devices and artificial translation in general.</p>

            <p>Waibel highlights the significance of certain Asian nations, noting that voice translation has really taken off in countries such as Japan with a range of systems. There is still a long way to go, though. A translation system needs to be simultaneous, like the translator's voice speaking over the foreign politician being interviewed on the TV, rather than in sections that oblige speakers to pause after every few remarks and wait for the translation to be delivered. It needs to work offline, for situations where internet access isn't possible, and to address apprehensions about the amount of private speech data accumulating in the cloud, having been sent to servers for processing.</p>

            <p>Systems not only need to cope with physical challenges such as noise, they will also need to be socially aware by addressing people in the right way. Some cultural traditions demand solemn respect for academic status, for example, and it is only polite to respect this. Etiquette-sensitive artificial translators could relieve people of the need to know these differing cultural norms. At the same time, they might help to preserve local customs, slowing the spread of habits associated with international English, such as its readiness to get on first-name terms.</p>

            <p>Professors and other professionals will not outsource language awareness to software, though. If the technology matures into seamless, ubiquitous artificial speech translation, it will actually add value to language skills. Whether it will help people conduct their family lives or relationships is open to question - though one noteworthy possibility is that it could overcome the language barriers that often arise between generations after migration, leaving children and their grandparents without a shared language.</p>

            <p>Whatever uses it is put to, though, it will never be as good as the real thing. Even if voice-morphing technology simulates the speaker's voice, their lip movements won't match, and they will look like they are in a dubbed movie. The contrast will underline the value of shared languages, and the value of learning them. Sharing a language can promote a sense of belonging and community, as with the international scientists who use English as a lingua franca, where their predecessors used Latin. Though the practical need for a common language will diminish, the social value of sharing one will persist. And software will never be a substitute for the subtle but vital understanding that comes with knowledge of a language.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS (True/False/Not Given) ---
        {
          "type": "tfng",
          "title": "Questions 1-7",
          "instruction": "Do the following statements agree with the information given in Reading Passage 1?",
          "items": [
            { "qNum": 1, "text": "Archaeological research had taken place on the island of Obi before the arrival of Ceri Shipton and his colleagues.", "answer": "FALSE" },
            { "qNum": 2, "text": "At the Kelo sites, the researchers found the first clam shell axes ever to be discovered in the region.", "answer": "FALSE" },
            { "qNum": 3, "text": "The size of Obi today is less than it was 18,000 years ago.", "answer": "TRUE" },
            { "qNum": 4, "text": "A change in the climate around 11,700 years ago had a greater impact on Obi than on the surrounding islands.", "answer": "NOT GIVEN" },
            { "qNum": 5, "text": "The researchers believe there is a connection between warmer, wetter weather and a change in the material used to make axes.", "answer": "TRUE" },
            { "qNum": 6, "text": "Shipton's team were surprised to find evidence of the Obi islanders' hunting practices.", "answer": "NOT GIVEN" },
            { "qNum": 7, "text": "It is thought that the Kelo shelters were occupied continuously until about 1,000 years ago.", "answer": "FALSE" }
          ]
        },
        
        // --- PASSAGE 1 QUESTIONS (Note Completion) ---
        {
          "type": "gap",
          "title": "Questions 8-13",
          "instruction": "Complete the notes below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <h3 style="text-align:center; margin-top:0;">Archaeological findings on Obi</h3>
                <p>Excavations of rock shelters inside <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="input-8"> near the village of Kelo revealed:</p>
                <ul>
                    <li>axes from around 14,000 years ago, probably used to make canoes</li>
                    <li>axes made out of <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="input-9"> dating from around 11,700 years ago</li>
                    <li><span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="input-10"> of an animal: evidence of what ancient islanders ate</li>
                    <li>evidence of travel between islands:
                        <ul>
                            <li>obsidian: a material that is not found naturally on Obi</li>
                            <li><span class="q-badge-inline">11</span><input type="text" class="gap-input" data-qnum="11" id="input-11"> which resembled ones found on other islands.</li>
                        </ul>
                    </li>
                </ul>
                <p>It is thought that from 8,000 years ago, Obi islanders:</p>
                <ul>
                    <li>may have switched from hunting to fishing</li>
                    <li>had <span class="q-badge-inline">12</span><input type="text" class="gap-input" data-qnum="12" id="input-12"> as well as items made out of metal</li>
                    <li>probably took part in the production and sale of <span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="input-13"></li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 8, "answer": "caves" },
            { "qNum": 9, "answer": "stone" },
            { "qNum": 10, "answer": "bones" },
            { "qNum": 11, "answer": "beads" },
            { "qNum": 12, "answer": "pottery" },
            { "qNum": 13, "answer": "spices" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS (Matching Information) ---
        {
          "type": "matching_info",
          "title": "Questions 14-17",
          "instruction": "Reading Passage 2 has eight paragraphs, <strong>A-H</strong>. Which paragraph contains the following information?",
          "options": ["A", "B", "C", "D", "E", "F", "G", "H"],
          "items": [
            { "qNum": 14, "text": "reference to the need to ensure that inhabitants of wetland regions continue to benefit from them", "answer": "G" },
            { "qNum": 15, "text": "the proportion of wetlands which have already been lost", "answer": "A" },
            { "qNum": 16, "text": "reference to the idea that people are beginning to appreciate the value of wetlands", "answer": "H" },
            { "qNum": 17, "text": "mention of the cultural significance of wetlands", "answer": "B" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS (Sentence Completion) ---
        {
          "type": "gap",
          "title": "Questions 18-22",
          "instruction": "Complete the sentences below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#fff; padding:15px; border:1px solid #eee;">
                <p>18. Peatlands which have been drained begin to release <span class="q-badge-inline">18</span><input type="text" class="gap-input" data-qnum="18" id="input-18"> instead of storing it.</p>
                <p>19. Once peatland areas have been cleared, <span class="q-badge-inline">19</span><input type="text" class="gap-input" data-qnum="19" id="input-19"> are more likely to occur.</p>
                <p>20. Clearing peatland forests to make way for oil palm plantations destroys the <span class="q-badge-inline">20</span><input type="text" class="gap-input" data-qnum="20" id="input-20"> of the local environment.</p>
                <p>21. Water is drained out of peatlands through the <span class="q-badge-inline">21</span><input type="text" class="gap-input" data-qnum="21" id="input-21"> which are created by logging companies.</p>
                <p>22. Draining peatlands leads to <span class="q-badge-inline">22</span><input type="text" class="gap-input" data-qnum="22" id="input-22">: a serious problem which can eventually result in coastal flooding and land loss.</p>
            </div>
          `,
          "items": [
            { "qNum": 18, "answer": "carbon" },
            { "qNum": 19, "answer": "fires" },
            { "qNum": 20, "answer": "biodiversity" },
            { "qNum": 21, "answer": "ditches" },
            { "qNum": 22, "answer": "subsidence" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS (Matching Experts) ---
        {
          "type": "matching",
          "title": "Questions 23-26",
          "instruction": "Match each statement with the correct expert, <strong>A-D</strong>.",
          "options": [
            "A. Matthew McCartney",
            "B. Pieter van Eijk",
            "C. Marcel Silvius",
            "D. Dave Tickner"
          ],
          "items": [
            { "qNum": 23, "text": "Communities living in wetland regions must be included in discussions about the future of these areas.", "answer": "A" },
            { "qNum": 24, "text": "Official policies towards wetlands vary from one nation to the next.", "answer": "C" },
            { "qNum": 25, "text": "People cause harm to wetlands without having any intention to do so.", "answer": "D" },
            { "qNum": 26, "text": "Initiatives to reverse environmental damage need not be complex.", "answer": "B" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS (MCQ) ---
        {
          "type": "mcq_single",
          "title": "Questions 27-30",
          "instruction": "Choose the correct letter, <strong>A, B, C or D</strong>.",
          "items": [
            {
              "qNum": 27,
              "text": "What does the reader learn about the conversation in the first paragraph?",
              "options": [
                "A. The speakers are communicating in different languages.",
                "B. Neither of the speakers is familiar with their environment.",
                "C. The topic of the conversation is difficult for both speakers.",
                "D. Aspects of the conversation are challenging for both speakers."
              ],
              "answer": "D"
            },
            {
              "qNum": 28,
              "text": "What assists the electronic translator during lectures at Karlsruhe Institute of Technology?",
              "options": [
                "A. the repeated content of lectures",
                "B. the students' reading skills",
                "C. the languages used",
                "D. the lecturers' technical ability"
              ],
              "answer": "A"
            },
            {
              "qNum": 29,
              "text": "When referring to The Hitchhiker's Guide to the Galaxy, the writer suggests that",
              "options": [
                "A. the Babel fish was considered undesirable at the time.",
                "B. this book was not seriously intending to predict the future.",
                "C. artificial speech translation was not a surprising development.",
                "D. some speech translation techniques are better than others."
              ],
              "answer": "C"
            },
            {
              "qNum": 30,
              "text": "What does the writer say about sharing earpieces?",
              "options": [
                "A. It is something people will get used to doing.",
                "B. The reluctance to do this is understandable.",
                "C. The equipment will be unnecessary in the future.",
                "D. It is something few people need to worry about."
              ],
              "answer": "B"
            }
          ]
        },

        // --- PASSAGE 3 QUESTIONS (Matching Sentence Endings) ---
        {
          "type": "matching",
          "title": "Questions 31-34",
          "instruction": "Complete each sentence with the correct ending, <strong>A-F</strong>, below.",
          "options": [
            "A. but there are concerns about this.",
            "B. as systems do not need to conform to standard practices.",
            "C. but they are far from perfect.",
            "D. despite the noise issues.",
            "E. because translation is immediate.",
            "F. and have an awareness of good manners."
          ],
          "items": [
            { "qNum": 31, "text": "Speech translation methods are developing fast in Japan", "answer": "C" },
            { "qNum": 32, "text": "TV interviews that use translation voiceover methods are successful", "answer": "E" },
            { "qNum": 33, "text": "Future translation systems should address people appropriately", "answer": "F" },
            { "qNum": 34, "text": "Users may be able to maintain their local customs", "answer": "B" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS (Yes/No/Not Given) ---
        {
          "type": "ynng",
          "title": "Questions 35-40",
          "instruction": "Do the following statements agree with the views of the writer in Reading Passage 3?",
          "items": [
            { "qNum": 35, "text": "Language translation systems will be seen as very useful throughout the academic and professional worlds.", "answer": "NO" },
            { "qNum": 36, "text": "The overall value of automated translation to family life is yet to be shown.", "answer": "YES" },
            { "qNum": 37, "text": "Automated translation could make life more difficult for immigrant families.", "answer": "NO" },
            { "qNum": 38, "text": "Visual aspects of language translation are being considered by scientists.", "answer": "NOT GIVEN" },
            { "qNum": 39, "text": "International scientists have found English easier to translate into other languages than Latin.", "answer": "NOT GIVEN" },
            { "qNum": 40, "text": "As far as language is concerned, there is a difference between people's social and practical needs.", "answer": "YES" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 75 - 76 PDF)
    // ==========================================================================
    writing: {
      task1: {
        title: "WRITING TASK 1",
        // Lưu ý: Bạn cần cắt ảnh từ PDF (trang 75) và lưu vào thư mục public/images/cam18/
        image: "https://i.postimg.cc/jjCzhJjf/Screenshot-2026-02-06-111808.png", 
        prompt: `
          You should spend about 20 minutes on this task.

          The diagram below shows the floor plan of a public library 20 years ago and how it looks now.

          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

          Write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          You should spend about 40 minutes on this task.

          Write about the following topic:
  
            In many countries around the world, rural people are moving to cities, so the population in the countryside is decreasing.
            
            Do you think this is a positive or a negative development?
  
          Give reasons for your answer and include any relevant examples from your own knowledge or experience.
          
          Write at least 250 words.
        `
      }
    }
  }
};