// src/data/fullmt/cam19_test2.js

export const cam19_test2 = {
  id: "mt6",
  category: "full",
  testName: "MOCK TEST 6",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 33 - 39)
    // ==========================================================================
    listening: {
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/beablevn-ielts.firebasestorage.app/o/audio%2Fmt6.mp3?alt=media&token=dc5a93ae-cf8a-4adb-b86e-26e4c7a53165",
      timeLimit: 1694,
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 6 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1: Questions 1-10 (Form & Table Completion) ---
        {
          "type": "gap",
          "title": "Part 1: Questions 1-10",
          "instruction": "Complete the form and table below. Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">Guitar Group</h3>
                <p><strong>Coordinator:</strong> Gary <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1"></p>
                <p><strong>Level:</strong> <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2"></p>
                <p><strong>Place:</strong> the <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3">, <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4"> Street (First floor, Room T347)</p>
                <p><strong>Time:</strong> Thursday morning at <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5"></p>
                <p><strong>Recommended website:</strong> 'The perfect <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="q-6">'</p>
                
                <h4 style="margin-top:20px;">A typical 45-minute guitar lesson</h4>
                <table style="width:100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background:#e0e0e0;">
                            <th style="padding:8px; border:1px solid #ccc;">Time</th>
                            <th style="padding:8px; border:1px solid #ccc;">Activity</th>
                            <th style="padding:8px; border:1px solid #ccc;">Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:8px; border:1px solid #ccc;">5 minutes</td>
                            <td style="padding:8px; border:1px solid #ccc;">tuning guitars</td>
                            <td style="padding:8px; border:1px solid #ccc;">using an app or by <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7"></td>
                        </tr>
                        <tr>
                            <td style="padding:8px; border:1px solid #ccc;">10 minutes</td>
                            <td style="padding:8px; border:1px solid #ccc;">strumming chords using our thumbs</td>
                            <td style="padding:8px; border:1px solid #ccc;">keeping time while the teacher is <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8"></td>
                        </tr>
                        <tr>
                            <td style="padding:8px; border:1px solid #ccc;">15 minutes</td>
                            <td style="padding:8px; border:1px solid #ccc;">playing songs</td>
                            <td style="padding:8px; border:1px solid #ccc;">often listening to a <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9"> of a song</td>
                        </tr>
                        <tr>
                            <td style="padding:8px; border:1px solid #ccc;">10 minutes</td>
                            <td style="padding:8px; border:1px solid #ccc;">playing single notes and simple tunes</td>
                            <td style="padding:8px; border:1px solid #ccc;">playing together, then <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10"></td>
                        </tr>
                         <tr>
                            <td style="padding:8px; border:1px solid #ccc;">5 minutes</td>
                            <td style="padding:8px; border:1px solid #ccc;">noting things to practise at home</td>
                            <td style="padding:8px; border:1px solid #ccc;"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": "Mathieson" },
            { "qNum": 2, "answer": "beginners" },
            { "qNum": 3, "answer": "college" },
            { "qNum": 4, "answer": "New" },
            { "qNum": 5, "answer": ["11", "eleven"] },
            { "qNum": 6, "answer": "instrument" },
            { "qNum": 7, "answer": "ear" },
            { "qNum": 8, "answer": "clapping" },
            { "qNum": 9, "answer": "recording" },
            { "qNum": 10, "answer": "alone" }
          ]
        },

        // --- PART 2: Questions 11-20 ---
        {
          "type": "mcq_single",
          "title": "Part 2: Questions 11-16",
          "instruction": "Choose the correct letter, <strong>A, B or C</strong>.",
          "items": [
            {
              "qNum": 11,
              "text": "What made David leave London and move to Northsea?",
              "options": ["A. He was eager to develop a hobby.", "B. He wanted to work shorter hours.", "C. He found his job in website design unsatisfying."],
              "answer": "A"
            },
            {
              "qNum": 12,
              "text": "The Lifeboat Institution in Northsea was built with money provided by",
              "options": ["A. a local organisation.", "B. a local resident.", "C. the local council."],
              "answer": "B"
            },
            {
              "qNum": 13,
              "text": "In his health assessment, the doctor was concerned about the fact that David",
              "options": ["A. might be colour blind.", "B. was rather short-sighted.", "C. had undergone eye surgery."],
              "answer": "A"
            },
            {
              "qNum": 14,
              "text": "After arriving at the lifeboat station, they aim to launch the boat within",
              "options": ["A. five minutes.", "B. six to eight minutes.", "C. eight and a half minutes."],
              "answer": "B"
            },
            {
              "qNum": 15,
              "text": "As a 'helmsman', David has the responsibility of deciding",
              "options": ["A. who will be the members of his crew.", "B. what equipment it will be necessary to take.", "C. if the lifeboat should be launched."],
              "answer": "C"
            },
            {
              "qNum": 16,
              "text": "As well as going out on the lifeboat, David",
              "options": ["A. gives talks on safety at sea.", "B. helps with fundraising.", "C. recruits new volunteers."],
              "answer": "A"
            }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 17 and 18",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "Which TWO things does David say about the lifeboat volunteer training?",
          "options": [
            "A. The residential course developed his leadership skills.",
            "B. The training in use of ropes and knots was quite brief.",
            "C. The training exercises have built up his mental strength.",
            "D. The casualty care activities were particularly challenging for him.",
            "E. The wave tank activities provided practice in survival techniques."
          ],
          "items": [
            { "qNums": [17, 18], "answer": ["C", "E"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 19 and 20",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "Which TWO things does David find most motivating about the work he does?",
          "options": [
            "A. working as part of a team",
            "B. experiences when working in winter",
            "C. being thanked by those he has helped",
            "D. the fact that it keeps him fit",
            "E. the chance to develop new equipment"
          ],
          "items": [
            { "qNums": [19, 20], "answer": ["A", "B"] }
          ]
        },

        // --- PART 3: Questions 21-30 ---
        {
          "type": "mcq_single",
          "title": "Part 3: Questions 21-24",
          "instruction": "Choose the correct letter, <strong>A, B or C</strong>.",
          "items": [
            {
              "qNum": 21,
              "text": "At first, Don thought the topic of recycling footwear might be too",
              "options": ["A. limited in scope.", "B. hard to research.", "C. boring for listeners."],
              "answer": "A"
            },
            {
              "qNum": 22,
              "text": "When discussing trainers, Bella and Don disagree about",
              "options": ["A. how popular they are among young people.", "B. how suitable they are for school.", "C. how quickly they wear out."],
              "answer": "B"
            },
            {
              "qNum": 23,
              "text": "Bella says that she sometimes recycles shoes because",
              "options": ["A. they no longer fit.", "B. she no longer likes them.", "C. they are no longer in fashion."],
              "answer": "B"
            },
            {
              "qNum": 24,
              "text": "What did the article say that confused Don?",
              "options": ["A. Public consumption of footwear has risen.", "B. Less footwear is recycled now than in the past.", "C. People dispose of more footwear than they used to."],
              "answer": "B"
            }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 25-28",
          "instruction": "What reasons did the recycling manager give for rejecting footwear, according to the students? Choose the correct letter, <strong>A-F</strong>.",
          "options": [
            "A. one shoe was missing",
            "B. the colour of one shoe had faded",
            "C. one shoe had a hole in it",
            "D. the shoes were brand new",
            "E. the shoes were too dirty",
            "F. the stitching on the shoes was broken"
          ],
          "items": [
            { "qNum": 25, "text": "the high-heeled shoes", "answer": "E" },
            { "qNum": 26, "text": "the ankle boots", "answer": "B" },
            { "qNum": 27, "text": "the baby shoes", "answer": "A" },
            { "qNum": 28, "text": "the trainers", "answer": "C" }
          ]
        },
        {
          "type": "mcq_single",
          "title": "Questions 29-30",
          "instruction": "Choose the correct letter, <strong>A, B or C</strong>.",
          "items": [
            {
              "qNum": 29,
              "text": "Why did the project to make 'new' shoes out of old shoes fail?",
              "options": ["A. People believed the 'new' pairs of shoes were unhygienic.", "B. There were not enough good parts to use in the old shoes.", "C. The shoes in the 'new' pairs were not completely alike."],
              "answer": "C"
            },
            {
              "qNum": 30,
              "text": "Bella and Don agree that they can present their topic",
              "options": ["A. from a new angle.", "B. with relevant images.", "C. in a straightforward way."],
              "answer": "A"
            }
          ]
        },

        // --- PART 4: Questions 31-40 (Note Completion) ---
        {
          "type": "gap",
          "title": "Part 4: Questions 31-40",
          "instruction": "Complete the notes below. Write <strong>ONE WORD ONLY</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">Tardigrades</h3>
                <p>• more than 1,000 species, 0.05-1.2 millimetres long</p>
                <p>• also known as water 'bears' (due to how they <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="q-31">) and 'moss piglets'</p>
                
                <p><strong>Physical appearance</strong></p>
                <ul>
                    <li>a <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="q-32"> round body and four pairs of legs</li>
                    <li>claws or <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33"> for gripping</li>
                    <li>absence of respiratory organs</li>
                    <li>body filled with a liquid that carries both <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34"> and blood</li>
                    <li>mouth shaped like a <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"> with teeth called stylets</li>
                </ul>

                <p><strong>Habitat</strong></p>
                <ul>
                    <li>often found at the bottom of a lake or on plants</li>
                    <li>very resilient and can exist in very low or high <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36"></li>
                </ul>

                <p><strong>Cryptobiosis</strong></p>
                <ul>
                    <li>In dry conditions, they roll into a ball called a 'tun'.</li>
                    <li>They stay alive with a much lower metabolism than usual.</li>
                    <li>A type of <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37"> ensures their DNA is not damaged.</li>
                    <li>Research is underway to find out how many days they can stay alive in <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="q-38"></li>
                </ul>
                
                <p><strong>Feeding</strong></p>
                <ul>
                    <li>consume liquids, e.g., those found in moss or <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="q-39"></li>
                    <li>may eat other tardigrades</li>
                </ul>

                 <p><strong>Conservation status</strong></p>
                <ul>
                    <li>They are not considered to be <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="q-40"></li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 31, "answer": "move" },
            { "qNum": 32, "answer": "short" },
            { "qNum": 33, "answer": "discs" },
            { "qNum": 34, "answer": "oxygen" },
            { "qNum": 35, "answer": "tube" },
            { "qNum": 36, "answer": "temperatures" },
            { "qNum": 37, "answer": "protein" },
            { "qNum": 38, "answer": "space" },
            { "qNum": 39, "answer": "seaweed" },
            { "qNum": 40, "answer": "endangered" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 40 - 51)
    // ==========================================================================
    reading: {
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; font-size: 1.5rem; color: #333;">The Industrial Revolution in Britain</h3>
            
            <p>The Industrial Revolution began in Britain in the mid-1700s and by the 1830s and 1840s had spread to many other parts of the world, including the United States. In Britain, it was a period when a largely rural, agrarian society was transformed into an industrialised, urban one. Goods that had once been crafted by hand started to be produced in mass quantities by machines in factories, thanks to the invention of steam power and the introduction of new machines and manufacturing techniques in textiles, iron-making and other industries.</p>
            
            <p>The foundations of the Industrial Revolution date back to the early 1700s, when the English inventor Thomas Newcomen designed the first modern steam engine. Called the 'atmospheric steam engine', Newcomen's invention was originally used to power machines that pumped water out of mines. In the 1760s, the Scottish engineer James Watt started to adapt one of Newcomen's models, and succeeded in making it far more efficient. Watt later worked with the English manufacturer Matthew Boulton to invent a new steam engine driven by both the forward and backward strokes of the piston, while the gear mechanism it was connected to produced rotary motion. It was a key innovation that would allow steam power to spread across British industries.</p>
            
            <p>The demand for coal, which was a relatively cheap energy source, grew rapidly during the Industrial Revolution, as it was needed to run not only the factories used to produce manufactured goods, but also steam-powered transportation. In the early 1800s, the English engineer Richard Trevithick built a steam-powered locomotive, and by 1830 goods and passengers were being transported between the industrial centres of Manchester and Liverpool. In addition, steam-powered boats and ships were widely used to carry goods along Britain's canals as well as across the Atlantic.</p>
            
            <p>Britain had produced textiles like wool, linen and cotton, for hundreds of years, but prior to the Industrial Revolution, the British textile business was a true 'cottage industry', with the work performed in small workshops or even homes by individual spinners, weavers and dyers. Starting in the mid-1700s, innovations like the spinning jenny and the power loom made weaving cloth and spinning yarn and thread much easier. With these machines, relatively little labour was required to produce cloth, and the new, mechanised textile factories that opened around the country were quickly able to meet customer demand for cloth both at home and abroad.</p>
            
            <p>The British iron industry also underwent major change as it adopted new innovations. Chief among the new techniques was the smelting of iron ore with coke (a material made by heating coal) instead of the traditional charcoal. This method was cheaper and produced metals that were of a higher quality, enabling Britain's iron and steel production to expand in response to demand created by the Napoleonic Wars (1803-15) and the expansion of the railways from the 1830s.</p>
            
            <p>The latter part of the Industrial Revolution also saw key advances in communication methods, as people increasingly saw the need to communicate efficiently over long distances. In 1837, British inventors William Cooke and Charles Wheatstone patented the first commercial telegraphy system. In the 1830s and 1840s, Samuel Morse and other inventors worked on their own versions in the United States. Cooke and Wheatstone's system was soon used for railway signalling in the UK. As the speed of the new locomotives increased, it was essential to have a fast and effective means of avoiding collisions.</p>
            
            <p>The impact of the Industrial Revolution on people's lives was immense. Although many people in Britain had begun moving to the cities from rural areas before the Industrial Revolution, this accelerated dramatically with industrialisation, as the rise of large factories turned smaller towns into major cities in just a few decades. This rapid urbanisation brought significant challenges, as overcrowded cities suffered from pollution and inadequate sanitation.</p>
            
            <p>Although industrialisation increased the country's economic output overall and improved the standard of living for the middle and upper classes, many poor people continued to struggle. Factory workers had to work long hours in dangerous conditions for extremely low wages. These conditions along with the rapid pace of change fuelled opposition to industrialisation. A group of British workers who became known as 'Luddites' were British weavers and textile workers who objected to the increased use of mechanised looms and knitting frames. Many had spent years learning their craft, and they feared that unskilled machine operators were robbing them of their livelihood. A few desperate weavers began breaking into factories and smashing textile machines. They called themselves Luddites after Ned Ludd, a young apprentice who was rumoured to have wrecked a textile machine in 1779.</p>
            
            <p>The first major instances of machine breaking took place in 1811 in the city of Nottingham, and the practice soon spread across the country. Machine-breaking Luddites attacked and burned factories, and in some cases they even exchanged gunfire with company guards and soldiers. The workers wanted employers to stop installing new machinery, but the British government responded to the uprisings by making machine-breaking punishable by death. The unrest finally reached its peak in April 1812, when a few Luddites were shot during an attack on a mill near Huddersfield. In the days that followed, other Luddites were arrested, and dozens were hanged or transported to Australia. By 1813, the Luddite resistance had all but vanished.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">
        
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">Athletes and stress</h3>
            
            <p><strong>A</strong> It isn't easy being a professional athlete. Not only are the physical demands greater than most people could handle, athletes also face intense psychological pressure during competition. This is something that British tennis player Emma Raducanu wrote about on social media following her withdrawal from the 2021 Wimbledon tournament. Though the young player had been doing well in the tournament, she began having difficulty regulating her breathing and heart rate during a match, which she later attributed to 'the accumulation of the excitement and the buzz'.</p>

            <p><strong>B</strong> For athletes, some level of performance stress is almost unavoidable. But there are many different factors that dictate just how people's minds and bodies respond to stressful events. Typically, stress is the result of an exchange between two factors: demands and resources. An athlete may feel stressed about an event if they feel the demands on them are greater than they can handle. These demands include the high level of physical and mental effort required to succeed, and also the athlete's concerns about the difficulty of the event, their chance of succeeding, and any potential dangers such as injury. Resources, on the other hand, are a person's ability to cope with these demands. These include factors such as the competitor's degree of confidence, how much they believe they can control the situation's outcome, and whether they're looking forward to the event or not.</p>

            <p><strong>C</strong> Each new demand or change in circumstances affects whether a person responds positively or negatively to stress. Typically, the more resources a person feels they have in handling the situation, the more positive their stress response. This positive stress response is called a challenge state. But should the person feel there are too many demands placed on them, the more likely they are to experience a negative stress response - known as a threat state. Research shows that the challenge states lead to good performance, while threat states lead to poorer performance. So, in Emma Raducanu's case, a much larger audience, higher expectations and facing a more skilful opponent, may all have led her to feel there were greater demands being placed on her at Wimbledon - but she didn't have the resources to tackle them. This led to her experiencing a threat response.</p>

            <p><strong>D</strong> Our challenge and threat responses essentially influence how our body responds to stressful situations, as both affect the production of adrenaline and cortisol - also known as 'stress hormones'. During a challenge state, adrenaline increases the amount of blood pumped from the heart and expands the blood vessels, which allows more energy to be delivered to the muscles and brain. This increase of blood and decrease of pressure in the blood vessels has been consistently related to superior sport performance in everything from cricket batting, to golf putting and football penalty taking. But during a threat state, cortisol inhibits the positive effect of adrenaline, resulting in tighter blood vessels, higher blood pressure, slower psychological responses, and a faster heart rate. In short, a threat state makes people more anxious - they make worse decisions and perform more poorly. In tennis players, cortisol has been associated with more unsuccessful serves and greater anxiety.</p>

            <p><strong>E</strong> That said, anxiety is also a common experience for athletes when they're under pressure. Anxiety can increase heart rate and perspiration, cause heart palpitations, muscle tremors and shortness of breath, as well as headaches, nausea, stomach pain, weakness and a desire to escape in more extreme cases. Anxiety can also reduce concentration and self-control and cause overthinking. The intensity with which a person experiences anxiety depends on the demands and resources they have. Anxiety may also manifest itself in the form of excitement or nervousness depending on the stress response. Negative stress responses can be damaging to both physical and mental health - and repeated episodes of anxiety coupled with negative responses can increase risk of heart disease and depression.</p>

            <p><strong>F</strong> But there are many ways athletes can ensure they respond positively under pressure. Positive stress responses can be promoted through the language that they and others - such as coaches or parents - use. Psychologists can also help athletes change how they see their physiological responses - such as helping them see a higher heart rate as excitement, rather than nerves. Developing psychological skills, such as visualisation, can also help decrease physiological responses to threat. Visualisation may involve the athlete recreating a mental picture of a time when they performed well, or picturing themselves doing well in the future. This can help create a feeling of control over the stressful event. Recreating competitive pressure during training can also help athletes learn how to deal with stress. An example of this might be scoring athletes against their peers to create a sense of competition. This would increase the demands which players experience compared to a normal training session, while still allowing them to practise coping with stress.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            <h3 style="text-align: center;">An inquiry into the existence of the gifted</h3>
            
            <p>Let us start by looking at a modern 'genius', Maryam Mirzakhani, who died at the early age of 40. She was the only woman to win the Fields Medal - the mathematical equivalent of a Nobel prize. It would be easy to assume that someone as special as Mirzakhani must have been one of those 'gifted' children, those who have an extraordinary ability in a specific sphere of activity or knowledge. But look closer and a different story emerges. Mirzakhani was born in Tehran, Iran. She went to a highly selective girls' school but maths wasn't her interest - reading was. She loved novels and would read anything she could lay her hands on. As for maths, she did rather poorly at it for the first couple of years in her middle school, but became interested when her elder brother told her about what he'd learned. He shared a famous maths problem from a magazine that fascinated her and she was hooked. In adult life it is clear that she was curious, excited by what she did and also resolute in the face of setbacks. One of her comments sums it up. 'Of course, the most rewarding part is the "Aha" moment, the excitement of discovery and enjoyment of understanding something new ... But most of the time, doing mathematics for me is like being on a long hike with no trail and no end in sight.' That trail took her to the heights of original research into mathematics.</p>

            <p>Is her background unusual? Apparently not. Most Nobel prize winners were unexceptional in childhood. Einstein was slow to talk as a baby. He failed the general part of the entry test to Zurich Polytechnic though they let him in because of high physics and maths scores. He struggled at work initially, but he kept plugging away and eventually rewrote the laws of Newtonian mechanics with his theory of relativity.</p>

            <p>There has been a considerable amount of research on high performance over the last century that suggests it goes way beyond tested intelligence. On top of that, research is clear that brains are flexible, new neural pathways can be created, and IQ isn't fixed. For example, just because you can read stories with hundreds of pages at the age of five doesn't mean you will still be ahead of your contemporaries in your teens. While the jury is out on giftedness being innate and other factors potentially making the difference, what is certain is that the behaviours associated with high levels of performance are replicable and most can be taught - even traits such as curiosity.</p>

            <p>According to my colleague Prof Deborah Eyre, with whom I've collaborated on the book Great Minds and How to Grow Them, the latest neuroscience and psychological research suggests most individuals can reach levels of performance associated in school with the gifted and talented. However, they must be taught the right attitudes and approaches to their learning and develop the attributes of high performers - curiosity, persistence and hard work, for example - an approach Eyre calls 'high performance learning'. Critically, they need the right support in developing those approaches at home as well as at school.</p>
            
            <p>Prof Anders Ericsson, an eminent education psychologist at Florida State University, US, is the co-author of Peak: Secrets from the New Science of Expertise. After research going back to 1980 into diverse achievements, from music to memory to sport, he doesn't think unique and innate talents are at the heart of performance. Deliberate practice, that stretches you every step of the way, and around 10,000 hours of it, is what produces the goods. It's not a magic number - the highest performers move on to doing a whole lot more, of course. Ericsson's memory research is particularly interesting because random students, trained in memory techniques for the study, went on to outperform others thought to have innately superior memories - those who you might call gifted.</p>

            <p>But it is perhaps the work of Benjamin Bloom, another distinguished American educationist working in the 1980s, that gives the most pause for thought. Bloom's team looked at a group of extraordinarily high achieving people in disciplines as varied as ballet, swimming, piano, tennis, maths, sculpture and neurology. He found a pattern of parents encouraging and supporting their children, often in areas they enjoyed themselves. Bloom's outstanding people had worked very hard and consistently at something they had become hooked on when at a young age, and their parents all emerged as having strong work ethics themselves.</p>

            <p>Eyre says we know how high performers learn. From that she has developed a high performing learning approach. She is working on this with a group of schools, both in Britain and abroad. Some spin-off research, which looked in detail at 24 of the 3,000 children being studied who were succeeding despite difficult circumstances, found something remarkable. Half were getting free school meals because of poverty, more than half were living with a single parent, and four in five were living in disadvantaged areas. Interviews uncovered strong evidence of an adult or adults in the child's life who valued and supported education, either in the immediate or extended family or in the child's wider community. Children talked about the need to work hard at school, to listen in class and keep trying.</p>

            <p>Let us end with Einstein, the epitome of a genius. He clearly had curiosity, character and determination. He struggled against rejection in early life but was undeterred. Did he think he was a genius or even gifted? He once wrote: 'It's not that I'm so smart, it's just that I stay with problems longer. Most people say it is the intellect which makes a great scientist. They are wrong: it is character.'</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          "type": "gap",
          "title": "Questions 1-7",
          "instruction": "Complete the notes below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="margin-top:0;">Britain's Industrial Revolution</h3>
                <p><strong>Steam power</strong></p>
                <ul>
                    <li>Newcomen's steam engine was used in mines to remove water.</li>
                    <li>In Watt and Boulton's steam engine, the movement of the <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1"> was linked to a gear system.</li>
                    <li>A greater supply of <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2"> was required to power steam engines.</li>
                </ul>
                <p><strong>Textile industry</strong></p>
                <ul>
                    <li>Before the Industrial Revolution, spinners and weavers worked at home and in <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3">.</li>
                    <li>Not as much <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4"> was needed to produce cloth once the spinning jenny and power loom were invented.</li>
                </ul>
                <p><strong>Iron industry</strong></p>
                <ul>
                    <li>Smelting of iron ore with coke resulted in material that was better <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5">.</li>
                    <li>Demand for iron increased with the growth of the <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="q-6">.</li>
                </ul>
                <p><strong>Communications</strong></p>
                <ul>
                    <li>Cooke and Wheatstone patented the first telegraphy system.</li>
                    <li>The telegraphy system was used to prevent locomotives colliding.</li>
                </ul>
                <p><strong>Urbanisation</strong></p>
                <ul>
                    <li>Small towns turned into cities very quickly.</li>
                    <li>The new cities were dirty, crowded and lacked sufficient <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7">.</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": "piston" },
            { "qNum": 2, "answer": "coal" },
            { "qNum": 3, "answer": "workshops" },
            { "qNum": 4, "answer": ["labour", "labor"] },
            { "qNum": 5, "answer": "quality" },
            { "qNum": 6, "answer": ["railway", "railways"] },
            { "qNum": 7, "answer": "sanitation" }
          ]
        },
        {
          "type": "tfng",
          "title": "Questions 8-13",
          "instruction": "Do the following statements agree with the information given in Reading Passage 1?",
          "items": [
            { "qNum": 8, "text": "Britain's canal network grew rapidly so that more goods could be transported around the country.", "answer": "NOT GIVEN" },
            { "qNum": 9, "text": "Costs in the iron industry rose when the technique of smelting iron ore with coke was introduced.", "answer": "FALSE" },
            { "qNum": 10, "text": "Samuel Morse's communication system was more reliable than that developed by William Cooke and Charles Wheatstone.", "answer": "NOT GIVEN" },
            { "qNum": 11, "text": "The economic benefits of industrialisation were limited to certain sectors of society.", "answer": "TRUE" },
            { "qNum": 12, "text": "Some skilled weavers believed that the introduction of the new textile machines would lead to job losses.", "answer": "TRUE" },
            { "qNum": 13, "text": "There was some sympathy among local people for the Luddites who were arrested near Huddersfield.", "answer": "NOT GIVEN" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          "type": "matching_info",
          "title": "Questions 14-18",
          "instruction": "Reading Passage 2 has six paragraphs, <strong>A-F</strong>. Which paragraph contains the following information?",
          "options": ["A", "B", "C", "D", "E", "F"],
          "items": [
            { "qNum": 14, "text": "reference to two chemical compounds which impact on performance", "answer": "D" },
            { "qNum": 15, "text": "examples of strategies for minimising the effects of stress", "answer": "F" },
            { "qNum": 16, "text": "how a sportsperson accounted for their own experience of stress", "answer": "A" },
            { "qNum": 17, "text": "study results indicating links between stress responses and performance", "answer": "C" },
            { "qNum": 18, "text": "mention of people who can influence how athletes perceive their stress responses", "answer": "F" }
          ]
        },
        {
          "type": "gap",
          "title": "Questions 19-22",
          "instruction": "Complete the sentences below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="padding:10px;">
                <p>19. Performance stress involves many demands on the athlete, for example, coping with the possible risk of <span class="q-badge-inline">19</span><input type="text" class="gap-input" data-qnum="19" id="input-19">.</p>
                <p>20. Cortisol can cause tennis players to produce fewer good <span class="q-badge-inline">20</span><input type="text" class="gap-input" data-qnum="20" id="input-20">.</p>
                <p>21. Psychologists can help athletes to view their physiological responses as the effect of a positive feeling such as <span class="q-badge-inline">21</span><input type="text" class="gap-input" data-qnum="21" id="input-21">.</p>
                <p>22. <span class="q-badge-inline">22</span><input type="text" class="gap-input" data-qnum="22" id="input-22"> is an example of a psychological technique which can reduce an athlete's stress responses.</p>
            </div>
          `,
          "items": [
            { "qNum": 19, "answer": "injury" },
            { "qNum": 20, "answer": "serves" },
            { "qNum": 21, "answer": "excitement" },
            { "qNum": 22, "answer": ["Visualisation", "Visualization"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 23 and 24",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>. Which TWO facts about Emma Raducanu's withdrawal from the Wimbledon tournament are mentioned in the text?",
          "options": [
            "A. the stage at which she dropped out of the tournament",
            "B. symptoms of her performance stress at the tournament",
            "C. measures which she had taken to manage her stress levels",
            "D. aspects of the Wimbledon tournament which increased her stress levels",
            "E. reactions to her social media posts about her experience at Wimbledon"
          ],
          "items": [
            { "qNums": [23, 24], "answer": ["B", "D"] }
          ]
        },
        {
          "type": "mcq_multi",
          "title": "Questions 25 and 26",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>. Which <strong>TWO</strong> facts about anxiety are mentioned in Paragraph E of the text?",
          "options": [
            "A. the factors which determine how severe it may be",
            "B. how long it takes for its effects to become apparent",
            "C. which of its symptoms is most frequently encountered",
            "D. the types of athletes who are most likely to suffer from it",
            "E. the harm that can result if athletes experience it too often"
          ],
          "items": [
            { "qNums": [25, 26], "answer": ["A", "E"] }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          "type": "gap",
          "title": "Questions 27-32",
          "instruction": "Complete the summary using the list of phrases, <strong>A-K</strong>, below.",
          "htmlContent": `
             <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                 <p><strong>Maryam Mirzakhani</strong></p>
                 <p>Maryam Mirzakhani is regarded as <span class="q-badge-inline">27</span><select class="gap-select" data-qnum="27"><option value=""></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option><option value="K">K</option></select> in the field of mathematics because she was the only female holder of the prestigious Fields Medal - a record that she retained at the time of her death.</p>
                 <p>However, maths held little <span class="q-badge-inline">28</span><select class="gap-select" data-qnum="28"><option value=""></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option><option value="K">K</option></select> for her as a child and in fact her performance was below average until she was <span class="q-badge-inline">29</span><select class="gap-select" data-qnum="29"><option value=""></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option><option value="K">K</option></select> by a difficult puzzle that one of her siblings showed her.</p>
                 <p>Later, as a professional mathematician, she had an inquiring mind and proved herself to be <span class="q-badge-inline">30</span><select class="gap-select" data-qnum="30"><option value=""></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option><option value="K">K</option></select> when things did not go smoothly.</p>
                 <p>She said she got the greatest <span class="q-badge-inline">31</span><select class="gap-select" data-qnum="31"><option value=""></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option><option value="K">K</option></select> from making ground-breaking discoveries and in fact she was responsible for some extremely <span class="q-badge-inline">32</span><select class="gap-select" data-qnum="32"><option value=""></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option><option value="K">K</option></select> mathematical studies.</p>
                 
                 <div style="margin-top:15px; padding:10px; background:#eef7ff; font-size:0.9rem;">
                     <strong>A</strong> appeal &nbsp;&nbsp; <strong>B</strong> determined &nbsp;&nbsp; <strong>C</strong> intrigued <br>
                     <strong>D</strong> single &nbsp;&nbsp; <strong>E</strong> achievement &nbsp;&nbsp; <strong>F</strong> devoted <br>
                     <strong>G</strong> involved &nbsp;&nbsp; <strong>H</strong> unique &nbsp;&nbsp; <strong>I</strong> innovative <br>
                     <strong>J</strong> satisfaction &nbsp;&nbsp; <strong>K</strong> intent
                 </div>
             </div>
          `,
          "items": [
            { "qNum": 27, "answer": "H" },
            { "qNum": 28, "answer": "A" },
            { "qNum": 29, "answer": "C" },
            { "qNum": 30, "answer": "B" },
            { "qNum": 31, "answer": "J" },
            { "qNum": 32, "answer": "I" }
          ]
        },
        {
          "type": "ynng",
          "title": "Questions 33-37",
          "instruction": "Do the following statements agree with the claims of the writer in Reading Passage 3?",
          "items": [
            { "qNum": 33, "text": "Many people who ended up winning prestigious intellectual prizes only reached an average standard when young.", "answer": "YES" },
            { "qNum": 34, "text": "Einstein's failures as a young man were due to his lack of confidence.", "answer": "NOT GIVEN" },
            { "qNum": 35, "text": "It is difficult to reach agreement on whether some children are actually born gifted.", "answer": "YES" },
            { "qNum": 36, "text": "Einstein was upset by the public's view of his life's work.", "answer": "NOT GIVEN" },
            { "qNum": 37, "text": "Einstein put his success down to the speed at which he dealt with scientific questions.", "answer": "NO" }
          ]
        },
        {
          "type": "mcq_single",
          "title": "Questions 38-40",
          "instruction": "Choose the correct letter, <strong>A, B, C or D</strong>.",
          "items": [
            {
              "qNum": 38,
              "text": "What does Eyre believe is needed for children to equal 'gifted' standards?",
              "options": [
                "A. strict discipline from the teaching staff",
                "B. assistance from their peers in the classroom",
                "C. the development of a spirit of inquiry towards their studies",
                "D. the determination to surpass everyone else's achievements"
              ],
              "answer": "C"
            },
            {
              "qNum": 39,
              "text": "What is the result of Ericsson's research?",
              "options": [
                "A. Very gifted students do not need to work on improving memory skills.",
                "B. Being born with a special gift is not the key factor in becoming expert.",
                "C. Including time for physical exercise is crucial in raising performance.",
                "D. 10,000 hours of relevant and demanding work will create a genius."
              ],
              "answer": "B"
            },
            {
              "qNum": 40,
              "text": "In the penultimate paragraph, it is stated the key to some deprived children's success is",
              "options": [
                "A. a regular and nourishing diet at home.",
                "B. the loving support of more than one parent.",
                "C. a community which has well-funded facilities for learning.",
                "D. the guidance of someone who recognises the benefits of learning."
              ],
              "answer": "D"
            }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 52 - 53)
    // ==========================================================================
    writing: {
      task1: {
        title: "Writing Task 1",
        instruction: "You should spend about 20 minutes on this task.",
        // ⚠️ Bạn cần cắt ảnh Porth Harbour từ trang 52 PDF và thay link vào đây
        image: "https://i.postimg.cc/VLx5q7gK/snapedit-1767880995671.jpg", 
        prompt: `The plans below show a harbour in 2000 and how it looks today.
        
        Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`
      },
      task2: {
        title: "Writing Task 2",
        instruction: "You should spend about 40 minutes on this task.",
        prompt: `The working week should be shorter and workers should have a longer weekend.
        
        Do you agree or disagree?
        
        Give reasons for your answer and include any relevant examples from your own knowledge or experience.`
      }
    }
  }
};