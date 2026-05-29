// src/data/sm6_test29.js

export const sm6_test29 = {
  id: "mt32",
  category: "full",
  testName: "MOCK TEST 32",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENINGmt
    // ==========================================================================
    listening: {
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/beablevn-ielts.firebasestorage.app/o/audio%2Fmt32.mp3?alt=media&token=f0d82264-67bd-4658-b62a-dab44b14105d", // Thay bằng đường dẫn file audio thực tế
      timeLimit: 1621, // 30 phút
      passage: "<h3 style='text-align:center; color:#002554;'>MOCK TEST 29 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-5",
          instruction: "Complete the form below. Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Jarvis Removal Services</h3>
                <h4 style="text-align:center; color:#555; margin-top:0; border-bottom: 1px solid #ccc; padding-bottom: 10px;">Customer Information</h4>
                
                <table style="width:100%; border-collapse: collapse;">
                    <tbody>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold; width: 35%;">Customer's Name:</td>
                            <td style="padding: 10px;">Mark Watson</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Leaving Address:</td>
                            <td style="padding: 10px;">(1) <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1" style="width: 50px;"> Alexander Crescent<br>Harding<br>HA4 3DE</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Arrival Address:</td>
                            <td style="padding: 10px;">42 (2) <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2" style="width: 120px;"> Street<br>Lexington<br>LE2 9JU</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Telephone:</td>
                            <td style="padding: 10px;">
                                Home: n/a<br>
                                Work: n/a<br>
                                Mobile: 09976 (3) <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3" style="width: 80px;"> 327
                            </td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold;">Start Time:</td>
                            <td style="padding: 10px;">At (4) <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4" style="width: 50px;"> a.m.</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; font-weight: bold;">Bill Payment Method:</td>
                            <td style="padding: 10px;">Mr. Watson will do a (5) <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5" style="width: 120px;"> after receiving our invoice.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
          items: [
            { qNum: 1, answer: "30" },
            { qNum: 2, answer: "Finchley" },
            { qNum: 3, answer: "794" },
            { qNum: 4, answer: "8" },
            { qNum: 5, answer: "transfer" }
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 6-9",
          instruction: "Choose <strong>FOUR</strong> letters, <strong>A - H</strong>. What items will be moved from Mark's house by the removal company?",
          options: [
            "A. Carpets",
            "B. A wardrobe",
            "C. A deep freeze",
            "D. A chest",
            "E. A television",
            "F. A bath tub",
            "G. A fridge",
            "H. A clock"
          ],
          items: [
            { qNums: [6, 7, 8, 9], answer: ["B", "D", "E", "H"] } // Theo transcript: wardrobes (B), TV (E), chest (D), clock (H). Audio says "I'm leaving the fridge, deep freeze...". Wait, A (Carpets)? Transcript says "wardrobes(6), TV(7), chest(8), grandfather clock(9)". The PDF options are different from transcript? PDF options: A. Carpets, B. A wardrobe, C. A deep freeze, D. A chest, E. A television, F. A bath tub, G. A fridge, H. A clock. Transcript: wardrobes, TV, chest, grandfather clock. So answers are B, D, E, H. (Key says A, C, F, H. Let's re-verify Key vs Transcript. Key says A, C, F, H. But transcript says "wardrobes (Q6), TV (Q7), chest (Q8), grandfather clock (Q9)". I will map exactly to transcript. If the key says A, C, F, H it might be a typo in the book's answer key relative to the letters. Let's use the actual letters matching the transcript: B (wardrobe), E (TV), D (chest), H (clock). For safety against the book's key, I'll allow both or stick to the exact letters matching the spoken words. Let's use A, C, F, H as the correct answer array to match the book's key, but it's likely a misprint in the book. Wait, I will put A, C, F, H to be strictly compliant with the book's key. Actually, I will put the ones that make sense from the transcript.) Let me use the transcript mapping: B, D, E, H. But the book key says A, C, F, H. Let's just output A, C, F, H to match the official key. 
            // Sửa lại: Trong bộ đề Cambridge, nhiều khi thứ tự A,B,C,D trong key bị xáo trộn. Tôi sẽ để đáp án A, C, F, H theo Key chính thức.
            // Sửa lại lần 2: Đọc kỹ Transcript: "wardrobes (Q6), TV (Q7), chest (Q8), grandfather clock (Q9)". Vậy đáp án ĐÚNG THEO NỘI DUNG là B, E, D, H.
          ]
        },
        // Ghi đè lại cẩn thận theo transcript. Transcript: "wardrobes (Q6), TV (Q7), chest (Q8), grandfather clock (Q9)". 
        // Trong options: B (A wardrobe), E (A television), D (A chest), H (A clock). 
        // -> Sửa lại qNums mapping để chấm đúng theo text.
        {
          type: "mcq_single",
          title: "Question 10",
          instruction: "Choose the correct letter <strong>A, B or C</strong>.",
          items: [
            {
              qNum: 10,
              text: "What is Mark's decision regarding the insurance that Sophie offers?",
              options: [
                "A. Mark takes the insurance.",
                "B. Mark doesn't take the insurance.",
                "C. Mark says he'll decide later."
              ],
              answer: "C"
            }
          ]
        },

        // --- PART 2 ---
        {
          type: "gap",
          title: "Part 2: Questions 11-15",
          instruction: "Complete the flow chart below. Write <strong>NO MORE THAN ONE WORD AND/OR A NUMBER</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd; margin-bottom: 20px;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">The Life of Michael Hallam</h3>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    <strong>1896-1914:</strong> Michael Hallam born; brought up in Bristow ((11) <span class="q-badge-inline">11</span><input type="text" class="gap-input" data-qnum="11" id="q-11" style="width:50px;"> miles outside Oxford). Attended primary school in Bristow village school. Attended secondary school in Oxford; accepted at Oxford University.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    <strong>1914-1921:</strong> Joined the army at the outbreak of World War 1. Posted to France; seriously wounded and hospitalised. Slow convalescence over 2 years, followed by studying engineering and (12) <span class="q-badge-inline">12</span><input type="text" class="gap-input" data-qnum="12" id="q-12"> at Oxford University. First jobs in engineering.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    <strong>1921-1939:</strong> Moved to British East Africa (now Kenya). He became a partner in the engineering firm, East Africa Engineering. Many different engineering projects undertaken: roads, the airport, (13) <span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="q-13">, bridges, sewers + others.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    <strong>1939-1950:</strong> Lecturer at Military Engineering Establishment during World War Two. Lost his son in the war. Joined Board of Directors of East Africa Engineering at the end of World War Two.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    <strong>1950-1966:</strong> Member of Parliament for Oxford. Hallam (14) <span class="q-badge-inline">14</span><input type="text" class="gap-input" data-qnum="14" id="q-14"> from East Africa Engineering in 1961 and in the same year became Oxford's mayor for 5 years.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff;">
                    <strong>1966-1980:</strong> Full Retirement. Hallam continued to be active in local events. He was chairman + (15) <span class="q-badge-inline">15</span><input type="text" class="gap-input" data-qnum="15" id="q-15"> of Bristow Football Club. Michael Hallam died at the age of 84 in 1980.
                </div>
            </div>
          `,
          items: [
            { qNum: 11, answer: "5" },
            { qNum: 12, answer: "mathematics" },
            { qNum: 13, answer: "railways" },
            { qNum: 14, answer: "retired" },
            { qNum: 15, answer: "president" }
          ]
        },
        {
          type: "gap",
          title: "Questions 16-20",
          instruction: "Complete the sentences below. Write <strong>NO MORE THAN ONE WORD</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
                <p>16. Michael Hallam became well known in Oxford because he was involved in <span class="q-badge-inline">16</span><input type="text" class="gap-input" data-qnum="16" id="q-16">, local business and bettering the community.</p>
                <p>17. Michael Hallam ensured that Oxford had a new school, because his old one had become <span class="q-badge-inline">17</span><input type="text" class="gap-input" data-qnum="17" id="q-17">.</p>
                <p>18. The Hallam Foundation helps poorer students who wish to go to university to pay their <span class="q-badge-inline">18</span><input type="text" class="gap-input" data-qnum="18" id="q-18"> and also their living expenses.</p>
                <p>19. Michael Hallam was also responsible for the new Oxford ring road and the <span class="q-badge-inline">19</span><input type="text" class="gap-input" data-qnum="19" id="q-19"> of the train station.</p>
                <p>20. A <span class="q-badge-inline">20</span><input type="text" class="gap-input" data-qnum="20" id="q-20"> is now available to watch if people want to know more about Michael Hallam.</p>
            </div>
          `,
          items: [
            { qNum: 16, answer: "politics" },
            { qNum: 17, answer: "neglected" },
            { qNum: 18, answer: "fees" },
            { qNum: 19, answer: "renovation" },
            { qNum: 20, answer: "documentary" }
          ]
        },

        // --- PART 3 ---
        {
          type: "matching",
          title: "Part 3: Questions 21-25",
          instruction: "Match the person (questions 21-25) with the role <strong>(roles A - H)</strong>.",
          options: [
            "A. Managing new student admissions",
            "B. Managing exchange programs",
            "C. Managing parking permission on campus",
            "D. Managing complaints",
            "E. Managing exam failures",
            "F. Managing the assigning of course tutors",
            "G. Managing course changes",
            "H. Managing course fee payments"
          ],
          items: [
            { qNum: 21, text: "Mrs. Greenwood", answer: "C" },
            { qNum: 22, text: "Mr. Jameson", answer: "H" },
            { qNum: 23, text: "Dr. Bird", answer: "E" },
            { qNum: 24, text: "Mrs. Churchill", answer: "B" },
            { qNum: 25, text: "Mr. Thomson", answer: "F" }
          ]
        },
        {
          type: "gap",
          title: "Questions 26-30",
          instruction: "Complete the table below. Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#fff; padding:20px; border-radius:8px; border: 1px solid #ddd; overflow-x: auto;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Law Course Details</h3>
                <table style="width:100%; border-collapse: collapse; min-width: 600px;">
                    <thead>
                        <tr style="background:#002554; color:white;">
                            <th style="padding:10px; border:1px solid #ccc; text-align:left;">Course Name</th>
                            <th style="padding:10px; border:1px solid #ccc; text-align:left;">Lecturer's Name</th>
                            <th style="padding:10px; border:1px solid #ccc; text-align:left;">Lecture Hall Number</th>
                            <th style="padding:10px; border:1px solid #ccc; text-align:left;">Good for a job in ...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">(26) <span class="q-badge-inline">26</span><input type="text" class="gap-input" data-qnum="26" id="q-26" style="width: 80px;"> Law</td>
                            <td style="padding:10px; border:1px solid #ccc;">Mr. Kindred</td>
                            <td style="padding:10px; border:1px solid #ccc;">312</td>
                            <td style="padding:10px; border:1px solid #ccc;">Commerce</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Company + Business Law</td>
                            <td style="padding:10px; border:1px solid #ccc;">Mr. Kindred</td>
                            <td style="padding:10px; border:1px solid #ccc;">312</td>
                            <td style="padding:10px; border:1px solid #ccc;">Commerce</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">International Law</td>
                            <td style="padding:10px; border:1px solid #ccc;">Dr. Bird</td>
                            <td style="padding:10px; border:1px solid #ccc;">314</td>
                            <td style="padding:10px; border:1px solid #ccc;">(27) <span class="q-badge-inline">27</span><input type="text" class="gap-input" data-qnum="27" id="q-27"></td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Immigration Law</td>
                            <td style="padding:10px; border:1px solid #ccc;">Dr. Bird</td>
                            <td style="padding:10px; border:1px solid #ccc;">318</td>
                            <td style="padding:10px; border:1px solid #ccc;">Departments in (28) <span class="q-badge-inline">28</span><input type="text" class="gap-input" data-qnum="28" id="q-28"></td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Family Law</td>
                            <td style="padding:10px; border:1px solid #ccc;">Mrs. Churchill</td>
                            <td style="padding:10px; border:1px solid #ccc;">315</td>
                            <td style="padding:10px; border:1px solid #ccc;">A solicitor's office</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">(29) <span class="q-badge-inline">29</span><input type="text" class="gap-input" data-qnum="29" id="q-29" style="width: 80px;"> Law (Tort)</td>
                            <td style="padding:10px; border:1px solid #ccc;">Mrs. Churchill</td>
                            <td style="padding:10px; border:1px solid #ccc;">315</td>
                            <td style="padding:10px; border:1px solid #ccc;">A solicitor's office</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Tax Law</td>
                            <td style="padding:10px; border:1px solid #ccc;">Professor Hurd</td>
                            <td style="padding:10px; border:1px solid #ccc;">311</td>
                            <td style="padding:10px; border:1px solid #ccc;">A tax advisor's office</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">(30) <span class="q-badge-inline">30</span><input type="text" class="gap-input" data-qnum="30" id="q-30" style="width: 80px;"> Law</td>
                            <td style="padding:10px; border:1px solid #ccc;">Professor Hurd</td>
                            <td style="padding:10px; border:1px solid #ccc;">311</td>
                            <td style="padding:10px; border:1px solid #ccc;">A barrister's office</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
          items: [
            { qNum: 26, answer: "Contract" },
            { qNum: 27, answer: ["International relations", "international relations"] },
            { qNum: 28, answer: "government" },
            { qNum: 29, answer: "Liability" },
            { qNum: 30, answer: "Criminal" }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-37",
          instruction: "Complete the notes below. Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">Icelandic Sheep Farming</h3>
              
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>Sheep farming not widespread - only around 2000 farmers.</li>
                <li>(31) <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="q-31"> usually run the farms, still using traditional methods.</li>
                <li>Icelandic sheep come from Viking settlers and have not been (32) <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="q-32"> since then.</li>
                <li>The sheep are hardy + cope with the tough conditions - these also affect the sheep's food.</li>
                <li>The sheep are free-range.</li>
                <li>The sheep's muscles contain lots of Omega-3 fatty acids + (33) <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33">.</li>
                <li>Icelandic farmers work closely with scientists.</li>
                <li>90% of stocks are registered in a (34) <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34">.</li>
                <li>Traditional focus is on quality of meat and muscle content.</li>
                <li>Breeding advances have also been made.</li>
                <li>Recent focus on reducing the meat's (35) <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"> content.</li>
                <li>Although Iceland is far north, it follows the (36) <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36"> for sheep.</li>
                <li>The food eaten in the mountains affects the meat's flavour.</li>
                <li>Traditionally, sheep ranged far from home in mountain pastures, but they are often now kept in home pastures, due to flock reductions.</li>
                <li>Flocks are gathered in autumn, usually with horses and dogs - the process can take up to a week.</li>
                <li>(37) <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37"> are used for identifying sheep and then they're put into designated pens.</li>
                <li>On the last night, there is a traditional celebration.</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "Families" },
            { qNum: 32, answer: "crossbred" },
            { qNum: 33, answer: "iron" },
            { qNum: 34, answer: ["breeding database", "database"] },
            { qNum: 35, answer: "fat" },
            { qNum: 36, answer: ["European management", "European seasonal management", "seasonal management"] },
            { qNum: 37, answer: ["Earmarks", "earmarks"] }
          ]
        },
        {
          type: "gap",
          title: "Questions 38-40",
          instruction: "Complete the diagram below. Write <strong>NO MORE THAN THREE WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 30px; width: 100%; clear: both;">
                <h4 style="color:#002554; margin-bottom: 15px; text-align: center;">Icelandic Sheep Farm Temporary Fence</h4>
                
                <div style="display: block; width: 100%; text-align: center; margin-bottom: 20px;">
                    <img src="https://i.postimg.cc/4dTNzLcj/Screenshot-2026-05-06-165827.png" alt="Icelandic Sheep Farm Temporary Fence" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;" />
                </div>
                
                <div style="background: #f9f9f9; padding: 20px 30px; border-radius: 8px; border: 1px solid #ddd; width: fit-content; margin: 0 auto; text-align: left;">
                    <div style="margin-bottom: 15px; display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">38.</strong> 
                        <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="q-38">
                    </div>
                    <div style="margin-bottom: 15px; display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">39.</strong> 
                        <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="q-39">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">40.</strong> 
                        <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="q-40">
                    </div>
                </div>
            </div>
          `,
          items: [
            { qNum: 38, answer: "reel" },
            { qNum: 39, answer: ["An alert", "alert"] },
            { qNum: 40, answer: ["A solar energiser", "solar energiser", "A solar energizer", "solar energizer"] }
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
            
            <h3 style="text-align: center; color: #333;">Blue Sharks</h3>
            
            <p><strong>Paragraph A</strong><br>The blue shark inhabits a great diversity of areas around the world. It dwells in temperate, tropical and subtropical waters up to 350 meters deep and is found near all coasts except those of Antarctica. It concentrates mainly in latitudes between 20 degrees and 50 degrees north and likes waters with temperatures of between 7 degrees and 16 degrees centigrade, although it can tolerate warmer temperatures slightly above 21 degrees Celsius. It likes approaching shores, where divers and boats see it often. The blue shark inhabits the shallower zones near the coasts and the continental shelves, but if it dwells in tropical waters, then it tends to be found in deeper waters.</p>

            <p><strong>Paragraph B</strong><br>The blue shark is a carnivorous predator that feeds on about 24 species of cephalopods and 16 species of fish. Its diet includes octopus, squid, mackerel, tunas, lobsters, crabs, small sharks and occasionally seabirds. They usually seek to catch small prey, but if they find large mammal carrion, it will become part of their food. The blue shark surrounds its prey before attacking it. When needed, it joins with other sharks of the same species and cooperates to attack larger prey and facilitate its capture. Its swimming speed and its triangular teeth help the shark to tear the skin and flesh of the most complicated of animals. Because it is rather easily excited by the presence of almost anything perceived as prey, the blue shark has made some attacks on people, establishing notoriety amongst divers. As in other shark species, there are rows of teeth present, each row being in a progressively different stage of development. As the front teeth fall out or break, new ones replace them from the next row.</p>

            <p><strong>Paragraph C</strong><br>Many sharks are solitary, but blue sharks live in small groups called schools. Some of these groups consist only of females and others consist only of males. Within each group, there is a certain order, with the largest member often being the leader of the group. They travel in these groups for protection and they also often hunt in groups.</p>

            <p><strong>Paragraph D</strong><br>Blue Sharks are highly migratory with complex movement patterns and spatial structure related to reproduction and the distribution of prey. There tends to be a seasonal shift in population abundance to higher latitudes associated with oceanic convergence or boundary zones, as these are areas of higher productivity. Tagging studies of blue sharks have demonstrated extensive movements in the Atlantic with numerous trans-Atlantic migrations, which are accomplished by utilising current systems. The blue shark is a slow-swimming animal that increases its speed when stimulated by external factors, such as the presence of animals on which it can feed. If this happens, it then becomes one of the fastest fish.</p>

            <p><strong>Paragraph E</strong><br>The blue shark reaches reproductive maturity at around 5 or 6 years old, after which it can reproduce through viviparity. The blue shark migrates northward to deliver their offspring and, after mating, both mother and father separate and do not join again, since this species is polygamous. Reproduction has been reported as seasonal in most areas, with the young often born in spring or summer, although the periods of ovulation and parturition may be extended. After a gestation period lasting between 9 and 12 months, the female gives birth to a large number of offspring. An unusual case was a mother that had 130 pups, but the average amount ranges between 25 and 50. The newborns soon separate from their mother who does not provide any parental care.</p>

            <p><strong>Paragraph F</strong><br>The most significant challenge faced by the blue shark is that of fishing, as millions of individual animals are caught every year, mainly as bycatch in long-line and trawl fisheries. The fins are used for consumption and the skin for leather and leather products. The oil produced in the liver for buoyancy is also in high demand. After death, the meat is rapidly contaminated by secreted ammonia and so is not widely valued. Landed carcasses can be processed for fishmeal, but loopholes in EC legislation mean that many are still discarded at sea. Fisheries catch data assessments suggest a 60 per cent decline of blue shark populations in the northwest Atlantic, and declines have been observed elsewhere in this range. Better monitoring of these fisheries is needed to determine Atlantic trends, as there are real concerns about the impacts of the removal of so many animals from the ecosystem. The blue shark is also the target of sports fishing in the United States, Australia and some parts of Europe, though sharks are usually released unharmed after capture. As a consequence of all this, the blue shark is 'Near Threatened', according to the Red List of the International Union for the Conservation of Nature. Blue sharks also have a few predators, including larger sharks such as the mako and the great white. They are also eaten by sea lions and seals, which eat just their stomach and liver.</p>

            <p><strong>Paragraph G</strong><br>International obligations that regulate the fishing of sharks include the United Nations, the International Plan of Action for Sharks, and the U.S. Sustainable Fisheries Act. Although some countries have banned finning, there are no binding international treaties for the management of sharks, including the regulation or outlawing of finning. The blue shark is listed on Annex I of the 1982 Convention on the Law of the Sea, which stresses the need for international cooperation in the conservation, management and utilisation of living aquatic resources, especially of migratory species. This does not, however, enforce any regulations. Fortunately, the blue shark is a prolific species and its distribution offers a reasonable buffer against total removal from the ecosystem.</p>

            <div style="font-size: 0.85em; color: #555; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px;">
                <p><strong>Glossary</strong></p>
                <p><strong>Viviparity:</strong> The ability to give birth to live young that have already reached an advanced stage of development.</p>
                <p><strong>Gestation:</strong> The state of being pregnant; the period from conception to birth.</p>
            </div>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            
            <h3 style="text-align: center; color: #333;">Dyscalculia</h3>

            <p>Dyscalculia is defined as difficulty in acquiring basic arithmetic skills that is not explained by low intelligence or inadequate schooling. About 5 per cent of children in primary schools are affected, which is a relatively constant figure across the countries of the world. Children with dyscalculia are likely to struggle in maths lessons, which often leads to anxiety and low self-esteem. Numeracy problems impact more negatively on job prospects than literacy problems, so dyscalculia is very likely to affect people into adulthood.</p>

            <p>Dyscalculia is often associated with mental disorders, but the causes of it are not clearly understood. There is, however, evidence to suggest that dyscalculia may have a genetic component. If one identical twin has the condition, there is a chance of around 70 per cent that the other twin will also be dyscalculic. For non-identical twins, who have less genetic material in common than identical twins, yet also share the same environment, this chance is lower, at around 55 per cent.</p>

            <p>Difficulty in learning arithmetic, like difficulty in learning to read and write, is a common learning disorder in childhood. Many affected children acquire a negative approach to counting and arithmetic, which, in turn, often develops into a specific mathematics anxiety or even a generalised school phobia. Unless specifically treated, dyscalculia persists into adulthood and it can lastingly impair personality development, schooling, and occupational training. Dyscalculia is also an economic issue, as adults with poor arithmetic skills suffer a major disadvantage in the job market. The mental disorders commonly associated with dyscalculia are expensive to treat. Thus, the early recognition and differential identification of learning disorders are an important matter, not just for child psychiatrists, who must often deal with the secondary conditions that arise from these disorders, but also for general practitioners and pediatricians, as the delayed acquisition of pre-scholastic skills in the nursery and kindergarten years may already be an early sign of a problem.</p>

            <p>The process of developing number skills requires some knowledge of cognitive neuroscience. Functional imaging studies have shown that, with increasing practice and expertise, number skills are centred in multiple brain areas. Number-words are processed in the speech areas of the left brain region and Arabic numerals in the back of the brain. Basic numerical representations and the numerical-spatial representations that develop later on are processed on both sides of the brain, and these latter processes become increasingly functionally specialised as a child grows older and acquires more education. The development and maturation in children of these domain-specific brain functions depends on the maturation of numerous domain-specific or multi-domain functions, including attention and working memory language, sensorimotor function and visuospatial ideation. This development also depends on a child's learning over time and the type of teaching methods used on the child. Clearly, at any time in a child's development, many different factors could disturb or delay the maturation of these neural networks, causing clinically evident manifestations of various kinds, including dyscalculia.</p>

            <p>When dyscalculia is suspected, a detailed diagnostic evaluation is needed in order to take proper account of the complexity of this learning disorder and to produce an accurate picture of the affected child's particular strengths and weaknesses in the area of numbers and calculations. The diagnostic instruments used for this purpose are of two main types: the curricular and the neuropsychological. As the affected children often perform far below grade level on numerical and calculating tasks, the use of curricular tests related to grade alone may not yield a complete picture of the actual performance deficit. This can, in turn, lead to inappropriate interventions with little promise of efficacy, because the child's performance is not really at the level for which the intervention was designed.</p>

            <p>Some experts have questioned whether it is practical from an educational point of view to distinguish dyscalculic people from others with low maths ability. Others suggest that such differentiation is important because dyscalculic people need training on very simple number concepts which other people, including those who have low maths ability for other reasons, take for granted.</p>

            <A>The effective treatment of dyscalculia demands special expertise, which is most likely to be found among graduates of specialised training, and continuing-education programs that have been certified by recognised professional associations. Recently, bachelor's and master's degree programs for specific training in learning therapy targeting dyscalculia have been initiated at universities and professional training institutes. Learning therapies can be carried out either in school, in conjunction with school, or outside school. As a rule, interventions can succeed only when they are ecologically valid, i.e., when they can take effect in the setting of the child's everyday life. A further role for the treating physician or psychologist may be to point out that an established legal framework exists (dependent on country) for giving the affected persons special means to compensate for their learning difficulty in situations calling for high performance, including situations where their performance will be evaluated. Whatever opportunities of this kind are available should be tried out in the individual case and made use of where appropriate.</p>

            <p>In summary, the main roles of the treating pediatrician or family physician centres are on the early recognition of dyscalculia and directing the child's parents and other carers towards appropriate counseling regarding diagnostic and therapeutic measures. Early recognition largely depends on information provided by the child's parents or other carers. Depending on the age of the child, specific questions should be asked about his or her understanding of quantity, counting skills, and mathematical performance in school to date. The history should also include questions about any secondary disturbances that might be present, for example, dislike of school, mathematics anxiety, and school phobia.</p>

            <div style="font-size: 0.85em; color: #555; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px;">
                <p><strong>Glossary</strong></p>
                <p><strong>Visuospatial:</strong> Relating to or denoting the visual perception of the spatial relationships of objects.</p>
                <p><strong>Ideation:</strong> The formation of ideas or concepts.</p>
            </div>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            
            <h3 style="text-align: center; color: #333;">Product Placement</h3>

            <p>Product placement is the purposeful incorporation of commercial content into noncommercial settings, that is, a product plug generated via the fusion of advertising and entertainment. While product placement is riskier than conventional advertising, it is becoming a common practice to place products and brands into mainstream media, including films, broadcast and cable television programs, computer and video games, blogs, music videos/DVDs, magazines, books, comics, Broadway musicals and plays, radio, Internet, and mobile phones. To reach retreating audiences due to increasing ways of avoiding television advertising, advertisers increasingly use product placements in clever and effective ways that do not cost too much money.</p>

            <p>Marketing practices raise a number of familiar issues. At a macro-level, there are issues of sustainability and waste of resources through over-consumption. Marketing, and especially marketing communication, are often implicated in such arguments on the basis that their activities encourage over-consumption by fostering greed and materialism. Since marketing operates at the hub of the wealth creation it attracts, by default, much of the general criticism directed at capitalism concerns the erosion of natural resources and the destruction of the environment. Advertising and promotion possibly attract the keenest public criticism of all because they represent the most visible aspect of marketing. At a micro-level, marketing attracts many criticisms for specific cases of deceit or subterfuge, such as inaccurate or misleading food labelling or differential price advertising. There has also been widespread criticism of marketing practices promoting products that can be harmful to health, especially high fat and high salt foods, cigarettes and alcohol. Concern around the marketing of these products is heightened with respect to vulnerable groups, such as the poor.</p>

            <p>Product placement involves all these issues, but also goes beyond them because of the difficulty of categorising it as a marketing practice. It appears to have elements of many other marketing techniques, such as branding, promotion, celebrity endorsement, sponsorship, public relations and advertising, but, crucially, it is based on communication, which, typically, does not reveal its source, motive or, indeed, its very message. This makes the evaluation of product placement particularly problematic.</p>

            <p>It is not uncommon for brand owners to try and create dramatically resonant placements by liaising closely with studios in the creative development stage of newly mediated entertainment products. The aim is to integrate brands seamlessly into the feature as part of the plot or characterisation, thus enhancing the credibility and dramatic force of the scene. At the same time, product placement also confers added prestige for the placed brand through exposure in the enhanced reality of a movie. Where placements are poorly integrated into a TV show or movie, they tend to be resisted by consumers, because of the detrimental effect awkward placements have on the quality of the viewers' entertainment experience. The potential benefits of product placements to brands are well-established, with some notable sales increases of the order of 65 per cent attributed to media placements.</p>

            <p>Implicit product placement has drawn relatively little attention from advertising theorists or, indeed, supervisory bodies, despite suspicions that the practice is increasing in scale and subtlety. The key marketing strength of this kind of promotional practice is also the main source of criticisms: consumers are not necessarily aware that the brand reference they see within their entertainment has a promotional motive. Even where sophisticated consumers are aware of the practice, there is no opportunity for them to cognitively separate the brand reference from its context within the entertainment. Hence, product placement offers no opportunity for rational dialogue between advertiser and consumers and no real separation between editorial and advertising.</p>

            <p>Generally speaking, consumers are at ease with product placement with some relatively minor qualifications. Research grouped concerns into two main aspects: general concerns about the practice, and specific concerns about particular product categories. One of the strongest criticisms of product placement concerns the feeling among some consumers that it entails subliminal promotional effects. It can, it is assumed, affect people below their level of conscious awareness, so that they are not necessarily able to control their acceptance or rejection of the product placement messages. Another major concern with the practice of product placement is that some people perceive it as a deceptive practice, because it may cause people who are unaware of the rhetorical intent of the product placement to engage in purchasing behaviour.</p>

            <p>Particular objections have sometimes been raised about specific product placement categories. Children are seen as a particularly susceptible group when it comes to product placement, because they have not yet developed sensitivity to this type of subtle promotional tool. It is widely accepted that they are not aware of the commercial motive behind conventional advertising until around ten years of age, although their recall of brands seen on TV begins almost as soon as conscious awareness occurs. As an example of exploitation of this type, it is common for cartoon series to be given free of charge to TV channels, since they are promotional devices for the hugely profitable action figure toy business. On the other hand, sponsorship of adult TV shows and, in particular, the relationship between sponsor influence and TV show content, are closely scrutinised by regulators.</p>

            <p>Concerns have been expressed by consumers about the promoting of particular product categories using product placement, including alcoholic beverages, drugs and other medical products, and tobacco. While promotion of these product categories arouses general concern with regard to conventional advertising, this is exacerbated with product placement, because of the perception that regulatory authorities exercise a relative lack of control over promotions in this context. While there are codes of practice concerning television sponsorship, product placement deals are often struck between the studio and brand owner and can cover script content and scene props. Such deals can evade the scrutiny of bodies responsible for advertising and promotion, because they are claimed to fall within editorial control.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          type: "matching_headings",
          title: "Questions 1-7",
          instruction: "The text on the previous pages has 7 paragraphs <strong>A - G</strong>. Choose the correct heading for each paragraph from the list of headings below.",
          options: [
            "i. Threats",
            "ii. Social Habits",
            "iii. Environments",
            "iv. Disease",
            "v. Nutrition",
            "vi. Pollution",
            "vii. Young",
            "viii. Conservation",
            "ix. Mutations",
            "x. Movement"
          ],
          items: [
            { qNum: 1, text: "Paragraph A", answer: "iii" },
            { qNum: 2, text: "Paragraph B", answer: "v" },
            { qNum: 3, text: "Paragraph C", answer: "ii" },
            { qNum: 4, text: "Paragraph D", answer: "x" },
            { qNum: 5, text: "Paragraph E", answer: "vii" },
            { qNum: 6, text: "Paragraph F", answer: "i" },
            { qNum: 7, text: "Paragraph G", answer: "viii" }
          ]
        },
        {
          type: "gap",
          title: "Questions 8-10",
          instruction: "Complete the sentences below. Write <strong>NO MORE THAN TWO WORDS</strong> from the text for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p>8. Blue sharks usually are found in <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8"> when inhabiting warmer seas.</p>
                <p>9. The <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9"> of blue sharks is because of their history of attacks on humans.</p>
                <p>10. Although it helps with obtaining food, it is to ensure <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10"> that blue sharks are often found in numbers.</p>
            </div>
          `,
          items: [
            { qNum: 8, answer: "deeper waters" },
            { qNum: 9, answer: "notoriety" },
            { qNum: 10, answer: "protection" }
          ]
        },
        {
          type: "gap",
          title: "Questions 11-13",
          instruction: "Answer the questions below. Write <strong>NO MORE THAN TWO WORDS</strong> from the text for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p>11. What do blue sharks exploit to complete their journeys across the Atlantic Ocean?<br><span class="q-badge-inline">11</span><input type="text" class="gap-input" data-qnum="11" id="q-11"></p>
                <p>12. What part of a blue shark's own biology spoils its flesh and makes it unsuitable for consumption?<br><span class="q-badge-inline">12</span><input type="text" class="gap-input" data-qnum="12" id="q-12"></p>
                <p>13. What feature of blue sharks helps protect it from the threat of extinction?<br><span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="q-13"></p>
            </div>
          `,
          items: [
            { qNum: 11, answer: ["Current systems", "current systems"] },
            { qNum: 12, answer: ["ammonia", "Secreted ammonia"] },
            { qNum: 13, answer: ["distribution", "Its distribution"] }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          type: "gap",
          title: "Questions 14-20",
          instruction: "Complete the summary using the words in the box below.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">Dyscalculia</h3>
              <p>Dyscalculia (problems with arithmetic, but not due to aptitude or education) sufferers can exhibit stress or reduced (14) <span class="q-badge-inline">14</span><input type="text" class="gap-input" data-qnum="14" id="q-14"> from childhood to adulthood. The causes are unknown, but there are proven links to (15) <span class="q-badge-inline">15</span><input type="text" class="gap-input" data-qnum="15" id="q-15">. Child sufferers can develop a bad (16) <span class="q-badge-inline">16</span><input type="text" class="gap-input" data-qnum="16" id="q-16"> to mathematics and even a fear of (17) <span class="q-badge-inline">17</span><input type="text" class="gap-input" data-qnum="17" id="q-17"> itself. Without treatment, dyscalculia does not go away and can affect character and job prospects.</p>
              <p>Prompt (18) <span class="q-badge-inline">18</span><input type="text" class="gap-input" data-qnum="18" id="q-18"> is vital for stakeholders, as slow progress at school will be evident from early on. Cognitive neuroscience explains the mechanics of number skills are processed by the different areas of the brain. The (19) <span class="q-badge-inline">19</span><input type="text" class="gap-input" data-qnum="19" id="q-19"> areas of the brain develop specialisation as a child ages. The development of child is dependent on a variety of factors and is also affected by the child's experience and the (20) <span class="q-badge-inline">20</span><input type="text" class="gap-input" data-qnum="20" id="q-20"> used on the child.</p>
              
              <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; background: #fff; font-size: 0.9em; display: flex; flex-wrap: wrap; gap: 15px;">
                 <div style="width: 100%; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 5px; font-weight: bold;">Options:</div>
                 <div style="width: 30%;">diagnosis</div>
                 <div style="width: 30%;">scores</div>
                 <div style="width: 30%;">inheritance</div>
                 <div style="width: 30%;">pollution</div>
                 <div style="width: 30%;">attitude</div>
                 <div style="width: 30%;">forward</div>
                 <div style="width: 30%;">lateral</div>
                 <div style="width: 30%;">society</div>
                 <div style="width: 30%;">education</div>
                 <div style="width: 30%;">confidence</div>
                 <div style="width: 30%;">isolation</div>
                 <div style="width: 30%;">pedagogy</div>
              </div>
            </div>
          `,
          items: [
            { qNum: 14, answer: "confidence" },
            { qNum: 15, answer: "inheritance" },
            { qNum: 16, answer: "attitude" },
            { qNum: 17, answer: "education" },
            { qNum: 18, answer: "diagnosis" },
            { qNum: 19, answer: "lateral" },
            { qNum: 20, answer: "pedagogy" }
          ]
        },
        {
          type: "ynng",
          title: "Questions 21-26",
          instruction: `Do the following statements agree with the views of the writer of the text?<br><br>
          <div style="background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 6px; font-style: normal; color: #333; margin-bottom: 10px;">
              <table style="width:100%; border-collapse: collapse; font-size: 0.95rem;">
                  <tbody>
                      <tr><td style="width: 120px; font-weight: bold; padding: 6px 0;">YES</td><td>if the statement agrees with the writer's views</td></tr>
                      <tr><td style="font-weight: bold; padding: 6px 0;">NO</td><td>if the statement doesn't agree with the writer's views</td></tr>
                      <tr><td style="font-weight: bold; padding: 6px 0;">NOT GIVEN</td><td>if it is impossible to say what the writer thinks about this</td></tr>
                  </tbody>
              </table>
          </div>`,
          items: [
            { qNum: 21, text: "Neuropsychological diagnostic tests for dyscalculia are not appropriate when a child is also suffering from dyslexia.", answer: "NOT GIVEN" },
            { qNum: 22, text: "Age-specific tests exploring a child's dyscalculia can easily not be suitable due to the child's lower educational performance.", answer: "YES" },
            { qNum: 23, text: "Teachers often include differentiated approaches in mainstream classes where dyscalculic children are integrated.", answer: "NOT GIVEN" },
            { qNum: 24, text: "Universities have just started offering courses designed to address problems relating to dyscalculia.", answer: "YES" },
            { qNum: 25, text: "In order to be effective, dyscalculia treatment should be done away from where a child spends most of his/her time.", answer: "NO" },
            { qNum: 26, text: "It should not be a doctor's role to recommend how the parents of dyscalculic children obtain advice.", answer: "NO" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          type: "tfng",
          title: "Questions 27-33",
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
            { qNum: 27, text: "Product placement is generally regarded as a more secure investment in terms of promotion.", answer: "FALSE" },
            { qNum: 28, text: "Traditional advertising on television has become less effective.", answer: "TRUE" },
            { qNum: 29, text: "Politicians have recently exploited the controversy over product placement to develop their own publicity.", answer: "NOT GIVEN" },
            { qNum: 30, text: "One of product placement's advantages is that it can increase the authenticity of a scene.", answer: "TRUE" },
            { qNum: 31, text: "Product placement agencies have campaigned against the movement to increase regulation on product placement.", answer: "NOT GIVEN" },
            { qNum: 32, text: "Product placement can create excellent recall in target audiences, but rarely actually increases company revenues.", answer: "FALSE" },
            { qNum: 33, text: "Product placement's greatest advantage is what attracts the most disapproval.", answer: "TRUE" }
          ]
        },
        {
          type: "gap",
          title: "Questions 34-39",
          instruction: "Complete the notes below. Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Objections to Product Placement</h3>
                
                <h4 style="color:#002554; margin-top:20px;">General Objections</h4>
                <p>Product placement has been specifically attacked due to its (34) <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34"> nature, which means it can reach people's subconscious.</p>
                <p>As the public do not recognise product placement's persuasive nature, it can be regarded as a (35) <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35">.</p>
                
                <h4 style="color:#002554; margin-top:20px;">Specific Objections</h4>
                <p>Children are seen as especially vulnerable to product placement, due to their lack of (36) <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36"> to marketing strategies. As a result, cartoons can sometimes be perceived as (37) <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37"> for the toy industry. On the other hand, adult-focused advertising is subject to more control by (38) <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="q-38">.</p>
                <p>The product placement of controversial products have attracted particular criticism.</p>
                <p>Agreements between media producers and companies are viewed as being under (39) <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="q-39"> and so can escape regulation.</p>
            </div>
          `,
          items: [
            { qNum: 34, answer: "subliminal" },
            { qNum: 35, answer: "deceptive practice" },
            { qNum: 36, answer: "sensitivity" },
            { qNum: 37, answer: "promotional devices" },
            { qNum: 38, answer: "regulators" },
            { qNum: 39, answer: "editorial control" }
          ]
        },
        {
          type: "mcq_single",
          title: "Question 40",
          instruction: "Choose the correct letter, <strong>A, B, C or D</strong>.",
          items: [
            {
              qNum: 40,
              text: "What is the best title for the text in Reading Passage 3?",
              options: [
                "A. The Benefits of Product Placement",
                "B. The Future of Product Placement",
                "C. The Ethics of Product Placement",
                "D. The Origins of Product Placement"
              ],
              answer: "C"
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
        image: "https://i.postimg.cc/FRKCnm0K/Screenshot-2026-05-06-170212.png", 
        prompt: `
          The two maps below show the town of Barmouth before and after proposed new changes to stop cars entering the old town.

          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

          You should write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          It must be a woman who stays at home to care for children. Men are not suited to this kind of work. 
          
          To what extent do you agree or disagree with this statement?

          Give reasons for your answer and include any relevant examples from your knowledge or experience.

          You should write at least 250 words.
        `
      }
    }
  }
};