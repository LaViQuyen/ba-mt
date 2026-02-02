// src/data/fullmt/cam20_test2.js

export const cam20_test2 = {
  id: "full_cam20_t2",
  category: "full",
  testName: "MOCK TEST 2",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",
  
  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Lấy từ data_listening.js)
    // ==========================================================================
    listening: {
      audioSrc: "/audio/mt2.mp3", // ⚠️ Hãy thay đổi đường dẫn file MP3 thật của bạn ở đây
      timeLimit: 1781,
      passage: "<h3 style='text-align:center; color:#002554;'>MOCK TEST 2 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1: Questions 1-10 ---
        {
          "type": "gap",
          "title": "Part 1: Questions 1-10",
          "instruction": "Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:15px; border:1px solid #ddd; overflow-x:auto;">
                <p><strong>Support for Carers</strong></p>
                <table style="width:100%; border-collapse: collapse; min-width: 600px;">
                    <thead>
                        <tr style="background:#002554; color:white;">
                            <th style="padding:10px; border:1px solid #ccc;">Support Item</th>
                            <th style="padding:10px; border:1px solid #ccc;">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Practical support for elderly care</td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                This can give the carer:
                                <ul>
                                    <li>time for other responsibilities</li>
                                    <li>a <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="input-1"></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Assessment of mother's needs</td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                This may include discussion of:
                                <ul>
                                    <li>how much <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="input-2"> the caring involves</li>
                                    <li>types of tasks: help with dressing, helping her have a <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="input-3">, shopping, meals, dealing with <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="input-4"></li>
                                    <li>difficult aspects: loss of <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="input-5">, <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="input-6">, preventing a <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="input-7"></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Types of support offered</td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                <ul>
                                    <li>transport costs, e.g. cost of a <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="input-8"></li>
                                    <li>car-related costs, e.g. fuel and <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="input-9"></li>
                                    <li>help with housework</li>
                                    <li>help to reduce <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="input-10"></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": "break" }, { "qNum": 2, "answer": "time" }, 
            { "qNum": 3, "answer": "shower" }, { "qNum": 4, "answer": "money" },
            { "qNum": 5, "answer": "memory" }, { "qNum": 6, "answer": "lifting" },
            { "qNum": 7, "answer": "fall" }, { "qNum": 8, "answer": "taxi" },
            { "qNum": 9, "answer": "insurance" }, { "qNum": 10, "answer": "stress" }
          ]
        },

        // --- PART 2: Questions 11-16 (Matching) ---
        {
          "type": "matching",
          "title": "Part 2: Questions 11-16",
          "instruction": "What is the role of the volunteers in each of the following activities?",
          "options": [
            "A. providing entertainment", "B. providing publicity about a council service",
            "C. contacting local businesses", "D. giving advice to visitors",
            "E. collecting feedback on events", "F. selling tickets",
            "G. introducing guest speakers at an event", "H. encouraging cooperation between local organisations",
            "I. helping people find their seats"
          ],
          "items": [
            { "qNum": 11, "text": "walking around the town centre", "answer": "D" },
            { "qNum": 12, "text": "helping at concerts", "answer": "I" },
            { "qNum": 13, "text": "getting involved with community groups", "answer": "H" },
            { "qNum": 14, "text": "helping with a magazine", "answer": "E" },
            { "qNum": 15, "text": "participating at lunches for retired people", "answer": "A" },
            { "qNum": 16, "text": "helping with the website", "answer": "B" }
          ]
        },

        // --- PART 2: Questions 17-20 (MCQ Single) ---
        {
          "type": "mcq_single", "title": "Questions 17-20", "instruction": "Choose the correct letter, A, B or C.",
          "stem": "17. Which event requires the largest number of volunteers?",
          "options": ["A. the music festival", "B. the science festival", "C. the book festival"],
          "items": [{ "qNum": 17, "answer": "B" }]
        },
        {
          "type": "mcq_single", "stem": "18. What is the most important requirement for volunteers at the festivals?",
          "options": ["A. interpersonal skills", "B. personal interest in the event", "C. flexibility"],
          "items": [{ "qNum": 18, "answer": "A" }]
        },
        {
          "type": "mcq_single", "stem": "19. New volunteers will start working in the week beginning",
          "options": ["A. 2 September", "B. 9 September", "C. 23 September"],
          "items": [{ "qNum": 19, "answer": "B" }]
        },
        {
          "type": "mcq_single", "stem": "20. What is the next annual event for volunteers?",
          "options": ["A. a boat trip", "B. a barbecue", "C. a party"],
          "items": [{ "qNum": 20, "answer": "A" }]
        },

        // --- PART 3: Questions 21-25 (Matching) ---
        {
          "type": "matching", "title": "Part 3: Questions 21-25",
          "instruction": "What is Rosie and Colin's opinion about each of the following aspects of human geography?",
          "options": [
            "A. The information given about this was too vague.", "B. This may not be relevant to their course.",
            "C. This will involve only a small number of statistics.", "D. It will be easy to find facts about this.",
            "E. The facts about this may not be reliable.", "F. No useful research has been done on this.",
            "G. The information provided about this was interesting."
          ],
          "items": [
            { "qNum": 21, "text": "Population", "answer": "D" },
            { "qNum": 22, "text": "Health", "answer": "G" },
            { "qNum": 23, "text": "Economies", "answer": "B" },
            { "qNum": 24, "text": "Culture", "answer": "A" },
            { "qNum": 25, "text": "Poverty", "answer": "E" }
          ]
        },

        // --- PART 3: Questions 26-30 (MCQ Single) ---
        {
          "type": "mcq_single", "title": "Questions 26-30", "instruction": "Choose the correct letter, A, B or C.",
          "stem": "26. Rosie says that in her own city the main problem is",
          "options": ["A. crime", "B. housing", "C. unemployment"],
          "items": [{ "qNum": 26, "answer": "C" }]
        },
        {
          "type": "mcq_single", "stem": "27. What recent additions to the outskirts of their cities are both students happy about?",
          "options": ["A. conference centres", "B. sports centres", "C. retail centres"],
          "items": [{ "qNum": 27, "answer": "A" }]
        },
        {
          "type": "mcq_single", "stem": "28. The students agree that developing disused industrial sites may",
          "options": ["A. have unexpected costs", "B. damage the urban environment", "C. destroy valuable historical buildings"],
          "items": [{ "qNum": 28, "answer": "A" }]
        },
        {
          "type": "mcq_single", "stem": "29. The students will mention Masdar City as an example of an attempt to achieve",
          "options": ["A. daily collections for waste recycling", "B. sustainable energy use", "C. free transport for everyone"],
          "items": [{ "qNum": 29, "answer": "B" }]
        },
        {
          "type": "mcq_single", "stem": "30. When discussing the Eco town of Greenhill Abbots, Colin is uncertain about",
          "options": ["A. what its objectives were", "B. why there was opposition to it", "C. how much of it has actually been built"],
          "items": [{ "qNum": 30, "answer": "C" }]
        },

        // --- PART 4: Questions 31-40 ---
        {
          "type": "gap",
          "title": "Part 4: Questions 31-40",
          "instruction": "Complete the notes below. Write ONE WORD ONLY for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="text-align:center; margin-top:0;">Developing Food Trends</h3>
                <ul>
                    <li>Interest in food fashions started with <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="input-31"> of food shared on social media.</li>
                    <li>Influencers act as ambassadors; sales of <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="input-32"> brands have grown.</li>
                    <li>Supermarkets track demand; famous <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="input-33"> are influential.</li>
                </ul>
                <p><strong>Marketing campaigns:</strong></p>
                <ul>
                    <li><strong>The avocado:</strong> <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="input-34"> visited South Africa; focus on <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="input-35"> benefits.</li>
                    <li><strong>Oat milk:</strong> Promotion through <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="input-36"> shops; appealed to those concerned about the <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="input-37">.</li>
                    <li><strong>Norwegian skrei:</strong> Strengthened the <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="input-38"> of Norwegian seafood.</li>
                </ul>
                <p><strong>Ethical concerns:</strong></p>
                <ul>
                    <li><strong>Quinoa:</strong> Success led to increase in its <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="input-39">.</li>
                    <li>Overuse of resources resulted in poor quality <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="input-40">.</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 31, "answer": ["photos", "photographs", "pictures"] }, { "qNum": 32, "answer": "vegan" },
            { "qNum": 33, "answer": ["chefs", "cooks"] }, { "qNum": 34, "answer": ["journalists", "reporters"] },
            { "qNum": 35, "answer": "health" }, { "qNum": 36, "answer": "coffee" },
            { "qNum": 37, "answer": "environment" }, { "qNum": 38, "answer": "reputation" },
            { "qNum": 39, "answer": ["price", "cost"] }, { "qNum": 40, "answer": "soil" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Lấy từ data_reading.js)
    // ==========================================================================
    reading: {
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p>You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center;">Manatees</h3>
            <p>Manatees, also known as sea cows, are aquatic mammals that belong to a group of animals called Sirenia. This group also contains dugongs. Dugongs and manatees look quite alike – they are similar in size, colour and shape, and both have flexible flippers for forelimbs. However, the manatee has a broad, rounded tail, whereas the dugong's is fluked, like that of a whale. There are three species of manatees: The West Indian manatee (Trichechus manatus), the African manatee (Trichechus senegalensis) and the Amazonian manatee (Trichechus inunguis).</p>
            
            <p>Unlike most mammals, manatees have only six bones in their neck – most others, including humans and giraffes, have seven. This short neck allows a manatee to move its head up and down, but not side to side. To see something on its left or its right, a manatee must turn its entire body, steering with its flippers. Manatees have pectoral flippers but no back limbs, only a tail for propulsion. They do have pelvic bones, however – a leftover from their evolution from a four-legged to a fully aquatic animal. Manatees share some visual similarities to elephants. Like elephants, manatees have thick, wrinkled skin. They also have some hairs covering their bodies which help them sense vibrations in the water around them.</p>
            
            <p>Seagrasses and other marine plants make up most of a manatee's diet. Manatees spend about eight hours each day grazing and uprooting plants. They eat up to 15% of their weight in food each day. African manatees are omnivorous – studies have shown that molluscs and fish make up a small part of their diets. West Indian and Amazonian manatees are both herbivores.</p>
            
            <p>Manatees' teeth are all molars – flat, rounded teeth for grinding food. Due to manatees' abrasive aquatic plant diet, these teeth get worn down and they eventually fall out, so they continually grow new teeth that get pushed forward to replace the ones they lose. Instead of having incisors to grasp their food, manatees have lips which function like a pair of hands to help tear food away from the seafloor.</p>
            
            <p>Manatees are fully aquatic, but as mammals, they need to come up to the surface to breathe. When awake, they typically surface every two to four minutes, but they can hold their breath for much longer. Adult manatees sleep underwater for 10-12 hours a day, but they come up for air every 15-20 minutes. Active manatees need to breathe more frequently. It's thought that manatees use their muscular diaphragm and breathing to adjust their buoyancy. They may use diaphragm contractions to compress and store gas in folds in their large intestine to help them float.</p>
            
            <p>The West Indian manatee reaches about 3.5 metres long and weighs on average around 500 kilogrammes. It moves between fresh water and salt water, taking advantage of coastal mangroves and coral reefs, rivers, lakes and inland lagoons. There are two subspecies of West Indian manatee: The Antillean manatee is found in waters from the Bahamas to Brazil, whereas the Florida manatee is found in US waters, although some individuals have been recorded in the Bahamas. In winter, the Florida manatee is typically restricted to Florida. When the ambient water temperature drops below 20°C, it takes refuge in naturally and artificially warmed water, such as at the warm-water outfalls from powerplants.</p>
            
            <p>The African manatee is also about 3.5 metres long and found in the sea along the west coast of Africa, from Mauritania down to Angola. The species also makes use of rivers, with the mammals seen in landlocked countries such as Mali and Niger. The Amazonian manatee is the smallest species, though it is still a big animal. It grows to about 2.5 metres long and 350 kilogrammes. Amazonian manatees favour calm, shallow waters that are above 23°C. This species is found in fresh water in the Amazon Basin in Brazil, as well as in Colombia, Ecuador and Peru.</p>
            
            <p>All three manatee species are endangered or at a heightened risk of extinction. The African manatee and Amazonian manatee are both listed as Vulnerable by the International Union for Conservation of Nature (IUCN). It is estimated that 140,000 Amazonian manatees were killed between 1935 and 1954 for their meat, fat and skin, with the latter used to make leather. In more recent years, African manatee decline has been tied to incidental capture in fishing nets and hunting. Manatee hunting is now illegal in every country the African species is found in.</p>
            
            <p>The two subspecies of West Indian manatee are listed as Endangered by the IUCN. Both are also expected to undergo a decline of 20% over the next 40 years. A review of almost 1,800 cases of entanglement in fishing nets and of plastic consumption among marine mammals in US waters from 2009 to 2020 found that at least 700 cases involved manatees. The chief cause of death in Florida manatees is boat strikes. However, laws in certain parts of Florida now limit boat speeds during winter, allowing slow-moving manatees more time to respond.</p>
        </div>
        
        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p>You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">Procrastination</h3>
            <p><em>A psychologist explains why we put off important tasks and how we can break this habit</em></p>
            
            <p><strong>A</strong> Procrastination is the habit of delaying a necessary task, usually by focusing on less urgent, more enjoyable, and easier activities instead. We all do it from time to time. We might be composing a message to a friend who we have to let down, or putting together an important report for college or work; we're doing our best to avoid doing the job at hand, but deep down we know that we should just be getting on with it. Unfortunately, berating ourselves won't stop us procrastinating again. In fact, it's one of the worst things we can do. This matters because, as my research shows, procrastination doesn't just waste time, but is actually linked to other problems, too.</p>

            <p><strong>B</strong> Contrary to popular belief, procrastination is not due to laziness or poor time management. Scientific studies suggest procrastination is, in fact, caused by poor mood management. This makes sense if we consider that people are more likely to put off starting or completing tasks that they are really not keen to do. If just thinking about the task threatens our sense of self-worth or makes us anxious, we will be more likely to put it off. Research involving brain imaging has found that areas of the brain linked to detection of threats and emotion regulation are actually different in people who chronically procrastinate compared to those who don't procrastinate frequently.</p>

            <p><strong>C</strong> Tasks that are emotionally loaded or difficult, such as preparing for exams, are prime candidates for procrastination. People with low self-esteem are more likely to procrastinate. Another group of people who tend to procrastinate are perfectionists, who worry their work will be judged harshly by others. We know that if we don't finish that report or complete those home repairs, then what we did can't be evaluated. When we avoid such tasks, we also avoid the negative emotions associated with them. This is rewarding, and it conditions us to use procrastination to repair our mood. If we engage in more enjoyable tasks instead, we get another mood boost. In the long run, however, procrastination isn't an effective way of managing emotions. The 'mood repair' we experience is temporary. Afterwards, people tend to be left with a sense of guilt that not only increases their negative mood, but also reinforces their tendency to procrastinate.</p>

            <p><strong>D</strong> So why is this such a problem? When most people think of the costs of procrastination, they think of the toll on productivity. For example, studies have shown that procrastination negatively impacts on student performance. But putting off reading textbooks and writing essays may affect other areas of students' lives. In one study of over 3,000 German students over a six-month period, those who reported procrastinating over their university work were also more likely to engage in study-related misconduct, such as cheating and plagiarism. But the behaviour that procrastination was most closely linked with was using fraudulent excuses to get deadline extensions. Other research shows that employees on average spend almost a quarter of their workday procrastinating, and again this is linked with negative outcomes. In fact, in one US survey of over 22,000 employees, participants who said they regularly procrastinated had less annual income and less employment stability. For every one-point increase on a measure of chronic procrastination, annual income decreased by US$15,000.</p>

            <p><strong>E</strong> Procrastination also correlates with serious health and well-being problems. A tendency to procrastinate is linked to poor mental health, including higher levels of depression and anxiety. Across numerous studies, I've found people who regularly procrastinate report a greater number of health issues, such as headaches, flu and colds, and digestive issues. They also experience higher levels of stress and poor sleep quality. They are less likely to practise healthy behaviours, such as eating a healthy diet and regularly exercising, and use destructive coping strategies to manage their stress. In one study of over 700 people, I found people prone to procrastination had a 63% greater risk of poor heart health after accounting for other personality traits and demographics.</p>

            <p><strong>F</strong> Finding better ways of managing our emotions is one route out of the vicious cycle of procrastination. An important first step is to manage our environment and how we view the task. There are a number of evidence-based strategies that can help us fend off distractions that can occupy our minds when we should be focusing on the thing we should be getting on with. For example, reminding ourselves about why the task is important and valuable can increase positive feelings towards it. Forgiving ourselves and feeling compassion when we procrastinate can help break the procrastination cycle. We should admit that we feel bad, but not be overly critical of ourselves. We should remind ourselves that we're not the first person to procrastinate, nor the last. Doing this can take the edge off the negative feelings we have about ourselves when we procrastinate. This can all make it easier to get back on track.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p>You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            <h3 style="text-align: center;">Invasion of the Robot Umpires</h3>

            <p>A few years ago, Fred DeJesus from Brooklyn, New York became the first umpire in a minor league baseball game to use something called the Automated Ball-Strike System (ABS), often referred to as the 'robo-umpire'. Instead of making any judgments himself about a strike*, DeJesus had decisions fed to him through an earpiece, connected to a modified missile-tracking system. The contraption looked like a large black pizza box with one glowing green eye; it was mounted above the press stand.</p>

            <p>Major League Baseball (MLB), who had commissioned the system, wanted human umpires to announce the calls, just as they would have done in the past. When the first pitch came in, a recorded voice told DeJesus it was a strike. Previously, calling a strike was a judgment call on the part of the umpire. Even if the batter does not hit the ball, a pitch that passes through the 'strike zone' (an imaginary zone about seventeen inches wide, stretching from the batter's knees to the middle of his chest) is considered a strike. During that first game, when DeJesus announced calls, there was no heckling and no shouted disagreement. Nobody said a word.</p>

            <p>For a hundred and fifty years or so, the strike zone has been the game's animating force—countless arguments between a team's manager and the umpire have taken place over its boundaries and whether a ball had crossed through it. The rules of play have evolved in various stages. Today, everyone knows that you may scream your disagreement in an umpire's face, but you must never shout personal abuse at them or touch them. That's a no-no. When the robo-umpires came, however, the arguments stopped.</p>

            <p>During the first robo-umpire season, players complained about some strange calls. In response, MLB decided to tweak the dimensions of the zone, and the following year the consensus was that ABS is profoundly consistent. MLB says the device is near-perfect, precise to within fractions of an inch. "It'll reduce controversy in the game, and be good for the game," says Rob Manfred, who is Commissioner for MLB. But the question is whether controversy is worth reducing, or whether it is the sign of a human hand.</p>

            <p>A human, at least, yells back. When I spoke with Frank Viola, a coach for a North Carolina team, he said that ABS works as designed, but that it was also unforgiving and pedantic, almost legalistic. "Manfred is a lawyer," Viola noted. Some pitchers have complained that, compared with a human's, the robot's strike zone seems too precise. Viola was once a major-league player himself. When he was pitching, he explained, umpires rewarded skill. "Throw it where you aimed, and it would be a strike, even if it was an inch or two outside. There was a dialogue between pitcher and umpire."</p>

            <p>The executive tasked with running the experiment for MLB is Morgan Sword, who's in charge of baseball operations. According to Sword, ABS was part of a larger project to make baseball more exciting since executives are terrified of losing younger fans, as has been the case with horse racing and boxing. He explains how they began the process by asking fans what version of baseball they found most exciting. The results showed that everyone wanted more action: more hits, more defense, more baserunning. This type of baseball essentially hasn't existed since the 1960s, when the hundred-mile-an-hour fastball, which is difficult to hit and control, entered the game. It flattened the game into strikeouts, walks, and home runs—a type of play lacking much action.</p>

            <p>Sword's team brainstormed potential fixes. Any rule that existed, they talked about changing—from changing the bats to changing the geometry of the field. But while all of these were ruled out as potential fixes, ABS was seen as a perfect vehicle for change. According to Sword, once you get the technology right, you can load any strike zone you want into the system. "It might be a triangle, or a blob, or something shaped like Texas. Over time, as baseball evolves, ABS can allow the zone to change with it."</p>

            <p>"In the past twenty years, sports have moved away from judgment calls. Soccer has Video Assistant Referees (for offside decisions, for example). Tennis has Hawk-Eye (for line calls, for example). For almost a decade, baseball has used instant replay on the base paths. This is widely liked, even if the precision can sometimes cause problems. But these applications deal with something physical: bases, lines, goals. The boundaries of action are precise, delineated like the keys of a piano. This is not the case with ABS and the strike zone. Historically, a certain discretion has been appreciated."</p>

            <p>I decided to email Alva Noë, a professor at Berkeley University and a baseball fan, for his opinion. "Hardly a day goes by that I don't wake up and run through the reasons that this [robo-umpires] is such a terrible idea," he replied. He later told me, "This is part of a movement to use algorithms to take the hard choices of living out of life." Perhaps he's right. We watch baseball to kill time, not to maximize it. Some players I have met take a dissenting stance toward the robots too, believing that accuracy is not the answer. According to Joe Russo, who plays for a New Jersey team, "With technology, people just want everything to be perfect. That's not reality. I think perfect would be weird. Your teams are always winning, work is always just great, there's always money in your pocket, your car never breaks down. What is there to talk about?"</p>
            
            <p style="font-size: 0.9em; font-style: italic;">* strike: a strike is when the batter swings at a ball and misses or when the batter does not swing at a ball that passes through the strike zone.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          "type": "gap",
          "title": "Questions 1-6",
          "instruction": "Complete the notes below. Choose ONE WORD AND/OR A NUMBER from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">Manatees</h3>
                <p><strong>Appearance</strong></p>
                <ul style="margin-left: 20px;">
                    <li>look similar to dugongs, but with a differently shaped <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="input-1"></li>
                </ul>
                <p><strong>Movement</strong></p>
                <ul style="margin-left: 20px;">
                    <li>have fewer neck bones than most mammals</li>
                    <li>need to use their <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="input-2"> to help to turn their bodies around in order to look sideways</li>
                    <li>sense vibrations in the water by means of <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="input-3"> on their skin</li>
                </ul>
                <p><strong>Feeding</strong></p>
                <ul style="margin-left: 20px;">
                    <li>eat mainly aquatic vegetation, such as <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="input-4"></li>
                    <li>grasp and pull up plants with their <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="input-5"></li>
                </ul>
                <p><strong>Breathing</strong></p>
                <ul style="margin-left: 20px;">
                    <li>come to the surface for air every 2-4 minutes when awake and every 15-20 while sleeping</li>
                    <li>may regulate the <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="input-6"> of their bodies by using muscles of diaphragm to store air internally</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": "tail" },
            { "qNum": 2, "answer": "flippers" },
            { "qNum": 3, "answer": ["hair", "hairs"] },
            { "qNum": 4, "answer": "seagrasses" },
            { "qNum": 5, "answer": "lips" },
            { "qNum": 6, "answer": "buoyancy" }
          ]
        },
        {
          "type": "tfng",
          "title": "Questions 7-13",
          "instruction": "Do the following statements agree with the information given in Reading Passage 1?",
          "items": [
            { "qNum": 7, "text": "West Indian manatees can be found in a variety of different aquatic habitats.", "answer": "TRUE" },
            { "qNum": 8, "text": "The Florida manatee lives in warmer waters than the Antillean manatee.", "answer": "NOT GIVEN" },
            { "qNum": 9, "text": "The African manatee's range is limited to coastal waters between the West African countries of Mauritania and Angola.", "answer": "FALSE" },
            { "qNum": 10, "text": "The extent of the loss of Amazonian manatees in the mid-twentieth century was only revealed many years later.", "answer": "NOT GIVEN" },
            { "qNum": 11, "text": "It is predicted that West Indian manatee populations will fall in the coming decades.", "answer": "TRUE" },
            { "qNum": 12, "text": "The risk to manatees from entanglement and plastic consumption increased significantly in the period 2009-2020.", "answer": "NOT GIVEN" },
            { "qNum": 13, "text": "There is some legislation in place which aims to reduce the likelihood of boat strikes on manatees in Florida.", "answer": "TRUE" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          "type": "matching",
          "title": "Questions 14-16",
          "instruction": "Reading Passage 2 has six paragraphs, A-F. Which paragraph contains the following information?",
          "options": ["A", "B", "C", "D", "E", "F"],
          "items": [
            { "qNum": 14, "text": "mention of false assumptions about why people procrastinate", "answer": "B" },
            { "qNum": 15, "text": "reference to the realisation that others also procrastinate", "answer": "F" },
            { "qNum": 16, "text": "neurological evidence of a link between procrastination and emotion", "answer": "B" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 17-22",
          "instruction": "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">What makes us procrastinate?</h3>
                <p>
                    Many people think that procrastination is the result of <span class="q-badge-inline">17</span><input type="text" class="gap-input" data-qnum="17" id="input-17">. 
                    Others believe it to be the result of an inability to organise time efficiently. 
                    But scientific studies suggest that procrastination is actually due to poor mood management. 
                    The tasks we are most likely to put off are those that could damage our self-esteem or cause us to feel 
                    <span class="q-badge-inline">18</span><input type="text" class="gap-input" data-qnum="18" id="input-18"> when we think about them. 
                    Research comparing chronic procrastinators with other people even found differences in the brain regions associated with regulating emotions and identifying 
                    <span class="q-badge-inline">19</span><input type="text" class="gap-input" data-qnum="19" id="input-19">.
                </p>
                <p>
                    Emotionally loaded and difficult tasks often cause us to procrastinate. Getting ready to take 
                    <span class="q-badge-inline">20</span><input type="text" class="gap-input" data-qnum="20" id="input-20"> might be a typical example of one such task. 
                    People who are likely to procrastinate tend to be either <span class="q-badge-inline">21</span><input type="text" class="gap-input" data-qnum="21" id="input-21"> 
                    or those with low self-esteem.
                </p>
                <p>
                    Procrastination is only a short-term measure for managing emotions. It's often followed by a feeling of 
                    <span class="q-badge-inline">22</span><input type="text" class="gap-input" data-qnum="22" id="input-22">, which worsens our mood and leads to more procrastination.
                </p>
            </div>
          `,
          "items": [
            { "qNum": 17, "answer": "laziness" },
            { "qNum": 18, "answer": "anxious" },
            { "qNum": 19, "answer": "threats" },
            { "qNum": 20, "answer": "exams" },
            { "qNum": 21, "answer": "perfectionists" },
            { "qNum": 22, "answer": "guilt" }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 23 and 24",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO comparisons between employees who often procrastinate and those who do not are mentioned in the text?",
          "options": [
            "A. Their salaries are lower.",
            "B. The quality of their work is inferior.",
            "C. They don't keep their jobs for as long.",
            "D. They don't enjoy their working lives as much.",
            "E. They have poorer relationships with colleagues."
          ],
          "items": [
            { "qNum": 23, "answer": ["A", "C"] },
            { "qNum": 24, "answer": ["A", "C"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 25 and 26",
          "instruction": "Choose TWO letters, A-E.",
          "stem": "Which TWO recommendations for getting out of a cycle of procrastination does the writer give?",
          "options": [
            "A. not judging ourselves harshly",
            "B. setting ourselves manageable aims",
            "C. rewarding ourselves for tasks achieved",
            "D. prioritising tasks according to their importance",
            "E. avoiding things that stop us concentrating on our tasks"
          ],
          "items": [
            { "qNum": 25, "answer": ["A", "E"] },
            { "qNum": 26, "answer": ["A", "E"] }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          "type": "ynng",
          "title": "Questions 27-32",
          "instruction": "Do the following statements agree with the claims of the writer in Reading Passage 3?",
          "items": [
            { "qNum": 27, "text": "When DeJesus first used ABS, he shared decision-making about strikes with it.", "answer": "NO" },
            { "qNum": 28, "text": "MLB considered it necessary to amend the size of the strike zone when criticisms were received from players.", "answer": "YES" },
            { "qNum": 29, "text": "MLB is keen to justify the money spent on improving the accuracy of ABS's calculations.", "answer": "NOT GIVEN" },
            { "qNum": 30, "text": "The hundred-mile-an-hour fastball led to a more exciting style of play.", "answer": "NO" },
            { "qNum": 31, "text": "The differing proposals for alterations to the baseball bat led to fierce debate on Sword's team.", "answer": "NOT GIVEN" },
            { "qNum": 32, "text": "ABS makes changes to the shape of the strike zone feasible.", "answer": "YES" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 33-37",
          "instruction": "Complete the summary using the list of phrases, A-H, below.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">Calls by the umpire</h3>
                <p>
                    Even after ABS was developed, MLB still wanted human umpires to shout out decisions as they had in their 
                    <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="input-33">. 
                    The umpire's job had, at one time, required a 
                    <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="input-34"> 
                    about whether a ball was a strike.
                </p>
                <p>
                    A ball is considered a strike when the batter does not hit it and it crosses through a 
                    <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="input-35"> 
                    extending approximately from the batter's knee to his chest.
                </p>
                <p>
                    In the past, <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="input-36"> 
                    over strike calls were not uncommon, but today everyone accepts the complete ban on pushing or shoving the umpire. 
                    One difference, however, is that during the first game DeJesus used ABS, strike calls were met with 
                    <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="input-37">.
                </p>
                <div style="margin-top: 15px; border-top: 1px dashed #999; padding-top: 10px;">
                    <strong>Options:</strong><br>
                    A. pitch boundary &nbsp;&nbsp;&nbsp; B. numerous disputes &nbsp;&nbsp;&nbsp; C. team tactics<br>
                    D. subjective assessment &nbsp;&nbsp;&nbsp; E. widespread approval &nbsp;&nbsp;&nbsp; F. former roles<br>
                    G. total silence &nbsp;&nbsp;&nbsp; H. perceived area
                </div>
            </div>
          `,
          "items": [
            { "qNum": 33, "answer": "F" },
            { "qNum": 34, "answer": "D" },
            { "qNum": 35, "answer": "H" },
            { "qNum": 36, "answer": "B" },
            { "qNum": 37, "answer": "G" }
          ]
        },
        {
          "type": "mcq",
          "title": "Question 38",
          "instruction": "Choose the correct letter, A, B, C or D.",
          "stem": "What does the writer suggest about ABS in the fifth paragraph?",
          "options": [
            "A. It is bound to make key decisions that are wrong.",
            "B. It may reduce some of the appeal of the game.",
            "C. It will lead to the disappearance of human umpires.",
            "D. It may increase calls for the rules of baseball to be changed."
          ],
          "items": [{ "qNum": 38, "answer": "B" }]
        },
        {
          "type": "mcq",
          "title": "Question 39",
          "instruction": "Choose the correct letter, A, B, C or D.",
          "stem": "Morgan Sword says that the introduction of ABS",
          "options": [
            "A. was intended to keep up with developments in other sports.",
            "B. was an attempt to ensure baseball retained a young audience.",
            "C. was regarded as an experiment without a guaranteed outcome.",
            "D. was a response to changing attitudes about the role of sport."
          ],
          "items": [{ "qNum": 39, "answer": "D" }]
        },
        {
          "type": "mcq",
          "title": "Question 40",
          "instruction": "Choose the correct letter, A, B, C or D.",
          "stem": "Why does the writer include the views of Noë and Russo?",
          "options": [
            "A. to show that attitudes to technology vary widely",
            "B. to argue that people have unrealistic expectations of sport",
            "C. to indicate that accuracy is not the same thing as enjoyment",  
            "D. to suggest that the number of baseball fans needs to increase"
          ],
          "items": [{ "qNum": 40, "answer": "C" }]
        }
      ]
    },

    // --- PHẦN WRITING (Cập nhật mới) ---
    writing: {
      task1: {
        title: "Writing Task 1",
        instruction: "You should spend about 20 minutes on this task.",
        images: [
            "https://i.postimg.cc/kX0QwM6p/Screenshot-2025-12-25-161708-(1).jpg", // Link hình 1
            "https://i.postimg.cc/RZPnyMNL/Screenshot-2025-12-25-162844.jpg"  // Link hình 2
        ],
        prompt: "The plans below show the site of a farm in 1950 and the same site today.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant."
      },
      task2: {
        title: "Writing Task 2",
        instruction: "You should spend about 40 minutes on this task.",
        prompt: "In many countries, primary and secondary schools close for two months or more in the summer holidays\n\nWhat is the value of long school holidays?\n\nWhat are the arguments in favour of shorter school holidays?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience."
      }
    }
  }
};