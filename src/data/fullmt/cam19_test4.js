// src/data/cam19_test4.js

export const cam19_test4 = {
  id: "mt8",
  category: "full",
  testName: "MOCK TEST 8",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 77 - 82)
    // ==========================================================================
    listening: {
      audioSrc: "/audio/mt8.mp3", // Bạn nhớ kiểm tra file âm thanh
      timeLimit: 1733, // 30 phút
      passage: "<h3 style='text-align:center; color:#002554;'>MOCK TEST 8 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1: Questions 1-6 (Notes Completion) ---
        {
          "type": "gap",
          "title": "Part 1: Questions 1-6",
          "instruction": "Complete the notes below. Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; margin-bottom: 20px;">
                <h3 style="margin-top:0; color:#002554; text-align:center;">First day at work</h3>
                
                <div style="margin-bottom: 10px;">
                    <strong>Name of supervisor:</strong> <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1">
                </div>
                
                <div style="margin-bottom: 10px;">
                    <strong>Where to leave coat and bag:</strong>
                    <ul style="margin-top: 5px;">
                        <li>in staffroom</li>
                        <li>use <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2"></li>
                    </ul>
                </div>

                <div style="margin-bottom: 10px;">
                    <strong>See Tiffany in HR:</strong>
                    <ul style="margin-top: 5px;">
                        <li>to give <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3"> number</li>
                        <li>to collect <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4"></li>
                    </ul>
                </div>

                <div style="margin-bottom: 10px;">
                    <strong>Location of HR office:</strong> on <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5"> floor
                </div>
                
                <div style="margin-bottom: 10px;">
                    <strong>Supervisor's mobile number:</strong> <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="q-6">
                </div>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": "Kaeden" },
            { "qNum": 2, "answer": ["locker", "lockers"] },
            { "qNum": 3, "answer": "passport" },
            { "qNum": 4, "answer": "uniform" },
            { "qNum": 5, "answer": ["third", "3rd"] },
            { "qNum": 6, "answer": "0412 665 903" }
          ]
        },

        // --- PART 1: Questions 7-10 (Table Completion) ---
        {
          "type": "gap",
          "title": "Questions 7-10",
          "instruction": "Complete the table below. Write <strong>ONE WORD ONLY</strong> for each answer.",
          "htmlContent": `
            <div style="background:#fff; padding:15px; border:1px solid #ddd; margin-bottom: 20px;">
                <h3 style="margin-top:0; color:#002554; text-align:center;">Responsibilities</h3>
                <table style="width:100%; border-collapse: collapse; margin-top:10px; font-size: 0.95rem;">
                  <thead>
                    <tr style="background:#002554; color:white;">
                      <th style="padding:10px; border:1px solid #ccc; width: 25%;">Section</th>
                      <th style="padding:10px; border:1px solid #ccc;">Task 1</th>
                      <th style="padding:10px; border:1px solid #ccc;">Task 2 / Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">Bakery section</td>
                      <td style="padding:10px; border:1px solid #ccc;">Check sell-by dates</td>
                      <td style="padding:10px; border:1px solid #ccc;">
                        Change price labels<br/>
                        Use <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7" style="width: 80px;"> labels
                      </td>
                    </tr>
                    <tr style="background:#f9f9f9;">
                      <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">Sushi takeaway counter</td>
                      <td style="padding:10px; border:1px solid #ccc;">
                        Re-stock with <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8" style="width: 80px;"> boxes if needed
                      </td>
                      <td style="padding:10px; border:1px solid #ccc;">
                        Do not clean any knives
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">Meat and fish counters</td>
                      <td style="padding:10px; border:1px solid #ccc;">Clean the serving area</td>
                      <td style="padding:10px; border:1px solid #ccc;">
                        Collect <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9" style="width: 60px;"> for the fish<br/><br/>
                        Must wear special <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10" style="width: 80px;">
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
          `,
          "items": [
            { "qNum": 7, "answer": "yellow" },
            { "qNum": 8, "answer": "plastic" },
            { "qNum": 9, "answer": "ice" },
            { "qNum": 10, "answer": ["gloves", "glove"] }
          ]
        },

        // --- PART 2: Questions 11-20 ---
        {
          "type": "mcq_multi",
          "title": "Part 2: Questions 11-14",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "Which TWO problems with some training programmes for new runners does Liz mention?",
          "options": [
            "A. There is a risk of serious injury.",
            "B. They are unsuitable for people with health issues.",
            "C. They are unsuitable for certain age groups.",
            "D. It is difficult to stay motivated.",
            "E. There is a lack of individual support."
          ],
          "items": [
            { "qNums": [11, 12], "answer": ["C", "E"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 13-14",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "Which TWO tips does Liz recommend for new runners?",
          "options": [
            "A. doing two runs a week",
            "B. running in the evening",
            "C. going on runs with a friend",
            "D. listening to music during runs",
            "E. running very slowly"
          ],
          "items": [
            { "qNums": [13, 14], "answer": ["A", "D"] }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 15-18",
          "instruction": "What reason prevented each of the following members of the Compton Park Runners Club from joining until recently?",
          "options": [
            "A. a lack of confidence",
            "B. a dislike of running",
            "C. a lack of time"
          ],
          "items": [
            { "qNum": 15, "text": "Ceri", "answer": "A" },
            { "qNum": 16, "text": "James", "answer": "B" },
            { "qNum": 17, "text": "Leo", "answer": "C" },
            { "qNum": 18, "text": "Mark", "answer": "A" }
          ]
        },
        {
          "type": "mcq_single",
          "title": "Questions 19-20",
          "instruction": "Choose the correct letter, <strong>A, B or C</strong>.",
          "items": [
            {
              "qNum": 19,
              "text": "What does Liz say about running her first marathon?",
              "options": [
                "A. It had always been her ambition.",
                "B. Her husband persuaded her to do it.",
                "C. She nearly gave up before the end."
              ],
              "answer": "C"
            },
            {
              "qNum": 20,
              "text": "Liz says new runners should sign up for a race",
              "options": [
                "A. every six months.",
                "B. within a few weeks of taking up running.",
                "C. after completing several practice runs."
              ],
              "answer": "B"
            }
          ]
        },

        // --- PART 3: Questions 21-30 ---
        {
          "type": "mcq_single",
          "title": "Part 3: Questions 21-25",
          "instruction": "Choose the correct letter, <strong>A, B or C</strong>.",
          "items": [
            {
              "qNum": 21,
              "text": "Kieran thinks the packing advice given by Jane's grandfather is",
              "options": ["A. common sense.", "B. hard to follow.", "C. over-protective."],
              "answer": "A"
            },
            {
              "qNum": 22,
              "text": "How does Jane feel about the books her grandfather has given her?",
              "options": ["A. They are not worth keeping.", "B. They should go to a collector.", "C. They have sentimental value for her."],
              "answer": "C"
            },
            {
              "qNum": 23,
              "text": "Jane and Kieran agree that hardback books should be",
              "options": ["A. put out on display.", "B. given as gifts to visitors.", "C. more attractively designed."],
              "answer": "A"
            },
            {
              "qNum": 24,
              "text": "While talking about taking a book from a shelf, Jane",
              "options": ["A. describes the mistakes other people make doing it.", "B. reflects on a significant childhood experience.", "C. explains why some books are easier to remove than others."],
              "answer": "B"
            },
            {
              "qNum": 25,
              "text": "What do Jane and Kieran suggest about new books?",
              "options": ["A. Their parents liked buying them as presents.", "B. They would like to buy more of them.", "C. Not everyone can afford them."],
              "answer": "C"
            }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 26-30",
          "instruction": "Where does Jane's grandfather keep each of the following types of books in his shop? Choose from the list <strong>A-G</strong>.",
          "options": [
            "A. near the entrance",
            "B. in the attic",
            "C. at the back of the shop",
            "D. on a high shelf",
            "E. near the stairs",
            "F. in a specially designed space",
            "G. within the café"
          ],
          "items": [
            { "qNum": 26, "text": "rare books", "answer": "D" },
            { "qNum": 27, "text": "children's books", "answer": "F" },
            { "qNum": 28, "text": "unwanted books", "answer": "A" },
            { "qNum": 29, "text": "requested books", "answer": "C" },
            { "qNum": 30, "text": "coursebooks", "answer": "G" }
          ]
        },

        // --- PART 4: Questions 31-40 ---
        {
          "type": "gap",
          "title": "Part 4: Questions 31-40",
          "instruction": "Complete the notes below. Write <strong>ONE WORD ONLY</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; line-height:1.8;">
              <h3 style="text-align:center; color:#002554;">Tree planting</h3>
              <p><strong>Reforestation projects should:</strong></p>
              <ul>
                <li>include a range of tree species</li>
                <li>not include invasive species because of possible <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="q-31"> with native species</li>
                <li>aim to capture carbon, protect the environment and provide sustainable sources of <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="q-32"> for local people</li>
                <li>use tree seeds with a high genetic diversity to increase resistance to <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33"> and climate change</li>
                <li>plant trees on previously forested land which is in a bad condition, not select land which is being used for <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34"></li>
              </ul>

              <p><strong>Large-scale reforestation projects</strong></p>
              <ul>
                <li>Base planning decisions on information from accurate <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"></li>
                <li>Drones are useful for identifying areas in Brazil which are endangered by keeping <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36"> and illegal logging.</li>
              </ul>

              <p><strong>Lampang Province, Northern Thailand</strong></p>
              <ul>
                <li>A variety of native fig trees were planted, which are important for:
                  <ul>
                    <li>supporting many wildlife species</li>
                    <li>increasing the <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37"> of recovery by attracting animals and birds, e.g., <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="q-38"> were soon attracted to the area.</li>
                  </ul>
                </li>
              </ul>

              <p><strong>Involving local communities</strong></p>
              <ul>
                <li>Destruction of mangrove forests in Madagascar made it difficult for people to make a living from <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="q-39"></li>
                <li>The mangrove reforestation project protects against the higher risk of <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="q-40"></li>
              </ul>
            </div>
          `,
          "items": [
            { "qNum": 31, "answer": "competition" },
            { "qNum": 32, "answer": "food" },
            { "qNum": 33, "answer": "disease" },
            { "qNum": 34, "answer": "agriculture" },
            { "qNum": 35, "answer": "maps" },
            { "qNum": 36, "answer": "cattle" },
            { "qNum": 37, "answer": "speed" },
            { "qNum": 38, "answer": "monkeys" },
            { "qNum": 39, "answer": "fishing" },
            { "qNum": 40, "answer": "flooding" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 83 - 95)
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">The impact of climate change on butterflies in Britain</h3>
            
            <p>According to conservationists, populations of around two thirds of butterfly species have declined in Britain over the past 40 years. If this trend continues, it might have unpredictable knock-on effects for other species in the ecosystem. Butterfly eggs develop into caterpillars and these insects, which are the second stage in a new butterfly's lifecycle, consume vast quantities of plant material, and in turn act as prey for birds as well as bats and other small mammals. Only by arming themselves with an understanding of why butterfly numbers are down can conservationists hope to halt or reverse the decline.</p>
            
            <p>Butterflies prefer outdoor conditions to be 'just right', which means neither too hot nor too cold. Under the conditions of climate change, the temperature at any given time in summer is generally getting warmer, leaving butterflies with the challenge of how to deal with this. One of the main ways in which species are ensuring conditions suit them is by changing the time of year at which they are active and reproduce. Scientists refer to the timing of such lifecycle events as 'phenology', so when an animal or plant starts to do something earlier in the year than it usually does, it is said to be 'advancing its phenology'.</p>

            <p>These advances have been observed already in a wide range of butterflies - indeed, most species are advancing their phenology to some extent. In Britain, as the average spring temperature has increased by roughly 0.5°C over the past 20 years, species have advanced by between three days and a week on average, to keep in line with cooler temperatures. Is this a sign that butterflies are well equipped to cope with climate change, and readily adjust to new temperatures? Or are these populations under stress, being dragged along unwillingly by unnaturally fast changes? The answer is still unknown, but a new study is seeking to answer these questions.</p>

            <p>First, the researchers pulled together data from millions of records that had been submitted by butterfly enthusiasts - people who spend their free time observing the activities of different species. This provided information on 130 species of butterflies in Great Britain every year for a 20-year period. They then estimated the abundance and distribution of each species across this time, along with how far north in the country they had moved. The data also, crucially, allowed researchers to estimate subtle changes in what time of the year each species was changing into an adult butterfly.</p>

            <p>Analysing the trends in each variable, the researchers discovered that species with more flexible lifecycles were more likely to be able to benefit from an earlier emergence driven by climate change. Some species are able to go from caterpillar to butterfly twice or more per year, so that the individual butterflies you see flying in the spring are the grandchildren or great-grandchildren of the individuals seen a year previously.</p>

            <p>Among these species, researchers observed that those which have been advancing their phenology the most over the 20-year study period also had the most positive trends in abundance, distribution and northwards extent. For these species, such as Britain's tiniest butterfly, the dainty Small Blue, whose colonies are up to a hundred strong, some develop into butterflies early in spring, allowing their summer generations to complete another reproductive cycle by autumn so that more population growth occurs.</p>

            <p>Other species, however, are less flexible and restricted to a single reproductive cycle per year. For these species, there was no evidence of any benefit to emerging earlier. Indeed, worryingly, it was found that the species in this group that specialise in very specific habitat types, often related to the caterpillar's preferred diet, actually tended to be most at harm from advancing phenology. The beautiful High Brown Fritillary, often described as Britain's most endangered butterfly, is in this group. It is found only in coppiced woodland and limestone pavement habitats. It is also a single-generation butterfly that has advanced its phenology. This suggests that climate change, while undoubtedly not the sole cause, might have played a part in the downfall of this species.</p>

            <p>All is not lost, however. Many of Britain's single-generation species show the capacity, in continental Europe, to add a second generation in years that are sufficiently warm. Therefore, as the climate continues to warm, species like the Silver-studded Blue might be able to switch to multiple generations in the UK as well, and so begin to extract benefits from the additional warmth, potentially leading to population increases.</p>

            <p>More immediately, conservationists can arm themselves with all this knowledge to spot the warning signs of species that may be at risk. The White Admiral of southern England, a much sought-after butterfly, experienced a significant increase in numbers from the 1920s but has shown a considerable decline in the past 20 years. This may be because the caterpillar exists solely on a diet of a plant called honeysuckle. But it is also likely to be due to climate change.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">Deep-sea mining</h3>
            <p style="text-align:center; font-style:italic;">Bacteria from the ocean floor can beat superbugs and cancer. But habitats are at risk from the hunger for marine minerals.</p>

            <p><strong>A</strong> When Professor Mat Upton found that a microbe from a deep-sea sponge was killing pathogenic bugs in his laboratory, he realised it could be a breakthrough in the fight against antibiotic-resistant superbugs, which are responsible for thousands of deaths a year in the UK alone. Further tests confirmed that an antibiotic from the sponge bacteria, found living more than 700 metres under the sea at the Rockall trough in the north-east Atlantic, was previously unknown to science, boosting its potential as a life-saving medicine. But Upton, and other scientists who view the deep ocean and its wealth of unique and undocumented species as a prospecting ground for new medicines, fear such potential will be lost in the rush to exploit the deep sea's equally rich metal and mineral resources. 'We're looking at the bioactive potential of marine resources, to see if there are any more medicines or drugs down there before we destroy it for ever,' says Upton, a medical microbiologist at the University of Plymouth. He is among many scientists urging a halt to deep-sea mining, asking for time to weigh up the pros and cons. 'In sustainability terms, this could be a better way of exploiting the economic potential of the deep sea,' he argues.</p>

            <p><strong>B</strong> Oceanographers using remotely operated vehicles have spotted many new species. Among them have been sea cucumbers with tails allowing them to sail along the ocean floor, and a rare 'Dumbo' octopus, found 3,000 metres under the Pacific Ocean, off the coast of California. Any one of these could offer lifesaving potential. Upton estimates it could take up to a decade for a newly discovered antibiotic to become a medicine - but the race towards commercial mining in the ocean abyss has already begun.</p>

            <p><strong>C</strong> The deep sea contains more nickel, cobalt and rare earth metals than all land reserves combined, according to the US Geological Survey. Mining corporations argue that deep-sea exploration could help diversify the supply of metals and point to the fact that demand for resources such as copper, aluminium, cobalt for electric car batteries and other metals to power technology and smartphones, is soaring. They say that deep-sea mining could yield far superior ore to land mining with little, if any, waste. Different methods of extraction exist, but most involve employing some form of converted machinery previously used in terrestrial mining to excavate materials from the sea floor, at depths of up to 6,000 metres, then drawing a seawater slurry, containing rock and other solid particles, from the sea floor to ships on the surface. The slurry is then 'de-watered' and transferred to another vessel for shipping. Extracted seawater is pumped back down and discharged close to the sea floor.</p>

            <p><strong>D</strong> But environmental and legal groups have urged caution, arguing there are potentially massive and unknown ramifications for the environment and for nearby communities, and that the global regulatory framework is not yet drafted. 'Despite arising in the last half century, the "new global gold rush" of deep-sea mining shares many features with past resource scrambles - including a general disregard for environmental and social impacts, and the marginalisation of indigenous peoples and their rights,' a paper, written by Julie Hunter and Julian Aguon, from Blue Ocean Law, and Pradeep Singh, from the Center for Marine Environmental Sciences, Bremen, argues. The authors say that knowledge of the deep seabed remains extremely limited. 'The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail, leading marine scientists to commonly remark that, with respect to the deep sea, "We don't yet know what we need to know".'</p>

            <p><strong>E</strong> Scientific research - including a recent paper in Marine Policy journal - has suggested the deep seabed, and hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity and the global climate. The mineral-rich vents and their surrounds are also home to many well-known animals including crustaceans, tubeworms, clams, slugs, anemones and fish. 'It is becoming increasingly clear that deep-sea mining poses a grave threat to these vital seabed functions,' the paper says. 'Extraction methods would produce large sediment plumes and involve the discharge of waste back into the ocean, significantly disturbing seafloor environments,' the paper continues. 'On deep sea vents, scientists are clear,' says Dr Jon Copley of the National Oceanography Centre, Southampton: 'we don't want mining on them.'</p>

            <p><strong>F</strong> The oceans occupy around 70% of the planet and are relatively unexplored, says Mike Johnston, chief executive of Nautilus, a Canadian underwater exploration company: 'It makes sense to explore this untapped potential in an environmentally sustainable way, instead of continually looking at the fast depleting land resources of the planet to meet society's rising needs.' Those leading the global rush to place giant mining machines thousands of metres below the sea surface say the environmental impacts will be far lower than on land. But critics say exotic and little-known ecosystems in the deep oceans could be destroyed and must be protected. 'Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans,' according to hydrothermal vent expert Verena Tunnicliffe, at the University of Victoria in Canada. She argues that active vents must be off-limits for mining to protect the new knowledge and biotechnology spin-offs they can deliver, and that strict controls must be in place elsewhere.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            <h3 style="text-align: center;">The Unselfish Gene</h3>
            <p style="text-align:center; font-style:italic;">A psychologist gives his view on how humans became self-centred</p>

            <p>There has long been a general assumption that human beings are essentially selfish. We're apparently ruthless, with strong impulses to compete against each other for resources and to accumulate power and possessions. If we are kind to one another, it's usually because we have ulterior motives. If we are good, it's only because we have managed to control and transcend our innate selfishness and brutality.</p>

            <p>This bleak view of human nature is closely associated with the science writer Richard Dawkins, whose 1976 book The Selfish Gene became popular because it fitted so well with - and helped to justify - the competitive and individualistic ethos that was so prevalent in late 20th-century societies. Like many others, Dawkins justifies his views with reference to the field of evolutionary psychology. Evolutionary psychology theorises that present-day human traits developed in prehistoric times, during what is termed the 'environment of evolutionary adaptedness'.</p>

            <p>Prehistory is usually seen as a period of intense competition, when life was such a brutal battle that only those with traits such as selfishness, aggression and ruthlessness survived. And because survival depended on access to resources - such as rivers, forests and animals - there was bound to be conflict between rival groups, which led to the development of traits such as racism and warfare. This seems logical. But, in fact, the assumption on which this all rests - that prehistoric life was a desperate struggle for survival is false.</p>

            <p>It's important to remember that in the prehistoric era, the world was very sparsely populated. According to some estimates, around 15,000 years ago, the population of Europe was only 29,000, and the population of the whole world was less than half a million. Humans at that time were hunter-gatherers: people who lived by hunting wild animals and collecting wild plants. With such small population densities, it seems unlikely that prehistoric hunter-gatherer groups had to compete against each other for resources or had any need to develop ruthlessness and competitiveness, or to go to war.</p>

            <p>There is significant evidence to back this notion from contemporary hunter-gatherer groups, who live in the same way as prehistoric humans did. As the anthropologist Bruce Knauft has remarked, hunter-gatherers are characterised by 'extreme political and sexual egalitarianism'. Knauft has observed that individuals in such groups don't accumulate property or possessions and have an ethical obligation to share everything. They also have methods of preserving egalitarianism by ensuring that disparities of status don't arise.</p>

            <p>The !Kung people of southern Africa, for example, swap arrows before going hunting and when an animal is killed, the acclaim does not go to the person who fired the arrow, but to the person the arrow belongs to. And if a person becomes too domineering, the other members of the group ostracise them, exiling the offender from society. Typically in such groups, men do not dictate what women do. Women in hunter-gatherer groups worldwide often benefit from a high level of autonomy, being able to select their own marriage partners, decide what work they do and work whenever they choose to. And if a marriage breaks down, they have custody rights over their children.</p>

            <p>Many anthropologists believe that societies such as the !Kung were normal until a few thousand years ago, when population growth led to the development of agriculture and a settled lifestyle. In view of the above, there seems little reason to assume that traits such as racism, warfare and male domination should have been selected by evolution as they would have been of little benefit in the prehistoric era. Individuals who behaved selfishly and ruthlessly would be less likely to survive, since they would have been ostracised from their groups.</p>

            <p>It makes more sense, then, to see traits such as cooperation, egalitarianism, altruism and peacefulness as innate characteristics of human beings. These were the traits that were prevalent in human life for tens of thousands of years. So presumably these traits are still strong in us now.</p>

            <p>But if prehistoric life wasn't really as brutal as has often been assumed, why do modern humans behave so selfishly and ruthlessly? Perhaps these negative traits should be seen as a later development, the result of environmental and psychological factors. Research has shown repeatedly that when the natural habitats of primates such as apes and gorillas are disrupted, they tend to become more violent and hierarchical. So, it could well be that the same thing has happened to us. I believe that the end of the hunter-gatherer lifestyle and the advent of farming was connected to a psychological change that occurred in some groups of people. There was a new sense of individuality and separateness, which led to a new selfishness, and ultimately to hierarchical societies, patriarchy and warfare. At any rate, these negative traits appear to have developed so recently that it doesn't seem feasible to explain them in adaptive or evolutionary terms.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          "type": "tfng",
          "title": "Questions 1-6",
          "instruction": "Do the following statements agree with the information given in Reading Passage 1?",
          "items": [
            { "qNum": 1, "text": "Forty years ago, there were fewer butterflies in Britain than at present.", "answer": "FALSE" },
            { "qNum": 2, "text": "Caterpillars are eaten by a number of different predators.", "answer": "TRUE" },
            { "qNum": 3, "text": "'Phenology' is a term used to describe a creature's ability to alter the location of a lifecycle event.", "answer": "FALSE" },
            { "qNum": 4, "text": "Some species of butterfly have a reduced lifespan due to spring temperature increases.", "answer": "NOT GIVEN" },
            { "qNum": 5, "text": "There is a clear reason for the adaptations that butterflies are making to climate change.", "answer": "FALSE" }, 
            { "qNum": 6, "text": "The data used in the study was taken from the work of amateur butterfly watchers.", "answer": "TRUE" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 7-13",
          "instruction": "Complete the notes below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h3 style="text-align:center;">Butterflies in the UK</h3>
              <p><strong>The Small Blue</strong></p>
              <ul>
                <li>lives in large <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7"></li>
                <li>first appears at the start of <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8"></li>
                <li>completes more than one reproductive cycle per year</li>
              </ul>
              <p><strong>The High Brown Fritillary</strong></p>
              <ul>
                <li>has one reproductive cycle</li>
                <li>is considered to be more <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9"> than other species</li>
                <li>its caterpillars occupy a limited range of <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10"></li>
              </ul>
              <p><strong>The Silver-studded Blue</strong></p>
              <ul>
                <li>is already able to reproduce twice a year in warm areas of <span class="q-badge-inline">11</span><input type="text" class="gap-input" data-qnum="11" id="q-11"></li>
              </ul>
              <p><strong>The White Admiral</strong></p>
              <ul>
                <li>is found in <span class="q-badge-inline">12</span><input type="text" class="gap-input" data-qnum="12" id="q-12"> areas of England</li>
                <li>both climate change and the <span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="q-13"> of the caterpillar are possible reasons for decline</li>
              </ul>
            </div>
          `,
          "items": [
            { "qNum": 7, "answer": "colonies" },
            { "qNum": 8, "answer": "spring" },
            { "qNum": 9, "answer": "endangered" },
            { "qNum": 10, "answer": ["habitat", "habitats"] },
            { "qNum": 11, "answer": "Europe" },
            { "qNum": 12, "answer": "southern" },
            { "qNum": 13, "answer": "diet" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          "type": "matching_info",
          "title": "Questions 14-17",
          "instruction": "Reading Passage 2 has six paragraphs, <strong>A-F</strong>. Which paragraph contains the following information?",
          "options": ["A","B","C","D","E","F"],
          "items": [
            { "qNum": 14, "text": "reference to the rapidly increasing need for one raw material in the transport industry", "answer": "C" },
            { "qNum": 15, "text": "a rough estimate of the area of the Earth covered by the oceans", "answer": "F" },
            { "qNum": 16, "text": "how a particular underwater habitat, where minerals and organisms co-exist, is formed", "answer": "E" },
            { "qNum": 17, "text": "reference to the fact that the countries of the world have yet to agree on rules for the exploration of the seabed", "answer": "D" }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 18-23",
          "instruction": "Match each statement with the correct person or people, <strong>A-E</strong>.",
          "options": [
            "A. Professor Mat Upton", 
            "B. Julie Hunter, Julian Aguon and Pradeep Singh", 
            "C. Dr Jon Copley", 
            "D. Mike Johnston", 
            "E. Verena Tunnicliffe"
          ],
          "items": [
            { "qNum": 18, "text": "A move away from the exploration of heavily mined reserves on land is a good idea.", "answer": "D" },
            { "qNum": 19, "text": "The negative effects of undersea exploration on local areas and their inhabitants are being ignored.", "answer": "B" },
            { "qNum": 20, "text": "There are more worthwhile things to extract from the sea than minerals.", "answer": "A" },
            { "qNum": 21, "text": "No other form of human exploration will have such a destructive impact on marine life as deep-sea mining.", "answer": "E" },
            { "qNum": 22, "text": "More is known about outer space than about what lies beneath the oceans.", "answer": "B" },
            { "qNum": 23, "text": "There is one marine life habitat where experts agree mining should not take place.", "answer": "C" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 24-26",
          "instruction": "Complete the summary below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h3 style="text-align:center;">Mining the sea floor</h3>
              <p>Mining corporations believe that the mineral resources lying under the sea may be superior to those found in the earth. They also say that these can be removed without producing much <span class="q-badge-inline">24</span><input type="text" class="gap-input" data-qnum="24" id="q-24">.</p>
              <p>The extraction is often done by adapting the <span class="q-badge-inline">25</span><input type="text" class="gap-input" data-qnum="25" id="q-25"> that has already been used to work on land. The method of excavation involves removing the seawater from the slurry that is brought up to ships and returning it to the seabed.</p>
              <p>However, concerned groups strongly believe that <span class="q-badge-inline">26</span><input type="text" class="gap-input" data-qnum="26" id="q-26"> is necessary due to the possible number of unidentified consequences.</p>
            </div>
          `,
          "items": [
            { "qNum": 24, "answer": "waste" },
            { "qNum": 25, "answer": "machinery" },
            { "qNum": 26, "answer": "caution" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          "type": "mcq_single",
          "title": "Questions 27-30",
          "instruction": "Choose the correct letter, <strong>A, B, C or D</strong>.",
          "items": [
            { "qNum": 27, "text": "What is the writer doing in the first paragraph?", "options": ["A. setting out two opposing views about human nature", "B. justifying his opinion about our tendency to be greedy", "C. describing a commonly held belief about people's behaviour", "D. explaining why he thinks that humans act in a selfish manner"], "answer": "C" },
            { "qNum": 28, "text": "What point is made about Richard Dawkins' book The Selfish Gene?", "options": ["A. Its appeal lay in the radical nature of its ideas.", "B. Its success was due to the scientific support it offered.", "C. It presented a view that was in line with the attitudes of its time.", "D. It took an innovative approach to the analysis of human psychology."], "answer": "C" },
            { "qNum": 29, "text": "What does the writer suggest about the prehistoric era in the fourth paragraph?", "options": ["A. Societies were more complex than many people believe.", "B. Supplies of natural resources were probably relatively plentiful.", "C. Most estimates about population sizes are likely to be inaccurate.", "D. Humans moved across continents more than was previously thought."], "answer": "B" },
            { "qNum": 30, "text": "The writer refers to Bruce Knauft's work as support for the idea that", "options": ["A. selfishness is a relatively recent development in human societies.", "B. only people in isolated communities can live in an unselfish manner.", "C. very few lifestyles have survived unchanged since prehistoric times.", "D. hunter-gatherer cultures worldwide are declining in number."], "answer": "A" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 31-35",
          "instruction": "Complete the summary below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h3 style="text-align:center;">Contemporary hunter-gatherer societies</h3>
              <p>Bruce Knauft's research shows that contemporary hunter-gatherer societies tend to exhibit a high level of <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="q-31"> in all areas of life. In these cultures, distributing resources fairly among all members is a moral obligation.</p>
              <p>These societies also employ strategies to prevent differences in <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="q-32"> occurring: for example, the !Kung follow a custom whereby the credit for one person's success at <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33"> is given to another member of the group.</p>
              <p>Individuals who behave in a <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34"> manner are punished by being excluded from the group, and women have a considerable amount of <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"> in choices regarding work and marriage.</p>
            </div>
          `,
          "items": [
            { "qNum": 31, "answer": "egalitarianism" },
            { "qNum": 32, "answer": "status" },
            { "qNum": 33, "answer": "hunting" },
            { "qNum": 34, "answer": "domineering" },
            { "qNum": 35, "answer": "autonomy" }
          ]
        },
        {
          "type": "ynng",
          "title": "Questions 36-40",
          "instruction": "Do the following statements agree with the views of the writer in Reading Passage 3?",
          "items": [
            { "qNum": 36, "text": "Some anthropologists are mistaken about the point when the number of societies such as the !Kung began to decline.", "answer": "NOT GIVEN" },
            { "qNum": 37, "text": "Humans who developed warlike traits in prehistory would have had an advantage over those who did not.", "answer": "NO" },
            { "qNum": 38, "text": "Being peaceful and cooperative is a natural way for people to behave.", "answer": "YES" },
            { "qNum": 39, "text": "Negative traits are more apparent in some modern cultures than in others.", "answer": "NOT GIVEN" },
            { "qNum": 40, "text": "Animal research has failed to reveal a link between changes in the environment and the emergence of aggressive tendencies.", "answer": "NO" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 96-97)
    // ==========================================================================
    writing: {
      task1: {
        title: "Writing Task 1",
        instruction: "You should spend about 20 minutes on this task.",
        image: "https://i.postimg.cc/CxJjQPVW/Screenshot-2026-01-11-194907.png", 
        prompt: `The charts below give information on the location and types of dance classes young people in a town in Australia are currently attending.
        
        Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`
      },
      task2: {
        title: "Writing Task 2",
        instruction: "You should spend about 40 minutes on this task.",
        prompt: `Write about the following topic:
        
        In many countries nowadays, consumers can go to a supermarket and buy food produced all over the world.
        
        Do you think this is a positive or negative development?
        
        Give reasons for your answer and include any relevant examples from your own knowledge or experience.`
      }
    }
  }
};