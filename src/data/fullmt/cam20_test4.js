// src/data/fullmt/cam20_test4.js

export const cam20_test4 = {
  id: "full_cam20_t4",
  category: "full",
  testName: "MOCK TEST 4",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING
    // ==========================================================================
    listening: {
      audioSrc: "/audio/mt4.mp3", // ⚠️ Đổi tên file audio thật của bạn
      timeLimit: 1872, // 30 phút
      passage: "<h3 style='text-align:center; color:#002554;'>MOCK TEST 4 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1: Questions 1-10 (Gap-fill) ---
        {
          "type": "gap",
          "title": "Part 1: Questions 1-10",
          "instruction": "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">Advice on family visit</h3>
                
                <p><strong>Accommodation</strong></p>
                <ul style="line-height: 1.8;">
                    <li><span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="input-1"> Hotel on George Street</li>
                    <li>Cost of family room per night: £ <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="input-2"> (approx.)</li>
                </ul>

                <p><strong>Recommended trips</strong></p>
                <ul style="line-height: 1.8;">
                    <li>A <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="input-3"> tour of the city centre (starts in Carlton Square)</li>
                    <li>A trip by <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="input-4"> to the old fort</li>
                </ul>

                <p><strong>Science Museum</strong></p>
                <ul style="line-height: 1.8;">
                    <li>Best day to visit: <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="input-5"></li>
                    <li>See the exhibition about <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="input-6">, which opens soon</li>
                </ul>

                <p><strong>Food</strong></p>
                <ul style="line-height: 1.8;">
                    <li>Clacton Market:
                        <ul>
                            <li>Good for <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="input-7"> food</li>
                            <li>Need to have lunch before <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="input-8"> p.m.</li>
                        </ul>
                    </li>
                </ul>

                <p><strong>Theatre tickets</strong></p>
                <ul style="line-height: 1.8;">
                    <li>Save up to <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="input-9"> % on ticket prices at bargaintickets.com</li>
                </ul>

                <p><strong>Free activities</strong></p>
                <ul style="line-height: 1.8;">
                    <li>Blakewell Gardens:
                        <ul>
                            <li>Roots Music Festival</li>
                            <li>Climb Telegraph Hill to see a view of the <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="input-10"></li>
                        </ul>
                    </li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": ["Kings", "King's"] },
            { "qNum": 2, "answer": ["125", "one hundred and twenty-five"] },
            { "qNum": 3, "answer": "walking" },
            { "qNum": 4, "answer": "boat" },
            { "qNum": 5, "answer": "Tuesday" },
            { "qNum": 6, "answer": "space" },
            { "qNum": 7, "answer": "vegetarian" },
            { "qNum": 8, "answer": ["2.30", "two thirty"] },
            { "qNum": 9, "answer": ["75", "seventy-five"] },
            { "qNum": 10, "answer": "port" }
          ]
        },

        // --- PART 2: Questions 11-14 (MCQ Multi) ---
        {
          "type": "mcq_multi",
          "title": "Part 2: Questions 11 and 12",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO things does the speaker say about visiting the football stadium with children?",
          "options": [
            "A. Children can get their photo taken with a football player.",
            "B. There is a competition for children today.",
            "C. Parents must stay with their children at all times.",
            "D. Children will need sunhats and drinks.",
            "E. The cafe has a special offer on meals for children."
          ],
          "items": [
            { "qNums": [11, 12], "answer": ["B", "C"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 13 and 14",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO features of the stadium tour are new this year?",
          "options": [
            "A. VIP tour",
            "B. 360 cinema experience",
            "C. audio guide",
            "D. dressing room tour",
            "E. tours in other languages"
          ],
          "items": [
            { "qNums": [13, 14], "answer": ["A", "C"] }
          ]
        },

        // --- PART 2: Questions 15-20 (Matching) ---
        {
          "type": "matching",
          "title": "Questions 15-20",
          "instruction": "Which event in the history of football in the UK took place in each of the following years?",
          "options": [
            "A. The introduction of pay for the players",
            "B. a change to the design of the goal",
            "C. the first use of lights for matches",
            "D. the Introduction of goalkeepers",
            "E. the first International match",
            "F. two changes to the rules of the game",
            "G. the introduction of a fee for spectators",
            "H. an agreement on the length of a game"
          ],
          "items": [
            { "qNum": 15, "text": "1870", "answer": "D" },
            { "qNum": 16, "text": "1874", "answer": "F" },
            { "qNum": 17, "text": "1875", "answer": "B" },
            { "qNum": 18, "text": "1877", "answer": "H" },
            { "qNum": 19, "text": "1878", "answer": "C" },
            { "qNum": 20, "text": "1880", "answer": "G" }
          ]
        },

        // --- PART 3: Questions 21-24 (MCQ Multi) ---
        {
          "type": "mcq_multi",
          "title": "Part 3: Questions 21 and 22",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO benefits for children of learning to write did both students find surprising?",
          "options": [
            "A. improved fine motor skills",
            "B. improved memory",
            "C. improved concentration",
            "D. improved imagination",
            "E. improved spatial awareness"
          ],
          "items": [
            { "qNums": [21, 22], "answer": ["C", "E"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 23 and 24",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "For children with dyspraxia, which TWO problems with handwriting do the students think are easiest to correct?",
          "options": [
            "A. not spacing letters correctly",
            "B. not writing in a straight line",
            "C. applying too much pressure when writing",
            "D. confusing letter shapes",
            "E. writing very slowly"
          ],
          "items": [
            { "qNums": [23, 24], "answer": ["A", "C"] }
          ]
        },

        // --- PART 3: Questions 25-30 (MCQ Single) ---
        {
          "type": "mcq_single",
          "title": "Questions 25-30",
          "instruction": "Choose the correct letter, A, B or C.",
          "items": [
            {
              "qNum": 25,
              "text": "What does the woman say about using laptops to teach writing to children with dyslexia?",
              "options": [
                "A. Children often lack motivation to learn that way.",
                "B. Children become fluent relatively quickly.",
                "C. Children react more positively if they make a mistake."
              ],
              "answer": "C"
            },
            {
              "qNum": 26,
              "text": "When discussing whether to teach cursive or print writing, the woman thinks that",
              "options": [
                "A. cursive writing disadvantages a certain group of children.",
                "B. print writing is associated with lower academic performance.",
                "C. most teachers in the UK prefer a traditional approach to handwriting."
              ],
              "answer": "A"
            },
            {
              "qNum": 27,
              "text": "According to the students, what impact does poor handwriting have on exam performance?",
              "options": [
                "A. There is evidence to suggest grades are affected by poor handwriting.",
                "B. Neat handwriting is less important now than it used to be.",
                "C. Candidates write more slowly and produce shorter answers."
              ],
              "answer": "A"
            },
            {
              "qNum": 28,
              "text": "What prediction does the man make about the future of handwriting?",
              "options": [
                "A. Touch typing will be taught before writing by hand.",
                "B. Children will continue to learn to write by hand.",
                "C. People will dislike handwriting on digital devices."
              ],
              "answer": "B"
            },
            {
              "qNum": 29,
              "text": "The woman is concerned that relying on digital devices has made it difficult for her to",
              "options": [
                "A. take detailed notes.",
                "B. spell and punctuate.",
                "C. read old documents."
              ],
              "answer": "B"
            },
            {
              "qNum": 30,
              "text": "How do the students feel about their own handwriting?",
              "options": [
                "A. concerned they are unable to write quickly",
                "B. embarrassed by comments made about it",
                "C. regretful that they have lost the habit"
              ],
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
                <h3 style="text-align:center; margin-top:0;">Research in the area around the Chembe Bird Sanctuary</h3>
                
                <p><strong>The importance of birds of prey to the local communities</strong></p>
                <ul>
                    <li>They destroy <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="input-31"> and other rodents.</li>
                    <li>They help to prevent farmers from being bitten by <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="input-32">.</li>
                    <li>They have been an important part of the local culture for many years.</li>
                    <li>They now support the economy by encouraging <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="input-33"> in the area.</li>
                </ul>

                <p><strong>Falling numbers of birds of prey</strong></p>
                <ul>
                    <li>The birds may be accidentally killed:
                        <ul>
                            <li>By <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="input-34"> when they are hunting or sleeping.</li>
                            <li>By electrocution from contact with power lines, especially at times when there is a lot of <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="input-35">.</li>
                        </ul>
                    </li>
                    <li>Local farmers may illegally shoot them or <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="input-36"> them.</li>
                </ul>

                <p><strong>Ways of protecting chickens from birds of prey</strong></p>
                <ul>
                    <li>Clearing away vegetation from the area (unhelpful).</li>
                    <li>Providing a <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="input-37"> for chickens (expensive).</li>
                    <li>Frightening birds of prey by:
                        <ul>
                            <li>Keeping a <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="input-38">.</li>
                            <li>Making a <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="input-39"> (e.g. with metal objects).</li>
                        </ul>
                    </li>
                    <li>A <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="input-40"> of methods is usually most effective.</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 31, "answer": "rats" },
            { "qNum": 32, "answer": "snakes" },
            { "qNum": 33, "answer": "tourism" },
            { "qNum": 34, "answer": "traffic" },
            { "qNum": 35, "answer": "rain" },
            { "qNum": 36, "answer": "poison" },
            { "qNum": 37, "answer": "building" },
            { "qNum": 38, "answer": "dog" },
            { "qNum": 39, "answer": "noise" },
            { "qNum": 40, "answer": "combination" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING
    // ==========================================================================
    reading: {
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; font-size: 1.5rem; color: #333;">Georgia O'Keeffe</h3>
            
            <p>For seven decades, Georgia O'Keeffe (1887-1986) was a major figure in American art. Remarkably, she remained independent from shifting art trends and her work stayed true to her own vision, which was based on finding the essential, abstract forms in nature. With exceptionally keen powers of observation and great finesse with a paintbrush, she recorded subtle nuances of colour, shape, and light that enlivened her paintings and attracted a wide audience.</p>

            <p>Born in 1887 near Sun Prairie, Wisconsin to cattle breeders Francis and Ida O'Keeffe, Georgia was raised on their farm along with her six siblings. By the time she graduated from high school in 1905, she had determined to make her way as an artist. She studied the techniques of traditional painting at the Art Institute of Chicago school (1905) and the Art Students League of New York (1907-8). After attending university and then training college, she became an art teacher and taught in elementary schools, high schools, and colleges in Virginia, Texas, and South Carolina from 1911 to 1918.</p>

            <p>During this period, O'Keeffe began to experiment with creating abstract compositions in charcoal, and produced a series of innovative drawings that led her art in a new direction. She sent some of these drawings to a friend in New York, who showed them to art collector and photographer Alfred Stieglitz in January 1916. Stieglitz was impressed, and exhibited the drawings later that year at his gallery on Fifth Avenue, New York City, where the works of many avant-garde artists and photographers were introduced to the American public.</p>

            <p>With Stieglitz's encouragement and promise of financial support, O'Keeffe arrived in New York in June 1918 to begin a career as an artist. For the next three decades, Stieglitz vigorously promoted her work in twenty-two solo exhibitions and numerous group installations. The two were married in 1924. The ups and downs of their personal and professional relationship were recorded in Stieglitz's celebrated black-and-white portraits of O'Keeffe, taken over the course of twenty years (1917-37).</p>

            <p>By the mid-1920s, O'Keeffe was recognized as one of America's most important and successful artists, widely known for the architectural pictures that dramatically depict the soaring skyscrapers of New York. But most often, she painted botanical subjects, inspired by annual trips to the Stieglitz family summer home. In her magnified images depicting flowers, begun in 1924, O'Keeffe brings the viewer right into the picture. Enlarging the tiniest details to fill an entire metre-wide canvas emphasized their shapes and lines and made them appear abstract. Such daring compositions helped establish O'Keeffe's reputation as an innovative modernist.</p>

            <p>In 1929, O'Keeffe made her first extended trip to the state of New Mexico. It was a visit that had a lasting impact on her life, and an immediate effect on her work. Over the next two decades she made almost annual trips to New Mexico, staying up to six months there, painting in relative solitude, then returning to New York each winter to exhibit the new work at Stieglitz's gallery. This pattern continued until she moved permanently to New Mexico in 1949.</p>

            <p>There, O'Keeffe found new inspiration: at first, it was the numerous sun-bleached bones she came across in the state's rugged terrain that sparked her imagination. Two of her earliest and most celebrated Southwestern paintings exquisitely reproduce a cow skull's weathered surfaces, jagged edges, and irregular openings. Later, she also explored another variation on this theme in her large series of Pelvis pictures, which focused on the contrasts between convex and concave surfaces, and solid and open spaces.</p>

            <p>However, it was the region's spectacular landscape, with its unusual geological formations, vivid colours, clarity of light, and exotic vegetation, that held the artist's imagination for more than four decades. Often, she painted the rocks, cliffs, and mountains in striking close-up, just as she had done with her botanical subjects.</p>

            <p>O'Keeffe eventually owned two homes in New Mexico - the first, her summer retreat at Ghost Ranch, was nestled beneath 200-metre cliffs, while the second, used as her winter residence, was in the small town of Abiquiu. While both locales provided a wealth of imagery for her paintings, one feature of the Abiquiu house - the large walled patio with its black door - was particularly inspirational. In more than thirty pictures between 1946 and 1960, she reinvented the patio into an abstract arrangement of geometric shapes.</p>

            <p>From the 1950s into the 1970s, O'Keeffe travelled widely, making trips to Asia, the Middle East, and Europe. Flying in planes inspired her last two major series – aerial views of rivers and expansive paintings of the sky viewed from just above clouds. In both series, O'Keeffe increased the size of her canvases, sometimes to mural proportions, reflecting perhaps her newly expanded view of the world. When in 1965 she successfully translated one of her cloud motifs to a monumental canvas measuring 6 metres in length (with the help of assistants), it was an enormous challenge and a special feat for an artist nearing eighty years of age.</p>

            <p>The last two decades of the artist's life were relatively unproductive as ill health and blindness hindered her ability to work. O'Keeffe died in 1986 at the age of ninety-eight, but her rich legacy of some 900 paintings has continued to attract subsequent generations of artists and art lovers who derive inspiration from these very American images.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">Adapting to the effects of climate change</h3>

            <p><strong>A</strong> All around the world, nations are already preparing for, and adapting to, climate change and its impacts. Even if we stopped all CO2 emissions tomorrow, we would continue to see the impact of the CO2 already released since industrial times, with scientists forecasting that global warming would continue for around 40 years. In the meantime, ice caps would continue to melt and sea levels rise. Some countries and regions will suffer more extreme impacts from these changes than others. It's in these places that innovation is thriving.</p>

            <p><strong>B</strong> In Miami Beach, Florida, USA, seawater isn't just breaching the island city's walls, it's seeping up through the ground, so the only way to save the city is to lift it up above sea level. Starting in the lowest and most vulnerable neighbourhoods, roads have been raised by as much as 61 centimetres. The elevation work was carried out as part of Miami Beach's ambitious but much-needed stormwater management programme. In addition to the road adaptations, the city has set up new pumps that can remove up to 75,000 litres of water per minute. In the face of floods, climate-mitigation strategies have often been overlooked, says Yanira Pineda, a senior sustainability coordinator. She knows that they're essential and that the job is far from over. 'We know that in 20, 30, 40 years, we'll need to go back in there and adjust to the changing environment,' she says.</p>

            <p><strong>C</strong> Seawalls are a staple strategy for many coastal communities, but on the soft, muddy northern shores of Java, Indonesia, they frequently collapse, further exacerbating coastal erosion. There have been many attempts to restore the island's coastal mangroves: ecosystems of trees and shrubs that help defend coastal areas by trapping sediment in their net-like root systems, elevating the sea bed and dampening the energy of waves and tidal currents. But Susanna Toi of the not-for-profit organisation Wetlands International says that, while hugely popular, the majority of mangrove-planting projects fail. So, Wetlands International started out with a different approach, building semi-permeable dams, made from bamboo poles and brushwood, to mimic the role of mangrove roots and create favourable conditions for mangroves to grow back naturally. The programme has seen moderate success, mainly in areas with less subsidence. 'Unfortunately, traditional infrastructure is often single-solution focused,' says Tol. 'For long-term success, it's critical that we transition towards multifunctional approaches that embed natural processes and that engage and benefit communities and local decision-makers.'</p>

            <p><strong>D</strong> As the floodwaters rose in the rice fields of the Mekong Delta in September 2018, four small houses rose with them. Homes in this part of Vietnam are traditionally built on stilts but these ones had been built to float. The modifications were made by the Buoyant Foundation Project, a not-for-profit organisation that has been researching and retrofitting amphibious houses since 2006. 'When I started this,' explains founder Elizabeth English, 'climate change was not on the tip of everybody's tongue, but this technology is becoming necessary in places that didn't previously need it.' It's much cheaper than permanently elevating houses, English explains - about a third of what it would cost to completely replace a building's foundations. It also avoids the problem of taller houses being at greater risk from wind damage. Another plus comes from the fact that amphibious structures can be sensitively adapted to meet cultural needs and match the kind of houses that are already common in a community.</p>

            <p><strong>E</strong> Bangladesh is especially vulnerable to climate change. Most of the country is less than a metre above sea level and 80 per cent of its land lies on floodplains. 'Almost 35 million people living on the coastal belt of Bangladesh are currently affected by soil and water salinity,' says Raisa Chowdhury of the international development organisation ICCO Cooperation. Rather than fighting against it, one project is helping communities adapt to salt-affected soils. ICCO Cooperation has been working with 10,000 farmers in Bangladesh to start cultivating naturally salt-tolerant crops in the region. Certain varieties of carrot, potato, kohlrabi, cabbage and beetroot have been found to be better suited to salty soil than the rice and wheat that is typically grown there. Chowdhury says that the results are very visible, comparing a barren plot of land to the 'beautiful, lush green vegetable garden' sitting beside it, in which he and his team have been working with the farmers. Since the project began, farmers trained in saline agriculture have reported increases of two to three more harvests per year.</p>

            <p><strong>F</strong> Greg Spotts from Los Angeles (LA) in the USA is chief sustainability officer of the city's street services department. He leads the Cool Streets LA programme, a series of pilot projects, which include the planting of trees and the installation of a 'cool pavement' system, designed to help reach the city's goal of bringing down its average temperature by 1.5°C. 'Urban cooling is literally a matter of life and death for our future in LA,' says Spotts. Using a Geographic Information System data mapping tool, the programme identified streets with low tree canopy cover in three of the city's neighbourhoods and covered them with a light-grey, light-reflecting coating, which had already been shown to lower road surface temperature in Los Angeles by 6°C. Spotts says one of these streets, in the Winnetka neighbourhood of San Fernando Valley, can now be seen as a pale crescent, the only cool spot on an otherwise red thermal image, from the International Space Station.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            
            <h3 style="text-align: center;">A new role for livestock guard dogs</h3>
            <p style="text-align:center; font-style:italic;">Livestock guard dogs, traditionally used to protect farm animals from predators, are now being used to protect the predators themselves</p>

            <p><strong>A</strong> For thousands of years, livestock guard dogs worked alongside shepherds to protect their sheep, goats and cattle from predators such as wolves and bears. But in the 19th and 20th centuries, when such predators were largely exterminated, most guard dogs lost their jobs. In recent years, however, as increased efforts have been made to protect wild animals, predators have become more widespread again. As a result, farmers once more need to protect their livestock, and guard dogs are enjoying an unexpected revival.</p>

            <p><strong>B</strong> Today there are around 50 breeds of guard dogs on duty in various parts of the world. These dogs are raised from an early age with the animals they will be watching and eventually these animals become the dog's family. The dogs will place themselves between the livestock and any threat, barking loudly. If necessary, they will chase away predators, but often their mere presence is sufficient. 'Their initial training is to make them understand that livestock is going to be their life,' says Dan Macon, a shepherd with three guard dogs. 'A fluffy white puppy is fun to be around, but too much human affection makes it a great dog for guarding the front porch, rather than a great livestock guard dog.'</p>

            <p><strong>C</strong> The evidence indicates that guard dogs are highly effective. For example, in Portugal, biologist Silvia Ribeiro has found that more than 90 per cent of the farmers participating in a programme to train and use guard dogs to protect their herds against attack from wolves rate the performance of the dogs as very good or excellent. In a study carried out in Australia by Linda van Bommel and Chris Johnson at the University of Tasmania, more than 65 per cent of herders reported that predation stopped completely after they got the dogs, and almost all the rest saw a decrease in attacks. 'If they are managed and used properly, livestock guard dogs are the most efficient control method that we have in terms of the amount of livestock that they save from predation,' says van Bommel.</p>

            <p><strong>D</strong> But today's guard dogs also have a new role -to help preserve the predators. It is hoped that reductions in livestock losses can make farmers more tolerant of predators and less likely to kill them. In Namibia, more than 90 per cent of cheetahs live outside protected areas, close to humans raising livestock. As a result, the cheetahs are often held responsible for animal losses, and large numbers have been killed by farmers. When guard dogs were introduced, more than 90 per cent of farmers reported a dramatic reduction in livestock losses, and said that as a result they were less likely to kill predators. Julie Young, at Utah State University in the US, believes this result applies widely. 'There is common ground from the livestock perspective and from the conservation perspective,' she says. 'If ranchers don't have a dead cow, they will not make a call to apply for a permit to kill a wolf.'</p>

            <p><strong>E</strong> Looking at all the published evidence, Bethany Smith at Nottingham Trent University in the UK found that up to 88 per cent of farmers said they no longer killed predators after using dogs - but warned that such self-reported results must be taken with a pinch of salt. What's more, it is possible that livestock guard dogs merely displace predators to unprotected neighbouring properties, where their fate isn't recorded. 'In some regions, we work with almost every farmer, but in others only one or two have dogs,' says Ribeiro. 'If we are not working with everybody, we are transferring the wolf pressure to the neighbour's herd and he can use poison and kill an entire pack of wolves.'</p>

            <p><strong>F</strong> Another concern is whether there may be unintended ecological effects of using guard dogs. Studies suggest that reducing deaths of one type of predator may have a negative impact on other species. The extent of this problem isn't known, but the consequences are clear in Namibia. Cheetahs aren't the only species that cause sheep and goat losses there: other predators also attack livestock. In 2015, researchers reported that in spite of the impact farmers obtaining guard dogs had on cheetahs, the number of jackals killed by dogs and people actually increased. Guard dogs have other ecological impacts too. They have been found to spread diseases to wild animals, including endangered Ethiopian wolves. They may also compete with other carnivores for food. And by creating a 'landscape of fear', their mere presence can influence the behaviour of prey animals.</p>

            <p><strong>G</strong> The evidence so far, however, indicates that these consequences aren't always negative. Guard dogs can deliver unexpected benefits by protecting vulnerable wildlife from predators. For example, their presence has been found to protect birds which build their nests on the ground in fields, where foxes would normally raid them. Indeed, Australian researchers are now using dogs to enhance biodiversity and create refuges for species threatened by predation. So if we can get this right, there may be a bright future for guard dogs in promoting harmonious coexistence between humans and wildlife.</p>
        </div>
      `,
      
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          "type": "gap",
          "title": "Questions 1-7",
          "instruction": "Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">The life and work of Georgia O'Keeffe</h3>
                <ul>
                    <li>Studied art, then worked as a <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="input-1"> in various places in the USA</li>
                    <li>Created drawings using <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="input-2"> which were exhibited in New York City</li>
                    <li>Moved to New York and became famous for her paintings of the city's <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="input-3"></li>
                    <li>Produced a series of innovative close-up paintings of <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="input-4"></li>
                    <li>Went to New Mexico and was initially inspired to paint the many <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="input-5"> that could be found there</li>
                    <li>Continued to paint various features that together formed the dramatic <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="input-6"> of New Mexico for over forty years</li>
                    <li>Travelled widely by plane in later years, and painted pictures of clouds and <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="input-7"> seen from above</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": "teacher" },
            { "qNum": 2, "answer": "charcoal" },
            { "qNum": 3, "answer": "skyscrapers" },
            { "qNum": 4, "answer": "flowers" },
            { "qNum": 5, "answer": "bones" },
            { "qNum": 6, "answer": "landscape" },
            { "qNum": 7, "answer": "rivers" }
          ]
        },
        {
          "type": "tfng",
          "title": "Questions 8-13",
          "instruction": "Do the following statements agree with the information given in Reading Passage 1?",
          "items": [
            { "qNum": 8, "text": "Georgia O'Keeffe's style was greatly influenced by the changing fashions in art over the seven decades of her career.", "answer": "FALSE" },
            { "qNum": 9, "text": "When O'Keeffe finished high school, she had already made her mind up about the career that she wanted.", "answer": "TRUE" },
            { "qNum": 10, "text": "Alfred Stieglitz first discovered O'Keeffe's work when she sent some abstract drawings to his gallery in New York City.", "answer": "FALSE" },
            { "qNum": 11, "text": "O'Keeffe was the subject of Stieglitz's photographic work for many years.", "answer": "TRUE" },
            { "qNum": 12, "text": "O'Keeffe's paintings of the patio of her house in Abiquiu were among the artist's favourite works.", "answer": "NOT GIVEN" },
            { "qNum": 13, "text": "O'Keeffe produced a greater quantity of work during the 1950s to 1970s than at any other time in her life.", "answer": "NOT GIVEN" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          "type": "matching",
          "title": "Questions 14-17",
          "instruction": "Reading Passage 2 has six paragraphs, A-F. Which paragraph contains the following information?",
          "options": ["A", "B", "C", "D", "E", "F"],
          "items": [
            { "qNum": 14, "text": "how a type of plant functions as a natural protection for coastlines", "answer": "C" },
            { "qNum": 15, "text": "a prediction about how long it could take to stop noticing the effects of climate change", "answer": "A" },
            { "qNum": 16, "text": "a reference to the fact that a solution is particularly cost-effective", "answer": "D" },
            { "qNum": 17, "text": "a mention of a technology used to locate areas most in need of intervention", "answer": "F" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 18-22",
          "instruction": "Complete the sentences below. Choose ONE WORD ONLY from the passage for each answer.",
          "htmlContent": `
            <div style="padding:10px;">
                <p>18. The stormwater-management programme in Miami Beach has involved the installation of efficient <span class="q-badge-inline">18</span><input type="text" class="gap-input" data-qnum="18" id="input-18">.</p>
                <p>19. The construction of <span class="q-badge-inline">19</span><input type="text" class="gap-input" data-qnum="19" id="input-19"> was the first stage of a project to ensure the success of mangroves in Indonesia.</p>
                <p>20. As a response to rising floodwaters in the Mekong Delta, a not-for-profit organisation has been building houses that can <span class="q-badge-inline">20</span><input type="text" class="gap-input" data-qnum="20" id="input-20">.</p>
                <p>21. Rising sea levels in Bangladesh have made it necessary to introduce various <span class="q-badge-inline">21</span><input type="text" class="gap-input" data-qnum="21" id="input-21"> that are suitable for areas of high salt content.</p>
                <p>22. A project in LA has increased the number of <span class="q-badge-inline">22</span><input type="text" class="gap-input" data-qnum="22" id="input-22"> on the city's streets.</p>
            </div>
          `,
          "items": [
            { "qNum": 18, "answer": "pumps" },
            { "qNum": 19, "answer": "dams" },
            { "qNum": 20, "answer": "float" },
            { "qNum": 21, "answer": "crops" },
            { "qNum": 22, "answer": "trees" }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 23-26",
          "instruction": "Match each statement with the correct person, A-E.",
          "options": [
            "A. Yanira Pineda",
            "B. Susanna Toi",
            "C. Elizabeth English",
            "D. Raisa Chowdhury",
            "E. Greg Spotts"
          ],
          "items": [
            { "qNum": 23, "text": "It is essential to adopt strategies which involve and help residents of the region.", "answer": "B" },
            { "qNum": 24, "text": "Interventions which reduce heat are absolutely vital for our survival in this location.", "answer": "E" },
            { "qNum": 25, "text": "More work will need to be done in future decades to deal with the impact of rising water levels.", "answer": "A" },
            { "qNum": 26, "text": "The number of locations requiring action to adapt to flooding has grown in recent years.", "answer": "C" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          "type": "matching",
          "title": "Questions 27-31",
          "instruction": "Reading Passage 3 has seven paragraphs, A-G. Which paragraph contains the following information?",
          "options": ["A", "B", "C", "D", "E", "F", "G"],
          "items": [
            { "qNum": 27, "text": "an example of how one predator has been protected by the introduction of livestock guard dogs", "answer": "D" },
            { "qNum": 28, "text": "an optimistic suggestion about the possible positive developments in the use of livestock guard dogs", "answer": "G" },
            { "qNum": 29, "text": "a description of how the methods used by livestock guard dogs help to keep predators away", "answer": "B" },
            { "qNum": 30, "text": "claims by different academics that the use of livestock guard dogs is a successful way of protecting farmers' herds", "answer": "C" },
            { "qNum": 31, "text": "a reference to how livestock guard dogs gain their skills", "answer": "B" }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 32-36",
          "instruction": "Match each statement with the correct person, A-E.",
          "options": [
            "A. Dan Macon",
            "B. Silvia Ribeiro",
            "C. Linda van Bommel",
            "D. Julie Young",
            "E. Bethany Smith"
          ],
          "items": [
            { "qNum": 32, "text": "The use of guard dogs may save the lives of both livestock and wild animals.", "answer": "D" },
            { "qNum": 33, "text": "Claims of a change in behaviour from those using livestock guard dogs may not be totally accurate.", "answer": "E" },
            { "qNum": 34, "text": "There may be negative results if the use of livestock guard dogs is not sufficiently widespread.", "answer": "B" },
            { "qNum": 35, "text": "Livestock guard dogs are the best way of protecting farm animals, as long as the dogs are appropriately handled.", "answer": "C" },
            { "qNum": 36, "text": "Teaching a livestock guard dog how to do its work needs a different focus from teaching a house guard dog.", "answer": "A" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 37-40",
          "instruction": "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">Unintended ecological effects of using guard dogs</h3>
                <p>In Namibia, livestock guard dogs have been used to protect domestic animals from attacks by cheetahs. This has led to a rise in the deaths of other predators, particularly <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="input-37">.</p>
                <p>In addition, it has been suggested that the dogs could have <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="input-38"> which may affect other species, and that they may reduce the amount of <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="input-39"> available to certain wild animals.</p>
                <p>On the other hand, these dogs may help birds by protecting their nests. These might otherwise be threatened by predators such as <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="input-40">.</p>
            </div>
          `,
          "items": [
            { "qNum": 37, "answer": "jackals" },
            { "qNum": 38, "answer": "diseases" },
            { "qNum": 39, "answer": "food" },
            { "qNum": 40, "answer": "foxes" }
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
        // ⚠️ Lưu ý: Vì bạn chưa cung cấp link ảnh của Task 1 (Bamboo diagram) nên tôi để placeholder
        image: "https://i.postimg.cc/FsqtDfWN/Screenshot-2025-12-30-122353.jpg", // Bạn hãy thay bằng link ảnh thật của bạn
        prompt: `The diagram below shows how fabric is manufactured from bamboo.
        
        Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`
      },
      task2: {
        title: "Writing Task 2",
        instruction: "You should spend about 40 minutes on this task.",
        prompt: `Many aspects of the way people dress today are influenced by global fashion trends.
        
        How has global fashion become such a strong influence on people's lives?
        
        Do you think this is a positive or negative development?
        
        Give reasons for your answer and include any relevant examples from your own knowledge or experience.`
      }
    }
  }
};