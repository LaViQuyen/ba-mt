// src/data/cam16_test2.js

export const cam16_test2 = {
  id: "mt18",
  category: "full",
  testName: "MOCK TEST 18",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 32 - 37 PDF) - Đáp án trang 123
    // ==========================================================================
    listening: {
      audioSrc: "/audio/mt18.mp3",
      timeLimit: 1769,
      passage: "<h3 style='text-align:center; color:#002554;'>MOCK TEST 18 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-10",
          instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Copying photos to digital format</h3>
                
                <div style="margin-bottom: 15px;">
                    <strong>Name of company:</strong> Picturerep
                </div>

                <p><strong>Requirements</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Maximum size of photos is 30 cm, minimum size 4 cm.</li>
                    <li>Photos must not be in a <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"> or an album.</li>
                </ul>

                <p><strong>Cost</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>The cost for 360 photos is £ <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2"> (including one disk).</li>
                    <li>Before the completed order is sent, <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"> is required.</li>
                </ul>

                <p><strong>Services included in the price</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Photos can be placed in a folder, e.g. with the name <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4">.</li>
                    <li>The <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"> and contrast can be improved if necessary.</li>
                    <li>Photos which are very fragile will be scanned by <span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6">.</li>
                </ul>

                <p><strong>Special restore service (costs extra)</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>It may be possible to remove an object from a photo, or change the <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7">.</li>
                    <li>A photo which is not correctly in <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8"> cannot be fixed.</li>
                </ul>

                <p><strong>Other information</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Orders are completed within <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9">.</li>
                    <li>Send the photos in a box (not <span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10">).</li>
                </ul>
            </div>
          `,
          items: [
            { qNum: 1, answer: "frame" },
            { qNum: 2, answer: "195" },
            { qNum: 3, answer: "payment" },
            { qNum: 4, answer: "Grandparents" },
            { qNum: 5, answer: ["colour", "color"] },
            { qNum: 6, answer: "hand" },
            { qNum: 7, answer: "background" },
            { qNum: 8, answer: "focus" },
            { qNum: 9, answer: ["ten days", "10 days"] },
            { qNum: 10, answer: "plastic" }
          ]
        },

        // --- PART 2 ---
        {
          type: "mcq_single",
          title: "Part 2: Questions 11-15",
          instruction: "Choose the correct letter, A, B or C.",
          items: [
            {
              qNum: 11,
              text: "Dartfield House school used to be",
              options: ["A. a tourist information centre.", "B. a private home.", "C. a local council building."],
              answer: "C"
            },
            {
              qNum: 12,
              text: "What is planned with regard to the lower school?",
              options: ["A. All buildings on the main site will be improved.", "B. The lower school site will be used for new homes.", "C. Additional school buildings will be constructed on the lower school site."],
              answer: "B"
            },
            {
              qNum: 13,
              text: "The catering has been changed because of",
              options: ["A. long queuing times.", "B. changes to the school timetable.", "C. dissatisfaction with the menus."],
              answer: "A"
            },
            {
              qNum: 14,
              text: "Parents are asked to",
              options: ["A. help their children to decide in advance which serving point to use.", "B. make sure their children have enough money for food.", "C. advise their children on healthy food to eat."],
              answer: "A"
            },
            {
              qNum: 15,
              text: "What does the speaker say about the existing canteen?",
              options: ["A. Food will still be served there.", "B. Only staff will have access to it.", "C. Pupils can take their food into it."],
              answer: "C"
            }
          ]
        },
        {
          type: "matching",
          title: "Questions 16-18",
          instruction: "What comment does the speaker make about each of the following serving points in the Food Hall? Choose THREE answers from the box.",
          options: [
            "A. pupils help to plan menus",
            "B. only vegetarian food",
            "C. different food every week",
            "D. daily change in menu"
          ],
          items: [
            { qNum: 16, text: "World Adventures", answer: "D" },
            { qNum: 17, text: "Street Life", answer: "A" },
            { qNum: 18, text: "Speedy Italian", answer: "B" }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 19-20",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO optional after-school lessons are new?",
          options: [
            "A. swimming",
            "B. piano",
            "C. acting",
            "D. cycling",
            "E. theatre sound and lighting"
          ],
          items: [
            { qNums: [19, 20], answer: ["B", "C"] }
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
              text: "Luke read that one reason why we often forget dreams is that",
              options: [
                "A. our memories cannot cope with too much information.",
                "B. we might otherwise be confused about what is real.",
                "C. we do not think they are important."
              ],
              answer: "B"
            },
            {
              qNum: 22,
              text: "What do Luke and Susie agree about dreams predicting the future?",
              options: [
                "A. It may just be due to chance.",
                "B. It only happens with certain types of event.",
                "C. It happens more often than some people think."
              ],
              answer: "A"
            },
            {
              qNum: 23,
              text: "Susie says that a study on pre-school children having a short nap in the day",
              options: [
                "A. had controversial results.",
                "B. used faulty research methodology.",
                "C. failed to reach any clear conclusions."
              ],
              answer: "C"
            },
            {
              qNum: 24,
              text: "In their last assignment, both students had problems with",
              options: [
                "A. statistical analysis.",
                "B. making an action plan.",
                "C. self-assessment."
              ],
              answer: "C"
            }
          ]
        },
        {
          type: "gap",
          title: "Questions 25-30",
          instruction: "Complete the flow chart below. Write ONE WORD ONLY for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ccc; max-width: 600px; margin: 0 auto; text-align: center; font-family: 'Segoe UI', sans-serif;">
                <h4 style="color:#002554; margin-top:0;">Assignment plan</h4>
                
                <div style="border:1px solid #000; padding:15px; background: #fff; border-radius: 4px;">
                    <strong>Decide on research question:</strong><br/>
                    Is there a relationship between hours of sleep and number of dreams?
                </div>
                <div style="font-size:24px; padding: 5px;">&#8595;</div>

                <div style="border:1px solid #000; padding:15px; background: #fff; border-radius: 4px;">
                    <strong>Decide on sample:</strong><br/>
                    Twelve students from the <span class="q-badge-inline">25</span><input class="gap-input" data-qnum="25"> department
                </div>
                <div style="font-size:24px; padding: 5px;">&#8595;</div>

                <div style="border:1px solid #000; padding:15px; background: #fff; border-radius: 4px;">
                    <strong>Decide on methodology:</strong><br/>
                    Self-reporting
                </div>
                <div style="font-size:24px; padding: 5px;">&#8595;</div>

                <div style="border:1px solid #000; padding:15px; background: #fff; border-radius: 4px;">
                    <strong>Decide on procedure:</strong><br/>
                    Answers on <span class="q-badge-inline">26</span><input class="gap-input" data-qnum="26">
                </div>
                <div style="font-size:24px; padding: 5px;">&#8595;</div>

                <div style="border:1px solid #000; padding:15px; background: #fff; border-radius: 4px;">
                    Check ethical guidelines for working with <span class="q-badge-inline">27</span><input class="gap-input" data-qnum="27"><br/><br/>
                    Ensure that risk is assessed and <span class="q-badge-inline">28</span><input class="gap-input" data-qnum="28"> is kept to a minimum
                </div>
                <div style="font-size:24px; padding: 5px;">&#8595;</div>

                <div style="border:1px solid #000; padding:15px; background: #fff; border-radius: 4px;">
                    <strong>Analyse the results:</strong><br/>
                    Calculate the correlation and make a <span class="q-badge-inline">29</span><input class="gap-input" data-qnum="29">
                </div>
                <div style="font-size:24px; padding: 5px;">&#8595;</div>

                <div style="border:1px solid #000; padding:15px; background: #fff; border-radius: 4px;">
                    <span class="q-badge-inline">30</span><input class="gap-input" data-qnum="30"> the research
                </div>
            </div>
          `,
          items: [
            { qNum: 25, answer: "history" },
            { qNum: 26, answer: "paper" },
            { qNum: 27, answer: ["humans", "people"] },
            { qNum: 28, answer: "stress" },
            { qNum: 29, answer: "graph" },
            { qNum: 30, answer: "evaluate" }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-40",
          instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">Health benefits of dance</h3>
              
              <p><strong>Recent findings:</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>All forms of dance produce various hormones associated with feelings of happiness.</li>
                <li>Dancing with others has a more positive impact than dancing alone.</li>
                <li>An experiment on university students suggested that dance increases <span class="q-badge-inline">31</span><input class="gap-input" data-qnum="31">.</li>
                <li>For those with mental illness, dance could be used as a form of <span class="q-badge-inline">32</span><input class="gap-input" data-qnum="32">.</li>
              </ul>

              <p><strong>Benefits of dance for older people:</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>accessible for people with low levels of <span class="q-badge-inline">33</span><input class="gap-input" data-qnum="33"></li>
                <li>reduces the risk of heart disease</li>
                <li>better <span class="q-badge-inline">34</span><input class="gap-input" data-qnum="34"> reduces the risk of accidents</li>
                <li>improves <span class="q-badge-inline">35</span><input class="gap-input" data-qnum="35"> function by making it work faster</li>
                <li>improves participants' general well-being</li>
                <li>gives people more <span class="q-badge-inline">36</span><input class="gap-input" data-qnum="36"> to take exercise</li>
                <li>can lessen the feeling of <span class="q-badge-inline">37</span><input class="gap-input" data-qnum="37"> , very common in older people</li>
              </ul>

              <p><strong>Benefits of Zumba:</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>A study at The University of Wisconsin showed that doing Zumba for 40 minutes uses up as many <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38"> as other quite intense forms of exercise.</li>
                <li>The American Journal of Health Behavior study showed that:
                    <ul>
                        <li>women suffering from <span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39"> benefited from doing Zumba.</li>
                        <li>Zumba became a <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40"> for the participants.</li>
                    </ul>
                </li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "creativity" },
            { qNum: 32, answer: "therapy" },
            { qNum: 33, answer: "fitness" },
            { qNum: 34, answer: "balance" },
            { qNum: 35, answer: "brain" },
            { qNum: 36, answer: "motivation" },
            { qNum: 37, answer: "isolation" },
            { qNum: 38, answer: "calories" },
            { qNum: 39, answer: "obesity" },
            { qNum: 40, answer: "habit" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 38 - 51 PDF) - Đáp án trang 124
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333; margin-bottom: 20px;">The White Horse of Uffington</h3>
            
            <p>The cutting of huge figures or 'geoglyphs' into the earth of English hillsides has taken place for more than 3,000 years. There are 56 hill figures scattered around England, with the vast majority on the chalk downlands of the country's southern counties. The figures include giants, horses, crosses and regimental badges. Although the majority of these geoglyphs date within the last 300 years or so, there are one or two that are much older.</p>

            <p>The most famous of these figures is perhaps also the most mysterious - the Uffington White Horse in Oxfordshire. The White Horse has recently been re-dated and shown to be even older than its previously assigned ancient pre-Roman Iron Age* date. More controversial is the date of the enigmatic Long Man of Wilmington in Sussex. While many historians are convinced the figure is prehistoric, others believe that it was the work of an artistic monk from a nearby priory and was created between the 11th and 15th centuries.</p>

            <p>The method of cutting these huge figures was simply to remove the overlying grass to reveal the gleaming white chalk below. However, the grass would soon grow over the geoglyph again unless it was regularly cleaned or scoured by a fairly large team of people. One reason that the vast majority of hill figures have disappeared is that when the traditions associated with the figures faded, people no longer bothered or remembered to clear away the grass to expose the chalk outline. Furthermore, over hundreds of years the outlines would sometimes change due to people not always cutting in exactly the same place, thus creating a different shape to the original geoglyph. The fact that any ancient hill figures survive at all in England today is testament to the strength and continuity of local customs and beliefs which, in one case at least, must stretch back over millennia.</p>

            <p>The Uffington White Horse is a unique, stylised representation of a horse consisting of a long, sleek back, thin disjointed legs, a streaming tail, and a bird-like beaked head. The elegant creature almost melts into the landscape. The horse is situated 2.5 km from Uffington village on a steep slope close to the Late Bronze Age** (c. 7th century BCE) hillfort of Uffington Castle and below the Ridgeway, a long-distance Neolithic*** track.</p>

            <p>The Uffington Horse is also surrounded by Bronze Age burial mounds. It is not far from the Bronze Age cemetery of Lambourn Seven Barrows, which consists of more than 30 well-preserved burial mounds. The carving has been placed in such a way as to make it extremely difficult to see from close quarters, and like many geoglyphs is best appreciated from the air. Nevertheless, there are certain areas of the Vale of the White Horse, the valley containing and named after the enigmatic creature, from which an adequate impression may be gained. Indeed on a clear day the carving can be seen from up to 30 km away.</p>

            <p>The earliest evidence of a horse at Uffington is from the 1070s CE when 'White Horse Hill' is mentioned in documents from the nearby Abbey of Abingdon, and the first reference to the horse itself is soon after, in 1190 CE. However, the carving is believed to date back much further than that. Due to the similarity of the Uffington White Horse to the stylised depictions of horses on 1st century BCE coins, it had been thought that the creature must also date to that period.</p>

            <p>However, in 1995 Optically Stimulated Luminescence (OSL) testing was carried out by the Oxford Archaeological Unit on soil from two of the lower layers of the horse's body, and from another cut near the base. The result was a date for the horse's construction somewhere between 1400 and 600 BCE - in other words, it had a Late Bronze Age or Early Iron Age origin.</p>

            <p>The latter end of this date range would tie the carving of the horse in with occupation of the nearby Uffington hillfort, indicating that it may represent a tribal emblem marking the land of the inhabitants of the hillfort. Alternatively, the carving may have been carried out during a Bronze or Iron Age ritual. Some researchers see the horse as representing the Celtic**** horse goddess Epona, who was worshipped as a protector of horses, and for her associations with fertility. However, the cult of Epona was not imported from Gaul (France) until around the first century CE. This date is at least six centuries after the Uffington Horse was probably carved. Nevertheless, the horse had great ritual and economic significance during the Bronze and Iron Ages, as attested by its depictions on jewellery and other metal objects. It is possible that the carving represents a goddess in native mythology, such as Rhiannon, described in later Welsh mythology as a beautiful woman dressed in gold and riding a white horse.</p>

            <p>The fact that geoglyphs can disappear easily, along with their associated rituals and meaning, indicates that they were never intended to be anything more than temporary gestures. But this does not lessen their importance. These giant carvings are a fascinating glimpse into the minds of their creators and how they viewed the landscape in which they lived.</p>

            <div style="font-size: 0.85em; color: #555; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px;">
                <p>*<strong>Iron Age:</strong> a period (in Britain 800 BCE-43 CE) that is characterised by the use of iron tools</p>
                <p>**<strong>Bronze Age:</strong> a period (in Britain c. 2,500 BCE-800 BCE) that is characterised by the development of bronze tools</p>
                <p>***<strong>Neolithic:</strong> a period (in Britain c. 4,000 BCE - c. 2,500 BCE) that is significant for the spread of agricultural practices, and the use of stone tools</p>
                <p>****<strong>Celtic:</strong> an ancient people who migrated from Europe to Britain before the Romans</p>
            </div>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            
            <h3 style="text-align: center; color: #333;">I contain multitudes</h3>
            <p style="text-align:center; font-style:italic; margin-bottom: 20px;">Wendy Moore reviews Ed Yong's book about microbes</p>

            <p> Microbes, most of them bacteria, have populated this planet since long before animal life developed and they will outlive us. Invisible to the naked eye, they are ubiquitous. They inhabit the soil, air, rocks and water and are present within every form of life, from seaweed and coral to dogs and humans. And, as Yong explains in his utterly absorbing and hugely important book, we mess with them at our peril.</p>

            <p> Every species has its own colony of microbes, called a 'microbiome', and these microbes vary not only between species but also between individuals and within different parts of each individual. What is amazing is that while the number of human cells in the average person is about 30 trillion, the number of microbial ones is higher - about 39 trillion. At best, Yong informs us, we are only 50 per cent human. Indeed, some scientists even suggest we should think of each species and its microbes as a single unit, dubbed a 'holobiont'.</p>

            <p> In each human there are microbes that live only in the stomach, the mouth or the armpit and by and large they do so peacefully. So 'bad' microbes are just microbes out of context. Microbes that sit contentedly in the human gut (where there are more microbes than there are stars in the galaxy) can become deadly if they find their way into the bloodstream. These communities are constantly changing too. The right hand shares just one sixth of its microbes with the left hand. And, of course, we are surrounded by microbes. Every time we eat, we swallow a million microbes in each gram of food; we are continually swapping microbes with other humans, pets and the world at large.</p>

            <p> It's a fascinating topic and Yong, a young British science journalist, is an extraordinarily adept guide. Writing with lightness and panache, he has a knack of explaining complex science in terms that are both easy to understand and totally enthralling. Yong is on a mission. Leading us gently by the hand, he takes us into the world of microbes - a bizarre, alien planet - in a bid to persuade us to love them as much as he does. By the end, we do.</p>

            <p> For most of human history we had no idea that microbes existed. The first man to see these extraordinarily potent creatures was a Dutch lens-maker called Antony van Leeuwenhoek in the 1670s. Using microscopes of his own design that could magnify up to 270 times, he examined a drop of water from a nearby lake and found it teeming with tiny creatures he called 'animalcules'. It wasn't until nearly two hundred years later that the research of French biologist Louis Pasteur indicated that some microbes caused disease. It was Pasteur's 'germ theory' that gave bacteria the poor image that endures today.</p>

            <p> Yong's book is in many ways a plea for microbial tolerance, pointing out that while fewer than one hundred species of bacteria bring disease, many thousands more play a vital role in maintaining our health. The book also acknowledges that our attitude towards bacteria is not a simple one. We tend to see the dangers posed by bacteria, yet at the same time we are sold yoghurts and drinks that supposedly nurture 'friendly' bacteria. In reality, says Yong, bacteria should not be viewed as either friends or foes, villains or heroes. Instead we should realise we have a symbiotic relationship, that can be mutually beneficial or mutually destructive.</p>

            <p> What then do these millions of organisms do? The answer is pretty much everything. New research is now unravelling the ways in which bacteria aid digestion, regulate our immune systems, eliminate toxins, produce vitamins, affect our behaviour and even combat obesity. 'They actually help us become who we are,' says Yong. But we are facing a growing problem. Our obsession with hygiene, our overuse of antibiotics and our unhealthy, low-fibre diets are disrupting the bacterial balance and may be responsible for soaring rates of allergies and immune problems, such as inflammatory bowel disease (IBD).</p>

            <p> The most recent research actually turns accepted norms upside down. For example, there are studies indicating that the excessive use of household detergents and antibacterial products actually destroys the microbes that normally keep the more dangerous germs at bay. Other studies show that keeping a dog as a pet gives children early exposure to a diverse range of bacteria, which may help protect them against allergies later.</p>

            <p> The readers of Yong's book must be prepared for a decidedly unglamorous world. Among the less appealing case studies is one about a fungus that is wiping out entire populations of frogs and that can be halted by a rare microbial bacterium. Another is about squid that carry luminescent bacteria that protect them against predators. However, if you can overcome your distaste for some of the investigations, the reasons for Yong's enthusiasm become clear. The microbial world is a place of wonder. Already, in an attempt to stop mosquitoes spreading dengue fever - a disease that infects 400 million people a year - mosquitoes are being loaded with a bacterium to block the disease. In the future, our ability to manipulate microbes means we could construct buildings with useful microbes built into their walls to fight off infections. Just imagine a neonatal hospital ward coated in a specially mixed cocktail of microbes so that babies get the best start in life.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            
            <h3 style="text-align: center; color: #333; margin-bottom: 20px;">How to make wise decisions</h3>

            <p>Across cultures, wisdom has been considered one of the most revered human qualities. Although the truly wise may seem few and far between, empirical research examining wisdom suggests that it isn't an exceptional trait possessed by a small handful of bearded philosophers after all - in fact, the latest studies suggest that most of us have the ability to make wise decisions, given the right context.</p>

            <p>'It appears that experiential, situational, and cultural factors are even more powerful in shaping wisdom than previously imagined,' says Associate Professor Igor Grossmann of the University of Waterloo in Ontario, Canada. 'Recent empirical findings from cognitive, developmental, social, and personality psychology cumulatively suggest that people's ability to reason wisely varies dramatically across experiential and situational contexts. Understanding the role of such contextual factors offers unique insights into understanding wisdom in daily life, as well as how it can be enhanced and taught.'</p>

            <p>It seems that it's not so much that some people simply possess wisdom and others lack it, but that our ability to reason wisely depends on a variety of external factors. 'It is impossible to characterize thought processes attributed to wisdom without considering the role of contextual factors,' explains Grossmann. 'In other words, wisdom is not solely an "inner quality" but rather unfolds as a function of situations people happen to be in. Some situations are more likely to promote wisdom than others.'</p>

            <p>Coming up with a definition of wisdom is challenging, but Grossmann and his colleagues have identified four key characteristics as part of a framework of wise reasoning. One is intellectual humility or recognition of the limits of our own knowledge, and another is appreciation of perspectives wider than the issue at hand. Sensitivity to the possibility of change in social relations is also key, along with compromise or integration of different attitudes and beliefs.</p>

            <p>Grossmann and his colleagues have also found that one of the most reliable ways to support wisdom in our own day-to-day decisions is to look at scenarios from a third-party perspective, as though giving advice to a friend. Research suggests that when adopting a first-person viewpoint we focus on 'the focal features of the environment' and when we adopt a third-person, 'observer' viewpoint we reason more broadly and focus more on interpersonal and moral ideals such as justice and impartiality. Looking at problems from this more expansive viewpoint appears to foster cognitive processes related to wise decisions.</p>

            <p>What are we to do, then, when confronted with situations like a disagreement with a spouse or negotiating a contract at work, that require us to take a personal stake? Grossmann argues that even when we aren't able to change the situation, we can still evaluate these experiences from different perspectives.</p>

            <p>For example, in one experiment that took place during the peak of a recent economic recession, graduating college seniors were asked to reflect on their job prospects. The students were instructed to imagine their career either 'as if you were a distant observer' or 'before your own eyes as if you were right there'. Participants in the group assigned to the 'distant observer' role displayed more wisdom-related reasoning (intellectual humility and recognition of change) than did participants in the control group.</p>

            <p>In another study, couples in long-term romantic relationships were instructed to visualize an unresolved relationship conflict either through the eyes of an outsider or from their own perspective. Participants then discussed the incident with their partner for 10 minutes, after which they wrote down their thoughts about it. Couples in the 'other's eyes' condition were significantly more likely to rely on wise reasoning - recognizing others' perspectives and searching for a compromise - compared to the couples in the egocentric condition.</p>

            <p>'Ego-decentering promotes greater focus on others and enables a bigger picture, conceptual view of the experience, affording recognition of intellectual humility and change,' says Grossmann.</p>

            <p>We might associate wisdom with intelligence or particular personality traits, but research shows only a small positive relationship between wise thinking and crystallized intelligence and the personality traits of openness and agreeableness. 'It is remarkable how much people can vary in their wisdom from one situation to the next, and how much stronger such contextual effects are for understanding the relationship between wise judgment and its social and affective outcomes as compared to the generalized "traits",' Grossmann explains. 'That is, knowing how wisely a person behaves in a given situation is more informative for understanding their emotions or likelihood to forgive [or] retaliate as compared to knowing whether the person may be wise "in general".'</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          type: "tfng",
          title: "Questions 1-8",
          instruction: "Do the following statements agree with the information given in Reading Passage 1?<br><br><table style='width:100%; border:none; margin-bottom:15px; font-size: 0.95rem;'><tr><td style='width: 110px; font-weight: bold; padding: 5px 0;'>TRUE</td><td>if the statement agrees with the information</td></tr><tr><td style='font-weight: bold; padding: 5px 0;'>FALSE</td><td>if the statement contradicts the information</td></tr><tr><td style='font-weight: bold; padding: 5px 0;'>NOT GIVEN</td><td>if there is no information on this</td></tr></table>",
          items: [
            { qNum: 1, text: "Most geoglyphs in England are located in a particular area of the country.", answer: "TRUE" },
            { qNum: 2, text: "There are more geoglyphs in the shape of a horse than any other creature.", answer: "NOT GIVEN" },
            { qNum: 3, text: "A recent dating of the Uffington White Horse indicates that people were mistaken about its age.", answer: "TRUE" },
            { qNum: 4, text: "Historians have come to an agreement about the origins of the Long Man of Wilmington.", answer: "FALSE" },
            { qNum: 5, text: "Geoglyphs were created by people placing white chalk on the hillside.", answer: "FALSE" },
            { qNum: 6, text: "Many geoglyphs in England are no longer visible.", answer: "TRUE" },
            { qNum: 7, text: "The shape of some geoglyphs has been altered over time.", answer: "TRUE" },
            { qNum: 8, text: "The fame of the Uffington White Horse is due to its size.", answer: "NOT GIVEN" }
          ]
        },
        {
          type: "gap",
          title: "Questions 9-13",
          instruction: "Complete the notes below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">The Uffington White Horse</h3>
              
              <p>The location of the Uffington White Horse:</p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>a distance of 2.5 km from Uffington village</li>
                <li>near an ancient road known as the <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9"></li>
                <li>close to an ancient cemetery that has a number of burial mounds</li>
              </ul>

              <p>Dating the Uffington White Horse:</p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>first reference to White Horse Hill appears in <span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10"> from the 1070s</li>
                <li>horses shown on coins from the period 100 BCE - 1 BCE are similar in appearance</li>
                <li>according to analysis of the surrounding <span class="q-badge-inline">11</span><input class="gap-input" data-qnum="11">, the Horse is Late Bronze Age / Early Iron Age</li>
              </ul>

              <p>Possible reasons for creation of the Uffington White Horse:</p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>an emblem to indicate land ownership</li>
                <li>formed part of an ancient ritual</li>
                <li>was a representation of goddess Epona - associated with protection of horses and <span class="q-badge-inline">12</span><input class="gap-input" data-qnum="12"></li>
                <li>was a representation of a Welsh goddess called <span class="q-badge-inline">13</span><input class="gap-input" data-qnum="13"></li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 9, answer: "Ridgeway" },
            { qNum: 10, answer: "documents" },
            { qNum: 11, answer: "soil" },
            { qNum: 12, answer: "fertility" },
            { qNum: 13, answer: "Rhiannon" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          type: "mcq_single",
          title: "Questions 14-16",
          instruction: "Choose the correct letter, <strong>A, B, C or D</strong>.",
          items: [
            {
              qNum: 14,
              text: "What point does the writer make about microbes in the first paragraph?",
              options: [
                "A. They adapt quickly to their environment.",
                "B. The risk they pose has been exaggerated.",
                "C. They are more plentiful in animal life than plant life.",
                "D. They will continue to exist for longer than the human race."
              ],
              answer: "D"
            },
            {
              qNum: 15,
              text: "In the second paragraph, the writer is impressed by the fact that",
              options: [
                "A. each species tends to have vastly different microbes.",
                "B. some parts of the body contain relatively few microbes.",
                "C. the average individual has more microbial cells than human ones.",
                "D. scientists have limited understanding of how microbial cells behave."
              ],
              answer: "C"
            },
            {
              qNum: 16,
              text: "What is the writer doing in the fifth paragraph?",
              options: [
                "A. explaining how a discovery was made",
                "B. comparing scientists' theories about microbes",
                "C. describing confusion among scientists",
                "D. giving details of how microbes cause disease"
              ],
              answer: "A"
            }
          ]
        },
        {
          type: "gap",
          title: "Questions 17-20",
          instruction: "Complete the summary using the list of words, <strong>A-H</strong>, below.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h4 style="text-align:center; color:#002554;">We should be more tolerant of microbes</h4>
              <p>Yong's book argues that we should be more tolerant of microbes. Many have a beneficial effect, and only a relatively small number lead to <span class="q-badge-inline">17</span><select class="gap-select" data-qnum="17"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select> . And although it is misleading to think of microbes as 'friendly', we should also stop thinking of them as the enemy. In fact, we should accept that our relationship with microbes is one based on <span class="q-badge-inline">18</span><select class="gap-select" data-qnum="18"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select> .</p>
              
              <p>New research shows that microbes have numerous benefits for humans. Amongst other things, they aid digestion, remove poisons, produce vitamins and may even help reduce obesity. However, there is a growing problem. Our poor <span class="q-badge-inline">19</span><select class="gap-select" data-qnum="19"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select> , our overuse of antibiotics, and our excessive focus on <span class="q-badge-inline">20</span><select class="gap-select" data-qnum="20"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select> are upsetting the bacterial balance and may be contributing to the huge increase in allergies and immune system problems.</p>
              
              <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; background: #fff; font-size: 0.9em; display: flex; flex-wrap: wrap; gap: 15px;">
                 <div style="width: 100%; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 5px; font-weight: bold;">Options:</div>
                 <div style="width: 45%;">A. solution</div>
                 <div style="width: 45%;">B. partnership</div>
                 <div style="width: 45%;">C. destruction</div>
                 <div style="width: 45%;">D. exaggeration</div>
                 <div style="width: 45%;">E. cleanliness</div>
                 <div style="width: 45%;">F. regulations</div>
                 <div style="width: 45%;">G. illness</div>
                 <div style="width: 45%;">H. nutrition</div>
              </div>
            </div>
          `,
          items: [
            { qNum: 17, answer: "G" },
            { qNum: 18, answer: "B" },
            { qNum: 19, answer: "H" },
            { qNum: 20, answer: "E" }
          ]
        },
        {
          type: "ynng",
          title: "Questions 21-26",
          instruction: "Do the following statements agree with the claims of the writer in Reading Passage 2?<br><br><table style='width:100%; border:none; margin-bottom:15px; font-size: 0.95rem;'><tr><td style='width: 110px; font-weight: bold; padding: 5px 0;'>YES</td><td>if the statement agrees with the information</td></tr><tr><td style='font-weight: bold; padding: 5px 0;'>NO</td><td>if the statement contradicts the information</td></tr><tr><td style='font-weight: bold; padding: 5px 0;'>NOT GIVEN</td><td>if there is no information on this</td></tr></table>",
          items: [
            { qNum: 21, text: "It is possible that using antibacterial products in the home fails to have the desired effect.", answer: "YES" },
            { qNum: 22, text: "It is a good idea to ensure that children come into contact with as few bacteria as possible.", answer: "NO" },
            { qNum: 23, text: "Yong's book contains more case studies than are necessary.", answer: "NOT GIVEN" },
            { qNum: 24, text: "The case study about bacteria that prevent squid from being attacked may have limited appeal.", answer: "YES" },
            { qNum: 25, text: "Efforts to control dengue fever have been surprisingly successful.", answer: "NOT GIVEN" },
            { qNum: 26, text: "Microbes that reduce the risk of infection have already been put inside the walls of some hospital wards.", answer: "NO" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          type: "mcq_single",
          title: "Questions 27-30",
          instruction: "Choose the correct letter, <strong>A, B, C or D</strong>.",
          items: [
            {
              qNum: 27,
              text: "What point does the writer make in the first paragraph?",
              options: [
                "A. Wisdom appears to be unique to the human race.",
                "B. A basic assumption about wisdom may be wrong.",
                "C. Concepts of wisdom may depend on the society we belong to.",
                "D. There is still much to be discovered about the nature of wisdom."
              ],
              answer: "B"
            },
            {
              qNum: 28,
              text: "What does Igor Grossmann suggest about the ability to make wise decisions?",
              options: [
                "A. Earlier research into it was based on unreliable data.",
                "B. It can vary greatly from one person to another.",
                "C. The importance of certain influences on it was underestimated.",
                "D. Various branches of psychology define it according to their own criteria."
              ],
              answer: "C"
            },
            {
              qNum: 29,
              text: "According to the third paragraph, Grossmann claims that the level of wisdom an individual shows",
              options: [
                "A. can be greater than they think it is.",
                "B. will be different in different circumstances.",
                "C. may be determined by particular aspects of their personality.",
                "D. should develop over time as a result of their life experiences."
              ],
              answer: "B"
            },
            {
              qNum: 30,
              text: "What is described in the fifth paragraph?",
              options: [
                "A. a difficulty encountered when attempting to reason wisely",
                "B. a recommended strategy that can help people to reason wisely",
                "C. an example of the type of person who is likely to reason wisely",
                "D. a controversial view about the benefits of reasoning wisely"
              ],
              answer: "D"
            }
          ]
        },
        {
          type: "gap",
          title: "Questions 31-35",
          instruction: "Complete the summary using the list of words, <strong>A-J</strong>, below.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h4 style="text-align:center; color:#002554;">The characteristics of wise reasoning</h4>
              <p>Igor Grossmann and colleagues have established four characteristics which enable us to make wise decisions. It is important to have a certain degree of <span class="q-badge-inline">31</span><select class="gap-select" data-qnum="31"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> regarding the extent of our knowledge, and to take into account <span class="q-badge-inline">32</span><select class="gap-select" data-qnum="32"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> which may not be the same as our own. We should also be able to take a broad <span class="q-badge-inline">33</span><select class="gap-select" data-qnum="33"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> of any situation. Another key characteristic is being aware of the likelihood of alterations in the way that people relate to each other.</p>
              
              <p>Grossmann also believes that it is better to regard scenarios with <span class="q-badge-inline">34</span><select class="gap-select" data-qnum="34"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> . By avoiding the first-person perspective, we focus more on <span class="q-badge-inline">35</span><select class="gap-select" data-qnum="35"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> and on other moral ideals, which in turn leads to wiser decision-making.</p>
              
              <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; background: #fff; font-size: 0.9em; display: flex; flex-wrap: wrap; gap: 15px;">
                 <div style="width: 100%; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 5px; font-weight: bold;">Options:</div>
                 <div style="width: 30%;">A. opinions</div>
                 <div style="width: 30%;">B. confidence</div>
                 <div style="width: 30%;">C. view</div>
                 <div style="width: 30%;">D. modesty</div>
                 <div style="width: 30%;">E. problems</div>
                 <div style="width: 30%;">F. objectivity</div>
                 <div style="width: 30%;">G. fairness</div>
                 <div style="width: 30%;">H. experiences</div>
                 <div style="width: 30%;">I. range</div>
                 <div style="width: 30%;">J. reasons</div>
              </div>
            </div>
          `,
          items: [
            { qNum: 31, answer: "D" },
            { qNum: 32, answer: "A" },
            { qNum: 33, answer: "C" },
            { qNum: 34, answer: "F" },
            { qNum: 35, answer: "G" }
          ]
        },
        {
          type: "tfng",
          title: "Questions 36-40",
          instruction: "Do the following statements agree with the information given in Reading Passage 3?<br><br><table style='width:100%; border:none; margin-bottom:15px; font-size: 0.95rem;'><tr><td style='width: 110px; font-weight: bold; padding: 5px 0;'>TRUE</td><td>if the statement agrees with the information</td></tr><tr><td style='font-weight: bold; padding: 5px 0;'>FALSE</td><td>if the statement contradicts the information</td></tr><tr><td style='font-weight: bold; padding: 5px 0;'>NOT GIVEN</td><td>if there is no information on this</td></tr></table>",
          items: [
            { qNum: 36, text: "Students participating in the job prospects experiment could choose one of two perspectives to take.", answer: "FALSE" },
            { qNum: 37, text: "Participants in the couples experiment were aware that they were taking part in a study about wise reasoning.", answer: "NOT GIVEN" },
            { qNum: 38, text: "In the couples experiments, the length of the couples' relationships had an impact on the results.", answer: "NOT GIVEN" },
            { qNum: 39, text: "In both experiments, the participants who looked at the situation from a more detached viewpoint tended to make wiser decisions.", answer: "TRUE" },
            { qNum: 40, text: "Grossmann believes that a person's wisdom is determined by their intelligence to only a very limited extent.", answer: "TRUE" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 52 - 53 PDF)
    // ==========================================================================
    writing: {
      task1: {
        title: "WRITING TASK 1",
        // Bạn cần cắt ảnh từ trang 52 PDF và lưu vào đường dẫn này
        image: "https://i.postimg.cc/J0vQfNsh/Screenshot-2026-02-28-180302.png", 
        prompt: `
          The diagram below shows the manufacturing process for making sugar from sugar cane.

          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

          Write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          In their advertising, businesses now usually emphasise that their products are new in some way.

          Why is this? Do you think it is a positive or negative development?

          Give reasons for your answer and include any relevant examples from your own knowledge or experience.

          Write at least 250 words.
        `
      }
    }
  }
};