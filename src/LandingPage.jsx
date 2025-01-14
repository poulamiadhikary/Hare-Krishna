import React from 'react'
import background from './assets/background.png'
import line from './assets/line.png'
import vasudev from './assets/vasudev-carrying-krishna.jpg'
import birth from './assets/krishna-birth.jpg'
import vrindavan from './assets/krishna-in-vrindavan.jpg'
import govardhan from './assets/govardhan-lifting.jpg'
import rasleela from './assets/rasleela.jpg'
import radhaKrishna from './assets/radha-krishna.jpg'
import kans from './assets/slaying-of-kans.jpg'
import mahabharat from './assets/mahabharat.jpg'
import gita from './assets/bhagavad-gita.jpg'
import dwarka from './assets/dwarka.jpg'

const LandingPage = () => {
    return (
        <>
            <div className='h-auto w-full overflow-hidden'>
                <div className='h-[100vh] w-full bg-gradient-to-b from-blue-700 to-blue-950 flex justify-center items-center'>
                    <div className='h-80% w-full relative flex justify-center items-center'>
                        <img className="absolute h-70% opacity-30 z-10 animate-rotate" src={background} alt="" />
                        <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-Junge font-extrabold z-30 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent'>Hare Krishna</h1>
                    </div>
                </div>


                <div className='h-auto w-full bg-blue-950 flex flex-col justify-center items-center'>

                    {/* birth of krishna */}

                    <div className=' h-9 w-80% sm:w-60% sm:h-14 md:w-70% md:h-20 lg:h-24 lg:w-80% xl:h-32 xl:w-70% xl:mb-3 overflow-hidden flex justify-center items-center'>
                        <img className='h-full w-full' src={line} alt="" />
                    </div>

                    <div className='h-120 sm:h-130 md:h-150 lg:h-165 w-80% flex flex-col justify-center items-center gap-3'>
                        <div className='h-25% sm:h-30% md:h-25% lg:h-30% xl:h-35% md:w-50% w-60% bg-black rounded-md overflow-hidden'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300 ease-in-out' src={vasudev} alt="" />
                        </div>
                        <h2 className='font-Junge sm:text-2xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent'>The Birth Of Lord Krishna</h2>
                        <p className='text-xxs md:text-s text-center text-white mb-3 lg:mb-10'>In the ancient city of Mathura, under the reign of King Kamsa, the people lived in fear and oppression. Kamsa, who had usurped the throne by imprisoning his father, King Ugrasena, was a tyrant, ruling with an iron fist. The city, once known for its prosperity and peace, was now shrouded in darkness and despair.

                            <br /><br /> One day, a prophecy was made that Kamsa would be killed by the eighth child of his sister, Devaki. Terrified by this prophecy, Kamsa imprisoned Devaki and her husband, Vasudeva, in a dungeon. He mercilessly killed each of their first six children as soon as they were born. However, the seventh child, Balarama, was miraculously transferred to the womb of Rohini, Vasudeva’s other wife, by divine intervention.

                            <br /><br />On the night of Krishna's birth, a series of miraculous events unfolded. The shackles binding Vasudeva's hands and feet fell off, the prison doors opened on their own, and the guards fell into a deep sleep. Taking advantage of this divine intervention, Vasudeva carried the newborn Krishna across the Yamuna River to the house of his friend, Nanda, in the village of Gokul. There, he exchanged Krishna with Nanda's newborn daughter and returned to the prison. When Kamsa learned of the birth, he attempted to kill the baby girl, but she transformed into Goddess Durga and warned him of his impending doom before disappearing.</p>
                        <div className='h-25% sm:h-30% w-60% lg:h-30% xl:h-35% md:h-25% md:w-50% bg-black rounded-md overflow-hidden'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300 ease-in-out ' src={birth} alt="" />
                        </div>

                        <p className='text-xxs md:text-s text-center text-white mb-3'>Thus, Lord Krishna was safely raised by Nanda and his wife, Yashoda, in the pastoral village of Gokul, away from the clutches of the evil Kansa.
                        </p>
                    </div>
                    <div className=' h-9 w-80% sm:w-60% sm:h-14 md:w-70% md:h-20 lg:h-24 lg:w-80% xl:h-32 xl:w-70% xl:mb-3 overflow-hidden flex justify-center items-center'>
                        <img className='h-full w-full' src={line} alt="" />
                    </div>

                    {/* krishna in vrindavan */}
                    <div className='h-80 sm:h-96 md:h-120 lg:h-130 w-80% flex flex-col justify-center items-center gap-3'>
                        <div className='h-35% sm:h-45% md:h-30% lg:h-40% xl:h-35% md:w-50% w-60% bg-black rounded-md overflow-hidden'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300 ease-in-out' src={vrindavan} alt="" />
                        </div>
                        <h2 className='font-Junge sm:text-2xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent'>Krishna's Early Life In Vrindavan</h2>

                        <p className='text-xxs md:text-s text-center text-white mb-3 lg:mt-5'>Krishna's early childhood in Vrindavan was filled with divine exploits and playful adventures. As a young boy, Krishna exhibited extraordinary powers and a magnetic charm that endeared him to everyone in the village. He was known for his mischievous pranks, particularly his love for butter, which earned him the nickname Makhan Chor or Butter Thief. Despite his playful nature, Krishna was always deeply compassionate and protective of his loved ones.

                            <br /><br />One of the most famous stories from Krishna's early life is his encounter with the serpent Kaliya. The Yamuna River, which flowed near Vrindavan, had become toxic due to the presence of this deadly serpent. The villagers were terrified, but Krishna, only a small boy at the time, leaped into the river and engaged in a fierce battle with Kaliya. He ultimately defeated the serpent, dancing on its many heads, forcing it to leave the river, thus restoring the purity of the Yamuna.

                            <br /><br /> Krishna's divine nature became evident through many such miracles, including lifting the Govardhan Hill to protect the villagers from the wrath of Indra, the king of the gods, who had sent torrential rains to destroy Vrindavan. Krishna held up the hill for seven days, providing shelter to all, and thus taught the villagers to worship nature and the Earth rather than fearing the wrath of the gods.
                        </p>
                    </div>

                    <div className=' h-9 w-80% sm:w-60% sm:h-14 md:w-70% md:h-20 lg:h-24 lg:w-80% xl:h-32 xl:w-70% xl:mb-3 overflow-hidden flex justify-center items-center'>
                        <img className='h-full w-full' src={line} alt="" />
                    </div>


                    {/* krishna's achievements in vrindavan */}
                    <div className='h-120 sm:h-130 md:h-165 w-80%  flex flex-col justify-center items-center py-4'>
                        <h2 className='font-Junge sm:text-2xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent'>Krishna's Achievements In Vrindavan</h2>
                        <p className='text-xxs md:text-s text-center text-white mt-3 lg:mt-5 mb-3 lg:mb-10'>As Krishna grew older, his influence and divine power became even more evident. Vrindavan was not only a place of his childhood but also the stage for many of his most renowned feats and divine pastimes.

                            <br /><br /> The Defeat of Putana
                            One of the early significant incidents in Vrindavan was Krishna's encounter with Putana, a demoness sent by Kamsa to kill him. Disguised as a beautiful woman, Putana tried to nurse the infant Krishna with poisoned milk. However, Krishna, aware of her intentions, sucked the life out of her while she was feeding him, revealing her true demonic form as she fell lifeless to the ground. This incident was one of the first demonstrations of Krishna's divine power, where he protected his community even as a young child.
                        </p>

                        <div className='h-35% sm:h-25% sm:w-40% md:h-20% lg:h-20% xl:h-35% md:w-50% w-60% bg-black rounded-md overflow-hidden mb-3'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300 ease-in-out' src={govardhan} alt="" />
                        </div>
                        <h4 className='font-Junge md:text-xl font-bold text-white text-sm'>The Lifting Of Govardhan</h4>
                        <p className='text-xxs md:text-s text-center text-white mt-3 lg:mt-5 mb-3 md:mb-10'>One of the most famous stories from Krishna's Vrindavan years is the lifting of Govardhan Hill. To protect the villagers of Vrindavan from a devastating storm sent by Indra, the god of rain, Krishna lifted the entire hill on his little finger. For seven days, the villagers took refuge under the hill, safe from the torrential rains. This event not only demonstrated Krishna's divine strength but also his role as the protector of his devotees. After the storm, Krishna instructed the villagers to worship Govardhan Hill instead of Indra, symbolizing a shift towards a more nature focused and earth centric form of worship.</p>

                        <div className='h-35% sm:h-25% sm:w-40% md:h-20% lg:h-20% xl:h-35% md:w-50% w-60% bg-black rounded-md overflow-hidden mb-3'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300 ease-in-out' src={rasleela} alt="" />
                        </div>
                        <h4 className='font-Junge md:text-xl font-bold text-white text-sm'>Rasleela</h4>
                        <p className='text-xxs md:text-s text-center text-white mt-3 lg:mt-5 mb-3'>Krishna's time in Vrindavan is also marked by the beautiful and spiritually significant Ras Leela. This divine dance, performed with the Gopis (cowherd girls), symbolizes the eternal love between the soul and the divine. The Gopis' unconditional love and devotion to Krishna are celebrated in this event, where Krishna multiplied himself to dance with each Gopi individually. The Ras Leela is often interpreted as a metaphor for the divine play of the universe and the individual soul’s relationship with God.</p>

                    </div>

                    <div className=' h-9 w-80% sm:w-60% sm:h-14 md:w-70% md:h-20 lg:h-24 lg:w-80% xl:h-32 xl:w-70% xl:mb-3 overflow-hidden flex justify-center items-center'>
                        <img className='h-full w-full' src={line} alt="" />
                    </div>

                    {/* radha krishna love */}
                    <div className='h-130 md:h-165 w-80% flex flex-col justify-center items-center xl:pt-10'>
                        <div className='h-15% sm:h-25% sm:w-40% md:h-15% lg:h-20% xl:h-25% md:w-50% w-60% bg-black rounded-md overflow-hidden mb-3'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300 ease-in-out' src={radhaKrishna} alt="" />
                        </div>

                        <h2 className='font-Junge sm:text-2xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-pink-300 to-pink-600 bg-clip-text text-transparent'>The Divine Love Of Radha and Krishna</h2>
                        <p className='text-xxs md:text-s text-center text-white mt-3 lg:mt-5 mb-3 lg:mb-7'>The Meeting of Radha and Krishna
                            Radha, the eternal consort of Lord Krishna, is considered the personification of pure love and devotion. Her first encounter with Krishna is described as a moment of recognition, where the two souls, though distinct, felt an immediate connection. Radha, a simple village girl from Vrindavan, was captivated by Krishna's divine charm, and their love blossomed from the very first meeting.
                        </p>

                        <h4 className='font-Junge md:text-xl font-bold text-white text-sm'>The Rasleela</h4>
                        <p className='text-xxs md:text-s text-center text-white mt-3 lg:mt-5 mb-3 md:mb-10'>One of the most famous stories of Radha and Krishna is the Rasa Lila, the divine dance that took place on a full moon night in the forests of Vrindavan. The Rasa Lila is not just a dance; it is the symbolic representation of the divine love between Radha, Krishna, and the Gopis (cowherd girls). During this dance, Krishna multiplies himself to dance with each Gopi, but Radha, being his supreme consort, holds a special place in his heart. Their love is depicted as transcendental, beyond the bounds of worldly relationships. </p>

                        <h4 className='font-Junge md:text-xl font-bold text-white text-sm'>Radha: The Embodiment Of Bhakti</h4>
                        <p className='text-xxs md:text-s text-center text-white mt-3 lg:mt-5 mb-3 md:mb-10'>Radha's love for Krishna is often seen as the highest form of devotion (Bhakti). Her longing for Krishna, her total surrender, and her unwavering love are exemplary. Stories describe how Radha’s love was so pure and intense that Krishna himself was drawn to her, becoming subservient to her love. Radha’s devotion represents the soul's eternal longing for union with the divine.</p>

                        <h4 className='font-Junge md:text-xl font-bold text-white text-sm'>The Pain Of Separation</h4>
                        <p className='text-xxs md:text-s text-center text-white mt-3 lg:mt-5 mb-3 md:mb-10'>The theme of separation (Viraha) is a significant aspect of Radha and Krishna’s story. Although they are eternally connected, their physical separation causes immense pain to Radha. This pain is symbolic of the soul's suffering in separation from God. The tales of Radha's yearning and her tears shed in Krishna’s absence add a profound depth to their love story, highlighting the intense emotional bond they share. </p>

                        <h4 className='font-Junge md:text-xl font-bold text-white text-sm'>Radha and Krishna's Eternal Bond</h4>
                        <p className='text-xxs md:text-s text-center text-white mt-3 lg:mt-5 mb-3 md:mb-10'>Though Radha and Krishna did not unite in the worldly sense, their bond is considered eternal. Radha is often regarded as Krishna’s energy (Shakti), and their love is beyond physical existence, representing the union of the soul with the divine. Many stories describe how even after leaving Vrindavan, Krishna’s thoughts were always with Radha, and she remained his foremost devotee, symbolizing the ideal of divine love.</p>

                    </div>

                    <div className=' h-9 w-80% sm:w-60% sm:h-14 md:w-70% md:h-20 lg:h-24 lg:w-80% xl:h-32 xl:w-70% overflow-hidden flex justify-center items-center'>
                        <img className='h-full w-full' src={line} alt="" />
                    </div>

                    {/* krishna in mathura */}
                    <div className='h-80 md:h-120 lg:h-140 xl:h-155 w-80% flex flex-col justify-center items-center md:pt-5 '>
                        <h2 className='font-Junge sm:text-2xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent'>Krishna in Mathura</h2>
                        <p className='text-xxs md:text-s text-center text-white mt-2 lg:mt-5 mb-3 md:mb-10'>After his formative years in Vrindavan, Krishna's destiny called him back to Mathura, where he would confront his tyrannical uncle, Kamsa. This period of Krishna's life marks his transition from a playful, divine child to a heroic youth destined to restore righteousness</p>

                        <div className='h-40% sm:h-25% sm:w-40% md:h-35% lg:h-35% xl:h-40% md:w-50% w-50% bg-black rounded-md overflow-hidden mb-3'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300 ease-in-out' src={kans} alt="" />
                        </div>

                        <h4 className='font-Junge md:text-xl font-bold text-white text-sm lg:mt-5'>The Slaying Of Kansa</h4>
                        <p className='text-xxs md:text-s text-center text-white mt-2 lg:mt-5 mb-3 md:mb-10'>Upon reaching Mathura, Krishna and his brother Balarama participated in a grand wrestling tournament
                            organized by Kamsa. Krishna defeated and killed the powerful wrestlers sent by Kamsa, and eventually confronted Kamsa himself. In a fierce battle, Krishna overpowered Kamsa and killed him, thus fulfilling the prophecy made at his birth. This act liberated the people of Mathura from Kamsa’s cruel rule and reinstated his grandfather Ugrasena as the king.
                            <br /><br />Krishna's victory over Kamsa also marked the beginning of his role as a protector and restorer of dharma
                            (righteousness). With Kamsa's death, peace and order were restored in Math</p>
                    </div>

                    <div className=' h-9 w-80% sm:w-60% sm:h-14 md:w-70% md:h-20 lg:h-24 lg:w-80% xl:h-32 xl:w-70% xl:mb-3 overflow-hidden flex justify-center items-center'>
                        <img className='h-full w-full' src={line} alt="" />
                    </div>

                    {/* krishna's role in mahabharat */}
                    <div className='h-130 md:h-155 lg:h-165 xl:h-170 w-80% flex flex-col justify-center items-center gap-2 md:pt-7 lg:pt-11 lg:pb-5'>
                        <h2 className='font-Junge sm:text-2xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent xl:mb-3'>Krishna's Role In Mahabharat</h2>
                        <div className='h-15% sm:h-25% sm:w-40% md:h-20% lg:h-30% xl:h-40% md:w-50% w-50% bg-black rounded-md overflow-hidden mb-3'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300 ease-in-out' src={mahabharat} alt="" />
                        </div>

                        <p className='text-xxs md:text-s text-center text-white lg:mt-5 mb-3 md:mb-10'>Krishna's involvement in the Mahabharata is one of the most significant chapters in his life, where he plays a central role as a guide, charioteer, and strategist.

                            <br /><br />The Friendship with the Pandavas
                            Krishna developed a close bond with the Pandavas, the five righteous brothers who were the rightful heirs to the throne of Hastinapura. Among them, Arjuna became Krishna's closest friend. Krishna provided guidance and support to the Pandavas during their time of hardship, and when it was time for the great battle of Kurukshetra, Krishna played the pivotal role of Arjuna's charioteer.</p>

                        <div className='h-35% sm:h-25% sm:w-40% md:h-35% lg:h-35% xl:h-40% md:w-50% w-50% rounded-md overflow-hidden mb-3'>
                            <img className='h-full w-full object-contain hover:scale-110 duration-300 ease-in-out' src={gita} alt="" />
                        </div>

                        <h4 className='font-Junge md:text-xl font-bold text-white text-sm lg:mt-5'>The Bhagavad Gita</h4>

                        <p className='text-xxs md:text-s text-center text-white lg:mt-5 mb-3 md:mb-10'>One of the most profound moments in the Mahabharata is the discourse of the Bhagavad Gita, delivered by Krishna to Arjuna on the battlefield of Kurukshetra. Faced with the moral dilemma of fighting against his own kin, Arjuna was paralyzed with doubt and despair. Krishna, in his role as a divine guide, revealed the truths of life, duty, and the nature of the soul. The Bhagavad Gita is not only a spiritual and philosophical guide but also a practical manual for living a righteous life. It addresses the complexities of duty, righteousness, and devotion, and is revered as one of the most important spiritual texts in Hinduism.

                            <br /><br />The Victory of Dharma
                            With Krishna's guidance, the Pandavas emerged victorious in the Kurukshetra war, defeating the Kauravas, who represented adharma (unrighteousness). Krishna's strategies, wisdom, and divine interventions were crucial in ensuring the victory of righteousness. The war, however, came at a great cost, resulting in immense loss of life and the end of an era. Krishna’s role in the Mahabharata highlights his commitment to upholding dharma, even in the face of great personal and emotional challenges.
                        </p>

                    </div>

                    <div className=' h-9 w-80% sm:w-60% sm:h-14 md:w-70% md:h-20 lg:h-24 lg:w-80% xl:h-32 xl:w-70% xl:mb-3 overflow-hidden flex justify-center items-center'>
                        <img className='h-full w-full' src={line} alt="" />
                    </div>

                    {/* krishna's life in dwarka */}
                    <div className='h-80 md:h-120 lg:h-140 w-80% flex flex-col justify-center items-center xl:pt-5'>
                        <h2 className='font-Junge sm:text-2xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent xl:mb-10 mb-2'>Krishna's Life in Dwarka</h2>
                        <div className='h-20% sm:h-25% sm:w-40% md:h-20% lg:h-30% xl:h-35% xl:w-40% md:w-50% w-50% bg-black rounded-md overflow-hidden mb-3 md:mb-5'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300 ease-in-out' src={dwarka} alt="" />
                        </div>

                        <p className='text-xxs md:text-s text-center text-white lg:mt-5 mb-8 md:mb-10'>After the events of the Mahabharata, Krishna established the city of Dwaraka on the western coast of India. Dwaraka became a prosperous and magnificent city, serving as the capital of the Yadava dynasty.

                            <br /><br />The Ruler of Dwaraka

                            As the ruler of Dwaraka, Krishna governed with wisdom, justice, and compassion. The city flourished under his leadership, becoming a hub of culture, commerce, and spirituality. Krishna's rule in Dwaraka is often seen as the ideal model of governance, where the king serves the people selflessly and ensures the welfare of all.</p>

                        <h4 className='font-Junge md:text-xl font-bold text-white text-sm lg:mt-5 sm:mb-3'>Krishna and Rukmini</h4>
                        <p className='text-xxs md:text-s text-center text-white lg:mt-5 mb-3 md:mb-10'>One of the significant events during Krishna's time in Dwaraka is his marriage to Rukmini. Rukmini, the princess of Vidarbha, was deeply in love with Krishna and sought his help to escape an unwanted marriage to Shishupala, a cruel king. Krishna, known for his valor and love for his devotees, rescued Rukmini and married her, much to the joy of her family and the people of Dwaraka. This event is celebrated as an example of divine love and the triumph of true devotion.</p>
                    </div>

                    <div className=' h-9 w-80% sm:w-60% sm:h-14 md:w-70% md:h-20 lg:h-24 lg:w-80% xl:h-32 xl:w-70% xl:mb-3 overflow-hidden flex justify-center items-center'>
                        <img className='h-full w-full' src={line} alt="" />
                    </div>

                    {/* krishna's later life and departure */}
                    <div className='h-48 md:h-80 w-80% flex flex-col justify-center items-center md:pt-6'>
                        <h2 className='font-Junge sm:text-2xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent xl:mb-9 mb-2 md:mb-5'>The Later Life and Departure of Krishna</h2>

                        <p className='text-xxs md:text-s text-center text-white lg:mt-5 mb-3 md:mb-10'>In the later years of his life, Krishna witnessed the decline of the Yadava dynasty. Internal conflicts and rivalries led to a devastating civil war among the Yadavas, resulting in the destruction of the once great dynasty.

                            <br /><br />The Mausala Parva
                            The destruction of the Yadavas is detailed in the Mausala Parva of the Mahabharata. After the war, Krishna, aware of the impending end of his earthly mission, retreated to the forest. It was there that he was accidentally shot by a hunter named Jara, who mistook Krishna’s foot for a deer. The hunter’s arrow pierced Krishna’s foot, and as he lay dying, Krishna forgave the hunter, accepting this event as the culmination of his earthly journey.

                            <br /><br />Krishna's departure marks the end of the Dvapara Yuga and the beginning of the Kali Yuga, the age of darkness and moral decline. His life, filled with divine acts, teachings, and the establishment of dharma, continues to inspire millions around the world.
                        </p>
                    </div>

                    <div className=' h-9 w-80% sm:w-60% sm:h-14 md:w-70% md:h-20 lg:h-24 lg:w-80% xl:h-32 xl:w-70% xl:mb-3 overflow-hidden flex justify-center items-center'>
                        <img className='h-full w-full' src={line} alt="" />
                    </div>

                    <div className='h-52 lg:h-96 w-80% mt-10 rounded-md border-2 border-yellow-400 flex flex-col justify-start items-center pt-4 mb-10 overflow-y-auto md:gap-4 lg:pt-8 xl:pt-12 xl:gap-8 scroll-hidden'>
                        <h2 className='text-white text-lg md:text-2xl lg:text-4xl xl:text-5xl font-Junge w-70% text-center border-b'>• Krishna Katha •</h2>
                        <div className='h-auto w-80% flex flex-col justify-center items-center px-4 py-5 lg:py-8 gap-4 border-b-2 border-yellow-400'>
                            <p className='text-sm lg:text-lg xl:text-2xl text-white font-Montserrat font-semibold'>The Birth Of Krishna</p>
                            <p className='text-xs lg:text-s xl:text-sm text-center text-white'>Krishna was born in the prison of Mathura to Devaki and Vasudeva at midnight on the Ashtami (eighth day) of Krishna Paksha in the month of Shravana. His birth was prophesied to end the tyrannical rule of his uncle, King Kansa.
                                <br></br><br></br>The day of Krishna's birth is celebrated as Janmashtami, one of the most popular Hindu festivals.
                            </p>
                        </div>

                        <div className='h-auto w-80% flex flex-col justify-center items-center px-4 py-5 lg:py-8 gap-4 border-b-2 border-yellow-400'>
                            <p className='text-sm lg:text-lg xl:text-2xl text-white font-Montserrat font-semibold text-center'>The Butter Thief (Makhan Chor)</p>
                            <p className='text-xs lg:text-s xl:text-sm text-center text-white'>As a child, Krishna was notorious for stealing butter from the homes of Gopis. His innocent mischief was adored by all, even those whose butter he stole.
                            </p>
                        </div>

                        <div className='h-auto w-80% flex flex-col justify-center items-center px-4 py-5 lg:py-8 gap-4 border-b-2 border-yellow-400'>
                            <p className='text-sm lg:text-lg xl:text-2xl text-white font-Montserrat font-semibold'>Lifting Of Govardhan Hill</p>
                            <p className='text-xs lg:text-s xl:text-sm text-center text-white'>To protect the people of Vrindavan from the wrath of Indra, the rain god, Krishna lifted the Govardhan Hill on his little finger and held it for seven days, providing shelter to everyone.
                            </p>
                        </div>

                        <div className='h-auto w-80% flex flex-col justify-center items-center px-4 py-5 lg:py-8 gap-4 border-b-2 border-yellow-400'>
                            <p className='text-sm lg:text-lg xl:text-2xl text-white font-Montserrat font-semibold'>The Defeat Of Kaliya Naag</p>
                            <p className='text-xs lg:text-s xl:text-sm text-center text-white'>Krishna subdued the multi-headed serpent Kaliya, who was poisoning the Yamuna River. He danced on Kaliya's heads until the serpent begged for mercy, promising to leave the river. <br></br><br></br>Krishna's dance on Kaliya's heads is symbolic of the victory of good over evil and is depicted in many forms of art and dance.
                            </p>
                        </div>

                        <div className='h-auto w-80% flex flex-col justify-center items-center px-4 py-5 lg:py-8 gap-4 border-b-2 border-yellow-400'>
                            <p className='text-sm lg:text-lg xl:text-2xl text-white font-Montserrat font-semibold'>Krishna and Sudama</p>
                            <p className='text-xs lg:text-s xl:text-sm text-center text-white'>Krishna's childhood friend Sudama visited him in Dwaraka with a handful of beaten rice as a gift. Though Sudama was poor, Krishna treated him with great honor and blessed him with wealth.
                                <br></br><br></br>This story highlights Krishna's deep love and respect for his devotees, regardless of their social status.
                            </p>
                        </div>

                        <div className='h-auto w-80% flex flex-col justify-center items-center px-4 py-5 lg:py-8 gap-4 border-b-2 border-yellow-400'>
                            <p className='text-sm lg:text-lg xl:text-2xl text-white font-Montserrat font-semibold'>The Curse Of Gandhari</p>
                            <p className='text-xs lg:text-s xl:text-sm text-center text-white'>After the Mahabharata war, Gandhari, the mother of the Kauravas, cursed Krishna that his own family would be destroyed, just as the Kauravas were. This curse eventually led to the destruction of the Yadava clan.
                            </p>
                        </div>

                        <div className='h-auto w-80% flex flex-col justify-center items-center px-4 py-5 lg:py-8 gap-4 border-b-2 border-yellow-400'>
                            <p className='text-sm lg:text-lg xl:text-2xl text-white font-Montserrat font-semibold'>The Shishupala Story</p>
                            <p className='text-xs lg:text-s xl:text-sm text-center text-white'>Shishupala, an enemy of Krishna, was granted 100 chances of forgiveness by Krishna due to his past life connection as Krishna's cousin. However, after repeatedly insulting Krishna, he was finally killed by Krishna using the Sudarshana Chakra during Yudhishthira's Rajasuya Yajna.
                                <br></br><br></br>This story teaches that while forgiveness is divine, persistent wrongdoing eventually leads to justice.
                            </p>
                        </div>

                        <div className='h-auto w-80% flex flex-col justify-center items-center px-4 py-5 lg:py-8 gap-4 border-b-2 border-yellow-400'>
                            <p className='text-sm lg:text-lg xl:text-2xl text-white font-Montserrat font-semibold text-center'>The Friendship Of Lord Krishna and Arjuna</p>
                            <p className='text-xs lg:text-s xl:text-sm text-center text-white'>The bond between Krishna and Arjuna goes beyond friendship; it represents the relationship between the divine and the human soul. Krishna’s guidance to Arjuna during the Mahabharata war, particularly through the Bhagavad Gita, is the cornerstone of their relationship, providing spiritual teachings that resonate to this day.
                                <br></br><br></br>Krishna's role as a friend and guide is central to the philosophy of Bhakti Yoga, where the devotee forms a personal relationship with the divine.
                            </p>
                        </div>

                        <div className='h-auto w-80% flex flex-col justify-center items-center px-4 py-5 lg:py-8 gap-4 border-b-2 border-yellow-400'>
                            <p className='text-sm lg:text-lg xl:text-2xl text-white font-Montserrat font-semibold text-center'>The Narkasura Incident</p>
                            <p className='text-xs lg:text-s xl:text-sm text-center text-white'>Krishna, along with his wife Satyabhama, killed the demon Narakasura who had captured 16,100 women. After defeating Narakasura, Krishna married all the women to restore their honor, treating them with respect and care.
                                <br></br><br></br>This story is commemorated during the festival of Diwali, specifically on Naraka Chaturdashi, symbolizing the victory of good over evil and the protection of women's dignity.
                            </p>
                        </div>

                        <div className='h-auto w-80% flex flex-col justify-center items-center px-4 py-5 lg:py-8 gap-4 border-b-2 border-yellow-400'>
                            <p className='text-sm lg:text-lg xl:text-2xl text-white font-Montserrat font-semibold text-center'>The Divine Friendship of Krishna and Draupadi</p>
                            <p className='text-xs lg:text-s xl:text-sm text-center text-white'>The relationship between Krishna and Draupadi symbolizes the ideal bond between the divine and the devotee. Krishna's protection of Draupadi in her time of need is often interpreted as the divine assurance that God will always come to the aid of those who call upon him with true devotion and faith.
                            </p>
                        </div>

                        <div className='h-auto w-80% flex flex-col justify-center items-center px-4 py-5 lg:py-8 gap-4 border-b-2 border-yellow-400'>
                            <p className='text-sm lg:text-lg xl:text-2xl text-white font-Montserrat font-semibold text-center'>The Disrobing of Draupadi</p>
                            <p className='text-xs lg:text-s xl:text-sm text-center text-white'>The most famous incident involving Krishna and Draupadi occurred during the infamous dice game at the Kaurava court, where Draupadi was humiliated and disrobed in front of the assembly. When her husbands, the Pandavas, and the other elders in the court failed to protect her, Draupadi called upon Krishna with utmost faith. In response, Krishna miraculously provided an endless sari, preventing her disrobing and saving her honor.
                                <br></br><br></br>his divine intervention is one of the most powerful examples of Krishna's role as a savior and friend, symbolizing the protection that faith in the divine can offer.
                            </p>
                        </div>

                        <div className='h-auto w-80% flex flex-col justify-center items-center px-4 py-5 lg:py-8 gap-4'>
                            <p className='text-sm lg:text-lg xl:text-2xl text-white font-Montserrat font-semibold text-center'>Krishna's Final Moments</p>
                            <p className='text-xs lg:text-s xl:text-sm text-center text-white'>After the destruction of the Yadava clan, Krishna retired to the forest, where he was accidentally shot by a hunter named Jara. Krishna forgave the hunter and ascended to his divine abode, ending his earthly incarnation.
                                <br></br><br></br>Krishna's death is said to mark the end of the Dvapara Yuga and the beginning of the Kali Yuga, symbolizing the cyclical nature of time in Hindu belief.
                            </p>
                        </div>
                    </div>

                    <div className=' h-9 w-80% sm:w-60% sm:h-14 md:w-70% md:h-20 lg:h-24 lg:w-80% xl:h-32 xl:w-70% xl:mb-3 overflow-hidden flex justify-center items-center'>
                        <img className='h-full w-full' src={line} alt="" />
                    </div>

                </div>

                <div className='h-[100vh] w-full bg-gradient-to-b from-blue-950 to-blue-700 flex justify-center items-center'>
                    <div className='h-80% w-full relative flex justify-center items-center'>
                        <img className="absolute h-70% opacity-30 z-10 animate-rotate" src={background} alt="" />
                        <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-Junge font-extrabold z-30 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent'>Hare Krishna</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
