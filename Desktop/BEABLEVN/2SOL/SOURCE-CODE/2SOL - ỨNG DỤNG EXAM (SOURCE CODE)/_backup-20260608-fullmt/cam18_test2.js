// src/data/cam18_test2.js

export const cam18_test2 = {
  id: "mt10",
  category: "full",
  testName: "MOCK TEST 10",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Đã nâng cấp giao diện Input và Map Labeling)
    // ==========================================================================
    listening: {
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/beablevn-ielts.firebasestorage.app/o/audio%2Fmt10.mp3?alt=media&token=75d0dae0-7f56-464b-9af4-1b42d0f44d18", // Bạn nhớ kiểm tra file âm thanh
      timeLimit: 1721, // 30 phút
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 10 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1: Questions 1-5 (Notes - Giao diện mới) ---
        {
          "type": "gap",
          "title": "Part 1: Questions 1-5",
          "instruction": "Complete the notes below. Write <strong>ONE WORD ONLY</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; margin-bottom: 20px;">
                <h3 style="margin-top:0; color:#2B6830; text-align:center;">Working at Milo's Restaurants</h3>
                
                <h4 style="border-bottom:1px solid #ccc; color:#2B6830;">Benefits</h4>
                <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
                    <li><span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="input-1"> provided for all staff</li>
                    <li><span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="input-2"> during weekdays at all Milo's Restaurants</li>
                    <li><span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="input-3"> provided after midnight</li>
                </ul>

                <h4 style="border-bottom:1px solid #ccc; margin-top: 15px; color:#2B6830;">Person specification</h4>
                <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
                    <li>must be prepared to work well in a team</li>
                    <li>must care about maintaining a high standard of <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="input-4"></li>
                    <li>must have a qualification in <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="input-5"></li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": "training" },
            { "qNum": 2, "answer": "discount" },
            { "qNum": 3, "answer": "taxi" },
            { "qNum": 4, "answer": "service" },
            { "qNum": 5, "answer": "English" }
          ]
        },

        // --- PART 1: Questions 6-10 (Table - Giao diện mới) ---
        {
          "type": "gap",
          "title": "Questions 6-10",
          "instruction": "Complete the table below. Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.",
          "htmlContent": `
            <div style="background:#fff; padding:15px; border:1px solid #ccc;">
                <table style="width:100%; border-collapse: collapse; font-size: 0.95rem;">
                    <thead style="background:#2B6830; color:white;">
                        <tr>
                            <th style="padding:10px; border:1px solid #ccc;">Location</th>
                            <th style="padding:10px; border:1px solid #ccc;">Job title</th>
                            <th style="padding:10px; border:1px solid #ccc;">Responsibilities include</th>
                            <th style="padding:10px; border:1px solid #ccc;">Pay and conditions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">
                                <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="input-6" style="width:80px;"> Street
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;">Breakfast supervisor</td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                Checking portions, etc. are correct<br>
                                Making sure <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="input-7" style="width:80px;"> is clean
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                Starting salary <span class="q-badge-inline">8</span> £<input type="text" class="gap-input" data-qnum="8" id="input-8" style="width:50px;"> per hour<br>
                                Start work at 5.30 a.m.
                            </td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">City Road</td>
                            <td style="padding:10px; border:1px solid #ccc;">Junior chef</td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                Supporting senior chefs<br>
                                Maintaining stock and organising <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="input-9" style="width:80px;">
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                Annual salary £23,000<br>
                                No work on a <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="input-10" style="width:80px;"> once a month
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
          "items": [
            { "qNum": 6, "answer": "Wivenhoe" },
            { "qNum": 7, "answer": "equipment" },
            { "qNum": 8, "answer": "9.75" },
            { "qNum": 9, "answer": "deliveries" },
            { "qNum": 10, "answer": "Sunday" }
          ]
        },

        // --- PART 2: Questions 11-14 ---
        {
          "type": "mcq_multi",
          "title": "Part 2: Questions 11-12",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "What are the TWO main reasons why this site has been chosen for the housing development?",
          "options": [
            "A. It has suitable geographical features.",
            "B. There is easy access to local facilities.",
            "C. It has good connections with the airport.",
            "D. The land is of little agricultural value.",
            "E. It will be convenient for workers."
          ],
          "items": [
            { "qNums": [11, 12], "answer": ["B", "E"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 13-14",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "Which TWO aspects of the planned housing development have people given positive feedback about?",
          "options": [
            "A. the facilities for cyclists",
            "B. the impact on the environment",
            "C. the encouragement of good relations between residents",
            "D. the low cost of all the accommodation",
            "E. the rural location"
          ],
          "items": [
            { "qNums": [13, 14], "answer": ["B", "C"] }
          ]
        },

        // --- PART 2: Questions 15-20 (MAP LABELING - LOGIC MỚI) ---
        {
          "type": "labelling_grid",
          "title": "Questions 15-20",
          "instruction": "Label the map below. Write the correct letter, <strong>A-I</strong>, next to Questions 15-20.",
          // ⚠️ Bạn cần cắt ảnh map từ trang 35 PDF, lưu tên 'test2_map.png' vào thư mục public/images/cam18/
          "image": "https://i.postimg.cc/sXBCmcQS/Screenshot-2026-02-05-235902.png", 
          "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
          "items": [
            { "qNum": 15, "text": "School", "answer": "G" },
            { "qNum": 16, "text": "Sports centre", "answer": "C" },
            { "qNum": 17, "text": "Clinic", "answer": "D" },
            { "qNum": 18, "text": "Community centre", "answer": "B" },
            { "qNum": 19, "text": "Supermarket", "answer": "H" },
            { "qNum": 20, "text": "Playground", "answer": "A" }
          ]
        },

        // --- PART 3: Questions 21-30 ---
        {
          "type": "mcq_single",
          "title": "Part 3: Questions 21-24",
          "instruction": "Choose the correct letter, <strong>A, B or C</strong>.",
          "items": [
            {
              "qNum": 21,
              "text": "Why do the students think the Laki eruption of 1783 is so important?",
              "options": [
                "A. It was the most severe eruption in modern times.",
                "B. It led to the formal study of volcanoes.",
                "C. It had a profound effect on society."
              ],
              "answer": "C"
            },
            {
              "qNum": 22,
              "text": "What surprised Adam about observations made at the time?",
              "options": [
                "A. the number of places producing them",
                "B. the contradictions in them",
                "C. the lack of scientific data to support them"
              ],
              "answer": "A"
            },
            {
              "qNum": 23,
              "text": "According to Michelle, what did the contemporary sources say about the Laki haze?",
              "options": [
                "A. People thought it was similar to ordinary fog.",
                "B. It was associated with health issues.",
                "C. It completely blocked out the sun for weeks."
              ],
              "answer": "B"
            },
            {
              "qNum": 24,
              "text": "Adam corrects Michelle when she claims that Benjamin Franklin",
              "options": [
                "A. came to the wrong conclusion about the cause of the haze.",
                "B. was the first to identify the reason for the haze.",
                "C. supported the opinions of other observers about the haze."
              ],
              "answer": "B"
            }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 25-26",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "Which TWO issues following the Laki eruption surprised the students?",
          "options": [
            "A. how widespread the effects were",
            "B. how long-lasting the effects were",
            "C. the number of deaths it caused",
            "D. the speed at which the volcanic ash cloud spread",
            "E. how people ignored the warning signs"
          ],
          "items": [
            { "qNums": [25, 26], "answer": ["A", "B"] }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 27-30",
          "instruction": "What comment do the students make about the impact of the Laki eruption on the following countries? Choose <strong>FOUR</strong> answers from the box.",
          "options": [
            "A. This country suffered the most severe loss of life.",
            "B. The impact on agriculture was predictable.",
            "C. There was a significant increase in deaths of young people.",
            "D. Animals suffered from a sickness.",
            "E. This country saw the highest rise in food prices in the world.",
            "F. It caused a particularly harsh winter."
          ],
          "items": [
            { "qNum": 27, "text": "Iceland", "answer": "D" },
            { "qNum": 28, "text": "Egypt", "answer": "A" },
            { "qNum": 29, "text": "UK", "answer": "C" },
            { "qNum": 30, "text": "USA", "answer": "F" }
          ]
        },

        // --- PART 4: Questions 31-40 (Giao diện mới) ---
        {
          "type": "gap",
          "title": "Part 4: Questions 31-40",
          "instruction": "Complete the notes below. Write <strong>ONE WORD ONLY</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
                <h3 style="text-align:center; color:#2B6830;">Pockets</h3>
                
                <p><strong>Reason for choice of subject</strong></p>
                <ul>
                    <li>They are <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="input-31"> but can be overlooked by consumers and designers.</li>
                </ul>

                <p><strong>Pockets in men's clothes</strong></p>
                <ul>
                    <li>Men started to wear <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="input-32"> in the 18th century.</li>
                    <li>A <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="input-33"> sewed pockets into the lining of the garments.</li>
                    <li>The wearer could use the pockets for small items.</li>
                    <li>Bigger pockets might be made for men who belonged to a certain type of <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="input-34">.</li>
                </ul>

                <p><strong>Pockets in women's clothes</strong></p>
                <ul>
                    <li>Women's pockets were less <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="input-35"> than men's.</li>
                    <li>Women were very concerned about pickpockets.</li>
                    <li>Pockets were produced in pairs using <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="input-36"> to link them together.</li>
                    <li>Pockets hung from the women's <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="input-37"> under skirts and petticoats.</li>
                    <li>Items such as <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="input-38"> could be reached through a gap in the material.</li>
                    <li>Pockets, of various sizes, stayed inside clothing for many decades.</li>
                    <li>When dresses changed shape, hidden pockets had a negative effect on the <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="input-39"> of women.</li>
                    <li>Bags called 'pouches' became popular, before women carried a <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="input-40">.</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 31, "answer": "convenient" },
            { "qNum": 32, "answer": "suits" },
            { "qNum": 33, "answer": "tailor" },
            { "qNum": 34, "answer": "profession" },
            { "qNum": 35, "answer": "visible" },
            { "qNum": 36, "answer": ["string", "strings"] },
            { "qNum": 37, "answer": ["waist", "waists"] },
            { "qNum": 38, "answer": "perfume" },
            { "qNum": 39, "answer": "image" },
            { "qNum": 40, "answer": "handbag" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 39 - 51 PDF)
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">Stonehenge</h3>
            
            <p>For centuries, historians and archaeologists have puzzled over the many mysteries of Stonehenge, a prehistoric monument that took an estimated 1,500 years to erect. Located on Salisbury Plain in southern England, it is comprised of roughly 100 massive upright stones placed in a circular layout.</p>
            
            <p>Archaeologists believe England's most iconic prehistoric ruin was built in several stages, with the earliest constructed 5,000 or more years ago. First, Neolithic Britons used primitive tools, which may have been fashioned out of deer antlers, to dig a massive circular ditch and bank, or henge. Deep pits dating back to that era and located within the circle may have once held a ring of timber posts, according to some scholars.</p>

            <p>Several hundred years later, it is thought, Stonehenge's builders hoisted an estimated 80 bluestones, 43 of which remain today, into standing positions and placed them in either a horseshoe or circular formation. These stones have been traced all the way to the Preseli Hills in Wales, some 300 kilometres from Stonehenge. How, then, did prehistoric builders without sophisticated tools or engineering haul these boulders, which weigh up to four tons, over such a great distance?</p>

            <p>According to one long-standing theory among archaeologists, Stonehenge's builders fashioned sledges and rollers out of tree trunks to lug the bluestones from the Preseli Hills. They then transferred the boulders onto rafts and floated them first along the Welsh coast and then up the River Avon toward Salisbury Plain; alternatively, they may have towed each stone with a fleet of vessels. More recent archaeological hypotheses have them transporting the bluestones with supersized wicker baskets on a combination of ball bearings and long grooved planks, hauled by oxen.</p>

            <p>As early as the 1970s, geologists have been adding their voices to the debate over how Stonehenge came into being. Challenging the classic image of industrious builders pushing, carting, rolling or hauling giant stones from faraway Wales, some scientists have suggested that it was glaciers, not humans, that carried the bluestones to Salisbury Plain. Most archaeologists have remained sceptical about this theory, however, wondering how the forces of nature could possibly have delivered the exact number of stones needed to complete the circle.</p>

            <p>The third phase of construction took place around 2000 BCE. At this point, sandstone slabs - known as 'sarsens' - were arranged into an outer crescent or ring; some were assembled into the iconic three-pieced structures called trilithons that stand tall in the centre of Stonehenge. Some 50 of these stones are now visible on the site, which may once have contained many more. Radiocarbon dating has revealed that work continued at Stonehenge until roughly 1600 BCE, with the bluestones in particular being repositioned multiple times.</p>

            <p>But who were the builders of Stonehenge? In the 17th century, archaeologist John Aubrey made the claim that Stonehenge was the work of druids, who had important religious, judicial and political roles in Celtic society. This theory was widely popularized by the antiquarian William Stukeley, who had unearthed primitive graves at the site. Even today, people who identify as modern druids continue to gather at Stonehenge for the summer solstice. However, in the mid-20th century, radiocarbon dating demonstrated that Stonehenge stood more than 1,000 years before the Celts inhabited the region.</p>

            <p>Many modern historians and archaeologists now agree that several distinct tribes of people contributed to Stonehenge, each undertaking a different phase of its construction. Bones, tools and other artefacts found on the site seem to support this hypothesis. The first stage was achieved by Neolithic agrarians who were likely to have been indigenous to the British Isles. Later, it is believed, groups with advanced tools and a more communal way of life left their mark on the site. Some believe that they were immigrants from the European continent, while others maintain that they were probably native Britons, descended from the original builders.</p>

            <p>If the facts surrounding the architects and construction of Stonehenge remain shadowy at best, the purpose of the striking monument is even more of a mystery. While there is consensus among the majority of modern scholars that Stonehenge once served the function of burial ground, they have yet to determine what other purposes it had.</p>
            
            <p>In the 1960s, the astronomer Gerald Hawkins suggested that the cluster of megalithic stones operated as a form of calendar, with different points corresponding to astrological phenomena such as solstices, equinoxes and eclipses occurring at different times of the year. While his theory has received a considerable amount of attention over the decades, critics maintain that Stonehenge's builders probably lacked the knowledge necessary to predict such events or that England's dense cloud cover would have obscured their view of the skies.</p>
            
            <p>More recently, signs of illness and injury in the human remains unearthed at Stonehenge led a group of British archaeologists to speculate that it was considered a place of healing, perhaps because bluestones were thought to have curative powers.</p>
        
            <p>** Celtic- The Celts were people who lived in Britain and northwest Europe during the Iron Age from 600 BCE to 43 CE</p>
          </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">Living with artificial intelligence</h3>
            <p style="text-align:center; font-style:italic;">Powerful artificial intelligence (AI) needs to be reliably aligned with human values, but does this mean AI will eventually have to police those values?</p>

            <p>This has been the decade of AI, with one astonishing feat after another. A chess-playing AI that can defeat not only all human chess players, but also all previous human-programmed chess machines, after learning the game in just four hours? That's yesterday's news, what's next? True, these prodigious accomplishments are all in so-called narrow AI, where machines perform highly specialised tasks. But many experts believe this restriction is very temporary. By mid-century, we may have artificial general intelligence (AGI) - machines that can achieve human-level performance on the full range of tasks that we ourselves can tackle.</p>

            <p>If so, there's little reason to think it will stop there. Machines will be free of many of the physical constraints on human intelligence. Our brains run at slow biochemical processing speeds on the power of a light bulb, and their size is restricted by the dimensions of the human birth canal. It is remarkable what they accomplish, given these handicaps. But they may be as far from the physical limits of thought as our eyes are from the incredibly powerful Webb Space Telescope.</p>

            <p>Once machines are better than us at designing even smarter machines, progress towards these limits could accelerate. What would this mean for us? Could we ensure a safe and worthwhile coexistence with such machines? On the plus side, AI is already useful and profitable for many things, and super AI might be expected to be super useful, and super profitable. But the more powerful AI becomes, the more important it will be to specify its goals with great care. Folklore is full of tales of people who ask for the wrong thing, with disastrous consequences - King Midas, for example, might have wished that everything he touched turned to gold, but didn't really intend this to apply to his breakfast.</p>

            <p>So we need to create powerful AI machines that are 'human-friendly' - that have goals reliably aligned with our own values. One thing that makes this task difficult is that we are far from reliably human-friendly ourselves. We do many terrible things to each other and to many other creatures with whom we share the planet. If superintelligent machines don't do a lot better than us, we'll be in deep trouble. We'll have powerful new intelligence amplifying the dark sides of our own fallible natures.</p>

            <p>For safety's sake, then, we want the machines to be ethically as well as cognitively superhuman. We want them to aim for the moral high ground, not for the troughs in which many of us spend some of our time. Luckily they'll be smart enough for the job. If there are routes to the moral high ground, they'll be better than us at finding them, and steering us in the right direction.</p>

            <p>However, there are two big problems with this utopian vision. One is how we get the machines started on the journey, the other is what it would mean to reach this destination. The 'getting started' problem is that we need to tell the machines what they're looking for with sufficient clarity that we can be confident they will find it - whatever 'it' actually turns out to be. This won't be easy, given that we are tribal creatures and conflicted about the ideals ourselves. We often ignore the suffering of strangers, and even contribute to it, at least indirectly. How then, do we point machines in the direction of something better?</p>

            <p>As for the 'destination' problem, we might, by putting ourselves in the hands of these moral guides and gatekeepers, be sacrificing our own autonomy - an important part of what makes us human. Machines who are better than us at sticking to the moral high ground may be expected to discourage some of the lapses we presently take for granted. We might lose our freedom to discriminate in favour of our own communities, for example.</p>
            
            <p>Loss of freedom to behave badly isn't always a bad thing, of course: denying ourselves the freedom to put children to work in factories, or to smoke in restaurants are signs of progress. But are we ready for ethical silicon police limiting our options? They might be so good at doing it that we won't notice them; but few of us are likely to welcome such a future.</p>

            <p>These issues might seem far-fetched, but they are to some extent already here. AI already has some input into how resources are used in our National Health Service (NHS) here in the UK, for example. If it was given a greater role, it might do so much more efficiently than humans can manage, and act in the interests of taxpayers and those who use the health system. However, we'd be depriving some humans (e.g. senior doctors) of the control they presently enjoy. Since we'd want to ensure that people are treated equally and that policies are fair, the goals of AI would need to be specified correctly.</p>

            <p>We have a new powerful technology to deal with - itself, literally, a new way of thinking. For our own safety, we need to point these new thinkers in the right direction, and get them to act well for us. It is not yet clear whether this is possible, but if it is, it will require a cooperative spirit, and a willingness to set aside self-interest.</p>
            
            <p>Both general intelligence and moral reasoning are often thought to be uniquely human capacities. But safety seems to require that we think of them as a package: if we are to give general intelligence to machines, we'll need to give them moral authority, too. And where exactly would that leave human beings? All the more reason to think about the destination now, and to be careful about what we wish for.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            <h3 style="text-align: center;">An ideal city</h3>
            <p style="text-align:center; font-style:italic;">Leonardo da Vinci's ideal city was centuries ahead of its time</p>

            <p>The word 'genius' is universally associated with the name of Leonardo da Vinci. A true Renaissance man, he embodied scientific spirit, artistic talent and humanist sensibilities. Five hundred years have passed since Leonardo died in his home at Château du Clos Lucé, outside Tours, France. Yet far from fading into insignificance, his thinking has carried down the centuries and still surprises today.</p>

            <p>The Renaissance marked the transition from the 15th century to modernity and took place after the spread of the plague in the 14th century, which caused a global crisis resulting in some 200 million deaths across Europe and Asia. Today, the world is on the cusp of a climate crisis, which is predicted to cause widespread displacement, extinctions and death, if left unaddressed. Then, as now, radical solutions were called for to revolutionise the way people lived and safeguard humanity against catastrophe.</p>

            <p>Around 1486 - after a pestilence that killed half the population in Milan, Italy - Leonardo turned his thoughts to urban planning problems. Following a typical Renaissance trend, he began to work on an 'ideal city' project, which - due to its excessive costs - would remain unfulfilled. Yet given that unsustainable urban models are a key cause of global climate change today, it's only natural to wonder how Leonardo might have changed the shape of modern cities.</p>

            <p>Although the Renaissance is renowned as an era of incredible progress in art and architecture, it is rarely noted that the 15th century also marked the birth of urbanism as a true academic discipline. The rigour and method behind the conscious conception of a city had been largely missing in Western thought until the moment when prominent Renaissance men pushed forward large-scale urban projects in Italy, such as the reconfiguration of the town of Pienza and the expansion of the city of Ferrara. These works surely inspired Leonardo's decision to rethink the design of medieval cities, with their winding and overcrowded streets and with houses piled against one another.</p>

            <p>It is not easy to identify a coordinated vision of Leonardo's ideal city because of his disordered way of working with notes and sketches. But from the largest collection of Leonardo's papers ever assembled, a series of innovative thoughts can be reconstructed regarding the foundation of a new city along the Ticino River, which runs from Switzerland into Italy and is 248 kilometres long. He designed the city for the easy transport of goods and clean urban spaces, and he wanted a comfortable and spacious city, with well-ordered streets and architecture. He recommended 'high, strong walls', with 'towers and battlements of all necessary and pleasant beauty'.</p>

            <p>His plans for a modern and 'rational' city were consistent with Renaissance ideals. But, in keeping with his personality, Leonardo included several innovations in his urban design. Leonardo wanted the city to be built on several levels, linked with vertical outdoor staircases. This design can be seen in some of today's high-rise buildings but was unconventional at the time. Indeed, this idea of taking full advantage of the interior spaces wasn't implemented until the 1920s and 1930s, with the birth of the Modernist movement.</p>

            <p>While in the upper layers of the city, people could walk undisturbed between elegant palaces and streets, the lower layer was the place for services, trade, transport and industry. But the true originality of Leonardo's vision was its fusion of architecture and engineering. Leonardo designed extensive hydraulic plants to create artificial canals throughout the city. The canals, regulated by clocks and basins, were supposed to make it easier for boats to navigate inland. Leonardo also thought that the width of the streets ought to match the average height of the adjacent houses: a rule still followed in many contemporary cities across Italy, to allow access to sun and reduce the risk of damage from earthquakes.</p>

            <p>Although some of these features existed in Roman cities, before Leonardo's drawings there had never been a multi-level, compact modern city which was thoroughly technically conceived. Indeed, it wasn't until the 19th century that some of his ideas were applied. For example, the subdivision of the city by function - with services and infrastructures located in the lower levels and wide and well-ventilated boulevards and walkways above for residents - is an idea that can be found in Georges-Eugène Haussmann's renovation of Paris under Emperor Napoleon III between 1853 and 1870.</p>

            <p>Today, Leonardo's ideas are not simply valid, they actually suggest a way forward for urban planning. Many scholars think that the compact city, built upwards instead of outwards, integrated with nature (especially water systems), with efficient transport infrastructure, could help modern cities become more efficient and sustainable. This is yet another reason why Leonardo was aligned so closely with modern urban planning and centuries ahead of his time.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS (Giao diện mới) ---
        {
          "type": "gap",
          "title": "Questions 1-8",
          "instruction": "Complete the notes below. Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">Stonehenge</h3>
              <p><strong>Construction</strong></p>
              <p>Stage 1:</p>
              <ul>
                <li>the ditch and henge were dug, possibly using tools made from <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="input-1"></li>
                <li><span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="input-2"> may have been arranged in deep pits inside the circle</li>
              </ul>
              
              <p>Stage 2:</p>
              <ul>
                <li>bluestones from the Preseli Hills were placed in standing position</li>
                <li>theories about the transportation of the bluestones:
                  <ul style="list-style-type: none; padding-left: 15px; margin-top: 8px;">
                    <li style="margin-bottom: 8px;">archaeological:
                      <ul style="list-style-type: disc; padding-left: 25px; margin-top: 5px;">
                        <li>builders used <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="input-3"> to make sledges and rollers</li>
                        <li><span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="input-4"> pulled them on giant baskets</li>
                      </ul>
                    </li>
                    <li>geological:
                      <ul style="list-style-type: disc; padding-left: 25px; margin-top: 5px;">
                        <li>they were brought from Wales by <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="input-5"></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>

              <p>Stage 3:</p>
              <ul>
                <li>sandstone slabs were arranged into an outer crescent or ring</li>
              </ul>

              <p><strong>Builders</strong></p>
              <ul>
                <li>a theory arose in the 17th century that its builders were Celtic <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="input-6"></li>
              </ul>

              <p><strong>Purpose</strong></p>
              <ul>
                <li>many experts agree it has been used as a <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="input-7"> site</li>
                <li>in the 1960s, it was suggested that it worked as a kind of <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="input-8"></li>
              </ul>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": ["antlers", "deer antlers"] },
            { "qNum": 2, "answer": ["posts", "timber posts"] },
            { "qNum": 3, "answer": "tree trunks" },
            { "qNum": 4, "answer": "oxen" },
            { "qNum": 5, "answer": "glaciers" },
            { "qNum": 6, "answer": "druids" },
            { "qNum": 7, "answer": "burial" },
            { "qNum": 8, "answer": "calendar" }
          ]
        },
        {
          "type": "tfng",
          "title": "Questions 9-13",
          "instruction": "Do the following statements agree with the information given in Reading Passage 1?",
          "items": [
            { "qNum": 9, "text": "During the third phase of construction, sandstone slabs were placed in both the outer areas and the middle of the Stonehenge site.", "answer": "TRUE" },
            { "qNum": 10, "text": "There is scientific proof that the bluestones stood in the same spot until approximately 1600 BCE.", "answer": "FALSE" },
            { "qNum": 11, "text": "John Aubrey's claim about Stonehenge was supported by 20th-century findings.", "answer": "FALSE" },
            { "qNum": 12, "text": "Objects discovered at Stonehenge seem to indicate that it was constructed by a number of different groups of people.", "answer": "TRUE" },
            { "qNum": 13, "text": "Criticism of Gerald Hawkins' theory about Stonehenge has come mainly from other astronomers.", "answer": "NOT GIVEN" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          "type": "mcq_single",
          "title": "Questions 14-19",
          "instruction": "Choose the correct letter, <strong>A, B, C or D</strong>.",
          "items": [
            { "qNum": 14, "text": "What point does the writer make about AI in the first paragraph?", "options": ["A. It is difficult to predict how quickly AI will progress.", "B. Much can be learned about the use of AI in chess machines.", "C. The future is unlikely to see limitations on the capabilities of AI.", "D. Experts disagree on which specialised tasks AI will be able to perform."], "answer": "C" },
            { "qNum": 15, "text": "What is the writer doing in the second paragraph?", "options": ["A. explaining why machines will be able to outperform humans", "B. describing the characteristics that humans and machines share", "C. giving information about the development of machine intelligence", "D. indicating which aspects of humans are the most advanced"], "answer": "A" },
            { "qNum": 16, "text": "Why does the writer mention the story of King Midas?", "options": ["A. to compare different visions of progress", "B. to illustrate that poorly defined objectives can go wrong", "C. to emphasise the need for cooperation", "D. to point out the financial advantages of a course of action"], "answer": "B" },
            { "qNum": 17, "text": "What challenge does the writer refer to in the fourth paragraph?", "options": ["A. encouraging humans to behave in a more principled way", "B. deciding which values we want AI to share with us", "C. creating a better world for all creatures on the planet", "D. ensuring AI is more human-friendly than we are ourselves"], "answer": "D" },
            { "qNum": 18, "text": "What does the writer suggest about the future of AI in the fifth paragraph?", "options": ["A. The safety of machines will become a key issue.", "B. It is hard to know what impact machines will have on the world.", "C. Machines will be superior to humans in certain respects.", "D. Many humans will oppose machines having a wider role."], "answer": "C" },
            { "qNum": 19, "text": "Which of the following best summarises the writer's argument in the sixth paragraph?", "options": ["A. Machine learning will share very few features with human learning.", "B. More intelligent machines will result in greater abuses of power.", "C. There are a limited number of people with the knowledge to program machines.", "D. Human shortcomings will make creating the machines we need more difficult."], "answer": "D" }
          ]
        },
        {
          "type": "ynng",
          "title": "Questions 20-23",
          "instruction": "Do the following statements agree with the claims of the writer in Reading Passage 2?",
          "items": [
            { "qNum": 20, "text": "Machines with the ability to make moral decisions may prevent us from promoting the interests of our communities.", "answer": "YES" },
            { "qNum": 21, "text": "Silicon police would need to exist in large numbers in order to be effective.", "answer": "NOT GIVEN" },
            { "qNum": 22, "text": "Many people are comfortable with the prospect of their independence being restricted by machines.", "answer": "NO" },
            { "qNum": 23, "text": "If we want to ensure that machines act in our best interests, we all need to work together.", "answer": "YES" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 24-26",
          "instruction": "Complete the summary using the list of phrases, <strong>A-F</strong>, below.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h3 style="text-align:center; color:#2B6830;">Using AI in the UK health system</h3>
              <p>AI currently has a limited role in the way <span class="q-badge-inline">24</span><select class="gap-select" data-qnum="24">
                <option value="">...</option>
                <option value="A">A</option><option value="B">B</option><option value="C">C</option>
                <option value="D">D</option><option value="E">E</option><option value="F">F</option>
              </select> are allocated in the health service. The positive aspect of AI having a bigger role is that it would be more efficient and lead to patient benefits. However, such a change would result, for example, in certain <span class="q-badge-inline">25</span><select class="gap-select" data-qnum="25">
                <option value="">...</option>
                <option value="A">A</option><option value="B">B</option><option value="C">C</option>
                <option value="D">D</option><option value="E">E</option><option value="F">F</option>
              </select> not having their current level of <span class="q-badge-inline">26</span><select class="gap-select" data-qnum="26">
                <option value="">...</option>
                <option value="A">A</option><option value="B">B</option><option value="C">C</option>
                <option value="D">D</option><option value="E">E</option><option value="F">F</option>
              </select>. It is therefore important that AI goals are appropriate so that discriminatory practices could be avoided.</p>
              <br>
              <div style="border:1px solid #999; padding:15px; background: #fff;">
                 <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <div><strong>A.</strong> medical practitioners</div>
                    <div><strong>B.</strong> specialised tasks</div>
                    <div><strong>C.</strong> available resources</div>
                    <div><strong>D.</strong> reduced illness</div>
                    <div><strong>E.</strong> professional authority</div>
                    <div><strong>F.</strong> technology experts</div>
                 </div>
              </div>
            </div>
          `,
          "items": [
            { "qNum": 24, "answer": "C" },
            { "qNum": 25, "answer": "A" },
            { "qNum": 26, "answer": "E" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          "type": "tfng",
          "title": "Questions 27-33",
          "instruction": "Do the following statements agree with the information given in Reading Passage 3?",
          "items": [
            { "qNum": 27, "text": "People first referred to Leonardo da Vinci as a genius 500 years ago.", "answer": "NOT GIVEN" },
            { "qNum": 28, "text": "The current climate crisis is predicted to cause more deaths than the plague.", "answer": "NOT GIVEN" },
            { "qNum": 29, "text": "Some of the challenges we face today can be compared to those of earlier times.", "answer": "TRUE" },
            { "qNum": 30, "text": "Leonardo da Vinci's 'ideal city' was constructed in the 15th century.", "answer": "FALSE" },
            { "qNum": 31, "text": "Poor town planning is a major contributor to climate change.", "answer": "TRUE" },
            { "qNum": 32, "text": "In Renaissance times, local people fought against the changes to Pienza and Ferrara.", "answer": "NOT GIVEN" },
            { "qNum": 33, "text": "Leonardo da Vinci kept a neat, organised record of his designs.", "answer": "FALSE" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 34-40",
          "instruction": "Complete the summary below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:5px;">
              <h3 style="text-align:center; color:#2B6830;">Leonardo da Vinci's ideal city</h3>
              <p>A collection of Leonardo da Vinci's paperwork reveals his design of a new city beside the Ticino River. This was to provide better <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="input-34"> for trade and a less polluted environment. Although Leonardo da Vinci's city shared many of the ideals of his time, some of his innovations were considered unconventional in their design. They included features that can be seen in some tower blocks today, such as <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="input-35"> on the exterior of a building.</p>
              
              <p>Leonardo da Vinci wasn't only an architect. His expertise in <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="input-36"> was evident in his plans for artificial canals within his ideal city. He also believed that the height of houses should relate to the width of streets in case earthquakes occurred. The design of many cities in Italy today follows this <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="input-37">.</p>
              
              <p>While some cities from <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="input-38"> times have aspects that can also be found in Leonardo's designs, his ideas weren't put into practice until long after his death. <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="input-39"> is one example of a city that was redesigned in the 19th century in the way that Leonardo had envisaged. His ideas are also relevant to today's world, where building <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="input-40"> no longer seems to be the best approach.</p>
            </div>
          `,
          "items": [
            { "qNum": 34, "answer": "transport" },
            { "qNum": 35, "answer": "staircases" },
            { "qNum": 36, "answer": "engineering" },
            { "qNum": 37, "answer": "rule" },
            { "qNum": 38, "answer": "Roman" },
            { "qNum": 39, "answer": "Paris" },
            { "qNum": 40, "answer": "outwards" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 52 - 53 PDF)
    // ==========================================================================
    writing: {
      task1: {
        title: "Writing Task 1",
        instruction: "You should spend about 20 minutes on this task.",
        // Bạn cần cắt ảnh biểu đồ từ trang 52 file PDF và lưu vào thư mục public/images/cam18/
        image: "https://i.postimg.cc/9QKsH1Xn/Screenshot-2026-01-22-153305.png", 
        prompt: `The chart below shows the number of households in the US by their annual income in 2007, 2011 and 2015.
        
        Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`
      },
      task2: {
        title: "Writing Task 2",
        instruction: "You should spend about 40 minutes on this task.",
        prompt: `Write about the following topic:
        
        Some university students want to learn about other subjects in addition to their main subjects. Others believe it is more important to give all their time and attention to studying for a qualification.
        
        Discuss both these views and give your own opinion.
        
        Give reasons for your answer and include any relevant examples from your own knowledge or experience.`
      }
    }
  }
};