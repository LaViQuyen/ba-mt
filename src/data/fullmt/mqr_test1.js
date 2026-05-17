// src/data/mqr_test1.js

export const mqr_test1 = {
    id: "mqr",
    category: "full",
    testName: "MOCK TEST MQR 1",
    description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

    sections: {
        // ==========================================================================
        // PHẦN LISTENING
        // ==========================================================================
        listening: {
            audioSrc: "/audio/mqr1.mp3", // Vui lòng cung cấp file audio thích hợp
            timeLimit: 1911,
            passage: "<h3 style='text-align:center; color:#002554;'>MOCK TEST MQR - LISTENING SECTION</h3>",
            questions: [
                // --- PART 1 ---
                {
                    type: "gap",
                    title: "Part 1: Questions 1-10",
                    instruction: "Complete the form below. Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.",
                    htmlContent: `
                <div style="background:#fff; padding:20px; border-radius:8px; border: 1px solid #ddd; margin-bottom: 20px; font-family: sans-serif;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Beach Skippers<br>Junior Member Application Form</h3>
                
                <table style="width:100%; border-collapse: collapse; min-width: 600px;">
                    <tbody>
                        <tr style="background:#f5f5f5;">
                            <td style="padding:10px; border-bottom:1px solid #ccc; width:40%;">Example<br>Parent/guardian name</td>
                            <td colspan="3" style="padding:10px; border-bottom:1px solid #ccc;"><em>... Celia Hanworth ...</em></td>
                        </tr>
                        <tr>
                            <td colspan="4" style="padding:10px; border-bottom:1px solid #ccc; font-weight:bold; color:#002554; background:#e9ecef;">Parent/guardian details</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Parent/guardian membership number:</td>
                            <td colspan="3" style="padding:10px; border-bottom:1px solid #ccc;"><span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1" style="width: 200px;"></td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Parent/guardian member type:</td>
                            <td colspan="3" style="padding:10px; border-bottom:1px solid #ccc;">Associate</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Parent/guardian address:</td>
                            <td colspan="3" style="padding:10px; border-bottom:1px solid #ccc;">Unit 7A, No. <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2" style="width: 150px;"> Road, Bowen Harbour</td>
                        </tr>
                        <tr>
                            <td colspan="4" style="padding:10px; border-bottom:1px solid #ccc; font-weight:bold; color:#002554; background:#e9ecef;">Child/children Details</td>
                        </tr>
                        <tr>
                            <td colspan="4" style="padding:10px; border-bottom:1px solid #eee;">Children's names:</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #eee;">Child 1</td>
                            <td style="padding:10px; border-bottom:1px solid #eee;"><em>... Kim ...</em></td>
                            <td style="padding:10px; border-bottom:1px solid #eee;">Age: 6</td>
                            <td style="padding:10px; border-bottom:1px solid #eee;">Gender: F</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Child 2</td>
                            <td style="padding:10px; border-bottom:1px solid #ccc;"><em>... Damien ...</em></td>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Age: <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3" style="width: 50px;"></td>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Gender: M</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Child membership type applied for:</td>
                            <td colspan="3" style="padding:10px; border-bottom:1px solid #ccc;"><span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4" style="width: 200px;"></td>
                        </tr>
                        <tr>
                            <td colspan="4" style="padding:10px; border-bottom:1px solid #ccc; font-weight:bold; color:#002554; background:#e9ecef;">Swimming and sports background</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Swimming ability child 1:</td>
                            <td colspan="3" style="padding:10px; border-bottom:1px solid #ccc;">Water Safety Level <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5" style="width: 150px;"></td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Swimming ability child 2:</td>
                            <td colspan="3" style="padding:10px; border-bottom:1px solid #ccc;">Water 6 <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="q-6" style="width: 150px;"> , Level 3</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Other water sports:</td>
                            <td colspan="3" style="padding:10px; border-bottom:1px solid #ccc;">Both - sailing</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Other sports club memberships:</td>
                            <td colspan="3" style="padding:10px; border-bottom:1px solid #ccc;"><span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7" style="width: 200px;"></td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Medical conditions:</td>
                            <td colspan="3" style="padding:10px; border-bottom:1px solid #ccc;">Damien - <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8" style="width: 200px;"></td>
                        </tr>
                        <tr>
                            <td colspan="4" style="padding:10px; border-bottom:1px solid #ccc; font-weight:bold; color:#002554; background:#e9ecef;">Other information</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Main cultural/language background:</td>
                            <td colspan="3" style="padding:10px; border-bottom:1px solid #ccc;"><span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9" style="width: 200px;"></td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border-bottom:1px solid #ccc;">Swimming assessment date:</td>
                            <td colspan="3" style="padding:10px; border-bottom:1px solid #ccc;"><span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10" style="width: 200px;"></td>
                        </tr>
                        <tr>
                            <td style="padding:10px;">Fee to pay at assessment:</td>
                            <td colspan="3" style="padding:10px;">$160.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
                    items: [
                        { qNum: 1, answer: "CH80738991" },
                        { qNum: 2, answer: "835 new market" },
                        { qNum: 3, answer: "12" },
                        { qNum: 4, answer: "social" },
                        { qNum: 5, answer: "intermediate" },
                        { qNum: 6, answer: "survival" },
                        { qNum: 7, answer: "athletics" },
                        { qNum: 8, answer: ["mild asthma", "asthma"] },
                        { qNum: 9, answer: "English" },
                        { qNum: 10, answer: ["March 28", "28 March"] }
                    ]
                },

                // --- PART 2 ---
                {
                    type: "gap",
                    title: "Part 2: Questions 11-16",
                    instruction: "Label the map below. Write the correct letter, <strong>A-L</strong> next to questions 11-16.",
                    htmlContent: `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 30px; width: 100%; clear: both;">
                <h4 style="color:#002554; margin-bottom: 15px; text-align: center;">Grace's Creek Activity Camp</h4>
                
                <div style="display: block; width: 100%; text-align: center; margin-bottom: 20px;">
                    <img src="https://i.postimg.cc/2ymgrKqn/Screenshot-2026-05-07-200410.png" alt="Grace's Creek Activity Camp" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;" />
                </div>
                
                <div style="background: #f9f9f9; padding: 20px 30px; border-radius: 8px; border: 1px solid #ddd; width: fit-content; margin: 0 auto; text-align: left; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 10px;">11. Bus stop</strong> 
                        <span class="q-badge-inline">11</span><input type="text" class="gap-input" data-qnum="11" id="q-11" style="width: 50px;">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 10px;">14. Staff houses</strong> 
                        <span class="q-badge-inline">14</span><input type="text" class="gap-input" data-qnum="14" id="q-14" style="width: 50px;">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 10px;">12. Student dormitory</strong> 
                        <span class="q-badge-inline">12</span><input type="text" class="gap-input" data-qnum="12" id="q-12" style="width: 50px;">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 10px;">15. Climbing wall</strong> 
                        <span class="q-badge-inline">15</span><input type="text" class="gap-input" data-qnum="15" id="q-15" style="width: 50px;">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 10px;">13. Basketball court</strong> 
                        <span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="q-13" style="width: 50px;">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 10px;">16. Picnic shelter</strong> 
                        <span class="q-badge-inline">16</span><input type="text" class="gap-input" data-qnum="16" id="q-16" style="width: 50px;">
                    </div>
                </div>
            </div>
          `,
                    items: [
                        { qNum: 11, answer: "L" },
                        { qNum: 12, answer: "I" }, // Capital i
                        { qNum: 13, answer: "K" },
                        { qNum: 14, answer: "J" },
                        { qNum: 15, answer: "H" },
                        { qNum: 16, answer: "E" }
                    ]
                },
                {
                    type: "mcq_single",
                    title: "Questions 17-20",
                    instruction: "Choose the correct letter, <strong>A, B or C</strong>.",
                    items: [
                        {
                            qNum: 17,
                            text: "One building has not been decided yet, but will probably be",
                            options: [
                                "A. a sports facility.",
                                "B. a cafeteria.",
                                "C. a conference facility."
                            ],
                            answer: "B"
                        },
                        {
                            qNum: 18,
                            text: "The upkeep of the facility will be mainly funded by",
                            options: [
                                "A. fees from training companies.",
                                "B. the local council.",
                                "C. visits by school groups."
                            ],
                            answer: "B"
                        },
                        {
                            qNum: 19,
                            text: "One disadvantage of this location is",
                            options: [
                                "A. the nearest shops are too far away.",
                                "B. the site is difficult to get to by public transport.",
                                "C. too many schools will wish to use it."
                            ],
                            answer: "A"
                        },
                        {
                            qNum: 20,
                            text: "The designers of the facility had to take into account",
                            options: [
                                "A. the views of local businesses.",
                                "B. a shortage of funding for the construction.",
                                "C. some buildings which were already there."
                            ],
                            answer: "C"
                        }
                    ]
                },

                // --- PART 3 ---
                {
                    type: "gap",
                    title: "Part 3: Questions 21-26",
                    instruction: "Complete the table below. Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.",
                    htmlContent: `
            <div style="background:#fff; padding:20px; border-radius:8px; border: 1px solid #ddd; overflow-x: auto; margin-bottom: 20px;">
                <table style="width:100%; border-collapse: collapse; min-width: 600px;">
                    <thead>
                        <tr style="background:#002554; color:white;">
                            <th style="padding:10px; border:1px solid #ccc; text-align:left;">Method</th>
                            <th style="padding:10px; border:1px solid #ccc; text-align:left;">Suitable for</th>
                            <th style="padding:10px; border:1px solid #ccc; text-align:left;">Problems/limitations</th>
                            <th style="padding:10px; border:1px solid #ccc; text-align:left;">Advantages</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Simulated driving</td>
                            <td style="padding:10px; border:1px solid #ccc;">controlling the (21) <span class="q-badge-inline">21</span><input type="text" class="gap-input" data-qnum="21" id="q-21"></td>
                            <td style="padding:10px; border:1px solid #ccc;">equipment very expensive</td>
                            <td style="padding:10px; border:1px solid #ccc;">can test assumptions</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Real driving observation</td>
                            <td style="padding:10px; border:1px solid #ccc;">finding out how drivers use (22) <span class="q-badge-inline">22</span><input type="text" class="gap-input" data-qnum="22" id="q-22"></td>
                            <td style="padding:10px; border:1px solid #ccc;">obtaining legal permission</td>
                            <td style="padding:10px; border:1px solid #ccc;">easy to get (23) <span class="q-badge-inline">23</span><input type="text" class="gap-input" data-qnum="23" id="q-23"></td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Survey (24) <span class="q-badge-inline">24</span><input type="text" class="gap-input" data-qnum="24" id="q-24"></td>
                            <td style="padding:10px; border:1px solid #ccc;">large numbers of drivers</td>
                            <td style="padding:10px; border:1px solid #ccc;">voluntary (25) <span class="q-badge-inline">25</span><input type="text" class="gap-input" data-qnum="25" id="q-25"></td>
                            <td style="padding:10px; border:1px solid #ccc;">wide range of questions</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Focus-group research</td>
                            <td style="padding:10px; border:1px solid #ccc;">small numbers of drivers</td>
                            <td style="padding:10px; border:1px solid #ccc;">difficult to generalise from findings</td>
                            <td style="padding:10px; border:1px solid #ccc;">reveals drivers' (26) <span class="q-badge-inline">26</span><input type="text" class="gap-input" data-qnum="26" id="q-26"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
                    items: [
                        { qNum: 21, answer: "road conditions" },
                        { qNum: 22, answer: "hand-held phones" },
                        { qNum: 23, answer: "group statistics" },
                        { qNum: 24, answer: "questionnaires" },
                        { qNum: 25, answer: "participation" },
                        { qNum: 26, answer: "attitudes" }
                    ]
                },
                {
                    type: "mcq_multi",
                    title: "Questions 27-28",
                    instruction: "Choose <strong>TWO</strong> letters, <strong>A-E</strong>. Which two methods does Adam say that he and Jamila will use?",
                    options: [
                        "A. Simulated driving",
                        "B. Real driving observation - video",
                        "C. Survey",
                        "D. Focus group",
                        "E. Real driving observation - in person"
                    ],
                    items: [
                        { qNums: [27, 28], answer: ["A", "C"] }
                    ]
                },
                {
                    type: "mcq_multi",
                    title: "Questions 29-30",
                    instruction: "Choose <strong>TWO</strong> letters, <strong>A-E</strong>. For which TWO methods does Professor Wilcox offer some advice?",
                    options: [
                        "A. Simulated driving",
                        "B. Real driving observation - video",
                        "C. Survey",
                        "D. Focus group",
                        "E. Real driving observation - in person"
                    ],
                    items: [
                        { qNums: [29, 30], answer: ["C", "E"] }
                    ]
                },

                // --- PART 4 ---
                {
                    type: "gap",
                    title: "Part 4: Questions 31-37",
                    instruction: "Complete the notes below. Write <strong>NO MORE THAN THREE WORDS</strong> for each answer.",
                    htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">Synthetic Spider Silk</h3>
              
              <h4 style="color:#002554;">Commercial issues</h4>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>The audience is a group of (31) <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="q-31">.</li>
                <li>The FutureMat company is researching (32) <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="q-32"> for spider silk, for others to apply them to commercial products.</li>
                <li>The (33) <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33"> have abandoned work in this field.</li>
                <li>FutureMat is interested in selling its (34) <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34"> to larger firms.</li>
              </ul>

              <h4 style="color:#002554; margin-top: 20px;">Properties and applications of spider silk</h4>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>Researchers have long been interested in spider silk as it is both (35) <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35">.</li>
                <li>Protective equipment made of it could be used by the (36) <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36">.</li>
                <li>One day, materials made of synthetic spider silk could be used by doctors inside (37) <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37">.</li>
              </ul>
            </div>
          `,
                    items: [
                        { qNum: 31, answer: "investors" },
                        { qNum: 32, answer: "production processes" },
                        { qNum: 33, answer: "multinational companies" },
                        { qNum: 34, answer: "patents" },
                        { qNum: 35, answer: "strong and tough" },
                        { qNum: 36, answer: ["riot police", "security forces"] },
                        { qNum: 37, answer: ["artificial limbs", "human joints",] }
                    ]
                },
                {
                    type: "matching",
                    title: "Questions 38-40",
                    instruction: "What are the problems with the following methods? Write the correct letter, <strong>A-F</strong> next to questions 38-40.",
                    options: [
                        "A. High production costs",
                        "B. Variable quality",
                        "C. Hard to make proteins into silk",
                        "D. Very slow to make finished material",
                        "E. Dangerous to humans",
                        "F. Output of proteins is low"
                    ],
                    items: [
                        { qNum: 38, text: "Using real spiders", answer: "D" },
                        { qNum: 39, text: "Using genetically modified animals", answer: "F" },
                        { qNum: 40, text: "Using genetically modified bacteria", answer: "C" }
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
            
            <h3 style="text-align: center; color: #333; margin-bottom: 20px;">Good for you or not good for you? That is the question. A return to dairy products</h3>

            <p><strong>A</strong> At no time in history has the world's population ever been so well-informed about nutrition and health. Consumers in the developed world are constantly bombarded with advertising messages which promote the health benefits of a wide range of food products. However, they are also exposed to the constant promotion of junk food as well. Fast food companies have become sensitive to the criticisms they face over the potential damage their food causes and have begun to vigorously defend the nutritional value of the meals they serve. With this constant flow of messages - often contradictory - how are today's consumers supposed to determine precisely what is healthy to eat?</p>

            <p><strong>B</strong> According to nutritionist Susan McCaskill, many people today intend to eat healthily, but have become confused about how to do so. "It is not just that the traditional definitions of a healthy diet have changed, though this is certainly significant. Many grew up being told that the more milk you drank, the healthier you would be. Then dairy foods became 'bad' in the eyes of many health professionals and many people sought alternatives to it. Now these alternatives are coming under the same sort of criticism."</p>

            <p><strong>C</strong> The alternative McCaskill is referring to is soya milk. A generation of consumers who were labelled allergic to cow's milk products embraced soya substitutes enthusiastically. In fact, the soya bean itself was promoted as a kind of miracle food overall. Claims were made it had the potential to not only provide all the protein required for a healthy diet, but that it could prevent heart disease and cancer. Slogans such as "It's Soy Good for you..." began to appear in nutritional advice columns.</p>

            <p><strong>D</strong> Now suddenly you can find messages on health-related websites claiming "It's not soy good" and even "It's SOY bad for you." A generation of health-conscious eaters who previously abandoned milk products for soy are now worried and confused. The same chemicals (known as isoflavones) in soya beans which were claimed to fight cancer and other diseases are now listed as the cause of some cancers, and are also implicated in hormonal problems and thyroid gland disorders. Dr David Steinman of the Eastern Sydney University Medical School considers the praise of soya products in many alternative health circles to be without scientific foundation. "Soya proponents suggest we look to the health statistics of Asian countries as proof of the benefits of soy. When we look closely at the countries where soya products are consumed regularly, it is clear that though they are widely used, they are also eaten in very moderate quantities. Many people seeking a healthy diet today are eating ten times that much soy, particularly through drinking vast amounts of soya milk and eating other non-traditional foods such as soya-based ice-cream."</p>

            <p><strong>E</strong> Susan McCaskill considers the latest negative publicity about soy to be exaggerated, but she admits that it does raise some very relevant questions. "It still appears to me that soya beans have many notable nutritional benefits to offer, but the key thing here is moderation. What frequently happens now is that people go from eating much too much of one thing to eating too much of something else."</p>

            <p><strong>F</strong> Both McCaskill and Steinman concede that the recent soya controversy is just one example of how food fashions are confusing the health-conscious today. Red meat has often been blamed for high rates of heart disease and other health problems, then has been praised for its high iron content. Carbohydrate rich foods such as pasta, rice and potatoes have been promoted since the seventies as healthy staples of our diet, and then recently have received the blame for the growing numbers of people who are seriously overweight.</p>

            <p><strong>G</strong> Dr Steinman echoes the words of McCaskill on one key point - moderation is the most significant factor in any healthy diet. However, he fears that modern obsessions with perfect food habits can simply leave people so discouraged that they give up completely. "If you rush to a new diet because you've been told your old one was bad, then find the new one has its own critics, what do you do next? I worry that many will simply stop thinking about healthy eating habits and head to the nearest fast food outlet."</p>

            <p><strong>H</strong> It is certainly undeniable that the fast food industry is booming. Whether this is because of confused and discouraged eaters of health food is difficult to determine. What is clear, however, is that advertisers are working harder and harder to influence the world's eating habits, and that the needs of both health enthusiasts and fast food customers are now coming together: the fastest growing customer base in many major fast food chains is now people attracted by their new "healthy choices." The question remains: who will decide in the end precisely what a healthy choice is?</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            
            <h3 style="text-align: center; color: #333;">The Panama Canal</h3>

            <p><strong>A</strong> The Panama Canal is an artificial waterway that connects the Atlantic and Pacific Oceans. It is a major conduit for maritime trade. Prior to its opening in 1914, ships travelling between the east and west coasts of the United States had been obliged to round Cape Horn at the tip of South America. Passage through the canal shortens this voyage by around 15,000 kilometres. The Panama Canal is still dwarfed by the world's other great artificial waterway, the Suez Canal, which measures 193 kilometres from one end to the other. The Panama Canal is 111 kilometres shorter than its counterpart in Egypt, at 82 kilometres.</p>

            <p><strong>B</strong> The Panama Canal uses locks to lift ships up to Gatun Lake, an artificial lake that was created to reduce the amount of excavation required to build the canal, and then lower them back down to sea level at the other end. A ship takes an average of 25 hours to negotiate the canal from one end to the other, though this includes waiting time. Once tolls have been paid and important papers inspected by officials, a ship can begin its transit of the canal itself, which usually takes around 10 hours. Smaller craft are permitted to move through the locks unassisted, but larger ones must at this point be attached to locomotives that run along tracks on the walls of the lock. These serve to keep the vessel centred in the lock and prevent any contact with the lock itself. Local pilots with extensive experience navigating the canal board the vessel and slowly move it forward into the first chamber. The locks essentially function like elevators. The first chamber is sealed off by closing the lock gates behind the ship, and operators then allow water to flow in. The adjacent chamber supplies this water, which raises the level of the ship, allowing it to move forward. The system relies not on machinery but gravity to move water from one chamber to the next. This process continues until the ships reaches the level of Gatun Lake, and is then repeated in reverse at the other end.</p>

            <p><strong>C</strong> The first attempt to construct a canal through the then-Colombian province of Panama began in 1881 when the Colombian government granted a concession to a privately owned French company. Under the leadership of Ferdinand de Lesseps, the company was able to raise capital from small investors because of de Lesseps' previous success building the Suez Canal in Egypt. Even though the Panama Canal only needed to be half the length of the Suez Canal, the project was significantly more challenging. The French eventually abandoned the project in 1889, by which time around 22,000 workers had lost their lives.</p>

            <p><strong>D</strong> The United States formally took control of the canal property in 1904. This was following the passage of the Spooner Act by Congress in 1902, which authorised the purchase of the French company's assets and construction of the canal, provided that a treaty could be negotiated with Colombia. When treaty negotiations broke down, Panama, with the backing of the United States, declared its independence, which allowed the Hay-Bunau-Varilla Treaty to be negotiated between the United States and Panama. As a newly established republic, Panama was seeking the protection of the United States, which the United States was willing to guarantee in exchange for control of a 16-kilometre strip across the Isthmus of Panama. The United States also agreed to pay Panama an initial sum of $10 million, as well as a $250,000 annuity that would begin nine years after the opening of the canal.</p>

            <p><strong>E</strong> There were challenges during construction, but the Americans made solid progress, and the canal was finally opened to traffic in 1914. The United States retained sole control of the canal and the surrounding Panama Canal Zone until the signing of the Torrijos-Carter Treaties in 1977. These treaties provided for the handover of the canal to Panama, which would not be completely realised until 1999. The canal was initially administered by the Panama Canal Commission, a joint US-Panama agency set up to manage the canal in the intervening years. The canal is now administered by the Panama Canal Authority, which was set up in 1997 in preparation for the handover.</p>

            <p><strong>F</strong> Despite having enjoyed a privileged position for many years, the Panama Canal is facing increasing competition from other routes. Much of this competition comes from the Suez Canal, which, despite being half a world away, is often seen as a viable alternative route for cargo being transported from Asia to the US East Coast. This is partly because of its lower tolls, but also because it can more easily accommodate larger ships. As a sea-level canal, locks were not needed and construction was more straightforward, which meant they were able to build a relatively wide canal to accommodate fully laden ships up to 50 metres wide. The Panama Canal could originally handle ships with a width of up to 32.31 metres, but in order to retain the market share it was losing to other routes, including the Suez Canal, a project to build a third set of locks was begun in 2007. Completed in 2015, these locks now allow ships up to 51.25 metres wide to pass through the canal, but the maximum vessel height remains unchanged at 57.91 metres due to the need to fit under the Bridge of the Americas, which spans the Pacific entrance to the canal.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            
            <h3 style="text-align: center; color: #333;">Sensory Overload</h3>

            <p><strong>A</strong> Are you suffering from a feeling of annoyance? Does life seem to get more and more irritating all the time? Do you struggle day to day just to stay calm and clear-headed in the face of more and more frustrating experiences? If your answer to these questions is "YES," you are not alone. In fact, you are part of a growing trend that demonstrates the significance of the small events which annoy us on a day to day basis.</p>

            <p><strong>B</strong> According to psychologist Maurice Penman, inhabitants of today's modern cities face a far more aggressive range of sensory experiences than ever before. "It is not simply that the pace of life is faster in today's world, or that people are under more pressure at work. Of course, both those things are true. But today people are exposed to a greater number of both visual and auditory stimuli. Basically, this means we are being asked to both look at and listen to far more than we ever have been before."</p>

            <p><strong>C</strong> However, Penman is quick to point out that many of the things which are contributing to these problems are also the same things many of us value. A greater sense of irritation is the price we pay for the convenience of the Internet and mobile phones. "Mobile phones are a very significant example to consider. There is no doubt that they are useful in a multitude of ways, and most people do not want to go back to the days before them. But at the same time, mobile phones have almost completely destroyed a sense of quiet public space. There was a time when you could rely on public transport being relatively quiet, a place to think about the events of the day on the way home. Now a bus or a train carriage can feel like being locked in a busy office."</p>

            <p><strong>D</strong> The increase in sensory demands is not just due to the use of mobile phones. Advertisers are reaching out to potential consumers more aggressively than ever. News services are now broadcast on buses and at train platforms. Family meals are frequently interrupted by telephone canvassers and email users are often forced to deal with an avalanche of unsolicited promotional messages, or "SPAM". One could easily imagine that our children and their children may have to guard their homes from an overwhelming amount of annoyance.</p>

            <p><strong>E</strong> While it is difficult to deny the growth in these increasingly annoying events in our day, is there actually any real significance to these facts? Penman argues: "There is no doubt that on the surface, this increase of stimuli in our day simply appears to be a matter of minor annoyance. But when we look closely, we can see that this has the potential to significantly affect our psychological health." He goes on to explain that if exposure to these irritations is frequent and prolonged, very subtly our stress levels begin to rise. As they do, we find there is a compound effect. Stress from the minor episodes in the day starts to increase our feeling of pressure when faced with major challenges at work. We are increasingly carrying a greater and greater stress load, with opportunities to relax and unwind more and more restricted. Penman points out that even though we all sometimes crave stimulation, we have become so obsessed with it in the twenty-first century that it has now become almost impossible to avoid. Shops increasingly feel the need to play loud, thumping rock or techno music. Advertising becomes more and more energetically aggressive all the time. This, Penman maintains, prevents us from dealing with our daily stress and eliminating it from our systems. He adds: "You really do need to get right out of the city and into a quiet space now, though most of us are too busy to do that very often."</p>

            <p><strong>F</strong> It might be easy for critics to dismiss the annoying experience of too many mobile phones on the bus, or any of the other stimuli Maurice Penman cites. However, it is the failure to eliminate stress which leads to potentially fatal consequences. If these daily distractions are contributing seriously to our stress levels, then Penman has identified a significant danger. We now know that stress truly is a killer, and has been implicated in the rise of depression, heart disease and even weight problems, as it increases hormones in the body which stimulate the appetite for fattening carbohydrate-rich foods.</p>

            <p><strong>G</strong> There is no denying that Maurice Penn's main arguments are compelling. It seems that stress has become so prevalent that people are getting stressed about their levels of stress. But what are we supposed to do? He suggests we do everything we can to go within ourselves and try to maintain a sense of personal peace and space. He recommends the use of meditation and relaxation tapes, exercise at the end of the day whenever possible and greater emphasis on fun. Unfortunately, Maurice Penman had no suggestions for those of us who find meditation frustrating, or who get annoyed at relaxation tapes. He had no recommendations for days when you can't find any equipment you need in the gym, or find yourself irritated at those around you who keep saying you need to have more fun.</p>
        </div>
      `,
            questions: [
                // --- PASSAGE 1 QUESTIONS ---
                {
                    type: "matching_headings",
                    title: "Questions 1-5",
                    instruction: "Reading Passage 1 has eight paragraphs, <strong>A-H</strong>. Choose the correct heading for the specified paragraphs from the list of headings below.",
                    options: [
                        "i. A healthier option",
                        "ii. Asian countries know best",
                        "iii. Fast food companies go healthy",
                        "iv. A growing business",
                        "v. Importance of good eating habits",
                        "vi. Mixed messages",
                        "vii. A return to dairy products",
                        "viii. Healthy becomes unhealthy",
                        "ix. Allergies to dairy",
                        "x. Concern over negative reaction to mixed messages"
                    ],
                    items: [
                        { qNum: 1, text: "Paragraph C", answer: "i" },
                        { qNum: 2, text: "Paragraph D", answer: "viii" },
                        { qNum: 3, text: "Paragraph E", answer: "v" },
                        { qNum: 4, text: "Paragraph G", answer: "x" },
                        { qNum: 5, text: "Paragraph H", answer: "iii" }
                    ]
                },
                {
                    type: "tfng",
                    title: "Questions 6-10",
                    instruction: `Do the following statements agree with the information given in Reading Passage 1?<br><br>
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
                        { qNum: 6, text: "Fast food companies admit that the food they serve is unhealthy.", answer: "FALSE" },
                        { qNum: 7, text: "Soy products have been proven to stop certain illnesses.", answer: "FALSE" },
                        { qNum: 8, text: "Some health-conscious people are overconsuming certain foods.", answer: "TRUE" },
                        { qNum: 9, text: "One health expert worries that frustration might stop people maintaining a good diet.", answer: "TRUE" },
                        { qNum: 10, text: "Fast food advertising will increasingly influence what people think is healthy.", answer: "NOT GIVEN" }
                    ]
                },
                {
                    type: "mcq_single",
                    title: "Questions 11-13",
                    instruction: "Choose the correct letter <strong>A, B, C or D</strong>.",
                    items: [
                        {
                            qNum: 11,
                            text: "People are unsure about what is considered healthy because",
                            options: [
                                "A. dairy foods are now considered unhealthy.",
                                "B. the healthier replacements to unhealthy foods are being criticised.",
                                "C. junk food is promoted as being healthy.",
                                "D. healthy foods are no longer available."
                            ],
                            answer: "B"
                        },
                        {
                            qNum: 12,
                            text: "According to the article, soya can be considered healthy because",
                            options: [
                                "A. it has been found to be a miracle food.",
                                "B. it doesn't promote allergies as dairy products do.",
                                "C. healthy people in Asia eat it in average amounts.",
                                "D. it can prevent serious illnesses."
                            ],
                            answer: "C"
                        },
                        {
                            qNum: 13,
                            text: "The main reason for the increase in fast food customers is",
                            options: [
                                "A. the option of healthier food.",
                                "B. effective advertising.",
                                "C. confusion about healthy food choices.",
                                "D. people giving up trying to eat healthy food."
                            ],
                            answer: "A"
                        }
                    ]
                },

                // --- PASSAGE 2 QUESTIONS ---
                {
                    type: "gap",
                    title: "Questions 14-19",
                    instruction: "Complete the sentences below. Choose <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> from the passage for each answer.",
                    htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p>14. The Panama Canal is <span class="q-badge-inline">14</span><input type="text" class="gap-input" data-qnum="14" id="q-14"> long.</p>
                <p>15. Gatun Lake was created so that less <span class="q-badge-inline">15</span><input type="text" class="gap-input" data-qnum="15" id="q-15"> would be needed.</p>
                <p>16. Water is transferred between the lock chambers using <span class="q-badge-inline">16</span><input type="text" class="gap-input" data-qnum="16" id="q-16">.</p>
                <p>17. Ferdinand de Lesseps' company was funded by <span class="q-badge-inline">17</span><input type="text" class="gap-input" data-qnum="17" id="q-17">.</p>
                <p>18. Under the terms of the Hay-Bunau-Varilla Treaty, Panama received financial compensation and <span class="q-badge-inline">18</span><input type="text" class="gap-input" data-qnum="18" id="q-18">.</p>
                <p>19. Panama gained full control of the Panama Canal in <span class="q-badge-inline">19</span><input type="text" class="gap-input" data-qnum="19" id="q-19">.</p>
            </div>
          `,
                    items: [
                        { qNum: 14, answer: ["82 kilometres", "82 km", "82 kilometers", "82 kilometres/km"] },
                        { qNum: 15, answer: "excavation" },
                        { qNum: 16, answer: "gravity" },
                        { qNum: 17, answer: "small investors" },
                        { qNum: 18, answer: "protection" },
                        { qNum: 19, answer: "1999" }
                    ]
                },
                {
                    type: "gap",
                    title: "Questions 20-23",
                    instruction: "Complete the flow-chart below. Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.",
                    htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Navigating the locks</h3>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px; text-align: center;">
                    Documents are checked and <span class="q-badge-inline">20</span><input type="text" class="gap-input" data-qnum="20" id="q-20" style="width: 100px;"> are collected.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px; text-align: center;">
                    Expert <span class="q-badge-inline">21</span><input type="text" class="gap-input" data-qnum="21" id="q-21" style="width: 100px;"> take control of the ship.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px; text-align: center;">
                    If the ship is large, <span class="q-badge-inline">22</span><input type="text" class="gap-input" data-qnum="22" id="q-22" style="width: 100px;"> are used to stop it from hitting the lock walls.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px; text-align: center;">
                    The ship enters the first chamber and the lock gates are closed.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; text-align: center;">
                    Water from the <span class="q-badge-inline">23</span><input type="text" class="gap-input" data-qnum="23" id="q-23" style="width: 150px;"> is used to lift up the ship.<br>
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px; text-align: center;">
                    The ship enters the next chamber
                </div>
            </div>
          `,
                    items: [
                        { qNum: 20, answer: "tolls" },
                        { qNum: 21, answer: "local pilots" },
                        { qNum: 22, answer: "locomotives" },
                        { qNum: 23, answer: "adjacent chamber" }
                    ]
                },
                {
                    type: "gap",
                    title: "Questions 24-26",
                    instruction: "Complete the table below. Choose <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> from the passage for each answer.",
                    htmlContent: `
            <div style="background:#fff; padding:20px; margin-bottom: 20px; overflow-x: auto;">
                <table style="width:100%; border-collapse: collapse; min-width: 600px; border: 1px solid #ccc;">
                    <thead style="background:#f5f5f5;">
                        <tr>
                            <th style="padding:10px; border:1px solid #ccc; text-align: left;">Canal</th>
                            <th style="padding:10px; border:1px solid #ccc; text-align: left;">Type of canal</th>
                            <th style="padding:10px; border:1px solid #ccc; text-align: left;">Current maximum ship width</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc; font-weight: bold;">Suez</td>
                            <td style="padding:10px; border:1px solid #ccc;"><span class="q-badge-inline">24</span><input type="text" class="gap-input" data-qnum="24" id="q-24"></td>
                            <td style="padding:10px; border:1px solid #ccc;"><span class="q-badge-inline">25</span><input type="text" class="gap-input" data-qnum="25" id="q-25"></td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc; font-weight: bold;">Panama</td>
                            <td style="padding:10px; border:1px solid #ccc;">Lock</td>
                            <td style="padding:10px; border:1px solid #ccc;"><span class="q-badge-inline">26</span><input type="text" class="gap-input" data-qnum="26" id="q-26"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
                    items: [
                        { qNum: 24, answer: ["sea-level", "sea level"] },
                        { qNum: 25, answer: ["50 metres", "50 meters", "50 m"] },
                        { qNum: 26, answer: ["51.25 metres", "51.25 meters", "51.25 m"] }
                    ]
                },

                // --- PASSAGE 3 QUESTIONS ---
                {
                    type: "matching_info",
                    title: "Questions 27-33",
                    instruction: "Reading Passage 3 has 8 paragraphs, <strong>A-H</strong>. Which paragraph contains the following information?<br><strong>NB</strong> You may use any letter more than once.",
                    options: ["A", "B", "C", "D", "E", "F", "G"],
                    items: [
                        { qNum: 27, text: "an example of how a place has changed due to modern conveniences", answer: "C" },
                        { qNum: 28, text: "physical effects of stress", answer: "F" },
                        { qNum: 29, text: "a recommendation of how to deal with modern-day pressures and over-stimulation", answer: "E" }, // Đáp án Key: 29 là E.
                        { qNum: 30, text: "an explanation of sensory overload and today's irritations that cause stress", answer: "B" },
                        { qNum: 31, text: "an assertion about people's level of stress", answer: "G" },
                        { qNum: 32, text: "a reason why small amounts of stress can feel greater", answer: "E" },
                        { qNum: 33, text: "a prediction about growing irritations and interruptions to our personal space", answer: "D" }
                    ]
                },
                {
                    type: "gap",
                    title: "Questions 34-37",
                    instruction: "Complete the summary below. Choose <strong>NO MORE THAN FOUR WORDS</strong> from the passage for each answer.",
                    htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p>People in today's world are faced with much more <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34"> stimulation than they used to be. On a daily basis, our modern conveniences represent small but significant <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"> from which contribute to increasing levels of stress. Psychologist Maurice Penman suggests that because people <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36"> time to time, we are now in a world where we can't escape it. However, we must escape it and relax or there could possibly be <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37">.</p>
            </div>
          `,
                    items: [
                        { qNum: 34, answer: "visual and auditory" },
                        { qNum: 35, answer: "irritations" },
                        { qNum: 36, answer: "crave stimulation" },
                        { qNum: 37, answer: "fatal consequences" }
                    ]
                },
                {
                    type: "gap",
                    title: "Questions 38-40",
                    instruction: "Answer the questions below. Choose <strong>NO MORE THAN THREE WORDS</strong> from the passage for each answer.",
                    htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p>38. What word is used to describe how advertising has become?<br><span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="q-38"></p>
                <p>39. What does stress make you want to eat?<br><span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="q-39"></p>
                <p>40. What does Penman believe people should place more importance on in order to relieve stress?<br><span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="q-40"></p>
            </div>
          `,
                    items: [
                        { qNum: 38, answer: "aggressive" },
                        { qNum: 39, answer: "fattening foods" },
                        { qNum: 40, answer: "fun" }
                    ]
                }
            ]
        }
    }
};