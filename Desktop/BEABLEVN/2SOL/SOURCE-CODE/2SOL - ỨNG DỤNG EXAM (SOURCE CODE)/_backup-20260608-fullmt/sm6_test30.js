// src/data/sm6_test30.js

export const sm6_test30 = {
  id: "mt33",
  category: "full",
  testName: "MOCK TEST 33",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING
    // ==========================================================================
    listening: {
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/beablevn-ielts.firebasestorage.app/o/audio%2Fmt33.mp3?alt=media&token=2109d126-40d7-4456-985a-ce0dcd05844d", // Cần bổ sung file audio tương ứng
      timeLimit: 1684,
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 30 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-5",
          instruction: "Complete the sentences below. Write <strong>NO MORE THAN TWO WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; border-radius: 8px; margin-bottom: 20px;">
                <p style="line-height: 1.8;">1. Steven pays for his water according to a <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1">.</p>
                <p style="line-height: 1.8;">2. Seeing his neighbour's <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2"> inspired Steven to change his water supplier.</p>
                <p style="line-height: 1.8;">3. The cost of installing a meter is met by the <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3">.</p>
                <p style="line-height: 1.8;">4. West Water only accepts payment by <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4">.</p>
                <p style="line-height: 1.8;">5. Linda says that Steven will receive the <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5"> of his change in his mail.</p>
            </div>
          `,
          items: [
            { qNum: 1, answer: "fixed bill" },
            { qNum: 2, answer: "statement" },
            { qNum: 3, answer: "council" },
            { qNum: 4, answer: "direct debit" },
            { qNum: 5, answer: "confirmation" }
          ]
        },
        {
          type: "gap",
          title: "Questions 6-10",
          instruction: "Complete the summary below. Write <strong>NO MORE THAN ONE WORD</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border: 1px solid #ddd;">
                <h3 style="text-align:center; color:#2B6830; margin-top:0;">West Water Meeting</h3>
                <p style="line-height: 1.8;">West Water also offered to supply my electricity more cheaply. They said that I would get more (6) <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="q-6"> if I am a water customer as well. Linda has given me a (7) <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7"> that provides me with details of the deal. The actual energy price depends on my (8) <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8"> so I need to tell West Water my electricity consumption from last year.</p>
                <p style="line-height: 1.8;">Linda will post me the forms to sign and I'll send them back. (West Water will pay the return (9) <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9">). West Water will need to put in the meters for the water and electricity, so Linda will call next week to set the (10) <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10"> for installing them.</p>
            </div>
          `,
          items: [
            { qNum: 6, answer: "discount" },
            { qNum: 7, answer: "leaflet" },
            { qNum: 8, answer: "usage" },
            { qNum: 9, answer: "postage" },
            { qNum: 10, answer: "appointment" }
          ]
        },

        // --- PART 2 ---
        {
          type: "gap",
          title: "Part 2: Questions 11-15",
          instruction: "Complete the table below. Write <strong>NO MORE THAN ONE WORD OR A NUMBER</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#fff; margin-bottom: 20px; overflow-x: auto;">
                <table style="width:100%; border-collapse: collapse; min-width: 650px; border: 1px solid #000; font-family: sans-serif; color: #000;">
                    <thead>
                        <tr>
                            <th colspan="3" style="text-align:center; padding: 10px; font-size: 1.1rem; border: 1px solid #000; font-style: italic; font-weight: bold;">Local Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="4" style="padding:10px; border:1px solid #000; vertical-align:top; width:15%;"><u>Supermarkets</u></td>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top; width:25%;">Costcut</td>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top;">10-minute walk away; the (11) <span class="q-badge-inline">11</span><input type="text" class="gap-input" data-qnum="11" id="q-11" style="width: 100px;"> is not so good, but it has the essentials.</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top;">Supershop</td>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top;">Typical large supermarket; large car park; big choice.</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top;">The Late Shop</td>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top;">Just basics + more expensive, but very convenient.</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding:10px; border:1px solid #000; vertical-align:top;"><em>Delivery</em> - Supershop delivers same day free for orders over $ (12) <span class="q-badge-inline">12</span><input type="text" class="gap-input" data-qnum="12" id="q-12" style="width: 60px;">.</td>
                        </tr>
                        
                        <tr>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top;"><u>Bio Deli</u></td>
                            <td colspan="2" style="padding:10px; border:1px solid #000; vertical-align:top;">They deliver early in the morning every weekday and can leave good quality milk, butter, cheese, fruits, vegetables, eggs and bread. A little more expensive. Set up an (13) <span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="q-13" style="width: 120px;"> online in order to start ordering.</td>
                        </tr>

                        <tr>
                            <td rowspan="3" style="padding:10px; border:1px solid #000; vertical-align:top;"><u>Restaurants</u></td>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top;">Italian</td>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top;">On Talbot Avenue. Good pizzas, pasta and other dishes. For delivery, call 856 357. It also has an Italian delicatessen with real Italian cheese, meats, oils and wines.</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top;">(14) <span class="q-badge-inline">14</span><input type="text" class="gap-input" data-qnum="14" id="q-14" style="width: 100px;"></td>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top;">Also on Talbot Avenue. Supposed to be good. Delivers.</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top;">Turkish</td>
                            <td style="padding:10px; border:1px solid #000; vertical-align:top;">On Bushey Road. Excellent food, especially the vegetarian (15) <span class="q-badge-inline">15</span><input type="text" class="gap-input" data-qnum="15" id="q-15" style="width: 100px;">.<br>Good things with aubergines, tomatoes, chick peas, beans and lentils. No delivery and reservation important at weekends.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
          items: [
            { qNum: 11, answer: "choice" },
            { qNum: 12, answer: "20" },
            { qNum: 13, answer: "account" },
            { qNum: 14, answer: "Indian" },
            { qNum: 15, answer: "starters" }
          ]
        },
        {
          type: "gap",
          title: "Questions 16-20",
          instruction: "Label the plan below. Write <strong>NO MORE THAN THREE WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 30px; width: 100%; clear: both;">
                
                <div style="display: block; width: 100%; text-align: center; margin-bottom: 20px;">
                    <img src="https://i.postimg.cc/bYGXgHzF/Screenshot-2026-05-06-172452.png" alt="Queen's Park Map" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;" />
                </div>
                
                <div style="background: #f9f9f9; padding: 20px 30px; border-radius: 8px; border: 1px solid #ddd; width: fit-content; margin: 0 auto; text-align: left;">
                    <div style="margin-bottom: 15px; display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">16.</strong> 
                        <span class="q-badge-inline">16</span><input type="text" class="gap-input" data-qnum="16" id="q-16">
                    </div>
                    <div style="margin-bottom: 15px; display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">17.</strong> 
                        <span class="q-badge-inline">17</span><input type="text" class="gap-input" data-qnum="17" id="q-17">
                    </div>
                    <div style="margin-bottom: 15px; display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">18.</strong> 
                        <span class="q-badge-inline">18</span><input type="text" class="gap-input" data-qnum="18" id="q-18">
                    </div>
                    <div style="margin-bottom: 15px; display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">19.</strong> 
                        <span class="q-badge-inline">19</span><input type="text" class="gap-input" data-qnum="19" id="q-19">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">20.</strong> 
                        <span class="q-badge-inline">20</span><input type="text" class="gap-input" data-qnum="20" id="q-20">
                    </div>
                </div>
            </div>
          `,
          items: [
            { qNum: 16, answer: ["A map", "map", "The map"] },
            { qNum: 17, answer: ["A stage", "stage", "The stage"] },
            { qNum: 18, answer: ["A cafe", "cafe", "A café", "café", "The cafe", "The café"] },
            { qNum: 19, answer: ["A bike park", "bike park", "The bike park"] },
            { qNum: 20, answer: ["The tennis club", "tennis club", "tennis"] }
          ]
        },

        // --- PART 3 ---
        {
          type: "mcq_multi",
          title: "Part 3: Questions 21-23",
          instruction: "Choose <strong>THREE</strong> letters <strong>(A - F)</strong>. Which of the following will Matthew use to pay his college's course fees this year?",
          options: [
            "A. Money from his family",
            "B. A local council grant",
            "C. A bank loan",
            "D. A part-time job",
            "E. Borrowing from a friend",
            "F. Borrowing from his uncle"
          ],
          items: [
            { qNums: [21, 22, 23], answer: ["A", "D", "E"] }
          ]
        },
        {
          type: "mcq_single",
          title: "Questions 24-25",
          instruction: "Choose the correct letter <strong>A, B or C</strong>.",
          items: [
            {
              qNum: 24,
              text: "How is Matthew's problem resolved?",
              options: [
                "A. Dr. Stevens will lend Matthew the money.",
                "B. Dr. Stevens will get the college to give Matthew an additional week to pay.",
                "C. Matthew's uncle will pay on his return from Canada."
              ],
              answer: "B"
            },
            {
              qNum: 25,
              text: "How will Matthew finally pay?",
              options: [
                "A. Cash.",
                "B. A cheque.",
                "C. A bank transfer."
              ],
              answer: "C"
            }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 26-30",
          instruction: "Choose <strong>FIVE</strong> letters <strong>(A - I)</strong>. What reasons does Matthew give for changing his course at the end of the year?",
          options: [
            "A. No work prospects with the current course",
            "B. No challenge in the current course",
            "C. The economic situation",
            "D. A new course would be cheaper",
            "E. Dislikes the current course",
            "F. Doesn't want to study more when his maths course ends",
            "G. Does not like some of his teachers",
            "H. His current head of department does not like him.",
            "I. A change in course would mean fewer exams"
          ],
          items: [
            { qNums: [26, 27, 28, 29, 30], answer: ["A", "C", "F", "G", "I"] }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-40",
          instruction: "Complete the notes below. Write <strong>NO MORE THAN TWO WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">The Great White Shark</h3>
              
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>The great white shark has acquired a (31) <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="q-31"> due to sensationalism in the media and the public's ignorance.</li>
                <li>Due to the reduced numbers, the great white shark was put on the protected species list for the state of California in 1992, because it was recognised that the (32) <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="q-32"> needed a top predator.</li>
                <li>One reason for the endangerment of the great white shark is that it has a relatively small size of (33) <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33">.</li>
                <li>Factors such as growth to reproductive maturity, the gestation period and the parturition interval ensure the great white shark is very vulnerable to (34) <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34">.</li>
                <li>Due to high value of the jaws and teeth, the great white shark has trophy status and is a (35) <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"> for collectors.</li>
                <li>Great white sharks may approach boats, because they can get food there. This makes them vulnerable to getting tangled or killed by fishermen.</li>
                <li>Some fishermen appreciate that great white sharks eat other predators that eat their catches (i.e. seals), but many others see them as a (36) <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36"> to their business.</li>
              </ul>
              <br>
              <strong>The great white shark is also vulnerable to:</strong>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                  <li>Sports fisheries</li>
                  <li>Curio trade</li>
                  <li>The shark fin business</li>
                  <li>Public aquariums</li>
                  <li>Indirect fishery catches</li>
                  <li>(37) <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37"> (development, pollution and overfishing)</li>
                  <li>Capture trauma</li>
              </ul>
              <br>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>Even when a few great white sharks are removed from a specific location, this can have a very significant effect.</li>
                <li>Due to media sensationalism, various local government departments involved in promoting (38) <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="q-38"> have unjustly focused on great white sharks in beach netting programs, which have killed many specimens.</li>
                <li>Protection of the great white shark is therefore essential and many countries have started protection programs.</li>
                <li>The great white shark's current status of 'vulnerable' on the International Union for Conservation of Nature Red List Assessment is because of previous statistics and forecast (39) <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="q-39">.</li>
                <li>As the world's fish stocks go down, sharks may provide fishermen with an (40) <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="q-40">.</li>
                <li>Stakeholders need to work together to save this magnificent fish.</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "reputation" },
            { qNum: 32, answer: "ecosystem" },
            { qNum: 33, answer: "litter" },
            { qNum: 34, answer: "exploitation" },
            { qNum: 35, answer: "target" },
            { qNum: 36, answer: "costly interference" },
            { qNum: 37, answer: ["Habitat degradation", "habitat degradation"] },
            { qNum: 38, answer: "tourism" },
            { qNum: 39, answer: "decline rates" },
            { qNum: 40, answer: "alternative resource" }
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
            
            <h3 style="text-align: center; color: #333;">Growing Oysters</h3>
            
            <p>Oysters have been farmed since Roman times, and in many areas approaches are much the same as they were back then, because they still work. However, there has also been quite a leap in farming methods, which has allowed oysters to be farmed much more efficiently or in areas where it would not have been possible before.</p>

            <Once>Baby oyster seeds are obtained by farms from hatcheries each spring. The seed is only about 1 millimeter in length and is packed in a very fine mesh enclosure. The seeds look like small pepper flakes when they arrive, and they are placed in floating upwellers, where the tiny oyster babies are in a protected environment. Here they can feed and grow on nutrient rich water. Pumps push water up and over the oysters in small silos, so they constantly receive a fresh supply of phytoplankton. The baby oysters remove excess nitrogen and carbon based nutrients from the water, thereby improving water quality and clarity in a nitrogen and carbon negative process. Oysters, like any animal, grow at diverse rates, so the fast growers must be separated from the slow growers. Once the oyster seeds are large enough, they are moved out of the upwellers and placed in mesh bags contained in floating cages, so they can feed in the water column and avoid being smothered by sedimentation.</p>

            <Because>From time to time, oysters must be placed in an oyster tumbler, which grades them according to size, washes them, and chips off the leading edge of the shell to give the oyster the characteristic cup appearance over time. Simultaneously, the oysters are divided into roughly double the number of cages, thereby increasing the amount of water flow and decreasing the competition for sustenance within the cage. These processes are repeated every 4 weeks throughout the summer and fall. Because of the colder temperatures and lower salinity of winter water, the oysters slow down their feeding and growth and eventually they enter a state of dormancy. During winter, the tumbling and dividing process is stopped and the cages are simply monitored to ensure they remain in good condition.</p>

            <p>Once the water temperatures and salinity begin to increase, the oysters wake up and begin feeding and the tumbling and dividing process begins again. Once the oysters reach approximately 2 inches in size, they are placed in cages in more open water, where the wave action will toughen them up and strengthen their abductor muscles. This prepares the oysters for shipment.</p>

            <p>After approximately 18 months, the oysters are tough enough and are ready for harvest. The oysters that are ready are washed down, bagged up and placed in boxes if they are being shipped direct. They are then taken away for shipment.</p>

            <The>The suitability of growing areas for oysters can be evaluated by the amount and type of pollutants in the various growing areas. Oyster banks should not be exposed to strong currents or wave action under normal tidal conditions or during times of flood. Areas that are prone to shifting sand can also be problematic. These adverse conditions place additional stress on the oyster growing furniture, damage oysters, and make working in these areas difficult. Some balance must be struck between currents and tidal flows to ensure that they supply the oysters with suitable water that is a nutrient-rich food source. Open water also leaves the oysters vulnerable to small fish predation, which can have a serious effect on production yields. The substrate should be firm enough to walk over, and to work on, although this is not always the case. Offshore areas may be problematic if they are not close to a suitable land-based facility and long distances must be travelled each time stock is to be placed or maintenance carried out. Access to markets also needs to be considered, particularly when moving oysters to be processed. Estuary systems are particularly good at producing the populations of phytoplankton that oysters predominantly feed on. As oysters are filter feeders, the selection of maturing grounds is very important to avoid possible contamination. Commercial oyster culture all over the world is managed under stringent eco-guidelines designed to ensure that oysters are only grown in areas with appropriate water quality.</p>

            <A>Oyster farmers have to be particularly aware of the signs of QX oyster disease, which is caused by the microscopic parasite Marteilia sydneyi. The spore-like parasites invade an oyster's digestive system and multiply in the digestive gland or 'liver'. These spores are so numerous that the oyster is unable to absorb food and can starve to death within 40 days of infection. Oyster fatality in an infected bank can be as high as 95 per cent. Although QX is usually fatal to oysters, there is absolutely no evidence that it is harmful to consumers. A sign of QX infection is a mass mortality of oysters, though a thorough and correct diagnosis can only be obtained by microscopic examination of the digestive gland for the detection of QX spores. Samples of oysters suspected of QX can be sent away for examination. Once infected, oysters cannot be cured of the disease, but it is still possible to farm oysters in QX-susceptible areas within certain operating constraints. The risk of infection is year round but highest in the summer months.</p>

            <div style="font-size: 0.85em; color: #555; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px;">
                <p><strong>Glossary</strong></p>
                <p><strong>Upweller:</strong> A small tank used for growing young oysters.</p>
                <p><strong>Substrate:</strong> Underlying ground.</p>
            </div>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            
            <h3 style="text-align: center; color: #333;">Hypnosis</h3>

            <p><strong>Paragraph A</strong><br>Hypnosis is the induction of a deeply relaxed state, with increased suggestibility and suspension of critical faculties. Once in this state, sometimes called a hypnotic trance, patients are given therapeutic suggestions to encourage changes in behavior or relief of symptoms. For example, in a treatment to stop eating chocolate, a hypnosis practitioner might suggest that the patient will no longer find eating chocolate pleasurable or necessary. Hypnosis for a patient with arthritis might include a suggestion that the pain can be turned down like the volume of a radio. Some practitioners use hypnosis as an aid to psychotherapy. The rationale is that in the hypnotised state, the conscious mind presents fewer barriers to effective psychotherapeutic exploration, leading to an increased likelihood of psychological insight. The primary applications of hypnosis are for anxiety, disorders with a strong psychological component, such as asthma, and conditions that can be modulated by levels of sensory arousal. They are also commonly used in programs for stress management.</p>

            <p><strong>Paragraph B</strong><br>During hypnosis, the critical and analytical faculty of the conscious mind freezes, and a direct rapport is established with the subconscious mind. The conscious mind is that part of the mind that collects information from the environment through the perception of the five senses. It then analyses, organises and interprets this information, and uses it for future reference. It is responsible for the reasoning, logic and intelligence of the mind. The powers of the conscious mind are limited by past conditioning, past experiences and the logic of the science. People usually consider the conscious mind to be the more dominant, but beneath that is the most powerful part called the subconscious mind. The subconscious mind is responsible for all the autonomic processes in our body like blood pumping, maintaining the blood pressure, heart beat rate, respiration, digestion and all other involuntary functions in the body. It has infinite data storage and data processing capacity. In order to untangle how one level of consciousness influences the other, researchers and hypnotists must try and understand the people's subconscious.</p>

            <p><strong>Paragraph C</strong><br>Hypnosis works by reaching into this subconscious mind and updating it with new and more helpful information, like reprogramming a computer. It can be used to change associations, so that cigarettes, for instance, are no longer seen as necessary and are more realistically regarded as toxic killers. It can also be used to mentally rehearse better ways of going about things, such as being able to deal with awkward situations without having to light a cigarette. Since the unconscious mind controls our autonomic bodily processes, physical change can also be achieved through hypnosis. Pain control is a very good example. The mind alters our awareness of pain all the time. People experience this themselves if they discover a cut or a bruise and wonder how it got there. Physical events are still occurring, but the unconscious has relegated them to the bits of sensory information you're not aware of every single second. Hypnosis can therefore be used to amplify that same response and apply it to a specific situation, such as the control of headaches. Hypnosis works, then by shaping the perception of reality through dealing directly with the subconscious mind, which is the seat of most issues, and most solutions, too.</p>

            <p><strong>Paragraph D</strong><br>In hypnosis treatment, patients typically see practitioners by themselves for a course of hourly or half-hourly treatments. Some general practitioners and other medical specialists use hypnosis as part of their regular clinical work and follow a longer initial consultation with standard 10 to 15-minute appointments. Patients can be given a post-hypnotic suggestion that enables them to induce self-hypnosis after the treatment course is completed. Some practitioners undertake group hypnosis, treating up to a dozen patients at a time, for example, teaching self-hypnosis to prenatal groups as preparation for labour.</p>

            <p><strong>Paragraph E</strong><br>Hypnosis has had its critics. Hypnosis can sometimes exacerbate psychological problems, for example, by retraumatising those with post-traumatic disorders or by inducing false memories in psychologically susceptible individuals. Some research has raised concerns that the dissociation necessary to participate in hypnosis can lead to the manifestation of the symptoms of psychosis. Only appropriately trained and experienced practitioners should undertake hypnosis. Its use should be avoided in patients with borderline personality disorder, dissociative disorders, or with patients who have traumatic histories. Competent hypnotherapists are skilled in recognising and referring patients with these conditions.</p>

            <p><strong>Paragraph F</strong><br>The practice of hypnosis is poorly regulated, and standards of practice and training are variable. Although several professional groups exist, these groups do not provide certification for practitioners in hypnotherapy, making the selection of a hypnotherapist sometimes problematic. Hypnotherapists with a conventional health care background, such as psychologists, physicians, dentists, and nurses, are regulated by their professional regulatory bodies. Psychotherapists who use hypnotherapy as an additional treatment modality require appropriate training. Individuals who have received a master's degree in counseling or social work or a doctorate in clinical or counseling psychology will be likely to have received appropriate training and supervision.</p>

            <p><strong>Paragraph G</strong><br>Law enforcement agencies have always been interested in the potential applications of hypnotism. The question of the utility of hypnosis in the interrogation of persons unwilling to divulge information involves three issues: first, can hypnosis be induced under conditions of interrogation? If so, can the subject be compelled to reveal information? Secondly, if information can be so obtained, will it be trustworthy? And thirdly, is it ethical to perform this kind of interrogation? If the answers to all these questions are, 'yes', the next problem is then to induce a trance either against the subject's wishes or without his being aware of it.</p>

            <div style="font-size: 0.85em; color: #555; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px;">
                <p><strong>Glossary</strong></p>
                <p><strong>Psychosis:</strong> A severe mental disorder in which thought and emotions are so impaired that contact is lost with external reality.</p>
            </div>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            
            <h3 style="text-align: center; color: #333;">The Health Benefits of Vegetarianism</h3>

            <p>Vegetarians are people who don't eat meat or seafood and may not eat eggs or dairy foods. Well-planned vegetarian diets have many health benefits and can provide all the essential vitamins and minerals necessary for a long and healthy life.</p>

            <p>People have many reasons for becoming vegetarians. Some want to eat more healthy foods. Others have religious or economic reasons or are concerned about animal welfare. "Vegetarian diets are also more sustainable and environmentally sound than diets that rely heavily on meat, poultry and fish," says nutritionist Dr. Karen Morgan, who monitors trends in cancer risk factors. "Livestock production accounts for nearly 80 per cent of greenhouse gas emissions from agriculture worldwide and it also places a much heavier burden on water, land and fossil fuel resources than grains and other crops."</p>

            <p>Vegetarian meals focus on fruits and vegetables, dried beans, whole grains, seeds and nuts. Most people think of vegetarian diets as simply eating plant foods and not eating meat, poultry and fish. "However," as Morgan explains, "there are in fact many different types of vegetarian diets and some are more restrictive than others." Strict vegetarians, or vegans, eat plant foods and reject all animal products, including meat, poultry, fish, eggs, dairy and honey. Those who also eat dairy products are called lacto vegetarians. Vegetarians who eat both dairy and eggs are called lacto-ovo vegetarians. Some vegetarians eat fish but not meat or poultry and they're called pescatarians. "Then there are the so-called flexitarians, or semi-vegetarians. These are people who eat a mostly vegetarian diet, but they occasionally eat meat," says Josie Elkei, a nutritionist and registered dietitian at NIH. "They might say, 'I'm a vegetarian, but I need to eat my burgers every Sunday.' People tend to follow their own rules, which is one reason why it's hard to study vegetarians. There's so much variance."</p>

            <However,>Vegetarians exhibit a wide diversity of dietary practices, often described by what is omitted from their diet. When a vegetarian diet is appropriately planned and includes fortified foods, it can be nutritionally satisfactory for adults and children and can promote health and lower the risk of major chronic diseases. The nutrients of concern in the diet of vegetarians include vitamin B12, vitamin D, some fatty acids, calcium, iron, and zinc. Elkei explains what can be done. "Although a vegetarian diet can meet current recommendations for all of these nutrients, a poorly planned vegetarian diet can cause deficiencies and so the use of fortified foods and pills provides a useful shield". However, a vegetarian diet usually provides a low intake of saturated fat and cholesterol and a high intake of dietary fiber and many health-promoting phytochemicals. This is achieved by an increased consumption of fruits, vegetables, whole-grains, legumes, nuts, and various soy products. General practitioner Mark Thomas explains the benefits of this. "As a result of this kind of diet, vegetarians typically have lower body mass index, serum total and low-density lipoprotein cholesterol levels, and blood pressure, reduced rates of death from ischemic heart disease, and decreased incidence of hypertension, stroke, type 2 diabetes, and certain cancers than do non-vegetarians." In some cases, however, it is unclear if the specific health benefits come from plant-based eating or from the healthy lifestyle of most vegetarians. Personal trainer Alicia Field notes that "vegetarians are generally more physically active and have healthier habits than non-vegetarians. They also typically have a higher socioeconomic status." Researcher Stan Wade has been determined to find out the truth of whether vegetarianism of lifestyle is the greater indicator of health and, over the last few years, he has conducted large and carefully controlled studies that have explored this. Wade presents his results. "It's clear that the elements of lifestyle and vegetarianism complement each other and both included factors that aid long life. Meat eaters, however, who take plenty of exercise and have healthy habits are also likely to live long and healthy lives."</p>

            <p>One issue that many vegetarians face is when they eat out. Most restaurant menus are geared towards meat eaters, and their vegetarian offerings are often limited to meat dishes with the absence of meat. Unfortunately, taking meat away from a dish doesn't mean that vegetarians are getting a healthy, well-balanced vegetarian meal. Because of this, if vegetarians eat out frequently, it can be difficult for them to get the proper nutrition their bodies need. If an individual is committed to a vegetarian lifestyle, however, having issues eating out is not a significant drawback.</p>

            <p>Well-planned vegan and vegetarian diets are appropriate for all stages of a person's life. However, special care needs to be taken with young children. Infants consuming their mothers' milk or infant formula usually have their nutritional needs met. When introducing complementary foods for children, it is important to include protein-rich foods, such as mashed tofu or cottage cheese. Later, add cheese, cow's milk, full-fat soy milk and legumes. Iron is another important nutrient needed because body iron stores are usually depleted by six months of age. Sources of iron for vegetarian diets include cereals for babies fortified with iron, beans and dark green vegetables. Celia Tremlett, a child nutritionist, suggests an approach. "One way to ensure that vegetarian children meet their energy needs is to give them frequent meals and snacks and it is particularly important that vegetarian children have energy and nutrient-dense foods regularly."</p>

            <p>When reviewing the facts, it is hard to understand why more people don't embrace vegetarianism. Although the convenience of meat options and a lack of knowledge stop many people from trying it, the chief factor that stops people seems just to be the meat-eating habit. Whatever people choose to eat, however, it's clear that moderation and balance are key to being happy and healthy.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          type: "gap",
          title: "Questions 1-6",
          instruction: "Complete the flow chart below. Write <strong>NO MORE THAN ONE WORD</strong> from the text for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
                <h3 style="text-align:center; color:#2B6830; margin-top:0;">Growing Oysters</h3>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    In spring, (1) <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1"> supply seed oysters, which are placed into upwellers. (2) <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2"> is supplied by pumped water. Some oysters are separated.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    When ready, the oysters are put into mesh bags contained in floating cages, which provide water and prevent threats of (3) <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3">.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    Periodically, oysters are treated in an oyster tumbler and at the same time are placed into more cages to reduce (4) <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4"> for nutrients.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    Growth slows in winter until (5) <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5"> occurs. The oysters are monitored.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    When they wake, the oysters feed again and the same treatment continues.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>

                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    When large enough, oysters are put in cages in more open water to toughen them.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff;">
                    (6) <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="q-6"> takes place when the farmer judges the oysters large and tough enough and they are then shipped to the customers.
                </div>
            </div>
          `,
          items: [
            { qNum: 1, answer: "hatcheries" },
            { qNum: 2, answer: "Phytoplankton" },
            { qNum: 3, answer: "sedimentation" },
            { qNum: 4, answer: "competition" },
            { qNum: 5, answer: "dormancy" },
            { qNum: 6, answer: "Harvest" }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 7-10",
          instruction: "Choose <strong>FOUR</strong> letters, <strong>A - H</strong>. According to the text, which of the following are threats to oysters during the farming process?",
          options: [
            "A. An excess of oxygen.",
            "B. Sea currents being too powerful.",
            "C. Ill workers handling the oysters.",
            "D. Fish feed on them when they're young.",
            "E. Below 0 degrees Celsius conditions.",
            "F. Pollution in the water.",
            "G. Too few oysters being in a single cage.",
            "H. QX infection in winter."
          ],
          items: [
            { qNums: [7, 8, 9, 10], answer: ["B", "D", "F", "H"] } // Theo đáp án, tuỳ thuộc vào key có thể là "B, D, F, H"
          ]
        },
        {
          type: "mcq_single",
          title: "Questions 11-13",
          instruction: "Choose the correct letter <strong>A, B, C or D</strong>.",
          items: [
            {
              qNum: 11,
              text: "The growth of farmed oysters",
              options: [
                "A. means they can be kept together through the entire farming process.",
                "B. can occur at different speeds.",
                "C. can be planned ahead of time.",
                "D. means only a 6-month wait is needed until they are sold."
              ],
              answer: "B"
            },
            {
              qNum: 12,
              text: "Oysters are kept for some time in open water",
              options: [
                "A. in order to reinforce the shells.",
                "B. in order to have access to increased food.",
                "C. in order to avoid predators.",
                "D. in order to develop a better taste."
              ],
              answer: "A"
            },
            {
              qNum: 13,
              text: "No matter where the operation takes place, oyster farming",
              options: [
                "A. can be extremely profitable.",
                "B. is a dangerous business.",
                "C. is subject to strict environmental regulation.",
                "D. can be difficult to make a success."
              ],
              answer: "C"
            }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          type: "matching_info",
          title: "Questions 14-20",
          instruction: "The text on the previous pages has 7 paragraphs <strong>(A - G)</strong>. Which paragraph contains the following information?",
          options: ["A", "B", "C", "D", "E", "F", "G"],
          items: [
            { qNum: 14, text: "Skilled hypnotherapy practitioners are able to spot patients that might not be suited to hypnosis therapy.", answer: "E" },
            { qNum: 15, text: "The subconscious mind is where most people's problems originate.", answer: "C" },
            { qNum: 16, text: "It's not always easy to choose a competent hypnotherapist with confidence.", answer: "F" },
            { qNum: 17, text: "Hypnosis can be used to treat the strain caused by worrying too much.", answer: "A" },
            { qNum: 18, text: "Some hypnosis therapy can be continued by the patient alone after the therapy has finished.", answer: "D" },
            { qNum: 19, text: "It might not be morally acceptable to extract some information from people under hypnosis.", answer: "G" },
            { qNum: 20, text: "The conscious mind is affected by events that it is aware have taken place before.", answer: "B" }
          ]
        },
        {
          type: "gap",
          title: "Questions 21-23",
          instruction: "Complete the summary below. Write <strong>NO MORE THAN TWO WORDS</strong> from the text for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <h3 style="text-align:center; color:#2B6830; margin-top:0;">Criticisms of Hypnosis</h3>
                <p>Hypnosis might make existing issues worse by recalling distressing episodes or creating (21) <span class="q-badge-inline">21</span><input type="text" class="gap-input" data-qnum="21" id="q-21"> in vulnerable patients. Hypnosis also might create psychosis by using the required (22) <span class="q-badge-inline">22</span><input type="text" class="gap-input" data-qnum="22" id="q-22">. Hypnosis should not be used with patients with certain disorders or histories. Hypnosis practitioners are also poorly regulated and existing organisations do not offer (23) <span class="q-badge-inline">23</span><input type="text" class="gap-input" data-qnum="23" id="q-23">.</p>
            </div>
          `,
          items: [
            { qNum: 21, answer: ["false memories", "false memory"] },
            { qNum: 22, answer: "dissociation" },
            { qNum: 23, answer: "certification" }
          ]
        },
        {
          type: "matching",
          title: "Questions 24-26",
          instruction: "Complete each sentence with the correct ending <strong>(A - F)</strong> below.",
          options: [
            "A. might not be reliable.",
            "B. deals with the ability to breathe.",
            "C. can prompt a heart attack if not dealt with carefully.",
            "D. can be greatly lessened under hypnosis.",
            "E. cannot be dealt with under hypnosis.",
            "F. could lead to the physical damage of the subject."
          ],
          items: [
            { qNum: 24, text: "The subconscious part of the mind", answer: "B" },
            { qNum: 25, text: "Some physical signs of problems, such as the feeling of pain,", answer: "D" },
            { qNum: 26, text: "Providing information under hypnosis", answer: "A" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          type: "matching",
          title: "Questions 27-33",
          instruction: "Look at the following statements (questions 27-33) and the list of people below. Match each statement with the correct person's initials.",
          options: [
            "KM. Karen Morgan",
            "JE. Josie Elkei",
            "MT. Mark Thomas",
            "AF. Alicia Field",
            "SW. Stan Wade",
            "CT. Celia Tremlett"
          ],
          items: [
            { qNum: 27, text: "Adding supplements to a vegetarian's diet can help ensure all the necessary nutrients to remain healthy are absorbed.", answer: "JE" },
            { qNum: 28, text: "Healthy habits and vegetarian habits work well together.", answer: "SW" },
            { qNum: 29, text: "Vegetarians are likely to suffer a lot fewer diseases than meat-eaters.", answer: "MT" },
            { qNum: 30, text: "Vegetarian children should eat frequently through the day.", answer: "CT" },
            { qNum: 31, text: "The farming of animals takes up disproportionate amounts of resources.", answer: "KM" },
            { qNum: 32, text: "Some people find it difficult to give up meat completely.", answer: "JE" },
            { qNum: 33, text: "Vegetarians often earn more money than meat eaters.", answer: "AF" }
          ]
        },
        {
          type: "tfng",
          title: "Questions 34-40",
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
            { qNum: 34, text: "People's individual approach to vegetarianism makes it hard to research vegetarianism.", answer: "TRUE" },
            { qNum: 35, text: "Certain fish are favoured more by pescatarians.", answer: "NOT GIVEN" },
            { qNum: 36, text: "Soy is not a suitable food for vegetarians.", answer: "FALSE" },
            { qNum: 37, text: "Restaurants will often prepare a vegetarian meal for people on request.", answer: "NOT GIVEN" },
            { qNum: 38, text: "Tofu should be avoided as a source of protein for children.", answer: "FALSE" },
            { qNum: 39, text: "Because babies are not born with adequate stores of iron, they need to have regular intakes of it through their food.", answer: "TRUE" },
            { qNum: 40, text: "The main reason that people reject vegetarianism is that they're just used to eating meat.", answer: "TRUE" }
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
        image: "https://i.postimg.cc/ZK45MMCD/Screenshot-2026-05-06-173936.png", 
        prompt: `
          The images below illustrate the process and potential of how garbage can be recycled to create aviation biofuel.

          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

          You should write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          Some people like to own the place where they live, but other people like to rent where they live.

          Discuss both views and give your own opinion.

          Give reasons for your answer and include any relevant examples from your knowledge or experience.

          You should write at least 250 words.
        `
      }
    }
  }
};