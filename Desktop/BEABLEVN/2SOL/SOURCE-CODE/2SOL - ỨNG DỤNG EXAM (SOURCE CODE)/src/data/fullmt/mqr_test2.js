// src/data/mqr_test2.js

export const mqr_test2 = {
    id: "mqr_test2",
    category: "full",
    testName: "MOCK TEST MQR 2",
    description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

    sections: {
        // ==========================================================================
        // PHẦN LISTENING
        // ==========================================================================
        listening: {
            audioSrc: "https://dl.dropboxusercontent.com/scl/fi/oo8dnyfv39vv58f4xfc3z/mqr2.mp3?rlkey=2xxnmkkee0gbyorhljvcq24ns",
            timeLimit: 1868,
            passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST MQR - LISTENING SECTION</h3>",
            questions: [
                // --- PART 1 ---
                {
                    type: "gap",
                    title: "Part 1: Questions 1-10",
                    instruction: "Complete the notes below. Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer on your Answer Sheet.",
                    htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px; border: 1px solid #ddd; margin-bottom: 20px;">
                <h3 style="text-align:center; color:#2B6830; margin-top:0; margin-bottom: 20px;">Notes on Bytecycle</h3>
                
                <p>Check (1) <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="q-1" style="width: 150px;"> for all details</p>
                
                <p style="margin-top: 15px;"><strong>Bytecycle will accept:</strong></p>
                <ul style="line-height: 1.8;">
                    <li>computer &#10004</li>
                    <li>(2) <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="q-2" style="width: 150px;"></li>
                    <li>shredder &#10008</li>
                    <li>(3) <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="q-3" style="width: 150px;"></li>
                </ul>

                <p style="margin-top: 15px;">Age-limit for equipment accepted is (4) <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="q-4" style="width: 100px;"></p>
                <p>Collection is (5) <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="q-5" style="width: 100px;"> if donor lives 5-10 km from shop.</p>
                <p>If applicable: collection fee of (6) <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="q-6" style="width: 100px;"></p>
                <p>Shop location: number (7) <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="q-7" style="width: 150px;"> Road.</p>
                
                <p style="margin-top: 15px;"><strong>Bytecycle is a not-for-profit organisation</strong></p>
                <p>Bytecycle gives equipment to:</p>
                <ul style="line-height: 1.8;">
                    <li>(8) <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="q-8" style="width: 150px;"></li>
                    <li>(9) <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="q-9" style="width: 150px;"></li>
                </ul>

                <p style="margin-top: 15px;">Charge for newer equipment helps with (10) <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="q-10" style="width: 200px;"></p>
            </div>
          `,
                    items: [
                        { qNum: 1, answer: "website" },
                        { qNum: 2, answer: "printer" },
                        { qNum: 3, answer: "fax machine" },
                        { qNum: 4, answer: ["5", "five years"] },
                        { qNum: 5, answer: "free" },
                        { qNum: 6, answer: "$12.50" },
                        { qNum: 7, answer: "786 Western Valley" },
                        { qNum: 8, answer: "poor families" },
                        { qNum: 9, answer: "charities" },
                        { qNum: 10, answer: "operating expenses" }
                    ]
                },

                // --- PART 2 ---
                {
                    type: "mcq_single",
                    title: "Part 2: Questions 11-12",
                    instruction: "Choose the correct letter, <strong>A, B or C</strong>.",
                    items: [
                        {
                            qNum: 11,
                            text: "The building used by the Community Centre members is",
                            options: [
                                "A. owned by the City.",
                                "B. owned by the Community Centre members.",
                                "C. owned by the Cranbrook Manufacturing Company."
                            ],
                            answer: "C"
                        },
                        {
                            qNum: 12,
                            text: "The plans for changes to the Community Centre have been made",
                            options: [
                                "A. by the Director of Cranbrook Manufacturing.",
                                "B. by the Community Centre members.",
                                "C. by the Chairperson and Secretary of the Committee."
                            ],
                            answer: "C"
                        }
                    ]
                },
                {
          type: "gap",
          title: "Questions 13-20",
          instruction: "Label the plans below. Choose the correct name from the box, for each room/area on the plans. Write the correct letter, <strong>A-J</strong>, next to each number.",
          htmlContent: `
            <style>
                .super-big-map {
                    width: 600px !important;        /* Tăng giảm chiều ngang ở đây */
                    height: 700px !important;      /* Tăng giảm chiều cao ở đây */
                    max-width: none !important;
                    max-height: none !important;
                    object-fit: fill !important;    /* Ép ảnh giãn ra khớp đúng kích thước trên */
                    border: 1px solid #ccc;
                    border-radius: 6px;
                }
                .map-scroll-container {
                    width: 100%;
                    overflow-x: auto;               /* Tạo thanh cuộn ngang nếu ảnh to hơn màn hình */
                    overflow-y: auto;               /* Tạo thanh cuộn dọc nếu cần */
                    text-align: center;
                    margin-bottom: 30px;
                }
            </style>

            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 30px; width: 100%; clear: both;">
                <h4 style="color:#2B6830; margin-bottom: 15px; text-align: center; font-size: 1.3rem;">Cranbrook Community Centre</h4>
                
                <div class="map-scroll-container">
                    <img src="https://i.postimg.cc/MKcbdXkZ/Screenshot-2026-05-08-182723.png" alt="Community Centre Plans" class="super-big-map" />
                </div>
                <div style="background: #f9f9f9; padding: 25px 30px; border-radius: 8px; border: 1px solid #ddd; width: 100%; max-width: 800px; box-sizing: border-box; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px;">
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 15px; font-size: 1.1rem;">13.</strong> 
                        <span class="q-badge-inline">13</span><input type="text" class="gap-input" data-qnum="13" id="q-13" style="width: 70px;">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 15px; font-size: 1.1rem;">17.</strong> 
                        <span class="q-badge-inline">17</span><input type="text" class="gap-input" data-qnum="17" id="q-17" style="width: 70px;">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 15px; font-size: 1.1rem;">14.</strong> 
                        <span class="q-badge-inline">14</span><input type="text" class="gap-input" data-qnum="14" id="q-14" style="width: 70px;">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 15px; font-size: 1.1rem;">18.</strong> 
                        <span class="q-badge-inline">18</span><input type="text" class="gap-input" data-qnum="18" id="q-18" style="width: 70px;">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 15px; font-size: 1.1rem;">15.</strong> 
                        <span class="q-badge-inline">15</span><input type="text" class="gap-input" data-qnum="15" id="q-15" style="width: 70px;">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 15px; font-size: 1.1rem;">19.</strong> 
                        <span class="q-badge-inline">19</span><input type="text" class="gap-input" data-qnum="19" id="q-19" style="width: 70px;">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 15px; font-size: 1.1rem;">16.</strong> 
                        <span class="q-badge-inline">16</span><input type="text" class="gap-input" data-qnum="16" id="q-16" style="width: 70px;">
                    </div>
                    <div style="display: flex; align-items: center;">
                        <strong style="margin-right: 15px; font-size: 1.1rem;">20.</strong> 
                        <span class="q-badge-inline">20</span><input type="text" class="gap-input" data-qnum="20" id="q-20" style="width: 70px;">
                    </div>
                </div>
            </div>
          `,
          items: [
            { qNum: 13, answer: "G" },
            { qNum: 14, answer: "H" },
            { qNum: 15, answer: "E" },
            { qNum: 16, answer: "I" }, 
            { qNum: 17, answer: "B" },
            { qNum: 18, answer: "A" },
            { qNum: 19, answer: "F" },
            { qNum: 20, answer: "C" }
          ]
        },

                // --- PART 3 ---
                {
                    type: "mcq_single",
                    title: "Part 3: Questions 21-25",
                    instruction: "Choose the correct letter, <strong>A, B or </strong>C.",
                    items: [
                        {
                            qNum: 21,
                            text: "The presenters of this talk are",
                            options: [
                                "A. university lecturers.",
                                "B. students in an education course.",
                                "C. experts in children's reading."
                            ],
                            answer: "B"
                        },
                        {
                            qNum: 22,
                            text: "The topic for the talk is",
                            options: [
                                "A. whether electronic devices help children's reading skills.",
                                "B. how electronic devices help children learn.",
                                "C. why children enjoy reading on electronic devices."
                            ],
                            answer: "A"
                        },
                        {
                            qNum: 23,
                            text: "Among members of the audience",
                            options: [
                                "A. most prefer reading books in paper form.",
                                "B. a similar number prefer paper books and electronic books.",
                                "C. most prefer reading electronic books."
                            ],
                            answer: "B"
                        },
                        {
                            qNum: 24,
                            text: "The increase in demand for electronic books is coming from",
                            options: [
                                "A. young adults in America and Europe.",
                                "B. people who read paper books regularly.",
                                "C. adults in older age groups."
                            ],
                            answer: "B"
                        },
                        {
                            qNum: 25,
                            text: "The main difficulty with research into children's electronic reading is that",
                            options: [
                                "A. electronic reading devices cost too much money.",
                                "B. children get reading material from different sources.",
                                "C. technology changes during the period of research."
                            ],
                            answer: "C"
                        }
                    ]
                },
                {
                    type: "matching",
                    title: "Questions 26-28",
                    instruction: "Match the research on the topic of children's electronic reading with the researchers. Choose <strong>THREE</strong> answers from the box and write the correct letter, <strong>A-E</strong> next to questions 26-28.",
                    options: [
                        "A. parents' ability to help children with e-reader use",
                        "B. the impact of e-readers on children's reading ability",
                        "C. software which reads aloud to children",
                        "D. children's motivation to read with parents",
                        "E. reading with an added audio dictionary"
                    ],
                    items: [
                        { qNum: 26, text: "Kulik", answer: "D" },
                        { qNum: 27, text: "Healy and Cuban", answer: "B" },
                        { qNum: 28, text: "Erickson", answer: "E" }
                    ]
                },
                {
                    type: "mcq_multi",
                    title: "Questions 29-30",
                    instruction: "Choose <strong>TWO</strong> letters, <strong>A-E</strong>. Which two topics does the lecturer select for next week's presentation?",
                    options: [
                        "A. the use of e-readers outside school hours",
                        "B. classroom comparisons of children's reading development",
                        "C. teacher opinions of electronic reading material",
                        "D. teacher preparation to use new technology",
                        "E. the effectiveness of e-readers for teaching new technology"
                    ],
                    items: [
                        { qNums: [29, 30], answer: ["B", "D"] }
                    ]
                },

                // --- PART 4 ---
                {
          type: "mcq_single",
          title: "Part 4: Questions 31-32",
          instruction: `
            <div style="display: flex; justify-content: center; margin-bottom: 25px; width: 100%;">
                <img src="https://i.postimg.cc/XvS7C1W8/Screenshot-2026-05-08-191728.png" alt="Shipping Container" style="max-width: 100%; height: auto; border: 1px solid #eaeaea; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);" />
            </div>
            Choose the correct letter, <strong>A, B or C</strong>.
          `,
          items: [
            {
              qNum: 31,
              text: "New solutions for low-cost housing are being proposed by:",
              options: [
                "A. government departments",
                "B. housing companies",
                "C. charity organisations"
              ],
              answer: "C"
            },
            {
              qNum: 32,
              text: "The main argument in favour of the shipping container solution is:",
              options: [
                "A. speed of installation",
                "B. the quality of the accommodation",
                "C. evidence of successful use in other countries"
              ],
              answer: "A"
            }
          ]
        },
                {
                    type: "gap",
                    title: "Questions 33-40",
                    instruction: "Complete the notes below. Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.",
                    htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">Low-cost housing for homeless people</h3>
              
              <h4 style="color:#2B6830;">Shipping containers already used in London</h4>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>City of Brighton built (33) <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33" style="width:100px;"> container apartments units</li>
                <li>Brighton apartments meant to be (34) <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="q-34" style="width:150px;"> housing, not permanent</li>
                <li>Prices for empty containers start at: (35) <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="q-35" style="width:150px;"></li>
                <li>Huge variety of uses - malls, studios, hotels etc.</li>
                <li>Interior design is easy - all containers based on (36) <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="q-36" style="width:200px;"></li>
                <li>Can be stacked twelve high</li>
                <li>Water, electricity and (37) <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="q-37" style="width:150px;"> pipes - fitted from outside</li>
                <li>Temperature control depends mainly on (38) <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="q-38" style="width:150px;"></li>
                <li>Noise disturbance test results - better than (39) <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="q-39" style="width:150px;"></li>
                <li>Final cost per unit depends on quality of (40) <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="q-40" style="width:150px;"></li>
              </ul>
            </div>
          `,
                    items: [
                        { qNum: 33, answer: ["36", "thirty-six"] },
                        { qNum: 34, answer: "transitional" },
                        { qNum: 35, answer: ["$3000", "three thousand dollars"] },
                        { qNum: 36, answer: "standard measurements" },
                        { qNum: 37, answer: "waste removal" },
                        { qNum: 38, answer: "insulation" },
                        { qNum: 39, answer: "most hotels" },
                        { qNum: 40, answer: "interior fittings" }
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
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-15</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">What Guide Dogs Do</h3>
            
            <p><strong>A</strong> Guide dogs help blind or visually impaired people get around in the world. In most countries, they are allowed anywhere that the public is allowed, so they can help their handlers be any place they might want to go to. To do this, a guide dog must know how to keep on a direct route, ignoring distractions such as smells, other animals and people, maintain a steady pace, to the left and just ahead of the handler, recognize and avoid obstacles that the handler won't be able to fit through (narrow passages and low overheads) and obey a number of verbal commands.</p>

            <p><strong>B</strong> Additionally, a guide dog must know to disobey any command that would put the handler in danger. This skill, called selective disobedience, is perhaps the most amazing thing about guide dogs -- that they can balance obedience with their own assessment of the situation. This capacity is extremely important at road crossings, where the handler and dog must work very closely together to navigate the situation safely. When the team reaches the curb, the dog stops, signalling to the handler that they have reached a crossing. Dogs cannot distinguish the between red, green or amber traffic lights, so the handler must make the decision of when it is safe to proceed across the road. The handler listens to the flow of traffic to figure out when the light has changed and then gives the command "forward." If there is no danger, the dog proceeds across the road in a straight line. If there are cars approaching, the dog waits until the danger is gone and then follows the forward command.</p>

            <p><strong>C</strong> In a handler-guide dog team, the guide dog doesn't lead the handler and the handler doesn't completely control the guide dog; the two work together to get from place to place. The guide dog doesn't know where the destination is, so it must follow the handler's instructions of how far to go and when to turn. The handler can't see where obstructions lie, so the guide dog must make its own decisions as to how to navigate the team's path. Each half of the team relies on the other to accomplish the tasks at hand. As a guide dog gets more experience with its handler, it may be able to take on even more responsibility. For example, many veteran guide dogs know all of their master's usual destinations. All the handler has to tell them is "go to the office" or "find the coffee shop," and the guide dog will follow the complete route!</p>

            <p><strong>D</strong> Most guide dog schools use golden retrievers, Labrador retrievers or German shepherds. These three breeds are characterized by intelligence, obedience, stamina and friendliness, and so are well suited for the job. Guide dog schools breed their dogs very carefully, choosing parents with intelligence and special guiding ability. Even with this attention to good breeding, many puppies don't turn out to be suited for the job. Instructors screen puppies for guiding aptitude, and release 20 percent of them from the program. Training is a rigorous process for both the instructors and the dogs, but it's also a lot of fun. To make sure the dogs are up to the challenge, most schools put them through extensive trials before beginning the training. The tests are designed to assess the dogs' self-confidence level, since only extremely confident dogs will be able to deal with the pressure of guiding instruction. If a dog passes the tests, it begins the training program right away.</p>

            <p><strong>E</strong> Different schools have different programs, but typically, training will last four to five months. To make sure the dogs master all the complex guide skills, the instructors have to introduce them to each idea gradually. Once they have introduced what is expected of the dog, training is essentially a matter of rewarding correct performance and changing incorrect performance. This works with dogs because they are pack animals and have a natural need to please an authority figure. The instructor, and later the handler, is simply stepping into the place of the alpha dog, the leader of the pack. Unlike ordinary obedience training, guide dog training does not use food as a reward for good performance. This is because a guide dog must be able to work around food without being distracted by it. Instead, instructors use praise or other reward systems to encourage correct performance. The standard means of correction is pulling on the dog's leash, so that it pulls a training collar, giving the dog a slight pinch. Using this basic reward/punishment system, instructors work through the necessary skills for guiding.</p>

            <p><strong>F</strong> Guide dogs are typically trained by highly qualified instructors, who are assisted by a number of apprentice instructors. Procedures vary from school to school, but in general, trainers must spend two to three years as a supervised apprentice before they can move up to a master instructor. Instructors and apprentice instructors are typically college graduates with a good deal of prior experience dealing with both animals and people. Because most guide dog schools are non-profit institutions, instructor pay is relatively low for the education level required; even so, openings don't come up all that often, and attract many hopeful applicants. Often, trainers work their way up to apprentice instructor by working with the school on a lower level, such as raising guide dog puppies. The job is extremely demanding intellectually, emotionally and physically. Instructors work very hard for long hours, and they must constantly deal not only with difficult animals but also with difficult people. It is definitely rewarding work, though. Instructors say they get a great deal of satisfaction from helping a difficult dog master its job, and they're certainly very happy putting together a functioning dog-and-handler team.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 16-27</strong>, which are based on Reading Passage 2 below.</p>
            
            <h3 style="text-align: center; color: #333;">Video Games and Children</h3>

            <p><strong>A</strong> Research has shown that playing video games can be beneficial for a number of cognitive functions and may also contain social benefits. They educate, provide space for creativity and offer healthy social interaction. One important aspect in a game is that following directions can be crucial to success. In order to progress in games, one must first learn to follow the guidelines, restrictions and components of them. As the player confronts new challenges, they must use problem-solving to find solutions. This is true for educational games, mind games, and Role Playing Games alike. The player cannot get through with what they already have or know and must find new combinations and incorporate old skills with new skills to overcome obstacles such as the level or quest (Gee, 2003). In relation to this, the player can also learn strategy and anticipation, management of resources (simulation games), mapping, pattern recognition, how to judge the situation and practice reading (with directions, dialogue, etc.) and quantitative calculations (through educational games, managing finances, buying and selling for profit, etc. (Tumbokon, 2014).</p>

            <p><strong>B</strong> But at the same time, the best examples are very addictive and gamers are tempted to play for increasing lengths of time. Excessive behaviour in any area of life rightly signals alarm bells for parents. However, for an emerging technology like games, it can be hard to differentiate between excess and enthusiasm. It's difficult for parents to judge what is a healthy time commitment if they are not game-players themselves. One approach is to look at the available statistics. A 2012 consumer study demonstrated that a surprisingly wide range of ages play games: 40% of the UK population in fact, of which 24% play at least weekly. This picture is brought into greater focus by last year's government briefing. It states that in England, video games were played for two hours or more a day by 55% of boys and 20% of girls in 2010.</p>

            <p><strong>C</strong> On the more extreme end of the spectrum, the clinical physiologist Dr Jane Hucksteth (2010) reported that 7% of teens in the UK play more than 30 hours of computer games a week. However the impact on their school work and social life needed further study. "It is agreed that excessive screen time - over four hours with no break - can be a bad thing," said Dr Hucksteth, "There is a lot of research on this. However, we should also consider time of day, weekends versus school days and the age of the child before we can assess the overall impact on their welfare. Gaming is far from a diagnosable addiction but some of the language of addiction can help parents identify when things are getting excessive".</p>

            <p><strong>D</strong> Indications include playing every day, devoting long periods of time, sacrificing other activities, neglecting homework and moodiness. The last two may describe many of our children, but Hucksteth suggests that where four or more of these factors exist there may be cause for concern and a need for parents to step in. "Games should be played as part of a healthy and balanced lifestyle," agrees Dr Jo Twynum of UKIE, the UK games industry trade body. "Players should take regular breaks - a good guide is five minutes rest every 45-60 minutes of game play." In light of this, appropriate gaming time is more about its impact on the child's wider life than a hard and fast time limit. As children get older, they will naturally integrate gaming among other activities (outside interests, friendship groups and even homework) so the dividing line will become more blurred.</p>

            <p><strong>E</strong> Distinguishing gaming habits from time spent on other forms of screen time is also important. While TV and video games appear similar on the surface, the interactive nature of the latter results in an experience more like a physical toy. Dr Twynum highlights this misunderstanding. "I'm not sure games provide any different parameters to other immersive activities. Would we ask 'How long should children play Lego for?'". Video games offer distinct advantages over television, particularly the recent trend in cross-over titles like "Skylanders" and "Disney Infinity"; these come with plastic action figures which allow children to play away from the screen - although, of course, parents may object to the costs involved in buying multiple characters on top of the games themselves.</p>

            <p><strong>F</strong> If parents are concerned that their child is spending excess time on gaming, keeping game technology in shared spaces rather than bedrooms is by far the most effective and informal solution. This does require compromise on both the part of the child (losing their private pursuit) and the parent (having to share the living room) but has the advantage of not only keeping games under surveillance but encouraging families to play together - something that children are often more enthusiastic about than parents anticipate. Using Parental Controls to restrict access to particular games is a good driver for conversation and agreement over appropriate gaming habits in a family. There are also specific hardware features, for example a timer that pauses the action after a pre-determined amount of daily screen time. A combination of these reference points, regular breaks, along with moving technology back into family spaces, ensures parents and children maintain a healthy relationship to video games and involvement in the family unit.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 28-40</strong>, which are based on Reading Passage 3 below.</p>
            
            <h3 style="text-align: center; color: #333;">Sensitive Technology</h3>

            <p><strong>A</strong> Imagine if an application (app.) in your phone or tablet computer could take your pulse or measure your blood sugar just when you touch the screen, without any added hardware. New developments in the construction of screen glass might mean such technologies are on the way. Scientists have released a study about building light-based sensors into the physical structure of glass used for device screens. The sensors are placed in stackable layers using finer detail than ever before.</p>

            <p><strong>B</strong> The technology means apps can get more accurate readings from far more sensors than just those already placed under screens to detect a touch or swipe. It uses laser to inscribe wave-guides into the glass, which then use light to describe the transmission of information. Two prototype applications of this have already been built. The first is a temperature sensor which reads body temperature from the touch of a finger. The other is a unique authentication system that uses tiny dots to scatter infrared light that can be read by the device's camera. "It's like a permanent and unique barcode on every smartphone that's very difficult to counterfeit and also not easily seen, so doesn't intrude in the operation of the phone," said Dr Hugh Evans of the Grant Materials Lab.</p>

            <p><strong>C</strong> Wearable computing devices such as smartwatches, tracking wristbands and spectacle-like computers are gadgets that clip to clothes, wrap around wrists and mimic glasses - and they all need some kind of glass display. With the possibility of more detailed sensors built into an interface substrate like a touchscreen, it potentially makes every glass surface a computer. Of the industries set to receive a boost, observers say wearable computing devices in particular will benefit, as we demand more responsiveness from devices. While major companies have not yet brought advanced wearables into the mainstream, they are now starting to emerge from the realm of science fiction into reality, helped by the new glass.</p>

            <p><strong>D</strong> "I see this advance being even more useful for wearables like glasses and watches," says Jeremy Rodrigues, founder of Mexican app developers JR Design, which makes mobile apps to help guide travellers in unfamiliar cities. "Putting transparent sensors on glasses and watches will reduce the circuit box needed for these devices, which in turn will make them more attractive and easier to wear." The basis for laser-inscribed wave-guides opens the field to even more circuits based on light, and thus, more advanced wearable computing devices. These will typically enable the wearer to take and view pictures or video, read text messages and emails, respond to voice commands, browse the web and more.</p>

            <p><strong>E</strong> Wearable computing devices are small, portable and so new that nobody knows how they'll fare with consumers or in the enterprise. Looking back at the fast rise of smartphones and tablets, you might assume that wearables will repeat that performance. But smartphones and tablets are "cool" devices that flipped the workplace upside down because they help employees perform with more efficiency and productivity. These devices -- and the apps and services that come with them -- are easy to set up and use. Further, they can sidestep many of the limitations of more traditional IT-managed applications and services.</p>

            <p><strong>F</strong> It is still unknown whether wearable computing devices will be able to deliver all that. What we do know is that workers wearing smart devices will not need to reach into their pockets as often. Instead, people will be able to gesture, speak or blink to retrieve the information they need or to accomplish tasks. The question is: Are workers really encumbered by having to reach for their devices? There are certainly a few ways the enterprise could benefit from employees' use of wearable computing devices. The hands-free and location-independent operations of wearables could have a number of potential uses.</p>

            <p><strong>G</strong> For example, Eurotech's Zypad delivers a wrist-mounted mini-computer to those needing high-tech mobility and connectivity in the field, such as emergency personnel, search-and-rescue teams, warehouse workers or anyone on the move. Wearables also make it possible to track individuals, such as nurses performing rounds or emergency workers in the field. For environmental disaster work in which employees must wear protective suiting, a wearable device could be an invaluable asset by offering hands-free access to vital data. Finally, smart glasses could be capable of displaying schematics to a technician repairing a specialized piece of machinery, which means no hands and no fuss. All the information workers needed would be before their eyes.</p>

            <p><strong>H</strong> But possibilities do not always translate into uptake, and while there are some exciting potential uses for wearable computing devices in the modern enterprise or company, their spread will depend on device developers and the needs of employees to connect to company data storage and more conventional computing platforms. Developers and organizations will need to build business programs and web services that integrate with these devices and can reliably push data to them and use data received from them.</p>
        </div>
      `,
            questions: [
                // --- PASSAGE 1 QUESTIONS ---
                {
                    type: "matching_info",
                    title: "Questions 1-7",
                    instruction: "Reading passage 1 has 6 paragraphs, <strong>A-F</strong>. Which paragraph contains the following information?<br><strong>NB</strong> You may use any letter more than once.",
                    options: ["A", "B", "C", "D", "E", "F"],
                    items: [
                        { qNum: 1, text: "The guide dog relates to its owner as it would to a dominant animal.", answer: "E" },
                        { qNum: 2, text: "There is a lot of competition for jobs as an instructor.", answer: "F" },
                        { qNum: 3, text: "Good guide dogs have a range of skills, behaviours and knowledge.", answer: "A" },
                        { qNum: 4, text: "Guide dog training differs from that of other dogs in that treats are not given.", answer: "E" },
                        { qNum: 5, text: "The dogs are thoroughly vetted to evaluate their character.", answer: "D" },
                        { qNum: 6, text: "Most dog trainers have been to university.", answer: "F" },
                        { qNum: 7, text: "Dogs have different visual faculties from humans.", answer: "B" }
                    ]
                },
                {
                    type: "matching",
                    title: "Questions 8-15",
                    instruction: "Complete each sentence with the correct ending <strong>A-H</strong> from the box below.",
                    options: [
                        "A. to become a master instructor.",
                        "B. because they are intelligent and friendly.",
                        "C. if the result would put their handler in danger.",
                        "D. a warm tone and some physical discomfort are used.",
                        "E. about one fifth of dogs do not progress through training.",
                        "F. they ignore any unnecessary stimuli.",
                        "G. as pack animals they like to please the figure in authority.",
                        "H. as most schools do not work for profit."
                    ],
                    items: [
                        { qNum: 8, text: "Trained dogs are taught to disobey orders...", answer: "C" },
                        { qNum: 9, text: "Labradors are well suited to be a guide dog...", answer: "B" },
                        { qNum: 10, text: "Despite attention to breeding and careful selection...", answer: "E" },
                        { qNum: 11, text: "In order to ensure correct behaviour...", answer: "D" },
                        { qNum: 12, text: "Training works with dogs because...", answer: "G" },
                        { qNum: 13, text: "Most trainers must serve a 3 year apprenticeship...", answer: "A" },
                        { qNum: 14, text: "Trainers are not very well paid...", answer: "H" },
                        { qNum: 15, text: "Guide dogs are trained to ensure that...", answer: "F" }
                    ]
                },

                // --- PASSAGE 2 QUESTIONS ---
                {
                    type: "matching_headings",
                    title: "Questions 16-21",
                    instruction: "Reading Passage 2 has six paragraphs, <strong>A-F</strong>. Choose the correct heading for each paragraph from the list of headings below.",
                    options: [
                        "i. Comparing games with other electronic media",
                        "ii. Types of intervention for game addicts",
                        "iii. Video games as a learning tool",
                        "iv. The financial costs of gaming",
                        "v. Tell-tale signs of addiction",
                        "vi. Playing time: not the only consideration",
                        "vii. How schools should manage video-gamers",
                        "viii. Evaluating video game usage patterns",
                        "ix. How gaming develops technological skills",
                        "x. Comparing games with other electronic media"
                    ],
                    items: [
                        { qNum: 16, text: "Paragraph A", answer: "iii" },
                        { qNum: 17, text: "Paragraph B", answer: "viii" },
                        { qNum: 18, text: "Paragraph C", answer: "vi" },
                        { qNum: 19, text: "Paragraph D", answer: "v" },
                        { qNum: 20, text: "Paragraph E", answer: "i" },
                        { qNum: 21, text: "Paragraph F", answer: "ii" }
                    ]
                },
                {
                    type: "gap",
                    title: "Questions 22-25",
                    instruction: "Complete the summary below. Choose <strong>NO MORE THAN FOUR WORDS</strong> from the passage for each answer.",
                    htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p style="line-height: 2;">To reduce the risk of addiction to video games, experts agree that it is good for players to <span class="q-badge-inline">22</span><input type="text" class="gap-input" data-qnum="22" id="q-22"> from game playing. However, we should be careful not to overemphasise the similarity between gaming and other screen-based entertainment. Gaming is less like watching television and closer to playing with <span class="q-badge-inline">23</span><input type="text" class="gap-input" data-qnum="23" id="q-23">. In fact, some children's video games have characters who are also represented as <span class="q-badge-inline">24</span><input type="text" class="gap-input" data-qnum="24" id="q-24">. One way to monitor children's gaming habits is to locate the equipment <span class="q-badge-inline">25</span><input type="text" class="gap-input" data-qnum="25" id="q-25">.</p>
            </div>
          `,
                    items: [
                        { qNum: 22, answer: "take regular breaks" },
                        { qNum: 23, answer: "a physical toy" },
                        { qNum: 24, answer: "plastic action figures" },
                        { qNum: 25, answer: "in shared spaces" }
                    ]
                },
                {
                    type: "tfng",
                    title: "Questions 26-27",
                    instruction: `Do the following statements agree with the information given in Reading Passage 2?<br><br>
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
                        { qNum: 26, text: "Seven percent of the UK population spend over 30 hours a week on video gaming.", answer: "FALSE" },
                        { qNum: 27, text: "Built-in controls which limit gaming time are very popular with parents.", answer: "NOT GIVEN" }
                    ]
                },

                // --- PASSAGE 3 QUESTIONS ---
                {
                    type: "gap",
                    title: "Questions 28-33",
                    instruction: "Complete the summary below. Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.",
                    htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
                <p style="line-height: 2;">Small computing devices may soon be revolutionised by the use of <span class="q-badge-inline">28</span><input type="text" class="gap-input" data-qnum="28" id="q-28"> in their screens. Their <span class="q-badge-inline">29</span><input type="text" class="gap-input" data-qnum="29" id="q-29"> will provide much greater detail than previous technology, and <span class="q-badge-inline">30</span><input type="text" class="gap-input" data-qnum="30" id="q-30"> in medicine and security have been found. Using this technology, any device with a <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="q-31"> could become a computer. The technology will be beneficial in wearable devices, where <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="q-32"> is expected by users. Advanced wearables with the new glass may soon enter the <span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="q-33">.</p>
            </div>
          `,
                    items: [
                        { qNum: 28, answer: "light-based sensors" },
                        { qNum: 29, answer: "readings" },
                        { qNum: 30, answer: "applications" },
                        { qNum: 31, answer: "glass surface" },
                        { qNum: 32, answer: "responsiveness" },
                        { qNum: 33, answer: "mainstream" }
                    ]
                },
                {
                    type: "matching_info",
                    title: "Questions 34-38",
                    instruction: "The passage has 8 paragraphs labelled <strong>A-H</strong>. Which paragraph contains the following information?<br><strong>NB</strong> You may use any letter more than once.",
                    options: ["A", "B", "C", "D", "E", "F", "G", "H"],
                    items: [
                        { qNum: 34, text: "a speculation about how the new technology will improve existing devices", answer: "D" },
                        { qNum: 35, text: "a description of applications which are in the trial phase before general production", answer: "B" },
                        { qNum: 36, text: "a warning about some difficulties standing in the way of the adoption of the new devices", answer: "H" },
                        { qNum: 37, text: "a comparison between wearable devices and other relatively new types of devices", answer: "E" },
                        { qNum: 38, text: "an explanation of how users will operate the new types of wearable devices", answer: "F" }
                    ]
                },
                {
                    type: "mcq_single",
                    title: "Questions 39-40",
                    instruction: "Choose the correct letter <strong>A, B, C or D</strong>.",
                    items: [
                        {
                            qNum: 39,
                            text: "In future, wearable devices will",
                            options: [
                                "A. be made mainly of transparent materials.",
                                "B. make it easier for workers to use their hands for important tasks.",
                                "C. replace conventional computing devices.",
                                "D. require large amounts of data to be transmitted to make them work"
                            ],
                            answer: "B"
                        },
                        {
                            qNum: 40,
                            text: "Whether wearable devices will succeed in business is hard to predict because",
                            options: [
                                "A. they are more suited to medical uses.",
                                "B. they have a number of limitations.",
                                "C. complementary software still needs to be written for them.",
                                "D. some employees are concerned about being tracked by them."
                            ],
                            answer: "C"
                        }
                    ]
                }
            ]
        }
    }
};