// src/data/cam17_test3.js

export const cam17_test3 = {
  id: "mt15",
  category: "full",
  testName: "MOCK TEST 15",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 53 - 58 PDF) - Đáp án trang 123
    // ==========================================================================
    listening: {
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/beablevn-ielts.firebasestorage.app/o/audio%2Fmt15.mp3?alt=media&token=fde8cfbc-b411-4b80-8d2d-48309ca222b6",
      timeLimit: 1760,
      passage: "<h3 style='text-align:center; color:#002554;'>MOCK TEST 15 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1: Questions 1-10 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-10",
          instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Advice on surfing holidays</h3>
                
                <p><strong>Jack's advice</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Recommends surfing for <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"> holidays in the summer</li>
                    <li>Need to be quite <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2"></li>
                </ul>

                <p><strong>Irish surfing locations</strong></p>
                <p><strong>County Clare</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Lahinch has some good quality <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"> and surf schools</li>
                    <li>There are famous cliffs nearby</li>
                </ul>

                <p><strong>County Mayo</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Good surf school at <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"> beach</li>
                    <li>Surf camp lasts for one <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"></li>
                    <li>Can also explore the local <span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"> by kayak</li>
                </ul>

                <p><strong>Weather</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Best month to go: <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"></li>
                    <li>Average temperature in summer: approx. <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8"> degrees</li>
                </ul>

                <p><strong>Costs</strong></p>
                <p><strong>Equipment</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Wetsuit and surfboard: <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9"> euros per day</li>
                    <li>Also advisable to hire <span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10"> for warmth</li>
                </ul>
            </div>
          `,
          items: [
            { qNum: 1, answer: "family" },
            { qNum: 2, answer: "fit" },
            { qNum: 3, answer: "hotels" },
            { qNum: 4, answer: "Carrowniskey" },
            { qNum: 5, answer: "week" },
            { qNum: 6, answer: "bay" },
            { qNum: 7, answer: "September" },
            { qNum: 8, answer: ["19", " nineteen"] },
            { qNum: 9, answer: ["30", " thirty"] },
            { qNum: 10, answer: "boots" }
          ]
        },

        // --- PART 2 ---
        {
          type: "mcq_multi",
          title: "Part 2: Questions 11-12",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO facts are given about the school's extended hours childcare service?",
          options: [
            "A. It started recently.",
            "B. More children attend after school than before school.",
            "C. An average of 50 children attend in the mornings.",
            "D. A child cannot attend both the before and after school sessions.",
            "E. The maximum number of children who can attend is 70."
          ],
          items: [
            { qNums: [11, 12], answer: ["B", "E"] } // Key: 11&12 IN EITHER ORDER
          ]
        },
        {
          type: "mcq_single",
          title: "Questions 13-15",
          instruction: "Choose the correct letter, A, B or C.",
          items: [
            {
              qNum: 13,
              text: "How much does childcare cost for a complete afternoon session per child?",
              options: ["A. £3.50", "B. £5.70", "C. £7.20"],
              answer: "C"
            },
            {
              qNum: 14,
              text: "What does the manager say about food?",
              options: ["A. Children with allergies should bring their own food.", "B. Children may bring healthy snacks with them.", "C. Children are given a proper meal at 5 p.m."],
              answer: "C"
            },
            {
              qNum: 15,
              text: "What is different about arrangements in the school holidays?",
              options: ["A. Children from other schools can attend.", "B. Older children can attend.", "C. A greater number of children can attend."],
              answer: "A"
            }
          ]
        },
        {
          type: "matching",
          title: "Questions 16-20",
          instruction: "What information is given about each of the following activities on offer? Choose FIVE answers from the box.",
          options: [
            "A. has limited availability",
            "B. is no longer available",
            "C. is for over 8s only",
            "D. requires help from parents",
            "E. involves an additional fee",
            "F. is a new activity",
            "G. was requested by children"
          ],
          items: [
            { qNum: 16, text: "Spanish", answer: "E" },
            { qNum: 17, text: "Music", answer: "D" },
            { qNum: 18, text: "Painting", answer: "G" },
            { qNum: 19, text: "Yoga", answer: "F" },
            { qNum: 20, text: "Cooking", answer: "C" }
          ]
        },

        // --- PART 3 ---
        {
          type: "mcq_single",
          title: "Part 3: Questions 21-24",
          instruction: "Choose the correct letter, A, B or C.",
          items: [
            {
              qNum: 21,
              text: "Holly has chosen the Orion Stadium placement because",
              options: ["A. it involves children.", "B. it is outdoors.", "C. it sounds like fun."],
              answer: "B"
            },
            {
              qNum: 22,
              text: "Which aspect of safety does Dr Green emphasise most?",
              options: ["A. ensuring children stay in the stadium", "B. checking the equipment children will use", "C. removing obstacles in changing rooms"],
              answer: "A"
            },
            {
              qNum: 23,
              text: "What does Dr Green say about the spectators?",
              options: ["A. They can be hard to manage.", "B. They make useful volunteers.", "C. They shouldn't take photographs."],
              answer: "A"
            },
            {
              qNum: 24,
              text: "What has affected the schedule in the past?",
              options: ["A. bad weather", "B. an injury", "C. extra time"],
              answer: "B"
            }
          ]
        },
        {
          type: "matching",
          title: "Questions 25-30",
          instruction: "What do Holly and her tutor agree is an important aspect of each of the following events management skills? Choose SIX answers from the box.",
          options: [
            "A. being flexible",
            "B. focusing on details",
            "C. having a smart appearance",
            "D. hiding your emotions",
            "E. relying on experts",
            "F. trusting your own views",
            "G. doing one thing at a time",
            "H. thinking of the future"
          ],
          items: [
            { qNum: 25, text: "Communication", answer: "C" },
            { qNum: 26, text: "Organisation", answer: "A" },
            { qNum: 27, text: "Time management", answer: "D" },
            { qNum: 28, text: "Creativity", answer: "B" },
            { qNum: 29, text: "Leadership", answer: "F" },
            { qNum: 30, text: "Networking", answer: "H" }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-40",
          instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">Bird Migration Theory</h3>
              
              <p>Most birds are believed to migrate seasonally.</p>

              <p><strong>Hibernation theory</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>It was believed that birds hibernated underwater or buried themselves in <span class="q-badge-inline">31</span><input class="gap-input" data-qnum="31">.</li>
                <li>This theory was later disproved by experiments on caged birds.</li>
              </ul>

              <p><strong>Transmutation theory</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>Aristotle believed birds changed from one species into another in summer and winter.</li>
                <li>In autumn he observed that redstarts experience the loss of <span class="q-badge-inline">32</span><input class="gap-input" data-qnum="32"> and thought they then turned into robins.</li>
                <li>Aristotle's assumptions were logical because the two species of birds had a similar <span class="q-badge-inline">33</span><input class="gap-input" data-qnum="33">.</li>
              </ul>

              <p><strong>17th century</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>Charles Morton popularised the idea that birds fly to the <span class="q-badge-inline">34</span><input class="gap-input" data-qnum="34"> in winter.</li>
              </ul>

              <p><strong>Scientific developments</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>In 1822, a stork was killed in Germany which had an African spear in its <span class="q-badge-inline">35</span><input class="gap-input" data-qnum="35">.</li>
                <li>previously there had been no <span class="q-badge-inline">36</span><input class="gap-input" data-qnum="36"> that storks migrate to Africa.</li>
                <li>Little was known about the <span class="q-badge-inline">37</span><input class="gap-input" data-qnum="37"> and journeys of migrating birds until the practice of ringing was established.</li>
                <li>It was thought large birds carried small birds on some journeys because they were considered incapable of travelling across huge <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38">.</li>
                <li>Ringing depended on what is called the <span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39"> of dead birds.</li>
                <li>In 1931, the first <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40"> to show the migration of European birds was printed.</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "mud" },
            { qNum: 32, answer: "feathers" },
            { qNum: 33, answer: "shape" },
            { qNum: 34, answer: "moon" },
            { qNum: 35, answer: "neck" },
            { qNum: 36, answer: "evidence" },
            { qNum: 37, answer: "destinations" },
            { qNum: 38, answer: "oceans" },
            { qNum: 39, answer: "recovery" },
            { qNum: 40, answer: "atlas" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 59 - 71 PDF) - Đáp án trang 124
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">The thylacine</h3>
            
            <p>The extinct thylacine, also known as the Tasmanian tiger, was a marsupial that bore a superficial resemblance to a dog. Its most distinguishing feature was the 13-19 dark brown stripes over its back, beginning at the rear of the body and extending onto the tail. The thylacine's average nose-to-tail length for adult males was 162.6 cm, compared to 153.7 cm for females.</p>

            <p>The thylacine appeared to occupy most types of terrain except dense rainforest, with open eucalyptus forest thought to be its prime habitat. In terms of feeding, it was exclusively carnivorous, and its stomach was muscular with an ability to distend so that it could eat large amounts of food at one time, probably an adaptation to compensate for long periods when hunting was unsuccessful and food scarce. The thylacine was not a fast runner and probably caught its prey by exhausting it during a long pursuit. During long-distance chases, thylacines were likely to have relied more on scent than any other sense. They emerged to hunt during the evening, night and early morning and tended to retreat to the hills and forest for shelter during the day. Despite the common name 'tiger', the thylacine had a shy, nervous temperament. Although mainly nocturnal, it was sighted moving during the day and some individuals were even recorded basking in the sun.</p>

            <p>The thylacine had an extended breeding season from winter to spring, with indications that some breeding took place throughout the year. The thylacine, like all marsupials, was tiny and hairless when born. Newborns crawled into the pouch on the belly of their mother, and attached themselves to one of the four teats, remaining there for up to three months. When old enough to leave the pouch, the young stayed in a lair such as a deep rocky cave, well-hidden nest or hollow log, whilst the mother hunted.</p>

            <p>Approximately 4,000 years ago, the thylacine was widespread throughout New Guinea and most of mainland Australia, as well as the island of Tasmania. The most recent, well-dated occurrence of a thylacine on the mainland is a carbon-dated fossil from Murray Cave in Western Australia, which is around 3,100 years old. Its extinction coincided closely with the arrival of wild dogs called dingoes in Australia and a similar predator in New Guinea. Dingoes never reached Tasmania, and most scientists see this as the main reason for the thylacine's survival there.</p>

            <p>The dramatic decline of the thylacine in Tasmania, which began in the 1830s and continued for a century, is generally attributed to the relentless efforts of sheep farmers and bounty hunters with shotguns. While this determined campaign undoubtedly played a large part, it is likely that various other factors also contributed to the decline and eventual extinction of the species. These include competition with wild dogs introduced by European settlers, loss of habitat along with the disappearance of prey species, and a distemper-like disease which may also have affected the thylacine.</p>

            <p>There was only one successful attempt to breed a thylacine in captivity, at Melbourne Zoo in 1899. This was despite the large numbers that went through some zoos, particularly London Zoo and Tasmania's Hobart Zoo. The famous naturalist John Gould foresaw the thylacine's demise when he published his <em>Mammals of Australia</em> between 1848 and 1863, writing, 'The numbers of this singular animal will speedily diminish, extermination will have its full sway, and it will then, like the wolf of England and Scotland, be recorded as an animal of the past.'</p>

            <p>However, there seems to have been little public pressure to preserve the thylacine, nor was much concern expressed by scientists at the decline of this species in the decades that followed. A notable exception was T.T. Flynn, Professor of Biology at the University of Tasmania. In 1914, he was sufficiently concerned about the scarcity of the thylacine to suggest that some should be captured and placed on a small island. But it was not until 1929, with the species on the very edge of extinction, that Tasmania's Animals and Birds Protection Board passed a motion protecting thylacines only for the month of December, which was thought to be their prime breeding season.</p>

            <p>The last known wild thylacine to be killed was shot by a farmer in the north-east of Tasmania in 1930, leaving just captive specimens. Official protection of the species by the Tasmanian government was introduced in July 1936, 59 days before the last known individual died in Hobart Zoo on 7th September, 1936. There have been numerous expeditions and searches for the thylacine over the years, none of which has produced definitive evidence that thylacines still exist. The species was declared extinct by the Tasmanian government in 1986.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">Palm oil</h3>

            <p><strong>A</strong> Palm oil is an edible oil derived from the fruit of the African oil palm tree, and is currently the most consumed vegetable oil in the world. It's almost certainly in the soap we wash with in the morning, the sandwich we have for lunch, and the biscuits we snack on during the day. Why is palm oil so attractive for manufacturers? Primarily because its unique properties - such as remaining solid at room temperature - make it an ideal ingredient for long-term preservation, allowing many packaged foods on supermarket shelves to have 'best before' dates of months, even years, into the future.</p>

            <p><strong>B</strong> Many farmers have seized the opportunity to maximise the planting of oil palm trees. Between 1990 and 2012, the global land area devoted to growing oil palm trees grew from 6 to 17 million hectares, now accounting for around ten percent of total cropland in the entire world. From a mere two million tonnes of palm oil being produced annually globally 50 years ago, there are now around 60 million tonnes produced every single year, a figure looking likely to double or even triple by the middle of the century.</p>

            <p><strong>C</strong> However, there are multiple reasons why conservationists cite the rapid spread of oil palm plantations as a major concern. There are countless news stories of deforestation, habitat destruction and dwindling species populations, all as a direct result of land clearing to establish oil palm tree monoculture on an industrial scale, particularly in Malaysia and Indonesia. Endangered species - most famously the Sumatran orangutan, but also rhinos, elephants, tigers, and numerous other fauna - have suffered from the unstoppable spread of oil palm plantations.</p>

            <p><strong>D</strong> 'Palm oil is surely one of the greatest threats to global biodiversity,' declares Dr Farnon Ellwood of the University of the West of England, Bristol. 'Palm oil is replacing rainforest, and rainforest is where all the species are. That's a problem.' This has led to some radical questions among environmentalists, such as whether consumers should try to boycott palm oil entirely. Meanwhile Bhavani Shankar, Professor at London's School of Oriental and African Studies, argues, 'It's easy to say that palm oil is the enemy and we should be against it. It makes for a more dramatic story, and it's very intuitive. But given the complexity of the argument, I think a much more nuanced story is closer to the truth.'</p>

            <p><strong>E</strong> One response to the boycott movement has been the argument for the vital role palm oil plays in lifting many millions of people in the developing world out of poverty. Is it desirable to have palm oil boycotted, replaced, eliminated from the global supply chain, given how many low-income people in developing countries depend on it for their livelihoods? How best to strike a utilitarian balance between these competing factors has become a serious bone of contention.</p>

            <As><strong>F</strong> Even the deforestation argument isn't as straightforward as it seems. Oil palm plantations produce at least four and potentially up to ten times more oil per hectare than soybean, rapeseed, sunflower or other competing oils. That immensely high yield - which is predominantly what makes it so profitable - is potentially also an ecological benefit. If ten times more palm oil can be produced from a patch of land than any competing oil, then ten times more land would need to be cleared in order to produce the same volume of oil from that competitor.<br>As for the question of carbon emissions, the issue really depends on what oil palm trees are replacing. Crops vary in the degree to which they sequester carbon - in other words, the amount of carbon they capture from the atmosphere and store within the plant. The more carbon a plant sequesters, the more it reduces the effect of climate change. As Shankar explains: '[Palm oil production] actually sequesters more carbon in some ways than other alternatives. [...] Of course, if you're cutting down virgin forest it's terrible - that's what's happening in Indonesia and Malaysia, it's been allowed to get out of hand. But if it's replacing rice, for example, it might actually sequester more carbon.'</p>

            <p><strong>G</strong> The industry is now regulated by a group called the Roundtable on Sustainable Palm Oil (RSPO), consisting of palm growers, retailers, product manufacturers, and other interested parties. Over the past decade or so, an agreement has gradually been reached regarding standards that producers of palm oil have to meet in order for their product to be regarded as officially 'sustainable'. The RSPO insists upon no virgin forest clearing, transparency and regular assessment of carbon stocks, among other criteria. Only once these requirements are fully satisfied is the oil allowed to be sold as certified sustainable palm oil (CSPO). Recent figures show that the RSPO now certifies around 12 million tonnes of palm oil annually, equivalent to roughly 21 percent of the world's total palm oil production.</p>

            <p><strong>H</strong> There is even hope that oil palm plantations might not need to be such sterile monocultures, or 'green deserts', as Ellwood describes them. New research at Ellwood's lab hints at one plant which might make all the difference. The bird's nest fern (Asplenium nidus) grows on trees in an epiphytic fashion (meaning it's dependent on the tree only for support, not for nutrients), and is native to many tropical regions, where as a keystone species it performs a vital ecological role. Ellwood believes that reintroducing the bird's nest fern into oil palm plantations could potentially allow these areas to recover their biodiversity, providing a home for all manner of species, from fungi and bacteria, to invertebrates such as insects, amphibians, reptiles and even mammals.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <h3 style="text-align: center;">Building the Skyline: The Birth and Growth of Manhattan's Skyscrapers</h3>
            <p style="text-align:center; font-style:italic;">Katharine L. Shester reviews a book by Jason Barr about the development of New York City</p>

            <p>In Building the Skyline, Jason Barr takes the reader through a detailed history of New York City. The book combines geology, history, economics, and a lot of data to explain why business clusters developed where they did and how the early decisions of workers and firms shaped the skyline we see today. Building the Skyline is organized into two distinct parts. The first is primarily historical and addresses New York's settlement and growth from 1609 to 1900; the second deals primarily with the 20th century and is a compilation of chapters commenting on different aspects of New York's urban development. The tone and organization of the book changes somewhat between the first and second parts, as the latter chapters incorporate aspects of Barr's related research papers.</p>

            <p>Barr begins chapter one by taking the reader on a 'helicopter time-machine' ride - giving a fascinating account of how the New York landscape in 1609 might have looked from the sky. He then moves on to a subterranean walking tour of the city, indicating the location of rock and water below the subsoil, before taking the reader back to the surface. His love of the city comes through as he describes various fun facts about the location of the New York residence of early 19th-century vice-president Aaron Burr as well as a number of legends about the city.</p>

            <p>Chapters two and three take the reader up to the Civil War (1861-1865), with chapter two focusing on the early development of land and the implementation of a grid system in 1811. Chapter three focuses on land use before the Civil War. Both chapters are informative and well researched and set the stage for the economic analysis that comes later in the book. I would have liked Barr to expand upon his claim that existing tenements prevented skyscrapers in certain neighborhoods because 'likely no skyscraper developer was interested in performing the necessary "slum clearance"". Later in the book, Barr makes the claim that the depth of bedrock was not a limiting factor for developers, as foundation costs were a small fraction of the cost of development. At first glance, it is not obvious why slum clearance would be limiting, while more expensive foundations would not.</p>

            <p>Chapter four focuses on immigration and the location of neighborhoods and tenements in the late 19th century. Barr identifies four primary immigrant enclaves and analyzes their locations in terms of the amenities available in the area. Most of these enclaves were located on the least valuable land, between the industries located on the waterfront and the wealthy neighborhoods bordering Central Park.</p>

            <p>Part two of the book begins with a discussion of the economics of skyscraper height. In chapter five, Barr distinguishes between engineering height, economic height, and developer height - where engineering height is the tallest building that can be safely made at a given time, economic height is the height that is most efficient from society's point of view, and developer height is the actual height chosen by the developer, who is attempting to maximize return on investment. Chapter five also has an interesting discussion of the technological advances that led to the construction of skyscrapers. For example, the introduction of iron and steel skeletal frames made thick, load-bearing walls unnecessary, expanding the usable square footage of buildings and increasing the use of windows and availability of natural light.</p>

            <p>Chapter six then presents data on building height throughout the 20th century and uses regression analysis to 'predict' building construction. While less technical than the research paper on which the chapter is based, it is probably more technical than would be preferred by a general audience.</p>

            <p>Chapter seven tackles the 'bedrock myth', the assumption that the absence of bedrock close to the surface between Downtown and Midtown New York is the reason for skyscrapers not being built between the two urban centers. Rather, Barr argues that while deeper bedrock does increase foundation costs, these costs were neither prohibitively high nor were they large compared to the overall cost of building a skyscraper. What I enjoyed the most about this chapter was Barr's discussion of how foundations are actually built. He describes the use of caissons, which enable workers to dig down for considerable distances, often below the water table, until they reach bedrock. Barr's thorough technological history discusses not only how caissons work, but also the dangers involved. While this chapter references empirical research papers, it is a relatively easy read.</p>

            <p>Chapters eight and nine focus on the birth of Midtown and the building boom of the 1920s. Chapter eight contains lengthy discussions of urban economic theory that may serve as a distraction to readers primarily interested in New York. However, they would be well-suited for undergraduates learning about the economics of cities. In the next chapter, Barr considers two of the primary explanations for the building boom of the 1920s - the first being exuberance, and the second being financing. He uses data to assess the viability of these two explanations and finds that supply and demand factors explain much of the development of the 1920s; though it enabled the boom, cheap credit was not, he argues, the primary cause.</p>

            <p>In the final chapter (chapter 10), Barr discusses another of his empirical papers that estimates Manhattan land values from the mid-19th century to the present day. The data work that went into these estimations is particularly impressive. Toward the end of the chapter, Barr assesses 'whether skyscrapers are a cause or an effect of high land values'. He finds that changes in land values predict future building height, but the reverse is not true. The book ends with an epilogue, in which Barr discusses the impact of climate change on the city and makes policy suggestions for New York going forward.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS (Notes) ---
        {
          type: "gap",
          title: "Questions 1-5",
          instruction: "Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">The thylacine</h3>
              
              <p><strong>Appearance and behaviour</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>looked rather like a dog</li>
                <li>had a series of stripes along its body and tail</li>
                <li>ate an entirely <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"> diet</li>
                <li>probably depended mainly on <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2"> when hunting</li>
                <li>young spent first months of life inside its mother's <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"></li>
              </ul>

              <p><strong>Decline and extinction</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>last evidence in mainland Australia is a 3,100-year-old <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"></li>
                <li>probably went extinct in mainland Australia due to animals known as dingoes</li>
                <li>reduction in <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"> and available sources of food were partly responsible for decline in Tasmania</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 1, answer: "carnivorous" },
            { qNum: 2, answer: "scent" },
            { qNum: 3, answer: "pouch" },
            { qNum: 4, answer: "fossil" },
            { qNum: 5, answer: "habitat" }
          ]
        },
        // --- PASSAGE 1 QUESTIONS (TFNG) ---
        {
          type: "tfng",
          title: "Questions 6-13",
          instruction: "Do the following statements agree with the information given in Reading Passage 1?",
          items: [
            { qNum: 6, text: "Significant numbers of thylacines were killed by humans from the 1830s onwards.", answer: "TRUE" },
            { qNum: 7, text: "Several thylacines were born in zoos during the late 1800s.", answer: "FALSE" },
            { qNum: 8, text: "John Gould's prediction about the thylacine surprised some biologists.", answer: "NOT GIVEN" },
            { qNum: 9, text: "In the early 1900s, many scientists became worried about the possible extinction of the thylacine.", answer: "FALSE" },
            { qNum: 10, text: "T. T. Flynn's proposal to rehome captive thylacines on an island proved to be impractical.", answer: "NOT GIVEN" },
            { qNum: 11, text: "There were still reasonable numbers of thylacines in existence when a piece of legislation protecting the species during their breeding season was passed.", answer: "FALSE" },
            { qNum: 12, text: "From 1930 to 1936, the only known living thylacines were all in captivity.", answer: "TRUE" },
            { qNum: 13, text: "Attempts to find living thylacines are now rarely made.", answer: "NOT GIVEN" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS (Matching Info) ---
        {
          type: "matching_info",
          title: "Questions 14-20",
          instruction: "Reading Passage 2 has nine sections, A-I. Which section contains the following information?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
          items: [
            { qNum: 14, text: "examples of a range of potential environmental advantages of oil palm tree cultivation", answer: "F" },
            { qNum: 15, text: "description of an organisation which controls the environmental impact of palm oil production", answer: "H" },
            { qNum: 16, text: "examples of the widespread global use of palm oil", answer: "A" },
            { qNum: 17, text: "reference to a particular species which could benefit the ecosystem of oil palm plantations", answer: "I" },
            { qNum: 18, text: "figures illustrating the rapid expansion of the palm oil industry", answer: "B" },
            { qNum: 19, text: "an economic justification for not opposing the palm oil industry", answer: "E" },
            { qNum: 20, text: "examples of creatures badly affected by the establishment of oil palm plantations", answer: "C" }
          ]
        },
        // --- PASSAGE 2 QUESTIONS (MCQ Multi) ---
        {
          type: "mcq_multi",
          title: "Questions 21-22",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO statements are made about the Roundtable on Sustainable Palm Oil (RSPO)?",
          options: [
            "A. Its membership has grown steadily over the course of the last decade.",
            "B. It demands that certified producers be open and honest about their practices.",
            "C. It took several years to establish its set of criteria for sustainable palm oil certification.",
            "D. Its regulations regarding sustainability are stricter than those governing other industries.",
            "E. It was formed at the request of environmentalists concerned about the loss of virgin forests."
          ],
          items: [
            { qNums: [21, 22], answer: ["B", "C"] }
          ]
        },
        // --- PASSAGE 2 QUESTIONS (Sentence Completion) ---
        {
          type: "gap",
          title: "Questions 23-26",
          instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          htmlContent: `
            <div style="background:#fff; padding:15px; border:1px solid #eee;">
                <p>23. One advantage of palm oil for manufacturers is that it stays <span class="q-badge-inline">23</span><input class="gap-input" data-qnum="23"> when not refrigerated.</p>
                <p>24. The <span class="q-badge-inline">24</span><input class="gap-input" data-qnum="24"> is the best known of the animals suffering habitat loss as a result of the spread of oil palm plantations.</p>
                <p>25. As one of its criteria for the certification of sustainable palm oil, the RSPO insists that growers check <span class="q-badge-inline">25</span><input class="gap-input" data-qnum="25"> on a routine basis.</p>
                <p>26. Ellwood and his researchers are looking into whether the bird's nest fern could restore <span class="q-badge-inline">26</span><input class="gap-input" data-qnum="26"> in areas where oil palm trees are grown.</p>
            </div>
          `,
          items: [
            { qNum: 23, answer: "solid" },
            { qNum: 24, answer: ["(Sumatran) orangutan", "orang-utan"] },
            { qNum: 25, answer: "carbon stocks" },
            { qNum: 26, answer: "biodiversity" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS (MCQ Single) ---
        {
          type: "mcq_single",
          title: "Questions 27-31",
          instruction: "Choose the correct letter, A, B, C or D.",
          items: [
            {
              qNum: 27,
              text: "What point does Shester make about Barr's book in the first paragraph?",
              options: [
                "A. It gives a highly original explanation for urban development.",
                "B. Elements of Barr's research papers are incorporated throughout the book.",
                "C. Other books that are available on the subject have taken a different approach.",
                "D. It covers a range of factors that affected the development of New York."
              ],
              answer: "D"
            },
            {
              qNum: 28,
              text: "How does Shester respond to the information in the book about tenements?",
              options: [
                "A. She describes the reasons for Barr's interest.",
                "B. She indicates a potential problem with Barr's analysis.",
                "C. She compares Barr's conclusion with that of other writers.",
                "D. She provides details about the sources Barr used for his research."
              ],
              answer: "B"
            },
            {
              qNum: 29,
              text: "What does Shester say about chapter six of the book?",
              options: [
                "A. It contains conflicting data.",
                "B. It focuses too much on possible trends.",
                "C. It is too specialised for most readers.",
                "D. It draws on research that is out of date."
              ],
              answer: "C"
            },
            {
              qNum: 30,
              text: "What does Shester suggest about the chapters focusing on the 1920s building boom?",
              options: [
                "A. The information should have been organised differently.",
                "B. More facts are needed about the way construction was financed.",
                "C. The explanation that is given for the building boom is unlikely.",
                "D. Some parts will have limited appeal to certain people."
              ],
              answer: "D"
            },
            {
              qNum: 31,
              text: "What impresses Shester the most about the chapter on land values?",
              options: [
                "A. the broad time period that is covered",
                "B. the interesting questions that Barr asks",
                "C. the nature of the research into the topic",
                "D. the recommendations Barr makes for the future"
              ],
              answer: "C"
            }
          ]
        },
        // --- PASSAGE 3 QUESTIONS (YNNG) ---
        {
          type: "ynng",
          title: "Questions 32-35",
          instruction: "Do the following statements agree with the claims of the writer in Reading Passage 3?",
          items: [
            { qNum: 32, text: "The description in the first chapter of how New York probably looked from the air in the early 1600s lacks interest.", answer: "NO" },
            { qNum: 33, text: "Chapters two and three prepare the reader well for material yet to come.", answer: "YES" },
            { qNum: 34, text: "The biggest problem for many nineteenth-century New York immigrant neighbourhoods was a lack of amenities.", answer: "NOT GIVEN" },
            { qNum: 35, text: "In the nineteenth century, New York's immigrant neighbourhoods tended to concentrate around the harbour.", answer: "NO" }
          ]
        },
        // --- PASSAGE 3 QUESTIONS (Summary with Box) ---
        {
          type: "gap",
          title: "Questions 36-40",
          instruction: "Complete the summary using the list of phrases, A-J, below. Choose the correct letter, A-J, for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h4 style="text-align:center; color:#002554;">The bedrock myth</h4>
              <p>In chapter seven, Barr indicates how the lack of bedrock close to the surface does not explain why skyscrapers are absent from <span class="q-badge-inline">36</span><select class="gap-select" data-qnum="36"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select>. He points out that although the cost of foundations increases when bedrock is deep below the surface, this cannot be regarded as <span class="q-badge-inline">37</span><select class="gap-select" data-qnum="37"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select>, especially when compared to <span class="q-badge-inline">38</span><select class="gap-select" data-qnum="38"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select>.</p>
              
              <p>A particularly enjoyable part of the chapter was Barr's account of how foundations are built. He describes not only how <span class="q-badge-inline">39</span><select class="gap-select" data-qnum="39"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> are made possible by the use of caissons, but he also discusses their <span class="q-badge-inline">40</span><select class="gap-select" data-qnum="40"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select>. The chapter is well researched but relatively easy to understand.</p>
              
              <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; background: #fff; font-size: 0.9em;">
                 <strong>Options:</strong><br/>
                 A. development plans &nbsp;&nbsp; B. deep excavations &nbsp;&nbsp; C. great distance<br/>
                 D. excessive expense &nbsp;&nbsp; E. impossible tasks &nbsp;&nbsp; F. associated risks<br/>
                 G. water level &nbsp;&nbsp; H. specific areas &nbsp;&nbsp; I. total expenditure &nbsp;&nbsp; J. construction guidelines
              </div>
            </div>
          `,
          items: [
            { qNum: 36, answer: "H" },
            { qNum: 37, answer: "D" },
            { qNum: 38, answer: "I" },
            { qNum: 39, answer: "B" },
            { qNum: 40, answer: "F" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 72 - 73 PDF)
    // ==========================================================================
    writing: {
      task1: {
        title: "WRITING TASK 1",
        // Lưu ý: Bạn cần cắt ảnh từ trang 72 PDF và lưu vào đường dẫn này
        image: "https://i.postimg.cc/vBBs9NFG/Screenshot-2026-02-10-181728.png", 
        prompt: `
          The chart below gives information about how families in one country spent their weekly income in 1968 and in 2018.

          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

          Write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          Some people believe that professionals, such as doctors and engineers, should be required to work in the country where they did their training. Others believe they should be free to work in another country if they wish.
          
          Discuss both these views and give your own opinion.
         
          Give reasons for your answer and include any relevant examples from your own knowledge or experience.
          
          Write at least 250 words.
        `
      }
    }
  }
};