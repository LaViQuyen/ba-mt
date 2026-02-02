// src/data/fullmt/cam20_test1.js

export const cam20_test1 = {
  id: "full_cam20_t1",
  category: "full",
  testName: "MOCK TEST 1",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 3 - 10)
    // ==========================================================================
    listening: {
      audioSrc: "/audio/mt1.mp3",
      timeLimit: 1916,
      passage: "<h3 style='text-align:center; color:#002554;'>CAMBRIDGE 20 - LISTENING TEST 1</h3>",
      questions: [
        // --- PART 1: Questions 1-10 (Gap-fill Table) ---
        {
          "type": "gap",
          "title": "Part 1: Questions 1-10",
          "instruction": "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:15px; border:1px solid #ddd; overflow-x:auto;">
                <table style="width:100%; border-collapse: collapse; min-width: 600px;">
                    <thead>
                        <tr style="background:#002554; color:white;">
                            <th style="padding:10px; border:1px solid #ccc;">Name of restaurant</th>
                            <th style="padding:10px; border:1px solid #ccc;">Location</th>
                            <th style="padding:10px; border:1px solid #ccc;">Reason for recommendation</th>
                            <th style="padding:10px; border:1px solid #ccc;">Other comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;"><strong>The Junction</strong></td>
                            <td style="padding:10px; border:1px solid #ccc;">Greyson Street, near the station</td>
                            <td style="padding:10px; border:1px solid #ccc;">Good for people who are especially keen on <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1"></td>
                            <td style="padding:10px; border:1px solid #ccc;">Quite expensive<br>The <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2"> is a good place for a drink</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;"><strong>Paloma</strong></td>
                            <td style="padding:10px; border:1px solid #ccc;">In Bow Street next to the cinema</td>
                            <td style="padding:10px; border:1px solid #ccc;"><span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3"> Food, good for sharing</td>
                            <td style="padding:10px; border:1px solid #ccc;">Staff are very friendly<br>Need to pay £50 deposit<br>A limited selection of <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4"> Food on the menu</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;"><strong>The <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5"></strong></td>
                            <td style="padding:10px; border:1px solid #ccc;">At the top of a <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="q-6"></td>
                            <td style="padding:10px; border:1px solid #ccc;">A famous chef<br>All the <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7"> are very good<br>Only uses <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8"> ingredients</td>
                            <td style="padding:10px; border:1px solid #ccc;">Set lunch costs £ <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9"> per person<br>Portions probably of <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10"> size</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": "fish" },
            { "qNum": 2, "answer": "roof" },
            { "qNum": 3, "answer": "Spanish" },
            { "qNum": 4, "answer": ["vegetarian", "vegetarians"] },
            { "qNum": 5, "answer": "Audley" },
            { "qNum": 6, "answer": "hotel" },
            { "qNum": 7, "answer": "reviews" },
            { "qNum": 8, "answer": "local" },
            { "qNum": 9, "answer": ["30", "thirty"] },
            { "qNum": 10, "answer": "average" }
          ]
        },

        // --- PART 2: Questions 11-16 (MCQ Single) ---
        {
          "type": "mcq_single",
          "title": "Part 2: Questions 11-16",
          "instruction": "Choose the correct letter, A, B or C.",
          "items": [
            {
              "qNum": 11,
              "text": "Heather says pottery differs from other art forms because",
              "options": ["A. it lasts longer in the ground.", "B. it is practised by more people.", "C. it can be repaired more easily."],
              "answer": "A"
            },
            {
              "qNum": 12,
              "text": "Archaeologists sometimes identify the use of ancient pottery from",
              "options": ["A. the clay it was made with.", "B. the marks that are on it.", "C. the basic shape of it."],
              "answer": "B"
            },
            {
              "qNum": 13,
              "text": "Some people join Heather's pottery class because they want to",
              "options": ["A. create an item that looks very old.", "B. find something that they are good at.", "C. make something that will outlive them."],
              "answer": "C"
            },
            {
              "qNum": 14,
              "text": "What does Heather value most about being a potter?",
              "options": ["A. its calming effect", "B. its messy nature", "C. its physical benefits"],
              "answer": "A"
            },
            {
              "qNum": 15,
              "text": "Most of the visitors to Edelman Pottery",
              "options": ["A. bring friends to join courses.", "B. have never made a pot before.", "C. try to learn techniques too quickly."],
              "answer": "B"
            },
            {
              "qNum": 16,
              "text": "Heather reminds her visitors that they should",
              "options": ["A. put on their aprons.", "B. change their clothes.", "C. take off their jewellery."],
              "answer": "C"
            }
          ]
        },

        // --- PART 2: Questions 17-20 (MCQ Multi - Choose 2) ---
        {
          "type": "mcq_multi",
          "title": "Questions 17 and 18",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO things does Heather explain about kilns?",
          "options": [
            "A. what their function is",
            "B. when they were invented",
            "C. ways of keeping them safe",
            "D. where to put one in your home",
            "E. what some people use instead of one"
          ],
          "items": [
            { "qNums": [17, 18], "answer": ["A", "E"] } // Answer Key says A E
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 19 and 20",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO points does Heather make about a potter's tools?",
          "options": [
            "A. Some are hard to hold.",
            "B. Some are worth buying.",
            "C. Some are essential items.",
            "D. Some have memorable names.",
            "E. Some are available for use by participants."
          ],
          "items": [
            { "qNums": [19, 20], "answer": ["C", "E"] }
          ]
        },

        // --- PART 3: Questions 21-26 (MCQ Multi - Choose 2) ---
        {
          "type": "mcq_multi",
          "title": "Part 3: Questions 21 and 22",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO things do the students both believe are responsible for the increase in loneliness?",
          "options": [
            "A. social media",
            "B. smaller nuclear families",
            "C. urban design",
            "D. longer lifespans",
            "E. a mobile workforce"
          ],
          "items": [
            { "qNums": [21, 22], "answer": ["C", "E"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 23 and 24",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO health risks associated with loneliness do the students agree are based on solid evidence?",
          "options": [
            "A. a weakened immune system",
            "B. dementia",
            "C. cancer",
            "D. obesity",
            "E. cardiovascular disease"
          ],
          "items": [
            { "qNums": [23, 24], "answer": ["A", "C"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 25 and 26",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO opinions do both the students express about the evolutionary theory of loneliness?",
          "options": [
            "A. It has little practical relevance.",
            "B. It needs further investigation.",
            "C. It is misleading.",
            "D. It should be more widely accepted.",
            "E. It is difficult to understand."
          ],
          "items": [
            { "qNums": [25, 26], "answer": ["A", "B"] }
          ]
        },

        // --- PART 3: Questions 27-30 (MCQ Single) ---
        {
          "type": "mcq_single",
          "title": "Questions 27-30",
          "instruction": "Choose the correct letter, A, B or C.",
          "items": [
            {
              "qNum": 27,
              "text": "When comparing loneliness to depression, the students",
              "options": ["A. doubt that there will ever be a medical cure for loneliness.", "B. claim that the link between loneliness and mental health is overstated.", "C. express frustration that loneliness is not taken more seriously."],
              "answer": "A"
            },
            {
              "qNum": 28,
              "text": "Why do the students decide to start their presentation with an example from their own experience?",
              "options": ["A. to explain how difficult loneliness can be", "B. to highlight a situation that most students will recognise", "C. to emphasise that feeling lonely is more common for men than women"],
              "answer": "B"
            },
            {
              "qNum": 29,
              "text": "The students agree that talking to strangers is a good strategy for dealing with loneliness because",
              "options": ["A. it creates a sense of belonging.", "B. it builds self-confidence.", "C. it makes people feel more positive."],
              "answer": "A"
            },
            {
              "qNum": 30,
              "text": "The students find it difficult to understand why solitude is considered to be",
              "options": ["A. similar to loneliness.", "B. necessary for mental health.", "C. an enjoyable experience."],
              "answer": "C"
            }
          ]
        },

        // --- PART 4: Questions 31-40 (Gap-fill) ---
        {
          "type": "gap",
          "title": "Part 4: Questions 31-40",
          "instruction": "Complete the notes below. Write ONE WORD ONLY for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">Reclaiming urban rivers</h3>
                <p><strong>Historical background</strong></p>
                <ul>
                    <li>Nearly all major cities were built on a river.</li>
                    <li>Rivers were traditionally used by city dwellers for transport, fishing and recreation.</li>
                    <li>Industrial development and rising populations later led to:
                        <ul>
                            <li>more sewage from houses being discharged into the river</li>
                            <li>pollution from <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="input-31"> on the river bank.</li>
                        </ul>
                    </li>
                    <li>In 1957, the River Thames in London was declared biologically <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="input-32">.</li>
                </ul>
                <p><strong>Recent improvements</strong></p>
                <ul>
                    <li>Seals and even a <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="input-33"> have been seen in the River Thames.</li>
                    <li>Riverside warehouses are converted to restaurants and <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="input-34">.</li>
                    <li>In Los Angeles, there are plans to:
                        <ul>
                            <li>build a riverside <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="input-35"></li>
                            <li>display <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="input-36"> projects.</li>
                        </ul>
                    </li>
                    <li>In Paris, <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="input-37"> are created on the sides of the river every summer.</li>
                </ul>
                <p><strong>Transport possibilities</strong></p>
                <ul>
                    <li>Over 2 billion passengers already travel by <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="input-38"> in cities round the world.</li>
                    <li>Changes in shopping habits mean the number of deliveries that are made is increasing.</li>
                    <li>Instead of road transport, goods could be transported by large freight barges and electric <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="input-39"> or, in future, by <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="input-40">.</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 31, "answer": "factories" },
            { "qNum": 32, "answer": "dead" },
            { "qNum": 33, "answer": "whale" },
            { "qNum": 34, "answer": "apartments" },
            { "qNum": 35, "answer": "park" },
            { "qNum": 36, "answer": "art" },
            { "qNum": 37, "answer": "beaches" },
            { "qNum": 38, "answer": "ferry" },
            { "qNum": 39, "answer": "bikes" },
            { "qNum": 40, "answer": "drone" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 11 - 27)
    // ==========================================================================
    reading: {
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; font-size: 1.5rem; color: #333;">The kākāpō</h3>
            <p><strong>The kākāpō is a nocturnal, flightless parrot that is critically endangered and one of New Zealand's unique treasures</strong></p>

            <p>The kākāpō, also known as the owl parrot, is a large, forest-dwelling bird, with a pale owl-like face. Up to 64 cm in length, it has predominantly yellow-green feathers, forward-facing eyes, a large grey beak, large blue feet, and relatively short wings and tail. It is the world's only flightless parrot, and is also possibly one of the world's longest-living birds, with a reported lifespan of up to 100 years.</p>

            <p>Kākāpō are solitary birds and tend to occupy the same home range for many years. They forage on the ground and climb high into trees. They often leap from trees and flap their wings, but at best manage a controlled descent to the ground. They are entirely vegetarian, with their diet including the leaves, roots and bark of trees as well as bulbs, and fern fronds. Kākāpō breed in summer and autumn, but only in years when food is plentiful. Males play no part in incubation or chick-rearing - females alone incubate eggs and feed the chicks. The 1-4 eggs are laid in soil, which is repeatedly turned over before and during incubation. The female kākāpō has to spend long periods away from the nest searching for food, which leaves the unattended eggs and chicks particularly vulnerable to predators.</p>

            <p>Before humans arrived, kākāpō were common throughout New Zealand's forests. However, this all changed with the arrival of the first Polynesian settlers about 700 years ago. For the early settlers, the flightless kākāpō was easy prey. They ate its meat and used its feathers to make soft cloaks. With them came the Polynesian dog and rat, which also preyed on kākāpō. By the time European colonisers arrived in the early 1800s, kākāpō had become confined to the central North Island and forested parts of the South Island. The fall in kākāpō numbers was accelerated by European colonisation. A great deal of habitat was lost through forest clearance, and introduced species such as deer depleted the remaining forests of food. Other predators such as cats, stoats and two more species of rat were also introduced. The kākāpō were in serious trouble.</p>

            <p>In 1894, the New Zealand government launched its first attempt to save the kākāpō. Conservationist Richard Henry led an effort to relocate several hundred of the birds to predator-free Resolution Island in Fiordland. Unfortunately, the island didn't remain predator free - stoats arrived within six years, eventually destroying the kākāpō population. By the mid-1900s, the kākāpō was practically a lost species. Only a few clung to life in the most isolated parts of New Zealand.</p>

            <p>From 1949 to 1973, the newly formed New Zealand Wildlife Service made over 60 expeditions to find kākāpō, focusing mainly on Fiordland. Six were caught, but there were no females amongst them and all but one died within a few months of captivity. In 1974, a new initiative was launched, and by 1977, 18 more kākāpō were found in Fiordland. However, there were still no females. In 1977, a large population of males was spotted in Rakiura - a large island free from stoats, ferrets and weasels. There were about 200 individuals, and in 1980 it was confirmed females were also present. These birds have been the foundation of all subsequent work in managing the species.</p>

            <p>Unfortunately, predation by feral cats on Rakiura Island led to a rapid decline in kākāpō numbers. As a result, during 1980-97, the surviving population was evacuated to three island sanctuaries: Codfish Island, Maud Island and Little Barrier Island. However, breeding success was hard to achieve. Rats were found to be a major predator of kākāpō chicks and an insufficient number of chicks survived to offset adult mortality. By 1995, although at least 12 chicks had been produced on the islands, only three had survived. The kākāpō population had dropped to 51 birds. The critical situation prompted an urgent review of kākāpō management in New Zealand.</p>

            <p>In 1996, a new Recovery Plan was launched, together with a specialist advisory group called the Kākāpō Scientific and Technical Advisory Committee and a higher amount of funding. Renewed steps were taken to control predators on the three islands. Cats were eradicated from Little Barrier Island in 1980, and possums were eradicated from Codfish Island by 1986. However, the population did not start to increase until rats were removed from all three islands, and the birds were more intensively managed. This involved moving the birds between islands, supplementary feeding of adults and rescuing and hand-raising any failing chicks. After the first five years of the Recovery Plan, the population was on target. By 2000, five new females had been produced, and the total population had grown to 62 birds. For the first time, there was cautious optimism for the future of kākāpō and by June 2020, a total of 210 birds was recorded.</p>

            <p>Today, kākāpō management continues to be guided by the kākāpō Recovery Plan. Its key goals are: minimise the loss of genetic diversity in the kākāpō population, restore or maintain sufficient habitat to accommodate the expected increase in the kākāpō population, and ensure stakeholders continue to be fully engaged in the preservation of the species.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            
            <h3 style="text-align: center;">Mark Rowe investigates attempts to reintroduce elms to Britain</h3>
            
            <p><strong>A</strong> Around 25 million elms, accounting for 90% of all elm trees in the UK, died during the 1960s and '70s of Dutch elm disease. In the aftermath, the elm, once so dominant in the British landscape, was largely forgotten. However, there's now hope the elm may be reintroduced to the countryside of central and southern England. Any reintroduction will start from a very low base. 'The impact of the disease is difficult to picture if you hadn't seen what was there before,' says Matt Elliot of the Woodland Trust. 'You look at old photographs from the 1960s and it's only then that you realise the impact [elms had] ... They were significant, large trees ... then they were gone.'</p>

            <p><strong>B</strong> The disease is caused by a fungus that blocks the elms' vascular (water, nutrient and food transport) system, causing branches to wilt and die. A first epidemic, which occurred in the 1920s, gradually died down, but in the '70s a second epidemic was triggered by shipments of elm from Canada. The wood came in the form of logs destined for boat building and its intact bark was perfect for the elm bark beetles that spread the deadly fungus. This time, the beetles carried a much more virulent strain that destroyed the vast majority of British elms.</p>

            <p><strong>C</strong> Today, elms still exist in the southern English countryside but mostly only in low hedgerows between fields. 'We have millions of small elms in hedgerows but they get targeted by the beetle as soon as they reach a certain size,' says Karen Russell, co-author of the report 'Where we are with elm'. Once the trunk of the elm reaches 10-15 centimetres or so in diameter, it becomes a perfect size for beetles to lay eggs and for the fungus to take hold. Yet mature specimens have been identified, in counties such as Cambridgeshire, that are hundreds of years old, and have mysteriously escaped the epidemic. The key, Russell says, is to identify and study those trees that have survived and work out why they stood tall when millions of others succumbed. Nevertheless, opportunities are limited as the number of these mature survivors is relatively small. 'What are the reasons for their survival?' asks Russell. 'Avoidance, tolerance, resistance? We don't know where the balance lies between the three. I don't see how it can be entirely down to luck.'</p>

            <p><strong>D</strong> For centuries, elm ran a close second to oak as the hardwood tree of choice in Britain and was in many instances the most prominent tree in the landscape. Not only was elm common in European forests, it became a key component of birch, ash and hazel woodlands. The use of elm is thought to go back to the Bronze Age, when it was widely used for tools. Elm was also the preferred material for shields and early swords. In the 18th century, it was planted more widely and its wood was used for items such as storage crates and flooring. It was also suitable for items that experienced high levels of impact and was used to build the keel of the 19th-century sailing ship Cutty Sark as well as mining equipment.</p>

            <p><strong>E</strong> Given how ingrained elm is in British culture, it's unsurprising the tree has many advocates. Amongst them is Peter Bourne of the National Elm Collection in Brighton. 'I saw Dutch elm disease unfold as a small boy,' he says. 'The elm seemed to be part of rural England, but I remember watching trees just lose their leaves and that really stayed with me.' Today, the city of Brighton's elms total about 17,000. Local factors appear to have contributed to their survival. Strong winds from the sea make it difficult for the determined elm bark beetle to attack this coastal city's elm population. However, the situation is precarious. 'The beetles can just march in if we're not careful, as the threat is right on our doorstep,' says Bourne.</p>

            <p><strong>F</strong> Any prospect of the elm returning relies heavily on trees being either resistant to, or tolerant of, the disease. This means a widespread reintroduction would involve existing or new hybrid strains derived from resistant, generally non-native elm species. A new generation of seedlings have been bred and tested to see if they can withstand the fungus by cutting a small slit on the bark and injecting a tiny amount of the pathogen. 'The effects are very quick,' says Russell. 'You return in four to six weeks and trees that are resistant show no symptoms, whereas those that are susceptible show leaf loss and may even have died completely.'</p>

            <p><strong>G</strong> All of this raises questions of social acceptance, acknowledges Russell. 'If we're putting elm back into the landscape, a small element of it is not native - are we bothered about that?' For her, the environmental case for reintroducing elm is strong. 'They will host wildlife, which is a good thing.' Others are more wary. 'On the face of it, it seems like a good idea,' says Elliot. The problem, he suggests, is that, 'You're replacing a native species with a horticultural analogue. You're effectively cloning.' There's also the risk of introducing new diseases. Rather than plant new elms, the Woodland Trust emphasises providing space to those elms that have survived independently. 'Sometimes the best thing you can do is just give nature time to recover over time, you might get resistance,' says Elliot.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            
            <h3 style="text-align: center;">How stress affects our judgement</h3>
            <p>Some of the most important decisions of our lives occur while we're feeling stressed and anxious. From medical decisions to financial and professional ones, we are all sometimes required to weigh up information under stressful conditions. But do we become better or worse at processing and using information under such circumstances?</p>

            <p>My colleague and I, both neuroscientists, wanted to investigate how the mind operates under stress, so we visited some local fire stations. Firefighters' workdays vary quite a bit. Some are pretty relaxed; they'll spend their time washing the truck, cleaning equipment, cooking meals and reading. Other days can be hectic, with numerous life-threatening incidents to attend to; they'll enter burning homes to rescue trapped residents, and assist with medical emergencies. These ups and downs presented the perfect setting for an experiment on how people's ability to use information changes when they feel under pressure.</p>

            <p>We found that perceived threat acted as a trigger for a stress reaction that made the task of processing information easier for the firefighters - but only as long as it conveyed bad news. This is how we arrived at these results. We asked the firefighters to estimate their likelihood of experiencing 40 different adverse events in their life, such as being involved in an accident or becoming a victim of card fraud. We then gave them either good news (that their likelihood of experiencing these events was lower than they'd thought) or bad news (that it was higher) and asked them to provide new estimates.</p>

            <p>People are normally quite optimistic they will ignore bad news and embrace the good. This is what happened when the firefighters were relaxed; but when they were under stress, a different pattern emerged. Under these conditions, they became hyper-vigilant to bad news, even when it had nothing to do with their job (such as learning that the likelihood of card fraud was higher than they'd thought), and altered their beliefs in response. In contrast, stress didn't change how they responded to good news (such as learning that the likelihood of card fraud was lower than they'd thought).</p>

            <p>Back in our lab, we observed the same pattern in students who were told they had to give a surprise public speech, which would be judged by a panel, recorded and posted online. Sure enough, their cortisol levels spiked, their heart rates went up and they suddenly became better at processing unrelated, yet alarming, information about rates of disease and violence.</p>

            <p>When we experience stressful events, a physiological change is triggered that causes us to take in warnings and focus on what might go wrong. Brain imaging reveals that this 'switch' is related to a sudden boost in a neural signal important for learning, specifically in response to unexpected warning signs, such as faces expressing fear. Such neural engineering could have helped prehistoric humans to survive. When our ancestors found themselves surrounded by hungry animals, they would have benefited from an increased ability to learn about hazards. In a safe environment, however, it would have been wasteful to be on high alert constantly. So, a neural switch that automatically increases or decreases our ability to process warnings in response to changes in our environment could have been useful. In fact, people with clinical depression and anxiety seem unable to switch away from a state in which they absorb all the negative messages around them.</p>

            <p>It is also important to realise that stress travels rapidly from one person to the next. If a co-worker is stressed, we are more likely to tense up and feel stressed ourselves. We don't even need to be in the same room with someone for their emotions to influence our behaviour. Studies show that if we observe positive feeds on social media, such as images of a pink sunset, we are more likely to post uplifting messages ourselves. If we observe negative posts, such as complaints about a long queue at the coffee shop, we will in turn create more negative posts.</p>

            <p>In some ways, many of us now live as if we are in danger, constantly ready to tackle demanding emails and text messages, and respond to news alerts and comments on social media. Repeatedly checking your phone, according to a survey conducted by the American Psychological Association, is related to stress. In other words, a pre-programmed physiological reaction, which evolution has equipped us with to help us avoid famished predators, is now being triggered by an online post. Social media posting, according to one study, raises your pulse, makes you sweat, and enlarges your pupils more than most daily activities.</p>

            <p>The fact that stress increases the likelihood that we will focus more on alarming messages, together with the fact that it spreads extremely rapidly, can create collective fear that is not always justified. After a stressful public event, such as a natural disaster or major financial crash, there is often a wave of alarming information in traditional and social media, which individuals become very aware of. But that has the effect of exaggerating existing danger. And so, a reliable pattern emerges stress is triggered, spreading from one person to the next, which temporarily enhances the likelihood that people will take in negative reports, which increases stress further. As a result, trips are cancelled, even if the disaster took place across the globe; stocks are sold, even when holding on is the best thing to do.</p>

            <p>The good news, however, is that positive emotions, such as hope, are contagious too, and are powerful in inducing people to act to find solutions. Being aware of the close relationship between people's emotional state and how they process information can help us frame our messages more effectively and become conscientious agents of change.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          "type": "tfng",
          "title": "Questions 1-6",
          "instruction": "Do the following statements agree with the information given in Reading Passage 1?",
          "items": [
            { "qNum": 1, "text": "There are other parrots that share the kākāpō's inability to fly.", "answer": "FALSE" },
            { "qNum": 2, "text": "Adult kākāpō produce chicks every year.", "answer": "FALSE" },
            { "qNum": 3, "text": "Adult male kākāpō bring food back to nesting females.", "answer": "FALSE" },
            { "qNum": 4, "text": "The Polynesian rat was a greater threat to the kākāpō than Polynesian settlers.", "answer": "NOT GIVEN" },
            { "qNum": 5, "text": "Kākāpō were transferred from Rakiura Island to other locations because they were at risk from feral cats.", "answer": "TRUE" },
            { "qNum": 6, "text": "One Recovery Plan initiative that helped increase the kākāpō population size was caring for struggling young birds.", "answer": "TRUE" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 7-13",
          "instruction": "Complete the notes below. Choose ONE WORD AND/OR A NUMBER from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">A type of parrot: New Zealand's kākāpō</h3>
                <p><strong>Habitat and Diet</strong></p>
                <ul>
                    <li>diet consists of fern fronds, various parts of a tree and <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7"></li>
                    <li>nests are created in <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8"> where eggs are laid.</li>
                </ul>
                <p><strong>Arrival of Polynesian settlers</strong></p>
                <ul>
                    <li>the <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9"> of the kākāpō were used to make clothes.</li>
                    <li><span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10"> were an animal which they introduced that ate the kākāpō's food sources.</li>
                </ul>
                <p><strong>Protecting kākāpō</strong></p>
                <ul>
                    <li>a definite sighting of female kākāpō on Rakiura Island was reported in the year <span class="q-badge-inline">11</span><input type="text" class="gap-input" data-qnum="11" id="q-11"></li>
                    <li>the Recovery Plan included an increase in <span class="q-badge-inline">12</span><input type="text" class="gap-input" data-qnum="12" id="q-12"></li>
                    <li>a current goal of the Recovery Plan is to maintain the involvement of <span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="q-13"> in kākāpō protection.</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 7, "answer": "bulbs" }, 
            { "qNum": 8, "answer": "soil" },
            { "qNum": 9, "answer": "feathers" }, 
            { "qNum": 10, "answer": "deer" },
            { "qNum": 11, "answer": "1980" }, 
            { "qNum": 12, "answer": "funding" },
            { "qNum": 13, "answer": "stakeholders" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          "type": "matching_info",
          "title": "Questions 14-18",
          "instruction": "Reading Passage 2 has seven sections, A-G. Which section contains the following information?",
          "options": ["A", "B", "C", "D", "E", "F", "G"],
          "items": [
            { "qNum": 14, "text": "reference to the research problems that arise from there being only a few surviving large elms", "answer": "C" },
            { "qNum": 15, "text": "details of a difference of opinion about the value of reintroducing elms to Britain", "answer": "G" },
            { "qNum": 16, "text": "reference to how Dutch elm disease was brought into Britain", "answer": "B" },
            { "qNum": 17, "text": "a description of the conditions that have enabled a location in Britain to escape Dutch elm disease", "answer": "E" },
            { "qNum": 18, "text": "reference to the stage at which young elms become vulnerable to Dutch elm disease", "answer": "C" }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 19-23",
          "instruction": "Match each statement with the correct person, A, B, or C.",
          "options": ["A. Matt Elliot", "B. Karen Russell", "C. Peter Bourne"],
          "items": [
            { "qNum": 19, "text": "If a tree gets infected with Dutch elm disease, the damage rapidly becomes visible.", "answer": "B" },
            { "qNum": 20, "text": "It may be better to wait and see if the mature elms that have survived continue to flourish.", "answer": "A" },
            { "qNum": 21, "text": "There must be an explanation for the survival of some mature elms.", "answer": "B" },
            { "qNum": 22, "text": "We need to be aware that insects carrying Dutch elm disease are not very far away.", "answer": "C" },
            { "qNum": 23, "text": "You understand the effect Dutch elm disease has had when you see evidence of how prominent the tree once was.", "answer": "A" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 24-26",
          "instruction": "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">Uses of a popular tree</h3>
                <p>For hundreds of years, the only tree that was more popular in Britain than elm was <span class="q-badge-inline">24</span><input type="text" class="gap-input" data-qnum="24" id="q-24">. Starting in the Bronze Age, many tools were made from elm and people also used it to make weapons. In the 18th century, it was grown to provide wood for boxes and <span class="q-badge-inline">25</span><input type="text" class="gap-input" data-qnum="25" id="q-25">. Due to its strength, elm was often used for mining equipment and the Cutty Sark's <span class="q-badge-inline">26</span><input type="text" class="gap-input" data-qnum="26" id="q-26"> was also constructed from elm.</p>
            </div>
          `,
          "items": [
            { "qNum": 24, "answer": "oak" },
            { "qNum": 25, "answer": "flooring" },
            { "qNum": 26, "answer": "keel" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          "type": "mcq_single",
          "title": "Questions 27-30",
          "instruction": "Choose the correct letter, A, B, C or D.",
          "items": [
            {
              "qNum": 27,
              "text": "In the first paragraph, the writer introduces the topic of the text by",
              "options": ["A. defining some commonly used terms.", "B. questioning a widely held assumption.", "C. mentioning a challenge faced by everyone.", "D. specifying a situation which makes us most anxious."],
              "answer": "C"
            },
            {
              "qNum": 28,
              "text": "What point does the writer make about firefighters in the second paragraph?",
              "options": ["A. The regular changes of stress levels in their working lives make them ideal study subjects.", "B. The strategies they use to handle stress are of particular interest to researchers.", "C. The stressful nature of their job is typical of many public service professions.", "D. Their personalities make them especially well-suited to working under stress."],
              "answer": "A"
            },
            {
              "qNum": 29,
              "text": "What is the writer doing in the fourth paragraph?",
              "options": ["A. explaining their findings", "B. justifying their approach", "C. setting out their objectives", "D. describing their methodology"],
              "answer": "D"
            },
            {
              "qNum": 30,
              "text": "In the seventh paragraph, the writer describes a mechanism in the brain which",
              "options": ["A. enables people to respond more quickly to stressful situations.", "B. results in increased ability to control our levels of anxiety.", "C. produces heightened sensitivity to indications of external threats.", "D. is activated when there is a need to communicate a sense of danger."],
              "answer": "C"
            }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 31-35",
          "instruction": "Complete each sentence with the correct ending, A-G, below.",
          "options": [
            "A. made them feel optimistic.",
            "B. took relatively little notice of bad news.",
            "C. responded to negative and positive information in the same way.",
            "D. were feeling under stress.",
            "E. put them in a stressful situation.",
            "F. behaved in a similar manner, regardless of the circumstances.",
            "G. thought it more likely that they would experience something bad."
          ],
          "items": [
            { "qNum": 31, "text": "At times when they were relaxed, the firefighters usually", "answer": "B" },
            { "qNum": 32, "text": "The researchers noted that when the firefighters were stressed, they", "answer": "G" },
            { "qNum": 33, "text": "When the firefighters were told good news, they always", "answer": "F" },
            { "qNum": 34, "text": "The students' cortisol levels and heart rates were affected when the researchers", "answer": "E" },
            { "qNum": 35, "text": "In both experiments, negative information was processed better when the subjects", "answer": "D" }
          ]
        },
        {
          "type": "ynng",
          "title": "Questions 36-40",
          "instruction": "Do the following statements agree with the information given in Reading Passage 3?",
          "items": [
            { "qNum": 36, "text": "The tone of the content we post on social media tends to reflect the nature of the posts in our feeds.", "answer": "YES" },
            { "qNum": 37, "text": "Phones have a greater impact on our stress levels than other electronic media devices.", "answer": "NOT GIVEN" },
            { "qNum": 38, "text": "The more we read about a stressful public event on social media, the less able we are to take the information in.", "answer": "NO" },
            { "qNum": 39, "text": "Stress created by social media posts can lead us to take unnecessary precautions.", "answer": "YES" },
            { "qNum": 40, "text": "Our tendency to be affected by other people's moods can be used in a positive way.", "answer": "YES" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING
    // ==========================================================================
    writing: {
      task1: {
        title: "Writing Task 1",
        instruction: "You should spend about 20 minutes on this task.",
        // Dùng placeholder vì không thể trích xuất ảnh trực tiếp từ PDF
        image: "https://i.postimg.cc/yNmC7Mht/chart.jpg", 
        prompt: `The first table below shows changes in the total population of New York City from 1800 to 2000. The second and third tables show changes in the population of the five districts of the city (Manhattan, Brooklyn, Bronx, Queens, Staten Island) over the same period.
        
        Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`
        
      },
      task2: {
        title: "Writing Task 2",
        instruction: "You should spend about 40 minutes on this task.",
        prompt: `Access to clean water is a basic human right. Therefore, every home should have a water supply that is provided free of charge.
        
        Do you agree or disagree?
        
        Give reasons for your answer and include any relevant examples from your own knowledge or experience.`
      }
    }
  }
};