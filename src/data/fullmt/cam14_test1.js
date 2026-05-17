// src/data/cam14_test1.js

export const cam14_test1 = {
  id: "mt25",
  category: "full",
  testName: "MOCK TEST 25",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 10 - 15 PDF) - Đáp án trang 119
    // ==========================================================================
    listening: {
      audioSrc: "/audio/mt25.mp3",
      timeLimit: 1777,
      passage: "<h3 style='text-align:center; color:#002554;'>CAMBRIDGE 14 - LISTENING TEST 1</h3>",
      questions: [
        // --- PART 1 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-10",
          instruction: "Complete the form below. <strong>Write ONE WORD AND/OR A NUMBER</strong> for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">CRIME REPORT FORM</h3>
                
                <table style="width:100%; border-collapse: collapse; line-height: 2;">
                    <tr>
                        <td style="font-weight:bold; width: 40%;">Type of crime:</td>
                        <td>theft</td>
                    </tr>
                    <tr><td colspan="2"><h4 style="color:#002554; margin: 15px 0 5px 0; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Personal information</h4></td></tr>
                    <tr>
                        <td style="font-weight:bold;">Name</td>
                        <td>Louise Taylor</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;">Nationality</td>
                        <td><span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"></td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;">Date of birth</td>
                        <td>14 December 1977</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;">Occupation</td>
                        <td>interior designer</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;">Reason for visit</td>
                        <td>business (to buy antique <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2">)</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;">Length of stay</td>
                        <td>two months</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; vertical-align: top;">Current address</td>
                        <td>
                            <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"> Apartments (No 15)
                        </td>
                    </tr>
                    <tr><td colspan="2"><h4 style="color:#002554; margin: 15px 0 5px 0; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Details of theft</h4></td></tr>
                    <tr>
                        <td style="font-weight:bold; vertical-align: top;">Items stolen</td>
                        <td>
                            - a wallet containing approximately £<span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"><br>
                            - a <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5">
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;">Date of theft</td>
                        <td><span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"></td>
                    </tr>
                    <tr><td colspan="2"><h4 style="color:#002554; margin: 15px 0 5px 0; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Possible time and place of theft</h4></td></tr>
                    <tr>
                        <td style="font-weight:bold;">Location</td>
                        <td>outside the <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"> at about 4 pm</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; vertical-align: top;">Details of suspect</td>
                        <td>
                            - some boys asked for the <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8"> then ran off<br>
                            - one had a T-shirt with a picture of a tiger<br>
                            - he was about 12, slim build with <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9"> hair
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;">Crime reference number allocated</td>
                        <td><span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10"></td>
                    </tr>
                </table>
            </div>
          `,
          items: [
            { qNum: 1, answer: ["Canadian"] },
            { qNum: 2, answer: ["furniture"] },
            { qNum: 3, answer: ["Park"] },
            { qNum: 4, answer: ["250", "250 sterling"] },
            { qNum: 5, answer: ["phone", "mobile phone", "cellphone"] },
            { qNum: 6, answer: ["10th September", "10 September", "September 10", "September 10th"] },
            { qNum: 7, answer: ["museum"] },
            { qNum: 8, answer: ["time"] },
            { qNum: 9, answer: ["blond", "blonde"] },
            { qNum: 10, answer: ["87954 82361", "8795482361"] }
          ]
        },

        // --- PART 2 ---
        {
          type: "mcq_multi",
          title: "Part 2: Questions 11-12",
          instruction: "<strong>Choose TWO letters, A-E.</strong>",
          stem: "Which TWO pieces of advice for the first week of an apprenticeship does the manager give?",
          options: [
            "A. get to know colleagues",
            "B. learn from any mistakes",
            "C. ask lots of questions",
            "D. react positively to feedback",
            "E. enjoy new challenges"
          ],
          items: [
            { qNums: [11, 12], answer: ["A", "C"] } // Key: A, C
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 13-14",
          instruction: "<strong>Choose TWO letters, A-E.</strong>",
          stem: "Which TWO things does the manager say mentors can help with?",
          options: [
            "A. confidence-building",
            "B. making career plans",
            "C. completing difficult tasks",
            "D. making a weekly timetable",
            "E. reviewing progress"
          ],
          items: [
            { qNums: [13, 14], answer: ["B", "E"] } // Key: B, E
          ]
        },
        {
          type: "matching",
          title: "Questions 15-20",
          instruction: "What does the manager say about each of the following aspects of the company policy for apprentices?<br><br><strong>Write the correct letter, A, B or C, next to Questions 15-20.</strong>",
          options: [
            "A. It is encouraged.",
            "B. There are some restrictions.",
            "C. It is against the rules."
          ],
          items: [
            { qNum: 15, text: "Using the internet", answer: "B" },
            { qNum: 16, text: "Flexible working", answer: "B" },
            { qNum: 17, text: "Booking holidays", answer: "C" },
            { qNum: 18, text: "Working overtime", answer: "A" },
            { qNum: 19, text: "Wearing trainers", answer: "A" },
            { qNum: 20, text: "Bringing food to work", answer: "C" }
          ]
        },

        // --- PART 3 ---
        {
          type: "mcq_single",
          title: "Part 3: Questions 21-25",
          instruction: "<strong>Choose the correct letter, A, B or C.</strong><br><br><strong>Cities built by the sea</strong>",
          items: [
            {
              qNum: 21,
              text: "Carla and Rob were surprised to learn that coastal cities",
              options: [
                "A. contain nearly half the world's population.",
                "B. include most of the world's largest cities.",
                "C. are growing twice as fast as other cities."
              ],
              answer: "B"
            },
            {
              qNum: 22,
              text: "According to Rob, building coastal cities near to rivers",
              options: [
                "A. may bring pollution to the cities.",
                "B. may reduce the land available for agriculture.",
                "C. may mean the countryside is spoiled by industry."
              ],
              answer: "A"
            },
            {
              qNum: 23,
              text: "What mistake was made when building water drainage channels in Miami in the 1950s?",
              options: [
                "A. There were not enough of them.",
                "B. They were made of unsuitable materials.",
                "C. They did not allow for the effects of climate change."
              ],
              answer: "C"
            },
            {
              qNum: 24,
              text: "What do Rob and Carla think that the authorities in Miami should do immediately?",
              options: [
                "A. take measures to restore ecosystems",
                "B. pay for a new flood prevention system",
                "C. stop disposing of waste materials into the ocean"
              ],
              answer: "B"
            },
            {
              qNum: 25,
              text: "What do they agree should be the priority for international action?",
              options: [
                "A. greater coordination of activities",
                "B. more sharing of information",
                "C. agreement on shared policies"
              ],
              answer: "A"
            }
          ]
        },
        {
          type: "matching",
          title: "Questions 26-30",
          instruction: "What decision do the students make about each of the following parts of their presentation?<br><br><strong>Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 26-30.</strong>",
          options: [
            "A. use visuals",
            "B. keep it short",
            "C. involve other students",
            "D. check the information is accurate",
            "E. provide a handout",
            "F. focus on one example",
            "G. do online research"
          ],
          items: [
            { qNum: 26, text: "Historical background", answer: "B" },
            { qNum: 27, text: "Geographical factors", answer: "A" },
            { qNum: 28, text: "Past mistakes", answer: "F" },
            { qNum: 29, text: "Future risks", answer: "G" },
            { qNum: 30, text: "International implications", answer: "C" }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-40",
          instruction: "Complete the notes below. <strong>Write ONE WORD ONLY</strong> for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">Marine renewable energy (ocean energy)</h3>
              
              <p><strong>Introduction</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>More energy required because of growth in population and <span class="q-badge-inline">31</span><input class="gap-input" data-qnum="31"></li>
                <li>What's needed:
                    <ul style="list-style-type: circle; margin-left: 20px;">
                        <li>renewable energy sources</li>
                        <li>methods that won't create pollution</li>
                    </ul>
                </li>
              </ul>

              <p><strong>Wave energy</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>Advantage: waves provide a <span class="q-badge-inline">32</span><input class="gap-input" data-qnum="32"> source of renewable energy</li>
                <li>Electricity can be generated using offshore or onshore systems</li>
                <li>Onshore systems may use a reservoir</li>
                <li>Problems:
                    <ul style="list-style-type: circle; margin-left: 20px;">
                        <li>waves can move in any <span class="q-badge-inline">33</span><input class="gap-input" data-qnum="33"></li>
                        <li>movement of sand, etc. on the <span class="q-badge-inline">34</span><input class="gap-input" data-qnum="34"> of the ocean may be affected</li>
                    </ul>
                </li>
              </ul>

              <p><strong>Tidal energy</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>Tides are more <span class="q-badge-inline">35</span><input class="gap-input" data-qnum="35"> than waves</li>
                <li>Planned tidal lagoon in Wales:
                    <ul style="list-style-type: circle; margin-left: 20px;">
                        <li>will be created in a <span class="q-badge-inline">36</span><input class="gap-input" data-qnum="36"> at Swansea</li>
                        <li>breakwater (dam) containing 16 turbines</li>
                        <li>rising tide forces water through turbines, generating electricity</li>
                        <li>stored water is released through <span class="q-badge-inline">37</span><input class="gap-input" data-qnum="37">, driving the turbines in the reverse direction</li>
                    </ul>
                </li>
                <li>Advantages:
                    <ul style="list-style-type: circle; margin-left: 20px;">
                        <li>not dependent on weather</li>
                        <li>no <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38"> is required to make it work</li>
                        <li>likely to create a number of <span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39"></li>
                    </ul>
                </li>
                <li>Problem:
                    <ul style="list-style-type: circle; margin-left: 20px;">
                        <li>may harm fish and birds, e.g. by affecting <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40"> and building up silt</li>
                    </ul>
                </li>
              </ul>

              <p><strong>Ocean thermal energy conversion</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>Uses a difference in temperature between the surface and lower levels</li>
                <li>Water brought to the surface in a pipe</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "industry" },
            { qNum: 32, answer: "constant" },
            { qNum: 33, answer: "direction" },
            { qNum: 34, answer: "floor" },
            { qNum: 35, answer: "predictable" },
            { qNum: 36, answer: "bay" },
            { qNum: 37, answer: "gates" },
            { qNum: 38, answer: "fuel" },
            { qNum: 39, answer: "jobs" },
            { qNum: 40, answer: "migration" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 16 - 28 PDF) - Đáp án trang 120
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">THE IMPORTANCE OF CHILDREN'S PLAY</h3>
            
            <p>Brick by brick, six-year-old Alice is building a magical kingdom. Imagining fairy-tale turrets and fire-breathing dragons, wicked witches and gallant heroes, she's creating an enchanting world. Although she isn't aware of it, this fantasy is helping her take her first steps towards her capacity for creativity and so it will have important repercussions in her adult life.</p>
            
            <p>Minutes later, Alice has abandoned the kingdom in favour of playing schools with her younger brother. When she bosses him around as his 'teacher', she's practising how to regulate her emotions through pretence. Later on, when they tire of this and settle down with a board game, she's learning about the need to follow rules and take turns with a partner.</p>

            <p>'Play in all its rich variety is one of the highest achievements of the human species,' says Dr David Whitebread from the Faculty of Education at the University of Cambridge, UK. 'It underpins how we develop as intellectual, problem-solving adults and is crucial to our success as a highly adaptable species.'</p>

            <p>Recognising the importance of play is not new: over two millennia ago, the Greek philosopher Plato extolled its virtues as a means of developing skills for adult life, and ideas about play-based learning have been developing since the 19th century.</p>

            <p>But we live in changing times, and Whitebread is mindful of a worldwide decline in play, pointing out that over half the people in the world now live in cities. 'The opportunities for free play, which I experienced almost every day of my childhood, are becoming increasingly scarce,' he says. Outdoor play is curtailed by perceptions of risk to do with traffic, as well as parents' increased wish to protect their children from being the victims of crime, and by the emphasis on 'earlier is better' which is leading to greater competition in academic learning and schools.</p>

            <p>International bodies like the United Nations and the European Union have begun to develop policies concerned with children's right to play, and to consider implications for leisure facilities and educational programmes. But what they often lack is the evidence to base policies on.</p>

            <p>'The type of play we are interested in is child-initiated, spontaneous and unpredictable - but, as soon as you ask a five-year-old "to play", then you as the researcher have intervened,' explains Dr Sara Baker. 'And we want to know what the long-term impact of play is. It's a real challenge.'</p>

            <p>Dr Jenny Gibson agrees, pointing out that although some of the steps in the puzzle of how and why play is important have been looked at, there is very little data on the impact it has on the child's later life.</p>

            <p>Now, thanks to the university's new Centre for Research on Play in Education, Development and Learning (PEDAL), Whitebread, Baker, Gibson and a team of researchers hope to provide evidence on the role played by play in how a child develops.</p>

            <p>'A strong possibility is that play supports the early development of children's self-control,' explains Baker. 'This is our ability to develop awareness of our own thinking processes - it influences how effectively we go about undertaking challenging activities.'</p>

            <p>In a study carried out by Baker with toddlers and young pre-schoolers, she found that children with greater self-control solved problems more quickly when exploring an unfamiliar set-up requiring scientific reasoning. 'This sort of evidence makes us think that giving children the chance to play will make them more successful problem-solvers in the long run.'</p>

            <p>If playful experiences do facilitate this aspect of development, say the researchers, it could be extremely significant for educational practices, because the ability to self-regulate has been shown to be a key predictor of academic performance.</p>

            <p>Gibson adds: 'Playful behaviour is also an important indicator of healthy social and emotional development. In my previous research, I investigated how observing children at play can give us important clues about their well-being and can even be useful in the diagnosis of neurodevelopmental disorders like autism.'</p>

            <p>Whitebread's recent research has involved developing a play-based approach to supporting children's writing. 'Many primary school children find writing difficult, but we showed in a previous study that a playful stimulus was far more effective than an instructional one.' Children wrote longer and better-structured stories when they first played with dolls representing characters in the story. In the latest study, children first created their story with Lego*, with similar results. 'Many teachers commented that they had always previously had children saying they didn't know what to write about. With the Lego building, however, not a single child said this through the whole year of the project.'</p>

            <p>Whitebread, who directs PEDAL, trained as a primary school teacher in the early 1970s, when, as he describes, 'the teaching of young children was largely a quiet backwater, untroubled by any serious intellectual debate or controversy.' Now, the landscape is very different, with hotly debated topics such as school starting age.</p>

            <p>'Somehow the importance of play has been lost in recent decades. It's regarded as something trivial, or even as something negative that contrasts with "work". Let's not lose sight of its benefits, and the fundamental contributions it makes to human achievements in the arts, sciences and technology. Let's make sure children have a rich diet of play experiences.'</p>
            <p style="font-size: 0.8em; margin-top: 20px;">* Lego: coloured plastic building blocks and other pieces that can be joined together</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">The growth of bike-sharing schemes around the world</h3>
            <p style="text-align:center; font-style:italic;">How Dutch engineer Luud Schimmelpennink helped to devise urban bike-sharing schemes</p>

            <p><strong>A</strong> The original idea for an urban bike-sharing scheme dates back to a summer's day in Amsterdam in 1965. Provo, the organisation that came up with the idea, was a group of Dutch activists who wanted to change society. They believed the scheme, which was known as the Witte Fietsenplan, was an answer to the perceived threats of air pollution and consumerism. In the centre of Amsterdam, they painted a small number of used bikes white. They also distributed leaflets describing the dangers of cars and inviting people to use the white bikes. The bikes were then left unlocked at various locations around the city, to be used by anyone in need of transport.</p>

            <p><strong>B</strong> Luud Schimmelpennink, a Dutch industrial engineer who still lives and cycles in Amsterdam, was heavily involved in the original scheme. He recalls how the scheme succeeded in attracting a great deal of attention - particularly when it came to publicising Provo's aims - but struggled to get off the ground. The police were opposed to Provo's initiatives and almost as soon as the white bikes were distributed around the city, they removed them. However, for Schimmelpennink and for bike-sharing schemes in general, this was just the beginning. 'The first Witte Fietsenplan was just a symbolic thing,' he says. 'We painted a few bikes white, that was all. Things got more serious when I became a member of the Amsterdam city council two years later.'</p>

            <p><strong>C</strong> Schimmelpennink seized this opportunity to present a more elaborate Witte Fietsenplan to the city council. 'My idea was that the municipality of Amsterdam would distribute 10,000 white bikes over the city, for everyone to use,' he explains. 'I made serious calculations. It turned out that a white bicycle - per person, per kilometre - would cost the municipality only 10% of what it contributed to public transport per person per kilometre.' Nevertheless, the council unanimously rejected the plan. 'They said that the bicycle belongs to the past. They saw a glorious future for the car,' says Schimmelpennink. But he was not in the least discouraged.</p>

            <p><strong>D</strong> Schimmelpennink never stopped believing in bike-sharing, and in the mid-90s, two Danes asked for his help to set up a system in Copenhagen. The result was the world's first large-scale bike-share programme. It worked on a deposit: 'You dropped a coin in the bike and when you returned it, you got your money back.' After setting up the Danish system, Schimmelpennink decided to try his luck again in the Netherlands - and this time he succeeded in arousing the interest of the Dutch Ministry of Transport. 'Times had changed,' he recalls. 'People had become more environmentally conscious, and the Danish experiment had proved that bike-sharing was a real possibility.' A new Witte Fietsenplan was launched in 1999 in Amsterdam. However, riding a white bike was no longer free; it cost one guilder per trip and payment was made with a chip card developed by the Dutch bank Postbank. Schimmelpennink designed conspicuous, sturdy white bikes locked in special racks which could be opened with the chip card - the plan started with 250 bikes, distributed over five stations.</p>

            <p><strong>E</strong> Theo Molenaar, who was a system designer for the project, worked alongside Schimmelpennink. 'I remember when we were testing the bike racks, he announced that he had already designed better ones. But of course, we had to go through with the ones we had.' The system, however, was prone to vandalism and theft. 'After every weekend there would always be a couple of bikes missing,' Molenaar says. 'I really have no idea what people did with them, because they could instantly be recognised as white bikes.' But the biggest blow came when Postbank decided to abolish the chip card, because it wasn't profitable. 'That chip card was pivotal to the system,' Molenaar says. 'To continue the project we would have needed to set up another system, but the business partner had lost interest.'</p>

            <p><strong>F</strong> Schimmelpennink was disappointed, but - characteristically - not for long. In 2002 he got a call from the French advertising corporation JC Decaux, who wanted to set up his bike-sharing scheme in Vienna. 'That went really well. After Vienna, they set up a system in Lyon. Then in 2007, Paris followed. That was a decisive moment in the history of bike-sharing.' The huge and unexpected success of the Parisian bike-sharing programme, which now boasts more than 20,000 bicycles, inspired cities all over the world to set up their own schemes, all modelled on Schimmelpennink's. 'It's wonderful that this happened,' he says. 'But financially I didn't really benefit from it, because I never filed for a patent.'</p>

            <p><strong>G</strong> In Amsterdam today, 38% of all trips are made by bike and, along with Copenhagen, it is regarded as one of the two most cycle-friendly capitals in the world - but the city never got another Witte Fietsenplan. Molenaar believes this may be because everybody in Amsterdam already has a bike. Schimmelpennink, however, cannot see that this changes Amsterdam's need for a bike-sharing scheme. 'People who travel on the underground don't carry their bikes around. But often they need additional transport to reach their final destination.' Although he thinks it is strange that a city like Amsterdam does not have a successful bike-sharing scheme, he is optimistic about the future. 'In the '60s we didn't stand a chance because people were prepared to give their lives to keep cars in the city. But that mentality has totally changed. Today everybody longs for cities that are not dominated by cars.'</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            <h3 style="text-align: center;">Motivational factors and the hospitality industry</h3>

            <p>A critical ingredient in the success of hotels is developing and maintaining superior performance from their employees. How is that accomplished? What Human Resource Management (HRM) practices should organizations invest in to acquire and retain great employees?</p>

            <p>Some hotels aim to provide superior working conditions for their employees. The idea originated from workplaces - usually in the non-service sector - that emphasized fun and enjoyment as part of work-life balance. By contrast, the service sector, and more specifically hotels, has traditionally not extended these practices to address basic employee needs, such as good working conditions.</p>

            <p>Pfeffer (1994) emphasizes that in order to succeed in a global business environment, organizations must make investment in Human Resource Management (HRM) to allow them to acquire employees who possess better skills and capabilities than their competitors. This investment will be to their competitive advantage. Despite this recognition of the importance of employee development, the hospitality industry has historically been dominated by underdeveloped HR practices (Lucas, 2002).</p>

            <p>Lucas also points out that 'the substance of HRM practices does not appear to be designed to foster constructive relations with employees or to represent a managerial approach that enables developing and drawing out the full potential of people, even though employees may be broadly satisfied with many aspects of their work' (Lucas, 2002). In addition, or maybe as a result, high employee turnover has been a recurring problem throughout the hospitality industry. Among the many cited reasons are low compensation, inadequate benefits, poor working conditions and compromised employee morale and attitudes (Maroudas et al., 2008).</p>

            <p>Ng and Sorensen (2008) demonstrated that when managers provide recognition to employees, motivate employees to work together, and remove obstacles preventing effective performance, employees feel more obligated to stay with the company. This was succinctly summarized by Michel et al. (2013): '[P]roviding support to employees gives them the confidence to perform their jobs better and the motivation to stay with the organization.' Hospitality organizations can therefore enhance employee motivation and retention through the development and improvement of their working conditions. These conditions are inherently linked to the working environment.</p>

            <p>While it seems likely that employees' reactions to their job characteristics could be affected by a predisposition to view their work environment negatively, no evidence exists to support this hypothesis (Spector et al., 2000). However, given the opportunity, many people will find something to complain about in relation to their workplace (Poulston, 2009). There is a strong link between the perceptions of employees and particular factors of their work environment that are separate from the work itself, including company policies, salary and vacations.</p>

            <p>Such conditions are particularly troubling for the luxury hotel market, where high-quality service, requiring a sophisticated approach to HRM, is recognized as a critical source of competitive advantage (Maroudas et al., 2008). In a real sense, the services of hotel employees represent their industry (Schneider and Bowen, 1993). This representation has commonly been limited to guest experiences. This suggests that there has been a dichotomy between the guest environment provided in luxury hotels and the working conditions of their employees.</p>

            <p>It is therefore essential for hotel management to develop HRM practices that enable them to inspire and retain competent employees. This requires an understanding of what motivates employees at different levels of management and different stages of their careers (Enz and Siguaw, 2000). This implies that it is beneficial for hotel managers to understand what practices are most favorable to increase employee satisfaction and retention.</p>

            <p>Herzberg (1966) proposes that people have two major types of needs, the first being extrinsic motivation factors relating to the context in which work is performed, rather than the work itself. These include working conditions and job security. When these factors are unfavorable, job dissatisfaction may result. Significantly, though, just fulfilling these needs does not result in satisfaction, but only in the reduction of dissatisfaction (Maroudas et al., 2008).</p>

            <p>Employees also have intrinsic motivation needs or motivators, which include such factors as achievement and recognition. Unlike extrinsic factors, motivator factors may ideally result in job satisfaction (Maroudas et al., 2008). Herzberg's (1966) theory discusses the need for a 'balance' of these two types of needs.</p>

            <p>The impact of fun as a motivating factor at work has also been explored. For example, Tews, Michel and Stafford (2013) conducted a study focusing on staff from a chain of themed restaurants in the United States. It was found that fun activities had a favorable impact on performance and manager support for fun had a favorable impact in reducing turnover. Their findings support the view that fun may indeed have a beneficial effect, but the framing of that fun must be carefully aligned with both organizational goals and employee characteristics. 'Managers must learn how to achieve the delicate balance of allowing employees the freedom to enjoy themselves at work while simultaneously maintaining high levels of performance' (Tews et al., 2013).</p>

            <p>Deery (2008) has recommended several actions that can be adopted at the organizational level to retain good staff as well as assist in balancing work and family life. Those particularly appropriate to the hospitality industry include allowing adequate breaks during the working day, staff functions that involve families, and providing health and well-being opportunities.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS (Notes) ---
        {
          type: "gap",
          title: "Questions 1-8",
          instruction: "Complete the notes below. <strong>Choose ONE WORD ONLY</strong> from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; font-family: 'Segoe UI', sans-serif;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Children's play</h3>
                <p><strong>Uses of children's play</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                    <li>building a 'magical kingdom' may help develop <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"></li>
                    <li>board games involve <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2"> and turn-taking</li>
                </ul>
                
                <p><strong>Recent changes affecting children's play</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                    <li>populations of <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"> have grown</li>
                    <li>opportunities for free play are limited due to
                        <ul style="list-style-type: circle; margin-left: 20px;">
                            <li>fear of <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"></li>
                            <li>fear of <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"></li>
                            <li>increased <span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"> in schools</li>
                        </ul>
                    </li>
                </ul>
                
                <p><strong>International policies on children's play</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                    <li>it is difficult to find <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"> to support new policies</li>
                    <li>research needs to study the impact of play on the rest of the child's <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8"></li>
                </ul>
            </div>
          `,
          items: [
            { qNum: 1, answer: "creativity" },
            { qNum: 2, answer: "rules" },
            { qNum: 3, answer: "cities" },
            { qNum: 4, answer: ["traffic", "crime"] }, // Key allows traffic or crime for 4/5
            { qNum: 5, answer: ["crime", "traffic"] },
            { qNum: 6, answer: "competition" },
            { qNum: 7, answer: "evidence" },
            { qNum: 8, answer: "life" }
          ]
        },
        // --- PASSAGE 1 QUESTIONS (TFNG) ---
        {
          type: "tfng",
          title: "Questions 9-13",
          instruction: "Do the following statements agree with the information given in Reading Passage 1?",
          items: [
            { qNum: 9, text: "Children with good self-control are known to be likely to do well at school later on.", answer: "TRUE" },
            { qNum: 10, text: "The way a child plays may provide information about possible medical problems.", answer: "TRUE" },
            { qNum: 11, text: "Playing with dolls was found to benefit girls' writing more than boys' writing.", answer: "NOT GIVEN" },
            { qNum: 12, text: "Children had problems thinking up ideas when they first created the story with Lego.", answer: "FALSE" },
            { qNum: 13, text: "People nowadays regard children's play as less significant than they did in the past.", answer: "TRUE" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          type: "matching_info",
          title: "Questions 14-18",
          "instruction": "Reading Passage 2 has seven sections, <strong>A-G</strong>. Which section contains the following information?<br><br><strong>NB</strong> <em>You may use any letter more than once.</em>",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          items: [
            { qNum: 14, text: "a description of how people misused a bike-sharing scheme", answer: "E" },
            { qNum: 15, text: "an explanation of why a proposed bike-sharing scheme was turned down", answer: "C" },
            { qNum: 16, text: "a reference to a person being unable to profit from their work", answer: "F" },
            { qNum: 17, text: "an explanation of the potential savings a bike-sharing scheme would bring", answer: "C" },
            { qNum: 18, text: "a reference to the problems a bike-sharing scheme was intended to solve", answer: "A" }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 19-20",
          instruction: "<strong>Choose TWO letters, A-E.</strong>",
          stem: "Which TWO of the following statements are made in the text about the Amsterdam bike-sharing scheme of 1999?",
          options: [
            "A. It was initially opposed by a government department.",
            "B. It failed when a partner in the scheme withdrew support.",
            "C. It aimed to be more successful than the Copenhagen scheme.",
            "D. It was made possible by a change in people's attitudes.",
            "E. It attracted interest from a range of bike designers."
          ],
          items: [
            { qNums: [19, 20], answer: ["B", "D"] }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 21-22",
          instruction: "<strong>Choose TWO letters, A-E.</strong>",
          stem: "Which TWO of the following statements are made in the text about Amsterdam today?",
          options: [
            "A. The majority of residents would like to prevent all cars from entering the city.",
            "B. There is little likelihood of the city having another bike-sharing scheme.",
            "C. More trips in the city are made by bike than by any other form of transport.",
            "D. A bike-sharing scheme would benefit residents who use public transport.",
            "E. The city has a reputation as a place that welcomes cyclists."
          ],
          items: [
            { qNums: [21, 22], answer: ["D", "E"] }
          ]
        },
        {
          type: "gap",
          title: "Questions 23-26",
          instruction: "Complete the summary below. <strong>Choose ONE WORD ONLY</strong> from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <h4 style="text-align:center; color:#002554;">The first urban bike-sharing scheme</h4>
                <p style="line-height: 1.8;">The first bike-sharing scheme was the idea of the Dutch group Provo. The people who belonged to this group were <span class="q-badge-inline">23</span><input class="gap-input" data-qnum="23">. They were concerned about damage to the environment and about <span class="q-badge-inline">24</span><input class="gap-input" data-qnum="24">, and believed that the bike-sharing scheme would draw attention to these issues. As well as painting some bikes white, they handed out <span class="q-badge-inline">25</span><input class="gap-input" data-qnum="25"> that condemned the use of cars.</p>
                <p style="line-height: 1.8;">However, the scheme was not a great success: almost as quickly as Provo left the bikes around the city, the <span class="q-badge-inline">26</span><input class="gap-input" data-qnum="26"> took them away. According to Schimmelpennink, the scheme was intended to be symbolic. The idea was to get people thinking about the issues.</p>
            </div>
          `,
          items: [
            { qNum: 23, answer: "activists" },
            { qNum: 24, answer: "consumerism" },
            { qNum: 25, answer: "leaflets" },
            { qNum: 26, answer: "police" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          type: "matching",
          title: "Questions 27-31",
          instruction: "Look at the following statements (Questions 27-31) and the list of researchers below.<br><br>Match each statement with the correct researcher, A-F.<br><br><strong>NB</strong> <em>You may use any letter more than once.</em>",          options: [
            "A. Pfeffer",
            "B. Lucas",
            "C. Maroudas et al.",
            "D. Ng and Sorensen",
            "E. Enz and Siguaw",
            "F. Deery"
          ],
          items: [
            { qNum: 27, text: "Hotel managers need to know what would encourage good staff to remain.", answer: "E" },
            { qNum: 28, text: "The actions of managers may make staff feel they shouldn't move to a different employer.", answer: "D" },
            { qNum: 29, text: "Little is done in the hospitality industry to help workers improve their skills.", answer: "B" },
            { qNum: 30, text: "Staff are less likely to change jobs if cooperation is encouraged.", answer: "D" },
            { qNum: 31, text: "Dissatisfaction with pay is not the only reason why hospitality workers change jobs.", answer: "C" }
          ]
        },
        {
          type: "ynng",
          title: "Questions 32-35",
          instruction: "Do the following statements agree with the claims of the writer in Reading Passage 3?",
          items: [
            { qNum: 32, text: "One reason for high staff turnover in the hospitality industry is poor morale.", answer: "YES" },
            { qNum: 33, text: "Research has shown that staff have a tendency to dislike their workplace.", answer: "NO" },
            { qNum: 34, text: "An improvement in working conditions and job security makes staff satisfied with their jobs.", answer: "NO" },
            { qNum: 35, text: "Staff should be allowed to choose when they take breaks during the working day.", answer: "NOT GIVEN" }
          ]
        },
        {
          type: "gap",
          title: "Questions 36-40",
          instruction: "Complete the summary below. <strong>Choose ONE WORD ONLY</strong> from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <h4 style="text-align:center; color:#002554;">Fun at work</h4>
                <p style="line-height: 1.8;">Tews, Michel and Stafford carried out research on staff in an American chain of <span class="q-badge-inline">36</span><input class="gap-input" data-qnum="36">. They discovered that activities designed for staff to have fun improved their <span class="q-badge-inline">37</span><input class="gap-input" data-qnum="37">, and that management involvement led to lower staff <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38">. They also found that the activities needed to fit with both the company's <span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39"> and the <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40"> of the staff. A balance was required between a degree of freedom and maintaining work standards.</p>
            </div>
          `,
          items: [
            { qNum: 36, answer: "restaurants" },
            { qNum: 37, answer: "performance" },
            { qNum: 38, answer: "turnover" },
            { qNum: 39, answer: "goals" },
            { qNum: 40, answer: "characteristics" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 29-30 PDF)
    // ==========================================================================
    writing: {
      task1: {
        title: "WRITING TASK 1",
        // Chú ý: Bạn hãy tạo file test1_task1.jpg trong thư mục /public/images/cam14/ để hiển thị biểu đồ
        image: "https://i.postimg.cc/8cFYKjPf/Screenshot-2026-04-01-174409.png", 
        prompt: `
          You should spend about 20 minutes on this task.

          
          The charts below show the average percentages in typical meals of three types of nutrients, all of which may be unhealthy if eaten too much.
          
          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
          
          Write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          You should spend about 40 minutes on this task.
          
          Write about the following topic:
          
          Some people believe that it is best to accept a bad situation, such as an unsatisfactory job or shortage of money. Others argue that it is better to try and improve such situations.
          
          Discuss both these views and give your own opinion.
          
          Give reasons for your answer and include any relevant examples from your own knowledge or experience.
          
          Write at least 250 words.
        `
      }
    }
  }
};