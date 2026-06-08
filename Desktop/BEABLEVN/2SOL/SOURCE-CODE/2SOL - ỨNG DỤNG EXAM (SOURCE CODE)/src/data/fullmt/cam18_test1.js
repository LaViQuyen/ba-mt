// src/data/cam18_test1.js

export const cam18_test1 = {
  id: "mt9",
  category: "full",
  testName: "MOCK TEST 9",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 10 - 15 PDF)
    // ==========================================================================
    listening: {
      audioSrc: "https://dl.dropboxusercontent.com/scl/fi/088txypn89zmqkr5a5o77/mt9.mp3?rlkey=cr5kuux1h00uc0um2z5ixwydi", // Bạn cần file mp3 tương ứng
      timeLimit: 1695, // 30 phút
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 9 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1: Questions 1-10 ---
        {
          "type": "gap",
          "title": "Part 1: Questions 1-10",
          "instruction": "Complete the notes below. <strong>Write ONE WORD AND/OR A NUMBER</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; margin-bottom: 20px;">
                <h3 style="margin-top:0; color:#2B6830; text-align:center;">Transport survey</h3>
                <div style="display:grid; grid-template-columns: 1fr 2fr; gap:10px; margin-bottom:10px;">
                    <div><strong>Name:</strong></div>
                    <div>Sadie Jones</div>
                    <div><strong>Year of birth:</strong></div>
                    <div>1991</div>
                    <div><strong>Postcode:</strong></div>
                    <div><span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1"></div>
                </div>

                <h4 style="margin-top:15px; border-bottom:1px solid #ccc;">Travelling by bus</h4>
                <div style="padding-left:15px;">
                    <p><strong>Date of bus journey:</strong> <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2"></p>
                    <p><strong>Reason for trip:</strong> shopping and visit to the <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3"></p>
                    <p><strong>Travelled by bus because cost of:</strong> <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4"> too high</p>
                    <p><strong>Got on bus at:</strong> <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5"> Street</p>
                    <p><strong>Complaints about bus service:</strong></p>
                    <ul>
                        <li>bus today was <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="q-6"></li>
                        <li>frequency of buses in the <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7"></li>
                    </ul>
                </div>

                <h4 style="margin-top:15px; border-bottom:1px solid #ccc;">Travelling by car</h4>
                <div style="padding-left:15px;">
                    <p><strong>Goes to the:</strong> <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8"> by car</p>
                </div>

                <h4 style="margin-top:15px; border-bottom:1px solid #ccc;">Travelling by bicycle</h4>
                <div style="padding-left:15px;">
                    <p><strong>Dislikes travelling by bike in the city centre because of the:</strong> <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9"></p>
                    <p><strong>Doesn't own a bike because of a lack of:</strong> <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10"></p>
                </div>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": "DW30 7YZ" },
            { "qNum": 2, "answer": ["24 April", "24th April"] },
            { "qNum": 3, "answer": "dentist" },
            { "qNum": 4, "answer": "parking" },
            { "qNum": 5, "answer": "Claxby" },
            { "qNum": 6, "answer": "late" },
            { "qNum": 7, "answer": "evening" },
            { "qNum": 8, "answer": "supermarket" },
            { "qNum": 9, "answer": "pollution" },
            { "qNum": 10, "answer": "storage" }
          ]
        },

        // --- PART 2: Questions 11-20 ---
        {
          "type": "mcq_single",
          "title": "Part 2: Questions 11-13",
          "instruction": "Choose the correct letter, A, B or C.",
          "items": [
            {
              "qNum": 11,
              "text": "Why does the speaker apologise about the seats?",
              "options": [
                "A. They are too small.",
                "B. There are not enough of them.",
                "C. Some of them are very close together."
              ],
              "answer": "C"
            },
            {
              "qNum": 12,
              "text": "What does the speaker say about the age of volunteers?",
              "options": [
                "A. The age of volunteers is less important than other factors.",
                "B. Young volunteers are less reliable than older ones.",
                "C. Most volunteers are about 60 years old."
              ],
              "answer": "A"
            },
            {
              "qNum": 13,
              "text": "What does the speaker say about training?",
              "options": [
                "A. It is continuous.",
                "B. It is conducted by a manager.",
                "C. It takes place online."
              ],
              "answer": "A"
            }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 14-15",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO issues does the speaker ask the audience to consider before they apply to be volunteers?",
          "options": [
            "A. their financial situation",
            "B. their level of commitment",
            "C. their work experience",
            "D. their ambition",
            "E. their availability"
          ],
          "items": [
            { "qNums": [14, 15], "answer": ["B", "E"] }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 16-20",
          "instruction": "What does the speaker suggest would be helpful for each of the following areas of voluntary work? Choose FIVE answers from the box.",
          "options": [
            "A. experience on stage",
            "B. original, new ideas",
            "C. parenting skills",
            "D. an understanding of food and diet",
            "E. retail experience",
            "F. a good memory",
            "G. a good level of fitness"
          ],
          "items": [
            { "qNum": 16, "text": "Fundraising", "answer": "B" },
            { "qNum": 17, "text": "Litter collection", "answer": "G" },
            { "qNum": 18, "text": "'Playmates'", "answer": "D" },
            { "qNum": 19, "text": "Story club", "answer": "A" },
            { "qNum": 20, "text": "First aid", "answer": "F" }
          ]
        },

        // --- PART 3: Questions 21-30 ---
        {
          "type": "mcq_single",
          "title": "Part 3: Questions 21-26",
          "instruction": "Choose the correct letter, A, B or C.",
          "items": [
            {
              "qNum": 21,
              "text": "What problem did Chantal have at the start of the talk?",
              "options": ["A. Her view of the speaker was blocked.", "B. She was unable to find an empty seat.", "C. The students next to her were talking."],
              "answer": "A"
            },
            {
              "qNum": 22,
              "text": "What were Hugo and Chantal surprised to hear about the job market?",
              "options": ["A. It has become more competitive than it used to be.", "B. There is more variety in it than they had realised.", "C. Some areas of it are more exciting than others."],
              "answer": "B"
            },
            {
              "qNum": 23,
              "text": "Hugo and Chantal agree that the speaker's message was",
              "options": ["A. unfair to them at times.", "B. hard for them to follow.", "C. critical of the industry."],
              "answer": "A"
            },
            {
              "qNum": 24,
              "text": "What do Hugo and Chantal criticise about their school careers advice?",
              "options": ["A. when they received the advice", "B. how much advice was given", "C. who gave the advice"],
              "answer": "C"
            },
            {
              "qNum": 25,
              "text": "When discussing their future, Hugo and Chantal disagree on",
              "options": ["A. which is the best career in fashion.", "B. when to choose a career in fashion.", "C. why they would like a career in fashion."],
              "answer": "B"
            },
            {
              "qNum": 26,
              "text": "How does Hugo feel about being an unpaid assistant?",
              "options": ["A. He is realistic about the practice.", "B. He feels the practice is dishonest.", "C. He thinks others want to change the practice."],
              "answer": "A"
            }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 27-28",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO mistakes did the speaker admit she made in her first job?",
          "options": [
            "A. being dishonest to her employer",
            "B. paying too much attention to how she looked",
            "C. expecting to become well known",
            "D. trying to earn a lot of money",
            "E. openly disliking her client"
          ],
          "items": [
            { "qNums": [27, 28], "answer": ["B", "E"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 29-30",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO pieces of retail information do Hugo and Chantal agree would be useful?",
          "options": [
            "A. the reasons people return fashion items",
            "B. how much time people have to shop for clothes",
            "C. fashion designs people want but can't find",
            "D. the best time of year for fashion buying",
            "E. the most popular fashion sizes"
          ],
          "items": [
            { "qNums": [29, 30], "answer": ["A", "C"] }
          ]
        },

        // --- PART 4: Questions 31-40 ---
        {
          "type": "gap",
          "title": "Part 4: Questions 31-40",
          "instruction": "Complete the notes below. <strong>Write ONE WORD ONLY</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
                <h3 style="text-align:center; color:#2B6830;">Elephant translocation</h3>
                
                <p><strong>Reasons for overpopulation at Majete National Park</strong></p>
                <ul>
                    <li>strict enforcement of anti-poaching laws</li>
                    <li>successful breeding</li>
                </ul>

                <p><strong>Problems caused by elephant overpopulation</strong></p>
                <ul>
                    <li>greater competition, causing hunger for elephants</li>
                    <li>damage to <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="q-31"> in the park</li>
                </ul>

                <p><strong>The translocation process</strong></p>
                <ul>
                    <li>a suitable group of elephants from the same <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="q-32"> was selected</li>
                    <li>vets and park staff made use of <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33"> to help guide the elephants into an open plain</li>
                    <li>elephants were immobilised with tranquilisers</li>
                    <li>this process had to be completed quickly to reduce <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34"></li>
                    <li>elephants had to be turned on their <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"> to avoid damage to their lungs</li>
                    <li>elephants' <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36"> had to be monitored constantly</li>
                    <li>tracking devices were fitted to the matriarchs</li>
                    <li>data including the size of their tusks and <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37"> was taken</li>
                    <li>elephants were taken by truck to their new reserve</li>
                </ul>

                <p><strong>Advantages of translocation at Nkhotakota Wildlife Park</strong></p>
                <ul>
                    <li><span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="q-38"> opportunities</li>
                    <li>a reduction in the number of poachers and <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="q-39"></li>
                    <li>an example of conservation that other parks can follow</li>
                    <li>an increase in <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="q-40"> as a contributor to GDP</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 31, "answer": "fences" },
            { "qNum": 32, "answer": "family" },
            { "qNum": 33, "answer": "helicopters" },
            { "qNum": 34, "answer": "stress" },
            { "qNum": 35, "answer": "sides" },
            { "qNum": 36, "answer": "breathing" },
            { "qNum": 37, "answer": "feet" },
            { "qNum": 38, "answer": "employment" },
            { "qNum": 39, "answer": "weapons" },
            { "qNum": 40, "answer": "tourism" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 15 - 28 PDF)
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">Urban farming</h3>
            <p style="text-align:center; font-style:italic;">In Paris, urban farmers are trying a soil-free approach to agriculture that uses less space and fewer resources. Could it help cities face the threats to our food supplies?</p>

            <p>On top of a striking new exhibition hall in southern Paris, the world's largest urban rooftop farm has started to bear fruit. Strawberries that are small, intensely flavoured and resplendently red sprout abundantly from large plastic tubes. Peer inside and you see the tubes are completely hollow, the roots of dozens of strawberry plants dangling down inside them. From identical vertical tubes nearby burst row upon row of lettuces; near those are aromatic herbs, such as basil, sage and peppermint. Opposite, in narrow, horizontal trays packed not with soil but with coconut fibre, grow cherry tomatoes, shiny aubergines and brightly coloured chards.</p>

            <p>Pascal Hardy, an engineer and sustainable development consultant, began experimenting with vertical farming and aeroponic growing towers - as the soil-free plastic tubes are known - on his Paris apartment block roof five years ago. The urban rooftop space above the exhibition hall is somewhat bigger: 14,000 square metres and almost exactly the size of a couple of football pitches. Already, the team of young urban farmers who tend it have picked, in one day, 3,000 lettuces and 150 punnets of strawberries. When the remaining two thirds of the vast open area are in production, 20 staff will harvest up to 1,000 kg of perhaps 35 different varieties of fruit and vegetables, every day. 'We're not ever, obviously, going to feed the whole city this way,' cautions Hardy. 'In the urban environment you're working with very significant practical constraints, clearly, on what you can do and where. But if enough unused space can be developed like this, there's no reason why you shouldn't eventually target maybe between 5% and 10% of consumption.'</p>

            <p>Perhaps most significantly, however, this is a real-life showcase for the work of Hardy's flourishing urban agriculture consultancy, Agripolis, which is currently fielding enquiries from around the world to design, build and equip a new breed of soil-free inner-city farm. 'The method's advantages are many,' he says. 'First, I don't much like the fact that most of the fruit and vegetables we eat have been treated with something like 17 different pesticides, or that the intensive farming techniques that produced them are such huge generators of greenhouse gases. I don't much like the fact, either, that they've travelled an average of 2,000 refrigerated kilometres to my plate, that their quality is so poor, because the varieties are selected for their capacity to withstand such substantial journeys, or that 80% of the price I pay goes to wholesalers and transport companies, not the producers.'</p>

            <p>Produce grown using this soil-free method, on the other hand - which relies solely on a small quantity of water, enriched with organic nutrients, pumped around a closed circuit of pipes, towers and trays - is 'produced up here, and sold locally, just down there. It barely travels at all,' Hardy says. 'You can select crop varieties for their flavour, not their resistance to the transport and storage chain, and you can pick them when they're really at their best, and not before.' No soil is exhausted, and the water that gently showers the plants' roots every 12 minutes is recycled, so the method uses 90% less water than a classic intensive farm for the same yield.</p>

            <p>Urban farming is not, of course, a new phenomenon. Inner-city agriculture is booming from Shanghai to Detroit and Tokyo to Bangkok. Strawberries are being grown in disused shipping containers, mushrooms in underground carparks. Aeroponic farming, he says, is 'virtuous'. The equipment weighs little, can be installed on almost any flat surface and is cheap to buy: roughly €100 to €150 per square metre. It is cheap to run, too, consuming a tiny fraction of the electricity used by some techniques. Produce grown this way typically sells at prices that, while generally higher than those of classic intensive agriculture, are lower than soil-based organic growers. There are limits to what farmers can grow this way, of course, and much of the produce is suited to the summer months. 'Root vegetables we cannot do, at least not yet,' he says. 'Radishes are OK, but carrots, potatoes, that kind of thing - the roots are simply too long. Fruit trees are obviously not an option. And beans tend to take up a lot of space for not much return.' Nevertheless, urban farming of the kind being practised in Paris is one part of a bigger and fast-changing picture that is bringing food production closer to our lives.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">Forest management in Pennsylvania, USA</h3>
            <p style="text-align:center; font-style:italic;">How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management</p>

            <p><strong>A</strong> A tree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest. The same tree can be valued very differently by each person who looks at it. A large, straight black cherry tree has high value as timber to be cut into logs or made into furniture, but for a landowner more interested in wildlife habitat, the real value of that stem (or trunk) may be the food it provides to animals. Likewise, if the tree suffers from black knot disease, its value for timber decreases, but to a woodworker interested in making bowls, it brings an opportunity for a unique and beautiful piece of art.</p>

            <p><strong>B</strong> In the past, Pennsylvania landowners were solely interested in the value of their trees as high-quality timber. The norm was to remove the stems of highest quality and leave behind poorly formed trees that were not as well suited to the site where they grew. This practice, called 'high-grading', has left a legacy of 'low-use wood' in the forests. Some people even call these 'junk trees', and they are abundant in Pennsylvania. These trees have lower economic value for traditional timber markets, compete for growth with higher-value trees, shade out desirable regeneration and decrease the health of a stand leaving it more vulnerable to poor weather and disease. Management that specifically targets low-use wood can help landowners manage these forest health issues, and wood energy markets help promote this.</p>

            <p><strong>C</strong> Wood energy markets can accept less expensive wood material of lower quality than would be suitable for traditional timber markets. Most wood used for energy in Pennsylvania is used to produce heat or electricity through combustion. Many schools and hospitals use wood boiler systems to heat and power their facilities, many homes are primarily heated with wood, and some coal plants incorporate wood into their coal streams to produce electricity. Wood can also be gasified for electrical generation and can even be made into liquid fuels like ethanol and gasoline for lorries and cars. All these products are made primarily from low-use wood. Several tree- and plant-cutting approaches, which could greatly improve the long-term quality of a forest, focus strongly or solely on the use of wood for those markets.</p>

            <p><strong>D</strong> One such approach is called a Timber Stand Improvement (TSI) Cut. In a TSI Cut, really poor-quality tree and plant material is cut down to allow more space, light, and other resources to the highest-valued stems that remain. Removing invasive plants might be another primary goal of a TSI Cut. The stems that are left behind might then grow in size and develop more foliage and larger crowns or tops that produce more coverage for wildlife; they have a better chance to regenerate in a less crowded environment. TSI Cuts can be tailored to one farmer's specific management goals for his or her land.</p>

            <p><strong>E</strong> Another approach that might yield a high amount of low-use wood is a Salvage Cut. With the many pests and pathogens visiting forests including hemlock wooly adelgid, Asian longhorned beetle, emerald ash borer, and gypsy moth, to name just a few, it is important to remember that those working in the forests can help ease these issues through cutting procedures. These types of cut reduce the number of sick trees and seek to manage the future spread of a pest problem. They leave vigorous trees that have stayed healthy enough to survive the outbreak.</p>

            <p><strong>F</strong> A Shelterwood Cut, which only takes place in a mature forest that has already been thinned several times, involves removing all the mature trees when other seedlings have become established. This then allows the forester to decide which tree species are regenerated. It leaves a young forest where all trees are at a similar point in their growth. It can also be used to develop a two-tier forest so that there are two harvests and the money that comes in is spread out over a decade or more.</p>

            <p><strong>G</strong> Thinnings and dense and dead wood removal for fire prevention also center on the production of low-use wood. However, it is important to remember that some retention of what many would classify as low-use wood is very important. The tops of trees that have been cut down should be left on the site so that their nutrients cycle back into the soil. In addition, trees with many cavities are extremely important habitats for insect predators like woodpeckers, bats and small mammals. They help control problem insects and increase the health and resilience of the forest. It is also important to remember that not all small trees are low-use. For example, many species like hawthorn provide food for wildlife. Finally, rare species of trees in a forest should also stay behind as they add to its structural diversity.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            <h3 style="text-align: center;">Conquering Earth's space junk problem</h3>
            <p style="text-align:center; font-style:italic;">Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet. Researchers are working to reduce these threats</p>

            <p><strong>A</strong> Last year, commercial companies, military and civil departments and amateurs sent more than 400 satellites into orbit, over four times the yearly average in the previous decade. Numbers could rise even more sharply if leading space companies follow through on plans to deploy hundreds to thousands of large constellations of satellites to space in the next few years.</p>

            <p><strong>B</strong> All that traffic can lead to disaster. Ten years ago, a US commercial Iridium satellite smashed into an inactive Russian communications satellite called Cosmos-2251, creating thousands of new pieces of space shrapnel that now threaten other satellites in low Earth orbit - the zone stretching up to 2,000 kilometres in altitude. Altogether, there are roughly 20,000 human-made objects in orbit, from working satellites to small rocket pieces. And satellite operators can't steer away from every potential crash, because each move consumes time and fuel that could otherwise be used for the spacecraft's main job.</p>

            <p><strong>C</strong> Concern about space junk goes back to the beginning of the satellite era, but the number of objects in orbit is rising so rapidly that researchers are investigating new ways of attacking the problem. Several teams are trying to improve methods for assessing what is in orbit, so that satellite operators can work more efficiently in ever-more-crowded space. Some researchers are now starting to compile a massive data set that includes the best possible information on where everything is in orbit. Others are developing taxonomies of space debris - working on measuring properties such as the shape and size of an object, so that satellite operators know how much to worry about what's coming their way.</p>

            <p><strong>D</strong> The alternative, many say, is unthinkable. Just a few uncontrolled space crashes could generate enough debris to set off a runaway cascade of fragments, rendering near-Earth space unusable. 'If we go on like this, we will reach a point of no return,' says Carolin Frueh, an astrodynamical researcher at Purdue University in West Lafayette, Indiana.</p>

            <p><strong>E</strong> Even as our ability to monitor space objects increases, so too does the total number of items in orbit. That means companies, governments and other players in space are collaborating in new ways to avoid a shared threat. International groups such as the Inter-Agency Space Debris Coordination Committee have developed guidelines on space sustainability. Those include inactivating satellites at the end of their useful life by venting pressurised materials or leftover fuel that might lead to explosions.</p>

            <p><strong>F</strong> Ground-based sensors can now monitor debris down to the size of a softball, but they cannot tell the difference between a working satellite and a piece of junk. To help distinguish the two, some researchers are proposing that all satellites should be required to carry tracking devices, much like the transponders on airplanes. But not everyone is enthusiastic about the idea. Some satellite operators worry that the devices could fail or be hacked. And the US military, which tracks space debris, is concerned that the data could be used to target US satellites.</p>
        </div>
      `,
      questions: [
        {
          "type": "gap",
          "title": "Questions 1-3",
          "instruction": "Complete the sentences below. Choose <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">Urban farming in Paris</h3>
              <div style="line-height: 2;">
                  <p>1. Vertical tubes are used to grow strawberries, <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1" id="q-1"> and herbs.</p>
                  <p>2. There will eventually be a daily harvest of as much as <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2" id="q-2"> in weight of fruit and vegetables.</p>
                  <p>3. It may be possible that the farm's produce will account for as much as 10% of the city's <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3" id="q-3"> overall.</p>
              </div>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": "lettuces" },
            { "qNum": 2, "answer": ["1,000 kg", "1000 kg"] },
            { "qNum": 3, "answer": ["consumption", "food consumption"] }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 4-7",
          "instruction": "Complete the table below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#fff; padding:20px; border:1px solid #ddd; overflow-x:auto;">
                <h3 style="text-align:center; color:#2B6830; margin-top:0;">Intensive farming versus aeroponic urban farming</h3>
                <table style="width:100%; border-collapse: collapse; min-width: 600px; font-size: 0.95rem;">
                    <thead>
                        <tr style="background:#2B6830; color:white;">
                            <th style="padding:10px; border:1px solid #ccc; width: 20%;"></th>
                            <th style="padding:10px; border:1px solid #ccc; width: 26%;">Growth</th>
                            <th style="padding:10px; border:1px solid #ccc; width: 27%;">Selection</th>
                            <th style="padding:10px; border:1px solid #ccc; width: 27%;">Sale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">Intensive farming</td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                <ul style="padding-left:15px; margin:0;">
                                    <li>wide range of <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4" id="q-4" style="width:80px;"> used</li>
                                    <li>techniques pollute air</li>
                                </ul>
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                <ul style="padding-left:15px; margin:0;">
                                    <li>quality not good</li>
                                    <li>varieties chosen that can survive long <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5" id="q-5" style="width:80px;"></li>
                                </ul>
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                <ul style="padding-left:15px; margin:0;">
                                    <li><span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6" id="q-6" style="width:80px;"> receive very little of overall income</li>
                                </ul>
                            </td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">Aeroponic urban farming</td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                <ul style="padding-left:15px; margin:0;">
                                    <li>no soil used</li>
                                    <li>nutrients added to water, which is recycled</li>
                                </ul>
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                <ul style="padding-left:15px; margin:0;">
                                    <li>produce chosen because of its <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7" id="q-7" style="width:80px;"></li>
                                </ul>
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
          "items": [
            { "qNum": 4, "answer": "pesticides" },
            { "qNum": 5, "answer": "journeys" },
            { "qNum": 6, "answer": "producers" },
            { "qNum": 7, "answer": ["flavour", "flavor"] }
          ]
        },
        {
          "type": "tfng",
          "title": "Questions 8-13",
          "instruction": "Do the following statements agree with the information given in Reading Passage 1?",
          "items": [
            { "qNum": 8, "text": "Urban farming can take place above or below ground.", "answer": "TRUE" },
            { "qNum": 9, "text": "Some of the equipment used in aeroponic farming can be made by hand.", "answer": "NOT GIVEN" },
            { "qNum": 10, "text": "Urban farming relies more on electricity than some other types of farming.", "answer": "FALSE" },
            { "qNum": 11, "text": "Fruit and vegetables grown on an aeroponic urban farm are cheaper than traditionally grown organic produce.", "answer": "TRUE" },
            { "qNum": 12, "text": "Most produce can be grown on an aeroponic urban farm at any time of the year.", "answer": "FALSE" },
            { "qNum": 13, "text": "Beans take longer to grow on an urban farm than other vegetables.", "answer": "NOT GIVEN" }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 14-18",
          "instruction": "Reading Passage 2 has seven paragraphs, <strong>A-G</strong>. Which paragraph contains the following information?<br><strong>NB</strong> You may use any letter more than once.",
          "options": ["A", "B", "C", "D", "E", "F", "G"], // BỔ SUNG OPTIONS VÀ ĐỔI SANG DẠNG MATCHING ĐỂ FIX LỖI CRASH
          "items": [
            { "qNum": 14, "text": "bad outcomes for a forest when people focus only on its financial reward", "answer": "B" },
            { "qNum": 15, "text": "reference to the aspects of any tree that contribute to its worth", "answer": "A" },
            { "qNum": 16, "text": "mention of the potential use of wood to help run vehicles", "answer": "C" },
            { "qNum": 17, "text": "examples of insects that attack trees", "answer": "E" },
            { "qNum": 18, "text": "an alternative name for trees that produce low-use wood", "answer": "B" }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 19-21",
          "instruction": "Match each purpose with the correct timber cut, <strong>A, B or C</strong>.<br><strong>NB</strong> You may use any letter more than once.",
          "options": [
            "A. a TSI Cut",
            "B. a Salvage Cut",
            "C. a Shelterwood Cut"
          ],
          "items": [
            { "qNum": 19, "text": "to remove trees that are diseased", "answer": "B" },
            { "qNum": 20, "text": "to generate income across a number of years", "answer": "C" },
            { "qNum": 21, "text": "to create a forest whose trees are close in age", "answer": "C" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 22-26",
          "instruction": "Complete the sentences below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p>22. Some dead wood is removed to avoid the possibility of <span class="q-badge-inline">22</span><input class="gap-input" data-qnum="22" id="q-22">.</p>
                <p>23. The <span class="q-badge-inline">23</span><input class="gap-input" data-qnum="23" id="q-23"> from the tops of cut trees can help improve soil quality.</p>
                <p>24. Some damaged trees should be left, as their <span class="q-badge-inline">24</span><input class="gap-input" data-qnum="24" id="q-24"> provide habitats for a range of creatures.</p>
                <p>25. Some trees that are small, such as <span class="q-badge-inline">25</span><input class="gap-input" data-qnum="25" id="q-25">, are a source of food for animals and insects.</p>
                <p>26. Any trees that are <span class="q-badge-inline">26</span><input class="gap-input" data-qnum="26" id="q-26"> should be left to grow, as they add to the variety of species in the forest.</p>
            </div>
          `,
          "items": [
            { "qNum": 22, "answer": "fire" },
            { "qNum": 23, "answer": "nutrients" },
            { "qNum": 24, "answer": "cavities" },
            { "qNum": 25, "answer": "hawthorn" },
            { "qNum": 26, "answer": "rare" }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 27-31",
          "instruction": "Reading Passage 3 has six sections, <strong>A-F</strong>. Which section contains the following information?",
          "options": ["A", "B", "C", "D", "E", "F"], // BỔ SUNG OPTIONS VÀ ĐỔI SANG DẠNG MATCHING ĐỂ FIX LỖI CRASH
          "items": [
            { "qNum": 27, "text": "a reference to the cooperation that takes place to try and minimise risk", "answer": "E" }, // Chú ý: Đáp án đúng là E theo sách Cambridge, tôi đã sửa lại theo key chuẩn
            { "qNum": 28, "text": "an explanation of a person's aims", "answer": "C" }, // Đáp án chuẩn Cambridge là C
            { "qNum": 29, "text": "a description of a major collision that occurred in space", "answer": "B" }, // Đáp án chuẩn Cambridge là B
            { "qNum": 30, "text": "a comparison between tracking objects in space and the efficiency of a transportation system", "answer": "F" }, // Đáp án chuẩn Cambridge là F
            { "qNum": 31, "text": "a reference to efforts to classify space junk", "answer": "C" } // Đáp án chuẩn Cambridge là C
          ]
        },
        {
          "type": "gap",
          "title": "Questions 32-35",
          "instruction": "Complete the summary below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h3 style="text-align:center;">The Inter-Agency Space Debris Coordination Committee</h3>
              <p>The committee gives advice on how the <span class="q-badge-inline">32</span><input class="gap-input" data-qnum="32" id="q-32"> of space can be achieved. The committee advises that when satellites are no longer active, any unused <span class="q-badge-inline">33</span><input class="gap-input" data-qnum="33" id="q-33"> or pressurised material that could cause <span class="q-badge-inline">34</span><input class="gap-input" data-qnum="34" id="q-34"> should be removed.</p>
              <p>Although operators of large satellite constellations accept that they have obligations as stewards of space, Holger Krag points out that the operators that become <span class="q-badge-inline">35</span><input class="gap-input" data-qnum="35" id="q-35"> are unlikely to prioritise removing their satellites from space.</p>
            </div>
          `,
          "items": [
            { "qNum": 32, "answer": "sustainability" },
            { "qNum": 33, "answer": "fuel" },
            { "qNum": 34, "answer": "explosions" },
            { "qNum": 35, "answer": "bankrupt" } // Lưu ý: Từ này có vẻ không xuất hiện trực tiếp trong Passage 3 được cung cấp (Có thể thiếu đoạn G/H). Tuy nhiên tôi giữ nguyên theo data của bạn.
          ]
        },
        {
          "type": "matching",
          "title": "Questions 36-40",
          "instruction": "Match each statement with the correct person, <strong>A, B, C or D</strong>.<br><strong>NB</strong> You may use any letter more than once.",
          "options": [
            "A. Carolin Frueh",
            "B. Holger Krag",
            "C. Marlon Sorge",
            "D. Moriba Jah"
          ],
          "items": [
            { "qNum": 36, "text": "Knowing the exact location of space junk would help prevent any possible danger.", "answer": "C" },
            { "qNum": 37, "text": "Space should be available to everyone and should be preserved for the future.", "answer": "D" },
            { "qNum": 38, "text": "A recommendation regarding satellites is widely ignored.", "answer": "B" },
            { "qNum": 39, "text": "There is conflicting information about where some satellites are in space.", "answer": "D" },
            { "qNum": 40, "text": "There is a risk we will not be able to undo the damage that occurs in space.", "answer": "A" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 29-30 PDF)
    // ==========================================================================
    writing: {
      task1: {
        title: "Writing Task 1",
        instruction: "You should spend about 20 minutes on this task.",
        // Bạn cần cắt ảnh biểu đồ từ trang 29 file PDF và lưu vào thư mục public/images/cam18/
        image: "https://i.postimg.cc/jjdSdjZD/Screenshot-2026-01-18-095928.png", 
        prompt: `The graph below gives information about the percentage of the population in four Asian countries living in cities from 1970 to 2020, with predictions for 2030 and 2040.
        
        Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`
      },
      task2: {
        title: "Writing Task 2",
        instruction: "You should spend about 40 minutes on this task.",
        prompt: `Write about the following topic:
        
        The most important aim of science should be to improve people’s lives.
        
        To what extent do you agree or disagree with this statement?
        
        Give reasons for your answer and include any relevant examples from your own knowledge or experience.`
      }
    }
  }
};