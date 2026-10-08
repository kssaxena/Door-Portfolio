import { AnimatePresence, motion } from "framer-motion";
import { useParallax } from "../../components/hooks/ParallaxImage";
import { useRef, useState } from "react";
import ButtonWrapper from "../../components/Button";
import { mappingData2 } from "../../constants/constants";
import { FiX } from "react-icons/fi";

const InstalledDoorSection = () => {
  const imageRef = useRef(null);
  const { y, scale } = useParallax(imageRef);

  const studies = [
    {
      type: "Entrance Door Study",

      title: "The entrance sets the character of the home.",

      paragraphs: [
        "A door is more than a point of entry; it establishes the first impression of a space. The entrance shown here has been considered as an architectural element rather than simply a functional opening.",

        "Its proportions, dark timber finish, substantial framing, and restrained hardware create a sense of permanence. The surrounding warm lighting further emphasizes the depth and texture of the door while connecting it naturally with the interior architecture.",

        "The composition demonstrates how an entrance can introduce the character of an entire residence before the visitor has even entered the space.",
      ],
    },

    {
      type: "Door Type Study",

      title: "A study of proportion, movement, and presence.",

      paragraphs: [
        "The door belongs to the category of contemporary luxury entrance doors, where scale and proportion play an important role in establishing presence.",

        "Large-format doors are particularly effective in residential architecture because they create a stronger visual relationship between the entrance and the surrounding façade. Depending on the architectural requirement, this approach can be executed through pivot, hinged, or double-leaf configurations.",

        "The choice of opening mechanism ultimately depends on available space, structural requirements, desired movement, and the visual character intended for the entrance.",
      ],
    },

    {
      type: "Material & Finish Study",

      title: "Material gives the entrance its identity.",

      paragraphs: [
        "The warm timber surface creates the primary visual identity of this entrance. Natural and engineered wood finishes are frequently used in luxury doors because they introduce warmth into otherwise rigid architectural compositions.",

        "The darker framing creates a strong contrast against the timber panel while allowing the door to visually connect with the surrounding interior elements.",

        "Material selection should also consider exposure, maintenance, dimensional stability, and the long-term performance expected from the entrance.",
      ],
    },

    {
      type: "Architectural Detailing Study",

      title: "Every detail contributes to the composition.",

      paragraphs: [
        "The detailing of a premium door is intentionally restrained. Rather than relying on excessive ornamentation, the design uses clean geometry, controlled proportions, and carefully positioned hardware.",

        "Recessed elements and elongated handles introduce vertical emphasis, visually extending the height of the door and reinforcing its monumental character.",

        "The relationship between the door leaf, frame, surrounding wall, flooring, and lighting is equally important. Together, these elements create a single architectural composition.",
      ],
    },

    {
      type: "Security & Performance Study",

      title: "Security engineered into the architecture.",

      paragraphs: [
        "A luxury entrance must perform beyond its visual appearance. Structural strength, locking mechanisms, weather resistance, insulation, and hardware reliability are essential components of the overall door system.",

        "Modern entrance doors can incorporate multi-point locking systems, reinforced cores, concealed hinges, security cylinders, smart access controls, and sensor-based technologies.",

        "The objective is to integrate these systems discreetly so that security becomes part of the architecture rather than competing with it.",
      ],
    },

    {
      type: "Contemporary Entrance Study",

      title: "The modern entrance is an architectural statement.",

      paragraphs: [
        "Contemporary door design increasingly treats the entrance as an extension of the architecture. Large surfaces, minimal hardware, concealed technology, and carefully selected materials allow the door to become part of the overall spatial language.",

        "The result is an entrance that feels intentional rather than decorative — one that balances functionality, security, craftsmanship, and visual simplicity.",

        "Ultimately, the best entrance doors are those that remain visually relevant long after the first impression has passed.",
      ],
    },
  ];

  const Card = () => {
    const [selected, setSelected] = useState(null);
    return (
      <div className="flex flex-col justify-center items-center gap-5">
        {mappingData2.map((data, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-row-reverse justify-center items-center border-[0.2px] border-neutral-800 px-2 lg:px-10 py-5 gap-5`}
            // className={`flex justify-center items-center border-[0.2px] border-neutral-800 px-2 lg:px-10 py-5 gap-5 ${index % 2 ? "lg:flex-row flex-col" : "flex-row-reverse"}`}
          >
            <div className="w-full lg:w-[30%] flex flex-col justify-start items-start gap-10 h-full">
              <p className="text-xs uppercase ">{data.heading}</p>
              <h1 className="text-[40px] leading-10 font-instrumentRegular tracking-tighter font-extralight">
                {data.quotation}
              </h1>
              <div className="border-[0.5px] w-10" />
              <p>{data.description}</p>
              <ButtonWrapper
                label={"view study"}
                onClick={() => setSelected(data)}
              />
            </div>
            <div
              className="w-full lg:w-[70%] h-full overflow-hidden rounded-sm bg-red-400 justify-center items-center flex"
              //   ref={imageRef}
            >
              <div className="w-full h-full">
                <motion.img
                  //   style={{ y, scale }}
                  className="w-full h-full object-cover"
                  src={data.image}
                />
              </div>
            </div>
          </div>
        ))}
        <AnimatePresence>
          {selected && (
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-screen w-full flex justify-center items-center z-50 "
            >
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setSelected(null);
                  }
                }}
              >
                <div className="relative grid max-h-[90vh] w-full max-w-5xl overflow-auto bg-[#f5f2ed] md:grid-cols-2">
                  {/* CLOSE */}

                  <button
                    onClick={() => setSelected(null)}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-black/70 text-white"
                  >
                    <FiX />
                  </button>

                  {/* IMAGE */}

                  <div className="min-h-[400px] bg-[#dedbd5]">
                    <img
                      src={selected.image}
                      alt={selected.heading}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-black">
                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 lg:gap-3">
                      <div className="mb-4 text-[9px] uppercase tracking-[0.3em] text-[#9b7840]">
                        {selected.heading}
                      </div>
                      <h2 className="text-[46px] lg:text-[80px] leading-10 lg:leading-20 font-instrumentRegular tracking-tighter font-extralight">
                        {selected.quotation}
                      </h2>
                      <div className="mt-3 text-xs text-[#1d1a17]/45">
                        {selected.description}
                      </div>
                      <div className="my-2 h-px bg-[#1d1a17]/10" />
                      <div className="text-black leading-6 text-sm">
                        {selected.paragraphs.map((i, index) => (
                          <p key={index}>{i}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* INFO */}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-end w-fit px-5 lg:px-40 py-20 gap-5 lg:gap-10 bg-[#26211C] text-[#F6F2EA]">
      <h1 className="text-[36px] lg:text-[56px] leading-10 lg:leading-12 font-instrumentRegular tracking-tighter font-extralight indent-8">
        Collections engineered for{" "}
        <span className="font-instrumentItalic text-[#6A4F3B]">
          security, elegance,
        </span>{" "}
        <br /> and longevity.
      </h1>
      <Card />
    </div>
  );
};

export default InstalledDoorSection;
