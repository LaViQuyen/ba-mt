// src/data/cam17_test2.js

export const cam17_test2 = {
  id: "mt14",
  category: "full",
  testName: "MOCK TEST 14",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Trang 31 - 36 PDF) - Đáp án trang 121
    // ==========================================================================
    listening: {
      audioSrc: "https://dl.dropboxusercontent.com/scl/fi/ievrqjglw4idiucl9wiyv/mt14.mp3?rlkey=yff9t3xwerr6qrmh05f6e8rh1", // Bạn cần file mp3 này
      timeLimit: 1721, 
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 14 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1: Questions 1-10 ---
        {
          type: "gap",
          title: "Part 1: Questions 1-10",
          instruction: "Complete the notes and table below. Write ONE WORD ONLY for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
                <h3 style="text-align:center; color:#2B6830; margin-top:0;">Opportunities for voluntary work in Southoe village</h3>
                
                <p><strong>Library</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Help with <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"> books (times to be arranged)</li>
                    <li>Help needed to keep <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2"> of books up to date</li>
                    <li>Library is in the <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"> Room in the village hall</li>
                </ul>

                <p><strong>Lunch club</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Help by providing <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"></li>
                    <li>Help with hobbies such as <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"></li>
                </ul>

                <p><strong>Help for individuals needed next week</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.8;">
                    <li>Taking Mrs Carroll to <span class="q-badge-inline">6</span><input class="gap-input" data-qnum="6"></li>
                    <li>Work in the <span class="q-badge-inline">7</span><input class="gap-input" data-qnum="7"> at Mr Selsbury's house</li>
                </ul>

                <br>
                <h4 style="color:#2B6830; margin-bottom: 10px;">Village social events</h4>
                <table style="width:100%; border-collapse: collapse; margin-top: 10px; background: #fff;">
                    <tr style="background: #2B6830; color: #fff;">
                        <th style="padding: 8px; border: 1px solid #ccc;">Date</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">Event</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">Location</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">Help needed</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">19 Oct</td>
                        <td style="padding: 8px; border: 1px solid #ccc;"><span class="q-badge-inline">8</span><input class="gap-input" data-qnum="8"></td>
                        <td style="padding: 8px; border: 1px solid #ccc;">Village hall</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">providing refreshments</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">18 Nov</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">dance</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">Village hall</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">checking <span class="q-badge-inline">9</span><input class="gap-input" data-qnum="9"></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">31 Dec</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">New Year's Eve party</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">Mountfort Hotel</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">designing the <span class="q-badge-inline">10</span><input class="gap-input" data-qnum="10"></td>
                    </tr>
                </table>
            </div>
          `,
          items: [
            { qNum: 1, answer: "collecting" },
            { qNum: 2, answer: "records" },
            { qNum: 3, answer: "West" },
            { qNum: 4, answer: "transport" },
            { qNum: 5, answer: "art" },
            { qNum: 6, answer: "hospital" },
            { qNum: 7, answer: "garden" },
            { qNum: 8, answer: "quiz" },
            { qNum: 9, answer: "tickets" },
            { qNum: 10, answer: "poster" }
          ]
        },

        // --- PART 2: Questions 11-20 ---
        {
          type: "mcq_single",
          title: "Part 2: Questions 11-14",
          instruction: "Choose the correct letter, A, B or C.",
          stem: "Oniton Hall",
          items: [
            {
              qNum: 11,
              text: "Many past owners made changes to",
              options: ["A. the gardens.", "B. the house.", "C. the farm."],
              answer: "B"
            },
            {
              qNum: 12,
              text: "Sir Edward Downes built Oniton Hall because he wanted",
              options: ["A. a place for discussing politics.", "B. a place to display his wealth.", "C. a place for artists and writers."],
              answer: "C"
            },
            {
              qNum: 13,
              text: "Visitors can learn about the work of servants in the past from",
              options: ["A. audio guides.", "B. photographs.", "C. people in costume."],
              answer: "C"
            },
            {
              qNum: 14,
              text: "What is new for children at Oniton Hall?",
              options: ["A. clothes for dressing up", "B. mini tractors", "C. the adventure playground"],
              answer: "B"
            }
          ]
        },
        {
          type: "matching",
          title: "Questions 15-20",
          instruction: "Which activity is offered at each of the following locations on the farm? Choose SIX answers from the box.",
          options: [
            "A. shopping",
            "B. watching cows being milked",
            "C. seeing old farming equipment",
            "D. eating and drinking",
            "E. starting a trip",
            "F. seeing rare breeds of animals",
            "G. helping to look after animals",
            "H. using farming tools"
          ],
          items: [
            { qNum: 15, text: "dairy", answer: "D" },
            { qNum: 16, text: "large barn", answer: "C" },
            { qNum: 17, text: "small barn", answer: "G" },
            { qNum: 18, text: "stables", answer: "A" },
            { qNum: 19, text: "shed", answer: "E" },
            { qNum: 20, text: "parkland", answer: "F" }
          ]
        },

        // --- PART 3: Questions 21-30 ---
        {
          type: "mcq_multi",
          title: "Part 3: Questions 21-22",
          instruction: "Choose TWO letters, A-E.",
          stem: "Which TWO things do the students agree they need to include in their reviews of Romeo and Juliet?",
          options: [
            "A. analysis of the text",
            "B. a summary of the plot",
            "C. a description of the theatre",
            "D. a personal reaction",
            "E. a reference to particular scenes"
          ],
          items: [
            { qNums: [21, 22], answer: ["D", "E"] } 
          ]
        },
        {
          type: "matching",
          title: "Questions 23-27",
          instruction: "Which opinion do the speakers give about each of the following aspects of The Emporium's production of Romeo and Juliet?",
          options: [
            "A. They both expected this to be more traditional.",
            "B. They both thought this was original.",
            "C. They agree this created the right atmosphere.",
            "D. They agree this was a major strength.",
            "E. They were both disappointed by this.",
            "F. They disagree about why this was an issue.",
            "G. They disagree about how this could be improved."
          ],
          items: [
            { qNum: 23, text: "the set", answer: "D" },
            { qNum: 24, text: "the lighting", answer: "C" },
            { qNum: 25, text: "the costume design", answer: "A" },
            { qNum: 26, text: "the music", answer: "E" },
            { qNum: 27, text: "the actors' delivery", answer: "F" }
          ]
        },
        {
          type: "mcq_single",
          title: "Questions 28-30",
          instruction: "Choose the correct letter, A, B or C.",
          items: [
            {
              qNum: 28,
              text: "The students think the story of Romeo and Juliet is still relevant for young people today because",
              options: ["A. it illustrates how easily conflict can start.", "B. it deals with problems that families experience.", "C. it teaches them about relationships."],
              answer: "B"
            },
            {
              qNum: 29,
              text: "The students found watching Romeo and Juliet in another language",
              options: ["A. frustrating.", "B. demanding.", "C. moving."],
              answer: "C"
            },
            {
              qNum: 30,
              text: "Why do the students think Shakespeare's plays have such international appeal?",
              options: ["A. The stories are exciting.", "B. There are recognisable characters.", "C. They can be interpreted in many ways."],
              answer: "C"
            }
          ]
        },

        // --- PART 4: Questions 31-40 ---
        {
          type: "gap",
          title: "Part 4: Questions 31-40",
          instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          htmlContent: `
            <div style="background:#f0f4f8; padding:25px; border:1px solid #ccc; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">The impact of digital technology on the Icelandic language</h3>
              
              <p><strong>The Icelandic language</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>has approximately <span class="q-badge-inline">31</span><input class="gap-input" data-qnum="31"> speakers</li>
                <li>has a <span class="q-badge-inline">32</span><input class="gap-input" data-qnum="32"> that is still growing</li>
                <li>has not changed a lot over the last thousand years</li>
                <li>has its own words for computer-based concepts, such as web browser and <span class="q-badge-inline">33</span><input class="gap-input" data-qnum="33"></li>
              </ul>

              <p><strong>Young speakers</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>are big users of digital technology, such as <span class="q-badge-inline">34</span><input class="gap-input" data-qnum="34"></li>
                <li>are becoming <span class="q-badge-inline">35</span><input class="gap-input" data-qnum="35"> very quickly</li>
                <li>are having discussions using only English while they are in the <span class="q-badge-inline">36</span><input class="gap-input" data-qnum="36"> at school</li>
                <li>are better able to identify the content of a <span class="q-badge-inline">37</span><input class="gap-input" data-qnum="37"> in English than Icelandic</li>
              </ul>

              <p><strong>Technology and internet companies</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>write very little in Icelandic because of the small number of speakers and because of how complicated its <span class="q-badge-inline">38</span><input class="gap-input" data-qnum="38"> is</li>
              </ul>

              <p><strong>The Icelandic government</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>has set up a fund to support the production of more digital content in the language</li>
                <li>believes that Icelandic has a secure future</li>
                <li>is worried that young Icelanders may lose their <span class="q-badge-inline">39</span><input class="gap-input" data-qnum="39"> as Icelanders</li>
                <li>is worried about the consequences of children not being <span class="q-badge-inline">40</span><input class="gap-input" data-qnum="40"> in either Icelandic or English</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 31, answer: "321,000" },
            { qNum: 32, answer: "vocabulary" },
            { qNum: 33, answer: "podcast" },
            { qNum: 34, answer: "smartphones" },
            { qNum: 35, answer: "bilingual" },
            { qNum: 36, answer: "playground" },
            { qNum: 37, answer: "picture" },
            { qNum: 38, answer: "grammar" },
            { qNum: 39, answer: "identity" },
            { qNum: 40, answer: "fluent" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Trang 37 - 49 PDF) - Đáp án trang 122
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; color: #333;">The Dead Sea Scrolls</h3>
            
            <p>In late 1946 or early 1947, three Bedouin teenagers were tending their goats and sheep near the ancient settlement of Qumran, located on the northwest shore of the Dead Sea in what is now known as the West Bank. One of these young shepherds tossed a rock into an opening on the side of a cliff and was surprised to hear a shattering sound. He and his companions later entered the cave and stumbled across a collection of large clay jars, seven of which contained scrolls with writing on them. The teenagers took the seven scrolls to a nearby town where they were sold for a small sum to a local antiquities dealer. Word of the find spread, and Bedouins and archaeologists eventually unearthed tens of thousands of additional scroll fragments from 10 nearby caves; together they make up between 800 and 900 manuscripts. It soon became clear that this was one of the greatest archaeological discoveries ever made.</p>

            <p>The origin of the Dead Sea Scrolls, which were written around 2,000 years ago between 150 BCE and 70 CE, is still the subject of scholarly debate even today. According to the prevailing theory, they are the work of a population that inhabited the area until Roman troops destroyed the settlement around 70 CE. The area was known as Judea at that time, and the people are thought to have belonged to a group called the Essenes, a devout Jewish sect.</p>

            <p>The majority of the texts on the Dead Sea Scrolls are in Hebrew, with some fragments written in an ancient version of its alphabet thought to have fallen out of use in the fifth century BCE. But there are other languages as well. Some scrolls are in Aramaic, the language spoken by many inhabitants of the region from the sixth century BCE to the siege of Jerusalem in 70 CE. In addition, several texts feature translations of the Hebrew Bible into Greek.</p>

            <p>The Dead Sea Scrolls include fragments from every book of the Old Testament of the Bible except for the Book of Esther. The only entire book of the Hebrew Bible preserved among the manuscripts from Qumran is Isaiah; this copy, dated to the first century BCE, is considered the earliest biblical manuscript still in existence. Along with biblical texts, the scrolls include documents about sectarian regulations and religious writings that do not appear in the Old Testament.</p>

            <p>The writing on the Dead Sea Scrolls is mostly in black or occasionally red ink, and the scrolls themselves are nearly all made of either parchment (animal skin) or an early form of paper called 'papyrus'. The only exception is the scroll numbered 3Q15, which was created out of a combination of copper and tin. Known as the Copper Scroll, this curious document features letters chiselled onto metal - perhaps, as some have theorized, to better withstand the passage of time. One of the most intriguing manuscripts from Qumran, this is a sort of ancient treasure map that lists dozens of gold and silver caches. Using an unconventional vocabulary and odd spelling, it describes 64 underground hiding places that supposedly contain riches buried for safekeeping. None of these hoards have been recovered, possibly because the Romans pillaged Judea during the first century CE. According to various hypotheses, the treasure belonged to local people, or was rescued from the Second Temple before its destruction or never existed to begin with.</p>

            <p>Some of the Dead Sea Scrolls have been on interesting journeys. In 1948, a Syrian Orthodox archbishop known as Mar Samuel acquired four of the original seven scrolls from a Jerusalem shoemaker and part-time antiquity dealer, paying less than $100 for them. He then travelled to the United States and unsuccessfully offered them to a number of universities, including Yale. Finally, in 1954, he placed an advertisement in the business newspaper The Wall Street Journal - under the category 'Miscellaneous Items for Sale' - that read: 'Biblical Manuscripts dating back to at least 200 B.C. are for sale. This would be an ideal gift to an educational or religious institution by an individual or group.' Fortunately, Israeli archaeologist and statesman Yigael Yadin negotiated their purchase and brought the scrolls back to Jerusalem, where they remain to this day.</p>

            <p>In 2017, researchers from the University of Haifa restored and deciphered one of the last untranslated scrolls. The university's Eshbal Ratson and Jonathan Ben-Dov spent one year reassembling the 60 fragments that make up the scroll. Deciphered from a band of coded text on parchment, the find provides insight into the community of people who wrote it and the 364-day calendar they would have used. The scroll names celebrations that indicate shifts in seasons and details two yearly religious events known from another Dead Sea Scroll. Only one more known scroll remains untranslated.</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            <h3 style="text-align: center;">A second attempt at domesticating the tomato</h3>

            <p><strong>A</strong> It took at least 3,000 years for humans to learn how to domesticate the wild tomato and cultivate it for food. Now two separate teams in Brazil and China have done it all over again in less than three years. And they have done it better in some ways, as the re-domesticated tomatoes are more nutritious than the ones we eat at present. This approach relies on the revolutionary CRISPR genome editing technique, in which changes are deliberately made to the DNA of a living cell, allowing genetic material to be added, removed or altered. The technique could not only improve existing crops, but could also be used to turn thousands of wild plants into useful and appealing foods. In fact, a third team in the US has already begun to do this with a relative of the tomato called the groundcherry.</p>
            <p>This fast-track domestication could help make the world's food supply healthier and far more resistant to diseases, such as the rust fungus devastating wheat crops. 'This could transform what we eat,' says Jorg Kudla at the University of Munster in Germany, a member of the Brazilian team. 'There are 50,000 edible plants in the world, but 90 percent of our energy comes from just 15 crops.' 'We can now mimic the known domestication course of major crops like rice, maize, sorghum or others,' says Caixia Gao of the Chinese Academy of Sciences in Beijing. 'Then we might try to domesticate plants that have never been domesticated.'</p>

            <p><strong>B</strong> Wild tomatoes, which are native to the Andes region in South America, produce pea-sized fruits. Over many generations, peoples such as the Aztecs and Incas transformed the plant by selecting and breeding plants with mutations* in their genetic structure, which resulted in desirable traits such as larger fruit. But every time a single plant with a mutation is taken from a larger population for breeding, much genetic diversity is lost. And sometimes the desirable mutations come with less desirable traits. For instance, the tomato strains grown for supermarkets have lost much of their flavour. By comparing the genomes of modern plants to those of their wild relatives, biologists have been working out what genetic changes occurred as plants were domesticated. The teams in Brazil and China have now used this knowledge to reintroduce these changes from scratch while maintaining or even enhancing the desirable traits of wild strains.</p>

            <p><strong>C</strong> Kudla's team made six changes altogether. For instance, they tripled the size of fruit by editing a gene called FRUIT WEIGHT, and increased the number of tomatoes per truss by editing another called MULTIFLORA. While the historical domestication of tomatoes reduced levels of the red pigment lycopene - thought to have potential health benefits - the team in Brazil managed to boost it instead. The wild tomato has twice as much lycopene as cultivated ones; the newly domesticated one has five times as much. 'They are quite tasty,' says Kudla. 'A little bit strong. And very aromatic.'</p>

            <p><strong>D</strong> The team in China re-domesticated several strains of wild tomatoes with desirable traits lost in domesticated tomatoes. In this way they managed to create a strain resistant to a common disease called bacterial spot race, which can devastate yields. They also created another strain that is more salt tolerant - and has higher levels of vitamin C.</p>

            <p><strong>E</strong> Meanwhile, Joyce Van Eck at the Boyce Thompson Institute in New York state decided to use the same approach to domesticate the groundcherry or goldenberry (Physalis pruinosa) for the first time. This fruit looks similar to the closely related Cape gooseberry (Physalis peruviana). Groundcherries are already sold to a limited extent in the US but they are hard to produce because the plant has a sprawling growth habit and the small fruits fall off the branches when ripe. Van Eck's team has edited the plants to increase fruit size, make their growth more compact and to stop fruits dropping. 'There's potential for this to be a commercial crop,' says Van Eck. But she adds that taking the work further would be expensive because of the need to pay for a licence for the CRISPR technology and get regulatory approval.</p>
            <p>This approach could boost the use of many obscure plants, says Jonathan Jones of the Sainsbury Lab in the UK. But it will be hard for new foods to grow so popular with farmers and consumers that they become new staple crops, he thinks. The three teams already have their eye on other plants that could be 'catapulted into the mainstream', including foxtail, oat-grass and cowpea. By choosing wild plants that are drought or heat tolerant, says Gao, we could create crops that will thrive even as the planet warms. But Kudla didn't want to reveal which species were in his team's sights, because CRISPR has made the process so easy. 'Any one with the right skills could go to their lab and do this.'</p>
            <p style="font-size: 0.8em;">* mutations: changes in an organism's genetic structure that can be passed down to later generations</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <h3 style="text-align: center;">Insight or evolution?</h3>
            <p style="text-align:center; font-style:italic;">Two scientists consider the origins of discoveries and other innovative behavior</p>

            <p>Scientific discovery is popularly believed to result from the sheer genius of such intellectual stars as naturalist Charles Darwin and theoretical physicist Albert Einstein. Our view of such unique contributions to science often disregards the person's prior experience and the efforts of their lesser-known predecessors. Conventional wisdom also places great weight on insight in promoting breakthrough scientific achievements, as if ideas spontaneously pop into someone's head - fully formed and functional.</p>

            <p>There may be some limited truth to this view. However, we believe that it largely misrepresents the real nature of scientific discovery, as well as that of creativity and innovation in many other realms of human endeavor. Setting aside such greats as Darwin and Einstein - whose monumental contributions are duly celebrated - we suggest that innovation is more a process of trial and error, where two steps forward may sometimes come with one step back, as well as one or more steps to the right or left. This evolutionary view of human innovation undermines the notion of creative genius and recognizes the cumulative nature of scientific progress.</p>

            <p>Consider one unheralded scientist: John Nicholson, a mathematical physicist working in the 1910s who postulated the existence of 'proto-elements' in outer space. By combining different numbers of weights of these proto-elements' atoms, Nicholson could recover the weights of all the elements in the then-known periodic table. These successes are all the more noteworthy given the fact that Nicholson was wrong about the presence of proto-elements: they do not actually exist. Yet, amid his often fanciful theories and wild speculations, Nicholson also proposed a novel theory about the structure of atoms. Niels Bohr, the Nobel prize-winning father of modern atomic theory, jumped off from this interesting idea to conceive his now-famous model of the atom.</p>

            <p>What are we to make of this story? One might simply conclude that science is a collective and cumulative enterprise. That may be true, but there may be a deeper insight to be gleaned. We propose that science is constantly evolving, much as species of animals do. In biological systems, organisms may display new characteristics that result from random genetic mutations. In the same way, random, arbitrary or accidental mutations of ideas may help pave the way for advances in science. If mutations prove beneficial, then the animal or the scientific theory will continue to thrive and perhaps reproduce.</p>

            <p>Support for this evolutionary view of behavioral innovation comes from many domains. Consider one example of an influential innovation in US horseracing. The so-called 'acey-deucy' stirrup placement, in which the rider's foot in his left stirrup is placed as much as 25 centimeters lower than the right, is believed to confer important speed advantages when turning on oval tracks. It was developed by a relatively unknown jockey named Jackie Westrope. Had Westrope conducted methodical investigations or examined extensive film records in a shrewd plan to outrun his rivals? Had he foreseen the speed advantage that would be conferred by riding acey-deucy? No. He suffered a leg injury, which left him unable to fully bend his left knee. His modification just happened to coincide with enhanced left-hand turning performance. This led to the rapid and widespread adoption of riding acey-deucy by many riders, a racing style which continues in today's thoroughbred racing.</p>

            <p>Plenty of other stories show that fresh advances can arise from error, misadventure, and also pure serendipity - a happy accident. For example, in the early 1970s, two employees of the company 3M each had a problem: Spencer Silver had a product - a glue which was only slightly sticky - and no use for it, while his colleague Art Fry was trying to figure out how to affix temporary bookmarks in his hymn book without damaging its pages. The solution to both these problems was the invention of the brilliantly simple yet phenomenally successful Post-It note.</p>

            <p>Such examples give lie to the claim that ingenious, designing minds are responsible for human creativity and invention. Far more banal and mechanical forces may be at work; forces that are fundamentally connected to the laws of science. The notions of insight, creativity and genius are often invoked, but they remain vague and of doubtful scientific utility, especially when one considers the diverse and enduring contributions of individuals such as Plato, Leonardo da Vinci, Shakespeare, Beethoven, Galileo, Newton, Kepler, Curie, Pasteur and Edison. These notions merely label rather than explain the evolution of human innovations. We need another approach, and there is a promising candidate.</p>

            <p>The Law of Effect was advanced by psychologist Edward Thorndike in 1898, some 40 years after Charles Darwin published his groundbreaking work on biological evolution, On the Origin of Species. This simple law holds that organisms tend to repeat successful behaviors and to refrain from performing unsuccessful ones. Just like Darwin's Law of Natural Selection, the Law of Effect involves an entirely mechanical process of variation and selection, without any end objective in sight.</p>

            <p>Of course, the origin of human innovation demands much further study. In particular, the provenance of the raw material on which the Law of Effect operates is not as clearly known as that of the genetic mutations on which the Law of Natural Selection operates. The generation of novel ideas and behaviors may not be entirely random, but constrained by prior successes and failures of the current individual (such as Bohr) or of predecessors (such as Nicholson). The time seems right for abandoning the naive notions of intelligent design and genius, and for scientifically exploring the true origins of creative behavior.</p>
        </div>
      `,
      questions: [
        // --- PASSAGE 1 QUESTIONS (Notes) ---
        {
          type: "gap",
          title: "Questions 1-5",
          instruction: "Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:25px; border:1px solid #ddd; font-family: 'Segoe UI', sans-serif;">
              <h3 style="text-align:center; color:#2B6830; margin-top:0;">The Dead Sea Scrolls</h3>
              
              <p><strong>Discovery</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>Qumran, 1946/7</li>
                <li>three Bedouin shepherds in their teens were near an opening on side of cliff</li>
                <li>heard a noise of breaking when one teenager threw a <span class="q-badge-inline">1</span><input class="gap-input" data-qnum="1"></li>
                <li>teenagers went into the <span class="q-badge-inline">2</span><input class="gap-input" data-qnum="2"> and found a number of containers made of <span class="q-badge-inline">3</span><input class="gap-input" data-qnum="3"></li>
              </ul>

              <p><strong>The scrolls</strong></p>
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li>date from between 150 BCE and 70 CE</li>
                <li>thought to have been written by group of people known as the <span class="q-badge-inline">4</span><input class="gap-input" data-qnum="4"></li>
                <li>written mainly in the <span class="q-badge-inline">5</span><input class="gap-input" data-qnum="5"> language</li>
                <li>most are on religious topics, written using ink on parchment or papyrus</li>
              </ul>
            </div>
          `,
          items: [
            { qNum: 1, answer: "rock" },
            { qNum: 2, answer: "cave" },
            { qNum: 3, answer: "clay" },
            { qNum: 4, answer: "Essenes" },
            { qNum: 5, answer: "Hebrew" }
          ]
        },
        // --- PASSAGE 1 QUESTIONS (TFNG) ---
        {
          type: "tfng",
          title: "Questions 6-13",
          instruction: "Do the following statements agree with the information given in Reading Passage 1?",
          items: [
            { qNum: 6, text: "The Bedouin teenagers who found the scrolls were disappointed by how little money they received for them.", answer: "NOT GIVEN" },
            { qNum: 7, text: "There is agreement among academics about the origin of the Dead Sea Scrolls.", answer: "FALSE" },
            { qNum: 8, text: "Most of the books of the Bible written on the scrolls are incomplete.", answer: "TRUE" },
            { qNum: 9, text: "The information on the Copper Scroll is written in an unusual way.", answer: "TRUE" },
            { qNum: 10, text: "Mar Samuel was given some of the scrolls as a gift.", answer: "FALSE" },
            { qNum: 11, text: "In the early 1950s, a number of educational establishments in the US were keen to buy scrolls from Mar Samuel.", answer: "FALSE" },
            { qNum: 12, text: "The scroll that was pieced together in 2017 contains information about annual occasions in the Qumran area 2,000 years ago.", answer: "TRUE" },
            { qNum: 13, text: "Academics at the University of Haifa are currently researching how to decipher the final scroll.", answer: "NOT GIVEN" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS (Matching Info) ---
        {
          type: "matching_info",
          title: "Questions 14-18",
          instruction: "Reading Passage 2 has five sections, A-E. Which section contains the following information?",
          options: ["A", "B", "C", "D", "E"],
          items: [
            { qNum: 14, text: "a reference to a type of tomato that can resist a dangerous infection", answer: "D" }, 
            { qNum: 15, text: "an explanation of how problems can arise from focusing only on a certain type of tomato plant", answer: "B" },
            { qNum: 16, text: "a number of examples of plants that are not cultivated at present but could be useful as food sources", answer: "E" },
            { qNum: 17, text: "a comparison between the early domestication of the tomato and more recent research", answer: "A" },
            { qNum: 18, text: "a personal reaction to the flavour of a tomato that has been genetically edited", answer: "C" }
          ]
        },
        // --- PASSAGE 2 QUESTIONS (Matching Features) ---
        {
          type: "matching",
          title: "Questions 19-23",
          instruction: "Match each statement with the correct researcher, A-D.",
          options: [
            "A. Jorg Kudla",
            "B. Caixia Gao",
            "C. Joyce Van Eck",
            "D. Jonathan Jones"
          ],
          items: [
            { qNum: 19, text: "Domestication of certain plants could allow them to adapt to future environmental challenges.", answer: "B" }, // Gao: "create crops that will thrive even as the planet warms" -> B
            { qNum: 20, text: "The idea of growing and eating unusual plants may not be accepted on a large scale.", answer: "D" }, // Jones: "hard for new foods to grow so popular... become new staple crops" -> D
            { qNum: 21, text: "It is not advisable for the future direction of certain research to be made public.", answer: "A" }, // Kudla: "didn't want to reveal... process so easy" -> A
            { qNum: 22, text: "Present efforts to domesticate one wild fruit are limited by the costs involved.", answer: "C" }, // Van Eck: "taking the work further would be expensive" -> C
            { qNum: 23, text: "Humans only make use of a small proportion of the plant food available on Earth.", answer: "A" } // Kudla: "50,000 edible plants... 90% from 15 crops" -> A
          ]
        },
        // --- PASSAGE 2 QUESTIONS (Sentence Completion) ---
        {
          type: "gap",
          title: "Questions 24-26",
          instruction: "Complete the sentences below. Choose ONE WORD ONLY from the passage for each answer.",
          htmlContent: `
            <div style="background:#fff; padding:15px; border:1px solid #eee;">
                <p>24. An undesirable trait such as loss of <span class="q-badge-inline">24</span><input class="gap-input" data-qnum="24"> may be caused by a mutation in a tomato gene.</p>
                <p>25. By modifying one gene in a tomato plant, researchers made the tomato three times its original <span class="q-badge-inline">25</span><input class="gap-input" data-qnum="25">.</p>
                <p>26. A type of tomato which was not badly affected by <span class="q-badge-inline">26</span><input class="gap-input" data-qnum="26">, and was rich in vitamin C, was produced by a team of researchers in China.</p>
            </div>
          `,
          items: [
            { qNum: 24, answer: ["flavour", "flavor"] },
            { qNum: 25, answer: "size" },
            { qNum: 26, answer: "salt" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS (MCQ) ---
        {
          type: "mcq_single",
          title: "Questions 27-31",
          instruction: "Choose the correct letter, A, B, C or D.",
          items: [
            {
              qNum: 27,
              text: "The purpose of the first paragraph is to",
              options: ["A. defend particular ideas.", "B. compare certain beliefs.", "C. disprove a widely held view.", "D. outline a common assumption."],
              answer: "D"
            },
            {
              qNum: 28,
              text: "What are the writers doing in the second paragraph?",
              options: ["A. criticising an opinion", "B. justifying a standpoint", "C. explaining an approach", "D. supporting an argument"],
              answer: "A"
            },
            {
              qNum: 29,
              text: "In the third paragraph, what do the writers suggest about Darwin and Einstein?",
              options: ["A. They represent an exception to a general rule.", "B. Their way of working has been misunderstood.", "C. They are an ideal which others should aspire to.", "D. Their achievements deserve greater recognition."],
              answer: "A"
            },
            {
              qNum: 30,
              text: "John Nicholson is an example of a person whose idea",
              options: ["A. established his reputation as an influential scientist.", "B. was only fully understood at a later point in history.", "C. laid the foundations for someone else's breakthrough.", "D. initially met with scepticism from the scientific community."],
              answer: "C"
            },
            {
              qNum: 31,
              text: "What is the key point of interest about the 'acey-deucy' stirrup placement?",
              options: ["A. the simple reason why it was invented", "B. the enthusiasm with which it was adopted", "C. the research that went into its development", "D. the cleverness of the person who first used it"],
              answer: "A"
            }
          ]
        },
        // --- PASSAGE 3 QUESTIONS (Yes/No/Not Given) ---
        {
          type: "ynng",
          title: "Questions 32-36",
          instruction: "Do the following statements agree with the claims of the writer in Reading Passage 3?",
          items: [
            { qNum: 32, text: "Acknowledging people such as Plato or da Vinci as geniuses will help us understand the process by which great minds create new ideas.", answer: "NO" },
            { qNum: 33, text: "The Law of Effect was discovered at a time when psychologists were seeking a scientific reason why creativity occurs.", answer: "NOT GIVEN" },
            { qNum: 34, text: "The Law of Effect states that no planning is involved in the behaviour of organisms.", answer: "YES" },
            { qNum: 35, text: "The Law of Effect sets out clear explanations about the sources of new ideas and behaviours.", answer: "NO" },
            { qNum: 36, text: "Many scientists are now turning away from the notion of intelligent design and genius.", answer: "NOT GIVEN" }
          ]
        },
        // --- PASSAGE 3 QUESTIONS (Summary with Box) ---
        {
          type: "gap",
          title: "Questions 37-40",
          instruction: "Complete the summary using the list of words, A-G, below. Choose the correct letter, A-G, for each answer.",
          htmlContent: `
            <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
              <h4 style="text-align:center; color:#2B6830;">The origins of creative behaviour</h4>
              <p>The traditional view of scientific discovery is that breakthroughs happen when a single great mind has sudden <span class="q-badge-inline">37</span><select class="gap-select" data-qnum="37"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option></select>. Although this can occur, it is not often the case. Advances are more likely to be the result of a longer process. In some cases, this process involves <span class="q-badge-inline">38</span><select class="gap-select" data-qnum="38"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option></select>, such as Nicholson's theory about proto-elements. In others, simple necessity may provoke innovation, as with Westrope's decision to modify the position of his riding stirrups. There is also often an element of <span class="q-badge-inline">39</span><select class="gap-select" data-qnum="39"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option></select>, for example, the coincidence of ideas that led to the invention of the Post-It note. With both the Law of Natural Selection and the Law of Effect, there may be no clear <span class="q-badge-inline">40</span><select class="gap-select" data-qnum="40"><option value="">...</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option></select> involved, but merely a process of variation and selection.</p>
              
              <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; background: #fff; font-size: 0.9em;">
                 <strong>Options:</strong><br/>
                 A. invention &nbsp;&nbsp; B. goals &nbsp;&nbsp; C. compromise &nbsp;&nbsp; D. mistakes<br/>
                 E. luck &nbsp;&nbsp; F. inspiration &nbsp;&nbsp; G. experiments
              </div>
            </div>
          `,
          items: [
            { qNum: 37, answer: "F" },
            { qNum: 38, answer: "D" },
            { qNum: 39, answer: "E" },
            { qNum: 40, answer: "B" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Trang 50 - 51 PDF)
    // ==========================================================================
    writing: {
      task1: {
        title: "WRITING TASK 1",
        image: "https://i.postimg.cc/k4gvFQmv/Screenshot-2026-02-08-211044.png", 
        prompt: `
          The table and charts below give information on the police budget for 2017 and 2018 in one area of Britain. The table shows where the money came from and the charts show how it was distributed.
          
          Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
          
          Write at least 150 words.
        `
      },
      task2: {
        title: "WRITING TASK 2",
        prompt: `
          Some children spend hours every day on their smartphones.
          
          Why is this the case? Do you think this is a positive or a negative development?
          
          Give reasons for your answer and include any relevant examples from your own knowledge or experience.
          
          Write at least 250 words.
        `
      }
    }
  }
};