// src/data/cam18_test4.js

export const cam18_test4 = {
  id: "m12",
  category: "full",
  testName: "MOCK TEST 12",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 78 - 83 PDF) - Đáp án trang 125
    // ==========================================================================
    listening: {
      audioSrc: "https://dl.dropboxusercontent.com/scl/fi/kff5vy78979m0sgzfvwk5/mt12.mp3?rlkey=zxatqzza657ii6xg9jkypyfn3", // Bạn cần đảm bảo có file này trong thư mục public
      timeLimit: 1756,
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 12 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-10",
          instruction: "Complete the notes below. Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
                <h3 style="text-align:center; color:#2B6830; margin-top:0;">Job details from employment agency</h3>
                
                <div style="margin-bottom: 15px;">
                    <strong>Role:</strong> <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"> (I believe you’ve done that sort of work before?)
                </div>
                <div style="margin-bottom: 15px;">
                    <strong>Location:</strong> Fordham <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2"> Centre
                </div>
                <div style="margin-bottom: 15px;">
                    <strong>Address:</strong> <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"> Road, Fordham
                </div>

                <h4 style="color:#2B6830; margin-bottom: 10px;">Work involves:</h4>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>dealing with enquiries</li>
                    <li>making <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"> and reorganising them</li>
                    <li>maintaining the internal <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"></li>
                    <li>general administration</li>
                </ul>

                <h4 style="color:#2B6830; margin-bottom: 10px;">Requirements:</h4>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li><span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"> (essential)</li>
                    <li>a calm and <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"> manner</li>
                    <li>good IT skills</li>
                </ul>

                <h4 style="color:#2B6830; margin-bottom: 10px;">Other information:</h4>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>a <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8"> job - further opportunities may be available</li>
                    <li>hours: 7.45 a.m. to <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9"> p.m. Monday to Friday</li>
                    <li><span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10"> is available onsite</li>
                </ul>
            </div>
          `,
          items: [
            { qNum: 1, answer: "receptionist" },
            { qNum: 2, answer: "Medical" },
            { qNum: 3, answer: "Chastons" },
            { qNum: 4, answer: "appointments" },
            { qNum: 5, answer: "database" },
            { qNum: 6, answer: "experience" },
            { qNum: 7, answer: "confident" },
            { qNum: 8, answer: "temporary" },
            { qNum: 9, answer: "1.15" },
            { qNum: 10, answer: "parking" }
          ]
        },

        // --- PART 2 ---
        {
          type: "mcq_single",
          title: "Part 2: Questions 11-14",
          instruction: "Choose the correct letter, <strong>A, B or C</strong>.",
          items: [
            {
              qNum: 11,
              text: "The museum building was originally",
              options: ["A. a factory.", "B. a private home.", "C. a hall of residence."],
              answer: "B"
            },
            {
              qNum: 12,
              text: "The university uses part of the museum building as",
              options: ["A. teaching rooms.", "B. a research library.", "C. administration offices."],
              answer: "A"
            },
            {
              qNum: 13,
              text: "What does the guide say about the entrance fee?",
              options: ["A. Visitors decide whether or not they wish to pay.", "B. Only children and students receive a discount.", "C. The museum charges extra for special exhibitions."],
              answer: "A"
            },
            {
              qNum: 14,
              text: "What are visitors advised to leave in the cloakroom?",
              options: ["A. cameras", "B. coats", "C. bags"],
              answer: "C"
            }
          ]
        },
        {
          type: "matching",
          title: "Questions 15-20",
          instruction: "What information does the speaker give about each of the following areas of the museum? Choose <strong>SIX</strong> answers from the box.",
          options: [
            "A. Parents must supervise their children.",
            "B. There are new things to see.",
            "C. It is closed today.",
            "D. This is only for school groups.",
            "E. There is a quiz for visitors.",
            "F. It features something created by students.",
            "G. An expert is here today.",
            "H. There is a one-way system."
          ],
          items: [
            { qNum: 15, text: "Four Seasons", answer: "F" },
            { qNum: 16, text: "Farmhouse Kitchen", answer: "G" },
            { qNum: 17, text: "A Year on the Farm", answer: "E" },
            { qNum: 18, text: "Wagon Walk", answer: "A" },
            { qNum: 19, text: "Bees are Magic", answer: "C" },
            { qNum: 20, text: "The Pond", answer: "B" }
          ]
        },

        // --- PART 3 ---
        {
          type: "mcq_multi",
          title: "Part 3: Questions 21-22",
          instruction: "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          stem: "Which TWO educational skills were shown in the video of children doing origami?",
          options: [
            "A. solving problems",
            "B. following instructions",
            "C. working cooperatively",
            "D. learning through play",
            "E. developing hand-eye coordination"
          ],
          items: [
            { qNums: [21, 22], answer: ["B", "D"] }
          ]
        },
        {
          type: "matching",
          title: "Questions 23-27",
          instruction: "Which comment do the students make about each of the following children in the video? Choose <strong>FIVE</strong> answers from the box.",
          options: [
            "A. demonstrated independence",
            "B. asked for teacher support",
            "C. developed a competitive attitude",
            "D. seemed to find the activity calming",
            "E. seemed pleased with the results",
            "F. seemed confused",
            "G. seemed to find the activity easy"
          ],
          items: [
            { qNum: 23, text: "Sid", answer: "D" },
            { qNum: 24, text: "Jack", answer: "A" },
            { qNum: 25, text: "Naomi", answer: "C" },
            { qNum: 26, text: "Anya", answer: "G" },
            { qNum: 27, text: "Zara", answer: "F" }
          ]
        },
        {
          type: "mcq_single",
          title: "Questions 28-30",
          instruction: "Choose the correct letter, <strong>A, B or C</strong>.",
          items: [
            {
              qNum: 28,
              text: "Before starting an origami activity in class, the students think it is important for the teacher to",
              options: ["A. make models that demonstrate the different stages.", "B. check children understand the terminology involved.", "C. tell children not to worry if they find the activity difficult."],
              answer: "A"
            },
            {
              qNum: 29,
              text: "The students agree that some teachers might be unwilling to use origami in class because",
              options: ["A. they may not think that crafts are important.", "B. they may not have the necessary skills.", "C. they may worry that it will take up too much time."],
              answer: "B"
            },
            {
              qNum: 30,
              text: "Why do the students decide to use origami in their maths teaching practice?",
              options: ["A. to correct a particular misunderstanding", "B. to set a challenge", "C. to introduce a new concept"],
              answer: "C"
            }
          ]
        },

        // --- PART 4 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-40",
          instruction: "Complete the notes below. Write <strong>ONE WORD ONLY</strong> for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">Victor Hugo</h3>
              
              <p><strong>His novel, Les Misérables</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>It has been adapted for theatre and cinema.</li>
                <li>We know more about its overall <span class="q-badge-inline">31</span><input class="gap-input" data-qnum="31"> than about its author.</li>
              </ul>

              <p><strong>His early career</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>In Paris, his career was successful and he led the Romantic movement.</li>
                <li>He spoke publicly about social issues, such as <span class="q-badge-inline">32</span><input class="gap-input" data-qnum="32"> and education.</li>
                <li>Napoleon III disliked his views and exiled him.</li>
              </ul>

              <p><strong>His exile from France</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>Victor Hugo had to live elsewhere in <span class="q-badge-inline">33</span><input class="gap-input" data-qnum="33">.</li>
                <li>He used his income from the sale of some <span class="q-badge-inline">34</span><input class="gap-input" data-qnum="34"> he had written to buy a house on Guernsey.</li>
              </ul>

              <p><strong>His house on Guernsey</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>The ground floor contains portraits, <span class="q-badge-inline">35</span><input class="gap-input" data-qnum="35"> and tapestries that he valued.</li>
                <li>He bought cheap <span class="q-badge-inline">36</span><input class="gap-input" data-qnum="36"> made of wood and turned this into beautiful wall carvings.</li>
                <li>The first floor consists of furnished areas with wallpaper and <span class="q-badge-inline">37</span><input class="gap-input" data-qnum="37"> that have a Chinese design.</li>
                <li>The library still contains many of his favourite books.</li>
                <li>He wrote in a room at the top of the house that had a view of the <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38">.</li>
                <li>He entertained other writers as well as poor <span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39"> in his house.</li>
                <li>Victor Hugo's <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40"> gave ownership of the house to the city of Paris in 1927.</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "plot" },
            { qNum: 32, answer: "poverty" },
            { qNum: 33, answer: "Europe" },
            { qNum: 34, answer: "poetry" },
            { qNum: 35, answer: "drawings" },
            { qNum: 36, answer: "furniture" },
            { qNum: 37, answer: "lamps" },
            { qNum: 38, answer: ["harbour", "harbor"] },
            { qNum: 39, answer: "children" },
            { qNum: 40, answer: "relatives" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 84 - 95 PDF) - Đáp án trang 126
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">Green roofs</h3>
            
            <p><strong>A.</strong> Concrete is the second most used substance in the global economy, after water - and one of the world’s biggest single sources of greenhouse gas emissions. The chemical process by which cement, the key ingredient of concrete, is created results in large quantities of carbon dioxide. The UN estimates that there will be 9.8 billion people living on the planet by mid-century. They will need somewhere to live. If concrete is the only answer to the construction of new cities, then carbon emissions will soar, aggravating global warming. And so scientists have started innovating with other materials, in a scramble for alternatives to a universal commodity that has underpinned our modern life for many years.</p>
            <p><strong>B.</strong> The problem with replacing concrete is that it is so very good at what it does. Chris Cheeseman, an engineering professor at Imperial College London, says the key thing to consider is the extent to which concrete is used around the world, and is likely to continue to be used. 'Concrete is not a high-carbon product. Cement is high carbon, but concrete is not. But it is the scale on which it is used that makes it high carbon. The sheer scale of manufacture is so huge, that is the issue.'</p>
            <p><strong>C.</strong> Not only are the ingredients of concrete relatively cheap and found in abundance in most places around the globe, the stuff itself has marvellous properties: Portland cement, the vital component of concrete, is mouldable and pourable, but quickly sets hard. Cheeseman also notes another advantage: concrete and steel have similar thermal expansion properties, so steel can be used to reinforce concrete, making it far stronger and more flexible as a building material than it could be on its own. According to Cheeseman, all these factors together make concrete hard to beat. 'Concrete is amazing stuff. Making anything with similar properties is going to be very difficult.'</p>
            <p><strong>D.</strong> A possible alternative to concrete is wood. Making buildings from wood may seem like a rather medieval idea, but climate change is driving architects to turn to treated timber as a possible resource. Recent years have seen the emergence of tall buildings constructed almost entirely from timber. Vancouver, Vienna and Brumunddal in Norway are all home to constructed tall, wooden buildings.</p>
            <p><strong>E.</strong> Using wood to construct buildings, however, is not straightforward. Wood expands as it absorbs moisture from the air and is susceptible to pests, not to mention fire. But treating wood and combining it with other materials can improve its properties. Cross-laminated timber is engineered wood. An adhesive is used to stick layers of solid-sawn timber together, crosswise, to form building blocks. This material is light but has the strength of concrete and steel. Construction experts say that wooden buildings can be constructed at a greater speed than ones of concrete and steel and the process, it seems, is quieter.</p>
            <p><strong>F.</strong> Stora Enso is Europe’s biggest supplier of cross-laminated timber, and its vice-president Markus Mannström reports that the company is seeing increasing demand globally for building in wood, with climate change concerns the key driver. Finland, with its large forests, where Stora Enso is based, has been leading the way, but the company is seeing a rise in demand for its timber products across the world, including in Asia. Of course, using timber in a building also locks away the carbon that it absorbed as it grew. But even treated wood has its limitations and only when a wider range of construction projects has been proven in practice will it be possible to see wood as a real alternative to concrete in constructing tall buildings.</p>
            <p><strong>G.</strong> Fly ash and slag from iron ore are possible alternatives to cement in a concrete mix. Fly ash, a byproduct of coal-burning power plants, can be incorporated into concrete mixes to make up as much as 15 to 30% of the cement, without harming the strength or durability of the resulting mix. Iron-ore slag, a byproduct of the iron-ore smelting process, can be used in a similar way. Their incorporation into concrete mixes has the potential to reduce greenhouse gas emissions.</p>
            <p><strong>H.</strong> But Anna Surgenor, of the UK’s Green Building Council, notes that although these waste products can save carbon in the concrete mix, their use is not always straightforward. 'It’s possible to replace the cement content in concrete with waste products to lower the overall carbon impact. But there are several calculations that need to be considered across the entire life cycle of the building - these include factoring in where these materials are being shipped from. If they are transported over long distances, using fossil fuels, the use of alternative materials might not make sense from an overall carbon reduction perspective.'</p>
            <p>While these technologies are all promising ideas, they are either unproven or based on materials that are not abundant. In their overview of innovation in the concrete industry, Felix Preston and Johanna Lehne of the UK’s Royal Institute of International Affairs reached the conclusion that, 'Some novel cements have been discussed for more than a decade within the research community, without breaking through. At present, these alternatives are rarely as cost-effective as conventional cement, and they face raw-material shortages and resistance from customers.'</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">The growth mindset</h3>
            <p>Over the past century, a powerful idea has taken root in the educational landscape. The concept of intelligence as something innate has been supplanted by the idea that intelligence is not fixed, and that, with the right training, we can be the authors of our own cognitive capabilities. Psychologist Alfred Binet, the developer of the first intelligence tests, was one of many 19th-century scientists who held that earlier view and sought to quantify cognitive ability. Then, in the early 20th century, progressive thinkers revolted against the notion that inherent ability is destiny. Instead, educators such as John Dewey argued that every child’s intelligence could be developed, given the right environment.</p>
            <p>'Growth mindset theory' is a relatively new and extremely popular version of this idea. In many schools today you will see hallways covered in motivational posters and hear speeches on the mindset of great sporting heroes who simply believed their way to the top. A major focus of the growth mindset in schools is coaxing students away from seeing failure as an indication of their ability, and towards seeing it as a chance to improve that ability. As educationalist Jeff Howard noted several decades ago: 'Smart is not something that you just are, smart is something that you can get.'</p>
            <p>The idea of the growth mindset is based on the work of psychologist Carol Dweck in California in the 1990s. In one key experiment, Dweck divided a group of 10- to 12-year-olds into two groups. All were told that they had achieved a high score on a test but the first group were praised for their intelligence in achieving this, while the others were praised for their effort. The second group - those who had been instilled with a 'growth mindset' - were subsequently far more likely to put effort into future tasks. Meanwhile, the former took on only those tasks that would not risk their sense of worth. This group had inferred that success or failure is due to innate ability, and this 'fixed mindset' had led them to fear of failure and lack of effort. Praising ability actually made the students perform worse, while praising effort emphasised that change was possible.</p>
            <p>One of the greatest impediments to successfully implementing a growth mindset, however, is the education system itself: in many parts of the world, the school climate is obsessed with performance in the form of constant testing, analysing and ranking of students - a key characteristic of the fixed mindset. Nor is it unusual for schools to create a certain cognitive dissonance, when they applaud the benefits of a growth mindset but then hand out fixed target grades in lessons based on performance.</p>
            <p>Aside from the implementation problem, the original growth mindset research has also received harsh criticism. The statistician Andrew Gelman claims that 'their research designs have enough degrees of freedom that they could take their data to support just about any theory at all'. Professor of Psychology Timothy Bates, who has been trying to replicate Dweck’s work, is finding that the results are repeatedly null. He notes that: 'People with a growth mindset don’t cope any better with failure... Kids with the growth mindset aren’t getting better grades, either before or after our intervention study.'</p>
            <p>Much of this criticism is not lost on Dweck, and she deserves great credit for responding to it and adapting her work accordingly. In fact, she argues that her work has been misunderstood and misapplied in a range of ways. She has also expressed concerns that her theories are being misappropriated in schools by being conflated with the self-esteem movement: 'For me the growth mindset is a tool for learning and improvement. It’s not just a vehicle for making children feel good.'</p>
            <p>But there is another factor at work here. The failure to translate the growth mindset into the classroom might reflect a misunderstanding of the nature of teaching and learning itself. Growth mindset supporters David Yeager and Gregory Walton claim that interventions should be delivered in a subtle way to maximise their effectiveness. They say that if adolescents perceive a teacher’s intervention as conveying that they are in need of help, this could undo its intended effects.</p>
            <p>A lot of what drives students is their innate beliefs and how they perceive themselves. There is a strong correlation between self-perception and achievement, but there is evidence to suggest that the actual effect of achievement on self-perception is stronger than the other way round. To stand up in a classroom and successfully deliver a good speech is a genuine achievement, and that is likely to be more powerfully motivating than vague notions of 'motivation' itself.</p>
            <p>Recent evidence would suggest that growth mindset interventions are not the elixir of student learning that its proponents claim it to be. The growth mindset appears to be a viable construct in the lab, which, when administered in the classroom via targeted interventions, doesn’t seem to work. It is hard to dispute that having faith in the capacity to change is a good attribute for students. Paradoxically, however, that aspiration is not well served by direct interventions that try to instil it.</p>
            <p>Motivational posters and talks are often a waste of time, and might well give students a deluded notion of what success actually means. Teaching concrete skills such as how to write an effective introduction to an essay then praising students’ effort in getting there is probably a far better way of improving confidence than telling them how unique they are, or indeed how capable they are of changing their own brains. Perhaps growth mindset works best as a philosophy and not an intervention.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <h3 style="text-align: center;">Alfred Wegener: science, exploration and the theory of continental drift</h3>
            <p><strong>Introduction by Mott T Greene</strong></p>
            <p>This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as 'continental drift'. Wegener proposed this theory in 1912 and developed it extensively for nearly 20 years. His book on the subject, <em>The Origin of Continents and Oceans</em>, went through four editions and was the focus of an international controversy in his lifetime and for some years after his death.</p>
            <p>Wegener’s basic idea was that many mysteries about the Earth’s history could be solved if one supposed that the continents moved laterally, rather than supposing that they remained fixed in place. Wegener showed in great detail how such continental movements were plausible and how they worked, using evidence from a large number of sciences including geology, geophysics, paleontology, and climatology. Wegener’s idea that the continents move - is at the heart of the theory that guides Earth sciences today: namely plate tectonics. Plate tectonics is in many respects quite different from Wegener’s proposal, in the same way that modern evolutionary theory is very different from the ideas Charles Darwin proposed in the 1850s about biological evolution. Yet plate tectonics is a descendant of Alfred Wegener’s theory of continental drift, in quite the same way that modern evolutionary theory is a descendant of Darwin’s theory of natural selection.</p>
            <p>When I started writing about Wegener’s life and work, one of the most intriguing things about him for me was that, although he came up with a theory on continental drift, he was not a geologist. He trained as an astronomer and pursued a career in atmospheric physics. When he proposed the theory of continental displacements in 1912, he was a lecturer in physics and astronomy at the University of Marburg, in southern Germany. However, he was not an 'unknown'. In 1906 he had set a world record (with his brother Kurt) for time aloft in a hot-air balloon: 52 hours. Between 1906 and 1908 he had taken part in a highly publicized and extremely dangerous expedition to the coast of northeast Greenland. He had also made a name for himself amongst a small circle of meteorologists and atmospheric physicists in Germany as the author of a textbook, <em>Thermodynamics of the Atmosphere</em> (1911), and of a number of interesting scientific papers.</p>
            <p>As important as Wegener’s work on continental drift has turned out to be, it was largely a sideline to his interest in atmospheric physics, geophysics, and paleoclimatology, and thus I have been at great pains to put Wegener’s work on continental drift in the larger context of his other scientific work, and in the even larger context of atmospheric sciences in his lifetime.</p>
            <p>This is a 'continental drift book' only to the extent that Wegener was interested in that topic and later became famous for it. My treatment of his other scientific work is no less detailed, though I certainly have devoted more attention to the reception of his ideas on continental displacement, as they were much more controversial than his other work.</p>
            <p>Readers interested in the specific detail of Wegener’s career will see that he often stopped pursuing a given line of investigation (sometimes for years on end), only to pick it up later. I have tried to provide guideposts to his rapidly shifting interests by characterizing different phases of his life as careers in different sciences, which is reflected in the titles of the chapters. Thus, the index should be a sufficient guide for those interested in a particular aspect of Wegener’s life but perhaps not all of it. My own feeling, however, is that the parts do not make as much sense on their own as do all of his activities taken together. In this respect I urge readers to try to experience Wegener’s life as he lived it, with all the interruptions, changes of mind, and renewed efforts this entailed.</p>
            <p>Wegener left behind a few published works but, as was standard practice, these reported the results of his work - not the journey he took to reach that point. Only a few hundred of the many thousands of letters he wrote and received in his lifetime have survived and he didn’t keep notebooks or diaries that recorded his life and activities. He was not active (with a few exceptions) in scientific societies, and did not seek to find influence or advance his ideas through professional contacts and politics, spending most of his time at home in his study reading and writing, or in the field collecting observations.</p>
            <p>Some famous scientists, such as Newton, Darwin, and Einstein, left mountains of written material behind, hundreds of notebooks and letters numbering in the tens of thousands. Others, like Michael Faraday, left extensive journals of their thoughts and speculations, parallel to their scientific notebooks. The more such material a scientist leaves behind, the better chance a biographer has of forming an accurate picture of how a scientist’s ideas took shape and evolved.</p>
            <p>I am firmly of the opinion that most of us, Wegener included, are not in any real sense the authors of our own lives. We plan, think, and act, often with apparent freedom, but most of the time our lives 'happen to us', and we only retrospectively turn this happenstance into a coherent narrative of fulfilled intentions. This book, therefore, is a story both of the life and scientific work that Alfred Wegener planned and intended and of the life and scientific work that actually 'happened to him'. These are, as I think you will soon see, not always the same thing.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          type: "matching_info",
          title: "Reading Passage 1: Questions 1-4",
          instruction: "Reading Passage 1 has eight sections, <strong>A-H</strong>. Which section contains the following information?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          items: [
            { qNum: 1, text: "an explanation of the industrial processes that create potential raw materials for concrete", answer: "D" },
            { qNum: 2, text: "a reference to the various locations where high-rise wooden buildings can be found", answer: "C" },
            { qNum: 3, text: "an indication of how widely available the raw materials of concrete are", answer: "E" },
            { qNum: 4, text: "the belief that more high-rise wooden buildings are needed before wood can be regarded as a viable construction material", answer: "B" }
          ]
        },
        {
          type: "gap",
          title: "Questions 5-8",
          instruction: "Complete the summary below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h4 style="text-align:center; color:#2B6830;">Making buildings with wood</h4>
              <p>Wood is a traditional building material, but current environmental concerns are encouraging <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"> to use wood in modern construction projects. Using wood, however, has its challenges. For example, as <span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"> in the atmosphere enters wood, it increases in size. In addition, wood is prone to pests and the risk of fire is greater.</p>
              <p>However, wood can be turned into a better construction material if it is treated and combined with other materials. In one process, <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"> of solid wood are glued together to create building blocks. These blocks are lighter than concrete and steel but equal them in strength. Experts say that wooden buildings are an improvement on those made of concrete and steel in terms of the <span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8"> with which they can be constructed and how much noise is generated by the process.</p>
            </div>
          `,
          items: [
            { qNum: 5, answer: "architects" },
            { qNum: 6, answer: "moisture" },
            { qNum: 7, answer: "layers" },
            { qNum: 8, answer: "speed" }
          ]
        },
        {
          type: "matching",
          title: "Questions 9-13",
          instruction: "Match each statement with the correct person, <strong>A, B, C or D</strong>.",
          options: [
            "A. Chris Cheeseman",
            "B. Markus Mannström",
            "C. Anna Surgenor",
            "D. Felix Preston and Johanna Lehne"
          ],
          items: [
            { qNum: 9, text: "The environmental advantage of cement alternatives may not be as great as initially assumed.", answer: "C" },
            { qNum: 10, text: "It would be hard to create a construction alternative to concrete that offers so many comparable benefits.", answer: "A" },
            { qNum: 11, text: "Worries about the environment have led to increased interest in wood as a construction material.", answer: "B" },
            { qNum: 12, text: "Expense has been a factor in the negative response to the development of new cements.", answer: "D" },
            { qNum: 13, text: "The environmental damage caused by concrete is due to it being produced in large quantities.", answer: "A" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          type: "mcq_single",
          title: "Reading Passage 2: Questions 14-16",
          instruction: "Choose the correct letter, <strong>A, B, C or D</strong>.",
          items: [
            {
              qNum: 14,
              text: "What can we learn from the first paragraph?",
              options: [
                "A. where the notion of innate intelligence first began",
                "B. when ideas about the nature of intelligence began to shift",
                "C. how scientists have responded to changing views of intelligence",
                "D. why thinkers turned away from the idea of intelligence being fixed"
              ],
              answer: "B"
            },
            {
              qNum: 15,
              text: "The second paragraph describes how schools encourage students to",
              options: [
                "A. identify their personal ambitions.",
                "B. help each other to realise their goals.",
                "C. have confidence in their potential to succeed.",
                "D. concentrate on where their particular strengths lie."
              ],
              answer: "C"
            },
            {
              qNum: 16,
              text: "In the third paragraph, the writer suggests that students with a fixed mindset",
              options: [
                "A. tend to be less competitive.",
                "B. generally have a low sense of self-esteem.",
                "C. will only work hard if they are given constant encouragement.",
                "D. are afraid to push themselves beyond what they see as their limitations."
              ],
              answer: "D"
            }
          ]
        },
        {
          type: "matching",
          title: "Questions 17-22",
          instruction: "Match each statement with the correct person or people, <strong>A-E</strong>.",
          options: [
            "A. Alfred Binet",
            "B. Carol Dweck",
            "C. Andrew Gelman",
            "D. Timothy Bates",
            "E. David Yeager and Gregory Walton"
          ],
          items: [
            { qNum: 17, text: "The methodology behind the growth mindset studies was not strict enough.", answer: "C" },
            { qNum: 18, text: "The idea of the growth mindset has been incorrectly interpreted.", answer: "B" },
            { qNum: 19, text: "Intellectual ability is an unchangeable feature of each individual.", answer: "A" },
            { qNum: 20, text: "The growth mindset should be promoted without students being aware of it.", answer: "E" },
            { qNum: 21, text: "The growth mindset is not simply about boosting students' morale.", answer: "B" },
            { qNum: 22, text: "Research shows that the growth mindset has no effect on academic achievement.", answer: "D" }
          ]
        },
        {
          type: "ynng",
          title: "Questions 23-26",
          instruction: "Do the following statements agree with the claims of the writer in Reading Passage 2?",
          items: [
            { qNum: 23, text: "Dweck has handled criticisms of her work in an admirable way.", answer: "YES" },
            { qNum: 24, text: "Students' self-perception is a more effective driver of self-confidence than actual achievement is.", answer: "NO" },
            { qNum: 25, text: "Recent evidence about growth mindset interventions has attracted unfair coverage in the media.", answer: "NOT GIVEN" },
            { qNum: 26, text: "Deliberate attempts to encourage students to strive for high achievement may have a negative effect.", answer: "YES" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          type: "ynng",
          title: "Reading Passage 3: Questions 27-30",
          instruction: "Do the following statements agree with the claims of the writer in Reading Passage 3?",
          items: [
            { qNum: 27, text: "Wegener’s ideas about continental drift were widely disputed while he was alive.", answer: "YES" },
            { qNum: 28, text: "The idea that the continents remained fixed in place was defended in a number of respected scientific publications.", answer: "NOT GIVEN" },
            { qNum: 29, text: "Wegener relied on a limited range of scientific fields to support his theory of continental drift.", answer: "NO" },
            { qNum: 30, text: "The similarities between Wegener’s theory of continental drift and modern-day plate tectonics are enormous.", answer: "NO" }
          ]
        },
        {
          type: "gap", // Sử dụng gap với dropdown (select)
          title: "Questions 31-36",
          instruction: "Complete the summary using the list of phrases, <strong>A-J</strong>, below. Choose the correct letter, <strong>A-J</strong>, for each answer.",
          htmlContent: `
            <div style="font-family: 'Segoe UI', sans-serif; line-height: 1.8; background:#f9f9f9; padding:20px; border-radius:8px;">
              <h4 style="text-align:center; color:#2B6830;">Wegener’s life and work</h4>
              <p>One of the remarkable things about Wegener from a <span class="q-badge-inline">31</span><select class="gap-select" data-qnum="31"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> is that although he proposed a theory of continental drift, he was not a geologist. His <span class="q-badge-inline">32</span><select class="gap-select" data-qnum="32"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> were limited to atmospheric physics. However, at the time he proposed his theory of continental drift in 1912, he was already a person of <span class="q-badge-inline">33</span><select class="gap-select" data-qnum="33"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select>. Six years previously, there had been his <span class="q-badge-inline">34</span><select class="gap-select" data-qnum="34"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> of 52 hours in a hot-air balloon, followed by his well-publicised but <span class="q-badge-inline">35</span><select class="gap-select" data-qnum="35"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> of Greenland’s coast. With the publication of his textbook on thermodynamics, he had also come to the attention of a <span class="q-badge-inline">36</span><select class="gap-select" data-qnum="36"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option></select> of German scientists.</p>
              
              <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; background: #fff; font-size: 0.9em;">
                 <strong>Options:</strong><br/>
                 A. modest fame &nbsp;&nbsp; B. vast range &nbsp;&nbsp; C. record-breaking achievement<br/>
                 D. select group &nbsp;&nbsp; E. research methods &nbsp;&nbsp; F. professional interests<br/>
                 G. hazardous exploration &nbsp;&nbsp; H. scientific debate &nbsp;&nbsp; I. biographer’s perspective &nbsp;&nbsp; J. narrow investigation
              </div>
            </div>
          `,
          items: [
            { qNum: 31, answer: "I" },
            { qNum: 32, answer: "F" },
            { qNum: 33, answer: "A" },
            { qNum: 34, answer: "C" },
            { qNum: 35, answer: "G" },
            { qNum: 36, answer: "D" }
          ]
        },
        {
          type: "mcq_single",
          title: "Questions 37-40",
          instruction: "Choose the correct letter, <strong>A, B, C or D</strong>.",
          items: [
            {
              qNum: 37,
              text: "What is Mott T Greene doing in the fifth paragraph?",
              options: [
                "A. describing what motivated him to write the book",
                "B. explaining why it is desirable to read the whole book",
                "C. suggesting why Wegener pursued so many different careers",
                "D. indicating what aspects of Wegener’s life interested him most"
              ],
              answer: "B"
            },
            {
              qNum: 38,
              text: "What is said about Wegener in the sixth paragraph?",
              options: [
                "A. He was not a particularly ambitious person.",
                "B. He kept a record of all his scientific observations.",
                "C. He did not adopt many of the scientific practices of the time.",
                "D. He enjoyed discussing new discoveries with other scientists."
              ],
              answer: "A"
            },
            {
              qNum: 39,
              text: "What does Greene say about some other famous scientists?",
              options: [
                "A. Their published works had a greater impact than Wegener’s did.",
                "B. They had fewer doubts about their scientific ideas than Wegener did.",
                "C. Their scientific ideas were more controversial than Wegener’s.",
                "D. They are easier subjects to write about than Wegener."
              ],
              answer: "D"
            },
            {
              qNum: 40,
              text: "What is Greene’s main point in the final paragraph?",
              options: [
                "A. It is not enough in life to have good intentions.",
                "B. People need to plan carefully if they want to succeed.",
                "C. People have little control over many aspects of their lives.",
                "D. It is important that people ensure they have the freedom to act."
              ],
              answer: "C"
            }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 96 - 97 PDF)
    // ==========================================================================
    writing: {
      task1: {
        title: "WRITING TASK 1",
        image: "https://i.postimg.cc/Dy8ChZQh/Screenshot-2026-02-08-191631.png", 
        prompt: `
          The graph below shows the average monthly change in the prices of three metals during 2014.

          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

          Write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          In many countries, people are now living longer than ever before. Some people say an ageing population creates problems for governments. Other people think there are benefits if society has more elderly people.
          
          To what extent do the advantages of having an ageing population outweigh the disadvantages?
          
          Give reasons for your answer and include any relevant examples from your own knowledge or experience.
         
          Write at least 250 words.
        `
      }
    }
  }
};