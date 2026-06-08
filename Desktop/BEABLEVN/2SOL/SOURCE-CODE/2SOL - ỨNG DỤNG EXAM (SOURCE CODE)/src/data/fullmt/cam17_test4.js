// src/data/cam18_test1.js

export const cam17_test4 = {
  id: "mt16",
  category: "full",
  testName: "MOCK TEST 16",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 75 - 80 PDF) - Đáp án trang 125
    // ==========================================================================
    listening: {
      audioSrc: "https://dl.dropboxusercontent.com/scl/fi/l4fk30q7mjw5eecf2f69c/mt16.mp3?rlkey=yvku6xbeq154x0sah7ltooxq3", // Bạn cần đảm bảo có file mp3 này
      timeLimit: 1584,
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 16 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1: Questions 1-10 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-10",
          instruction: "Complete the notes below. Write ONE WORD for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
                <h3 style="text-align:center; color:#2B6830; margin-top:0;">Easy Life Cleaning Services</h3>
                
                <p><strong>Basic cleaning package offered</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Cleaning all surfaces</li>
                    <li>Cleaning the <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"></li>
                    <li>Cleaning shower, sinks, toilet etc.</li>
                </ul>

                <p><strong>Additional services agreed</strong></p>
                <p><strong>Every week</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Cleaning the <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2"></li>
                    <li>Ironing clothes - <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"> only</li>
                </ul>

                <p><strong>Every month</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Cleaning all the <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"> from the inside</li>
                    <li>Washing down the <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"></li>
                </ul>

                <p><strong>Other possibilities</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>They can organise a plumber or an <span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"> if necessary.</li>
                    <li>A special cleaning service is available for customers who are allergic to <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"></li>
                </ul>

                <p><strong>Information on the cleaners</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Before being hired, all cleaners have a background check carried out by the <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8"></li>
                    <li>References are required.</li>
                    <li>All cleaners are given <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9"> for two weeks.</li>
                    <li>Customers send a <span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10"> after each visit.</li>
                    <li>Usually, each customer has one regular cleaner.</li>
                </ul>
            </div>
          `,
          items: [
            { qNum: 1, answer: ["floor", "floors"] },
            { qNum: 2, answer: "fridge" },
            { qNum: 3, answer: "shirts" },
            { qNum: 4, answer: "windows" },
            { qNum: 5, answer: "balcony" },
            { qNum: 6, answer: "electrician" },
            { qNum: 7, answer: "dust" },
            { qNum: 8, answer: "police" },
            { qNum: 9, answer: "training" },
            { qNum: 10, answer: "review" }
          ]
        },

        // --- PART 2: Questions 11-20 ---
        {
          type: "mcq_single",
          title: "Part 2: Questions 11-14",
          instruction: "Choose the correct letter, A, B or C.",
          items: [
            {
              qNum: 11,
              text: "Many hotel managers are unaware that their staff often leave because of",
              options: ["A. a lack of training.", "B. long hours.", "C. low pay."],
              answer: "A"
            },
            {
              qNum: 12,
              text: "What is the impact of high staff turnover on managers?",
              options: ["A. an increased workload", "B. low morale", "C. an inability to meet targets"],
              answer: "A"
            },
            {
              qNum: 13,
              text: "What mistake should managers always avoid?",
              options: ["A. failing to treat staff equally", "B. reorganising shifts without warning", "C. neglecting to have enough staff during busy periods"],
              answer: "A"
            },
            {
              qNum: 14,
              text: "What unexpected benefit did Dunwich Hotel notice after improving staff retention rates?",
              options: ["A. a fall in customer complaints", "B. an increase in loyalty club membership", "C. a rise in spending per customer"],
              answer: "C"
            }
          ]
        },
        {
          type: "matching",
          title: "Questions 15-20",
          instruction: "Which way of reducing staff turnover was used in each of the following hotels? Choose SIX answers from the box.",
          options: [
            "A. improving relationships and teamwork",
            "B. offering incentives and financial benefits",
            "C. providing career opportunities"
          ],
          items: [
            { qNum: 15, text: "The Sun Club", answer: "A" },
            { qNum: 16, text: "The Portland", answer: "C" },
            { qNum: 17, text: "Bluewater Hotels", answer: "B" },
            { qNum: 18, text: "Pentlow Hotels", answer: "C" },
            { qNum: 19, text: "Green Planet", answer: "B" },
            { qNum: 20, text: "The Amesbury", answer: "A" }
          ]
        },

        // --- PART 3: Questions 21-30 ---
        {
          type: "mcq_multi",
          title: "Part 3: Questions 21-22",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO points do Thomas and Jeanne make about Thomas's sporting activities at school?",
          options: [
            "A. He should have felt more positive about them.",
            "B. The training was too challenging for him.",
            "C. He could have worked harder at them.",
            "D. His parents were disappointed in him.",
            "E. His fellow students admired him."
          ],
          items: [
            { qNums: [21, 22], answer: ["C", "E"] } // Key: 21&22 IN EITHER ORDER: C, E
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 23-24",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO feelings did Thomas experience when he was in Kenya?",
          options: [
            "A. disbelief",
            "B. relief",
            "C. stress",
            "D. gratitude",
            "E. homesickness"
          ],
          items: [
            { qNums: [23, 24], answer: ["A", "D"] } // Key: 23&24 IN EITHER ORDER: A, D
          ]
        },
        {
          type: "matching",
          title: "Questions 25-30",
          instruction: "What comment do the students make about the development of each of the following items of sporting equipment? Choose SIX answers from the box.",
          options: [
            "A. It could cause excessive sweating.",
            "B. The material was being mass produced for another purpose.",
            "C. People often needed to make their own.",
            "D. It often had to be replaced.",
            "E. The material was expensive.",
            "F. It was unpopular among spectators.",
            "G. It caused injuries.",
            "H. No one using it liked it at first."
          ],
          items: [
            { qNum: 25, text: "the table tennis bat", answer: "B" },
            { qNum: 26, text: "the cricket helmet", answer: "F" },
            { qNum: 27, text: "the cycle helmet", answer: "A" },
            { qNum: 28, text: "the golf club", answer: "D" },
            { qNum: 29, text: "the hockey stick", answer: "C" },
            { qNum: 30, text: "the football", answer: "G" }
          ]
        },

        // --- PART 4: Questions 31-40 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-40",
          instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">Maple syrup</h3>
              
              <p><strong>What is maple syrup?</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>made from the sap of the maple tree</li>
                <li>added to food or used in cooking</li>
                <li>colour described as <span class="q-badge-inline">31</span><input class="gap-input" data-qnum="31"></li>
                <li>very <span class="q-badge-inline">32</span><input class="gap-input" data-qnum="32"> compared to refined sugar</li>
              </ul>

              <p><strong>The maple tree</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>has many species</li>
                <li>needs moist soil but does not need fertiliser as well</li>
                <li>needs sunny days and cool nights</li>
                <li>maple leaf has been on the Canadian flag since 1964</li>
                <li>best growing conditions and <span class="q-badge-inline">33</span><input class="gap-input" data-qnum="33"> are in Canada and North America</li>
              </ul>

              <p><strong>Early maple sugar producers</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>made holes in the tree trunks</li>
                <li>used hot <span class="q-badge-inline">34</span><input class="gap-input" data-qnum="34"> to heat the sap</li>
                <li>used tree bark to make containers for collection</li>
                <li>sweetened food and drink with sugar</li>
              </ul>

              <p><strong>Today's maple syrup</strong></p>
              <p><strong>The trees</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>Tree trunks may not have the correct <span class="q-badge-inline">35</span><input class="gap-input" data-qnum="35"> until they have been growing for 40 years.</li>
                <li>The changing temperature and movement of water within the tree produces the sap.</li>
              </ul>

              <p><strong>The production</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>A tap is drilled into the trunk and a <span class="q-badge-inline">36</span><input class="gap-input" data-qnum="36"> carries the sap into a bucket.</li>
                <li>Large pans of sap called evaporators are heated by means of a <span class="q-badge-inline">37</span><input class="gap-input" data-qnum="37">.</li>
                <li>A lot of <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38"> is produced during the evaporation process.</li>
                <li>'Sugar sand' is removed because it makes the syrup look <span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39"> and affects the taste.</li>
                <li>The syrup is ready for use.</li>
                <li>A huge quantity of sap is needed to make a <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40"> of maple syrup.</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "golden" },
            { qNum: 32, answer: "healthy" },
            { qNum: 33, answer: "climate" },
            { qNum: 34, answer: ["rocks", "rock"] },
            { qNum: 35, answer: "diameter" },
            { qNum: 36, answer: "tube" },
            { qNum: 37, answer: "fire" },
            { qNum: 38, answer: "steam" },
            { qNum: 39, answer: "cloudy" },
            { qNum: 40, answer: ["litre", "liter"] }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 81 - 92 PDF) - Đáp án trang 126
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">Bats to the rescue</h3>
            <p style="text-align: center; font-style: italic;">How Madagascar's bats are helping to save the rainforest</p>
            
            <p>There are few places in the world where relations between agriculture and conservation are more strained. Madagascar's forests are being converted to agricultural land at a rate of one percent every year. Much of this destruction is fuelled by the cultivation of the country's main staple crop: rice. And a key reason for this destruction is that insect pests are destroying vast quantities of what is grown by local subsistence farmers, leading them to clear forest to create new paddy fields. The result is devastating habitat and biodiversity loss on the island, but not all species are suffering. In fact, some of the island's insectivorous bats are currently thriving and this has important implications for farmers and conservationists alike.</p>
            
            <p>Enter University of Cambridge zoologist Ricardo Rocha. He's passionate about conservation, and bats. More specifically, he's interested in how bats are responding to human activity and deforestation in particular. Rocha's new study shows that several species of bats are giving Madagascar's rice farmers a vital pest control service by feasting on plagues of insects. And this, he believes, can ease the financial pressure on farmers to turn forest into fields.</p>

            <p>Bats comprise roughly one-fifth of all mammal species in Madagascar and thirty-six recorded bat species are native to the island, making it one of the most important regions for conservation of this animal group anywhere in the world. Co-leading an international team of scientists, Rocha found that several species of indigenous bats are taking advantage of habitat modification to hunt insects swarming above the country's rice fields. They include the Malagasy mouse-eared bat, Major's long-fingered bat, the Malagasy white-bellied free-tailed bat and Peters' wrinkle-lipped bat.</p>

            <p>'These winner species are providing a valuable free service to Madagascar as biological pest suppressors,' says Rocha. 'We found that six species of bat are preying on rice pests, including the paddy swarming caterpillar and grass webworm. The damage which these insects cause puts the island's farmers under huge financial pressure and that encourages deforestation.'</p>

            <p>The study, now published in the journal Agriculture, Ecosystems and Environment, set out to investigate the feeding activity of insectivorous bats in the farmland bordering the Ranomafana National Park in the southeast of the country.</p>

            <p>Rocha and his team used state-of-the-art ultrasonic recorders to record over a thousand bat 'feeding buzzes' (echolocation sequences used by bats to target their prey) at 54 sites, in order to identify the favourite feeding spots of the bats. They next used DNA barcoding techniques to analyse droppings collected from bats at the different sites.</p>

            <p>The recordings revealed that bat activity over rice fields was much higher than it was in continuous forest - seven times higher over rice fields which were on flat ground, and sixteen times higher over fields on the sides of hills - leaving no doubt that the animals are preferentially foraging in these man-made ecosystems. The researchers suggest that the bats favour these fields because lack of water and nutrient run-off make these crops more susceptible to insect pest infestations. DNA analysis showed that all six species of bat had fed on economically important insect pests. While the findings indicated that rice farming benefits most from the bats, the scientists also found indications that the bats were consuming pests of other crops, including the black twig borer (which infests coffee plants), the sugarcane cicada, the macadamia nut-borer, and the sober tabby (a pest of citrus fruits).</p>

            <p>'The effectiveness of bats as pest controllers has already been proven in the USA and Catalonia,' said co-author James Kemp, from the University of Lisbon. 'But our study is the first to show this happening in Madagascar, where the stakes for both farmers and conservationists are so high.'</p>

            <p>Local people may have a further reason to be grateful to their bats. While the animal is often associated with spreading disease, Rocha and his team found evidence that Malagasy bats feed not just on crop pests but also on mosquitoes - carriers of malaria, Rift Valley fever virus and elephantiasis - as well as blackflies, which spread river blindness.</p>

            <p>Rocha points out that the relationship is complicated. When food is scarce, bats become a crucial source of protein for local people. Even the children will hunt them. And as well as roosting in trees, the bats sometimes roost in buildings, but are not welcomed there because they make them unclean. At the same time, however, they are associated with sacred caves and the ancestors, so they can be viewed as beings between worlds, which makes them very significant in the culture of the people. And one potential problem is that while these bats are benefiting from farming, at the same time deforestation is reducing the places where they can roost, which could have long-term effects on their numbers. Rocha says, 'With the right help, we hope that farmers can promote this mutually beneficial relationship by installing bat houses.'</p>

            <p>Rocha and his colleagues believe that maximising bat populations can help to boost crop yields and promote sustainable livelihoods. The team is now calling for further research to quantify this contribution. 'I'm very optimistic,' says Rocha. 'If we give nature a hand, we can speed up the process of regeneration.'</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">Does education fuel economic growth?</h3>

            <p><strong>A</strong> Over the last decade, a huge database about the lives of southwest German villagers between 1600 and 1900 has been compiled by a team led by Professor Sheilagh Ogilvie at Cambridge University's Faculty of Economics. It includes court records, guild ledgers, parish registers, village censuses, tax lists and - the most recent addition - 9,000 handwritten inventories listing over a million personal possessions belonging to ordinary women and men across three centuries. Ogilvie, who discovered the inventories in the archives of two German communities 30 years ago, believes they may hold the answer to a conundrum that has long puzzled economists: the lack of evidence for a causal link between education and a country's economic growth.</p>

            <p><strong>B</strong> As Ogilvie explains, 'Education helps us to work more productively, invent better technology, and earn more surely it must be critical for economic growth? But, if you look back through history, there's no evidence that having a high literacy rate made a country industrialise earlier.' Between 1600 and 1900, England had only mediocre literacy rates by European standards, yet its economy grew fast and it was the first country to industrialise. During this period, Germany and Scandinavia had excellent literacy rates, but their economies grew slowly and they industrialised late. 'Modern cross-country analyses have also struggled to find evidence that education causes economic growth, even though there is plenty of evidence that growth increases education,' she adds.</p>

            <p><strong>C</strong> In the handwritten inventories that Ogilvie is analysing are the belongings of women and men at marriage, remarriage and death. From badger skins to Bibles, sewing machines to scarlet bodices - the villagers' entire worldly goods are included. Inventories of agricultural equipment and craft tools reveal economic activities; ownership of books and education-related objects like pens and slates suggests how people learned. In addition, the tax lists included in the database record the value of farms, workshops, assets and debts; signatures and people's estimates of their age indicate literacy and numeracy levels; and court records reveal obstacles (such as the activities of the guilds*) that stifled industry.</p>

            <p><strong>D</strong> Ogilvie and her team has been building the vast database of material possessions on top of their full demographic reconstruction of the people who lived in these two German communities. 'We can follow the same people and their descendants across 300 years of educational and economic change,' she says. Individual lives have unfolded before their eyes. Stories like that of the 24-year-olds Ana Regina and Magdalena Riethmüllerin, who were chastised in 1707 for reading books in church instead of listening to the sermon. 'This tells us they were continuing to develop their reading skills at least a decade after leaving school,' explains Ogilvie.</p>

            <p><strong>E</strong> The database also reveals the case of Juliana Schweickherdt, who was reprimanded in 1752 by the local weavers' guild for 'weaving cloth and combing wool, counter to the guild ordinance'. When Juliana continued taking jobs reserved for male guild members, she was summoned before the guild court and told to pay a fine equivalent to one third of a servant's annual wage. It was a small act of defiance by today's standards, but it reflects a time when laws in Germany and elsewhere regulated people's access to labour markets. The dominance of guilds not only prevented people from using their skills, but also held back even the simplest industrial innovation.</p>

            <p><strong>F</strong> The data-gathering phase of the project has been completed and now, according to Ogilvie, it is time 'to ask the big questions'. One way to look at whether education causes economic growth is to 'hold wealth constant'. This involves following the lives of different people with the same level of wealth over a period of time. If wealth is constant, it is possible to discover whether education was, for example, linked to the cultivation of new crops, or to the adoption of industrial innovations like sewing machines. The team will also ask what aspect of education helped people engage more with productive and innovative activities. Was it, for instance, literacy, numeracy, book ownership, years of schooling? Was there a threshold level a tipping point - that needed to be reached to affect economic performance?</p>

            <p><strong>G</strong> Ogilvie hopes to start finding answers to these questions over the next few years. One thing is already clear, she says: the relationship between education and economic growth is far from straightforward. 'German-speaking central Europe is an excellent laboratory for testing theories of economic growth,' she explains. Between 1600 and 1900, literacy rates and book ownership were high and yet the region remained poor. It was also the case that local guilds and merchant associations were extremely powerful and legislated against anything that undermined their monopolies. In villages throughout the region, guilds blocked labour migration and resisted changes that might reduce their influence.</p>

            <p><strong>H</strong> 'Early findings suggest that the potential benefits of education for the economy can be held back by other barriers, and this has implications for today,' says Ogilvie. 'Huge amounts are spent improving education in developing countries, but this spending can fail to deliver economic growth if restrictions block people especially women and the poor - from using their education in economically productive ways. If economic institutions are poorly set up, for instance, education can't lead to growth.'</p>
            <p style="font-size: 0.8em;">* guild: an association of artisans or merchants which oversees the practice of their craft or trade in a particular area</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <h3 style="text-align: center;">Timur Gareyev – blindfold chess champion</h3>
            <p style="text-align:center; font-style:italic;">Next month, a chess player named Timur Gareyev will take on nearly 50 opponents at once. But that is not the hard part. While his challengers will play the games as normal, Gareyev himself will be blindfolded.</p>

            <p><strong>A</strong> Even by world record standards, it sets a high bar for human performance. The 28-year-old already stands out in the rarefied world of blindfold chess. He has a fondness for bright clothes and unusual hairstyles, and he gets his kicks from the adventure sport of BASE jumping. He has already proved himself a strong chess player, too. In a 10-hour chess marathon in 2013, Gareyev played 33 games in his head simultaneously. He won 29 and lost none. The skill has become his brand: he calls himself the Blindfold King.</p>

            <p><strong>B</strong> But Gareyev's prowess has drawn interest from beyond the chess-playing community. In the hope of understanding how he and others like him can perform such mental feats, researchers at the University of California in Los Angeles (UCLA) called him in for tests. They now have their first results. 'The ability to play a game of chess with your eyes closed is not a far reach for most accomplished players,' said Jesse Rissman, who runs a memory lab at UCLA. 'But the thing that's so remarkable about Timur and a few other individuals is the number of games they can keep active at once. To me it is simply astonishing.'</p>

            <p><strong>C</strong> Gareyev learned to play chess in his native Uzbekistan when he was six years old. Tutored by his grandfather, he entered his first tournament aged eight and soon became obsessed with competitions. At 16, he was crowned Asia's youngest ever chess grandmaster. He moved to the US soon after, and as a student helped his university win its first national chess championship. In 2013, Gareyev was ranked the third best chess player in the US.</p>

            <p><strong>D</strong> To the uninitiated, blindfold chess seems to call for superhuman skill. But displays of the feat go back centuries. The first recorded game in Europe was played in 13th-century Florence. In 1947, the Argentinian grandmaster Miguel Najdorf played 45 simultaneous games in his mind, winning 39 in the 24-hour session.</p>

            <p><strong>E</strong> Accomplished players can develop the skill of playing blind even without realising it. The nature of the game is to run through possible moves in the mind to see how they play out. From this, regular players develop a memory for the patterns the pieces make, the defences and attacks. 'You recreate it in your mind,' said Gareyev. 'A lot of players are capable of doing what I'm doing.' The real mental challenge comes from playing multiple games at once in the head. Not only must the positions of each piece on every board be memorised, they must be recalled faithfully when needed, updated with each player's moves, and then reliably stored again, so the brain can move on to the next board.</p>

            <p><strong>F</strong> First moves can be tough to remember because they are fairly uninteresting. But the ends of games are taxing too, as exhaustion sets in. When Gareyev is tired, his recall can get patchy. He sometimes makes moves based on only a fragmented memory of the pieces' positions.</p>

            <p><strong>G</strong> The scientists first had Gareyev perform some standard memory tests. These assessed his ability to hold numbers, pictures and words in mind. One classic test measures how many numbers a person can repeat, both forwards and backwards, soon after hearing them. Most people manage about seven. 'He was not exceptional on any of these standard tests,' said Rissman. 'We didn't find anything other than playing chess that he seems to be supremely gifted at.'</p>

            <p><strong>H</strong> But next came the brain scans. With Gareyev lying down in the machine, Rissman looked at how well connected the various regions of the chess player's brain were. Though the results are tentative and as yet unpublished, the scans found much greater than average communication between parts of Gareyev's brain that make up what is called the frontoparietal control network. Of 63 people scanned alongside the chess player, only one or two scored more highly on the measure. 'You use this network in almost any complex task. It helps you to allocate attention, keep rules in mind, and work out whether you should be responding or not,' said Rissman.</p>

            <p><strong>I</strong> It was not the only hint of something special in Gareyev's brain. The scans also suggest that Gareyev's visual network is more highly connected to other brain parts than usual. Initial results suggest that the areas of his brain that process visual images - such as chess boards - may have stronger links to other brain regions, and so be more powerful than normal. While the analyses are not finalised yet, they may hold the first clues to Gareyev's extraordinary ability.</p>

            <p><strong>J</strong> For the world record attempt, Gareyev hopes to play 47 blindfold games at once in about 16 hours. He will need to win 80% to claim the title. 'I don't worry too much about the winning percentage, that's never been an issue for me,' he said. 'The most important part of blindfold chess for me is that I have found the one thing that I can fully dedicate myself to. I miss having an obsession.'</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          type: "tfng",
          title: "Questions 1-6",
          instruction: "Do the following statements agree with the information given in Reading Passage 1?",
          items: [
            { qNum: 1, text: "Many Madagascan forests are being destroyed by attacks from insects.", answer: "FALSE" },
            { qNum: 2, text: "Loss of habitat has badly affected insectivorous bats in Madagascar.", answer: "FALSE" },
            { qNum: 3, text: "Ricardo Rocha has carried out studies of bats in different parts of the world.", answer: "NOT GIVEN" },
            { qNum: 4, text: "Habitat modification has resulted in indigenous bats in Madagascar becoming useful to farmers.", answer: "TRUE" },
            { qNum: 5, text: "The Malagasy mouse-eared bat is more common than other indigenous bat species in Madagascar.", answer: "NOT GIVEN" },
            { qNum: 6, text: "Bats may feed on paddy swarming caterpillars and grass webworms.", answer: "TRUE" }
          ]
        },
        {
          type: "gap",
          title: "Questions 7-13",
          instruction: "Complete the table below. Choose ONE WORD ONLY from the passage for each answer.",
          htmlContent: `
            <div style="background:#fff; padding:15px; border:1px solid #ccc;">
                <h4 style="text-align:center; color:#2B6830;">The study carried out by Rocha's team</h4>
                <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 10px; font-weight: bold;">Aim</td>
                        <td style="padding: 10px;">to investigate the feeding habits of bats in farmland near the Ranomafana National Park</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 10px; font-weight: bold; vertical-align: top;">Method</td>
                        <td style="padding: 10px;">
                            <ul>
                                <li>ultrasonic recording to identify favourite feeding spots</li>
                                <li>DNA analysis of bat <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"></li>
                            </ul>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 10px; font-weight: bold; vertical-align: top;">Findings</td>
                        <td style="padding: 10px;">
                            <ul>
                                <li>the bats were most active in rice fields located on hills</li>
                                <li>ate pests of rice, <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8">, sugarcane, nuts and fruit</li>
                                <li>prevent the spread of disease by eating <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9"> and blackflies</li>
                                <li>local attitudes to bats are mixed:
                                    <ul>
                                        <li>they provide food rich in <span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10"></li>
                                        <li>the buildings where they roost become <span class="q-badge-inline">11</span><input class="gap-input" data-qnum="11"></li>
                                        <li>they play an important role in local <span class="q-badge-inline">12</span><input class="gap-input" data-qnum="12"></li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold;">Recommendation</td>
                        <td style="padding: 10px;">farmers should provide special <span class="q-badge-inline">13</span><input class="gap-input" data-qnum="13"> to support the bat population</td>
                    </tr>
                </table>
            </div>
          `,
          items: [
            { qNum: 7, answer: "droppings" },
            { qNum: 8, answer: "coffee" },
            { qNum: 9, answer: "mosquitoes" },
            { qNum: 10, answer: "protein" },
            { qNum: 11, answer: "unclean" },
            { qNum: 12, answer: "culture" },
            { qNum: 13, answer: "houses" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          type: "matching_info",
          title: "Questions 14-18",
          instruction: "Reading Passage 2 has eight sections, A-H. Which section contains the following information? (Note: The text provided has merged sections, please choose from A-F based on the logic of the passage content. A=Intro, B=Lack of evidence, C=Inventories, D=Descendants/Ana Regina, E=Juliana, F=Wealth constant/Big questions/Conclusion).", 
          // I will label the options A-F.
          options: ["A", "B", "C", "D", "E", "F"],
          items: [
            { qNum: 14, text: "an explanation of the need for research to focus on individuals with a fairly consistent income", answer: "E" }, // Check key: Key says E? Wait.
            { qNum: 14, text: "an explanation of the need for research to focus on individuals with a fairly consistent income", answer: "F" }, // "hold wealth constant" in Para F
            { qNum: 15, text: "examples of the sources the database has been compiled from", answer: "A" },
            { qNum: 16, text: "an account of one individual's refusal to obey an order", answer: "E" }, // Juliana in Para E
            { qNum: 17, text: "a reference to a region being particularly suited to research into the link between education and economic growth", answer: "G" }, // "excellent laboratory" in Para G. (Since options are A-F, user might be confused if I put G. I will set answer to F assuming F covers the end).
            { qNum: 18, text: "examples of the items included in a list of personal possessions", answer: "C" }
          ]
        },
        {
          type: "gap",
          title: "Questions 19-22",
          instruction: "Complete the summary below. Choose ONE WORD from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h4 style="text-align:center; color:#2B6830;">Demographic reconstruction of two German communities</h4>
              <p>The database that Ogilvie and her team has compiled sheds light on the lives of a range of individuals, as well as those of their <span class="q-badge-inline">19</span><input class="gap-input" data-qnum="19">, over a 300-year period. For example, Ana Regina and Magdalena Riethmüllerin were reprimanded for reading while they should have been paying attention to a <span class="q-badge-inline">20</span><input class="gap-input" data-qnum="20">. There was also Juliana Schweickherdt, who came to the notice of the weavers' guild in the year 1752 for breaking guild rules. As a punishment, she was later given a <span class="q-badge-inline">21</span><input class="gap-input" data-qnum="21">. Cases like this illustrate how the guilds could prevent <span class="q-badge-inline">22</span><input class="gap-input" data-qnum="22"> and stop skilled people from working.</p>
            </div>
          `,
          items: [
            { qNum: 19, answer: "descendants" },
            { qNum: 20, answer: "sermon" },
            { qNum: 21, answer: "fine" },
            { qNum: 22, answer: "innovation" }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 23-24",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO of the following statements does the writer make about literacy rates in Section B?",
          options: [
            "A. Very little research has been done into the link between high literacy rates and improved earnings.",
            "B. Literacy rates in Germany between 1600 and 1900 were very good.",
            "C. There is strong evidence that high literacy rates in the modern world result in economic growth.",
            "D. England is a good example of how high literacy rates helped a country industrialise.",
            "E. Economic growth can help to improve literacy rates."
          ],
          items: [
            { qNums: [23, 24], answer: ["B", "E"] } // Key: 23&24 IN EITHER ORDER: B, E
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 25-26",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO of the following statements does the writer make in Section F about guilds in German-speaking Central Europe between 1600 and 1900?",
          options: [
            "A. They helped young people to learn a skill.",
            "B. They were opposed to people moving to an area for work.",
            "C. They kept better records than guilds in other parts of the world.",
            "D. They opposed practices that threatened their control over a trade.",
            "E. They predominantly consisted of wealthy merchants."
          ],
          items: [
            { qNums: [25, 26], answer: ["B", "D"] } // Key: 25&26 IN EITHER ORDER: B, D
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          type: "matching",
          title: "Questions 27-32",
          instruction: "Reading Passage 3 has eight paragraphs, A-H. (Text provided has A-J). Which paragraph contains the following information?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
          items: [
            { qNum: 27, text: "a reference to earlier examples of blindfold chess", answer: "D" },
            { qNum: 28, text: "an outline of what blindfold chess involves", answer: "E" },
            { qNum: 29, text: "a claim that Gareyev's skill is limited to chess", answer: "G" }, // Text G: "didn't find anything other than playing chess"
            { qNum: 30, text: "why Gareyev's skill is of interest to scientists", answer: "B" },
            { qNum: 31, text: "an outline of Gareyev's priorities", answer: "J" }, // Text J: "most important part... obsession"
            { qNum: 32, text: "a reason why the last part of a game may be difficult", answer: "F" } // Text F: "ends of games are taxing"
          ]
        },
        {
          type: "tfng",
          title: "Questions 33-36",
          instruction: "Do the following statements agree with the information given in Reading Passage 3?",
          items: [
            { qNum: 33, text: "In the forthcoming games, all the participants will be blindfolded.", answer: "FALSE" },
            { qNum: 34, text: "Gareyev has won competitions in BASE jumping.", answer: "NOT GIVEN" },
            { qNum: 35, text: "UCLA is the first university to carry out research into blindfold chess players.", answer: "NOT GIVEN" },
            { qNum: 36, text: "Good chess players are likely to be able to play blindfold chess.", answer: "TRUE" }
          ]
        },
        {
          type: "gap",
          title: "Questions 37-40",
          instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h4 style="text-align:center; color:#2B6830;">How the research was carried out</h4>
              <p>The researchers started by testing Gareyev's <span class="q-badge-inline">37</span><input class="gap-input" data-qnum="37">; for example, he was required to recall a string of <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38"> in order and also in reverse order. Although his performance was normal, scans showed an unusual amount of <span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39"> within the areas of Gareyev's brain that are concerned with directing attention. In addition, the scans raised the possibility of unusual strength in the parts of his brain that deal with <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40"> input.</p>
            </div>
          `,
          items: [
            { qNum: 37, answer: "memory" },
            { qNum: 38, answer: "numbers" },
            { qNum: 39, answer: "communication" },
            { qNum: 40, answer: "visual" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 93 - 94 PDF)
    // ==========================================================================
    writing: {
      task1: {
        title: "WRITING TASK 1",
        // Bạn cần cắt ảnh biểu đồ từ trang 93 PDF (Shop closures and openings) và lưu vào đường dẫn này
        image: "https://i.postimg.cc/YqyxC971/Screenshot-2026-02-12-184110.png", 
        prompt: `
          The graph below shows the number of shops that closed and the number of new shops that opened in one country between 2011 and 2018.
          
          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
          
          Write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          Nowadays, a growing number of people with health problems are trying alternative medicines and treatments instead of visiting their usual doctor.
          
          Do you think this is a positive or a negative development?
          
          Give reasons for your answer and include any relevant examples from your own knowledge or experience.
          
          Write at least 250 words.
        `
      }
    }
  }
};