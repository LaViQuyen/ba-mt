// src/data/cam17_test1.js

export const cam17_test1 = {
  id: "mt13",
  category: "full",
  testName: "MOCK TEST 13",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 10 - 15 PDF) - Đáp án trang 119
    // ==========================================================================
    listening: {
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/beablevn-ielts.firebasestorage.app/o/audio%2Fmt13.mp3?alt=media&token=4461c5e5-1034-4954-a597-7988310fe4da", // Bạn cần file mp3 này
      timeLimit: 1689, 
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 13 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-10",
          instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
                <h3 style="text-align:center; color:#2B6830; margin-top:0;">Buckworth Conservation Group</h3>
                
                <p><strong>Regular activities</strong></p>
                <p><strong>Beach</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>making sure the beach does not have <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"> on it</li>
                    <li>no <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2"> allowed</li>
                </ul>

                <p><strong>Nature reserve</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>maintaining paths</li>
                    <li>nesting boxes for birds installed</li>
                    <li>next task is taking action to attract <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"> to the place</li>
                    <li>identifying types of <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"></li>
                    <li>building a new <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"></li>
                </ul>

                <p><strong>Forthcoming events</strong></p>
                <p><strong>Saturday</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>meet at Dunsmore Beach car park</li>
                    <li>walk across the sands and reach the <span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"></li>
                    <li>take a picnic</li>
                    <li>wear appropriate <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"></li>
                </ul>

                <p><strong>Woodwork session</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>suitable for <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8"> to participate in</li>
                    <li>making <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9"> out of wood</li>
                    <li>17th, from 10 a.m. to 3 p.m.</li>
                    <li>cost of session (no camping): £ <span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10"></li>
                </ul>
            </div>
          `,
          items: [
            { qNum: 1, answer: "litter" },
            { qNum: 2, answer: "dogs" },
            { qNum: 3, answer: "insects" },
            { qNum: 4, answer: "butterflies" },
            { qNum: 5, answer: "wall" },
            { qNum: 6, answer: "island" },
            { qNum: 7, answer: "boots" },
            { qNum: 8, answer: "beginners" },
            { qNum: 9, answer: "spoons" },
            { qNum: 10, answer: "35" }
          ]
        },

        // --- PART 2 ---
        {
          type: "mcq_single",
          title: "Part 2: Questions 11-14",
          instruction: "Choose the correct letter, A, B or C.",
          items: [
            {
              qNum: 11,
              text: "What is the maximum number of people who can stand on each side of the boat?",
              options: ["A. 9", "B. 15", "C. 18"],
              answer: "A"
            },
            {
              qNum: 12,
              text: "What colour are the tour boats?",
              options: ["A. dark red", "B. jet black", "C. light green"],
              answer: "C"
            },
            {
              qNum: 13,
              text: "Which lunchbox is suitable for someone who doesn't eat meat or fish?",
              options: ["A. Lunchbox 1", "B. Lunchbox 2", "C. Lunchbox 3"],
              answer: "B"
            },
            {
              qNum: 14,
              text: "What should people do with their litter?",
              options: ["A. take it home", "B. hand it to a member of staff", "C. put it in the bins provided on the boat"],
              answer: "B"
            }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 15-16",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO features of the lighthouse does Lou mention?",
          options: [
            "A. why it was built",
            "B. who built it",
            "C. how long it took to build",
            "D. who staffed it",
            "E. what it was built with"
          ],
          items: [
            { qNums: [15, 16], answer: ["A", "D"] }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 17-18",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO types of creature might come close to the boat?",
          options: [
            "A. sea eagles",
            "B. fur seals",
            "C. dolphins",
            "D. whales",
            "E. penguins"
          ],
          items: [
            { qNums: [17, 18], answer: ["B", "C"] }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 19-20",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO points does Lou make about the caves?",
          options: [
            "A. Only large tourist boats can visit them.",
            "B. The entrances to them are often blocked.",
            "C. It is too dangerous for individuals to go near them.",
            "D. Someone will explain what is inside them.",
            "E. They cannot be reached on foot."
          ],
          items: [
            { qNums: [19, 20], answer: ["D", "E"] }
          ]
        },

        // --- PART 3 ---
        {
          type: "mcq_single",
          title: "Part 3: Questions 21-26",
          instruction: "Choose the correct letter, A, B or C.",
          items: [
            {
              qNum: 21,
              text: "What problem did both Diana and Tim have when arranging their work experience?",
              options: ["A. making initial contact with suitable farms", "B. organising transport to and from the farm", "C. finding a placement for the required length of time"],
              answer: "A"
            },
            {
              qNum: 22,
              text: "Tim was pleased to be able to help",
              options: ["A. a lamb that had a broken leg.", "B. a sheep that was having difficulty giving birth.", "C. a newly born lamb that was having trouble feeding."],
              answer: "B"
            },
            {
              qNum: 23,
              text: "Diana says the sheep on her farm",
              options: ["A. were of various different varieties.", "B. were mainly reared for their meat.", "C. had better quality wool than sheep on the hills."],
              answer: "B"
            },
            {
              qNum: 24,
              text: "What did the students learn about adding supplements to chicken feed?",
              options: ["A. These should only be given if specially needed.", "B. It is worth paying extra for the most effective ones.", "C. The amount given at one time should be limited."],
              answer: "A"
            },
            {
              qNum: 25,
              text: "What happened when Diana was working with dairy cows?",
              options: ["A. She identified some cows incorrectly.", "B. She accidentally threw some milk away.", "C. She made a mistake when storing milk."],
              answer: "C"
            },
            {
              qNum: 26,
              text: "What did both farmers mention about vets and farming?",
              options: ["A. Vets are failing to cope with some aspects of animal health.", "B. There needs to be a fundamental change in the training of vets.", "C. Some jobs could be done by the farmer rather than by a vet."],
              answer: "C"
            }
          ]
        },
        {
          type: "matching",
          title: "Questions 27-30",
          instruction: "What opinion do the students give about each of the following modules on their veterinary science course? Choose FOUR answers from the box.",
          options: [
            "A. Tim found this easier than expected.",
            "B. Tim thought this was not very clearly organised.",
            "C. Diana may do some further study on this.",
            "D. They both found the reading required for this was difficult.",
            "E. Tim was shocked at something he learned on this module.",
            "F. They were both surprised how little is known about some aspects of this."
          ],
          items: [
            { qNum: 27, text: "Medical terminology", answer: "A" },
            { qNum: 28, text: "Diet and nutrition", answer: "E" },
            { qNum: 29, text: "Animal disease", answer: "F" },
            { qNum: 30, text: "Wildlife medication", answer: "C" }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-40",
          instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">Labyrinths</h3>
              
              <p><strong>Definition</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px;">
                <li>a winding spiral path leading to a central area</li>
              </ul>

              <p><strong>Labyrinths compared with mazes</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Mazes are a type of <span class="q-badge-inline">31</span><input class="gap-input" data-qnum="31"></li>
                <li><span class="q-badge-inline">32</span><input class="gap-input" data-qnum="32"> is needed to navigate through a maze</li>
                <li>the word 'maze' is derived from a word meaning a feeling of <span class="q-badge-inline">33</span><input class="gap-input" data-qnum="33"></li>
              </ul>

              <p><strong>Labyrinths represent a journey through life</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px;">
                <li>they have frequently been used in <span class="q-badge-inline">34</span><input class="gap-input" data-qnum="34"> and prayer</li>
              </ul>

              <p><strong>Early examples of the labyrinth spiral</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Ancient carvings on <span class="q-badge-inline">35</span><input class="gap-input" data-qnum="35"> have been found across many cultures</li>
                <li>The Pima, a Native American tribe, wove the symbol on baskets</li>
                <li>Ancient Greeks used the symbol on <span class="q-badge-inline">36</span><input class="gap-input" data-qnum="36"></li>
              </ul>

              <p><strong>Walking labyrinths</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px;">
                <li>The largest surviving example of a turf labyrinth once had a big <span class="q-badge-inline">37</span><input class="gap-input" data-qnum="37"> at its centre</li>
              </ul>

              <p><strong>Labyrinths nowadays</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Believed to have a beneficial impact on mental and physical health, e.g., walking a maze can reduce a person's <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38"> rate</li>
                <li>Used in medical and health and fitness settings and also prisons</li>
                <li>Popular with patients, visitors and staff in hospitals
                    <ul>
                        <li>patients who can't walk can use 'finger labyrinths' made from <span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39"></li>
                        <li>research has shown that Alzheimer's sufferers experience less <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40"></li>
                    </ul>
                </li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "puzzle" },
            { qNum: 32, answer: "logic" },
            { qNum: 33, answer: "confusion" },
            { qNum: 34, answer: "meditation" },
            { qNum: 35, answer: "stone" },
            { qNum: 36, answer: "coins" },
            { qNum: 37, answer: "tree" },
            { qNum: 38, answer: "breathing" },
            { qNum: 39, answer: "paper" },
            { qNum: 40, answer: "anxiety" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 16 - 27 PDF) - Đáp án trang 120
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">The development of the London underground railway</h3>
            
            <p>In the first half of the 1800s, London's population grew at an astonishing rate, and the central area became increasingly congested. In addition, the expansion of the overground railway network resulted in more and more passengers arriving in the capital. However, in 1846, a Royal Commission decided that the railways should not be allowed to enter the City, the capital's historic and business centre. The result was that the overground railway stations formed a ring around the City. The area within consisted of poorly built, overcrowded slums and the streets were full of horse-drawn traffic. Crossing the City became a nightmare. It could take an hour and a half to travel 8 km by horse-drawn carriage or bus. Numerous schemes were proposed to resolve these problems, but few succeeded.</p>
            
            <p>Amongst the most vocal advocates for a solution to London's traffic problems was Charles Pearson, who worked as a solicitor for the City of London. He saw both social and economic advantages in building an underground railway that would link the overground railway stations together and clear London slums at the same time. His idea was to relocate the poor workers who lived in the inner-city slums to newly constructed suburbs, and to provide cheap rail travel for them to get to work. Pearson's ideas gained support amongst some businessmen and in 1851 he submitted a plan to Parliament. It was rejected, but coincided with a proposal from another group for an underground connecting line, which Parliament passed.</p>

            <p>The two groups merged and established the Metropolitan Railway Company in August 1854. The company's plan was to construct an underground railway line from the Great Western Railway's (GWR) station at Paddington to the edge of the City at Farringdon Street - a distance of almost 5 km. The organisation had difficulty in raising the funding for such a radical and expensive scheme, not least because of the critical articles printed by the press. Objectors argued that the tunnels would collapse under the weight of traffic overhead, buildings would be shaken and passengers would be poisoned by the emissions from the train engines. However, Pearson and his partners persisted.</p>

            <p>The GWR, aware that the new line would finally enable them to run trains into the heart of the City, invested almost £250,000 in the scheme. Eventually, over a five-year period, £1m was raised. The chosen route ran beneath existing main roads to minimise the expense of demolishing buildings. Originally scheduled to be completed in 21 months, the construction of the underground line took three years. It was built just below street level using a technique known as 'cut and cover'. A trench about ten metres wide and six metres deep was dug, and the sides temporarily held up with timber beams. Brick walls were then constructed, and finally a brick arch was added to create a tunnel. A two-metre-deep layer of soil was laid on top of the tunnel and the road above rebuilt.</p>

            <p>The Metropolitan line, which opened on 10 January 1863, was the world's first underground railway. On its first day, almost 40,000 passengers were carried between Paddington and Farringdon, the journey taking about 18 minutes. By the end of the Metropolitan's first year of operation, 9.5 million journeys had been made.</p>

            <p>Even as the Metropolitan began operation, the first extensions to the line were being authorised; these were built over the next five years, reaching Moorgate in the east of London and Hammersmith in the west. The original plan was to pull the trains with steam locomotives, using firebricks in the boilers to provide steam, but these engines were never introduced. Instead, the line used specially designed locomotives that were fitted with water tanks in which steam could be condensed. However, smoke and fumes remained a problem, even though ventilation shafts were added to the tunnels.</p>

            <p>Despite the extension of the underground railway, by the 1880s, congestion on London's streets had become worse. The problem was partly that the existing underground lines formed a circuit around the centre of London and extended to the suburbs, but did not cross the capital's centre. The 'cut and cover' method of construction was not an option in this part of the capital. The only alternative was to tunnel deep underground.</p>

            <p>Although the technology to create these tunnels existed, steam locomotives could not be used in such a confined space. It wasn't until the development of a reliable electric motor, and a means of transferring power from the generator to a moving train, that the world's first deep-level electric railway, the City & South London, became possible. The line opened in 1890, and ran from the City to Stockwell, south of the River Thames. The trains were made up of three carriages and driven by electric engines. The carriages were narrow and had tiny windows just below the roof because it was thought that passengers would not want to look out at the tunnel walls. The line was not without its problems, mainly caused by an unreliable power supply. Although the City & South London Railway was a great technical achievement, it did not make a profit. Then, in 1900, the Central London Railway, known as the 'Tuppenny Tube', began operation using new electric locomotives. It was very popular and soon afterwards new railways and extensions were added to the growing tube network. By 1907, the heart of today's Underground system was in place.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">Stadiums: past, present and future</h3>

            <p><strong>A</strong> Stadiums are among the oldest forms of urban architecture: vast stadiums where the public could watch sporting events were at the centre of western city life as far back as the ancient Greek and Roman Empires, well before the construction of the great medieval cathedrals and the grand 19th- and 20th-century railway stations which dominated urban skylines in later eras. Today, however, stadiums are regarded with growing scepticism. Construction costs can soar above £1 billion, and stadiums finished for major events such as the Olympic Games or the FIFA World Cup have notably fallen into disuse and disrepair.</p>

            <p><strong>B</strong> But this need not be the case. History shows that stadiums can drive urban development and adapt to the culture of every age. Even today, architects and planners are finding new ways to adapt the mono-functional sports arenas which became emblematic of modernisation during the 20th century.</p>

            <p><strong>C</strong> The amphitheatre of Arles in southwest France, with a capacity of 25,000 spectators, is perhaps the best example of just how versatile stadiums can be. Built by the Romans in 90 AD, it became a fortress with four towers after the fifth century, and was then transformed into a village containing more than 200 houses. With the growing interest in conservation during the 19th century, it was converted back into an arena for the staging of bullfights, thereby returning the structure to its original use as a venue for public spectacles. Another example is the imposing arena of Verona in northern Italy, with space for 30,000 spectators, which was built 60 years before the Arles amphitheatre and 40 years before Rome's famous Colosseum. It has endured the centuries and is currently considered one of the world's prime sites for opera, thanks to its outstanding acoustics.</p>

            <p><strong>D</strong> The area in the centre of the Italian town of Lucca, known as the Piazza dell'Anfiteatro, is yet another impressive example of an amphitheatre becoming absorbed into the fabric of the city. The site evolved in a similar way to Arles and was progressively filled with buildings from the Middle Ages until the 19th century, variously used as houses, a salt depot and a prison. But rather than reverting to an arena, it became a market square, designed by Romanticist architect Lorenzo Nottolini. Today, the ruins of the amphitheatre remain embedded in the various shops and residences surrounding the public square.</p>

            <p><strong>E</strong> There are many similarities between modern stadiums and the ancient amphitheatres intended for games. But some of the flexibility was lost at the beginning of the 20th century, as stadiums were developed using new products such as steel and reinforced concrete, and made use of bright lights for night-time matches. Many such stadiums are situated in suburban areas, designed for sporting use only and surrounded by parking lots. These factors mean that they may not be as accessible to the general public, require more energy to run and contribute to urban heat.</p>

            <p><strong>F</strong> But many of today's most innovative architects see scope for the stadium to help improve the city. Among the current strategies, two seem to be having particular success: the stadium as an urban hub, and as a power plant. There's a growing trend for stadiums to be equipped with public spaces and services that serve a function beyond sport, such as hotels, retail outlets, conference centres, restaurants and bars, children's playgrounds and green space. Creating mixed-use developments such as this reinforces compactness and multi-functionality, making more efficient use of land and helping to regenerate urban spaces. This opens the space up to families and a wider cross-section of society, instead of catering only to sportspeople and supporters. There have been many examples of this in the UK: the mixed-use facilities at Wembley and Old Trafford have become a blueprint for many other stadiums in the world.</p>

            <p><strong>G</strong> The phenomenon of stadiums as power stations has arisen from the idea that energy problems can be overcome by integrating interconnected buildings by means of a smart grid, which is an electricity supply network that uses digital communications technology to detect and react to local changes in usage, without significant energy losses. Stadiums are ideal for these purposes, because their canopies have a large surface area for fitting photovoltaic panels and rise high enough (more than 40 metres) to make use of micro wind turbines. Freiburg Mage Solar Stadium in Germany is the first of a new wave of stadiums as power plants, which also includes the Amsterdam Arena and the Kaohsiung Stadium. The latter, inaugurated in 2009, has 8,844 photovoltaic panels producing up to 1.14 GWh of electricity annually. This reduces the annual output of carbon dioxide by 660 tons and supplies up to 80 percent of the surrounding area when the stadium is not in use. This is proof that a stadium can serve its city, and have a decidedly positive impact in terms of reduction of CO2 emissions. Sporting arenas have always been central to the life and culture of cities. In every era, the stadium has acquired new value and uses: from military fortress to residential village, public space to theatre and most recently a field for experimentation in advanced engineering. The stadium of today now brings together multiple functions, thus helping cities to create a sustainable future.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <h3 style="text-align: center;">To catch a king</h3>
            <p style="text-align:center; font-style:italic;">Anna Keay reviews Charles Spencer's book about the hunt for King Charles II during the English Civil War of the seventeenth century</p>

            <p>Charles Spencer's latest book, To Catch a King, tells us the story of the hunt for King Charles II in the six weeks after his resounding defeat at the Battle of Worcester in September 1651. And what a story it is. After his father was executed by the Parliamentarians in 1649, the young Charles II sacrificed one of the very principles his father had died for and did a deal with the Scots, thereby accepting Presbyterianism as the national religion in return for being crowned King of Scots. His arrival in Edinburgh prompted the English Parliamentary army to invade Scotland in a pre-emptive strike. This was followed by a Scottish invasion of England. The two sides finally faced one another at Worcester in the west of England in 1651. After being comprehensively defeated on the meadows outside the city by the Parliamentarian army, the 21-year-old king found himself the subject of a national manhunt, with a huge sum offered for his capture. Over the following six weeks he managed, through a series of heart-poundingly close escapes, to evade the Parliamentarians before seeking refuge in France. For the next nine years, the penniless and defeated Charles wandered around Europe with only a small group of loyal supporters.</p>

            <p>Years later, after his restoration as king, the 50-year-old Charles II requested a meeting with the writer and diarist Samuel Pepys. His intention when asking Pepys to commit his story to paper was to ensure that this most extraordinary episode was never forgotten. Over two three-hour sittings, the king related to him in great detail his personal recollections of the six weeks he had spent as a fugitive. As the king and secretary settled down (a scene that is surely a gift for a future scriptwriter), Charles commenced his story: 'After the battle was so absolutely lost as to be beyond hope of recovery, I began to think of the best way of saving myself.'</p>

            <p>One of the joys of Spencer's book, a result not least of its use of Charles II's own narrative as well as those of his supporters, is just how close the reader gets to the action. The day-by-day retelling of the fugitives' doings provides delicious details: the cutting of the king's long hair with agricultural shears, the use of walnut leaves to dye his pale skin, and the day Charles spent lying on a branch of the great oak tree in Boscobel Wood as the Parliamentary soldiers scoured the forest floor below. Spencer draws out both the humour - such as the preposterous refusal of Charles's friend Henry Wilmot to adopt disguise on the grounds that it was beneath his dignity - and the emotional tension when the secret of the king's presence was cautiously revealed to his supporters.</p>

            <p>Charles's adventures after losing the Battle of Worcester hide the uncomfortable truth that whilst almost everyone in England had been appalled by the execution of his father, they had not welcomed the arrival of his son with the Scots army, but had instead firmly bolted their doors. This was partly because he rode at the head of what looked like a foreign invasion force and partly because, after almost a decade of civil war, people were desperate to avoid it beginning again. This makes it all the more interesting that Charles II himself loved the story so much ever after. As well as retelling it to anyone who would listen, causing eye-rolling among courtiers, he set in train a series of initiatives to memorialise it. There was to be a new order of chivalry, the Knights of the Royal Oak. A series of enormous oil paintings depicting the episode were produced, including a two-metre-wide canvas of Boscobel Wood and a set of six similarly enormous paintings of the king on the run. In 1660, Charles II commissioned the artist John Michael Wright to paint a flying squadron of cherubs carrying an oak tree to the heavens on the ceiling of his bedchamber. It is hard to imagine many other kings marking the lowest point in their life so enthusiastically, or indeed pulling off such an escape in the first place.</p>

            <p>Charles Spencer is the perfect person to pass the story on to a new generation. His pacey, readable prose steers deftly clear of modern idioms and elegantly brings to life the details of the great tale. He has even-handed sympathy for both the fugitive king and the fierce republican regime that hunted him, and he succeeds in his desire to explore far more of the background of the story than previous books on the subject have done. Indeed, the opening third of the book is about how Charles II found himself at Worcester in the first place, which for some will be reason alone to read To Catch a King.</p>

            <p>The tantalising question left, in the end, is that of what it all meant. Would Charles II have been a different king had these six weeks never happened? The days and nights spent in hiding must have affected him in some way. Did the need to assume disguises, to survive on wit and charm alone, to use trickery and subterfuge to escape from tight corners help form him? This is the one area where the book doesn't quite hit the mark. Instead its depiction of Charles II in his final years as an ineffective, pleasure-loving monarch doesn't do justice to the man (neither is it accurate), or to the complexity of his character. But this one niggle aside, To Catch a King is an excellent read, and those who come to it knowing little of the famous tale will find they have a treat in store.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS (Notes) ---
        {
          type: "gap",
          title: "Questions 1-6",
          instruction: "Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">The London underground railway</h3>
              
              <p><strong>The problem</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>The <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"> of London increased rapidly between 1800 and 1850</li>
                <li>The streets were full of horse-drawn vehicles</li>
              </ul>

              <p><strong>The proposed solution</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>Charles Pearson, a solicitor, suggested building an underground railway</li>
                <li>Building the railway would make it possible to move people to better housing in the <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2"></li>
                <li>A number of <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"> agreed with Pearson's idea</li>
                <li>The company initially had problems getting the <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"> needed for the project</li>
                <li>Negative articles about the project appeared in the <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"></li>
              </ul>

              <p><strong>The construction</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>The chosen route did not require many buildings to be pulled down</li>
                <li>The 'cut and cover' method was used to construct the tunnels</li>
                <li>With the completion of the brick arch, the tunnel was covered with <span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"></li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 1, answer: "population" },
            { qNum: 2, answer: "suburbs" },
            { qNum: 3, answer: "businessmen" },
            { qNum: 4, answer: "funding" },
            { qNum: 5, answer: "press" },
            { qNum: 6, answer: "soil" }
          ]
        },
        // --- PASSAGE 1 QUESTIONS (TFNG) ---
        {
          type: "tfng",
          title: "Questions 7-13",
          instruction: "Do the following statements agree with the information given in Reading Passage 1?",
          items: [
            { qNum: 7, text: "Other countries had built underground railways before the Metropolitan line opened.", answer: "FALSE" },
            { qNum: 8, text: "More people than predicted travelled on the Metropolitan line on the first day.", answer: "NOT GIVEN" },
            { qNum: 9, text: "The use of ventilation shafts failed to prevent pollution in the tunnels.", answer: "TRUE" },
            { qNum: 10, text: "A different approach from the 'cut and cover' technique was required in London's central area.", answer: "TRUE" },
            { qNum: 11, text: "The windows on City & South London trains were at eye level.", answer: "FALSE" },
            { qNum: 12, text: "The City & South London Railway was a financial success.", answer: "FALSE" },
            { qNum: 13, text: "Trains on the 'Tuppenny Tube' nearly always ran on time.", answer: "NOT GIVEN" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS (Matching Info) ---
        {
          type: "matching_info",
          title: "Questions 14-17",
          instruction: "Reading Passage 2 has seven sections, A-G. Which section contains the following information?",
          options: ["A", "B", "C", "D", "E", "F", "G"],
          items: [
            { qNum: 14, text: "a mention of negative attitudes towards stadium building projects", answer: "A" },
            { qNum: 15, text: "figures demonstrating the environmental benefits of a certain stadium", answer: "F" },
            { qNum: 16, text: "examples of the wide range of facilities available at some new stadiums", answer: "E" },
            { qNum: 17, text: "reference to the disadvantages of the stadiums built during a certain era", answer: "D" }
          ]
        },
        // --- PASSAGE 2 QUESTIONS (Summary) ---
        {
          type: "gap",
          title: "Questions 18-22",
          instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h4 style="text-align:center; color:#2B6830;">Roman amphitheatres</h4>
              <p>The Roman stadiums of Europe have proved very versatile. The amphitheatre of Arles, for example, was converted first into a <span class="q-badge-inline">18</span><input class="gap-input" data-qnum="18"> then into a residential area and finally into an arena where spectators could watch <span class="q-badge-inline">19</span><input class="gap-input" data-qnum="19">. Meanwhile, the arena in Verona, one of the oldest Roman amphitheatres, is famous today as a venue where <span class="q-badge-inline">20</span><input class="gap-input" data-qnum="20"> is performed. The site of Lucca's amphitheatre has also been used for many purposes over the centuries, including the storage of <span class="q-badge-inline">21</span><input class="gap-input" data-qnum="21">. It is now a market square with <span class="q-badge-inline">22</span><input class="gap-input" data-qnum="22"> and homes incorporated into the remains of the Roman amphitheatre.</p>
            </div>
          `,
          items: [
            { qNum: 18, answer: "fortress" },
            { qNum: 19, answer: "bullfights" },
            { qNum: 20, answer: "opera" },
            { qNum: 21, answer: "salt" },
            { qNum: 22, answer: "shops" }
          ]
        },
        // --- PASSAGE 2 QUESTIONS (Double MCQ) ---
        {
          type: "mcq_multi",
          title: "Questions 23-24",
          instruction: "Choose TWO letters, A-E.",
          stem: "When comparing twentieth-century stadiums to ancient amphitheatres in Section D, which TWO negative features does the writer mention?",
          options: [
            "A. They are less imaginatively designed.",
            "B. They are less spacious.",
            "C. They are in less convenient locations.",
            "D. They are less versatile.",
            "E. They are made of less durable materials."
          ],
          items: [
            { qNums: [23, 24], answer: ["C", "D"] }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 25-26",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO advantages of modern stadium design does the writer mention?",
          options: [
            "A. offering improved amenities for the enjoyment of sports events",
            "B. bringing community life back into the city environment",
            "C. facilitating research into solar and wind energy solutions",
            "D. enabling local residents to reduce their consumption of electricity",
            "E. providing a suitable site for the installation of renewable power generators"
          ],
          items: [
            { qNums: [25, 26], answer: ["B", "E"] }
          ]
        },

        // --- PASSAGE 3 QUESTIONS (Summary with Box) ---
        {
          type: "gap",
          title: "Questions 27-31",
          instruction: "Complete the summary using the list of phrases, A-J, below. Choose the correct letter, A-J, for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h4 style="text-align:center; color:#2B6830;">The story behind the hunt for Charles II</h4>
              <p>Charles II's father was executed by the Parliamentarian forces in 1649. Charles II then formed a <span class="q-badge-inline">27</span><select class="gap-select" data-qnum="27"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> with the Scots, and in order to become King of Scots, he abandoned an important <span class="q-badge-inline">28</span><select class="gap-select" data-qnum="28"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> that was held by his father and had contributed to his father's death. The opposing sides then met outside Worcester in 1651. The battle led to a <span class="q-badge-inline">29</span><select class="gap-select" data-qnum="29"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> for the Parliamentarians and Charles had to flee for his life. A <span class="q-badge-inline">30</span><select class="gap-select" data-qnum="30"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> was offered for Charles's capture, but after six weeks spent in hiding, he eventually managed to reach the <span class="q-badge-inline">31</span><select class="gap-select" data-qnum="31"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> of continental Europe.</p>
              
              <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; background: #fff; font-size: 0.9em;">
                 <strong>Options:</strong><br/>
                 A. military innovation &nbsp;&nbsp; B. large reward &nbsp;&nbsp; C. widespread conspiracy<br/>
                 D. relative safety &nbsp;&nbsp; E. new government &nbsp;&nbsp; F. decisive victory<br/>
                 G. political debate &nbsp;&nbsp; H. strategic alliance &nbsp;&nbsp; I. popular solution<br/>
                 J. religious conviction
              </div>
            </div>
          `,
          items: [
            { qNum: 27, answer: "H" },
            { qNum: 28, answer: "J" },
            { qNum: 29, answer: "F" },
            { qNum: 30, answer: "B" },
            { qNum: 31, answer: "D" }
          ]
        },
        // --- PASSAGE 3 QUESTIONS (YNNG) ---
        {
          type: "ynng",
          title: "Questions 32-35",
          instruction: "Do the following statements agree with the claims of the writer in Reading Passage 3?",
          items: [
            { qNum: 32, text: "Charles chose Pepys for the task because he considered him to be trustworthy.", answer: "NOT GIVEN" },
            { qNum: 33, text: "Charles's personal recollection of the escape lacked sufficient detail.", answer: "NO" },
            { qNum: 34, text: "Charles indicated to Pepys that he had planned his escape before the battle.", answer: "NO" },
            { qNum: 35, text: "The inclusion of Charles's account is a positive aspect of the book.", answer: "YES" }
          ]
        },
        // --- PASSAGE 3 QUESTIONS (MCQ) ---
        {
          type: "mcq_single",
          title: "Questions 36-40",
          instruction: "Choose the correct letter, A, B, C or D.",
          items: [
            {
              qNum: 36,
              text: "What is the reviewer's main purpose in the first paragraph?",
              options: [
                "A. to describe what happened during the Battle of Worcester",
                "B. to give an account of the circumstances leading to Charles II's escape",
                "C. to provide details of the Parliamentarians' political views",
                "D. to compare Charles II's beliefs with those of his father"
              ],
              answer: "B"
            },
            {
              qNum: 37,
              text: "Why does the reviewer include examples of the fugitives' behaviour in the third paragraph?",
              options: [
                "A. to explain how close Charles II came to losing his life",
                "B. to suggest that Charles II's supporters were badly prepared",
                "C. to illustrate how the events of the six weeks are brought to life",
                "D. to argue that certain aspects are not as well known as they should be"
              ],
              answer: "C"
            },
            {
              qNum: 38,
              text: "What point does the reviewer make about Charles II in the fourth paragraph?",
              options: [
                "A. He chose to celebrate what was essentially a defeat.",
                "B. He misunderstood the motives of his opponents.",
                "C. He aimed to restore people's faith in the monarchy.",
                "D. He was driven by a desire to be popular."
              ],
              answer: "A"
            },
            {
              qNum: 39,
              text: "What does the reviewer say about Charles Spencer in the fifth paragraph?",
              options: [
                "A. His decision to write the book comes as a surprise.",
                "B. He takes an unbiased approach to the subject matter.",
                "C. His descriptions of events would be better if they included more detail.",
                "D. He chooses language that is suitable for a twenty-first-century audience."
              ],
              answer: "B"
            },
            {
              qNum: 40,
              text: "When the reviewer says the book 'doesn't quite hit the mark', she is making the point that",
              options: [
                "A. it overlooks the impact of events on ordinary people.",
                "B. it lacks an analysis of prevalent views on monarchy.",
                "C. it omits any references to the deceit practised by Charles II during his time in hiding.",
                "D. it fails to address whether Charles II's experiences had a lasting influence on him."
              ],
              answer: "D"
            }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 28 - 29 PDF)
    // ==========================================================================
    writing: {
      task1: {
        title: "WRITING TASK 1",
        // Lưu ý: Bạn cần cắt ảnh từ trang 28 PDF (Norbiton industrial area) và lưu vào đường dẫn này
        image: "https://i.postimg.cc/VNFMdd2h/Screenshot-2026-02-08-202512.png", 
        prompt: `
          The maps below show an industrial area in the town of Norbiton, and planned future development of the site.

          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

          Write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
            It is important for people to take risks, both in their professional lives and their personal lives.

            Do you think the advantages of taking risks outweigh the disadvantages?

            Give reasons for your answer and include any relevant examples from your own knowledge or experience.

            Write at least 250 words.
        `
      }
    }
  }
};