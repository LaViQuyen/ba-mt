// src/data/fullmt/cam20_test3.js

export const cam20_test3 = {
  id: "mt3",
  category: "full",
  testName: "MOCK TEST 3",
  description: "Đề thi thử đầy đủ 3 kỹ năng chuẩn (Listening, Reading, Writing).",

  sections: {
    // ==========================================================================
    // PHẦN LISTENING (Lấy từ data_listening.js)
    // ==========================================================================
    listening: {
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/beablevn-ielts.firebasestorage.app/o/audio%2Fmt3.mp3?alt=media&token=32c14846-d029-4e82-bf90-f00ec5e698c2", // ⚠️ Hãy thay đổi đường dẫn file MP3 thật của bạn ở đây
      timeLimit: 1882,
      passage: "<h3 style='text-align:center; color:#2B6830;'>MOCK TEST 3 - LISTENING SECTION</h3>",
      questions: [
        // --- PART 1: Questions 1-10 ---
        {
          "type": "gap",
          "title": "Part 1: Questions 1-10",
          "instruction": "Complete the table below. Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:15px; border:1px solid #ddd; overflow-x:auto;">
                <p><strong>Furniture Rental Companies</strong></p>
                <table style="width:100%; border-collapse: collapse; min-width: 600px;">
                    <thead>
                        <tr style="background:#2B6830; color:white;">
                            <th style="padding:10px; border:1px solid #ccc; width: 25%;">Name of company</th>
                            <th style="padding:10px; border:1px solid #ccc; width: 35%;">Information about costs</th>
                            <th style="padding:10px; border:1px solid #ccc; width: 40%;">Additional notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">Peak Rentals</td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                Prices range from $105 to $<span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="input-1"> per room per month
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                    The furniture is very <span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="input-2"><br>
                                    Delivers in 1-2 days<br>
                                    Special offer: Free <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="input-3"> with every living room set
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">
                                <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="input-4"> and Oliver
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                    Mid-range prices<br>
                                    12% monthly fee for <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="input-5">
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                Also offers a cleaning service
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc; font-weight:bold;">Larch Furniture</td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                Offers cheapest prices for renting furniture and <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="input-6"> items
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                Must have own <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="input-7">.<br>
                                Minimum contract length: six months
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:10px; border:1px solid #ccc;">
                                <span class="q-badge-inline">8</span><input type="text" class="gap-input" data-qnum="8" id="input-8"> Rentals
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                See the <span class="q-badge-inline">9</span><input type="text" class="gap-input" data-qnum="9" id="input-9"> for the most up-to-date prices
                            </td>
                            <td style="padding:10px; border:1px solid #ccc;">
                                <span class="q-badge-inline">10</span><input type="text" class="gap-input" data-qnum="10" id="input-10"> are allowed within 7 days of delivery
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          `,
          "items": [
            { "qNum": 1, "answer": ["239"] }, 
            { "qNum": 2, "answer": "modern" }, 
            { "qNum": 3, "answer": "lamp" }, 
            { "qNum": 4, "answer": "Aaron" },
            { "qNum": 5, "answer": "damage" }, 
            { "qNum": 6, "answer": "electronic" },
            { "qNum": 7, "answer": "insurance" }, 
            { "qNum": 8, "answer": "Space" },
            { "qNum": 9, "answer": "app" }, 
            { "qNum": 10, "answer": "exchanges" }
          ]
        },

        // --- PART 2: Questions 11-16 (MCQ Single) ---
        {
          "type": "mcq_single", 
          "title": "Part 2: Questions 11-16", 
          "instruction": "Choose the correct letter, <strong>A, B or C</strong>.",
          "stem": "11. Who was responsible for starting the community project?",
          "options": ["A. the castle owners", "B. a national charity", "C. the local council"],
          "items": [{ "qNum": 11, "answer": "B" }]
        },
        {
          "type": "mcq_single", 
          "stem": "12. How was the gold coin found?",
          "options": ["A. Heavy rain had removed some of the soil.", "B. The ground was dug up by wild rabbits.", "C. A person with a metal detector searched the area."],
          "items": [{ "qNum": 12, "answer": "A" }]
        },
        {
          "type": "mcq_single", 
          "stem": "13. What led the archaeologists to believe there was an ancient village on this site?",
          "options": ["A. the lucky discovery of old records", "B. the bases of several structures visible in the grass", "C. the unusual stones found near the castle"],
          "items": [{ "qNum": 13, "answer": "A" }]
        },
        {
          "type": "mcq_single", 
          "stem": "14. What are the team still hoping to find?",
          "options": ["A. everyday pottery", "B. animal bones", "C. pieces of jewellery"],
          "items": [{ "qNum": 14, "answer": "C" }]
        },
        {
          "type": "mcq_single", 
          "stem": "15. What was found on the other side of the river to the castle?",
          "options": ["A. the remains of a large palace", "B. the outline of fields", "C. a number of small huts"],
          "items": [{ "qNum": 15, "answer": "B" }]
        },
        {
          "type": "mcq_single", 
          "stem": "16. What do the team plan to do after work ends this summer?",
          "options": ["A. prepare a display for a museum", "B. take part in a television programme", "C. start to organise school visits"],
          "items": [{ "qNum": 16, "answer": "C" }]
        },

        // --- PART 2: Questions 17-20 (MAP LABELLING GRID) ---
        {
          "type": "labelling_grid",
          "title": "Questions 17-20",
          "instruction": "Label the map below. Choose the correct letter, <strong>A-G</strong>, for each label.",
          "image": "https://i.postimg.cc/Pqg1Lvcb/Bidcaster-Archaeological-Dig-1024x919.jpg",
          "options": ["A", "B", "C", "D", "E", "F", "G"],
          "items": [
            { "qNum": 17, "text": "bridge foundations", "answer": "B" },
            { "qNum": 18, "text": "rubbish pit", "answer": "A" },
            { "qNum": 19, "text": "meeting hall", "answer": "G" },
            { "qNum": 20, "text": "fish pond", "answer": "E" }
          ]
        },

        // --- PART 3: Questions 21-26 (MCQ Single) ---
        {
          "type": "mcq_single", 
          "title": "Part 3: Questions 21-26", 
          "instruction": "Choose the correct letter, <strong>A, B or C</strong>.",
          "stem": "21. Finn was pleased to discover that their topic",
          "options": ["A. was not familiar to their module leader.", "B. had not been chosen by other students.", "C. did not prove to be difficult to research."],
          "items": [{ "qNum": 21, "answer": "B" }]
        },
        {
          "type": "mcq_single", 
          "stem": "22. Maya says a mistaken belief about theatre programmes is that",
          "options": ["A. theatres pay companies to produce them.", "B. few theatre-goers buy them nowadays.", "C. they contain far more adverts than previously."],
          "items": [{ "qNum": 22, "answer": "A" }]
        },
        {
          "type": "mcq_single", 
          "stem": "23. Finn was surprised that, in early British theatre, programmes",
          "options": ["A. were difficult for audiences to obtain.", "B. were given out free of charge.", "C. were seen as a kind of contract."],
          "items": [{ "qNum": 23, "answer": "C" }]
        },
        {
          "type": "mcq_single", 
          "stem": "24. Maya feels their project should include an explanation of why companies of actors",
          "options": ["A. promoted their own plays.", "B. performed plays outdoors.", "C. had to tour with their plays."],
          "items": [{ "qNum": 24, "answer": "A" }]
        },
        {
          "type": "mcq_single", 
          "stem": "25. Finn and Maya both think that, compared to nineteenth-century programmes, those from the eighteenth century",
          "options": ["A. were more original.", "B. were more colourful.", "C. were more informative."],
          "items": [{ "qNum": 25, "answer": "C" }]
        },
        {
          "type": "mcq_single", 
          "stem": "26. Maya doesn't fully understand why, in the twentieth century,",
          "options": ["A. very few theatre programmes were printed in the USA.", "B. British theatre programmes failed to develop for so long.", "C. theatre programmes in Britain copied fashions from the USA."],
          "items": [{ "qNum": 26, "answer": "B" }]
        },

        // --- PART 3: Questions 27-30 (Matching) ---
        {
          "type": "matching", 
          "title": "Questions 27-30",
          "instruction": "What comment is made about the programme for each of the following shows?",
          "options": [
            "A. Its origin is somewhat controversial.", 
            "B. It is historically significant for a country.",
            "C. It was effective at attracting audiences.", 
            "D. It is included in a recent project.",
            "E. It contains insights into the show.", 
            "F. It resembles an artwork."
          ],
          "items": [
            { "qNum": 27, "text": "Ruy Blas", "answer": "F" },
            { "qNum": 28, "text": "Man of La Mancha", "answer": "E" },
            { "qNum": 29, "text": "The Tragedy of Jane Shore", "answer": "B" },
            { "qNum": 30, "text": "The Sailors' Festival", "answer": "D" }
          ]
        },

        // --- PART 4: Questions 31-40 ---
        {
          "type": "gap",
          "title": "Part 4: Questions 31-40",
          "instruction": "Complete the notes below. Write <strong>ONE WORD ONLY</strong> for each answer.",
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd;">
                <h3 style="text-align:center; margin-top:0;">Inclusive design</h3>
                <p><strong>Definition</strong></p>
                <ul>
                    <li>Designing products that can be accessed by a diverse range of people without the need for any <span class="q-badge-inline">31</span><input type="text" class="gap-input" data-qnum="31" id="input-31">.</li>
                    <li>Not the same as universal design: that is design for everyone, including catering for people with <span class="q-badge-inline">32</span><input type="text" class="gap-input" data-qnum="32" id="input-32"> problems.</li>
                </ul>
                <p><strong>Examples of inclusive design</strong></p>
                <ul>
                    <li><span class="q-badge-inline">33</span><input type="text" class="gap-input" data-qnum="33" id="input-33"> which are adjustable, avoiding back or neck problems.</li>
                    <li>To assist the elderly: <span class="q-badge-inline">34</span><input type="text" class="gap-input" data-qnum="34" id="input-34"> in public toilets which are easier to use.</li>
                    <li>Designers avoid using <span class="q-badge-inline">35</span><input type="text" class="gap-input" data-qnum="35" id="input-35"> in interfaces.</li>
                    <li>People can make commands using a mouse, keyboard or their <span class="q-badge-inline">36</span><input type="text" class="gap-input" data-qnum="36" id="input-36">.</li>
                </ul>
                <p><strong>Impact of non-inclusive designs</strong></p>
                <p><em>Access</em></p>
                <ul>
                    <li>Loss of independence for disabled people.</li>
                </ul>
                <p><em>Safety</em></p>
                <ul>
                    <li>Seatbelts are especially problematic for <span class="q-badge-inline">37</span><input type="text" class="gap-input" data-qnum="37" id="input-37"> women.</li>
                    <li>PPE jackets are often unsuitable because of the size of women's <span class="q-badge-inline">38</span><input type="text" class="gap-input" data-qnum="38" id="input-38">.</li>
                    <li>PPE for female <span class="q-badge-inline">39</span><input type="text" class="gap-input" data-qnum="39" id="input-39"> officers dealing with emergencies is the worst.</li>
                </ul>
                <p><em>Comfort in the workplace</em></p>
                <ul>
                    <li>The <span class="q-badge-inline">40</span><input type="text" class="gap-input" data-qnum="40" id="input-40"> in offices is often too low for women.</li>
                </ul>
            </div>
          `,
          "items": [
            { "qNum": 31, "answer": "adaptation" }, 
            { "qNum": 32, "answer": "cognitive" },
            { "qNum": 33, "answer": "desks" }, 
            { "qNum": 34, "answer": "taps" },
            { "qNum": 35, "answer": "blue" }, 
            { "qNum": 36, "answer": "voice" },
            { "qNum": 37, "answer": "pregnant" }, 
            { "qNum": 38, "answer": "shoulders" },
            { "qNum": 39, "answer": "police" }, 
            { "qNum": 40, "answer": "temperature" }
          ]
        }
      ]
    },

    // ==========================================================================
    // PHẦN READING (Đã sửa lỗi Group câu hỏi 20-21 và 22-23)
    // ==========================================================================
    reading: {
      timeLimit: 3600, // 60 phút
      passage: `
        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 1</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 1-13</strong>, which are based on Reading Passage 1 below.</p>
            
            <h3 style="text-align: center; font-size: 1.5rem; color: #333;">Frozen Food</h3>
            <p><strong>A US perspective on the development of the frozen food industry</strong></p>
            
            <p>At some point in history, humans discovered that ice preserved food. There is evidence that winter ice was stored to preserve food in the summer as far back as 10,000 years ago. Two thousand years ago, the inhabitants of South America's Andean mountains had a unique means of conserving potatoes for later consumption. They froze them overnight, then trampled them to squeeze out the moisture, then dried them in the sun. This preserved their nutritional value - if not their aesthetic appeal.</p>
            
            <p>Natural ice remained the main form of refrigeration until late in the 19th century. In the early 1800s, ship owners from Boston, USA, had enormous blocks of Arctic ice towed all over the Atlantic for the purpose of food preservation. In 1851, railroads first began putting blocks of ice in insulated rail cars to send butter from Ogdensburg, New York, to Boston.</p>
            
            <p>Finally, in 1870, Australian inventors found a way to make 'mechanical ice'. They used a compressor to force a gas - ammonia at first and later Freon - through a condenser. The compressed gas gave up some of its heat as it moved through the condenser. Then the gas was released quickly into a low-pressure evaporator coil where it became liquid and cold. Air was blown over the evaporator coil and then this cooled air passed into an insulated compartment, lowering its temperature to freezing point.</p>
            
            <p>Initially, this process was invented to keep Australian beer cool even in hot weather. But Australian cattlemen were quick to realize that, if they could put this new invention on a ship, they could export meat across the oceans. In 1880, a shipment of Australian beef and mutton was sent, frozen, to England. While the food frozen this way was still palatable, there was some deterioration. During the freezing process, crystals formed within the cells of the food, and when the ice expanded and the cells burst, this spoilt the flavor and texture of the food.</p>
            
            <p>The modern frozen food industry began with the indigenous Inuit people of Canada. In 1912, a biology student in Massachusetts, USA, named Clarence Birdseye, ran out of money and went to Labrador in Canada to trap and trade furs. While he was there, he became fascinated with how the Inuit would quickly freeze fish in the Arctic air. The fish looked and tasted fresh even months later.</p>
            
            <p>Birdseye returned to the USA in 1917 and began developing mechanical freezers capable of quick-freezing food. Birdseye methodically kept inventing better freezers and gradually built a business selling frozen fish from Gloucester, Massachusetts. In 1929, his business was sold and became General Foods, but he stayed with the company as director of research, and his division continued to innovate.</p>
            
            <p>Birdseye was responsible for several key innovations that made the frozen food industry possible. He developed quick-freezing techniques that reduced the damage that crystals caused, as well as the technique of freezing the product in the package it was to be sold in. He also introduced the use of cellophane, the first transparent material for food packaging, which allowed consumers to see the quality of the product. Birdseye products also came in convenient size packages that could be prepared with a minimum of effort.</p>
            
            <p>But there were still obstacles. In the 1930s, few grocery stores could afford to buy freezers for a market that wasn't established yet. So, Birdseye leased inexpensive freezer cases to them. He also leased insulated railroad cars so that he could ship his products nationwide. However, few consumers had freezers large enough or efficient enough to take advantage of the products.</p>
            
            <p>Sales increased in the early 1940s, when World War II gave a boost to the frozen food industry because tin was being used for munitions. Canned foods were rationed to save tin for the war effort, while frozen foods were abundant and cheap. Finally, by the 1950s, refrigerator technology had developed far enough to make these appliances affordable for the average family. By 1953, 33 million US families owned a refrigerator, and manufacturers were gradually increasing the size of the freezer compartments in them.</p>
            
            <p>The 1950s families were also looking for convenience at mealtimes, so the moment was right for the arrival of the 'TV Dinner'. Swanson Foods was a large, nationally recognized producer of canned and frozen poultry. In 1954, the company adapted some of Birdseye's freezing techniques, and with the help of a clever name and a huge advertising budget, it launched the first 'TV Dinner'. This consisted of frozen turkey, potatoes and vegetables served in the same segmented aluminum tray that was used by airlines. The product was an instant success. Within a year, Swanson had sold 13 million TV dinners. American consumers couldn't resist the combination of a trusted brand name, a single-serving package and the convenience of a meal that could be ready after only 25 minutes in a hot oven. By 1959, Americans were spending $2.7 billion annually on frozen foods, and half a billion of that was spent on ready-prepared meals such as the TV Dinner.</p>
            
            <p>Today, the US frozen food industry has a turnover of over $67 billion annually, with $26.6 billion of that sold to consumers for home consumption. The remaining $40 billion in frozen food sales come through restaurants, cafeterias, hospitals and schools, and that represents a third of the total food service sales.</p>
        </div>
        
        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 2</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 14-26</strong>, which are based on Reading Passage 2 below.</p>
            
            <h3 style="text-align: center; font-size: 1.5rem; color: #333;">Can the planet's coral reefs be saved?</h3>
            
            <p><strong>A</strong> Conservationists have put the final touches to a giant artificial reef they have been assembling at the world-renowned Zoological Society of London (London Zoo). Samples of the planet's most spectacular corals - vivid green branching coral, yellow scroll, blue ridge and many more species - have been added to the giant tank along with fish that thrive in their presence: blue tang, clownfish and many others. The reef is in the zoo's new gallery, Tiny Giants, which is dedicated to the minuscule invertebrate creatures that sustain life across the planet. The coral reef tank and its seven-metre-wide window form the core of the exhibition.</p>
            
            <p>'Coral reefs are the most diverse ecosystems on Earth and we want to show people how wonderful they are,' said Paul Pearce-Kelly, senior curator of invertebrates and fish at the Zoological Society of London. 'However, we also want to highlight the research and conservation efforts that are now being carried out to try to save them from the threat of global warming.' They want people to see what is being done to try to save these wonders.</p>

            <p><strong>B</strong> Corals are composed of tiny animals, known as polyps, with tentacles for capturing small marine creatures in the sea water. These polyps are transparent but get their brilliant tones of pink, orange, blue, green, etc. from algae that live within them, which in turn get protection, while their photosynthesising of the sun's rays provides nutrients for the polyps. This comfortable symbiotic relationship has led to the growth of coral reefs that cover 0.1% of the planet's ocean bed while providing homes for more than 25% of marine species, including fish, molluscs, sponges and shellfish.</p>

            <p><strong>C</strong> As a result, coral reefs are often described as the 'rainforests of the sea', though the comparison is dismissed by some naturalists, including David Attenborough. 'People say you cannot beat the rainforest,' Attenborough has stated. 'But that is simply not true. You go there and the first thing you think is: where ... are the birds? Where are the animals? They are hiding in the trees, of course. No, if you want beauty and wildlife, you want a coral reef. Put on a mask and stick your head under the water. The sight is mind-blowing.'</p>

            <p><strong>D</strong> Unfortunately, these majestic sights are now under very serious threat, with the most immediate problem coming in the form of thermal stress. Rising ocean temperatures are triggering bleaching events that strip reefs of their colour and eventually kill them. And that is just the start. Other menaces include ocean acidification, sea level increase, pollution by humans, deoxygenation and ocean current changes, while the climate crisis is also increasing habitat destruction. As a result, vast areas - including massive chunks of Australia's Great Barrier Reef - have already been destroyed, and scientists advise that more than 90% of reefs could be lost by 2050 unless urgent action is taken to tackle global heating and greenhouse gas emissions.</p>
            
            <p>Pearce-Kelly says that coral reefs have to survive really harsh conditions - wave erosion and other factors. And 'when things start to go wrong in the oceans, then corals will be the first to react. And that is exactly what we are seeing now. Coral reefs are dying and they are telling us that all is not well with our planet.'</p>

            <p><strong>E</strong> However, scientists are trying to pinpoint hardy types of coral that could survive our overheated oceans, and some of this research will be carried out at London Zoo. 'Behind our coral reef tank we have built laboratories where scientists will be studying coral species,' said Pearce-Kelly. One aim will be to carry out research on species to find those that can survive best in warm, acidic waters. Another will be to try to increase coral breeding rates. 'Coral spawn just once a year,' he added. 'However, aquarium-based research has enabled some corals to spawn artificially, which can assist coral reef restoration efforts. And if this can be extended for all species, we could consider the launching of coral-spawning programmes several times a year. That would be a big help in restoring blighted reefs.'</p>

            <p><strong>F</strong> Research in these fields is being conducted in laboratories around the world, with the London Zoo centre linked to this global network. Studies carried out in one centre can then be tested in others. The resulting young coral can then be displayed in the tank in Tiny Giants. 'The crucial point is that the progress we make in making coral better able to survive in a warming world can be shown to the public and encourage them to believe that we can do something to save the planet's reefs,' said Pearce-Kelly. 'Saving our coral reefs is now a critically important ecological goal.'</p>
        </div>

        <hr style="border: 2px dashed #999; margin: 40px 0;">

        <div style="margin-bottom: 50px;">
            <h2 style="color: #2B6830; border-bottom: 2px solid #ccc; padding-bottom: 10px;">READING PASSAGE 3</h2>
            <p style="font-style: italic; color: #666;">You should spend about 20 minutes on <strong>Questions 27-40</strong>, which are based on Reading Passage 3 below.</p>
            
            <h3 style="text-align: center; font-size: 1.5rem; color: #333;">Robots and us</h3>
            <p style="text-align:center; font-style:italic;">Three leaders in their fields answer questions about our relationships with robots</p>

            <p>When asked 'Should robots be used to colonise other planets?', cosmology and astrophysics Professor Martin Rees said he believed the solar system would be mapped by robotic craft by the end of the century. 'The next step would be mining of asteroids, enabling fabrication of large structures in space without having to bring all the raw materials from Earth.... I think this is more realistic and benign than the... "terraforming"* of planets.' He maintains that colonised planets 'should be preserved with a status that is analogous to Antarctica here on Earth.'</p>

            <p>On the question of using robots to colonise other planets and exploit mineral resources, engineering Professor Daniel Wolpert replied, 'I don't see a pressing need to colonise other planets unless we can bring [these] resources back to Earth. The vast majority of Earth is currently inaccessible to us. Using robots to gather resources nearer to home would seem to be a better use of our robotic tools.'</p>

            <p>Meanwhile, for anthropology Professor Kathleen Richardson, the idea of 'colonisation' of other planets seemed morally dubious: 'I think whether we do something on Earth or on Mars we should always do it in the spirit of a genuine interest in "the Other", not to impose a particular model, but to meet "the Other".'</p>

            <p>In response to the second question, 'How soon will machine intelligence outstrip human intelligence?', Rees mentions robots that are advanced enough to beat humans at chess, but then goes on to say, 'Robots are still limited in their ability to sense their environment: they can't yet recognise and move the pieces on a real chessboard as cleverly as a child can. Later this century, however, their more advanced successors may relate to their surroundings, and to people, as adeptly as we do. Moral questions then arise. Should we feel guilty about exploiting [sophisticated robots]? Should we fret if they are underemployed, frustrated, or bored?'</p>

            <p>Wolpert's response to the question about machine intelligence outstripping human intelligence was this: 'In a limited sense it already has. Machines can already navigate, remember and search for items with an ability that far outstrips humans. However, there is no machine that can identify visual objects or speech with the reliability and flexibility of humans.... Expecting a machine close to the creative intelligence of a human within the next 50 years would be highly ambitious.'</p>

            <p>Richardson believes that our fear of machines becoming too advanced has more to do with human nature than anything intrinsic to the machines themselves. In her view, it stems from humans' tendency to personify inanimate objects: we create machines based on representations of ourselves, imagine that machines think and behave as we do, and therefore see them as an autonomous threat. 'One of the consequences of thinking that the problem lies with machines is that we tend to imagine they are greater and more powerful than they really are and subsequently they become so.'</p>

            <p>This led on to the third question, 'Should we be scared by advances in artificial intelligence?' To this question, Rees replied, 'Those who should be worried are the futurologists who believe in the so-called "singularity".** ... And another worry is that we are increasingly dependent on computer networks, and that these could behave like a single "brain" with a mind of its own, and with goals that may be contrary to human welfare. I think we should ensure that robots remain as no more than "idiot savants" lacking the capacity to outwit us, even though they may greatly surpass us in the ability to calculate and process information.'</p>

            <p>Wolpert's response was to say that we have already seen the damaging effects of artificial intelligence in the form of computer viruses. 'But in this case,' he says, 'the real intelligence is the malicious designer. Critically, the benefits of computers outweigh the damage that computer viruses cause. Similarly, while there may be misuses of robotics in the near future, the benefits that they will bring are likely to outweigh these negative aspects.'</p>

            <p>Richardson's response to this question was this: 'We need to ask why fears of artificial intelligence and robots persist; none have in fact risen up and challenged human supremacy.' She believes that as robots have never shown themselves to be a threat to humans, it seems unlikely that they ever will. In fact, she went on, 'Not all fear [robots]; many people welcome machine intelligence.'</p>

            <p>In answer to the fourth question, 'What can science fiction tell us about robotics?', Rees replied, 'I sometimes advise students that it's better to read first-rate science fiction than second-rate science - more stimulating, and perhaps no more likely to be wrong.'</p>

            <p>As his response, Wolpert commented, 'Science fiction has often been remarkable at predicting the future. Science fiction has painted a vivid spectrum of possible futures, from cute and helpful robots to dystopian robotic societies. Interestingly, almost no science fiction envisages a future without robots.'</p>

            <p>Finally, on the question of science fiction, Richardson pointed out that in modern society, people tend to think there is reality on the one hand, and fiction and fantasy on the other. She then explained that the division did not always exist, and that scientists and technologists made this separation because they wanted to carve out the sphere of their work. 'But the divide is not so clear cut, and that is why the worlds seem to collide at times,' she said. 'In some cases, we need to bring these different understandings together to get a whole perspective. Perhaps then, we won't be so frightened that something we create as a copy of ourselves will be a [threat] to us.'</p>
            
            <p style="font-size: 0.9em; font-style: italic;">* terraforming: modifying a planet's atmosphere to suit human needs</p>
            <p style="font-size: 0.9em; font-style: italic;">** singularity: the point when robots will be able to start creating ever more sophisticated versions of themselves</p>
        </div>
      `,
      
      questions: [
        // --- PASSAGE 1 QUESTIONS ---
        {
          "type": "gap",
          "title": "Questions 1-7",
          "instruction": "Complete the notes below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "items": [
            { "qNum": 1, "answer": "potatoes" },
            { "qNum": 2, "answer": "butter" },
            { "qNum": 3, "answer": "meat" },
            { "qNum": 4, "answer": "crystals" },
            { "qNum": 5, "answer": "cellophane" },
            { "qNum": 6, "answer": "tin" },
            { "qNum": 7, "answer": "refrigerator" }
          ],
          "htmlContent": `
            <div style="background:#f9f9f9; padding:20px; border:1px solid #ddd; border-radius: 8px;">
                <h3 style="margin-top:0; color: #2B6830; text-align: center;">The history of frozen food</h3>
                
                <p><strong>2,000 years ago, South America</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; line-height: 2;">
                    <li>People conserved the nutritional value of <span class="q-badge-inline">1</span><input type="text" class="gap-input" data-qnum="1" id="input-1">, using a method of freezing then drying.</li>
                </ul>

                <p><strong>1851, USA</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; line-height: 2;">
                    <li><span class="q-badge-inline">2</span><input type="text" class="gap-input" data-qnum="2" id="input-2"> was kept cool by ice during transportation in specially adapted trains.</li>
                </ul>
                
                <p><strong>1880, Australia</strong></p>
                 <ul style="list-style-type: disc; margin-left: 20px; line-height: 2;">
                    <li>Two kinds of <span class="q-badge-inline">3</span><input type="text" class="gap-input" data-qnum="3" id="input-3"> were the first frozen food shipped to England.</li>
                </ul>

                <p><strong>1917 onwards, USA</strong></p>
                 <ul style="list-style-type: disc; margin-left: 20px; line-height: 2;">
                    <li>Clarence Birdseye introduced innovations including:
                        <ul style="list-style-type: circle; margin-left: 20px;">
                            <li>quick-freezing methods, so that <span class="q-badge-inline">4</span><input type="text" class="gap-input" data-qnum="4" id="input-4"> did not spoil the food.</li>
                            <li>packaging products with <span class="q-badge-inline">5</span><input type="text" class="gap-input" data-qnum="5" id="input-5">, so the product was visible.</li>
                        </ul>
                    </li>
                </ul>

                <p><strong>Early 1940s, USA</strong></p>
                 <ul style="list-style-type: disc; margin-left: 20px; line-height: 2;">
                    <li>Frozen food became popular because of a shortage of <span class="q-badge-inline">6</span><input type="text" class="gap-input" data-qnum="6" id="input-6">.</li>
                </ul>

                <p><strong>1950s, USA</strong></p>
                 <ul style="list-style-type: disc; margin-left: 20px; line-height: 2;">
                    <li>A large number of homes now had a <span class="q-badge-inline">7</span><input type="text" class="gap-input" data-qnum="7" id="input-7">.</li>
                </ul>
            </div>
          `
        },
        {
          "type": "tfng",
          "title": "Questions 8-13",
          "instruction": "Do the following statements agree with the information given in Reading Passage 1?<br><br><table style='width:100%; border:none; margin-bottom:15px; font-size: 0.95rem;'><tr><td style='width: 110px; font-weight: bold; padding: 5px 0;'>TRUE</td><td>if the statement agrees with the information</td></tr><tr><td style='font-weight: bold; padding: 5px 0;'>FALSE</td><td>if the statement contradicts the information</td></tr><tr><td style='font-weight: bold; padding: 5px 0;'>NOT GIVEN</td><td>if there is no information on this</td></tr></table>",
          "items": [
            { "qNum": 8, "text": "The ice transportation business made some Boston ship owners very wealthy in the early 1800s.", "answer": "NOT GIVEN" },
            { "qNum": 9, "text": "A disadvantage of the freezing process invented in Australia was that it affected the taste of food.", "answer": "TRUE" },
            { "qNum": 10, "text": "Clarence Birdseye travelled to Labrador in order to learn how the Inuit people froze fish.", "answer": "FALSE" },
            { "qNum": 11, "text": "Swanson Foods invested a great deal of money in the promotion of the TV Dinner.", "answer": "TRUE" },
            { "qNum": 12, "text": "Swanson Foods developed a new style of container for the launch of the TV Dinner.", "answer": "FALSE" },
            { "qNum": 13, "text": "The US frozen food industry is currently the largest in the world.", "answer": "NOT GIVEN" }
          ]
        },

        // --- PASSAGE 2 QUESTIONS ---
        {
          "type": "matching_info",
          "title": "Questions 14-19",
          "instruction": "Reading Passage 2 has six sections, <strong>A-F</strong>. Choose the correct heading for each section from the list of headings below.",
          "options": [
            "i. Tried and tested solutions",
            "ii. Cooperation beneath the waves",
            "iii. Working to lessen the problems",
            "iv. Disagreement about the accuracy of a certain phrase",
            "v. Two clear educational goals",
            "vi. Promoting hope",
            "vii. A warning of further trouble ahead"
          ],
          "items": [
            { "qNum": 14, "text": "Section A", "answer": "v" },
            { "qNum": 15, "text": "Section B", "answer": "ii" },
            { "qNum": 16, "text": "Section C", "answer": "iv" },
            { "qNum": 17, "text": "Section D", "answer": "vii" },
            { "qNum": 18, "text": "Section E", "answer": "iii" },
            { "qNum": 19, "text": "Section F", "answer": "vi" }
          ]
        },
        
        // --- SỬA LỖI Ở ĐÂY: GỘP GROUP 20-21 THÀNH 1 ITEM ---
        {
          "type": "mcq_multi",
          "title": "Questions 20 and 21",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "Which TWO of these causes of damage to coral reefs are mentioned by the writer of the text?",
          "options": [
            "A. a rising number of extreme storms",
            "B. the removal of too many fish from the sea",
            "C. the contamination of the sea from waste",
            "D. increased disease among marine species",
            "E. alterations in the usual flow of water in the seas"
          ],
          "items": [
            // Gộp 2 câu thành 1 item có mảng qNums
            { "qNums": [20, 21], "answer": ["C", "E"] } 
          ]
        },
        
        // --- SỬA LỖI Ở ĐÂY: GỘP GROUP 22-23 THÀNH 1 ITEM ---
        {
          "type": "mcq_multi",
          "title": "Questions 22 and 23",
          "instruction": "Choose <strong>TWO</strong> letters, <strong>A-E</strong>.",
          "stem": "Which TWO of the following statements are true of the researchers at London Zoo?",
          "options": [
            "A. They are hoping to expand the numbers of different corals being bred in laboratories.",
            "B. They want to identify corals that can cope well with the changed sea conditions.",
            "C. They are looking at ways of creating artificial reefs that corals could grow on.",
            "D. They are trying out methods that would speed up reproduction in some corals.",
            "E. They are investigating materials that might protect reefs from higher temperatures."
          ],
          "items": [
             // Gộp 2 câu thành 1 item có mảng qNums
            { "qNums": [22, 23], "answer": ["B", "D"] }
          ]
        },
        
        {
          "type": "gap",
          "title": "Questions 24-26",
          "instruction": "Complete the sentences below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
          "htmlContent": `
            <div style="padding:10px;">
                <p>24. Corals have a number of <span class="q-badge-inline">24</span><input type="text" class="gap-input" data-qnum="24" id="input-24"> which they use to collect their food.</p>
                <p>25. Algae gain <span class="q-badge-inline">25</span><input type="text" class="gap-input" data-qnum="25" id="input-25"> from being inside the coral.</p>
                <p>26. Increases in the warmth of the sea water can remove the <span class="q-badge-inline">26</span><input type="text" class="gap-input" data-qnum="26" id="input-26"> from coral.</p>
            </div>
          `,
          "items": [
            { "qNum": 24, "answer": "tentacles" },
            { "qNum": 25, "answer": "protection" },
            { "qNum": 26, "answer": "colour" }
          ]
        },

        // --- PASSAGE 3 QUESTIONS ---
        {
          "type": "matching",
          "title": "Questions 27-33",
          "instruction": "Match each statement with the correct expert, <strong>A, B or C</strong>.<br><br><strong>NB</strong> You may use any letter more than once.",
          "options": [
            "A. Martin Rees",
            "B. Daniel Wolpert",
            "C. Kathleen Richardson"
          ],
          "items": [
            { "qNum": 27, "text": "For our own safety, humans will need to restrict the abilities of robots.", "answer": "A" },
            { "qNum": 28, "text": "The risk of robots harming us is less serious than humans believe it to be.", "answer": "C" },
            { "qNum": 29, "text": "It will take many decades for robot intelligence to be as imaginative as human intelligence.", "answer": "B" },
            { "qNum": 30, "text": "We may have to start considering whether we are treating robots fairly.", "answer": "A" },
            { "qNum": 31, "text": "Robots are probably of more help to us on Earth than in space.", "answer": "B" },
            { "qNum": 32, "text": "The ideas in high-quality science fiction may prove to be just as accurate as those found in the work of mediocre scientists.", "answer": "A" },
            { "qNum": 33, "text": "There are those who look forward to robots developing greater intelligence.", "answer": "C" }
          ]
        },
        {
          "type": "matching",
          "title": "Questions 34-36",
          "instruction": "Complete each sentence with the correct ending, <strong>A-D</strong>, below.",
          "options": [
            "A. robots to explore outer space.",
            "B. advances made in machine intelligence so far.",
            "C. changes made to other planets for our own benefit.",
            "D. the harm already done by artificial intelligence."
          ],
          "items": [
            { "qNum": 34, "text": "Richardson and Rees express similar views regarding the ethical aspect of", "answer": "C" },
            { "qNum": 35, "text": "Rees and Wolpert share an opinion about the extent of", "answer": "B" },
            { "qNum": 36, "text": "Wolpert disagrees with Richardson on the question of", "answer": "D" }
          ]
        },
        {
          "type": "mcq",
          "title": "Question 37",
          "instruction": "Choose the correct letter, A, B, C or D.",
          "stem": "What point does Richardson make about fear of machines?",
          "options": [
            "A. It has grown alongside the development of ever more advanced robots.",
            "B. It is the result of our inclination to attribute human characteristics to non-human entities.",
            "C. It has its origins in basic misunderstandings about how inanimate objects function.",
            "D. It demonstrates a key difference between human intelligence and machine intelligence."
          ],
          "items": [{ "qNum": 37, "answer": "B" }]
        },
        {
          "type": "mcq",
          "title": "Question 38",
          "instruction": "Choose the correct letter, <strong>A, B, C or D</strong>.",
          "stem": "What potential advance does Rees see as a cause for concern?",
          "options": [
            "A. robots outnumbering people",
            "B. robots having abilities which humans do not",
            "C. artificial intelligence developing independent thought",
            "D. artificial intelligence taking over every aspect of our lives"
          ],
          "items": [{ "qNum": 38, "answer": "C" }]
        },
        {
          "type": "mcq",
          "title": "Question 39",
          "instruction": "Choose the correct letter, <strong>A, B, C or D</strong>.",
          "stem": "What does Wolpert emphasise in his response to the question about science fiction?",
          "options": [
            "A. how science fiction influences our attitudes to robots",
            "B. how fundamental robots are to the science fiction genre",
            "C. how the image of robots in science fiction has changed over time",
            "D. how reactions to similar portrayals of robots in science fiction may vary"
          ],
          "items": [{ "qNum": 39, "answer": "B" }]
        },
        {
          "type": "mcq",
          "title": "Question 40",
          "instruction": "Choose the correct letter, <strong>A, B, C or D</strong>.",
          "stem": "What is Richardson doing in her comment about reality and fantasy?",
          "options": [
            "A. warning people not to confuse one with the other",
            "B. outlining ways in which one has impacted on the other",
            "C. recommending a change of approach in how people view them",
            "D. explaining why scientists have a different perspective on them from other people"
          ],
          "items": [{ "qNum": 40, "answer": "C" }]
        }
      ]
    },

    // ==========================================================================
    // PHẦN WRITING (Tạo mới dạng chuẩn Cam để hoàn thiện file)
    // ==========================================================================
    writing: {
      task1: {
        title: "Writing Task 1",
        instruction: "You should spend about 20 minutes on this task.",
        // ⚠️ Thay link ảnh của bạn vào đây (Dùng tạm ảnh Bar Chart)
        image: "https://i.postimg.cc/Gp466wFd/Screenshot-2025-12-25-181323.jpg", 
        prompt: `The charts below give information about a public library in a town called Little Chalfont.
        
        Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`
      },
      task2: {
        title: "Writing Task 2",
        instruction: "You should spend about 40 minutes on this task.",
        prompt: `Some people have decided to reduce the number of times they fly every year or to stop flying altogether.
        
        Do you think the environmental benefits of this development outweigh the disadvantages for individuals and businesses?
        
        Give reasons for your answer and include any relevant examples from your own knowledge or experience.`
      }
    }
  }
};