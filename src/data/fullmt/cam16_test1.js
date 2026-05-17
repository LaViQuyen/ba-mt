// src/data/cam16_test1.js

export const cam16_test1 = {
  id: "mt17",
  category: "full",
  testName: "MOCK TEST 17",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 10 - 15 PDF) - Đáp án trang 121
    // ==========================================================================
    listening: {
      audioSrc: "/audio/mt17.mp3",
      timeLimit: 1606,
      passage: "<h3 style='text-align:center; color:#002554;'>MOCK TEST 17 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-10",
          instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
                <h3 style="text-align:center; color:#002554; margin-top:0;">Children's Engineering Workshops</h3>
                
                <h4 style="color:#002554; margin-bottom: 10px;">Tiny Engineers (ages 4-5)</h4>
                <p><strong>Activities</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Create a cover for an <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"> so they can drop it from a height without breaking it.</li>
                    <li>Take part in a competition to build the tallest <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2">.</li>
                    <li>Make a <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"> powered by a balloon.</li>
                </ul>

                <h4 style="color:#002554; margin-bottom: 10px;">Junior Engineers (ages 6-8)</h4>
                <p><strong>Activities</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Build model cars, trucks and <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"> and learn how to program them so they can move.</li>
                    <li>Take part in a competition to build the longest <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"> using card and wood.</li>
                    <li>Create a short <span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"> with special software.</li>
                    <li>Build, <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"> and program a humanoid robot.</li>
                </ul>

                <p><strong>Cost for a five-week block:</strong> £50</p>
                <p><strong>Held on</strong> <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8"> from 10 am to 11 am</p>

                <h4 style="color:#002554; margin-bottom: 10px;">Location</h4>
                <p>Building 10A, <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9"> Industrial Estate, Grasford</p>
                <p>Plenty of <span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10"> is available.</p>
            </div>
          `,
          items: [
            { qNum: 1, answer: "egg" },
            { qNum: 2, answer: "tower" },
            { qNum: 3, answer: "car" },
            { qNum: 4, answer: "animals" },
            { qNum: 5, answer: "bridge" },
            { qNum: 6, answer: ["movie", "film"] },
            { qNum: 7, answer: "decorate" },
            { qNum: 8, answer: "Wednesdays" },
            { qNum: 9, answer: "Fradstone" },
            { qNum: 10, answer: "parking" }
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
              text: "Stevenson's was founded in",
              options: ["A. 1923.", "B. 1924.", "C. 1926."],
              answer: "C"
            },
            {
              qNum: 12,
              text: "Originally, Stevenson's manufactured goods for",
              options: ["A. the healthcare industry.", "B. the automotive industry.", "C. the machine tools industry."],
              answer: "A"
            },
            {
              qNum: 13,
              text: "What does the speaker say about the company premises?",
              options: ["A. The company has recently moved.", "B. The company has no plans to move.", "C. The company is going to move shortly."],
              answer: "B"
            },
            {
              qNum: 14,
              text: "The programme for the work experience group includes",
              options: ["A. time to do research.", "B. meetings with a teacher.", "C. talks by staff."],
              answer: "C"
            }
          ]
        },
        {
          type: "labelling_grid",
          title: "Questions 15-20",
          instruction: "Label the plan below. Write the correct letter, A-J, next to Questions 15-20.",
          // Bạn cần cắt ảnh từ trang 12 PDF và lưu vào đường dẫn này
          image: "https://i.postimg.cc/fy1pXvXc/Screenshot-2026-02-12-190452.png    ", 
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
          items: [
            { qNum: 15, text: "coffee room", answer: "H" },
            { qNum: 16, text: "warehouse", answer: "C" },
            { qNum: 17, text: "staff canteen", answer: "G" },
            { qNum: 18, text: "meeting room", answer: "B" },
            { qNum: 19, text: "human resources", answer: "I" },
            { qNum: 20, text: "boardroom", answer: "A" }
          ]
        },

        // --- PART 3 ---
        {
          type: "mcq_multi",
          title: "Part 3: Questions 21-22",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO parts of the introductory stage to their art projects do Jess and Tom agree were useful?",
          options: [
            "A. the Bird Park visit",
            "B. the workshop sessions",
            "C. the Natural History Museum visit",
            "D. the projects done in previous years",
            "E. the handouts with research sources"
          ],
          items: [
            { qNums: [21, 22], answer: ["C", "E"] } // Key: C, E (in either order)
          ]
        },
        {
          type: "mcq_multi",
          title: "Questions 23-24",
          instruction: "Choose TWO letters, A-E.",
          stem: "In which TWO ways do both Jess and Tom decide to change their proposals?",
          options: [
            "A. by giving a rationale for their action plans",
            "B. by being less specific about the outcome",
            "C. by adding a video diary presentation",
            "D. by providing a timeline and a mind map",
            "E. by making their notes more evaluative"
          ],
          items: [
            { qNums: [23, 24], answer: ["B", "E"] } // Key: B, E (in either order)
          ]
        },
        {
          type: "matching",
          title: "Questions 25-30",
          instruction: "Which personal meaning do the students decide to give to each of the following pictures? Choose SIX answers from the box.",
          options: [
            "A. a childhood memory",
            "B. hope for the future",
            "C. fast movement",
            "D. a potential threat",
            "E. the power of colour",
            "F. the continuity of life",
            "G. protection of nature",
            "H. a confused attitude to nature"
          ],
          items: [
            { qNum: 25, text: "Falcon (Landseer)", answer: "D" },
            { qNum: 26, text: "Fish hawk (Audubon)", answer: "C" },
            { qNum: 27, text: "Kingfisher (van Gogh)", answer: "A" },
            { qNum: 28, text: "Portrait of William Wells", answer: "H" },
            { qNum: 29, text: "Vairumati (Gauguin)", answer: "F" },
            { qNum: 30, text: "Portrait of Giovanni de Medici", answer: "G" }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-40",
          instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">Stoicism</h3>
              <p>Stoicism is still relevant today because of its <span class="q-badge-inline">31</span><input class="gap-input" data-qnum="31"> appeal.</p>

              <h4 style="color:#002554;">Ancient Stoics</h4>
              <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Stoicism was founded over 2,000 years ago in Greece.</li>
                <li>The Stoics' ideas are surprisingly well known, despite not being intended for <span class="q-badge-inline">32</span><input class="gap-input" data-qnum="32">.</li>
              </ul>

              <h4 style="color:#002554;">Stoic principles</h4>
              <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Happiness could be achieved by leading a virtuous life.</li>
                <li>Controlling emotions was essential.</li>
                <li>Epictetus said that external events cannot be controlled but the <span class="q-badge-inline">33</span><input class="gap-input" data-qnum="33"> people make in response can be controlled.</li>
                <li>A Stoic is someone who has a different view on experiences which others would consider as <span class="q-badge-inline">34</span><input class="gap-input" data-qnum="34">.</li>
              </ul>

              <h4 style="color:#002554;">The influence of Stoicism</h4>
              <ul style="list-style-type: disc; margin-left: 20px;">
                <li>George Washington organised a <span class="q-badge-inline">35</span><input class="gap-input" data-qnum="35"> about Cato to motivate his men.</li>
                <li>The French artist Delacroix was a Stoic.</li>
                <li>Adam Smith's ideas on <span class="q-badge-inline">36</span><input class="gap-input" data-qnum="36"> were influenced by Stoicism.</li>
                <li>Some of today's political leaders are inspired by the Stoics.</li>
              </ul>
              
              <p><strong>Cognitive Behaviour Therapy (CBT)</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px;">
                 <li>the treatment for <span class="q-badge-inline">37</span><input class="gap-input" data-qnum="37"> is based on ideas from Stoicism</li>
                 <li>people learn to base their thinking on <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38">.</li>
              </ul>
              <ul style="list-style-type: disc; margin-left: 20px;">
                 <li>In business, people benefit from Stoicism by identifying obstacles as <span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39">.</li>
              </ul>

              <h4 style="color:#002554;">Relevance of Stoicism</h4>
              <ul style="list-style-type: disc; margin-left: 20px;">
                <li>It requires a lot of <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40"> but Stoicism can help people to lead a good life.</li>
                <li>It teaches people that having a strong character is more important than anything else.</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "practical" },
            { qNum: 32, answer: "publication" },
            { qNum: 33, answer: "choices" },
            { qNum: 34, answer: "negative" },
            { qNum: 35, answer: "play" },
            { qNum: 36, answer: "capitalism" },
            { qNum: 37, answer: "depression" },
            { qNum: 38, answer: "logic" },
            { qNum: 39, answer: "opportunity" },
            { qNum: 40, answer: ["practice", "practise"] }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 16 - 28 PDF) - Đáp án trang 122
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">Why we need to protect polar bears</h3>
            
            <p>Polar bears are being increasingly threatened by the effects of climate change, but their disappearance could have far-reaching consequences. They are uniquely adapted to the extreme conditions of the Arctic Circle, where temperatures can reach -40°C. One reason for this is that they have up to 11 centimetres of fat underneath their skin. Humans with comparative levels of adipose tissue would be considered obese and would be likely to suffer from diabetes and heart disease. Yet the polar bear experiences no such consequences.</p>

            <p>A 2014 study by Shi Ping Liu and colleagues sheds light on this mystery. They compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears. This allowed them to determine the genes that have allowed polar bears to survive in one of the toughest environments on Earth. Liu and his colleagues found the polar bears had a gene known as APOB, which reduces levels of low-density lipoproteins (LDLs) - a form of 'bad' cholesterol. In humans, mutations of this gene are associated with increased risk of heart disease. Polar bears may therefore be an important study model to understand heart disease in humans.</p>

            <p>The genome of the polar bear may also provide the solution for another condition, one that particularly affects our older generation: osteoporosis. This is a disease where bones show reduced density, usually caused by insufficient exercise, reduced calcium intake or food starvation. Bone tissue is constantly being remodelled, meaning that bone is added or removed, depending on nutrient availability and the stress that the bone is under. Female polar bears, however, undergo extreme conditions during every pregnancy. Once autumn comes around, these females will dig maternity dens in the snow and will remain there throughout the winter, both before and after the birth of their cubs. This process results in about six months of fasting, where the female bears have to keep themselves and their cubs alive, depleting their own calcium and calorie reserves. Despite this, their bones remain strong and dense.</p>

            <p>Physiologists Alanda Lennox and Allen Goodship found an explanation for this paradox in 2008. They discovered that pregnant bears were able to increase the density of their bones before they started to build their dens. In addition, six months later, when they finally emerged from the den with their cubs, there was no evidence of significant loss of bone density. Hibernating brown bears do not have this capacity and must therefore resort to major bone reformation in the following spring. If the mechanism of bone remodelling in polar bears can be understood, many bedridden humans, and even astronauts, could potentially benefit.</p>

            <p>The medical benefits of the polar bear for humanity certainly have their importance in our conservation efforts, but these should not be the only factors taken into consideration. We tend to want to protect animals we think are intelligent and possess emotions, such as elephants and primates. Bears, on the other hand, seem to be perceived as stupid and in many cases violent. And yet anecdotal evidence from the field challenges those assumptions, suggesting for example that polar bears have good problem-solving abilities. A male bear called GoGo in Tennoji Zoo, Osaka, has even been observed making use of a tool to manipulate his environment. The bear used a tree branch on multiple occasions to dislodge a piece of meat hung out of his reach. Problem-solving ability has also been witnessed in wild polar bears, although not as obviously as with GoGo. A calculated move by a male bear involved running and jumping onto barrels in an attempt to get to a photographer standing on a platform four metres high.</p>

            <p>In other studies, such as one by Alison Ames in 2008, polar bears showed deliberate and focussed manipulation. For example, Ames observed bears putting objects in piles and then knocking them over in what appeared to be a game. The study demonstrates that bears are capable of agile and thought-out behaviours. These examples suggest bears have greater creativity and problem-solving abilities than previously thought.</p>

            <p>As for emotions, while the evidence is once again anecdotal, many bears have been seen to hit out at ice and snow seemingly out of frustration when they have just missed out on a kill. Moreover, polar bears can form unusual relationships with other species, including playing with the dogs used to pull sleds in the Arctic. Remarkably, one hand-raised polar bear called Agee has formed a close relationship with her owner Mark Dumas to the point where they even swim together. This is even more astonishing since polar bears are known to actively hunt humans in the wild.</p>

            <p>If climate change were to lead to their extinction, this would mean not only the loss of potential breakthroughs in human medicine, but more importantly, the disappearance of an intelligent, majestic animal.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">The Step Pyramid of Djoser</h3>

            <p><strong>A</strong> The pyramids are the most famous monuments of ancient Egypt and still hold enormous interest for people in the present day. These grand, impressive tributes to the memory of the Egyptian kings have become linked with the country even though other cultures, such as the Chinese and Mayan, also built pyramids. The evolution of the pyramid form has been written and argued about for centuries. However, there is no question that, as far as Egypt is concerned, it began with one monument to one king designed by one brilliant architect: the Step Pyramid of Djoser at Saqqara.</p>

            <p><strong>B</strong> Djoser was the first king of the Third Dynasty of Egypt and the first to build in stone. Prior to Djoser's reign, tombs were rectangular monuments made of dried clay brick, which covered underground passages where the deceased person was buried. For reasons which remain unclear, Djoser's main official, whose name was Imhotep, conceived of building a taller, more impressive tomb for his king by stacking stone slabs on top of one another, progressively making them smaller, to form the shape now known as the Step Pyramid. Djoser is thought to have reigned for 19 years, but some historians and scholars attribute a much longer time for his rule, owing to the number and size of the monuments he built.</p>

            <p><strong>C</strong> The Step Pyramid has been thoroughly examined and investigated over the last century, and it is now known that the building process went through many different stages. Historian Marc Van de Mieroop comments on this, writing 'Much experimentation was involved, which is especially clear in the construction of the pyramid in the center of the complex. It had several plans... before it became the first Step Pyramid in history, piling six levels on top of one another... The weight of the enormous mass was a challenge for the builders, who placed the stones at an inward incline in order to prevent the monument breaking up.'</p>

            <p><strong>D</strong> When finally completed, the Step Pyramid rose 62 meters high and was the tallest structure of its time. The complex in which it was built was the size of a city in ancient Egypt and included a temple, courtyards, shrines, and living quarters for the priests. It covered a region of 16 hectares and was surrounded by a wall 10.5 meters high. The wall had 13 false doors cut into it with only one true entrance cut into the south-east corner; the entire wall was then ringed by a trench 750 meters long and 40 meters wide. The false doors and the trench were incorporated into the complex to discourage unwanted visitors. If someone wished to enter, he or she would have needed to know in advance how to find the location of the true opening in the wall. Djoser was so proud of his accomplishment that he broke the tradition of having only his own name on the monument and had Imhotep's name carved on it as well.</p>

            <p><strong>E</strong> The burial chamber of the tomb, where the king's body was laid to rest, was dug beneath the base of the pyramid, surrounded by a vast maze of long tunnels that had rooms off them to discourage robbers. One of the most mysterious discoveries found inside the pyramid was a large number of stone vessels. Over 40,000 of these vessels, of various forms and shapes, were discovered in storerooms off the pyramid's underground passages. They are inscribed with the names of rulers from the First and Second Dynasties of Egypt and made from different kinds of stone. There is no agreement among scholars and archaeologists on why the vessels were placed in the tomb of Djoser or what they were supposed to represent. The archaeologist Jean-Philippe Lauer, who excavated most of the pyramid and complex, believes they were originally stored and then given a 'proper burial' by Djoser in his pyramid to honor his predecessors. There are other historians, however, who claim the vessels were dumped into the shafts as yet another attempt to prevent grave robbers from getting to the king's burial chamber.</p>

            <p><strong>F</strong> Unfortunately, all of the precautions and intricate design of the underground network did not prevent ancient robbers from finding a way in. Djoser's grave goods, and even his body, were stolen at some point in the past and all archaeologists found were a small number of his valuables overlooked by the thieves. There was enough left throughout the pyramid and its complex, however, to astonish and amaze the archaeologists who excavated it.</p>

            <p><strong>G</strong> Egyptologist Miroslav Verner writes, 'Few monuments hold a place in human history as significant as that of the Step Pyramid in Saqqara ... It can be said without exaggeration that this pyramid complex constitutes a milestone in the evolution of monumental stone architecture in Egypt and in the world as a whole.' The Step Pyramid was a revolutionary advance in architecture and became the archetype which all the other great pyramid builders of Egypt would follow.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #002554; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <h3 style="text-align: center;">The future of work</h3>
            <p>According to a leading business consultancy, 3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation - or 'embodied artificial intelligence' (AI) - is one aspect of the disruptive effects of technology on the labour market. 'Disembodied AI', like the algorithms running in our smartphones, is another.</p>

            <p>Dr Stella Pachidi from Cambridge Judge Business School believes that some of the most fundamental changes are happening as a result of the 'algorithmication' of jobs that are dependent on data rather than on production - the so-called knowledge economy. Algorithms are capable of learning from data to undertake tasks that previously needed human judgement, such as reading legal contracts, analysing medical scans and gathering market intelligence.</p>

            <p>'In many cases, they can outperform humans,' says Pachidi. 'Organisations are attracted to using algorithms because they want to make choices based on what they consider is "perfect information", as well as to reduce costs and enhance productivity.'</p>

            <p>'But these enhancements are not without consequences,' says Pachidi. 'If routine cognitive tasks are taken over by AI, how do professions develop their future experts?' she asks. 'One way of learning about a job is "legitimate peripheral participation" - a novice stands next to experts and learns by observation. If this isn't happening, then you need to find new ways to learn.'</p>

            <p>Another issue is the extent to which the technology influences or even controls the workforce. For over two years, Pachidi monitored a telecommunications company. 'The way telecoms salespeople work is through personal and frequent contact with clients, using the benefit of experience to assess a situation and reach a decision. However, the company had started using a[n] ... algorithm that defined when account managers should contact certain customers about which kinds of campaigns and what to offer them.'</p>

            <p>The algorithm - usually built by external designers - often becomes the keeper of knowledge, she explains. In cases like this, Pachidi believes, a short-sighted view begins to creep into working practices whereby workers learn through the 'algorithm's eyes' and become dependent on its instructions. Alternative explorations - where experimentation and human instinct lead to progress and new ideas - are effectively discouraged.</p>

            <p>Pachidi and colleagues even observed people developing strategies to make the algorithm work to their own advantage. 'We are seeing cases where workers feed the algorithm with false data to reach their targets,' she reports.</p>

            <p>It's scenarios like these that many researchers are working to avoid. Their objective is to make AI technologies more trustworthy and transparent, so that organisations and individuals understand how AI decisions are made. In the meantime, says Pachidi, 'We need to make sure we fully understand the dilemmas that this new world raises regarding expertise, occupational boundaries and control.'</p>

            <p>Economist Professor Hamish Low believes that the future of work will involve major transitions across the whole life course for everyone: 'The traditional trajectory of full-time education followed by full-time work followed by a pensioned retirement is a thing of the past,' says Low. Instead, he envisages a multistage employment life: one where retraining happens across the life course, and where multiple jobs and no job happen by choice at different stages.</p>

            <p>On the subject of job losses, Low believes the predictions are founded on a fallacy: 'It assumes that the number of jobs is fixed. If in 30 years, half of 100 jobs are being carried out by robots, that doesn't mean we are left with just 50 jobs for humans. The number of jobs will increase: we would expect there to be 150 jobs.'</p>

            <p>Dr Ewan McGaughey, at Cambridge's Centre for Business Research and King's College London, agrees that 'apocalyptic' views about the future of work are misguided. 'It's the laws that restrict the supply of capital to the job market, not the advent of new technologies that causes unemployment.'</p>

            <p>His recently published research answers the question of whether automation, AI and robotics will mean a 'jobless future' by looking at the causes of unemployment. 'History is clear that change can mean redundancies. But social policies can tackle this through retraining and redeployment.'</p>

            <p>He adds: 'If there is going to be change to jobs as a result of AI and robotics then I'd like to see governments seizing the opportunity to improve policy to enforce good job security. We can "reprogramme" the law to prepare for a fairer future of work and leisure.'</p>

            <p>McGaughey's findings are a call to arms to leaders of organisations, governments and banks to pre-empt the coming changes with bold new policies that guarantee full employment, fair incomes and a thriving economic democracy.</p>

            <p>'The promises of these new technologies are astounding. They deliver humankind the capacity to live in a way that nobody could have once imagined,' he adds. 'Just as the industrial revolution brought people past subsistence agriculture, and the corporate revolution enabled mass production, a third revolution has been pronounced. But it will not only be one of technology. The next revolution will be social.'</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS (TFNG) ---
        {
          type: "tfng",
          title: "Questions 1-7",
          instruction: "Do the following statements agree with the information given in Reading Passage 1?",
          items: [
            { qNum: 1, text: "Polar bears suffer from various health problems due to the build-up of fat under their skin.", answer: "FALSE" },
            { qNum: 2, text: "The study done by Liu and his colleagues compared different groups of polar bears.", answer: "FALSE" },
            { qNum: 3, text: "Liu and colleagues were the first researchers to compare polar bears and brown bears genetically.", answer: "NOT GIVEN" },
            { qNum: 4, text: "Polar bears are able to control their levels of 'bad' cholesterol by genetic means.", answer: "TRUE" },
            { qNum: 5, text: "Female polar bears are able to survive for about six months without food.", answer: "TRUE" },
            { qNum: 6, text: "It was found that the bones of female polar bears were very weak when they came out of their dens in spring.", answer: "FALSE" },
            { qNum: 7, text: "The polar bear's mechanism for increasing bone density could also be used by people one day.", answer: "TRUE" }
          ]
        },
        // --- PASSAGE 1 QUESTIONS (Table) ---
        {
          type: "gap",
          title: "Questions 8-13",
          instruction: "Complete the table below. Choose ONE WORD ONLY from the passage for each answer.",
          htmlContent: `
            <div style="background:#fff; padding:15px; border:1px solid #ccc;">
                <h3 style="text-align: center; color: #002554;">Reasons why polar bears should be protected</h3>
                <p>People think of bears as unintelligent and <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8">.</p>
                <p>However, this may not be correct. For example:</p>
                <ul style="list-style-type: disc; margin-left: 20px;">
                    <li>In Tennoji Zoo, a bear has been seen using a branch as a <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9">. This allowed him to knock down some <span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10">.</li>
                    <li>A wild polar bear worked out a method of reaching a platform where a <span class="q-badge-inline">11</span><input class="gap-input" data-qnum="11"> was located.</li>
                    <li>Polar bears have displayed behaviour such as conscious manipulation of objects and activity similar to a <span class="q-badge-inline">12</span><input class="gap-input" data-qnum="12">.</li>
                </ul>
                <p>Bears may also display emotions. For example:</p>
                <ul style="list-style-type: disc; margin-left: 20px;">
                    <li>They may make movements suggesting <span class="q-badge-inline">13</span><input class="gap-input" data-qnum="13"> if disappointed when hunting.</li>
                    <li>They may form relationships with other species.</li>
                </ul>
            </div>
          `,
          items: [
            { qNum: 8, answer: "violent" },
            { qNum: 9, answer: "tool" },
            { qNum: 10, answer: "meat" },
            { qNum: 11, answer: "photographer" },
            { qNum: 12, answer: "game" },
            { qNum: 13, answer: "frustration" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS (Headings) ---
        {
          type: "matching",
          title: "Questions 14-20",
          instruction: "Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list of headings below.",
          options: [
            "i. The areas and artefacts within the pyramid itself",
            "ii. A difficult task for those involved",
            "iii. A king who saved his people",
            "iv. A single certainty among other less definite facts",
            "v. An overview of the external buildings and areas",
            "vi. A pyramid design that others copied",
            "vii. An idea for changing the design of burial structures",
            "viii. An incredible experience despite the few remains",
            "ix. The answers to some unexpected questions"
          ],
          items: [
            { qNum: 14, text: "Paragraph A", answer: "iv" },
            { qNum: 15, text: "Paragraph B", answer: "vii" },
            { qNum: 16, text: "Paragraph C", answer: "ii" },
            { qNum: 17, text: "Paragraph D", answer: "v" },
            { qNum: 18, text: "Paragraph E", answer: "i" },
            { qNum: 19, text: "Paragraph F", answer: "viii" },
            { qNum: 20, text: "Paragraph G", answer: "vi" }
          ]
        },
        // --- PASSAGE 2 QUESTIONS (Notes) ---
        {
          type: "gap",
          title: "Questions 21-24",
          instruction: "Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#002554; margin-top:0;">The Step Pyramid of Djoser</h3>
              
              <p>The complex that includes the Step Pyramid and its surroundings is considered to be as big as an Egyptian <span class="q-badge-inline">21</span><input class="gap-input" data-qnum="21"> of the past.</p>
              <p>The area outside the pyramid included accommodation that was occupied by <span class="q-badge-inline">22</span><input class="gap-input" data-qnum="22"> along with many other buildings and features.</p>
              <p>A wall ran around the outside of the complex and a number of false entrances were built into this. In addition, a long <span class="q-badge-inline">23</span><input class="gap-input" data-qnum="23"> encircled the wall.</p>
              <p>As a result, any visitors who had not been invited were cleverly prevented from entering the pyramid grounds unless they knew the <span class="q-badge-inline">24</span><input class="gap-input" data-qnum="24"> of the real entrance.</p>
            </div>
          `,
          items: [
            { qNum: 21, answer: "city" },
            { qNum: 22, answer: "priests" },
            { qNum: 23, answer: "trench" },
            { qNum: 24, answer: "location" }
          ]
        },
        // --- PASSAGE 2 QUESTIONS (MCQ Multi) ---
        {
          type: "mcq_multi",
          title: "Questions 25-26",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO of the following points does the writer make about King Djoser?",
          options: [
            "A. Initially he had to be persuaded to build in stone rather than clay.",
            "B. There is disagreement concerning the length of his reign.",
            "C. He failed to appreciate Imhotep's part in the design of the Step Pyramid.",
            "D. A few of his possessions were still in his tomb when archaeologists found it.",
            "E. He criticised the design and construction of other pyramids in Egypt."
          ],
          items: [
            { qNums: [25, 26], answer: ["B", "D"] } // Key: B, D
          ]
        },

        // --- PASSAGE 3 QUESTIONS (MCQ Single) ---
        {
          type: "mcq_single",
          title: "Questions 27-30",
          instruction: "Choose the correct letter, A, B, C or D.",
          items: [
            {
              qNum: 27,
              text: "The first paragraph tells us about",
              options: [
                "A. the kinds of jobs that will be most affected by the growth of AI.",
                "B. the extent to which AI will alter the nature of the work that people do.",
                "C. the proportion of the world's labour force who will have jobs in AI in the future.",
                "D. the difference between ways that embodied and disembodied AI will impact on workers."
              ],
              answer: "A" // Key A. NOTE: Answer key page 122 says 27 is B?
              // Let me re-read Para 1. "3-14%... need to switch... all workers will need to adapt as their occupations evolve".
              // This suggests extent of alteration.
              // Wait, answer key page 122: 27 B. My previous thought A was wrong.
              // Let's stick to the Key provided in PDF.
            },
            {
              qNum: 28,
              text: "According to the second paragraph, what is Stella Pachidi's view of the 'knowledge economy'?",
              options: [
                "A. It is having an influence on the number of jobs available.",
                "B. It is changing people's attitudes towards their occupations.",
                "C. It is the main reason why the production sector is declining.",
                "D. It is a key factor driving current developments in the workplace."
              ],
              answer: "D"
            },
            {
              qNum: 29,
              text: "What did Pachidi observe at the telecommunications company?",
              options: [
                "A. staff disagreeing with the recommendations of AI",
                "B. staff feeling resentful about the intrusion of AI in their work",
                "C. staff making sure that AI produces the results that they want",
                "D. staff allowing AI to carry out tasks they ought to do themselves"
              ],
              answer: "C"
            },
            {
              qNum: 30,
              text: "In his recently published research, Ewan McGaughey",
              options: [
                "A. challenges the idea that redundancy is a negative thing.",
                "B. shows the profound effect of mass unemployment on society.",
                "C. highlights some differences between past and future job losses.",
                "D. illustrates how changes in the job market can be successfully handled."
              ],
              answer: "D"
            }
          ]
        },
        // CORRECTING QUESTION 27 BASED ON KEY
        // Key 27: B
        // Updating item 27.
      ]
    }
  }
};

// FIXING QUESTION 27 ANSWER IN CODE:
cam16_test1.sections.reading.questions[5].items[0].answer = "B";

// --- CONTINUING PASSAGE 3 QUESTIONS ---
cam16_test1.sections.reading.questions.push(
    {
      type: "gap",
      title: "Questions 31-34",
      instruction: "Complete the summary using the list of words, A-G, below. Choose the correct letter, A-G, for each answer.",
      htmlContent: `
        <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
          <h4 style="text-align:center; color:#002554;">The 'algorithmication' of jobs</h4>
          <p>Stella Pachidi of Cambridge Judge Business School has been focusing on the 'algorithmication' of jobs which rely not on production but on <span class="q-badge-inline">31</span><select class="gap-select" data-qnum="31"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option></select>.</p>
          <p>While monitoring a telecommunications company, Pachidi observed a growing <span class="q-badge-inline">32</span><select class="gap-select" data-qnum="32"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option></select> on the recommendations made by AI, as workers begin to learn through the 'algorithm's eyes'.</p>
          <p>Meanwhile, staff are deterred from experimenting and using their own <span class="q-badge-inline">33</span><select class="gap-select" data-qnum="33"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option></select> and are therefore prevented from achieving innovation.</p>
          <p>To avoid the kind of situations which Pachidi observed, researchers are trying to make AI's decision-making process easier to comprehend, and to increase users' <span class="q-badge-inline">34</span><select class="gap-select" data-qnum="34"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option></select> with regard to the technology.</p>
          
          <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; background: #fff; font-size: 0.9em;">
             <strong>Options:</strong><br/>
             A. pressure &nbsp;&nbsp; B. satisfaction &nbsp;&nbsp; C. intuition<br/>
             D. promotion &nbsp;&nbsp; E. reliance &nbsp;&nbsp; F. confidence<br/>
             G. information
          </div>
        </div>
      `,
      items: [
        { qNum: 31, answer: "G" }, // information
        { qNum: 32, answer: "E" }, // reliance
        { qNum: 33, answer: "C" }, // intuition
        { qNum: 34, answer: "F" }  // confidence
      ]
    },
    {
      type: "matching",
      title: "Questions 35-40",
      instruction: "Match each statement with the correct person, A, B or C.",
      options: [
        "A. Stella Pachidi",
        "B. Hamish Low",
        "C. Ewan McGaughey"
      ],
      items: [
        { qNum: 35, text: "Greater levels of automation will not result in lower employment.", answer: "B" }, // Low: "number of jobs will increase"
        { qNum: 36, text: "There are several reasons why AI is appealing to businesses.", answer: "A" }, // Pachidi: "reduce costs and enhance productivity"
        { qNum: 37, text: "AI's potential to transform people's lives has parallels with major cultural shifts which occurred in previous eras.", answer: "C" }, // McGaughey: "industrial revolution... corporate revolution"
        { qNum: 38, text: "It is important to be aware of the range of problems that AI causes.", answer: "A" }, // Pachidi: "understand the dilemmas"
        { qNum: 39, text: "People are going to follow a less conventional career path than in the past.", answer: "B" }, // Low: "multistage employment life"
        { qNum: 40, text: "Authorities should take measures to ensure that there will be adequately paid work for everyone.", answer: "C" } // McGaughey: "governments seizing the opportunity... guarantee full employment"
      ]
    }
);


cam16_test1.sections.writing = {
  task1: {
    title: "WRITING TASK 1",
    image: "https://i.postimg.cc/jdbdG6Bn/Screenshot-2026-02-12-191718.png", 
    prompt: `
      The charts below show the changes in ownership of electrical appliances and amount of time spent doing housework in households in one country between 1920 and 2019.
      
      Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
      
      Write at least 150 words.
    `
  },
  task2: {
    title: "WRITING TASK 2",
    prompt: `
      In some countries, more and more people are becoming interested in finding out about the history of the house or building they live in.
      
      What are the reasons for this?
      
      How can people research this?
      
      Give reasons for your answer and include any relevant examples from your own knowledge or experience.
      
      Write at least 250 words.
    `
  }
};