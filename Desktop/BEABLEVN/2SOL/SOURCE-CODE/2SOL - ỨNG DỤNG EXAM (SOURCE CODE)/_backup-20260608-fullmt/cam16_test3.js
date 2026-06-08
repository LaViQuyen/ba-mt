// src/data/cam16_test3.js

export const cam16_test3 = {
  id: "mt19",
  category: "full",
  testName: "MOCK TEST 19",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 55 - 60 PDF) - Đáp án trang 125
    // ==========================================================================
    listening: {
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/beablevn-ielts.firebasestorage.app/o/audio%2Fmt19.mp3?alt=media&token=c78c0aab-719a-4ab6-ac9a-0169322dc206",
      timeLimit: 1792,
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 19 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1: Questions 1-10 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-10",
          instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
                <h3 style="text-align:center; color:#2B6830; margin-top:0;">JUNIOR CYCLE CAMP</h3>
                
                <p style="font-style:italic;">The course focuses on skills and safety.</p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Charlie would be placed in Level 5.</li>
                    <li>First of all, children at this level are taken to practise in a <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1">.</li>
                </ul>

                <h4 style="color:#2B6830; margin-bottom: 10px;">Instructors</h4>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Instructors wear <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2"> shirts.</li>
                    <li>A <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"> is required and training is given.</li>
                </ul>

                <h4 style="color:#2B6830; margin-bottom: 10px;">Classes</h4>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>The size of the classes is limited.</li>
                    <li>There are quiet times during the morning for a <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"> or a game.</li>
                    <li>Classes are held even if there is <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5">.</li>
                </ul>

                <h4 style="color:#2B6830; margin-bottom: 10px;">What to bring</h4>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>a change of clothing</li>
                    <li>a <span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"></li>
                    <li>shoes (not sandals)</li>
                    <li>Charlie's <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"></li>
                </ul>

                <h4 style="color:#2B6830; margin-bottom: 10px;">Day 1</h4>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Charlie should arrive at 9.20 am on the first day.</li>
                    <li>Before the class, his <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8"> will be checked.</li>
                    <li>He should then go to the <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9"> to meet his class instructor.</li>
                </ul>

                <h4 style="color:#2B6830; margin-bottom: 10px;">Cost</h4>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>The course costs $<span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10"> per week.</li>
                </ul>
            </div>
          `,
          items: [
            { qNum: 1, answer: "park" },
            { qNum: 2, answer: "blue" },
            { qNum: 3, answer: "reference" },
            { qNum: 4, answer: "story" },
            { qNum: 5, answer: "rain" },
            { qNum: 6, answer: "snack" },
            { qNum: 7, answer: "medication" },
            { qNum: 8, answer: "helmet" },
            { qNum: 9, answer: "tent" },
            { qNum: 10, answer: "199" }
          ]
        },

        // --- PART 2 ---
        {
          type: "mcq_multi",
          title: "Part 2: Questions 11-12",
          instruction: "Choose TWO letters, A-E.",
          stem: "According to Megan, what are the TWO main advantages of working in the agriculture and horticulture sectors?",
          options: [
            "A. the active lifestyle",
            "B. the above-average salaries",
            "C. the flexible working opportunities",
            "D. the opportunities for overseas travel",
            "E. the chance to be in a natural environment"
          ],
          items: [
            { qNums: [11, 12], answer: ["A", "C"] } // Key: A, C (in either order)
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 13-14",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO of the following are likely to be disadvantages for people working outdoors?",
          options: [
            "A. the increasing risk of accidents",
            "B. being in a very quiet location",
            "C. difficult weather conditions at times",
            "D. the cost of housing",
            "E. the level of physical fitness required"
          ],
          items: [
            { qNums: [13, 14], answer: ["B", "C"] } // Key: B, C (in either order)
          ]
        },
        {
          type: "matching",
          title: "Questions 15-20",
          instruction: "What information does Megan give about each of the following job opportunities? Choose SIX answers from the box.",
          options: [
            "A. not a permanent job",
            "B. involves leading a team",
            "C. experience not essential",
            "D. intensive work but also fun",
            "E. chance to earn more through overtime",
            "F. chance for rapid promotion",
            "G. accommodation available",
            "H. local travel involved"
          ],
          items: [
            { qNum: 15, text: "Fresh food commercial manager", answer: "D" },
            { qNum: 16, text: "Agronomist", answer: "F" },
            { qNum: 17, text: "Fresh produce buyer", answer: "A" },
            { qNum: 18, text: "Garden centre sales manager", answer: "H" },
            { qNum: 19, text: "Tree technician", answer: "C" },
            { qNum: 20, text: "Farm worker", answer: "G" }
          ]
        },

        // --- PART 3 ---
        {
          type: "mcq_multi",
          title: "Part 3: Questions 21-22",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO points does Adam make about his experiment on artificial sweeteners?",
          options: [
            "A. The results were what he had predicted.",
            "B. The experiment was simple to set up.",
            "C. A large sample of people was tested.",
            "D. The subjects were unaware of what they were drinking.",
            "E. The test was repeated several times for each person."
          ],
          items: [
            { qNums: [21, 22], answer: ["C", "E"] } // Key: C, E
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 23-24",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO problems did Rosie have when measuring the fat content of nuts?",
          options: [
            "A. She used the wrong sort of nuts.",
            "B. She used an unsuitable chemical.",
            "C. She did not grind the nuts finely enough.",
            "D. The information on the nut package was incorrect.",
            "E. The weighing scales may have been unsuitable."
          ],
          items: [
            { qNums: [23, 24], answer: ["C", "E"] } // Key: C, E
          ]
        },
        {
          type: "mcq_single",
          title: "Questions 25-30",
          instruction: "Choose the correct letter, A, B or C.",
          items: [
            {
              qNum: 25,
              text: "Adam suggests that restaurants could reduce obesity if their menus",
              options: ["A. offered fewer options.", "B. had more low-calorie foods.", "C. were organised in a particular way."],
              answer: "C"
            },
            {
              qNum: 26,
              text: "The students agree that food manufacturers deliberately",
              options: ["A. make calorie counts hard to understand.", "B. fail to provide accurate calorie counts.", "C. use ineffective methods to reduce calories."],
              answer: "A"
            },
            {
              qNum: 27,
              text: "What does Rosie say about levels of exercise in England?",
              options: ["A. The amount recommended is much too low.", "B. Most people overestimate how much they do.", "C. Women now exercise more than they used to."],
              answer: "B"
            },
            {
              qNum: 28,
              text: "Adam refers to the location and width of stairs in a train station to illustrate",
              options: ["A. practical changes that can influence people's behaviour.", "B. methods of helping people who have mobility problems.", "C. ways of preventing accidents by controlling crowd movement."],
              answer: "A"
            },
            {
              qNum: 29,
              text: "What do the students agree about including reference to exercise in their presentation?",
              options: ["A. They should probably leave it out.", "B. They need to do more research on it.", "C. They should discuss this with their tutor."],
              answer: "A"
            },
            {
              qNum: 30,
              text: "What are the students going to do next for their presentation?",
              options: ["A. prepare some slides for it", "B. find out how long they have for it", "C. decide on its content and organisation"],
              answer: "C"
            }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-40",
          instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">Hand knitting</h3>
              
              <p><strong>Interest in knitting</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>Knitting has a long history around the world.</li>
                <li>We imagine someone like a <span class="q-badge-inline">31</span><input class="gap-input" data-qnum="31"> knitting.</li>
                <li>A <span class="q-badge-inline">32</span><input class="gap-input" data-qnum="32"> ago, knitting was expected to disappear.</li>
                <li>The number of knitting classes is now increasing.</li>
                <li>People are buying more <span class="q-badge-inline">33</span><input class="gap-input" data-qnum="33"> for knitting nowadays.</li>
              </ul>

              <p><strong>Benefits of knitting</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>gives support in times of <span class="q-badge-inline">34</span><input class="gap-input" data-qnum="34"> difficulty</li>
                <li>requires only <span class="q-badge-inline">35</span><input class="gap-input" data-qnum="35"> skills and little money to start</li>
                <li>reduces stress in a busy life</li>
              </ul>

              <p><strong>Early knitting</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>The origins are not known.</li>
                <li>Findings show early knitted items to be <span class="q-badge-inline">36</span><input class="gap-input" data-qnum="36"> in shape.</li>
                <li>The first needles were made of natural materials such as wood and <span class="q-badge-inline">37</span><input class="gap-input" data-qnum="37">.</li>
                <li>Early yarns felt <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38"> to touch.</li>
                <li>Wool became the most popular yarn for spinning.</li>
                <li>Geographical areas had their own <span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39"> of knitting.</li>
                <li>Everyday tasks like looking after <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40"> were done while knitting.</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "grandmother" },
            { qNum: 32, answer: "decade" },
            { qNum: 33, answer: "equipment" },
            { qNum: 34, answer: "economic" },
            { qNum: 35, answer: "basic" },
            { qNum: 36, answer: "round" },
            { qNum: 37, answer: "bone" },
            { qNum: 38, answer: "rough" },
            { qNum: 39, answer: "style" },
            { qNum: 40, answer: "sheep" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 61 - 72 PDF) - Đáp án trang 126
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">Roman shipbuilding and navigation</h3>
            
            <p>Shipbuilding today is based on science and ships are built using computers and sophisticated tools. Shipbuilding in ancient Rome, however, was more of an art relying on estimation, inherited techniques and personal experience. The Romans were not traditionally sailors but mostly land-based people, who learned to build ships from the people that they conquered, namely the Greeks and the Egyptians.</p>

            <p>There are a few surviving written documents that give descriptions and representations of ancient Roman ships, including the sails and rigging. Excavated vessels also provide some clues about ancient shipbuilding techniques. Studies of these have taught us that ancient Roman shipbuilders built the outer hull first, then proceeded with the frame and the rest of the ship. Planks used to build the outer hull were initially sewn together. Starting from the 6th century BCE, they were fixed using a method called mortise and tenon, whereby one plank locked into another without the need for stitching. Then in the first centuries of the current era, Mediterranean shipbuilders shifted to another shipbuilding method, still in use today, which consisted of building the frame first and then proceeding with the hull and the other components of the ship. This method was more systematic and dramatically shortened ship construction times. The ancient Romans built large merchant ships and warships whose size and technology were unequalled until the 16th century CE.</p>

            <p>Warships were built to be lightweight and very speedy. They had to be able to sail near the coast, which is why they had no ballast or excess load and were built with a long, narrow hull. They did not sink when damaged and often would lie crippled on the sea's surface following naval battles. They had a bronze battering ram, which was used to pierce the timber hulls or break the oars of enemy vessels. Warships used both wind (sails) and human power (oarsmen) and were therefore very fast. Eventually, Rome's navy became the largest and most powerful in the Mediterranean, and the Romans had control over what they therefore called Mare Nostrum meaning 'our sea'.</p>

            <p>There were many kinds of warship. The 'trireme' was the dominant warship from the 7th to 4th century BCE. It had rowers in the top, middle and lower levels, and approximately 50 rowers in each bank. The rowers at the bottom had the most uncomfortable position as they were under the other rowers and were exposed to the water entering through the oar-holes. It is worth noting that contrary to popular perception, rowers were not slaves but mostly Roman citizens enrolled in the military. The trireme was superseded by larger ships with even more rowers.</p>

            <p>Merchant ships were built to transport lots of cargo over long distances and at a reasonable cost. They had a wider hull, double planking and a solid interior for added stability. Unlike warships, their V-shaped hull was deep underwater, meaning that they could not sail too close to the coast. They usually had two huge side rudders located off the stern and controlled by a small tiller bar connected to a system of cables. They had from one to three masts with large square sails and a small triangular sail at the bow. Just like warships, merchant ships used oarsmen, but coordinating the hundreds of rowers in both types of ship was not an easy task. In order to assist them, music would be played on an instrument, and oars would then keep time with this.</p>

            <p>The cargo on merchant ships included raw materials (e.g. iron bars, copper, marble and granite), and agricultural products (e.g. grain from Egypt's Nile valley). During the Empire, Rome was a huge city by ancient standards of about one million inhabitants. Goods from all over the world would come to the city through the port of Pozzuoli situated west of the bay of Naples in Italy and through the gigantic port of Ostia situated at the mouth of the Tiber River. Large merchant ships would approach the destination port and, just like today, be intercepted by a number of towboats that would drag them to the quay.</p>

            <p>The time of travel along the many sailing routes could vary widely. Navigation in ancient Rome did not rely on sophisticated instruments such as compasses but on experience, local knowledge and observation of natural phenomena. In conditions of good visibility, seamen in the Mediterranean often had the mainland or islands in sight, which greatly facilitated navigation. They sailed by noting their position relative to a succession of recognisable landmarks. When weather conditions were not good or where land was no longer visible, Roman mariners estimated directions from the pole star or, with less accuracy, from the Sun at noon. They also estimated directions relative to the wind and swell. Overall, shipping in ancient Roman times resembled shipping today with large vessels regularly crossing the seas and bringing supplies from their Empire.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">Climate change reveals ancient artefacts in Norway's glaciers</h3>

            <p><strong>A</strong> Well above the treeline in Norway's highest mountains, ancient fields of ice are shrinking as Earth's climate warms. As the ice has vanished, it has been giving up the treasures it has preserved in cold storage for the last 6,000 years - items such as ancient arrows and skis from Viking Age* traders. And those artefacts have provided archaeologists with some surprising insights into how ancient Norwegians made their livings.</p>

            <p><strong>B</strong> Organic materials like textiles and hides are relatively rare finds at archaeological sites. This is because unless they're protected from the microorganisms that cause decay, they tend not to last long. Extreme cold is one reliable way to keep artefacts relatively fresh for a few thousand years, but once thawed out, these materials experience degradation relatively swiftly. With climate change shrinking ice cover around the world, glacial archaeologists need to race the clock to find newly revealed artefacts, preserve them, and study them. If something fragile dries and is windblown it might very soon be lost to science, or an arrow might be exposed and then covered again by the next snow and remain well-preserved. The unpredictability means that glacial archaeologists have to be systematic in their approach to fieldwork.</p>

            <p><strong>C</strong> Over a nine-year period, a team of archaeologists, which included Lars Pilo of Oppland County Council, Norway, and James Barrett of the McDonald Institute for Archaeological Research, surveyed patches of ice in Oppland, an area of south-central Norway that is home to some of the country's highest mountains. Reindeer once congregated on these icy patches in the later summer months to escape biting insects, and from the late Stone Age**, hunters followed. In addition, trade routes threaded through the mountain passes of Oppland, linking settlements in Norway to the rest of Europe. The slow but steady movement of glaciers tends to destroy anything at their bases, so the team focused on stationary patches of ice, mostly above 1,400 metres. That ice is found amid fields of frost-weathered boulders, fallen rocks, and exposed bedrock that for nine months of the year is buried beneath snow. 'Fieldwork is hard work - hiking with all our equipment, often camping on permafrost - but very rewarding. You're rescuing the archaeology, bringing the melting ice to wider attention, discovering a unique environmental history and really connecting with the natural environment,' says Barrett.</p>

            <p><strong>D</strong> At the edges of the contracting ice patches, archaeologists found more than 2,000 artefacts, which formed a material record that ran from 4,000 BCE to the beginnings of the Renaissance in the 14th century. Many of the artefacts are associated with hunting. Hunters would have easily misplaced arrows and they often discarded broken bows rather than take them all the way home. Other items could have been used by hunters traversing the high mountain passes of Oppland: all-purpose items like tools, skis, and horse tack.</p>

            <p><strong>E</strong> Barrett's team radiocarbon-dated 153 of the artefacts and compared those dates to the timing of major environmental changes in the region - such as periods of cooling or warming - and major social and economic shifts - such as the growth of farming settlements and the spread of international trade networks leading up to the Viking Age. They found that some periods had produced lots of artefacts, which indicates that people had been pretty active in the mountains during those times. But there were few or no signs of activity during other periods. What was surprising, according to Barrett, was the timing of these periods. Oppland's mountains present daunting terrain and in periods of extreme cold, glaciers could block the higher mountain passes and make travel in the upper reaches of the mountains extremely difficult. Archaeologists assumed people would stick to lower elevations during a time like the Late Antique Little Ice Age, a short period of deeper-than-usual cold from about 536-600 CE. But it turned out that hunters kept regularly venturing into the mountains even when the climate turned cold, based on the amount of stuff they had apparently dropped there.</p>

            <p><strong>F</strong> 'Remarkably, though, the finds from the ice may have continued through this period, perhaps suggesting that the importance of mountain hunting increased to supplement failing agricultural harvests in times of low temperatures,' says Barrett. A colder turn in the Scandinavian climate would likely have meant widespread crop failures, so more people would have depended on hunting to make up for those losses.</p>

            <p><strong>G</strong> Many of the artefacts Barrett's team recovered date from the beginning of the Viking Age, the 700s through to the 900s CE. Trade networks connecting Scandinavia with Europe and the Middle East were expanding around this time. Although we usually think of ships when we think of Scandinavian expansion, these recent discoveries show that plenty of goods travelled on overland routes, like the mountain passes of Oppland. And growing Norwegian towns, along with export markets, would have created a booming demand for hides to fight off the cold, as well as antlers to make useful things like combs. Business must have been good for hunters.</p>

            <p><strong>H</strong> Norway's mountains are probably still hiding a lot of history - and prehistory - in remote ice patches. When Barrett's team looked at the dates for their sample of 153 artefacts, they noticed a gap with almost no artefacts from about 3,800 to 2,200 BCE. In fact, archaeological finds from that period are rare all over Norway. The researchers say that could be because many of those artefacts have already disintegrated or are still frozen in the ice. That means archaeologists could be extracting some of those artefacts from retreating ice in years to come.</p>
            
            <p style="font-size:0.8em;">* Viking Age: a period of European history from around 700 CE to around 1050 CE when Scandinavian Vikings migrated throughout Europe by means of trade and warfare<br/>** The Stone Age: a period in early history that began about 3.4 million years ago</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <h3 style="text-align: center;">Plant 'thermometer' triggers springtime growth by measuring night-time heat</h3>
            <p style="font-style:italic; text-align:center;">A photoreceptor molecule in plant cells has been found to have a second job as a thermometer after dark - allowing plants to read seasonal temperature changes. Scientists say the discovery could help breed crops that are more resilient to the temperatures expected to result from climate change</p>

            <p><strong>A</strong> An international team of scientists led by the University of Cambridge has discovered that the 'thermometer' molecule in plants enables them to develop according to seasonal temperature changes. Researchers have revealed that molecules called phytochromes - used by plants to detect light during the day - actually change their function in darkness to become cellular temperature gauges that measure the heat of the night. The new findings, published in the journal Science, show that phytochromes control genetic switches in response to temperature as well as light to dictate plant development.</p>

            <p><strong>B</strong> At night, these molecules change states, and the pace at which they change is 'directly proportional to temperature', say scientists, who compare phytochromes to mercury in a thermometer. The warmer it is, the faster the molecular change - stimulating plant growth.</p>

            <p><strong>C</strong> Farmers and gardeners have known for hundreds of years how responsive plants are to temperature: warm winters cause many trees and flowers to bud early, something humans have long used to predict weather and harvest times for the coming year. The latest research pinpoints for the first time a molecular mechanism in plants that reacts to temperature - often triggering the buds of spring we long to see at the end of winter.</p>

            <p><strong>D</strong> With weather and temperatures set to become ever more unpredictable due to climate change, researchers say the discovery that this light-sensing molecule also functions as the internal thermometer in plant cells could help us breed tougher crops. 'It is estimated that agricultural yields will need to double by 2050, but climate change is a major threat to achieving this. Key crops such as wheat and rice are sensitive to high temperatures. Thermal stress reduces crop yields by around 10% for every one degree increase in temperature,' says lead researcher Dr Philip Wigge from Cambridge's Sainsbury Laboratory. 'Discovering the molecules that allow plants to sense temperature has the potential to accelerate the breeding of crops resilient to thermal stress and climate change.'</p>

            <p><strong>E</strong> In their active state, phytochrome molecules bind themselves to DNA to restrict plant growth. During the day, sunlight activates the molecules, slowing down growth. If a plant finds itself in shade, phytochromes are quickly inactivated - enabling it to grow faster to find sunlight again. This is how plants compete to escape each other's shade. 'Light-driven changes to phytochrome activity occur very fast, in less than a second,' says Wigge. At night, however, it's a different story. Instead of a rapid deactivation following sundown, the molecules gradually change from their active to inactive state. This is called 'dark reversion'. 'Just as mercury rises in a thermometer, the rate at which phytochromes revert to their inactive state during the night is a direct measure of temperature,' says Wigge.</p>

            <p><strong>F</strong> 'The lower the temperature, the slower the rate at which phytochromes revert to inactivity, so the molecules spend more time in their active, growth-suppressing state. This is why plants are slower to grow in winter. Warm temperatures accelerate dark reversion, so that phytochromes rapidly reach an inactive state and detach themselves from the plant's DNA - allowing genes to be expressed and plant growth to resume.' Wigge believes phytochrome thermo-sensing evolved at a later stage, and co-opted the biological network already used for light-based growth during the downtime of night.</p>

            <p><strong>G</strong> Some plants mainly use day length as an indicator of the season. Other species, such as daffodils, have considerable temperature sensitivity, and can flower months in advance during a warm winter. In fact, the discovery of the dual role of phytochromes provides the science behind a well-known rhyme long used to predict the coming season: oak before ash we'll have a splash, ash before oak we're in for a soak. Wigge explains: 'Oak trees rely much more on temperature, likely using phytochromes as thermometers to dictate development, whereas ash trees rely on measuring day length to determine their seasonal timing. A warmer spring, and consequently a higher likeliness of a hot summer, will result in oak leafing before ash. A cold spring will see the opposite. As the British know only too well, a colder summer is likely to be a rain-soaked one.'</p>

            <p><strong>H</strong> The new findings are the culmination of twelve years of research involving scientists from Germany, Argentina and the US, as well as the Cambridge team. The work was done in a model system, using a mustard plant called Arabidopsis, but Wigge says the phytochrome genes necessary for temperature sensing are found in crop plants as well. 'Recent advances in plant genetics now mean that scientists are able to rapidly identify the genes controlling these processes in crop plants, and even alter their activity using precise molecular "scalpels",' adds Wigge. 'Cambridge is uniquely well-positioned to do this kind of research as we have outstanding collaborators nearby who work on more applied aspects of plant biology, and can help us transfer this new knowledge into the field.'</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS (TFNG) ---
        {
          type: "tfng",
          title: "Questions 1-5",
          instruction: "Do the following statements agree with the information given in Reading Passage 1?",
          items: [
            { qNum: 1, text: "The Romans' shipbuilding skills were passed on to the Greeks and the Egyptians.", answer: "FALSE" },
            { qNum: 2, text: "Skilled craftsmen were needed for the mortise and tenon method of fixing planks.", answer: "NOT GIVEN" },
            { qNum: 3, text: "The later practice used by Mediterranean shipbuilders involved building the hull before the frame.", answer: "FALSE" },
            { qNum: 4, text: "The Romans called the Mediterranean Sea Mare Nostrum because they dominated its use.", answer: "TRUE" },
            { qNum: 5, text: "Most rowers on ships were people from the Roman army.", answer: "TRUE" }
          ]
        },
        // --- PASSAGE 1 QUESTIONS (Summary) ---
        {
          type: "gap",
          title: "Questions 6-13",
          instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">Warships and merchant ships</h3>
              
              <p>Warships were designed so that they were <span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"> and moved quickly. They often remained afloat after battles and were able to sail close to land as they lacked any additional weight. A battering ram made of <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"> was included in the design for attacking and damaging the timber and oars of enemy ships. Warships, such as the 'trireme', had rowers on three different <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8">.</p>
              
              <p>Unlike warships, merchant ships had a broad <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9"> that lay far below the surface of the sea. Merchant ships were steered through the water with the help of large rudders and a tiller bar. They had both square and <span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10"> sails. On merchant ships and warships, <span class="q-badge-inline">11</span><input class="gap-input" data-qnum="11"> was used to ensure rowers moved their oars in and out of the water at the same time.</p>
              
              <p>Quantities of agricultural goods such as <span class="q-badge-inline">12</span><input class="gap-input" data-qnum="12"> were transported by merchant ships to two main ports in Italy. The ships were pulled to the shore by <span class="q-badge-inline">13</span><input class="gap-input" data-qnum="13">. When the weather was clear and they could see islands or land, sailors used landmarks that they knew to help them navigate their route.</p>
            </div>
          `,
          items: [
            { qNum: 6, answer: "lightweight" },
            { qNum: 7, answer: "bronze" },
            { qNum: 8, answer: "levels" },
            { qNum: 9, answer: "hull" },
            { qNum: 10, answer: "triangular" },
            { qNum: 11, answer: "music" },
            { qNum: 12, answer: "grain" },
            { qNum: 13, answer: "towboats" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS (Matching Info) ---
        {
          type: "matching_info",
          title: "Questions 14-19",
          instruction: "Reading Passage 2 has eight sections, A-H. Which section contains the following information?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          items: [
            { qNum: 14, text: "an explanation for weapons being left behind in the mountains", answer: "D" },
            { qNum: 15, text: "a reference to the physical difficulties involved in an archaeological expedition", answer: "C" },
            { qNum: 16, text: "an explanation of why less food may have been available", answer: "F" },
            { qNum: 17, text: "a reference to the possibility of future archaeological discoveries", answer: "H" },
            { qNum: 18, text: "examples of items that would have been traded", answer: "G" },
            { qNum: 19, text: "a reference to the pressure archaeologists are under to work quickly", answer: "B" }
          ]
        },
        // --- PASSAGE 2 QUESTIONS (Summary) ---
        {
          type: "gap",
          title: "Questions 20-22",
          instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">Interesting finds at an archaeological site</h3>
              
              <p>Organic materials such as animal skins and textiles are not discovered very often at archaeological sites. They have little protection against <span class="q-badge-inline">20</span><input class="gap-input" data-qnum="20"> which means that they decay relatively quickly. But this is not always the case. If temperatures are low enough, fragile artefacts can be preserved for thousands of years.</p>
              
              <p>A team of archaeologists have been working in the mountains in Oppland in Norway to recover artefacts revealed by shrinking ice cover. In the past, there were trade routes through these mountains and <span class="q-badge-inline">21</span><input class="gap-input" data-qnum="21"> gathered there in the summer months to avoid being attacked by <span class="q-badge-inline">22</span><input class="gap-input" data-qnum="22"> on lower ground. The people who used these mountains left things behind and it is those objects that are of interest to archaeologists.</p>
            </div>
          `,
          items: [
            { qNum: 20, answer: ["microorganisms", "micro-organisms"] },
            { qNum: 21, answer: "reindeer" },
            { qNum: 22, answer: "insects" }
          ]
        },
        // --- PASSAGE 2 QUESTIONS (MCQ Multi) ---
        {
          type: "mcq_multi",
          title: "Questions 23-24",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO of the following statements does the writer make about the discoveries of Barrett's team?",
          options: [
            "A. Artefacts found in the higher mountain passes were limited to skiing equipment.",
            "B. Hunters went into the mountains even during periods of extreme cold.",
            "C. The number of artefacts from certain time periods was relatively low.",
            "D. Radiocarbon dating of artefacts produced some unreliable results.",
            "E. More artefacts were found in Oppland than at any other mountain site."
          ],
          items: [
            { qNums: [23, 24], answer: ["B", "C"] } // Key: B, C in either order
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 25-26",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO of the following statements does the writer make about the Viking Age?",
          options: [
            "A. Hunters at this time benefited from an increased demand for goods.",
            "B. The beginning of the period saw the greatest growth in the wealth of Vikings.",
            "C. Vikings did not rely on ships alone to transport goods.",
            "D. Norwegian towns at this time attracted traders from around the world.",
            "E. Vikings were primarily interested in their trading links with the Middle East."
          ],
          items: [
            { qNums: [25, 26], answer: ["A", "C"] } // Key: A, C in either order
          ]
        },

        // --- PASSAGE 3 QUESTIONS (TFNG) ---
        {
          type: "tfng",
          title: "Questions 27-32",
          instruction: "Do the following statements agree with the information given in Reading Passage 3?",
          items: [
            { qNum: 27, text: "The Cambridge scientists' discovery of the 'thermometer molecule' caused surprise among other scientists.", answer: "NOT GIVEN" },
            { qNum: 28, text: "The target for agricultural production by 2050 could be missed.", answer: "TRUE" },
            { qNum: 29, text: "Wheat and rice suffer from a rise in temperatures.", answer: "TRUE" },
            { qNum: 30, text: "It may be possible to develop crops that require less water.", answer: "NOT GIVEN" },
            { qNum: 31, text: "Plants grow faster in sunlight than in shade.", answer: "FALSE" },
            { qNum: 32, text: "Phytochromes change their state at the same speed day and night.", answer: "FALSE" }
          ]
        },
        // --- PASSAGE 3 QUESTIONS (Matching Info) ---
        {
          type: "matching_info",
          title: "Questions 33-37",
          instruction: "Reading Passage 3 has eight sections, A-H. Which section contains the following information?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          items: [
            { qNum: 33, text: "mention of specialists who can make use of the research findings", answer: "H" },
            { qNum: 34, text: "a reference to a potential benefit of the research findings", answer: "D" },
            { qNum: 35, text: "scientific support for a traditional saying", answer: "G" },
            { qNum: 36, text: "a reference to people traditionally making plans based on plant behaviour", answer: "C" },
            { qNum: 37, text: "a reference to where the research has been reported", answer: "A" }
          ]
        },
        // --- PASSAGE 3 QUESTIONS (Sentence Completion) ---
        {
          type: "gap",
          title: "Questions 38-40",
          instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          htmlContent: `
            <div style="background:#fff; padding:15px; border:1px solid #eee;">
                <p>38. Daffodils are likely to flower early in response to <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38"> weather.</p>
                <p>39. If ash trees come into leaf before oak trees, the weather in <span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39"> will probably be wet.</p>
                <p>40. The research was carried out using a particular species of <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40">.</p>
            </div>
          `,
          items: [
            { qNum: 38, answer: ["warm", "winter"] }, // Note: Text says "flower months in advance during a warm winter". Key says "warm (winter)".
            { qNum: 39, answer: "summer" },
            { qNum: 40, answer: ["mustard plant", "mustard plants", "mustard"] }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 73 - 74 PDF)
    // ==========================================================================
    writing: {
      task1: {
        title: "WRITING TASK 1",
        // Lưu ý: Bạn cần cắt ảnh bản đồ sân bay từ trang 73 PDF và lưu vào đường dẫn này
        image: "https://i.postimg.cc/sfGK466M/Screenshot-2026-02-28-190709.png", 
        prompt: `
          The plans below show the site of an airport now and how it will look after redevelopment next year.

          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

          Write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          Many manufactured food and drink products contain high levels of sugar, which causes many health problems.

          Sugary products should be made more expensive to encourage people to consume less sugar.

          Do you agree or disagree?

          Give reasons for your answer and include any relevant examples from your own knowledge or experience.

          Write at least 250 words.
        `
      }
    }
  }
};