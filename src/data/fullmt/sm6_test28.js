// src/data/sm6_test28.js

export const sm6_test28 = {
  id: "mt31",
  category: "full",
  testName: "MOCK TEST 31",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING
    // ==========================================================================
    listening: {
      audioSrc: "/audio/mt31.mp3", // Thay bằng đường dẫn file audio thực tế
      timeLimit: 1703, // 30 phút
      passage: "<h3 style='text-align:center; color:#002554;'>MOCK TEST 28 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-5",
          instruction: "Complete Neil's cycling course form below. Write <strong>NO MORE THAN ONE WORD AND/OR A NUMBER</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Cycling Course Booking Form</h3>
                
                <table style="width:100%; border-collapse: collapse; margin-bottom: 15px;">
                    <tbody>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold; width: 40%;">Family name</td>
                            <td style="padding: 10px;">(1) <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1"></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Mother's name</td>
                            <td style="padding: 10px;">Alice</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Father's name</td>
                            <td style="padding: 10px;">Dean</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Mother's mobile</td>
                            <td style="padding: 10px;">042 4382 945</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Father's mobile</td>
                            <td style="padding: 10px;">048 4322 410</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Address</td>
                            <td style="padding: 10px;">(2) <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2" style="width: 50px;"> Alton Close<br>Newbridge<br>NB5 7FR</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Child's name</td>
                            <td style="padding: 10px;">Jordan</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Age</td>
                            <td style="padding: 10px;">(3) <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3" style="width: 60px;"></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Cycling skills</td>
                            <td style="padding: 10px;">Quite good</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Course chosen</td>
                            <td style="padding: 10px;">1 week with exam leading to the award of a (4) <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4"></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; font-weight: bold;">Other details</td>
                            <td style="padding: 10px;">Jordan broke his (5) <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5"> in the winter.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
          items: [
            { qNum: 1, answer: "Craig" },
            { qNum: 2, answer: "16" },
            { qNum: 3, answer: "11" },
            { qNum: 4, answer: "certificate" },
            { qNum: 5, answer: "arm" }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 6-8",
          instruction: "Choose <strong>THREE</strong> letters, <strong>A-G</strong>. What should Mrs. Craig ensure that Jordan has with him at his cycling course?",
          options: [
            "A. A bicycle",
            "B. Bicycle helmet",
            "C. Knee pads",
            "D. Clothes for rain",
            "E. Some food",
            "F. A hot drink",
            "G. Water"
          ],
          items: [
            { qNums: [6, 7, 8], answer: ["D", "E", "G"] }
          ]
        },
        {
          type: "gap",
          title: "Questions 9-10",
          instruction: "Complete the sentences below. Write <strong>NO MORE THAN ONE WORD</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border: 1px solid #ddd;">
                <p>9. Extra <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9"> will cover anything missed on any single day missed through sickness.</p>
                <p>10. Because the teachers are all <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10">, the cycling school has low costs.</p>
            </div>
          `,
          items: [
            { qNum: 9, answer: "instruction" },
            { qNum: 10, answer: "volunteers" }
          ]
        },

        // --- PART 2 ---
        {
          type: "gap",
          title: "Part 2: Questions 11-15",
          instruction: "Complete the notes below. Write <strong>NO MORE THAN TWO WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Green Gate Shopping Centre<br>Information Help Sheet</h3>
                
                <h4 style="color:#002554; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Access</h4>
                <ul style="line-height: 1.8;">
                    <li><strong>Cars:</strong> Cars access Green Gate from the Town Ring Road and from Reservoir Road. Five car parks can hold (11) <span class="q-badge-inline">11</span><input type="text" class="gap-input" data-qnum="11" id="q-11"> cars (one car park is underground).</li>
                    <li><strong>Bus:</strong> Many local buses stop at the Green Gate bus terminal. A (12) <span class="q-badge-inline">12</span><input type="text" class="gap-input" data-qnum="12" id="q-12"> also found at the bus station.</li>
                    <li><strong>Train:</strong> New station open (called Green Gate).</li>
                </ul>

                <h4 style="color:#002554; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Opening Times</h4>
                <ul style="line-height: 1.8;">
                    <li>Normal opening times for commercial shops: 10 a.m. - 10 p.m.</li>
                    <li><strong>24-Hour Opening</strong> (found in the (13) <span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="q-13">): Supermarket, Some food court outlets open 24 hours.</li>
                    <li>Food outlets include fast food, and healthier options: (14) <span class="q-badge-inline">14</span><input type="text" class="gap-input" data-qnum="14" id="q-14"> + regular restaurants</li>
                </ul>

                <h4 style="color:#002554; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Saturday Grand Opening</h4>
                <ul style="line-height: 1.8;">
                    <li>Grand Opening by the town mayor at 9 a.m.</li>
                    <li>Short (15) <span class="q-badge-inline">15</span><input type="text" class="gap-input" data-qnum="15" id="q-15"> until 9.30 a.m.</li>
                    <li>Mayor's tour from 9.30 a.m.; Open to public from 9.30 a.m.</li>
                </ul>
            </div>
          `,
          items: [
            { qNum: 11, answer: "4000" },
            { qNum: 12, answer: "taxi rank" },
            { qNum: 13, answer: "basement" },
            { qNum: 14, answer: "salad bars" },
            { qNum: 15, answer: "speeches" }
          ]
        },
        {
          type: "gap",
          title: "Questions 16-20",
          instruction: "Label the locations on the map of Green Gate Shopping Centre below. Write <strong>NO MORE THAN THREE WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 30px; width: 100%; clear: both;">
                <h4 style="color:#002554; margin-bottom: 15px; text-align: center;">Green Gate Shopping Centre</h4>
                
                <div style="display: block; width: 100%; text-align: center; margin-bottom: 20px;">
                    <img src="https://i.postimg.cc/pTKRrW5W/Screenshot-2026-05-06-163332.png" alt="Green Gate Shopping Centre Map" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;" />
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
            { qNum: 16, answer: ["the underground parking", "underground parking"] },
            { qNum: 17, answer: ["The bus terminal", "bus terminal"] },
            { qNum: 18, answer: ["The Yellow", "Yellow"] },
            { qNum: 19, answer: ["The train station", "train station"] },
            { qNum: 20, answer: ["The information point", "information point"] }
          ]
        },

        // --- PART 3 ---
        {
          type: "gap",
          title: "Part 3: Questions 21-25",
          instruction: "Complete the summary below. Write <strong>NO MORE THAN ONE WORD</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd; margin-bottom: 20px; line-height: 1.8;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Karen and Denis' Study Year in Australia</h3>
                <p>Denis and Karen have received confirmation of their study year in Australia. They had a number of questions, the first of which regarded the credits for their time studying there. Karen will receive 3 credits for her minor language study of (21) <span class="q-badge-inline">21</span><input type="text" class="gap-input" data-qnum="21" id="q-21">. All credits will require success in (22) <span class="q-badge-inline">22</span><input type="text" class="gap-input" data-qnum="22" id="q-22"> in main and minor language studies. The Australian university will confirm all credits-related information, so the students do not need to bring back (23) <span class="q-badge-inline">23</span><input type="text" class="gap-input" data-qnum="23" id="q-23">.</p>
                <p>Denis will receive credits for his study of Spanish, but not environmental studies, as accredited language courses are the only ones that count towards his degree choice. Denis can make up credits by studying courses in his holiday sessions.</p>
                <p>Denis and Karen don't need to do the (24) <span class="q-badge-inline">24</span><input type="text" class="gap-input" data-qnum="24" id="q-24"> but they'll need to prove to their (25) <span class="q-badge-inline">25</span><input type="text" class="gap-input" data-qnum="25" id="q-25"> that they've been working on their special investigation assignment, or they won't be admitted onto their courses on their return.</p>
            </div>
          `,
          items: [
            { qNum: 21, answer: "Japanese" },
            { qNum: 22, answer: "exams" },
            { qNum: 23, answer: "proof" },
            { qNum: 24, answer: "examinations" },
            { qNum: 25, answer: "tutors" }
          ]
        },
        {
          type: "gap",
          title: "Questions 26-28",
          instruction: "Answer the questions below. Write <strong>NO MORE THAN TWO WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border: 1px solid #ddd; margin-bottom: 20px;">
                <p>26. What is the main language that Karen studies at university?<br><span class="q-badge-inline">26</span><input type="text" class="gap-input" data-qnum="26" id="q-26"></p>
                <p>27. What does Karen's tutor say that some word-like vocalisations by ten-month-old infants are used for expressing?<br><span class="q-badge-inline">27</span><input type="text" class="gap-input" data-qnum="27" id="q-27"></p>
                <p>28. What context is very common when children start to use their first recognisable words?<br><span class="q-badge-inline">28</span><input type="text" class="gap-input" data-qnum="28" id="q-28"></p>
            </div>
          `,
          items: [
            { qNum: 26, answer: "German" },
            { qNum: 27, answer: ["Emotional states", "emotional states"] },
            { qNum: 28, answer: ["Naming", "naming"] }
          ]
        },
        {
          type: "gap",
          title: "Questions 29-30",
          instruction: "Complete the table of the two studies on child language word acquisition below that the tutor talks about. Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#fff; padding:20px; border-radius:8px; border: 1px solid #ddd; overflow-x: auto;">
                <table style="width:100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background:#002554; color:white;">
                            <th style="padding:10px; border:1px solid #ccc; text-align:left;">Milestone</th>
                            <th style="padding:10px; border:1px solid #ccc; text-align:left;">Nelson 1973<br><span style="font-weight:normal; font-size:0.9em;">(18 children)</span></th>
                            <th style="padding:10px; border:1px solid #ccc; text-align:left;">Fenson 1993<br><span style="font-weight:normal; font-size:0.9em;">(1789 children)</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">10 words</td>
                            <td style="padding:10px; border:1px solid #ccc;">15 months</td>
                            <td style="padding:10px; border:1px solid #ccc;">13 months</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">50 words</td>
                            <td style="padding:10px; border:1px solid #ccc;">20 months</td>
                            <td style="padding:10px; border:1px solid #ccc;">(29) <span class="q-badge-inline">29</span><input type="text" class="gap-input" data-qnum="29" id="q-29" style="width: 80px;"></td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">Vocabulary at 24 months</td>
                            <td style="padding:10px; border:1px solid #ccc;">186 words</td>
                            <td style="padding:10px; border:1px solid #ccc;">310 words</td>
                        </tr>
                    </tbody>
                </table>
                <p style="margin-top: 15px; font-style: italic;">(The Fenson study is more reliable due to its greater (30) <span class="q-badge-inline">30</span><input type="text" class="gap-input" data-qnum="30" id="q-30" style="width: 80px;"> size)</p>
            </div>
          `,
          items: [
            { qNum: 29, answer: ["17 months", "seventeen months"] },
            { qNum: 30, answer: "sample" }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-35",
          instruction: "Complete the notes below. Write <strong>NO MORE THAN ONE WORD</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">Myers-Briggs Personality Type Indicator</h3>
              
              <p>The Myers-Briggs Personality Type Indicator uses the theories of the Swiss psychologist Carl Jung to explain (31) <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="q-31"> in people's behaviour. It shows that such behaviour is consistent in people, dependent on individuals' perception and judgement.</p>

              <p>It was developed by Isabel Myers and her mother Katharine Briggs and it can be taken by any individual or used by large or small companies. Respondents complete a (32) <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="q-32"> on how they view the world around them. A personality type is assigned dependent on the answers.</p>

              <p>The assigned personality type is based on four functions (one is (33) <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33">):</p>
              <ul>
                  <li>sensation - intuition</li>
                  <li>feeling - thinking</li>
              </ul>

              <p>The type also depends on the respondents' attitude - introverted or extroverted.</p>
              <p>Companies can use the knowledge of their employees' type in a number of ways:</p>
              <div style="display:flex; flex-wrap:wrap; gap: 20px;">
                  <ul style="flex:1;">
                      <li>managing others</li>
                      <li>organising tasks</li>
                      <li>conflict resolution</li>
                      <li>executive coaching</li>
                      <li>diversity</li>
                      <li>change management</li>
                  </ul>
                  <ul style="flex:1;">
                      <li>leadership skills development</li>
                      <li>team creation and management</li>
                      <li>management and staff training</li>
                      <li>motivation</li>
                      <li>recognition and rewards</li>
                  </ul>
              </div>

              <p>Companies can also suit workloads to employees' styles and help them in ways such as:</p>
              <ul>
                  <li>time management</li>
                  <li>problem solving</li>
                  <li>coping with workplace culture</li>
                  <li>best approaches to decision making</li>
                  <li>new skills development</li>
                  <li>understanding participation on teams</li>
                  <li>coping with workplace change</li>
                  <li>(34) <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34"> management</li>
              </ul>

              <p>Companies can also understand customers better when (35) <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"> is involved:</p>
              <ul>
                  <li>how customers like to learn about products and services.</li>
                  <li>how customers like to interact during the process of gathering information and making decisions.</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "variation" },
            { qNum: 32, answer: "questionnaire" },
            { qNum: 33, answer: "dominant" },
            { qNum: 34, answer: "stress" },
            { qNum: 35, answer: "selling" }
          ]
        },
        {
          type: "gap",
          title: "Questions 36-40",
          instruction: "Complete the sentences below. Write <strong>NO MORE THAN THREE WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border: 1px solid #ddd;">
                <p>36. The best setting in which to feedback test result information is a <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36"> situation.</p>
                <p>37. <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37"> from respondents must be obtained before the results of tests can be shared with third parties.</p>
                <p>38. Results of the test should only be used to <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="q-38"> individual or group functioning and not to label, evaluate, or limit anyone.</p>
                <p>39. A <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="q-39"> of the indicated type should be given to the respondents, so that they understand their type.</p>
                <p>40. If only research is being conducted, individual results are not necessary, though feedback to respondents asking for it is <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="q-40">.</p>
            </div>
          `,
          items: [
            { qNum: 36, answer: ["face-to-face", "face to face"] },
            { qNum: 37, answer: "Permission" },
            { qNum: 38, answer: "enhance" },
            { qNum: 39, answer: "report" },
            { qNum: 40, answer: "encouraged" }
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
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">The Larsen Ice Shelf</h3>
            
            <p><strong>Paragraph A</strong><br>The Larsen Ice Shelf is situated along the northeastern coast of the Antarctic Peninsula, one of the fastest-warming places on the planet. Over the last few decades, two large sections of the ice shelf (Larsen A and B) have collapsed. In 2017, the third section (Larsen C) calved, sending what might be one of the largest icebergs ever recorded slipping into a sea frosted with smaller chunks of ice. It marked the end of a decade-long splintering first seen by satellites in the 1960s. The massive Larsen C iceberg holds twice as much water as the amount used in the United States every year. It weighs about 1.1 trillion tons, measures 2,200 square miles and its volume is twice that of Lake Erie. Its future progress is difficult to predict. It may stay in one piece, but it is more likely to break into fragments. Some of the ice may stay in the area for decades, while parts of the iceberg may drift north into warmer waters.</p>

            <p><strong>Paragraph B</strong><br>Ice shelves fringe 75 per cent of the Antarctic ice sheet. One way to assess the health of ice sheets is to look at their balance: when an ice sheet is in balance, the ice gained through snowfall equals the ice lost through melting and iceberg calving. Even relatively large calving events, where enormous ice chunks calve from the seaward front of the shelf, can be considered normal if the ice sheet is in overall balance. But sometimes, ice sheets destabilise, either through the loss of a particularly big iceberg or through disintegration of an ice shelf. When floating ice shelves disintegrate, they reduce the resistance to glacial flow and thus allow the grounded glaciers they were buttressing to significantly dump more ice into the ocean.</p>

            <p><strong>Paragraph C</strong><br>It was during the Southern Hemisphere summer of 2002 that scientists monitoring the Antarctic Peninsula watched in amazement as almost the entire Larsen B Ice Shelf splintered and collapsed into Larsen Bay in just over one month. They had never witnessed such a large area - 3,250 square kilometers, or 1,250 square miles - disintegrate so rapidly. While the collapse of the Larsen B was unprecedented in terms of scale, it was not the first ice shelf on the Antarctic Peninsula to experience an abrupt break up. The northernmost section of the Larsen Ice Shelf Complex, called Larsen A, lost about 1,500 square kilometers of ice in an abrupt event in January 1995.</p>

            <p><strong>Paragraph D</strong><br>The collapse of much of the Larsen Ice Shelves into Larsen Bay appears to have been due to a series of warm summers on the Antarctic Peninsula, one of the symptoms of global warming. Average annual temperatures on Antarctica's west side have risen nearly 5 degrees Fahrenheit since 1950, several times faster than the rest of the planet, and the winters have warmed an astonishing 9 degrees. Most of the heat trapped by our fossil fuel emissions since the industrial revolution began in the nineteenth century has gone into the ocean. In addition, circumpolar winds have driven seawater that has risen in temperature from offshore onto the continental shelf and under the floating ice shelves. Significant surface melting of ice due to warm air temperatures have created melt ponds in the ice shelves that have acted like wedges; they deepened the crevasses and eventually caused the shelf to splinter. As the surface melt ponds began to fracture the shelf, strong winds and waves flexed the shelf, helping to trigger a runaway break up. The ice debris field did not become a permanent fixture in Larsen Bay. As seasonal sea ice melted the following summer, the ice began to drift away with the currents, and in many summers since the collapses, the bay has been completely ice free.</p>

            <p><strong>Paragraph E</strong><br>The loss of part of the Larsen Ice Shelf has one specific effect. Although the collapse of any floating ice shelf does not directly add to sea level, even after it's absorbed into the sea, the removal of buttressing restraints by the ice shelves may 'unplug' land-based glaciers behind the former ice shelves, and these can then flow more rapidly into the sea, causing ocean levels to rise significantly. Following the collapse of the Larsen A and B ice shelves, the Larsen A and B glaciers experienced abrupt acceleration, about 300 per cent on average, and they suffered mass reduction. In some regions, sea ice can assist to stabilise vulnerable ice shelf margins, but global warming has caused the loss of this in polar coastal regions. Although sea ice occasionally occupies Larsen Bay during cold winters, it is no substitute for the ice shelf in terms of its influence on the Larsen glaciers. The grounded portion of the shelf used to push back against the glaciers, slowing them down. Without this pushback, the glaciers that fed the ice sheet have accelerated and thinned.</p>

            <p><strong>Paragraph F</strong><br>The calving of the ice shelves is just the warning, as they signal that a significant rise in the level of the seas is imminent, due to the glaciers behind them accelerating. This may not be important for people over the next 30 to 40 years, but in the second half of the twenty-first century, things could really escalate to create a really hazardous world, and at that point listening to scientists' warnings is too late.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            
            <h3 style="text-align: center; color: #333;">The Role of the Zoo</h3>

            <p>There are not many people in the world who haven't visited a zoo or safari park in their lifetime. Not only is a trip to the zoo a fun day out, it is a chance for many people to get relatively close to animals they are unlikely to see elsewhere. Most people nowadays recognise that not all zoos are considered equal: there are both 'good' and 'bad' zoos. Most of us would agree that the stereotypical roadside zoos known for their negligence of animals are in the 'bad' category, while we would expect zoos in developed countries to maintain higher standards of animal welfare and be among the 'good' ones. To say that all zoos are bad, however, is a blunt and sweeping indictment and the judgement fails to account for how ethical institutions enrich and ultimately protect the lives of animals, both in human care and in the wild.</p>

            <p>The role of the zoo has evolved to prioritise research, education, and conservation. Some people still condemn the existence of zoos based on zoos' past life of pure entertainment and it is true that zoos started as menageries and amusement parks. However, zoos have come a long way since the late 1800s and the current legislation protecting wild animals and guaranteeing their welfare make sure zoos and aquariums are a better place for animals to live.</p>

            <p>Zoos have an essential role in conservation, as biologist Tom Compton asserts. "Given trends regarding the disappearance of various animals, the number of species requiring conservation breeding programs is likely to increase dramatically. Today's zoos and aquariums are uniquely positioned to combat the evolving dangers threatening nature. Using robust and sophisticated breeding plans, these institutions fund and facilitate countless initiatives to propagate endangered animals and preserve genetic biodiversity, and then reintroduce critically endangered or extinct species into the wild." Currently, most zoos in developed countries have their own breeding programs and all efforts in captive breeding have led to increased research. As researcher Jake Potter puts it, "many zoos have become places of rigorous scientific research. This is coupled with an active effort not just to preserve in captivity those creatures that are endangered in the wild, but to understand, save, and replenish unique natural habitats." The benefits of zoos have been underestimated. Zookeepers, researchers, and vets now know a lot more about husbandry as zoos have evolved, and these improvements have led to increased longevity of animals in captivity and in their natural habitats.</p>

            <Not>The role of zoos in public education is also very significant. Resident zoo educator Anne Paisley points out that this is in turn important to conservation. "Zoos need to assign equal weight to teaching people and especially children about the threats that modern society offers to wildlife as they do to the entertainment value that zoos provide as a family day out. The children of today will be the ones who make decisions over conservation tomorrow." Zookeeper Tony Wilde also emphasises the importance of people seeing the animals as individuals rather than an idea from a book or television programme. "The public visiting a zoo sees many kinds of animal. Each species conforms to a set pattern, often based on facts gleaned at school. Elephants are just elephants; lions are just lions; bears are just bears. What the visitor often does not realize is that each animal is also an individual. All my zoo elephants are different to each other, and each one leaves me with a different memory". Not everyone agrees that zoos fulfil this educational function, though. Peter Grant, the zoo critic, believes that "the zoo's contribution to education is minimal and that most people show no more than casual curiosity about its animals. If zoos are teaching children anything, it's that imprisoning animals for our own entertainment is acceptable."</p>

            <p>The main argument against zoos is the belief that, even with the best intentions and conditions, a zoo cannot provide the perfect environment for every type of animal. For example, it is extremely difficult for zoos to recreate the natural environment that an elephant is used to living in. This is because in the course of a day, an elephant can walk anywhere up to 50 kilometres. Elephants also travel in packs of thirty or forty in the wild. In most zoos, elephants will usually have just several acres to walk around in and maybe a couple of other elephants, if they are lucky.</p>

            <p>People against animals being kept in zoos are also unimpressed with the attempts to create an animal friendly habitat for each occupant. Activist Pia Lundstrom argues that "zoo enclosures, while attractive and a vast improvement on the past, are rarely big enough and do not prevent the animals from becoming depressed." She goes on to argue that "by making animals live in artificial surroundings, the zoo is messing with natural mating activities, which can cause zoochosis in the animal, which is similar to the human Obsessive-Compulsive Disorder." Another problem is privacy, because the animals are living in habitats that are often extremely smaller than they are used to, the animal cannot enjoy much needed seclusion. This can also cause depression and obsessive behaviour in the animals.</p>

            <p>There is no denying that the animals kept in zoos discussion is controversial, as both sides of the argument make valid points. However, global change represents an unprecedented challenge for the maintenance of biodiversity. It is expected that even under the most optimistic impact and adaptation scenarios, a great number of species may require the integration of a suite of wildlife preservation actions, including conservation breeding programs in zoos.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            
            <h3 style="text-align: center; color: #333;">Leadership Theory</h3>

            <p>For decades, leadership theories have been the source of numerous studies. In reality as well as in practice, many have tried to define what allows authentic leaders to stand apart from the mass. Hence, there are as many theories on leadership as there are philosophers, researchers and professors.</p>

            <Subsequent>Two early theories in particular that emerged in the nineteenth century were 'great man' theory, which argued that great leaders are born, not made, and later trait theory, which argues certain characteristics and attributes are peculiar to leaders. 'Great man' theorists see history as shaped by the leadership of great men, and these theorists look at the 'great man' as being either possessed of divinely given features from which the masses in his proximity profited or having a hereditary background that transmitted natural ability to the extent that it is possible to identify the probability of an eminent person having eminent relatives. The lasting impact of 'great man' leadership can still be observed over a century later, where responsibility for having the answer to some of the world's most complex problems are placed on the shoulders of individuals, such as presidents, prime ministers and CEOs. Subsequent to the 'great man' theorists, researchers from the early to mid-twentieth century focused on traits of personality to explain leadership and sought to identify those characteristics peculiar to leaders. Bird's 1940 list of 79 relevant traits, taken from 20 psychologically oriented studies, demonstrates the extent to which traits were considered quantifiable and foreseeable. Intelligence, drive, integrity and sociability were central to the lists of almost all the researchers studying trait leadership.</p>

            <p>Although the 'great man' theory and trait theory were criticised for their lack of scientific basis in the nineteenth century, the examination of traits individually and in combination did not fall into general disfavour until the middle of the twentieth century. Paving the way for later studies, the psychologist Stogdill concluded that the qualities, characteristics, and skills required of a leader are determined to a large extent by the demands of the situation and that an adequate analysis of leadership involves a study not only of leaders, but also of situations. Stogdill also touched on the relevance of group around a leader's emergence and effectiveness, concluding that a person does not become a leader by virtue of some combination of traits; but that the pattern of personal attributes of the leader must bear some relevant relationship to the characteristics, activities, and goals of those around him. The connection between leaders and their followers would also form part of later thinking.</p>

            <p>The relationship between leaders and followers was central to the theories that emerged as trait theory fell into disfavour. The most prominent of these are the situational leadership theory and the contingency model of decision making. The 1969 situational leadership theory was based on an interpretation of existing empirical research. Researchers proposed that different leadership styles are employed depending on the situation, as defined by both the orientation of the manager, who can be either task or relations focused, and the maturity or experience of the employee. In this model, the most effective leadership matches the leader's orientation with the subordinate's maturity, beginning with directing newly appointed or less experienced employees in their tasks, then coaching employees with more experience, through to supporting, where managers engage employees' maturity and knowledge to complete tasks. The final style is delegating, which recognises that fully mature subordinates work best when leaders delegate what needs to be done.</p>

            <p>The contingency theory was based on rigorous deduction and support from controlled empirical studies and experiments to develop a model to assist leaders to determine the most effective approach to decision making. The model suggests the leadership decision style most conducive to effectiveness depends on the characteristics of the situation, and on whether a balance is achieved between a high-quality decision and a positive response to the decision by subordinates. Leaders work through a series of questions resulting in a recommended decision-making style ranging from directive to consultative, and on to participative decision making. A final style, delegative, was added later.</p>

            <p>Both the situational leadership and the contingency models have been challenged. The situational leadership model has been criticised because of the lack of internal consistency of its measures, its conceptual contradictions, and its ambiguities, and that the model appears to have no theoretical or logical justification. The contingency model has been criticised as it was judged to be detrimental to a group's efficiency and subordinates' job satisfaction. Critics acknowledged that the contingency model was solely potentially helpful as a tool for weighing up situational factors to find an appropriate decision making approach.</p>

            <p>Finally, the 1970's and 1980's saw the emergence of transactional leadership and transformational leadership theories. Transactional leadership describes a relationship in which the leader initiates an exchange of valued things that motivate and bind followers to the leader. At its most basic, transactional leadership is the swap of recompense for labour, with the rewards being psychological or material in nature. Transactional leadership also promotes the concept of a lack of compliance being penalised. Transformational leadership, on the other hand, originates in the personal values and beliefs of leaders, not in an exchange of commodities between leaders and followers. Proponents of transformational leadership claim that rather than leading with only a transformational leadership style or a transactional leadership style, the transformational leadership approach can augment the effects of transactional leadership and even other approaches.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          type: "matching_info",
          title: "Questions 1-6",
          instruction: "The text on the previous pages has 6 paragraphs <strong>A - F</strong>. Which paragraph contains the following information?",
          options: ["A", "B", "C", "D", "E", "F"],
          items: [
            { qNum: 1, text: "Pools of water forming within ice shelves contribute to the break off of icebergs.", answer: "D" },
            { qNum: 2, text: "Long-term future sea levels could be very dangerous.", answer: "F" },
            { qNum: 3, text: "The Larsen B ice shelf broke off relatively quickly.", answer: "C" },
            { qNum: 4, text: "The majority of Antarctica is ringed with ice shelves.", answer: "B" },
            { qNum: 5, text: "The break up of the Larsen Ice Shelves was observed from space.", answer: "A" },
            { qNum: 6, text: "The eventual melting of ice broken off from the Larsen Ice Shelf will not directly contribute to rising sea levels.", answer: "E" }
          ]
        },
        {
          type: "matching",
          title: "Questions 7-9",
          instruction: "Complete each sentence with the correct ending <strong>(A - F)</strong> below.",
          options: [
            "A. cause a catastrophic event for wildlife in the area.",
            "B. create equilibrium after iceberg release.",
            "C. have resulted in a record-breaking iceberg in terms of size.",
            "D. stop the formation of sea ice.",
            "E. remain relatively near to where it broke off.",
            "F. endanger nearby shipping."
          ],
          items: [
            { qNum: 7, text: "The slow deterioration of the Larsen ice shelves may", answer: "C" },
            { qNum: 8, text: "Some broken off ice from the giant Larsen C iceberg might", answer: "E" },
            { qNum: 9, text: "New ice from snow on ice shelves can", answer: "B" }
          ]
        },
        {
          type: "gap",
          title: "Questions 10-13",
          instruction: "Answer the questions below. Write <strong>NO MORE THAN TWO WORDS</strong> from the text for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p>10. What was responsible for sending warmer water beneath the Antarctic ice shelves?<br><span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10"></p>
                <p>11. What was reduced in the Larsen A and B glaciers following the calving of the Larsen A and B ice shelves?<br><span class="q-badge-inline">11</span><input type="text" class="gap-input" data-qnum="11" id="q-11"></p>
                <p>12. What can help to slow down Antarctic glaciers in the absence of ice shelves?<br><span class="q-badge-inline">12</span><input type="text" class="gap-input" data-qnum="12" id="q-12"></p>
                <p>13. What could become unimportant if the sea rises uncontrollably?<br><span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="q-13"></p>
            </div>
          `,
          items: [
            { qNum: 10, answer: ["circumpolar winds", "winds"] },
            { qNum: 11, answer: "mass" },
            { qNum: 12, answer: "sea ice" },
            { qNum: 13, answer: ["Scientists' warnings", "warnings"] }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          type: "matching",
          title: "Questions 14-19",
          instruction: "Look at the following statements (questions 14-19) and the list of people below. Match each statement with the correct person's initials.",
          options: [
            "TC. Tom Compton",
            "JP. Jake Potter",
            "AP. Anne Paisley",
            "TW. Tony Wilde",
            "PG. Peter Grant",
            "PL. Pia Lundstrom"
          ],
          items: [
            { qNum: 14, text: "The existence of zoos demonstrates that it is normal to put animals in cages.", answer: "PG" },
            { qNum: 15, text: "Teaching the young about conservation should be as much of a priority for zoos as people just enjoying their day at the zoo.", answer: "AP" },
            { qNum: 16, text: "Zoos today have programs to ensure a variety of individuals of threatened species to ensure healthy breeding numbers.", answer: "TC" },
            { qNum: 17, text: "The habitats provided for animals in zoos are better than they used to be.", answer: "PL" },
            { qNum: 18, text: "Zoos help researchers understand the environments in which animals live.", answer: "JP" },
            { qNum: 19, text: "Seeing an animal in the flesh allows the public to identify with the animal as a living entity.", answer: "TW" }
          ]
        },
        {
          type: "gap",
          title: "Questions 20-23",
          instruction: "Complete the sentences below. Write <strong>NO MORE THAN ONE WORD</strong> from the text for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p>20. <span class="q-badge-inline">20</span><input type="text" class="gap-input" data-qnum="20" id="q-20"> is generally agreed to be a common fault of roadside zoos.</p>
                <p>21. Laws ensuring the <span class="q-badge-inline">21</span><input type="text" class="gap-input" data-qnum="21" id="q-21"> of animals is one way in which zoos have been made to improve since the bad old days.</p>
                <p>22. <span class="q-badge-inline">22</span><input type="text" class="gap-input" data-qnum="22" id="q-22"> indicate the growing need for zoos to plan the controlled increase of certain species' numbers.</p>
                <p>23. Better <span class="q-badge-inline">23</span><input type="text" class="gap-input" data-qnum="23" id="q-23"> learned in zoos has led to certain species living for longer periods in zoos and in the wild.</p>
            </div>
          `,
          items: [
            { qNum: 20, answer: ["Negligence", "negligence"] },
            { qNum: 21, answer: "welfare" },
            { qNum: 22, answer: ["Trends", "trends"] },
            { qNum: 23, answer: "husbandry" }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 24-26",
          instruction: "Choose <strong>THREE</strong> letters, <strong>A - G</strong>. According to the text, what are some of the disadvantages of zoos?",
          options: [
            "A. Zoos don't invest enough money in providing effective educational experiences for visitors.",
            "B. Zoos don't teach people anything apart from on a very superficial level.",
            "C. Carnivorous animals in zoos suffer from not being able to hunt their prey in a realistic way.",
            "D. Some animals in zoos don't have the opportunity to live in their realistic family groups.",
            "E. Many zoos do not employ sufficient staff to care properly for their animals.",
            "F. Animals suffer from not being able to breed in a realistic way in zoos.",
            "G. Too many zoos engage in unethical practices when buying animals for their displays."
          ],
          items: [
            { qNums: [24, 25, 26], answer: ["B", "D", "F"] }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          type: "matching",
          title: "Questions 27-33",
          instruction: "Look at the characteristics of different leadership theories (questions 27 - 33) and match them to the appropriate theory (A - F).",
          options: [
            "A. Great Man Theory",
            "B. Trait Theory",
            "C. Situational Leadership Theory",
            "D. Contingency Model of Decision Making",
            "E. Transactional Leadership Theory",
            "F. Transformational Leadership Theory"
          ],
          items: [
            { qNum: 27, text: "Effective leadership involves including elements of different theories.", answer: "F" },
            { qNum: 28, text: "Effective leadership involves the understanding that there is an exchange of work for reward.", answer: "E" },
            { qNum: 29, text: "Effective leadership characteristics are measureable and predictable.", answer: "B" },
            { qNum: 30, text: "Effective leadership weighs making the best decision for the situation against making a decision that employees will accept.", answer: "D" },
            { qNum: 31, text: "Effective leadership characteristics are inherited.", answer: "A" },
            { qNum: 32, text: "Effective leadership includes the threat of employees being punished.", answer: "E" },
            { qNum: 33, text: "Effective leadership depends on the priorities of the manager in question and how experienced the employees are.", answer: "C" }
          ]
        },
        {
          type: "gap",
          title: "Questions 34-37",
          instruction: "Complete the summary using the words in the box below.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">Great Man Theory and Trait Theory</h3>
              <p>Great man theory and trait theory are two early leadership theories, which try to explain the particular features that successful leaders possess. Great man supporters believe 'great man' leadership is a (34) <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34"> for the public's benefit, or that leadership is genetic. Trait theory supporters focus on character and seek to identify measurable characteristics that can be (35) <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"> in good leaders. Both theories were criticised for not enough (36) <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36"> in science. Stogdill's ideas explore leaders' qualities in conjunction with situation and the importance of the leaders' (37) <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37">.</p>
              
              <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; background: #fff; font-size: 0.9em; display: flex; flex-wrap: wrap; gap: 15px;">
                 <div style="width: 100%; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 5px; font-weight: bold;">Options:</div>
                 <div style="width: 30%;">foundation</div>
                 <div style="width: 30%;">copied</div>
                 <div style="width: 30%;">family</div>
                 <div style="width: 30%;">curse</div>
                 <div style="width: 30%;">gift</div>
                 <div style="width: 30%;">followers</div>
                 <div style="width: 30%;">exceptions</div>
                 <div style="width: 30%;">observation</div>
                 <div style="width: 30%;">pressure</div>
                 <div style="width: 30%;">predictable</div>
              </div>
            </div>
          `,
          items: [
            { qNum: 34, answer: "gift" },
            { qNum: 35, answer: "predictable" },
            { qNum: 36, answer: "foundation" },
            { qNum: 37, answer: "followers" }
          ]
        },
        {
          type: "mcq_single",
          title: "Questions 38-40",
          instruction: "Choose the correct letter <strong>A, B, C or D</strong>.",
          items: [
            {
              qNum: 38,
              text: "The last phase of situational leadership theory is when",
              options: [
                "A. the leader increases the employees' maturity.",
                "B. the leader is promoted.",
                "C. the leader allocates tasks to others.",
                "D. the leader does not need any further training."
              ],
              answer: "C"
            },
            {
              qNum: 39,
              text: "A later stage of contingency theory leadership is that",
              options: [
                "A. leaders are often less liked.",
                "B. leaders require more training.",
                "C. leaders become more authoritarian.",
                "D. leaders accept advice from the people they lead."
              ],
              answer: "D"
            },
            {
              qNum: 40,
              text: "The contingency leader theory has been attacked because",
              options: [
                "A. few leaders find it effective.",
                "B. it can lessen employee fulfilment at work.",
                "C. it copied too much from situational theory.",
                "D. it created authoritarian leaders."
              ],
              answer: "B"
            }
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
        image: "https://i.postimg.cc/d1ZmTXJr/Screenshot-2026-05-06-164031.png  ", 
        prompt: `
          The line chart below shows the rates of deforestation in the Brazilian Amazon for the years 2008 to 2017 and the pie chart below shows the causes for deforestation in the Brazilian Amazon for the same years.

          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

          You should write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          Too many young people and too many old people do not exercise enough.

          What is causing this? What can be done to change this?

          Give reasons for your answer and include any relevant examples from your knowledge or experience.

          You should write at least 250 words.
        `
      }
    }
  }
};