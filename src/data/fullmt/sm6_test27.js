// src/data/sm6_test27.js

export const sm6_test27 = {
  id: "mt30",
  category: "full",
  testName: "MOCK TEST 30",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING
    // ==========================================================================
    listening: {
      audioSrc: "/audio/mt30.mp3", // Cần bổ sung file audio tương ứng
      timeLimit: 1769, // 30 phút
      passage: "<h3 style='text-align:center; color:#002554;'>MOCK TEST 27 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1 ---
        {
          type: "mcq_single",
          title: "Part 1: Questions 1-5",
          instruction: "Choose the correct letter <strong B, or C>A, B, or C</strong>.",
          items: [
            {
              qNum: 1,
              text: "Steve and Rachel will check in for their flight",
              options: [
                "A. at a special desk in the airport.",
                "B. at the check in desks.",
                "C. on the Internet."
              ],
              answer: "C"
            },
            {
              qNum: 2,
              text: "Steve and Rachel will go to the airport by",
              options: [
                "A. bus.",
                "B. taxi.",
                "C. train."
              ],
              answer: "B"
            },
            {
              qNum: 3,
              text: "Steve and Rachel will go to their hotel by",
              options: [
                "A. taxi.",
                "B. courtesy car.",
                "C. bus."
              ],
              answer: "B"
            },
            {
              qNum: 4,
              text: "Steve and Rachel will stay at",
              options: [
                "A. the Orchid Hotel.",
                "B. the Richmond Hotel.",
                "C. the Kings Cross Hotel."
              ],
              answer: "A"
            },
            {
              qNum: 5,
              text: "Steve and Rachel's deal in their hotel is",
              options: [
                "A. full board.",
                "B. half board.",
                "C. bed and breakfast."
              ],
              answer: "C"
            }
          ]
        },
        {
          type: "gap",
          title: "Questions 6-10",
          instruction: "Complete the notes below. Write <strong>NO MORE THAN ONE WORD</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; border-radius: 8px; overflow-x: auto;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">The Sydney Trip</h3>
                <table style="width:100%; border-collapse: collapse; min-width: 500px;">
                    <thead>
                        <tr style="background:#002554; color:white;">
                            <th style="padding:10px; border:1px solid #ccc; width:20%;">Day</th>
                            <th style="padding:10px; border:1px solid #ccc; width:35%;">Activity</th>
                            <th style="padding:10px; border:1px solid #ccc; width:45%;">Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;" rowspan="3"><strong>Day 1</strong></td>
                            <td style="padding:10px; border:1px solid #ccc;">Sydney Opera House (morning)</td>
                            <td style="padding:10px; border:1px solid #ccc;">Do a tour (a (6) <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="q-6"> is necessary).</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Harbour cruise (morning + afternoon)</td>
                            <td style="padding:10px; border:1px solid #ccc;">About 3 hours long; look at (7) <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7"> and bunkers; can get off and on.</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Wander Kings Cross (evening)</td>
                            <td style="padding:10px; border:1px solid #ccc;">Do this after (8) <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8">.</td>
                        </tr>
                        <tr style="background:#f0f0f0;">
                            <td style="padding:10px; border:1px solid #ccc;" rowspan="2"><strong>Day 2</strong></td>
                            <td style="padding:10px; border:1px solid #ccc;">Sydney Harbour Bridge</td>
                            <td style="padding:10px; border:1px solid #ccc;">Bus there; walk across and climb the southern side; Rachel will book it; cheap and only storms and/or powerful (9) <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9"> will cause cancellation.</td>
                        </tr>
                        <tr style="background:#f0f0f0;">
                            <td style="padding:10px; border:1px solid #ccc;">Bondi Beach</td>
                            <td style="padding:10px; border:1px solid #ccc;">Spend afternoon and evening here; sunbathe and get a surfing lesson.</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;" rowspan="3"><strong>Day 3</strong></td>
                            <td style="padding:10px; border:1px solid #ccc;">Visit some (10) <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10"></td>
                            <td style="padding:10px; border:1px solid #ccc;">Morning.</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Sydney Tower</td>
                            <td style="padding:10px; border:1px solid #ccc;">Afternoon.</td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">Watch a movie</td>
                            <td style="padding:10px; border:1px solid #ccc;">Evening.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
          items: [
            { qNum: 6, answer: "reservation" },
            { qNum: 7, answer: "forts" },
            { qNum: 8, answer: "dinner" },
            { qNum: 9, answer: "winds" },
            { qNum: 10, answer: "museums" }
          ]
        },

        // --- PART 2 ---
        {
          type: "mcq_multi",
          title: "Part 2: Questions 11-13",
          instruction: "Choose <strong>THREE</strong> letters,<strong>A - F</strong>. What action does the Barker Tiger Sanctuary take to help tigers?",
          options: [
            "A. Fighting against poaching.",
            "B. Breeding tigers to re-introduce into the wild.",
            "C. Treating sick tigers in the wild.",
            "D. Making more people know about organisations that monitor and care for wild tigers.",
            "E. Supporting financially the purchase of land where tigers live.",
            "F. Putting pressure on governments to support tiger protection."
          ],
          items: [
            { qNums: [11, 12, 13], answer: ["B", "D", "E"] }
          ]
        },
        {
          type: "mcq_single",
          title: "Questions 14-15",
          instruction: "Choose the correct letter <strong>A, B, or C</strong>.",
          items: [
            {
              qNum: 14,
              text: "What threatens wild tigers in India the most today?",
              options: [
                "A. Hunting",
                "B. Human expansion",
                "C. Poaching"
              ],
              answer: "B"
            },
            {
              qNum: 15,
              text: "Genetic diversity in wild breeding tigers is attempted by",
              options: [
                "A. creating land for tigers to move between different habitats.",
                "B. transporting tigers to different habitats.",
                "C. introducing tigers from other countries to different habitats."
              ],
              answer: "A"
            }
          ]
        },
        {
          type: "gap",
          title: "Questions 16-20",
          instruction: "Answer the questions below. Write <strong>NO MORE THAN THREE WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
                <p>16. Where can people see pictures of the Barker Tiger Reserve before their visit?<br><span class="q-badge-inline">16</span><input type="text" class="gap-input" data-qnum="16" id="q-16"></p>
                <p>17. Apart from the tigers and elephants, what is the Barker Tiger Reserve particularly famous for?<br><span class="q-badge-inline">17</span><input type="text" class="gap-input" data-qnum="17" id="q-17"></p>
                <p>18. What is available for groups of people travelling on a budget?<br><span class="q-badge-inline">18</span><input type="text" class="gap-input" data-qnum="18" id="q-18"></p>
                <p>19. What is not permitted in Barker Tiger Reserve?<br><span class="q-badge-inline">19</span><input type="text" class="gap-input" data-qnum="19" id="q-19"></p>
                <p>20. What ensures that visitors to the Barker Tiger Reserve get to see wild tigers?<br><span class="q-badge-inline">20</span><input type="text" class="gap-input" data-qnum="20" id="q-20"></p>
            </div>
          `,
          items: [
            { qNum: 16, answer: ["On our website", "On website", "our website", "website"] },
            { qNum: 17, answer: ["Birds", "birds"] },
            { qNum: 18, answer: ["Dormitories", "dormitories"] },
            { qNum: 19, answer: ["Private vehicles", "private vehicles"] },
            { qNum: 20, answer: ["location devices", "Location devices"] }
          ]
        },

        // --- PART 3 ---
        {
          type: "gap",
          title: "Part 3: Questions 21-25",
          instruction: "Complete the sentences below. Write <strong>NO MORE THAN TWO WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd; margin-bottom: 20px;">
                <p>21. When he was young, Amundsen studied a lot of <span class="q-badge-inline">21</span><input type="text" class="gap-input" data-qnum="21" id="q-21"> on polar exploration.</p>
                <p>22. Although Amundsen studied hard at becoming a doctor, he still worked on his <span class="q-badge-inline">22</span><input type="text" class="gap-input" data-qnum="22" id="q-22"> so that he would be a good explorer.</p>
                <p>23. Amundsen obtained a <span class="q-badge-inline">23</span><input type="text" class="gap-input" data-qnum="23" id="q-23"> so that he would not repeat the mistakes of earlier explorers when captaining a ship.</p>
                <p>24. Amundsen ended up being in <span class="q-badge-inline">24</span><input type="text" class="gap-input" data-qnum="24" id="q-24"> during his first trip to Antarctica.</p>
                <p>25. Amundsen secured <span class="q-badge-inline">25</span><input type="text" class="gap-input" data-qnum="25" id="q-25"> for his expedition to find the Northwest Passage by organising to do magnetic research on his trip.</p>
            </div>
          `,
          items: [
            { qNum: 21, answer: "literature" },
            { qNum: 22, answer: "physique" },
            { qNum: 23, answer: ["master's ticket", "masters ticket"] },
            { qNum: 24, answer: "command" },
            { qNum: 25, answer: "backing" }
          ]
        },
        {
          type: "mcq_single",
          title: "Questions 26-28",
          instruction: "Choose the correct letter <strong>A, B, or C</strong>.",
          items: [
            {
              qNum: 26,
              text: "Amundsen changed his mind about travelling to the North Pole because",
              options: [
                "A. someone else got there first.",
                "B. there were problems with money.",
                "C. his equipment was not suitable."
              ],
              answer: "A"
            },
            {
              qNum: 27,
              text: "What was the main reason for Amundsen beating Scott to the South Pole?",
              options: [
                "A. Amundsen didn't publicise his journey until on his voyage.",
                "B. Amundsen didn't have to walk as far as Scott.",
                "C. Part of Amundsen's journey across Antarctica was much faster than Scott's."
              ],
              answer: "C"
            },
            {
              qNum: 28,
              text: "What slowed Amundsen down during his journey to the South Pole?",
              options: [
                "A. Crossing the Axel Heiberg Glacier.",
                "B. Poor weather.",
                "C. A lack of food."
              ],
              answer: "B"
            }
          ]
        },
        {
          type: "gap",
          title: "Questions 29-30",
          instruction: "Complete the diagram below. Write <strong>NO MORE THAN ONE WORD</strong> from the listening for each answer.",
          htmlContent: `
             <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 30px; width: 100%;">
                <h4 style="color:#002554; margin-bottom: 15px;">Diagram of a Spreading Crack</h4>
                
                <img src="https://i.postimg.cc/dVQHPPfX/Screenshot-2026-05-06-125602.png" alt="Spreading Crack Diagram" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 20px;" />
                
                <div style="background: #f9f9f9; padding: 20px 30px; border-radius: 8px; border: 1px solid #ddd; min-width: 300px; text-align: left;">
                    <div style="margin-bottom: 15px; display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">29.</strong> 
                        <span class="q-badge-inline">29</span><input type="text" class="gap-input" data-qnum="29" id="q-29">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">30.</strong> 
                        <span class="q-badge-inline">30</span><input type="text" class="gap-input" data-qnum="30" id="q-30">
                    </div>
                </div>
            </div>
          `,
          items: [
            { qNum: 29, answer: "plates" },
            { qNum: 30, answer: "seals" }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-40",
          instruction: "Complete the notes below. Write <strong>NO MORE THAN TWO WORDS</strong> from the listening for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">What is Addiction?</h3>
              
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>People can be addicted to many things; not just drugs.</li>
                <li>Definition: not having control over doing, taking or using something, to the point where it could be harmful.</li>
                <li>The pleasurable feeling that a drug creates can lead to a strong (31) <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="q-31"> to repeat taking the drug.</li>
                <li>Other behaviours can lead to the same pattern.</li>
                <li>Addicts were initially viewed as being immoral or weak - treatment involved their (32) <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="q-32"> or encouraging them to be stronger.</li>
                <li>Now addiction is viewed as a chronic disease that damages the brain, involving a variety of changes and ending with a drive towards (33) <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33">.</li>
                <li>The brain registers all pleasures similarly by releasing dopamine.</li>
                <li>Dopamine works with glutamate to control the brain's system of reward-related learning.</li>
                <li>Addiction is related to how fast dopamine is released, the release's intensity and the release's (34) <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34">.</li>
                <li>This system aids human survival, as it affects how the brain perceives pleasure, reward, motivation and memory.</li>
                <li>Repeated addictive substances or behaviour alters how the operation of the brain's nucleus accumbus and prefrontal cortex operate (the latter governs (35) <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"> and doing tasks).</li>
                <li>People then search for the pleasure to the extent that addiction arrives and the behaviour becomes a (36) <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36">.</li>
                <li>Motivation starts to work differently.</li>
              </ul>

              <h4 style="color:#002554; margin-top:20px;">Treatment for Drug and Alcohol Addictions</h4>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>Determined by the type of addiction.</li>
                <li>Aimed to stop individuals searching for and using the substance.</li>
                <li>It can be conducted in varied (37) <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37">, varied forms and varied periods of time.</li>
                <li>As these types of addiction are chronic, relapses can occur and (38) <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="q-38"> treatment is rarely enough.</li>
              </ul>

              <h4 style="color:#002554; margin-top:20px;">Treatment for Behavioural Addictions (based on cognitive-behavioural principles)</h4>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>Treatment with a therapist allows patients to understand themselves better and create healthy emotion regulation strategies.</li>
                <li>Treatment can expose the (39) <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="q-39"> connected to the addiction.</li>
                <li>Treatment also creates (40) <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="q-40"> to the addiction that are beneficial to the health.</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "urge" },
            { qNum: 32, answer: "punishment" },
            { qNum: 33, answer: ["obsessive behaviour", "obsessive behavior"] },
            { qNum: 34, answer: "reliability" },
            { qNum: 35, answer: "planning" },
            { qNum: 36, answer: "compulsion" },
            { qNum: 37, answer: "settings" },
            { qNum: 38, answer: "short-term" },
            { qNum: 39, answer: ["need", "underlying need"] },
            { qNum: 40, answer: "alternatives" }
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
            
            <h3 style="text-align: center; color: #333;">A History of the Telescope</h3>
            
            <p><strong>Paragraph A</strong><br>The invention of the telescope played an important role in advancing our understanding of Earth's place in the cosmos. While there is evidence that the principles of telescopes were known in the late 16th century, the first telescopes were created in the Netherlands in 1608, when spectacle makers Hans Lippershey and Zacharias Janssen, and Jacob Metius independently created telescopes.</p>

            <p><strong>Paragraph B</strong><br>In 1609, Galileo Galilei became the first person to point a telescope skyward. Galileo's telescope was the prototype of the modern day refractor telescope, which is one that uses a convex lens, which is fatter in the middle than at the ends. When parallel light rays pass through the lens, refraction causes the rays to converge. If the light rays entering the lens are all parallel, this meeting occurs at the focal point of the lens. In general, telescopic systems depend on how strongly the system converges or diverges light and so, in order to create greater magnification, it is necessary to increase the focal length.</p>

            <p><strong>Paragraph C</strong><br>Although Galileo's telescope was small and the images fuzzy, Galileo was able to make out mountains and craters on the moon, as well as a ribbon of diffused light arching across the sky, which would later be identified as our Milky Way galaxy. Galileo's telescope had a magnification of about 10. The potential of this instrument for the army and commercial purposes so impressed the Venetian Senate that they funded the building of another larger one. This time, Galileo constructed a telescope with a magnification of about 20. Galileo then used this telescope to make a series of astronomical observations that stunned the scientific world. His use of the telescope to identify features of the moon was ground-breaking science in a couple of ways. Firstly, although Galileo was not the first person to study the heavens with a telescope, he was the first to do so in a systematic way and to record and interpret his observations and publish them for others to read. Secondly, Galileo demonstrated the usefulness of the telescope as an astronomical instrument that enhanced observation beyond what was possible with the unaided eye.</p>

            <p><strong>Paragraph D</strong><br>A variation on the Galilean telescope was suggested by Johannes Kepler in 1611. He noted that a telescopic device could be built using two convex lenses, but the image it produced would be upturned. The advantage of this design, according to Kepler, was its larger field of view and high magnification. One disadvantage of Kepler's astronomical telescope was that its higher magnification was accompanied by more spherical and chromatic aberration, which included geometric distortion and false colours. Over the next several decades, lens-grinding and -polishing techniques improved gradually and images produced by telescopes became much improved.</p>

            <p><strong>Paragraph E</strong><br>By the beginning of the eighteenth century, a specialised craft community of telescope makers slowly developed. These craftsmen worked to produce better spherical lenses with decreased curvature and a longer focal length, which improved the quality of telescopes and made them longer. In addition, long refracting telescopes were rarely used any more. Further increases of power came, beginning in the mid-17th century, from a new form of telescope - the reflecting telescope. Instead of a lens, the reflecting telescope used mirrors, a single curved main one, together with a smaller flat one. This design turned out to be especially useful for studying very faint objects in space, such as the dim patches of light known as nebulae. The studies that the new and bigger tools made possible led to fundamental changes in people's understanding of the universe.</p>

            <p><strong>Paragraph F</strong><br>The nineteenth century saw an expanded scope for telescopes using refractive lenses and reflectors as the professional astronomer's most important tools. As optical technology improved, the telescope became a rugged yet precise instrument. It was well suited for the research interests of scientists, who were mainly concerned with accurately measuring the positions and relative movements of stars, though just as important for cosmology was astronomers' gradual acceptance of astrophysics. Astronomers' desire for ever bigger telescopes caught the attention of wealthy American benefactors and by the end of the century, Americans boasted the two biggest telescopes in the world.</p>

            <p><strong>Paragraph G</strong><br>The twentieth and twenty-first centuries saw the construction of telescopes that could produce images using wavelengths other than visible light, starting in 1931, when it was discovered that astronomical objects gave off radio emissions. This prompted a new era of observational astronomy after World War II, with telescopes being developed for other parts of the electromagnetic spectrum from radio to gamma-rays. Various different types of telescopes were developed, such as radio telescopes, infrared telescopes, ultraviolet telescopes and x-ray telescopes, gamma-ray telescopes and interferometric telescopes. Telescopes are also sometimes placed outside the Earth's atmosphere. From a position above the Earth's atmosphere, a telescope is able to detect light from stars, galaxies, and other objects in space before that light is absorbed or distorted by the atmosphere. Therefore, the view is a lot sharper than that from even the largest telescope on the ground.</p>

            <p><strong>Paragraph H</strong><br>Telescopes have opened our eyes to the universe. Early telescopes showed that Earth was not the centre of the universe, as was previously believed. They also showed mountains and craters on the moon. Later telescopes have revealed geography and weather on the planets in our solar system. These instruments have also helped make the first valid measurement of the speed of light and they have also assisted us comprehend gravity and other fundamental laws of the physical world. The role of telescopes in understanding these things in better detail will continue to grow.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            
            <h3 style="text-align: center; color: #333;">Forensic Handwriting Analysis</h3>

            <p>The forensic science discipline of handwriting examination and analysis initially surfaced as evidence in courts in around 1868, when a forged will was exposed. Over at least the last 150 years, many published scientific studies have focused on the individuality and reproducibility of handwriting for use in a forensic setting. The discipline primarily relies upon a trained handwriting examiner assessing the similarities of known and unknown samples in order to generate a conclusion.</p>

            <p>Handwriting is a complex motor skill that is created by a combination of sensory, neurological, and physiological impulses. Factors such as visual perception and acuity, comprehension of form, central nervous system pathways, and the anatomy of the hand and arm all combine to produce the desired output.</p>

            <p>Most people learn to write by copying letter formations from a copybook at a young age. The ability to reproduce these varies from one person to the next and is based on each writer's perception of the shape and his or her ability to reproduce it. The act of handwriting is mastered through practice and repetition. Once this occurs, writers focus on the subject matter rather than the physical act of writing and deviate from the copybook forms, interjecting their own individualities. The writing becomes a pattern of the subconscious, and habits, which are repeated from one piece of writing to the next.</p>

            <p>The comparison and evaluation of these individual features or habits enable forensic document examiners to identify or exclude, if possible, a known writer as the source for any questioned writing. Lay people may recognise the handwriting of an individual and differentiate between individuals to some degree; however, they observe only the gross features of the handwriting, such as letter formation, size, or slope of the handwriting. Lay people typically do not consider the subtleties in the writing that may differentiate it from other very similar writing. In contrast, document examiners analyse and can differentiate both the gross features and the less conspicuous elements in writing.</p>

            <A>Handwriting features that examiners evaluate include pen pressure, pen lifts, the spacing between words and letters, the position of the writing on the baseline (the position of the character in relation to the ruled or imaginary line), height relationships, beginning and ending strokes, and line quality. A writer's identity cannot be established through an individual feature in the writing. Rather, identity is established through a combination of the significant features between the writings, with no significant differences.</p>

            <p>Not all handwriting is identifiable. For example, when a person traces another individual's signature, that person imitates the writing habits of the original signer, and therefore, the imitator's own handwriting characteristics are not manifested in the tracing. The forensic document examiner would be able to identify the writing as a tracing and associate the writing back to the model signature, if available, but would not be able to identify the writing with the person who traced the signature.</p>

            <p>No one person writes exactly the same way, even within several repetitions of writings. This is known as natural variation, or intra-writer variation. Human beings are not capable of machine-like precision and repetition. As a result of the neuromuscular process, this variation in style is expected. Variation is an integral part of an individual's writing. It describes the changes and deviations, often minute, that are found in repeated samples of one person's writing. More specifically, variation refers to the different ways that a writer makes each letter or character. This variation is normal and serves as an added factor to personalise and individualise writing.</p>

            <p>Handwriting examination is a sub-set of the forensic science discipline of questioned documents. Forensic document examiners conduct scientific examinations, comparisons, and analyses of documents in order to establish genuineness or non-genuineness, to reveal alterations, additions, or deletions, identify or eliminate persons as the source of handwriting, identify or eliminate the source of machine produced documents, typewriting, or other impression marks, or relative evidence, and preserve and/or restore legibility. Forensic document examiners help lawyers by examining and offering written opinions on a variety of disputed document problems including: wills, deeds, medical records, income tax records, time sheets, contracts, loan agreements, election petitions, checks, and anonymous letters.</p>

            <p>Each analysis begins with an independent examination of the questioned and then the known writing using proper lighting and magnification to determine if the writing is original writing, for example ink on paper, and whether it exhibits the characteristics of freely and naturally prepared writing. Some of the characteristics of naturally prepared writing include consistent slant and size, thickening and thinning of the lines as the writing instrument changes direction, and tapered beginning and ending strokes that occur once the writing instrument comes into contact with or leaves the paper. Additionally, each body of writing is examined to assess internal consistency, comparability, and variation. The most suitable text for comparison is natural writing, void of any attempt to disguise and/or distort the writing; however, any writing can be of value for comparison.</p>

            <p>As a discipline, forensic document examination has been consistently accepted in the judiciary in spite of court challenges. Published papers demonstrate the validity of the expertise and support the principle of handwriting individuality. Published criteria ensure consistency in methodology and document examiners in both public and private laboratories use these standards. Ongoing research continues to support the forensic document examination community in strengthening the scientific foundation for forensic handwriting analysis.</p>

            <div style="font-size: 0.85em; color: #555; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px;">
                <p><strong>Glossary</strong></p>
                <p><strong>Acuity:</strong> Sharpness of thought, vision, and/or hearing.</p>
                <p><strong>Lay:</strong> Non professional or lacking expert knowledge.</p>
            </div>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            
            <h3 style="text-align: center; color: #333;">Olive Oil</h3>

            <p>There seems to be a large base of anecdotal benefits that olive oil is good for people's health. However, is this really true and does olive oil have any undesirable components? A lot of the controversy seems to stem from marketing battles between the producers of olive oil, butter and margarine.</p>

            <p>Critics of olive oil point out that foods rich in monounsaturated fats like olive oil may be better than foods full of saturated and trans fats, but just because something is 'better' does not mean it is good for you. Fats are fats, and too much of any can be harmful to the heart. Another problem with olive oil is its calorie count. Olive oil, like all oils and fats, are a concentrated source of calories. With over 4,000 calories per pound, olive oil is far more calorie dense than even pure refined sugar, which has 1,725 calories per pound. Because of its extremely high calorie density, adding olive oil to any food or meal will dramatically increase its calorie density. Therefore, consuming a lot of olive oil can cause poor heart health.</p>

            <p>In spite of what the critics say, the Mediterranean diet, in which olive oil is the primary source of fat, has long been associated with a low mortality for cardiovascular disease and supporters of olive oil refer to the large body of knowledge providing evidence of the benefits of olive oil consumption with regards to the disease. Besides these classical benefits on the fat profile provided by olive oil consumption compared with that of saturated fat, a broad spectrum of other benefits on cardiovascular risk factors is now emerging associated with olive oil consumption. It has also been reported that olive oil intake could be beneficial in the prevention of certain cancers, such as breast cancer, but there is less evidence.</p>

            <p>Extra-virgin olive oil is the oil with the best quality and the most intense taste. In contrast, common olive oil, obtained from a mixture of virgin and refined oil, usually more than 80 per cent refined, has fewer antioxidant and anti-inflammatory compounds. Since during the refining process olive oil loses taste-enhancing polyphenols, refined oil is mixed with virgin olive oil to enhance the flavour; this makes what is called common olive oil. It appears that as extra-virgin olive oil contains much higher amounts of polyphenols than common olive oil, extra-virgin olive oil has better cardiovascular benefits.</p>

            <p>The basic steps in making olive oil are always the same, no matter what kind of equipment is used, from small home presses to very large commercial mills built to process many tons of olives per hour. The first step in the oil extraction process is cleaning the olives and removing the stems, leaves, twigs, and other debris left with the olives. The olives should then be washed with water to remove toxic pesticides, dirt, and other debris. Rocks and sand will quickly wear out a centrifugal decanter or oil separator, reducing life span from 25 to as little as 5 years.</p>

            <p>The second step is crushing the olives into a paste. The purpose of crushing is to tear the flesh cells to facilitate the release of the oil from the vacuoles. This step can be done with stone mills, metal tooth grinders, or various kinds of hammermills. Mixing the paste for 20 to 45 minutes allows small oil droplets to combine into bigger ones. It is an indispensable part of the process. The paste can be subjected to heat during this process to increase the yield, although this generally results in lowering the quality of the oil. The most common mixer is a horizontal trough with spiral mixing blades. Longer mixing times increase oil yield, but allow a longer oxidation period that decreases shelf life.</p>

            <p>The next step consists of separating the oil from the rest of the olive components. This used to be done with presses, hence the now somewhat obsolete terms 'first press' and 'cold press' still used by marketers, but is now done by centrifugation, except in old facilities. Some centrifuges are called three-phase, because they separate the oil, the water, and the solids separately. In most cases, the oil coming out of the first centrifuge is further processed to eliminate any remaining water by a second centrifuge that rotates faster. The oil is then left so that a final separation, if needed, happens through gravity. This is called racking the oil. Finally, the oil can be filtered, if desired.</p>

            <p>There has been a recent danger that has threatened the European olive oil industry. Xylella fastidiosa is a bacterium that attacks olive trees. This pathogen causes Olive Quick Decline Syndrome, a disease that initially causes withering and desiccation of terminal shoots, which then expand to the rest of the canopy, causing the tree to collapse and die. The majority of infections have occurred in old trees, which are less resistant to the bacteria than younger specimens. In a bid to control its spread, authorities of countries affected, such as Italy, Spain and Greece, have destroyed thousands of fruit trees. At the same time, in a bid to stop the spread of the disease to other countries, a ban has been imposed on the export of fruit or cuttings from susceptible species, such as olives, cherries, grapes and almonds, as well as ornamental fruits.</p>

            <p>As a result of the pathogen, total world output of olive oil last year had a one-third decrease from the previous year. Due to the severe drop in supply, world olive oil prices surged in Italy and Spain, the two countries that account for 70 per cent of global output.</p>

            <div style="font-size: 0.85em; color: #555; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px;">
                <p><strong>Glossary</strong></p>
                <p><strong>Vacuole:</strong> A small space containing fluid within a cell.</p>
            </div>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          type: "matching_info",
          title: "Questions 1-6",
          instruction: "The text on the previous pages has 8 paragraphs A - H. Which paragraph contains the following information?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          items: [
            { qNum: 1, text: "A small industry started for manufacturing telescopes.", answer: "E" },
            { qNum: 2, text: "Although telescopes were extremely accurate devices, they were surprisingly robust.", answer: "F" },
            { qNum: 3, text: "Interest in military applications for the telescope helped its development.", answer: "C" },
            { qNum: 4, text: "The image viewed on one early telescope was upside down.", answer: "D" },
            { qNum: 5, text: "The invention of the telescope was done simultaneously in two separate locations.", answer: "A" },
            { qNum: 6, text: "Telescopes placed in space can view things not possible on Earth.", answer: "G" }
          ]
        },
        {
          type: "gap",
          title: "Questions 7-9",
          instruction: "Label the diagram below. Write <strong>NO MORE THAN THREE WORDS</strong> from the text for each answer.",
          htmlContent: `
            <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 30px; width: 100%;">
                <h4 style="color:#002554; margin-bottom: 15px;">Refraction with a Convex Lens</h4>
                
                <img src="https://i.postimg.cc/k4NKgDRm/Screenshot-2026-05-06-125914.png" alt="Refraction with a Convex Lens" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 20px;" />
                
                <div style="background: #f9f9f9; padding: 20px 30px; border-radius: 8px; border: 1px solid #ddd; min-width: 300px; text-align: left;">
                    <div style="margin-bottom: 15px; display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">7.</strong> 
                        <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7">
                    </div>
                    <div style="margin-bottom: 15px; display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">8.</strong> 
                        <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 10px; min-width: 30px;">9.</strong> 
                        <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9">
                    </div>
                </div>
            </div>
          `,
          items: [
            { qNum: 7, answer: ["A convex lens", "convex lens"] },
            { qNum: 8, answer: ["The focal point", "focal point"] },
            { qNum: 9, answer: "magnification" }
          ]
        },
        {
          type: "gap",
          title: "Questions 10-13",
          instruction: "Complete the notes below. Write <strong>NO MORE THAN ONE WORD</strong> for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">Telescopes: 18th - 21st Centuries</h3>
              
              <h4 style="color:#002554; margin-top:20px;">18th Century</h4>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>Refracting telescopes were out of vogue and reflecting telescopes developed in the 17th century using two (10) <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10"> were more used.</li>
                <li>Reflecting telescopes were very good at seeing things in deep space, i.e. (11) <span class="q-badge-inline">11</span><input type="text" class="gap-input" data-qnum="11" id="q-11">.</li>
              </ul>

              <h4 style="color:#002554; margin-top:20px;">19th Century</h4>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>The importance of refractive lenses and reflectors grew.</li>
                <li>Astronomy eventually embraced the theories of (12) <span class="q-badge-inline">12</span><input type="text" class="gap-input" data-qnum="12" id="q-12">.</li>
                <li>The US developed the world's largest telescopes at that time.</li>
              </ul>

              <h4 style="color:#002554; margin-top:20px;">20th + 21st Centuries</h4>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>New types of telescopes picked up alternative (13) <span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="q-13"> and they started recognising various parts of the electromagnetic spectrum.</li>
                <li>New telescopes: radio, infrared, ultraviolet, x-ray, gamma-ray, and interferometric.</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 10, answer: "mirrors" },
            { qNum: 11, answer: "nebulae" },
            { qNum: 12, answer: "astrophysics" },
            { qNum: 13, answer: "wavelengths" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          type: "gap",
          title: "Questions 14-18",
          instruction: "Complete the sentences below. Write <strong>NO MORE THAN TWO WORDS</strong> from the text for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p>14. The earliest use of forensic handwriting analysis was in uncovering a <span class="q-badge-inline">14</span><input type="text" class="gap-input" data-qnum="14" id="q-14">.</p>
                <p>15. Learning handwriting involves engaging a variety of physical elements in <span class="q-badge-inline">15</span><input type="text" class="gap-input" data-qnum="15" id="q-15">.</p>
                <p>16. Developing handwriting is usually done by repeatedly reproducing <span class="q-badge-inline">16</span><input type="text" class="gap-input" data-qnum="16" id="q-16">.</p>
                <p>17. Starting to produce handwriting depends on an individual's <span class="q-badge-inline">17</span><input type="text" class="gap-input" data-qnum="17" id="q-17"> of an image and how it is duplicated.</p>
                <p>18. The <span class="q-badge-inline">18</span><input type="text" class="gap-input" data-qnum="18" id="q-18"> of someone's handwriting emerge once mastery of the basic mechanics is achieved.</p>
            </div>
          `,
          items: [
            { qNum: 14, answer: "forged will" },
            { qNum: 15, answer: "combination" },
            { qNum: 16, answer: "letter formations" },
            { qNum: 17, answer: "perception" },
            { qNum: 18, answer: "individualities" }
          ]
        },
        {
          type: "ynng",
          title: "Questions 19-22",
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
            { qNum: 19, text: "Untrained individuals can recognise some of the important elements in forensic handwriting analysis.", answer: "YES" },
            { qNum: 20, text: "There is often a single different element that reveals who produced a piece of writing.", answer: "NO" },
            { qNum: 21, text: "Forensic handwriting experts have compiled lists of commonly occurring examples of intra-writer variation.", answer: "NOT GIVEN" },
            { qNum: 22, text: "Forensic handwriting analysis has been used in cases of people's work punctuality.", answer: "YES" }
          ]
        },
        {
          type: "gap",
          title: "Questions 23-26",
          instruction: "Answer the questions below. Write <strong>NO MORE THAN THREE WORDS</strong> from the text for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p>23. What can be an indication of original writing?<br><span class="q-badge-inline">23</span><input type="text" class="gap-input" data-qnum="23" id="q-23"></p>
                <p>24. What is the best type of text that can be used as a basis for handwriting analysis?<br><span class="q-badge-inline">24</span><input type="text" class="gap-input" data-qnum="24" id="q-24"></p>
                <p>25. What has been done to dispute the use of handwriting analysis in legal settings?<br><span class="q-badge-inline">25</span><input type="text" class="gap-input" data-qnum="25" id="q-25"></p>
                <p>26. What do published standards create with regards to the procedures of document examiners?<br><span class="q-badge-inline">26</span><input type="text" class="gap-input" data-qnum="26" id="q-26"></p>
            </div>
          `,
          items: [
            { qNum: 23, answer: ["Ink (on paper)", "ink on paper", "ink"] },
            { qNum: 24, answer: "natural writing" },
            { qNum: 25, answer: ["Court challenges", "court challenges"] },
            { qNum: 26, answer: ["Consistency (in methodology)", "consistency in methodology", "consistency"] }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          type: "matching",
          title: "Questions 27-29",
          instruction: "Complete each sentence with the correct ending (A - F) below.",
          options: [
            "A. increase the energy potential of the meal.",
            "B. be affected by the production levels of farmers.",
            "C. be so expensive that it is not worth the expense.",
            "D. be blamed on conflict between the manufacturers of different fats.",
            "E. increase some of its beneficial properties.",
            "F. remove some of its best qualities."
          ],
          items: [
            { qNum: 27, text: "The arguments over which fat is healthiest can", answer: "D" },
            { qNum: 28, text: "Adding olive oil to a salad can", answer: "A" },
            { qNum: 29, text: "The refining process of olive oil can", answer: "F" }
          ]
        },
        {
          type: "gap",
          title: "Questions 30-36",
          instruction: "Complete the flow chart below. Write <strong>NO MORE THAN ONE WORD</strong> from the text for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Producing Olive Oil</h3>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    The olives are cleaned with water to remove other parts of the tree, dirt and poisonous (30) <span class="q-badge-inline">30</span><input type="text" class="gap-input" data-qnum="30" id="q-30">.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    A (31) <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="q-31"> is created by mashing the olives (this allows the oil to be released).
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff; margin-bottom: 10px;">
                    This is then mixed to create bigger oil droplets, which is an (32) <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="q-32"> step.<br><br>
                    (33) <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33"> should be avoided in the process if the highest grade oil is to be produced.
                </div>
                <div style="text-align:center; font-size:20px;">&#8595;</div>
                
                <div style="border:1px solid #ccc; padding:15px; background: #fff;">
                    <p style="margin-top:0; margin-bottom:15px; line-height:1.6;">Separation of the oil is nearly always done by centrifugation and not with (34) <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34">, no matter what bottle labels say.</p>
                    <p style="margin-top:0; margin-bottom:15px; line-height:1.6;">The separated oil has its (35) <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35"> extracted before. If necessary, racking is done using (36) <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36">.</p>
                    <p style="margin-bottom:0; line-height:1.6;">Filtration is done if wanted.</p>
                </div>
            </div>
          `,
          items: [
            { qNum: 30, answer: "pesticides" },
            { qNum: 31, answer: "paste" },
            { qNum: 32, answer: "indispensable" },
            { qNum: 33, answer: "Heat" },
            { qNum: 34, answer: "presses" },
            { qNum: 35, answer: "water" },
            { qNum: 36, answer: "gravity" }
          ]
        },
        {
          type: "mcq_single",
          title: "Questions 37-40",
          instruction: "Choose the correct letter A, B, C or D.",
          items: [
            {
              qNum: 37,
              text: "The first symptoms of Xylella fastidiosa are",
              options: [
                "A. fruit falling before they are ripe.",
                "B. bitter tasting oil.",
                "C. very dry leaves and stems.",
                "D. discolouration of the olive trees' trunks."
              ],
              answer: "C"
            },
            {
              qNum: 38,
              text: "Olive Quick Decline Syndrome is particularly dangerous to",
              options: [
                "A. olive trees that have just started growing.",
                "B. olive trees that grow near the sea.",
                "C. olive trees that have little access to water.",
                "D. the most mature olive trees."
              ],
              answer: "D"
            },
            {
              qNum: 39,
              text: "Governments have addressed the threat of Xylella fastidiosa by",
              options: [
                "A. stopping young plants from being sold to overseas buyers.",
                "B. stopping the planting of new trees in infected areas.",
                "C. cutting production quotas in infected areas.",
                "D. increasing subsidies to farmers who destroy infected trees."
              ],
              answer: "A"
            },
            {
              qNum: 40,
              text: "Olive oil prices have recently increased, because",
              options: [
                "A. dealers have bought up and retained existing stocks.",
                "B. oils from other fruits have been under-produced.",
                "C. current oil production does not meet demand.",
                "D. supply exceeds demand."
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
        image: "https://i.postimg.cc/mDqNPhTN/Screenshot-2026-05-06-131418.png", 
        prompt: `
          The table below shows the passenger and aircraft movements for last year at Singapore Changi Airport.

          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

          You should write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          Many people believe that studying at university is the best way to develop oneself, learn new skills and find a well-paid job. Other people believe that more is learned from getting a job straight away after school and learning whilst working.

          Discuss both views and give your own opinion.

          Give reasons for your answer and include any relevant examples from your knowledge or experience.

          You should write at least 250 words.
        `
      }
    }
  }
};