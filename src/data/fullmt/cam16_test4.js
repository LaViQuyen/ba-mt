// src/data/cam16_test4.js

export const cam16_test4 = {
  id: "cam16-test4",
  category: "full",
  testName: "MOCK TEST 20",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 76 - 81 PDF) - Đáp án trang 127
    // ==========================================================================
    listening: {
      audioSrc: "/audio/mt20.MP3", // Đảm bảo có file mp3 này
      timeLimit: 1760,
      passage: "<h3 style='text-align:center; color:#002554;'>MOCK TEST 20 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-10",
          instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Holiday rental</h3>
                
                <p><strong>Owners' names:</strong> Jack Fitzgerald and Shirley Fitzgerald</p>
                
                <h4 style="color:#002554; margin-bottom: 10px;">Granary Cottage</h4>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>available for week beginning <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"> May</li>
                    <li>cost for the week: £<span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2"></li>
                </ul>

                <h4 style="color:#002554; margin-bottom: 10px;"><span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"> Cottage</h4>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>cost for the week: £480</li>
                    <li>building was originally a <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"></li>
                    <li>walk through doors from living room into a <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"></li>
                    <li>several <span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"> spaces at the front</li>
                    <li>bathroom has a shower</li>
                    <li>central heating and stove that burns <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"></li>
                    <li>views of old <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8"> from living room</li>
                    <li>view of hilltop <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9"> from the bedroom</li>
                </ul>

                <h4 style="color:#002554; margin-bottom: 10px;">Payment</h4>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>deposit: £144</li>
                    <li>deadline for final payment: end of <span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10"></li>
                </ul>
            </div>
          `,
          items: [
            { qNum: 1, answer: "28th" },
            { qNum: 2, answer: "550" },
            { qNum: 3, answer: "Chervil" },
            { qNum: 4, answer: "garage" },
            { qNum: 5, answer: "garden" },
            { qNum: 6, answer: "parking" },
            { qNum: 7, answer: "wood" },
            { qNum: 8, answer: "bridge" },
            { qNum: 9, answer: "monument" },
            { qNum: 10, answer: "March" }
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
              text: "A survey found people's main concern about traffic in the area was",
              options: [
                "A cuts to public transport.", 
                "B poor maintenance of roads.", 
                "C changes in the type of traffic."
              ],
              answer: "C"
            },
            {
              qNum: 12,
              text: "Which change will shortly be made to the cycle path next to the river?",
              options: [
                "A It will be widened.", 
                "B It will be extended.", 
                "C It will be resurfaced."
              ],
              answer: "A"
            },
            {
              qNum: 13,
              text: "Plans for a pedestrian crossing have been postponed because",
              options: [
                "A the Post Office has moved.", 
                "B the proposed location is unsafe.", 
                "C funding is not available at present."
              ],
              answer: "B"
            },
            {
              qNum: 14,
              text: "On Station Road, notices have been erected",
              options: [
                "A telling cyclists not to leave their bikes outside the station ticket office.", 
                "B asking motorists to switch off engines when waiting at the level crossing.", 
                "C warning pedestrians to leave enough time when crossing the railway line."
              ],
              answer: "B"
            }
          ]
        },
        {
          type: "labelling_grid",
          title: "Questions 15-20",
          instruction: "Label the map below. Write the correct letter, A-I, next to Questions 15-20.",
          image: "https://i.postimg.cc/xT8Xrhm3/Screenshot-2026-02-28-193929.png",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
          items: [
            { qNum: 15, text: "New car park", answer: "C" },
            { qNum: 16, text: "New cricket pitch", answer: "F" },
            { qNum: 17, text: "Children's playground", answer: "A" },
            { qNum: 18, text: "Skateboard ramp", answer: "I" },
            { qNum: 19, text: "Pavilion", answer: "E" },
            { qNum: 20, text: "Notice board", answer: "H" }
          ]
        },

        // --- PART 3 ---
        {
          type: "mcq_multi",
          title: "Part 3: Questions 21-24",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO benefits of city bike-sharing schemes do the students agree are the most important?",
          options: [
            "A. reducing noise pollution",
            "B. reducing traffic congestion",
            "C. improving air quality",
            "D. making cycling affordable",
            "E. encouraging health and fitness"
          ],
          items: [
            { qNums: [21, 22], answer: ["B", "C"] } // Đáp án: B, C theo thứ tự bất kỳ
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 23-24",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO things do the students think are necessary for successful bike-sharing schemes?",
          options: [
            "A. Bikes should have a GPS system.",
            "B. The app should be easy to use.",
            "C. Public awareness should be raised.",
            "D. Only one scheme should be available.",
            "E. There should be a large network of cycle lanes."
          ],
          items: [
            { qNums: [23, 24], answer: ["B", "C"] } // Đáp án: B, C theo thứ tự bất kỳ
          ]
        },
        {
          type: "matching",
          title: "Questions 25-30",
          instruction: "What is the speakers' opinion of the bike-sharing schemes in each of the following cities? Choose SIX answers from the box.",
          options: [
            "A. They agree it has been disappointing.",
            "B. They think it should be cheaper.",
            "C. They are surprised it has been so successful.",
            "D. They agree that more investment is required.",
            "E. They think the system has been well designed.",
            "F. They disagree about the reasons for its success.",
            "G. They think it has expanded too quickly."
          ],
          items: [
            { qNum: 25, text: "Amsterdam", answer: "C" },
            { qNum: 26, text: "Dublin", answer: "F" },
            { qNum: 27, text: "London", answer: "D" },
            { qNum: 28, text: "Buenos Aires", answer: "E" },
            { qNum: 29, text: "New York", answer: "B" },
            { qNum: 30, text: "Sydney", answer: "A" }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-40",
          instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">THE EXTINCTION OF THE DODO BIRD</h3>
              <p>The dodo was a large flightless bird which used to inhabit the island of Mauritius.</p>
              
              <h4 style="color:#002554;">History</h4>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>1507 - Portuguese ships transporting <span class="q-badge-inline">31</span><input class="gap-input" data-qnum="31"> stopped at the island to collect food and water.</li>
                <li>1638 - The Dutch established a <span class="q-badge-inline">32</span><input class="gap-input" data-qnum="32"> on the island.</li>
                <li>They killed the dodo birds for their meat.</li>
                <li>The last one was killed in 1681.</li>
              </ul>

              <h4 style="color:#002554;">Description</h4>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>The only record we have is written descriptions and pictures (possibly unreliable).</li>
                <li>A Dutch painting suggests the dodo was very <span class="q-badge-inline">33</span><input class="gap-input" data-qnum="33">.</li>
                <li>The only remaining soft tissue is a dried <span class="q-badge-inline">34</span><input class="gap-input" data-qnum="34">.</li>
                <li>Recent studies of a dodo skeleton suggest the birds were capable of rapid <span class="q-badge-inline">35</span><input class="gap-input" data-qnum="35">.</li>
                <li>It's thought they were able to use their small wings to maintain <span class="q-badge-inline">36</span><input class="gap-input" data-qnum="36">.</li>
                <li>Their <span class="q-badge-inline">37</span><input class="gap-input" data-qnum="37"> was of average size.</li>
                <li>Their sense of <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38"> enabled them to find food.</li>
              </ul>

              <h4 style="color:#002554;">Reasons for extinction</h4>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>Hunting was probably not the main cause.</li>
                <li>Sailors brought dogs and monkeys.</li>
                <li><span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39"> also escaped onto the island and ate the birds' eggs.</li>
                <li>The arrival of farming meant the <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40"> was destroyed.</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: ["spice", "spices"] },
            { qNum: 32, answer: ["colony", "settlement"] },
            { qNum: 33, answer: "fat" },
            { qNum: 34, answer: "head" },
            { qNum: 35, answer: "movement" },
            { qNum: 36, answer: ["balance", "balancing"] },
            { qNum: 37, answer: "brain" },
            { qNum: 38, answer: "smell" },
            { qNum: 39, answer: "rats" },
            { qNum: 40, answer: "forest" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 82 - 94 PDF) - Đáp án trang 128
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">Roman tunnels</h3>
            <p style="text-align: center; font-style: italic;">The Romans, who once controlled areas of Europe, North Africa and Asia Minor, adopted the construction techniques of other civilizations to build tunnels in their territories</p>
            
            <p>The Persians, who lived in present-day Iran, were one of the first civilizations to build tunnels that provided a reliable supply of water to human settlements in dry areas. In the early first millennium BCE, they introduced the qanat method of tunnel construction, which consisted of placing posts over a hill in a straight line, to ensure that the tunnel kept to its route, and then digging vertical shafts down into the ground at regular intervals. Underground, workers removed the earth from between the ends of the shafts, creating a tunnel. The excavated soil was taken up to the surface using the shafts, which also provided ventilation during the work. Once the tunnel was completed, it allowed water to flow from the top of a hillside down towards a canal, which supplied water for human use. Remarkably, some qanats built by the Persians 2,700 years ago are still in use today.</p>

            <p>They later passed on their knowledge to the Romans, who also used the qanat method to construct water-supply tunnels for agriculture. Roman qanat tunnels were constructed with vertical shafts dug at intervals of between 30 and 60 meters. The shafts were equipped with handholds and footholds to help those climbing in and out of them and were covered with a wooden or stone lid. To ensure that the shafts were vertical, Romans hung a plumb line from a rod placed across the top of each shaft and made sure that the weight at the end of it hung in the center of the shaft. Plumb lines were also used to measure the depth of the shaft and to determine the slope of the tunnel. The 5.6-kilometer-long Claudius tunnel, built in 41 CE to drain the Fucine Lake in central Italy, had shafts that were up to 122 meters deep, took 11 years to build and involved approximately 30,000 workers.</p>

            <p>By the 6th century BCE, a second method of tunnel construction appeared called the counter-excavation method, in which the tunnel was constructed from both ends. It was used to cut through high mountains when the qanat method was not a practical alternative. This method required greater planning and advanced knowledge of surveying, mathematics and geometry as both ends of a tunnel had to meet correctly at the center of the mountain. Adjustments to the direction of the tunnel also had to be made whenever builders encountered geological problems or when it deviated from its set path. They constantly checked the tunnel's advancing direction, for example, by looking back at the light that penetrated through the tunnel mouth, and made corrections whenever necessary. Large deviations could happen, and they could result in one end of the tunnel not being usable. An inscription written on the side of a 428-meter tunnel, built by the Romans as part of the Saldae aqueduct system in modern-day Algeria, describes how the two teams of builders missed each other in the mountain and how the later construction of a lateral link between both corridors corrected the initial error.</p>

            <p>The Romans dug tunnels for their roads using the counter-excavation method, whenever they encountered obstacles such as hills or mountains that were too high for roads to pass over. An example is the 37-meter-long, 6-meter-high, Furlo Pass Tunnel built in Italy in 69-79 CE. Remarkably, a modern road still uses this tunnel today. Tunnels were also built for mineral extraction. Miners would locate a mineral vein and then pursue it with shafts and tunnels underground. Traces of such tunnels used to mine gold can still be found at the Dolaucothi mines in Wales. When the sole purpose of a tunnel was mineral extraction, construction required less planning, as the tunnel route was determined by the mineral vein.</p>

            <p>Roman tunnel projects were carefully planned and carried out. The length of time it took to construct a tunnel depended on the method being used and the type of rock being excavated. The qanat construction method was usually faster than the counter-excavation method as it was more straightforward. This was because the mountain could be excavated not only from the tunnel mouths but also from shafts. The type of rock could also influence construction times. When the rock was hard, the Romans employed a technique called fire quenching which consisted of heating the rock with fire, and then suddenly cooling it with cold water so that it would crack. Progress through hard rock could be very slow, and it was not uncommon for tunnels to take years, if not decades, to be built. Construction marks left on a Roman tunnel in Bologna show that the rate of advance through solid rock was 30 centimeters per day. In contrast, the rate of advance of the Claudius tunnel can be calculated at 1.4 meters per day. Most tunnels had inscriptions showing the names of patrons who ordered construction and sometimes the name of the architect. For example, the 1.4-kilometer Çevlik tunnel in Turkey, built to divert the floodwater threatening the harbor of the ancient city of Seleuceia Pieria, had inscriptions on the entrance, still visible today, that also indicate that the tunnel was started in 69 CE and was completed in 81 CE.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">Changes in reading habits</h3>
            <p style="text-align:center; font-style:italic;">What are the implications of the way we read today?</p>

            <p>Look around on your next plane trip. The iPad is the new pacifier for babies and toddlers. Younger school-aged children read stories on smartphones; older kids don't read at all, but hunch over video games. Parents and other passengers read on tablets or skim a flotilla of email and news feeds. Unbeknown to most of us, an invisible, game-changing transformation links everyone in this picture: the neuronal circuit that underlies the brain's ability to read is subtly, rapidly changing and this has implications for everyone from the pre-reading toddler to the expert adult.</p>

            <p>As work in neurosciences indicates, the acquisition of literacy necessitated a new circuit in our species' brain more than 6,000 years ago. That circuit evolved from a very simple mechanism for decoding basic information, like the number of goats in one's herd, to the present, highly elaborated reading brain. My research depicts how the present reading brain enables the development of some of our most important intellectual and affective processes: internalized knowledge, analogical reasoning, and inference; perspective-taking and empathy; critical analysis and the generation of insight. Research surfacing in many parts of the world now cautions that each of these essential 'deep reading' processes may be under threat as we move into digital-based modes of reading.</p>

            <p>This is not a simple, binary issue of print versus digital reading and technological innovation. As MIT scholar Sherry Turkle has written, we do not err as a society when we innovate but when we ignore what we disrupt or diminish while innovating. In this hinge moment between print and digital cultures, society needs to confront what is diminishing in the expert reading circuit, what our children and older students are not developing, and what we can do about it.</p>

            <p>We know from research that the reading circuit is not given to human beings through a genetic blueprint like vision or language; it needs an environment to develop. Further, it will adapt to that environment's requirements - from different writing systems to the characteristics of whatever medium is used. If the dominant medium advantages processes that are fast, multi-task oriented and well-suited for large volumes of information, like the current digital medium, so will the reading circuit. As UCLA psychologist Patricia Greenfield writes, the result is that less attention and time will be allocated to slower, time-demanding deep reading processes.</p>

            <p>Increasing reports from educators and from researchers in psychology and the humanities bear this out. English literature scholar and teacher Mark Edmundson describes how many college students actively avoid the classic literature of the 19th and 20th centuries in favour of something simpler as they no longer have the patience to read longer, denser, more difficult texts. We should be less concerned with students' 'cognitive impatience', however, than by what may underlie it: the potential inability of large numbers of students to read with a level of critical analysis sufficient to comprehend the complexity of thought and argument found in more demanding texts.</p>

            <p>Multiple studies show that digital screen use may be causing a variety of troubling downstream effects on reading comprehension in older high school and college students. In Stavanger, Norway, psychologist Anne Mangen and her colleagues studied how high school students comprehend the same material in different mediums. Mangen's group asked subjects questions about a short story whose plot had universal student appeal; half of the students read the story on a tablet, the other half in paperback. Results indicated that students who read on print were superior in their comprehension to screen-reading peers, particularly in their ability to sequence detail and reconstruct the plot in chronological order.</p>

            <p>Ziming Liu from San Jose State University has conducted a series of studies which indicate that the 'new norm' in reading is skimming, involving word-spotting and browsing through the text. Many readers now use a pattern when reading in which they sample the first line and then word-spot through the rest of the text. When the reading brain skims like this, it reduces time allocated to deep reading processes. In other words, we don't have time to grasp complexity, to understand another's feelings, to perceive beauty, and to create thoughts of the reader's own.</p>

            <p>The possibility that critical analysis, empathy and other deep reading processes could become the unintended 'collateral damage' of our digital culture is not a straightforward binary issue about print versus digital reading. It is about how we all have begun to read on various mediums and how that changes not only what we read, but also the purposes for which we read. Nor is it only about the young. The subtle atrophy of critical analysis and empathy affects us all equally. It affects our ability to navigate a constant bombardment of information. It incentivizes a retreat to the most familiar stores of unchecked information, which require and receive no analysis, leaving us susceptible to false information and irrational ideas.</p>

            <p>There's an old rule in neuroscience that does not alter with age: use it or lose it. It is a very hopeful principle when applied to critical thought in the reading brain because it implies choice. The story of the changing reading brain is hardly finished. We possess both the science and the technology to identify and redress the changes in how we read before they become entrenched. If we work to understand exactly what we will lose, alongside the extraordinary new capacities that the digital world has brought us, there is as much reason for excitement as caution.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            <h3 style="text-align: center;">Attitudes towards Artificial Intelligence</h3>

            <p><strong>A</strong> Artificial intelligence (AI) can already predict the future. Police forces are using it to map when and where crime is likely to occur. Doctors can use it to predict when a patient is most likely to have a heart attack or stroke. Researchers are even trying to give AI imagination so it can plan for unexpected consequences.</p>
            <p>Many decisions in our lives require a good forecast, and AI is almost always better at forecasting than we are. Yet for all these technological advances, we still seem to deeply lack confidence in AI predictions. Recent cases show that people don't like relying on AI and prefer to trust human experts, even if these experts are wrong.</p>
            <p>If we want AI to really benefit people, we need to find a way to get people to trust it. To do that, we need to understand why people are so reluctant to trust AI in the first place.</p>

            <p><strong>B</strong> Take the case of Watson for Oncology, one of technology giant IBM's supercomputer programs. Their attempt to promote this program to cancer doctors was a PR disaster. The AI promised to deliver top-quality recommendations on the treatment of 12 cancers that accounted for 80% of the world's cases. But when doctors first interacted with Watson, they found themselves in a rather difficult situation. On the one hand, if Watson provided guidance about a treatment that coincided with their own opinions, physicians did not see much point in Watson's recommendations. The supercomputer was simply telling them what they already knew, and these recommendations did not change the actual treatment.</p>
            <p>On the other hand, if Watson generated a recommendation that contradicted the experts' opinion, doctors would typically conclude that Watson wasn't competent. And the machine wouldn't be able to explain why its treatment was plausible because its machine-learning algorithms were simply too complex to be fully understood by humans. Consequently, this has caused even more suspicion and disbelief, leading many doctors to ignore the seemingly outlandish AI recommendations and stick to their own expertise.</p>

            <p><strong>C</strong> This is just one example of people's lack of confidence in AI and their reluctance to accept what AI has to offer. Trust in other people is often based on our understanding of how others think and having experience of their reliability. This helps create a psychological feeling of safety. AI, on the other hand, is still fairly new and unfamiliar to most people. Even if it can be technically explained (and that's not always the case), AI's decision-making process is usually too difficult for most people to comprehend. And interacting with something we don't understand can cause anxiety and give us a sense that we're losing control.</p>
            <p>Many people are also simply not familiar with many instances of AI actually working, because it often happens in the background. Instead, they are acutely aware of instances where AI goes wrong. Embarrassing AI failures receive a disproportionate amount of media attention, emphasising the message that we cannot rely on technology. Machine learning is not foolproof, in part because the humans who design it aren't.</p>

            <p><strong>D</strong> Feelings about AI run deep. In a recent experiment, people from a range of backgrounds were given various sci-fi films about AI to watch and then asked questions about automation in everyday life. It was found that, regardless of whether the film they watched depicted AI in a positive or negative light, simply watching a cinematic vision of our technological future polarised the participants' attitudes. Optimists became more extreme in their enthusiasm for AI and sceptics became even more guarded.</p>
            <p>This suggests people use relevant evidence about AI in a biased manner to support their existing attitudes, a deep-rooted human tendency known as "confirmation bias". As AI is represented more and more in media and entertainment, it could lead to a society split between those who benefit from AI and those who reject it. More pertinently, refusing to accept the advantages offered by AI could place a large group of people at a serious disadvantage.</p>

            <p><strong>E</strong> Fortunately, we already have some ideas about how to improve trust in AI. Simply having previous experience with AI can significantly improve people's opinions about the technology, as was found in the study mentioned above. Evidence also suggests the more you use other technologies such as the internet, the more you trust them.</p>
            <p>Another solution may be to reveal more about the algorithms which AI uses and the purposes they serve. Several high-profile social media companies and online marketplaces already release transparency reports about government requests and surveillance disclosures. A similar practice for AI could help people have a better understanding of the way algorithmic decisions are made.</p>

            <p><strong>F</strong> Research suggests that allowing people some control over AI decision-making could also improve trust and enable AI to learn from human experience. For example, one study showed that when people were allowed the freedom to slightly modify an algorithm, they felt more satisfied with its decisions, more likely to believe it was superior and more likely to use it in the future.</p>
            <p>We don't need to understand the intricate inner workings of AI systems, but if people are given a degree of responsibility for how they are implemented, they will be more willing to accept AI into their lives.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS (Diagram Labelling) ---
        {
          type: "gap",
          title: "Questions 1-6",
          instruction: "Label the diagrams below. Choose ONE WORD ONLY from the passage for each answer.",
          htmlContent: `
            <div style="background:#fff; padding:15px; border:1px solid #ccc; text-align: center; border-radius: 8px;">
                <h4 style="color:#002554;">The Persian Qanat Method</h4>
                <img src="https://i.postimg.cc/K8Lvx28C/Screenshot-2026-02-28-194044.png" alt="Qanat diagram" style="width: 100%; max-width: 400px; height: auto; max-height: none; border: 1px solid #eee; border-radius: 4px; margin-bottom: 20px;" />
                
                <div style="text-align: left; padding: 10px; background: #f9f9f9; border-radius: 4px;">
                    <p><strong>1.</strong> <input class="gap-input" data-qnum="1" /> to direct the tunnelling</p>
                    <p><strong>2.</strong> water runs into a <input class="gap-input" data-qnum="2" /> used by local people</p>
                    <p><strong>3.</strong> vertical shafts to remove earth and for <input class="gap-input" data-qnum="3" /></p>
                    <p><strong>4.</strong> <input class="gap-input" data-qnum="4" /> made of wood or stone</p>
                    <p><strong>5.</strong> <input class="gap-input" data-qnum="5" /> attached to the plumb line</p>
                    <p><strong>6.</strong> handholds and footholds used for <input class="gap-input" data-qnum="6" /></p>
                </div>
            </div>
          `,
          items: [
            { qNum: 1, answer: "posts" },
            { qNum: 2, answer: "canal" },
            { qNum: 3, answer: "ventilation" },
            { qNum: 4, answer: "lid" },
            { qNum: 5, answer: "weight" },
            { qNum: 6, answer: "climbing" }
          ]
        },
        // --- PASSAGE 1 QUESTIONS (TFNG) ---
        {
          type: "tfng",
          title: "Questions 7-10",
          instruction: "Do the following statements agree with the information given in Reading Passage 1?",
          items: [
            { qNum: 7, text: "The counter-excavation method completely replaced the qanat method in the 6th century BCE.", answer: "FALSE" },
            { qNum: 8, text: "Only experienced builders were employed to construct a tunnel using the counter-excavation method.", answer: "NOT GIVEN" },
            { qNum: 9, text: "The information about a problem that occurred during the construction of the Saldae aqueduct system was found in an ancient book.", answer: "FALSE" },
            { qNum: 10, text: "The mistake made by the builders of the Saldae aqueduct system was that the two parts of the tunnel failed to meet.", answer: "TRUE" }
          ]
        },
        // --- PASSAGE 1 QUESTIONS (Short Answer) ---
        {
          type: "gap",
          title: "Questions 11-13",
          instruction: "Answer the questions below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
          htmlContent: `
            <div style="background:#fff; padding:15px; border:1px solid #eee;">
                <p>11. What type of mineral were the Dolaucothi mines in Wales built to extract? <span class="q-badge-inline">11</span><input class="gap-input" data-qnum="11" /></p>
                <p>12. In addition to the patron, whose name might be carved onto a tunnel? <span class="q-badge-inline">12</span><input class="gap-input" data-qnum="12" /></p>
                <p>13. What part of Seleuceia Pieria was the Çevlik tunnel built to protect? <span class="q-badge-inline">13</span><input class="gap-input" data-qnum="13" /></p>
            </div>
          `,
          items: [
            { qNum: 11, answer: "gold" },
            { qNum: 12, answer: ["architect", "the architect", "architect's name"] },
            { qNum: 13, answer: ["harbour", "harbor", "the harbour", "the harbor"] }
          ]
        },

        // --- PASSAGE 2 QUESTIONS (MCQ Single) ---
        {
          type: "mcq_single",
          title: "Questions 14-17",
          instruction: "Choose the correct letter, A, B, C or D.",
          items: [
            {
              qNum: 14,
              text: "What is the writer's main point in the first paragraph?",
              options: [
                "A. Our use of technology is having a hidden effect on us.",
                "B. Technology can be used to help youngsters to read.",
                "C. Travellers should be encouraged to use technology on planes.",
                "D. Playing games is a more popular use of technology than reading."
              ],
              answer: "A"
            },
            {
              qNum: 15,
              text: "What main point does Sherry Turkle make about innovation?",
              options: [
                "A. Technological innovation has led to a reduction in print reading.",
                "B. We should pay attention to what might be lost when innovation occurs.",
                "C. We should encourage more young people to become involved in innovation.",
                "D. There is a difference between developing products and developing ideas."
              ],
              answer: "B"
            },
            {
              qNum: 16,
              text: "What point is the writer making in the fourth paragraph?",
              options: [
                "A. Humans have an inborn ability to read and write.",
                "B. Reading can be done using many different mediums.",
                "C. Writing systems make unexpected demands on the brain.",
                "D. Some brain circuits adjust to whatever is required of them."
              ],
              answer: "D"
            },
            {
              qNum: 17,
              text: "According to Mark Edmundson, the attitude of college students",
              options: [
                "A. has changed the way he teaches.",
                "B. has influenced what they select to read.",
                "C. does not worry him as much as it does others.",
                "D. does not match the views of the general public."
              ],
              answer: "B"
            }
          ]
        },
        // --- PASSAGE 2 QUESTIONS (Summary Dropdown) ---
        {
          type: "gap",
          title: "Questions 18-22",
          instruction: "Complete the summary using the list of words, A-H, below. Choose the correct letter, A-H, for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h4 style="text-align:center; color:#002554;">Studies on digital screen use</h4>
              <p>There have been many studies on digital screen use, showing some <span class="q-badge-inline">18</span><select class="gap-select" data-qnum="18"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select> trends. Psychologist Anne Mangen gave high-school students a short story to read, half using digital and half using print mediums. Her team then used a question-and-answer technique to find out how <span class="q-badge-inline">19</span><select class="gap-select" data-qnum="19"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select> each group's understanding of the plot was. The findings showed a clear pattern in the responses, with those who read screens finding the order of information <span class="q-badge-inline">20</span><select class="gap-select" data-qnum="20"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select> to recall.</p>
              
              <p>Studies by Ziming Liu show that students are tending to read <span class="q-badge-inline">21</span><select class="gap-select" data-qnum="21"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select> words and phrases in a text to save time. This approach, she says, gives the reader a superficial understanding of the <span class="q-badge-inline">22</span><select class="gap-select" data-qnum="22"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option></select> content of material, leaving no time for thought.</p>
              
              <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; background: #fff; font-size: 0.9em;">
                 <strong>Options:</strong><br/>
                 A. fast &nbsp;&nbsp; B. isolated &nbsp;&nbsp; C. emotional &nbsp;&nbsp; D. worrying<br/>
                 E. many &nbsp;&nbsp; F. hard &nbsp;&nbsp; G. combined &nbsp;&nbsp; H. thorough
              </div>
            </div>
          `,
          items: [
            { qNum: 18, answer: "D" },
            { qNum: 19, answer: "H" },
            { qNum: 20, answer: "F" },
            { qNum: 21, answer: "B" },
            { qNum: 22, answer: "C" }
          ]
        },
        // --- PASSAGE 2 QUESTIONS (YNNG) ---
        {
          type: "ynng",
          title: "Questions 23-26",
          instruction: "Do the following statements agree with the views of the writer in Reading Passage 2?",
          items: [
            { qNum: 23, text: "The medium we use to read can affect our choice of reading content.", answer: "YES" },
            { qNum: 24, text: "Some age groups are more likely to lose their complex reading skills than others.", answer: "NO" },
            { qNum: 25, text: "False information has become more widespread in today's digital era.", answer: "NOT GIVEN" },
            { qNum: 26, text: "We still have opportunities to rectify the problems that technology is presenting.", answer: "YES" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS (Matching Headings) ---
        {
          type: "matching_headings",
          title: "Questions 27-32",
          instruction: "Reading Passage 3 has six sections, A-F. Choose the correct heading for each section from the list of headings below.",
          options: [
            "i. An increasing divergence of attitudes towards AI",
            "ii. Reasons why we have more faith in human judgement than in AI",
            "iii. The superiority of AI projections over those made by humans",
            "iv. The process by which AI can help us make good decisions",
            "v. The advantages of involving users in AI processes",
            "vi. Widespread distrust of an AI innovation",
            "vii. Encouraging openness about how AI functions",
            "viii. A surprisingly successful AI application"
          ],
          items: [
            { qNum: 27, text: "Section A", answer: "iii" },
            { qNum: 28, text: "Section B", answer: "vi" },
            { qNum: 29, text: "Section C", answer: "ii" },
            { qNum: 30, text: "Section D", answer: "i" },
            { qNum: 31, text: "Section E", answer: "vii" },
            { qNum: 32, text: "Section F", answer: "v" }
          ]
        },
        // --- PASSAGE 3 QUESTIONS (MCQ) ---
        {
          type: "mcq_single",
          title: "Questions 33-35",
          instruction: "Choose the correct letter, A, B, C or D.",
          items: [
            {
              qNum: 33,
              text: "What is the writer doing in Section A?",
              options: [
                "A. providing a solution to a concern",
                "B. justifying an opinion about an issue",
                "C. highlighting the existence of a problem",
                "D. explaining the reasons for a phenomenon"
              ],
              answer: "C"
            },
            {
              qNum: 34,
              text: "According to Section C, why might some people be reluctant to accept AI?",
              options: [
                "A. They are afraid it will replace humans in decision-making jobs.",
                "B. Its complexity makes them feel that they are at a disadvantage.",
                "C. They would rather wait for the technology to be tested over a period of time.",
                "D. Misunderstandings about how it works make it seem more challenging than it is."
              ],
              answer: "B"
            },
            {
              qNum: 35,
              text: "What does the writer say about the media in Section C of the text?",
              options: [
                "A. It leads the public to be mistrustful of AI.",
                "B. It devotes an excessive amount of attention to AI.",
                "C. Its reports of incidents involving AI are often inaccurate.",
                "D. It gives the impression that AI failures are due to designer error."
              ],
              answer: "A"
            }
          ]
        },
        // --- PASSAGE 3 QUESTIONS (YNNG) ---
        {
          type: "ynng",
          title: "Questions 36-40",
          instruction: "Do the following statements agree with the claims of the writer in Reading Passage 3?",
          items: [
            { qNum: 36, text: "Subjective depictions of AI in sci-fi films make people change their opinions about automation.", answer: "FALSE" },
            { qNum: 37, text: "Portrayals of AI in media and entertainment are likely to become more positive.", answer: "NOT GIVEN" },
            { qNum: 38, text: "Rejection of the possibilities of AI may have a negative effect on many people's lives.", answer: "YES" },
            { qNum: 39, text: "Familiarity with AI has very little impact on people's attitudes to the technology.", answer: "NO" },
            { qNum: 40, text: "AI applications which users are able to modify are more likely to gain consumer approval.", answer: "YES" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 95 - 96 PDF)
    // ==========================================================================
    writing: {
      task1: {
        title: "WRITING TASK 1",
        // Lưu ý: Cắt ảnh từ trang 95 PDF và lưu vào đây
        image: "https://i.postimg.cc/52N6JtRD/Screenshot-2026-02-28-195757.png", 
        prompt: `
          The diagram below shows the process for recycling plastic bottles.

          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

          Write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          In the future all cars, buses and trucks will be driverless. The only people travelling inside these vehicles will be passengers.

          Do you think the advantages of driverless vehicles outweigh the disadvantages?

          Give reasons for your answer and include any relevant examples from your own knowledge or experience.

          Write at least 250 words.
        `
      }
    }
  }
};