// src/data/sm6_test26.js

export const sm6_test26 = {
  id: "mt29",
  category: "full",
  testName: "MOCK TEST 29",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING
    // ==========================================================================
    listening: {
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/beablevn-ielts.firebasestorage.app/o/audio%2Fmt29.mp3?alt=media&token=d11544ab-eaa4-4a59-8424-53caabd7e879", // Cần bổ sung file audio tương ứng
      timeLimit: 1696, // 30 phút
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 26 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-5",
          instruction: "Complete the sentences below. Write <strong>NO MORE THAN THREE WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; border-radius: 8px; margin-bottom: 20px;">
                <p>1. Tom will have to pay a <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1"> to Mrs. Smith in addition to his rent.</p>
                <p>2. The Council rates and charges include rubbish collection and <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2">.</p>
                <p>3. Trash that is non-recyclable or <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3"> is collected weekly.</p>
                <p>4. Mrs. Smith brought a <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4"> with her in case Tom decided he liked the flat.</p>
                <p>5. The place Mrs. Smith recommended to go for key cutting is near the <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5">.</p>
            </div>
          `,
          items: [
            { qNum: 1, answer: "deposit" },
            { qNum: 2, answer: "water" },
            { qNum: 3, answer: "plastic" },
            { qNum: 4, answer: "contract" },
            { qNum: 5, answer: "post office" }
          ]
        },
        {
          type: "gap",
          title: "Questions 6-7",
          instruction: "Label the plan below. Write <strong>NO MORE THAN THREE WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 30px; width: 100%;">
                <h4 style="color:#2B6830; margin-bottom: 15px;">Mrs. Smith's Flat</h4>
                
                <img src="https://i.postimg.cc/hvQtC584/Screenshot-2026-05-06-122105.png" alt="Mrs. Smith's Flat Plan" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 20px;" />
                
                <div style="background: #f9f9f9; padding: 20px 30px; border-radius: 8px; border: 1px solid #ddd; min-width: 300px; text-align: left;">
                    <div style="margin-bottom: 15px; display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">6. A </strong> 
                        <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="q-6">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">7. B </strong> 
                        <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7">
                    </div>
                </div>
            </div>
          `,
          items: [
            { qNum: 6, answer: ["The living room", "living room", "a living room"] },
            { qNum: 7, answer: ["The fire escape", "fire escape", "a fire escape"] }
          ]
        },
        {
          type: "gap",
          title: "Questions 8-10",
          instruction: "Answer the questions below. Write <strong>NO MORE THAN THREE WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; border-radius: 8px;">
                <p>8. What has Mrs. Smith installed in the kitchen in order to follow safety regulations?<br><span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8"></p>
                <p>9. What will Mrs. Smith buy for Tom if he wants to use the attic?<br><span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9"></p>
                <p>10. What will Mrs. Smith let Tom use for free in the flat?<br><span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10"></p>
            </div>
          `,
          items: [
            { qNum: 8, answer: ["A fire alarm", "fire alarm", "the fire alarm"] },
            { qNum: 9, answer: ["The ladder", "a ladder", "ladder"] },
            { qNum: 10, answer: "wifi" }
          ]
        },

        // --- PART 2 ---
        {
          type: "gap",
          title: "Part 2: Questions 11-16",
          instruction: "Complete the notes below. Write <strong>NO MORE THAN TWO WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="margin-top:0; text-align:center;">The Wood Green Fete</h3>
                <p>The annual Wood Green Fete - Saturday from 10 a.m. - 6 p.m.</p>
                <ul style="line-height: 2;">
                    <li>Under 16's can dress up and win a 1st prize of a pair of <span class="q-badge-inline">11</span><input type="text" class="gap-input" data-qnum="11" id="q-11">. Register at the organisation desk by midday and be there again 12.00-12.30 for the judging.</li>
                    <li>Men only can bring a <span class="q-badge-inline">12</span><input type="text" class="gap-input" data-qnum="12" id="q-12"> to the organisation desk by 2 p.m. for judging between 2 p.m. and 3 p.m.</li>
                    <li>If people make an appointment with Taylor Motors at the fete, they will get a <span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="q-13"> if they buy a car.</li>
                    <li>Kids under 6 can be monitored for one hour at the supervised <span class="q-badge-inline">14</span><input type="text" class="gap-input" data-qnum="14" id="q-14"> for a small fee - kids must be potty trained and not hungry.</li>
                    <li>The Saint John's Ambulance will put on a demonstration of <span class="q-badge-inline">15</span><input type="text" class="gap-input" data-qnum="15" id="q-15"> in the west corner of the park at 11 a.m. People can also sign up for training.</li>
                    <li>A new brand of mobile phone can be seen in the marquee near the park's <span class="q-badge-inline">16</span><input type="text" class="gap-input" data-qnum="16" id="q-16">.</li>
                </ul>
            </div>
          `,
          items: [
            { qNum: 11, answer: "theatre tickets" },
            { qNum: 12, answer: "cake" },
            { qNum: 13, answer: "discount" },
            { qNum: 14, answer: "play area" },
            { qNum: 15, answer: "first aid" },
            { qNum: 16, answer: "entrance" }
          ]
        },
        {
          type: "matching",
          title: "Questions 17-20",
          instruction: "Match the stall with the issue that it can help people with. Write the correct letter from the box below (A - F) next to questions 17 - 20.",
          options: [
            "A. Injury",
            "B. Bathrooms",
            "C. Theft",
            "D. Thirst",
            "E. Directions",
            "F. Lost property"
          ],
          items: [
            { qNum: 17, text: "Stall A", answer: "F" },
            { qNum: 18, text: "Stall B", answer: "E" },
            { qNum: 19, text: "Stall C", answer: "A" },
            { qNum: 20, text: "Stall D", answer: "C" }
          ]
        },

        // --- PART 3 ---
        {
          type: "mcq_single",
          title: "Part 3: Questions 21-25",
          instruction: "Choose the correct letter A, B, or C.",
          items: [
            {
              qNum: 21,
              text: "Teresa obtained the presentation rubric",
              options: [
                "A. from a previous seminar.",
                "B. in an email.",
                "C. by visiting the professor in his office."
              ],
              answer: "B"
            },
            {
              qNum: 22,
              text: "Why can't the students use Jake's laptop for their slideshow?",
              options: [
                "A. The laptop needs an upgrade.",
                "B. His flatmate has the laptop.",
                "C. The laptop is being repaired."
              ],
              answer: "C"
            },
            {
              qNum: 23,
              text: "Tasmanian trout were first introduced",
              options: [
                "A. so people could fish for them.",
                "B. to create an alternative source of food.",
                "C. to develop an industry."
              ],
              answer: "A"
            },
            {
              qNum: 24,
              text: "What measure must be taken today to ensure that trout numbers in New South Wales are at good levels?",
              options: [
                "A. Gravel needs to be placed on some river bottoms, so the trout can breed.",
                "B. Some rivers need to have new fish repeatedly introduced.",
                "C. Fishing is banned for long periods in the year to allow stocks to recover."
              ],
              answer: "B"
            },
            {
              qNum: 25,
              text: "Some New South Wales trout farms",
              options: [
                "A. export fish to other countries.",
                "B. deal with the fast food industry.",
                "C. deal with the tourist trade."
              ],
              answer: "C"
            }
          ]
        },
        {
          type: "gap",
          title: "Questions 26-28",
          instruction: "Complete the sentences below. Write <strong>NO MORE THAN ONE WORD</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border: 1px solid #ddd; margin-bottom: 20px;">
                <p>26. Trout suffering from <span class="q-badge-inline">26</span><input type="text" class="gap-input" data-qnum="26" id="q-26"> are more liable to suffer from disease.</p>
                <p>27. <span class="q-badge-inline">27</span><input type="text" class="gap-input" data-qnum="27" id="q-27"> is now required for any trout farm with fish suffering from the trout EHN virus.</p>
                <p>28. Government <span class="q-badge-inline">28</span><input type="text" class="gap-input" data-qnum="28" id="q-28"> has led to better regulations for trout farms being put into place.</p>
            </div>
          `,
          items: [
            { qNum: 26, answer: "stress" },
            { qNum: 27, answer: ["Quarantine", "quarantine"] },
            { qNum: 28, answer: "experience" }
          ]
        },
        {
          type: "gap",
          title: "Questions 29-30",
          instruction: "Complete the diagram below. Write <strong>NO MORE THAN THREE WORDS</strong> from the listening for each answer.",
          htmlContent: `
             <div style="text-align: center; margin-bottom: 20px;">
                <h4 style="color:#2B6830; margin-bottom: 15px;">A Trout Farm</h4>
                
                <img src="https://i.postimg.cc/QMMs4zs4/Screenshot-2026-05-06-121250.png" alt="A Trout Farm Diagram" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 20px;" />
                
                <div style="text-align: left; display: inline-block; background: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #ddd; min-width: 300px;">
                    <p style="margin: 0 0 15px 0;"><strong>29.</strong> <span class="q-badge-inline">29</span><input type="text" class="gap-input" data-qnum="29" id="q-29"></p>
                    <p style="margin: 0;"><strong>30.</strong> <span class="q-badge-inline">30</span><input type="text" class="gap-input" data-qnum="30" id="q-30"></p>
                </div>
            </div>
          `,
          items: [
            { qNum: 29, answer: ["A hatchery", "hatchery"] },
            { qNum: 30, answer: ["A filter tank", "filter tank", "filter"] }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-37",
          instruction: "Complete the summary below. Write <strong>NO MORE THAN TWO WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; border-radius: 8px; font-family: 'Segoe UI', sans-serif; line-height: 1.8;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">The Lord Howe Stick Insect</h3>
              
              <p>The Lord Howe Island Group lies between Australia and New Zealand and is made up of Lord Howe Island and various other lesser <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="q-31">. The Lord Howe Island stick insect used to be found on two islands. The female is larger than the male and they were formerly very <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="q-32"> on Lord Howe Island.</p>

              <p>The small population of Lord Howe Island stick insects was always very vulnerable and the species has always been in danger of <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33">. Although the introduction of mice created competition for food on the island, particularly with <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34">, they did not drastically harm the ecosystem. However, the Lord Howe stick insect, along with other species, was totally wiped out from Lord Howe Island due to rats escaping a shipwreck at the island.</p>

              <p>Hope was lost for many years until <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"> found a population at Balls Pyramid. Knowing the insect was <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36">, it was a night search that finally found them. Melbourne Zoo bred them and have produced several generations; these have been shared amongst world zoos to further develop <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37"> and as protection against problems in Melbourne. The zoos' main aims are to keep the species alive and then to re-introduce them into the wild.</p>
            </div>
          `,
          items: [
            { qNum: 31, answer: "outcrops" },
            { qNum: 32, answer: "common" },
            { qNum: 33, answer: "extinction" },
            { qNum: 34, answer: "birds" },
            { qNum: 35, answer: "researchers" },
            { qNum: 36, answer: "nocturnal" },
            { qNum: 37, answer: ["blood lines", "bloodlines"] }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 38-40",
          instruction: "Choose <strong>THREE</strong> letters, <strong>A - F</strong>. What <strong>THREE</strong> from the following list are reasons given in the listening against the rat poisoning plan on Lord Howe Island?",
          options: [
            "A. The rats probably wouldn't eat the poison.",
            "B. Rats maybe didn't cause the death of all the Lord Howe Island stick insects.",
            "C. The Lord Howe Island stick insects will eat the residents' agricultural produce.",
            "D. The rat poison could affect the island's children.",
            "E. The mice on Lord Howe Island will gain too much advantage from the rats' deaths.",
            "F. The rats on Lord Howe Island have also become a distinctive species and must be protected."
          ],
          items: [
            { qNums: [38, 39, 40], answer: ["B", "D", "E"] }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">Social Intelligence</h3>
            
            <p>Social intelligence is the ability to get along well with others, and to get them to cooperate with you. Sometimes referred to simplistically as 'people skills,' social intelligence includes people's awareness of themselves and the social dynamics around them, and knowledge of the interaction styles and strategies that can help a person achieve his or her objectives in dealing with others. It also involves a certain amount of self-insight and a consciousness of one's own perceptions and reaction patterns. The socially intelligent person knows how to play different roles, allowing him or her to feel comfortable with whoever is being interacted with. As a result, the socially intelligent individual feels self-confident and effective, what psychologists call 'social self-efficacy.'</p>

            <p>From the standpoint of interpersonal skills, psychologists have classified behaviour towards others as falling somewhere on a spectrum between a 'toxic' effect and a 'nourishing' effect. Toxic behaviour makes people feel devalued, angry, frustrated, guilty or otherwise inadequate. Nourishing behaviour makes people feel valued, respected, affirmed, encouraged or competent. Continued patterns of toxic behaviour indicates a low level of social intelligence, which is the inability to connect with people and influence them effectively. Nourishing behaviour, on the other hand, tends to make a person much more effective in dealing with others.</p>

            <p>The old idea that a person's potential in life can be measured and predicted by a single number - his or her 'IQ' score - has lost a great deal of credibility during the last decade or so. Many researchers now accept Professor Howard Gardner's proposition that intelligence is multidimensional, and many believe that each of the key dimensions of intelligence can continue to increase throughout one's life, given suitable opportunities. Social intelligence is one of these intelligences.</p>

            <p>Social intelligence is often mixed up with emotional intelligence and some psychologists have included social intelligence as part of Gardner's emotional intelligence. In practical terms, however, it makes more sense to think of emotional intelligence and social intelligence as two discrete competences. Social intelligence is separate from, but complimentary to emotional intelligence, and Gardner himself differentiates them by referring to them as interpersonal intelligence (social) and intrapersonal intelligence (emotional). People need both models in order to understand themselves and the way they interact with others. This is not to say that these two intelligences are mutually exclusive. Some deficits in social intelligence arise from inadequate development of emotional intelligence; conversely, some deficits in social intelligence may lead to unsuccessful social experiences. These shortcomings may undermine a person's self-worth, which is part of emotional intelligence.</p>

            <p>In the simplest terms, social intelligence is to have effective relationships with people, which most people generally learn as they grow up, mature, and gain experience in dealing with others. Unfortunately, many people do not continue to learn and develop these skills as they age, and many people never acquire the awareness and skills they need to succeed in social, business or professional situations. As social intelligence is highly valued in business environments, there have therefore been many efforts to teach it. By first understanding social intelligence as a combination of skills expressed through learned behavior, and then assessing the impact of one's behaviour on others - i.e. the degree to which one is successful in dealing with others - people can learn to experiment with new behaviours and new interaction strategies. It is quite clear that adults who are deficient in insight and competence in dealing with others can make significant improvements in their social intelligence status as a result of understanding the basic concepts, but they need to be able to assess themselves continually against a comprehensive model of interpersonal effectiveness.</p>

            <p>Measuring social intelligence was once thought to be impossible, but psychologists have developed a number of ways of doing so. The social intelligence quotient is a statistical abstraction, similar to the standard score approach used in IQ tests, with a mean of 100. Scores of 140 or above are considered to be very high. Unlike the standard IQ test, it is not a fixed model. It leans more to the point of view that intelligence is not a fixed attribute, but a complex hierarchy of information-processing skills underlying an adaptive equilibrium between the individual and the environment. Therefore, an individual can change their social intelligence quotient by altering their attitudes and behaviour in response to their complex social environment. People with a low social intelligence quotient are more suited to work with low customer contact, as well as in smaller groups or teams, or independently, because they may not have the required interpersonal communication and social skills for success with customers and other co-workers. People with a social intelligence quotient over 120 are considered socially skilled, and may work exceptionally well with jobs that involve direct contact and communication with other people.</p>

            <p>Today's society, especially in a school context, has always put much more significant emphasis on traditional proofs of intelligence, such as IQ and doing well at school and college, than social intelligence, and this does not look set to change. However, most people's lives are much more affected by their social interactions. People's relationships partners, friends, colleagues and children all significantly enhance people's well-being and everyday happiness. If people invested more in their social intelligence skills then they could find themselves in a life with which they were much more satisfied.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            
            <h3 style="text-align: center; color: #333;">U.S. Coastal Change</h3>

            <p><strong>Paragraph A</strong><br>U.S. coastal lands and sediments are constantly in motion. Breaking waves move sand along the coast, eroding sand in one area and depositing it on an adjacent beach. Tidal cycles bring sand onto the beach and carry it back into the surf. Rivers carry sediment to the coast and build deltas in the open water. Storms cause deep erosion in rock cliffs and leave thick overwash deposits in other coastal areas. Plants retain sediment in wetlands and impede movement of coastal dunes. Taken individually, each natural process of coastal transport is complex; taken collectively, they create an extraordinarily intricate system that attempts to achieve a natural balance.</p>

            <p><strong>Paragraph B</strong><br>While the same dynamic processes cause continuous change on every coast, coasts do not all respond in the same way. Interactions among the different processes and the degree to which a particular process controls change depend upon localised factors. They include the coast's proximity to sediment-laden rivers and tectonic activity, the topography and composition of the land, the prevailing wind and weather patterns, and the configuration of the coastline and nearshore geometry. Earth-science research is showing that these surroundings determine not only the changes to the coast, but also the type of coast produced.</p>

            <p><strong>Paragraph C</strong><br>People's activities add another layer of complexity to the natural processes of coastal lands and materials, and these activities may have direct or indirect effects on our changing coasts. They may affect sources of new sediment taken to the coast and the movement of sediment within the coastal environment, and they may promote changes in sea level, both local and global. People's activities are often conducted without an adequate understanding of coastal geology and processes, and, as a result, they can lead to unforeseen degradation of coasts. Even people's actions intended to save or improve the coast may inadvertently increase erosion. Cooperative investigations are starting to provide the crucial information needed to minimise the unintended effects of people's disturbances along coasts.</p>

            <p><strong>Paragraph D</strong><br>As the number of active landfills dwindles and coastal populations grow, offshore waste dumping and coastal contamination increase. This additional dumping also increases the amount of improper waste disposal affecting the coastal environment and water quality. Living coral reefs are particularly vulnerable, but other coastal environments suffer as well. Medical waste, including used hypodermic needles, was washed onto the New Jersey and New York beaches during the summer of 1988, resulting in an economic disaster for the recreation industries in the region. Fishing industries have also been severely damaged by this and more than one-third of U.S. shellfish beds are closed or restricted as a result of contamination.</p>

            <p><strong>Paragraph E</strong><br>The southeastern coast, rimmed by a series of shorelines on obstructive islands and spits, separates the mainland coastal plain from a wide, gently sloping offshore continental shelf. This generally tectonically stable region has a hurricane season during the late summer to winter months. Most rivers cutting through the low-lying coastal plain flow slowly to the sea and deposit their sand-sized sediment in bays and estuaries before reaching the coast. The river's suspended load of finer particles settles out in the sounds and bays that are protected by the obstructive islands and spits. The major source of new sediment to these beaches of the southeastern United States is from the erosion of adjacent headlands and beaches, whose sand generally migrates south as a result of longshore transport. Sand transported landward from the continental shelf may also contribute to the coast and nearshore sand budget.</p>

            <p><strong>Paragraph F</strong><br>Dune erosion occurs when storm surge elevates waves higher on the beach, allowing them to attack and erode coastal dunes. As sand is removed from a dune, the front face becomes very steep, or scarped. The overall volume and elevation of the dune is reduced due to the erosion process. Dune erosion threatens houses behind the dunes as the area becomes significantly more vulnerable to future storms and the potential for overwash, which is when storm-induced waves exceed the height of the dune and transport sand over the top of the dune and deposit it inland. Depending on the severity of the storm, the overwash can extend several hundred metres. The eroded sediment from the dune is carried offshore and stored in large sandbars. The sand dune can recover over a period of years, gaining in elevation and volume through deposits of wind-blown sand. However, because dunes rebuild over a long period, many coastal counties choose to build temporary dunes following a large storm.</p>

            <p><strong>Paragraph G</strong><br>One specific way that coasts are altered is through longshore drifting, which is mainly seen with sand beaches, although clay, silt and shingle beaches are also affected. The sand on beaches is largely supplied over time by rivers flowing into the sea. Longshore drifting is then responsible for moving this sand along the coast line. It is caused when waves approach a beach at a slight angle. After the wave has broken on the beach, the swash runs back downslope perpendicular to the shoreline. This results in sand removal downdrift from the beach. Sand is therefore transported predominantly in one direction and the beach eventually ceases to exist.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            
            <h3 style="text-align: center; color: #333;">The Science of Online Dating</h3>

            <p>As the saying goes, "love defies all calculation". Yet, this apparently obvious assertion is challenged by the intrusion of science into matters of love, including the application of scientific analysis to modern forms of courtship. An increasing number of dating services boast about their use of biological research and genetic testing to better match prospective partners. Yet, while research continues to disentangle the complex factors that make humans fall in love, the application of this research remains dubious.</p>

            <p>With the rise of the Internet and profound changes in contemporary lifestyles, online dating has gained enormous popularity among people of all ages. Dating website owner Don Walker explains. "Increased working hours, increasing mobility and the dissolution of traditional modes of socialisation mean that more and more people are using chat rooms and professional dating services to find partners." Notwithstanding the current downturn in the economy, the online dating industry continues to prosper. With subscription prices between 20 and 30 dollars per month, romance-seekers are turning away from the traditional and often expensive strategies of meeting people, and are instead opting for less spontaneous, but practical, cheap online services that allow them to find a soul mate from the comfort of a desk.</p>

            <p>Most dating services match subscribers based on metrics that include education and professional background, personal interests, hobbies, values, relationship skills and life goals. These websites use a range of personality tests to collate the traits that individuals seek in an ideal partner. Yet, in this modern era of personalised genomes and DNA-based crime fighting, the new generation of online dating services has added one more parameter: biology.</p>

            <p>Indeed, biological anthropologists and neuroscientists have already dissected some of the chemical ingredients of love, including the security that we experience when we are attached to a specific partner for the long term. Such studies aim to unravel both the genetic factors and the neural circuits that underlie love. Researcher Amanda Torres gives the progress. "We have found that the relevant regions of the brain are mainly those involved in motivational and reward systems and are orchestrated by hormones and neurotransmitters. Love can accordingly be described as a chemical phenomenon and we can compare it with a state of physical dependence."</p>

            <p>Helen Mills, professor of anthropology at a respected Australian University, has created a test for a popular online dating website in which questions are designed to establish a range of basic information about brain and body chemistry associated with specific aspects of temperament and personality. For instance, measuring the ratio between the length of the index finger and the ring finger of the right hand is a possible marker for testosterone, and eye measurements can provide information about assertive, verbal, musical or analytical capabilities. Other questions, supposedly based on dopamine levels in the brain, can determine a propensity to be curious or a tendency to seek novel experiences. Mills justifies her rationale. "We fall in love with someone who has a chemical profile that complements our own. Therefore a good knowledge of an individual's chemistry can be a significant factor in finding the right person for them."</p>

            <p>The customers of online dating services seem to buy the 'hard science' sell. "We are receiving requests from a lot of customers who wish to know whether they can test their genetic compatibility with other subscribers in the same area where they live," commented Linda Brown, chief scientific officer at another popular dating website. "Right now, the number of established couples willing to know whether their compatibility is confirmed genetically equals the number of singles who ask us to match them with other subscribers in our database." Brown emphasised that the company uses biological compatibility to complement social, psychological and intellectual information, which, she said, "will continue to play an important role in the formation of lasting relationships."</p>

            <Jim>The use of genetic information seems to give customers reassurance that they will find a better match. Nevertheless, the real question remains as to whether the use of genetics is proving more effective than traditional matching methods. Indeed, there is a good deal of skepticism concerning the reliability of DNA-based dating services. Courtship and romantic love are complex phenomena that involve many genes and a multitude of social and cultural factors. Deciphering the genetics and neurochemistry of love might, therefore, cast a disenchanting shadow over some cultural practices. Jim Young, a U.S.-based psychologist gives his opinion. "I think that matching people by personality types or interests may be very useful. However, any service that claims to use genetic information, or any estimation of neurochemistry based on personality or genotype does not have any basis in reality." Young, who investigates the genetics and molecular mechanisms behind social attachment, also points out that "although we might be beginning to understand how some genes contribute to social relationships, the situation is far too complex to begin to think we can pick 'the perfect match' based on this information. Internet dating websites that claim they can do this exploit a gullible public who have been educated by the media."</p>

            <p>In addition to the potentially disenchanting effect of using science to prescribe romance, emotional compatibility and loving relationships, the increasing tendency to apply genetics to multiple areas of social interaction and behaviour raises more general issues about the growing encroachment of genetics and neuroscience into personal lives. Haunted by the uncertainties of life, humans are drawn to any service or person that promises to foretell the future. Perhaps it was therefore only a matter of time before biology became entangled in attempting to predict the creation of love and the outcome of relationships.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          type: "gap",
          title: "Questions 1-7",
          instruction: "Complete the summary below. Write <strong>NO MORE THAN TWO WORDS</strong> from the text for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">Social Intelligence</h3>
              <p>Social intelligence comprises a variety of skills and awareness and people skilled in it can adapt comfortably to various (1) <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1">.</p>
              <p>Psychologists recognise a (2) <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2"> of people's behaviour from toxic to nourishing. Repeated (3) <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3"> of the former behaviour show low social intelligence and a reduced ability for effective interaction respectively.</p>
              <p>Recently, traditional measures of intelligence have less (4) <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4"> and the multidimensional aspect of Gardner's theory of intelligences is more accepted today. Appropriate (5) <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5"> can allow people to develop each of Gardner's intelligences.</p>
              <p>The two distinctive (6) <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="q-6"> of social and emotional intelligence show their differences and Gardner labelled them as interpersonal intelligence and intrapersonal intelligence respectively. These complimentary intelligences affect each other and failings in either can affect people's (7) <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7">.</p>
            </div>
          `,
          items: [
            { qNum: 1, answer: "roles" },
            { qNum: 2, answer: "spectrum" },
            { qNum: 3, answer: "patterns" },
            { qNum: 4, answer: "credibility" },
            { qNum: 5, answer: "opportunities" },
            { qNum: 6, answer: "competences" },
            { qNum: 7, answer: "self-worth" }
          ]
        },
        {
          type: "tfng",
          title: "Questions 8-13",
          instruction: `Do the following statements agree with the information given in the text?<br><br>
          <div style="background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 6px; font-style: normal; color: #333; margin-bottom: 10px;">
              <table style="width:100%; border-collapse: collapse; font-size: 0.95rem;">
                  <tbody>
                      <tr><td style="width: 120px; font-weight: bold; padding: 6px 0;">TRUE</td><td>if the statement agrees with the information</td></tr>
                      <tr><td style="font-weight: bold; padding: 6px 0;">FALSE</td><td>if the statement contradicts the information</td></tr>
                      <tr><td style="font-weight: bold; padding: 6px 0;">NOT GIVEN</td><td>if there is no information on this</td></tr>
                  </tbody>
              </table>
          </div>`,
          items: [
            { qNum: 8, text: "Everyone continues to develop their social intelligence over time.", answer: "FALSE" },
            { qNum: 9, text: "To improve the social intelligence in people who lack the skills, frequent evaluation against certain standards is needed.", answer: "TRUE" },
            { qNum: 10, text: "Universities have been studying the role of social intelligence in business contexts.", answer: "NOT GIVEN" },
            { qNum: 11, text: "Measuring social intelligence by quantifying people's skills has never been attempted.", answer: "FALSE" },
            { qNum: 12, text: "Politicians often have high social intelligence capabilities.", answer: "NOT GIVEN" },
            { qNum: 13, text: "Educational institutions are placing much more importance on measuring students' social effectiveness than they did before.", answer: "FALSE" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          type: "matching_headings",
          title: "Questions 14-20",
          instruction: "The text on the previous pages has 7 paragraphs (A - G). Choose the correct heading for each paragraph from the list of headings below.",
          options: [
            "i. Pollution",
            "ii. The Loss of Protective Sand",
            "iii. The Role of Government",
            "iv. Natural Processes Create Dynamic Change",
            "v. The Influence of Climate Change",
            "vi. Local Conditions",
            "vii. Beach Destruction",
            "viii. Barrier Beaches",
            "ix. Human Intervention",
            "x. Effects of Fish Stocks"
          ],
          items: [
            { qNum: 14, text: "Paragraph A", answer: "iv" },
            { qNum: 15, text: "Paragraph B", answer: "vi" },
            { qNum: 16, text: "Paragraph C", answer: "ix" },
            { qNum: 17, text: "Paragraph D", answer: "i" },
            { qNum: 18, text: "Paragraph E", answer: "viii" },
            { qNum: 19, text: "Paragraph F", answer: "ii" },
            { qNum: 20, text: "Paragraph G", answer: "vii" }
          ]
        },
        {
          type: "gap",
          title: "Questions 21-23",
          instruction: "Answer the questions below. Write <strong>NO MORE THAN THREE WORDS</strong> from the text for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p>21. What do rivers bring to the sea that can cause various changes to coastlines?<br><span class="q-badge-inline">21</span><input type="text" class="gap-input" data-qnum="21" id="q-21"></p>
                <p>22. What natural underground phenomenon can create coastal change in specific areas?<br><span class="q-badge-inline">22</span><input type="text" class="gap-input" data-qnum="22" id="q-22"></p>
                <p>23. What research is being carried out to consider the inadvertent consequences of human coastal activities?<br><span class="q-badge-inline">23</span><input type="text" class="gap-input" data-qnum="23" id="q-23"></p>
            </div>
          `,
          items: [
            { qNum: 21, answer: "Sediment" },
            { qNum: 22, answer: ["Tectonic activity", "tectonic activity"] },
            { qNum: 23, answer: ["Cooperative investigations", "cooperative investigations"] }
          ]
        },
        {
          type: "matching",
          title: "Questions 24-26",
          instruction: "Complete each sentence with the correct ending (A - F) below.",
          options: [
            "A. the amount of government spending available.",
            "B. vulnerability to severe storms.",
            "C. decreasing revenues in terms of lost tourism.",
            "D. an increase in the micro-organisms that feed on it.",
            "E. the safety of properties behind the dune area.",
            "F. increasing pollution from farm run-off."
          ],
          items: [
            { qNum: 24, text: "Growing waste disposal at sea is leading to", answer: "C" },
            { qNum: 25, text: "The U.S. coast in the south east suffers from", answer: "B" },
            { qNum: 26, text: "Overwash can significantly affect", answer: "E" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          type: "matching",
          title: "Questions 27-33",
          instruction: "Look at the following statements (questions 27-33) and the list of people below. Match each statement with the correct person's initials.",
          options: [
            "A. DW (Don Walker)",
            "B. AT (Amanda Torres)",
            "C. HM (Helen Mills)",
            "D. LB (Linda Brown)",
            "E. JY (Jim Young)"
          ],
          items: [
            { qNum: 27, text: "Dating website clients are interested in being matched genetically with people near their homes.", answer: "D" },
            { qNum: 28, text: "An analogy can be made with love and addiction.", answer: "B" },
            { qNum: 29, text: "Online dating websites take advantage of people's naivety when they say that matching people genetically is possible.", answer: "E" },
            { qNum: 30, text: "People spending longer working on their jobs is a contributing factor to the rise in popularity of dating websites.", answer: "A" },
            { qNum: 31, text: "People already dating or married also want to test their genetic suitability to each other.", answer: "D" },
            { qNum: 32, text: "People having 'chemistry' is not just a metaphor.", answer: "C" },
            { qNum: 33, text: "Selecting a suitable match for someone based on neurochemistry is not possible.", answer: "E" }
          ]
        },
        {
          type: "gap",
          title: "Questions 34-40",
          instruction: "Complete the sentences below. Write <strong>NO MORE THAN THREE WORDS</strong> from the text for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p>34. The Internet dating website business is flourishing in spite of the poor state of the <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34">.</p>
                <p>35. Although Internet dating is not as <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"> as traditional dating behaviour, its practicality and low price is leading people to use it more and more.</p>
                <p>36. The <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36"> of Internet dating clients that people find attractive are collected by asking about various aspects of the clients' personalities.</p>
                <p>37. Even the <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37"> within people in an enduring relationship can be identified chemically.</p>
                <p>38. Measuring <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="q-38"> can be accomplished using measurements done on the hand.</p>
                <p>39. Clients of Internet dating websites apparently feel <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="q-39"> when genetic data is used in the matching process.</p>
                <p>40. People are attracted to the idea that their future can be predicted because they worry about the <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="q-40">.</p>
            </div>
          `,
          items: [
            { qNum: 34, answer: "economy" },
            { qNum: 35, answer: "spontaneous" },
            { qNum: 36, answer: "traits" },
            { qNum: 37, answer: "security" },
            { qNum: 38, answer: "testosterone" },
            { qNum: 39, answer: "reassurance" },
            { qNum: 40, answer: ["uncertainties of life", "uncertainties"] }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING
    // ==========================================================================
    writing: {
      task1: {
        title: "WRITING TASK 1",
        image: "https://i.postimg.cc/T3s0Wykk/snapedit-1778045686670.jpg", 
        prompt: `
          The pie charts below show the revenue sources for U.S. highways for last year and U.S. highway expenditure by type for last year.

          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

          You should write at least 150 words.
          
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          Some people feel that with the rise of artificial intelligence, computers and robots will take over the roles of teachers.

          To what extent do you agree or disagree with this statement?

          Give reasons for your answer and include any relevant examples from your knowledge or experience.

          You should write at least 250 words.
        `
      }
    }
  }
};